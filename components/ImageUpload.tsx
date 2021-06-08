import Image from 'next/image'
import { useState } from 'react'

interface ImageUploadProps {
  onImageChange: (imageData: File) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange }) => {
  const [isUploaded, setIsUploaded] = useState<Boolean>(false)
  const [imageName, setImageName] = useState<String>('')
  const [image, setImage] = useState<string>(null)

  const handleImagechange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target as HTMLInputElement

    if (input.files && input.files[0]) {
      let reader: FileReader = new FileReader()

      onImageChange(input.files[0])

      setImageName(input.files[0].name)

      reader.onload = (e) => {
        setImage(e.target.result.toString())
        setIsUploaded(true)
      }

      reader.readAsDataURL(input.files[0])
    }
  }

  const handleImageRemoval = (): void => {
    setImage(null)
    onImageChange(null)
    setIsUploaded(false)
    setImageName('')
  }

  return (
    <div className="flex flex-col">
      <span className="font-semibold">Image</span>
      <label className="mt-1 flex h-10 min-h-full bg-gray-800 rounded-sm px-3 items-center bg-opacity-5">
        <span>{imageName ? imageName : 'Upload image'}</span>
        <input
          type="file"
          accept="image/*"
          name="picture"
          className="hidden"
          onChange={handleImagechange}
        />
      </label>
      {isUploaded && (
        <>
          <div className="relative mt-1 h-56">
            <Image
              src={image}
              alt="workout picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <button onClick={handleImageRemoval}>
            <span className="mt-1 underline">Remove image</span>
          </button>
        </>
      )}
    </div>
  )
}

export default ImageUpload
