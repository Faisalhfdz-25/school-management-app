import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, type } = props;
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {type === "login"
            ? "Sign in to your account"
            : "Create a new account"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="bg-white shadow-md rounded-xl p-8">{children}</div>

        <p className="mt-10 text-center text-sm text-gray-500">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
            {" "}
            
            {type === "login" ? (
              <Link
                to="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Register
              </Link>
            ) : (
              <Link
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login
              </Link>
            )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
