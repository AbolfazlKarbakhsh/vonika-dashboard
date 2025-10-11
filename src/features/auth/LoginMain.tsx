import useDocumentTitle from "@/hooks/ui/useDocumentTitle";
import LoginHeader from "./components/LoginHeader";
import LoginBody from "./components/LoginBody";

function LoginMain() {
  useDocumentTitle("ورود به کارتابل");

  return (
    <>
      <LoginHeader />
      <LoginBody />
    </>
  )
}

export default LoginMain