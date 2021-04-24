import { useState } from 'react'
import useSignOut from '../hooks/use-sign-out'
import { useRouter } from 'next/router'
import classNames from 'classnames/bind'

import Logo from './Logo'
import MenuIcon from './icons/MenuIcon'
import HomeIcon from './icons/HomeIcon'
import PlanIcon from './icons/PlanIcon'
import WorkoutIcon from './icons/WorkoutIcon'
import ExerciseIcon from './icons/ExerciseIcon'
import SettingsIcon from './icons/SettingsIcon'
import LogoutIcon from './icons/LogoutIcon'

import SideBarLink from './SideBarLink'

const cx = classNames.bind({
  base:
    'shadow-sm flex flex-col bg-gradient-to-br from-gray-800 to-gray-700 flex-shrink-0 absolute top-0 left-0 h-full',
  expanded: 'w-48',
})

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const signOut = useSignOut()
  const router = useRouter()

  const className = cx({
    base: true,
    expanded: isOpen,
  })

  const toggleSideBar = () => {
    setIsOpen((previous) => !previous)
  }

  const handleSignOut = async () => {
    const { data, error } = await signOut()

    if (data) {
      router.push('/')
    }
  }

  return (
    <div className={className}>
      <div className="flex px-3 py-5 text-white items-center border-b-2 border-gray-700">
        <button onClick={toggleSideBar} className="focus:outline-none">
          <MenuIcon />
        </button>
        {isOpen && (
          <div className="ml-5">
            <Logo size="small" />
          </div>
        )}
      </div>
      <div className="py-2 flex-1 flex flex-col justify-between">
        <ul className="flex flex-col space-y-1">
          <SideBarLink url="/dashboard">
            <>
              <HomeIcon />
              {isOpen && <span className="ml-2">Dashboard</span>}
            </>
          </SideBarLink>
          <SideBarLink url="/plans">
            <>
              <PlanIcon />
              {isOpen && <span className="ml-2">Plans</span>}
            </>
          </SideBarLink>
          <SideBarLink url="/workouts">
            <>
              <WorkoutIcon />
              {isOpen && <span className="ml-2">Workouts</span>}
            </>
          </SideBarLink>
          <SideBarLink url="/exercises">
            <>
              <ExerciseIcon />
              {isOpen && <span className="ml-2">Exercises</span>}
            </>
          </SideBarLink>
        </ul>
        <ul>
          <SideBarLink url="/settings">
            <>
              <SettingsIcon />
              {isOpen && <span className="ml-2">Settings</span>}
            </>
          </SideBarLink>
          <button
            onClick={handleSignOut}
            className="px-3 py-2 w-full text-left text-white hover:bg-blue-600 flex"
          >
            <LogoutIcon />
            {isOpen && <span className="ml-2">Logout</span>}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
