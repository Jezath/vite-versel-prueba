import React from 'react'
import { Boton } from './Boton'

//import icon moon
import { RiMoonFill } from 'react-icons/ri'

export const Header = ({darkMode}) => {
  return (
    <header className='py-8 fixed top-0 w-full bg-white dark:bg-slate-700'>

        <div className='container mx-auto px-7 flex justify-between'>
            <h1 className='text-3xl dark:text-slate-300'>Developed</h1>
            <div className='flex items-center gap-5'>
                <div>
                    {/* dark mode */}
                    <RiMoonFill className='cursor-pointer text-teal-700 dark:text-slate-300 w-9 h-9' onClick={() => {
                    darkMode()
                    }}/>
                </div>
                <div className='md:hidden '>
                    <Boton />
                </div>
            </div>
        </div>

    </header>
  )
}
