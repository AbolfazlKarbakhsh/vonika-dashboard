import { Outlet } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card";
import loginImage from "@/assets/img/login-bg.png";


export default function IdentityLayout() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden p-0 shadow-xs">
            <CardContent className="grid p-0 md:min-h-[500px] md:grid-cols-2">
              <div className="my-auto p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <Outlet />
                </div>
              </div>
              <div className="relative hidden bg-muted md:block">
                <img
                  src={loginImage}
                  alt="تصویر صفحه ورود"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
