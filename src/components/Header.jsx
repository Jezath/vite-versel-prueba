import React from 'react'
import { Link } from 'react-scroll'

//import icon moon
import { RiMoonFill } from 'react-icons/ri'
import { Nav } from './Nav'

export const Header = ({darkMode, navMobile, setNavMobile}) => {
  return (
    <header className='py-6 fixed top-0 w-full bg-white dark:bg-slate-700 z-50'>

        <div className='container mx-auto px-7 flex justify-between'>
            
            <Link to='About' className='cursor-pointer'>
                <h1 className='text-3xl dark:text-slate-300' >Logo</h1>
            </Link>
            
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
                }} className={`btn ${ navMobile ? 'btn' : 'btn-f'} lg:hidden`}>
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
