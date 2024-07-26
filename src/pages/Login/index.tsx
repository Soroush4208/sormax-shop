import Login from "@/components/login/Login";
import DynamicThemeFormProvider from "@/themes/DynamicThemeFormProvider";

function LoginPage() {
  return (
    <DynamicThemeFormProvider>
      <Login />
    </DynamicThemeFormProvider>
  );
}

export default LoginPage;
