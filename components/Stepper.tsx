type StepperProps = {
  value: number
  onChange: Function
}

const Stepper = ({ value, onChange }: StepperProps) => {
  const increment = () => {
    const newValue = value + 1
    onChange(newValue)
  }

  const decrement = () => {
    const newValue = value - 1
    onChange(newValue)
  }

  return (
    <div className="p-1 bg-white shadow-sm flex flex-col">
      <button
        className="p-1 bg-gray-800 bg-opacity-5 text-gray-800 shadow-sm"
        onClick={increment}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="text-center py-1 font-semibold">
        <span>{value}</span>
      </div>
      <button
        className="p-1 bg-gray-800 bg-opacity-5 text-gray-800 shadow-sm"
        onClick={decrement}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default Stepper
