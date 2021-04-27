import React, { useState } from 'react'

import PrivatePageLayout from '../layouts/PrivatePageLayout'
import Button from '../components/Button'

import SearchInput from '../components/SearchInput'
import WorkoutList from '../modules/workouts/List'
import WorkoutPopup from '../modules/workouts/Popup'

import { useDebounce } from 'use-debounce'

const Workouts: React.FC = () => {
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
          <SearchInput value={rawText} onChange={setText} />
          <div className="mt-5 flex justify-between items-end">
            <span className="text-xl leading-none">Workouts</span>
            <Button label="Create" onClick={openPopup} type="primary" />
          </div>
          <WorkoutList searchInput={text} />
        </div>
        {isPopupOpen && <WorkoutPopup onClosePopup={closePopup} />}
      </div>
    </PrivatePageLayout>
  )
}

export default Workouts
