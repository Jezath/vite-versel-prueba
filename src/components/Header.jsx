import React from 'react'

//import icon moon
import { RiMoonFill } from 'react-icons/ri'
import { Nav } from './Nav'

export const Header = ({darkMode, navMobile, setNavMobile}) => {
  return (
    <header className='py-8 fixed top-0 w-full bg-white dark:bg-slate-700 z-20'>

        <div className='container mx-auto px-7 flex justify-between'>
            <h1 className='text-3xl dark:text-slate-300'>Developed</h1>
            
            <div className='flex items-center gap-5'>
                
                <div className='hidden lg:block'>
                    <Nav />
                </div>

                <div>
                    {/* dark mode */}
                    <RiMoonFill className='cursor-pointer text-teal-700 dark:text-slate-300 w-9 h-9' onClick={() => {
                    darkMode()
                    }}/>
                </div>
                
                <div>
                   
                <button onClick={() => {
                    navMobile ? setNavMobile(false) : setNavMobile(true)
                    console.log(navMobile)
                    //setNavMobile(true)
                }} className={`btn ${ navMobile ? 'btn' : 'btn-f'} md:hidden`}>
                    <span className='origin-left transition-all bg-black w-full h-[2px] rounded dark:bg-slate-300'></span>
                    <span className='origin-left transition-all bg-black w-full h-[2px] rounded dark:bg-slate-300'></span>
                    <span className='origin-left transition-all bg-black w-full h-[2px] rounded dark:bg-slate-300'></span>
                </button>
                </div>

            </div>
        </div>

    </header>
  )
}
