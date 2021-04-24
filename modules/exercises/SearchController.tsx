type SearchProps = {
  value: string
  onChange: Function
}

const SearchController = ({ value, onChange }: SearchProps) => {
  const handleOnChange = (e: any) => {
    onChange(e.target.value)
  }

  return (
    <div className="h-[63.6px] pt-5 flex flex-col justify-end">
      <div className="border-b-2 border-gray-200 flex items-center">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="flex-1">
          <input
            value={value}
            onChange={handleOnChange}
            className="bg-transparent w-full h-10 focus:outline-none"
          />
        </span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  )
}

export default SearchController
