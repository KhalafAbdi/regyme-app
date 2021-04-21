import PrivatePageLayout from '../../components/layouts/PrivatePageLayout'

const Exercises = () => {
  return (
    <PrivatePageLayout>
      <div className="px-5 max-w-2xl">
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
              <input className="bg-transparent w-full h-10 focus:outline-none" />
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
        <div className="mt-5 flex justify-between items-end">
          <span className="text-xl leading-none">Exercises</span>
          <button className="bg-gray-800 text-white px-3 py-1 rounded-sm">
            Create
          </button>
        </div>
        <div className="mt-5 flex flex-col space-y-1 text-xs">
          <div className="bg-white px-3 py-2 flex justify-between">
            <span>Name</span>
            <span className="text-gray-400">Reps</span>
          </div>
          <div className="bg-white px-3 py-2 flex justify-between">
            <span>Name</span>
            <span className="text-gray-400">Reps</span>
          </div>
          <div className="bg-white px-3 py-2 flex justify-between">
            <span>Name</span>
            <span className="text-gray-400">Reps</span>
          </div>
          <div className="bg-white px-3 py-2 flex justify-between">
            <span>Name</span>
            <span className="text-gray-400">Reps</span>
          </div>
        </div>
      </div>
    </PrivatePageLayout>
  )
}

export default Exercises
