import  { useState } from "react";
import { useForm } from "react-hook-form";
import { IconEye, IconEyeOff, IconLock, IconPhone } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Input, InputWrapper } from "@/components/ui/input";

type FormValues = {
  mobile: string;
  password: string;
};

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  const onSubmit = (data: FormValues) => {
    alert(`ورود موفق!\nشماره موبایل: ${data.mobile}\nرمز عبور: ${data.password}`);
  };

  return (
    <>
      <style>{`
        @keyframes errorPop {
          0% { transform: translateY(-8px) scale(0.96); opacity: 0; }
          60% { transform: translateY(2px) scale(1.03); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        .error-message {
          animation: errorPop 0.35s cubic-bezier(.2,.9,.3,1);
          font-weight: 500;
          transform-origin: center;
        }
      `}</style>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 "
      >

        {/* Mobile */}
        <div>
          <label className="block mb-1 font-medium">شماره موبایل</label>
          <InputWrapper>
            <IconPhone />
            <Input
              {...register("mobile", {
                required: "لطفا شماره موبایل خود را وارد کنید",
                pattern: {
                  value: /^(\+98|0)?9\d{9}$/,
                  message: "لطفا یک شماره موبایل معتبر وارد کنید",
                },
              })}
              placeholder="مثلاً 09123456789"
              className="rounded-none bg-white"
            />
          </InputWrapper>

          {errors.mobile && (
            <p className="text-xs text-red-500 mt-1 error-message">
              {errors.mobile.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">رمز عبور</label>
          <InputWrapper>
            <IconLock />
            <Input
              type={isVisible ? "text" : "password"}
              {...register("password", {
                required: "لطفا رمز عبور خود را وارد کنید",
                minLength: {
                  value: 4,
                  message: "رمز عبور باید حداقل ۴ کاراکتر باشد",
                },
              })}
              className="rounded-none bg-white"
              placeholder="رمز عبور خود را وارد کنید"
            />
            <button
              type="button"
              onClick={toggleVisibility}
              aria-label={isVisible ? "Hide password" : "Show password"}
            >
              {isVisible ? (
                <IconEyeOff className="size-4" />
              ) : (
                <IconEye className="size-4" />
              )}
            </button>
          </InputWrapper>

          {errors.password && (
            <p className="text-xs text-red-500 mt-1 error-message">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full mt-3">
          ورود
        </Button>
      </form>
    </>
  );
}
