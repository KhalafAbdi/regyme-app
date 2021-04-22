type PopupProps = {
  children: JSX.Element
  onSave: Function
  onCancel: Function
  onReset: Function
  type: String
  text: String
  hasData: boolean
}

const Popup = ({
  type,
  text,
  onSave,
  onCancel,
  onReset,
  hasData,
  children,
}: PopupProps) => {
  return (
    <div className="absolute top-0 left-0 bg-gray-800 bg-opacity-25 w-full h-full">
      <div className="mt-24 bg-gray-100 w-11/12 mx-auto flex flex-col rounded-sm max-w-sm">
        <div className="flex justify-between ">
          <div className="px-3 py-3 flex flex-col leading-none">
            <span className="text-opacity-25 text-lg text-gray-800">
              {type}
            </span>
            <span className="font-semibold text-3xl">{text}</span>
          </div>
          <button
            className="px-3 py-3 flex items-start"
            onClick={() => onCancel()}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 bg-white px-3 py-2">{children}</div>
        <div className="flex justify-between px-3 py-2">
          <div>
            {hasData && (
              <button
                className="px-5 py-2 rounded-sm text-start"
                onClick={() => onReset()}
              >
                Reset
              </button>
            )}
          </div>
          <div className="flex space-x-2">
            <button
              className="bg-gray-800 bg-opacity-5 px-5 py-2 rounded-sm underline"
              onClick={() => onCancel()}
            >
              Cancle
            </button>
            {onSave && (
              <button
                className="bg-gray-800 text-white px-5 py-2 rounded-sm"
                onClick={() => onSave()}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
