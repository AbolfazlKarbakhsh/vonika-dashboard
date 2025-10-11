import useTypeWriter from "@/hooks/ui/animations/writeText";
import logo from "@/assets/img/logo.png"
function LoginHeader() {
  // const welcomeText = useTypeWriter("خوش آمدید", 0);
  const descriptionText = useTypeWriter("   لطفا برای وارد شدن اطلاعات زیر را وارد کنید.", 50);

  return (
    <div className="flex flex-col items-center text-center">
      <img src={logo} className="w-20" />
         <h2 className="text-xl font-semibold text-center mb-2">ورود به حساب کاربری</h2>

      <p className="text-balance text-muted-foreground text-sm">
        {descriptionText}
      </p>
      
      <div className="bg-primary h-1 w-12 mt-4 rounded-full"></div>
    </div>

  )
}

export default LoginHeader