import { useEffect, useState } from 'react'
import { useExercises } from '../../hooks/use-exercise'
import { ExerciseType } from '../../lib/types'

interface Props {
  searchInput: string
}

const List: React.FC<Props> = ({ searchInput }) => {
  const { exercises, error } = useExercises()
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    if (searchInput == '') {
      return setFilteredList(exercises)
    }

    const lowerCaseSearch = searchInput.toLowerCase()
    const newArr = exercises.filter((exercise: ExerciseType) =>
      exercise.name.toLowerCase().startsWith(lowerCaseSearch)
    )
    setFilteredList(newArr)
  }, [searchInput])

  useEffect(() => {
    if (exercises) {
      setFilteredList(exercises)
    }
  }, [exercises])

  return (
    <div className="mt-5 flex flex-col space-y-1 text-xs">
      {filteredList &&
        filteredList.map((exercise: ExerciseType) => {
          return (
            <div
              key={exercise._id}
              className="bg-white px-3 py-2 flex justify-between"
            >
              <span>{exercise.name}</span>
              <span className="text-gray-400">{exercise.sets.length} Sets</span>
            </div>
          )
        })}
    </div>
  )
}

export default List
