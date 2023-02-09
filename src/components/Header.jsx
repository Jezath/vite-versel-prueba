import React from 'react'
import { Boton } from './Boton'

//import icon moon
import { RiMoonFill } from 'react-icons/ri'

export const Header = ({darkMode, setNavMobile}) => {
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
                {/* <div className={`'md:hidden' ${ dark ? 'absolute top-0 w-screen bottom-0 bg-red-300 right-0' : '-right-full'} transition-all`}>
                {console.log(dark)}
                    <Boton />
                </div> */}
                <div>
                    <button onClick={() => {
                        setNavMobile(true) 
                        console.log(setNavMobile)
                    }} className='btn bg-slate-600 rounded-full dark:bg-slate-300'/>
                </div>
            </div>
        </div>

    </header>
  )
}
