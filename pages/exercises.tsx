import React, { useState } from 'react'

import PrivatePageLayout from '../layouts/PrivatePageLayout'
import Button from '../components/Button'

import SearchInput from '../components/SearchInput'
import ExerciseList from '../modules/exercises/List'
import CreatePopup from '../modules/exercises/Popup'

import { useDebounce } from 'use-debounce'

const Exercises: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [rawText, setText] = useState('')
  const [text] = useDebounce(rawText, 300)

  const openPopup = () => {
    if (!isPopupOpen) {
      setIsPopupOpen(true)
    }
  }

  const closePopup = () => {
    if (isPopupOpen) {
      setIsPopupOpen(false)
    }
  }

  return (
    <PrivatePageLayout>
      <div>
        <div className="px-5 max-w-2xl">
          <SearchInput value={rawText} onChange={setText} />
          <div className="mt-5 flex justify-between items-end">
            <span className="text-xl leading-none">Exercises</span>
            <Button label="Create" onClick={openPopup} type="primary" />
          </div>
          <ExerciseList searchInput={text} />
        </div>
        {isPopupOpen && <CreatePopup onClosePopup={closePopup} />}
      </div>
    </PrivatePageLayout>
  )
}

export default Exercises
