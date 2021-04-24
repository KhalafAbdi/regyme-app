import Stepper from './Stepper'

type SetsProps = {
  sets: Array<any>
  onSetsChange: Function
  onRepsChange: Function
}

const Sets = ({ sets, onSetsChange, onRepsChange }: SetsProps) => {
  const addSet = () => {
    if (sets.length < 6) {
      const newArr = [...sets, 8]

      onSetsChange(newArr)
    }
  }

  const removeSet = () => {
    if (sets.length > 1) {
      const newArr = [...sets]
      newArr.pop()

      onSetsChange(newArr)
    }
  }

  const SetContainer = () => {
    return (
      <div className="flex space-x-1">
        <button
          className="mt-1 px-2 py-1 bg-gray-800 bg-opacity-5"
          onClick={addSet}
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
        <button
          className="mt-1 px-2 py-1 bg-gray-800 bg-opacity-5"
          onClick={removeSet}
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
  return (
    <div>
      <span className="font-semibold">Sets</span>

      <div className="p-2 bg-gray-800 bg-opacity-5 flex justify-center space-x-3 rounded-sm">
        {sets.map((_, index) => {
          return (
            <Stepper
              key={index}
              value={sets[index]}
              onChange={onRepsChange(index)}
            />
          )
        })}
      </div>
      <SetContainer />
    </div>
  )
}

export default Sets
