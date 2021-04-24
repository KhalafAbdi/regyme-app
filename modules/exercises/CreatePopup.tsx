import Popup from '../../components/Popup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { useCreateExercise } from '../../hooks/use-exercise'
import TextInput from '../../components/TextInput'
import SetsInput from '../../components/SetsInput'

interface Props {
  onClosePopup: () => void
}

const CreatePopup: React.FC<Props> = ({ onClosePopup }) => {
  const { register, handleSubmit, formState } = useForm<any>()
  const [sets, setSets] = useState([8, 8, 8])
  const createExerciseRequest = useCreateExercise()

  const onSave: SubmitHandler<any> = async (formData) => {
    const payload = {
      ...formData,
      sets,
    }

    const wasCreated = await createExerciseRequest(payload)
    if (wasCreated) {
      onClosePopup()
    }
  }

  const onCancel = () => {
    console.log('cancle')
    onClosePopup()
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
  )
}

export default CreatePopup
