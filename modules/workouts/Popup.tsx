import Popup from '../../components/Popup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { useCreateWorkout } from '../../hooks/useWorkouts'
import { useExercises } from '../../hooks/useExercises'
import { useSignedUrl, useUploadtoS3 } from '../../hooks/useAws'
import TextInput from '../../components/TextInput'
import SetsInput from '../../components/SetsInput'
import MultiSelect from '../../components/MultiSelect'
import ImageUpload from '../../components/ImageUpload'

interface Props {
  onClosePopup: () => void
}

const CreatePopup: React.FC<Props> = ({ onClosePopup }) => {
  const { register, handleSubmit, formState } = useForm<any>()
  const [selected, setSelected] = useState(null)
  const createWorkout = useCreateWorkout()
  const createSignedUrl = useSignedUrl()
  const { exercises } = useExercises()

  const onSave: SubmitHandler<any> = async (formData) => {
    console.log(formData)

    const { signeRequest, url } = await createSignedUrl({
      filename: formData.picture[0].name,
      filetype: formData.picture[0].type,
    })

    await useUploadtoS3(formData.picture[0], signeRequest)

    const payload = {
      name: formData.name,
      pictureUrl: url,
      exercises: selected.map((item) => item.value._id),
    }

    const workout = await createWorkout(payload)

    console.log(workout)
  }

  const onCancel = () => {
    console.log('cancle')
    onClosePopup()
  }

  const onReset = () => {
    console.log('Reset')
  }

  return (
    <Popup
      type="Create"
      text="Workout"
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
        <MultiSelect
          name="Exercises"
          options={exercises}
          value={selected}
          onChange={setSelected}
        />
        <ImageUpload register={register} />
      </div>
    </Popup>
  )
}

export default CreatePopup
