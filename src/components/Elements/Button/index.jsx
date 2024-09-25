/* eslint-disable react/prop-types */

const Button = (props) => {
    const {
        children,
        classname = "bg-blue-600",
        onClick = () => {},
        type = "button",
    } = props;
  return (
    <button className={`flex w-full justify-center rounded-md ${classname} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button