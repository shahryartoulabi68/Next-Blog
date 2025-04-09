// import React from 'react'
// import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
// import { useDarkMode } from '../context/DarkModeContext'

import { useDarkMode } from "@/app/context/DarkModeContext"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

function DarckModeToggle() {

    const { isDarkMode, toggleDarkMode } = useDarkMode()
    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? (
                <SunIcon className='w-4 h-4 md:w-5 md:h-5 text-primary-900' />

            ) : (
                <MoonIcon className='w-4 h-4 md:w-5 md:h-5 text-primary-900' />
            )

            }
        </button>
    )
}

export default DarckModeToggle
