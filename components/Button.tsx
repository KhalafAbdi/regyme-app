type ButtonType = {
  text: string
  action: Function
}

const Button = ({ text, action }: ButtonType) => {
  return (
    <div className="flex flex-shrink-0 w-full">
      <button
        onClick={() => action()}
        className="bg-gray-800 px-3 py-2 rounded text-gray-50 w-full text-center sm:w-auto focus:outline-none"
      >
        {text}
      </button>
    </div>
  )
}

export default Button
