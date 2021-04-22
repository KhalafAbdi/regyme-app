import { useState } from 'react'
import PrivatePageLayout from '../../components/layouts/PrivatePageLayout'
import Popup from '../../components/Popup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TextInput } from '../../components'
import SetsInput from '../../components/SetsInput'
import { useExercises, useCreateExercise } from '../../hooks/use-exercise'
import { ExerciseType } from '../../lib/types'
import Button from '../../components/Button'

const Exercises = () => {
  const { register, handleSubmit, formState } = useForm<any>()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [sets, setSets] = useState([8, 8, 8])
  const { exercises, error } = useExercises()
  const createExerciseRequest = useCreateExercise()

  const openPopup = () => {
    if (!isPopupOpen) {
      console.log('opening popup')
      setIsPopupOpen(true)
    }
  }

  const closePopup = () => {
    if (isPopupOpen) {
      console.log('closing popup')
      setIsPopupOpen(false)
    }
  }

  const onSave: SubmitHandler<any> = async (formData) => {
    const payload = {
      ...formData,
      sets,
    }

    const wasCreated = await createExerciseRequest(payload)
    if (wasCreated) {
      closePopup()
    }
  }

  const onCancel = () => {
    console.log('cancle')
    closePopup()
  }

  const onReset = () => {
    console.log('Reset')
  }

  const onRepsChange = (index: number) => {
    console.log('sets changed')
    return (value: number) => {
      const newArr = [...sets]
      newArr[index] = value

      setSets(newArr)
    }
  }

  const onSetsChange = (arr: Array<number>) => {
    setSets(arr)
  }

  return (
    <PrivatePageLayout>
      <div>
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
            <Button label="Create" onClick={openPopup} type="primary" />
          </div>
          <div className="mt-5 flex flex-col space-y-1 text-xs">
            {exercises && exercises.length > 0 ? (
              exercises.map((exercise: ExerciseType) => {
                return (
                  <div
                    key={exercise._id}
                    className="bg-white px-3 py-2 flex justify-between"
                  >
                    <span>{exercise.name}</span>
                    <span className="text-gray-400">
                      {exercise.sets.length} Sets
                    </span>
                  </div>
                )
              })
            ) : (
              <div>Nothing</div>
            )}
          </div>
        </div>
        {isPopupOpen && (
          <Popup
            type="Create"
            text="Exercise"
            onSave={handleSubmit(onSave)}
            onCancel={onCancel}
            onReset={onReset}
            hasData={false}
          >
            <div className="flex flex-col space-y-2">
              <TextInput
                label="Name"
                inputRef={register('name')}
                errors={formState.errors?.name}
              />

              <SetsInput
                sets={sets}
                onSetsChange={onSetsChange}
                onRepsChange={onRepsChange}
              />
            </div>
          </Popup>
        )}
      </div>
    </PrivatePageLayout>
  )
}

export default Exercises
