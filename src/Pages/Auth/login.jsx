import LoginPage from "../../components/Fragments/FormLogin";
import AuthLayout from "../../components/Layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout type="login">
        <LoginPage />
    </AuthLayout>
  );
};

export default Login;
