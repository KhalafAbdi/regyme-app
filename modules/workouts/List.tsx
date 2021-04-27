import { useEffect, useState } from 'react'
import { useWorkouts } from '../../hooks/useWorkouts'
import { Workout } from '../../lib/types'

interface Props {
  searchInput: string
}

const List: React.FC<Props> = ({ searchInput }) => {
  const { workouts, error } = useWorkouts()
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    if (searchInput == '') {
      return setFilteredList(workouts)
    }

    const lowerCaseSearch = searchInput.toLowerCase()
    const newArr = workouts.filter((exercise: Workout) =>
      exercise.name.toLowerCase().startsWith(lowerCaseSearch)
    )
    setFilteredList(newArr)
  }, [searchInput])

  useEffect(() => {
    if (workouts) {
      setFilteredList(workouts)
    }
  }, [workouts])

  return (
    <div className="mt-5 flex flex-col space-y-1 text-xs">
      {filteredList &&
        filteredList.map((workout: Workout) => {
          return (
            <div
              key={workout._id}
              className="bg-white px-3 py-2 flex justify-between"
            >
              <span>{workout.name}</span>
            </div>
          )
        })}
    </div>
  )
}

export default List
