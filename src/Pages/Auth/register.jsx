import RegisterPage from "../../components/Fragments/FormRegister"
import AuthLayout from "../../components/Layouts/AuthLayout"

const Register = () => {
  return (
    <AuthLayout type="register">
        <RegisterPage />
    </AuthLayout>
  )
}

export default Register