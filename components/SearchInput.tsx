import SearchIcon from './icons/SearchIcon'
import RemoveIcon from './icons/RemoveIcon'

interface Props {
  value: string
  onChange: (value: string) => void
}

const SearchController: React.FC<Props> = ({ value, onChange }) => {
  const handleOnChange = (e: any) => {
    onChange(e.target.value)
  }

  const handleInputReset = () => {
    onChange('')
  }

  return (
    <div className="h-[66px] pt-5 flex flex-col justify-end">
      <div className="border-b-2 border-gray-200 flex items-center">
        <SearchIcon />
        <span className="ml-2 flex-1">
          <input
            value={value}
            onChange={handleOnChange}
            className="bg-transparent w-full h-10 focus:outline-none"
          />
        </span>
        {value && (
          <button onClick={handleInputReset}>
            <RemoveIcon />
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchController
