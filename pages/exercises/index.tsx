import { useState } from 'react'
import PrivatePageLayout from '../../components/layouts/PrivatePageLayout'
import Button from '../../components/Button'

import SearchController from '../../modules/exercises/SearchController'
import ExerciseList from '../../modules/exercises/List'
import CreateExercisePopup from '../../modules/exercises/CreatePopup'

import { useDebounce } from 'use-debounce'

const Exercises = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [rawText, setText] = useState('')
  const [text] = useDebounce(rawText, 300)

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

  return (
    <PrivatePageLayout>
      <div>
        <div className="px-5 max-w-2xl">
          <SearchController value={rawText} onChange={setText} />
          <div className="mt-5 flex justify-between items-end">
            <span className="text-xl leading-none">Exercises</span>
            <Button label="Create" onClick={openPopup} type="primary" />
          </div>
          <ExerciseList searchInput={text} />
        </div>
        {isPopupOpen && <CreateExercisePopup onClosePopup={closePopup} />}
      </div>
    </PrivatePageLayout>
  )
}

export default Exercises
