
import Button from "../Elements/Button";

const RegisterPage = () => {
  return (
    <form action="#" method="POST" className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900">
          Full Name
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            autoComplete="name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            required
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
            autoComplete="current-password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900">
            Confirm Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            required
            autoComplete="current-password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
      <Button classname="bg-blue-600" type="submit">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default RegisterPage;
