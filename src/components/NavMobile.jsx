import React from 'react'
import { navegation } from '../data'
import { Link } from 'react-scroll'

export const NavMobile = ({navMobile, setNavMobile}) => {
  return (
    <div>
        <div className='py-8 container mx-auto px-7 flex justify-between absolute'>
            <div></div>
            <div>
                
                <button onClick={() => {
                    navMobile ? setNavMobile(false) : setNavMobile(true)
                    //setNavMobile(false)
                }} className={` ${ !navMobile ? 'btn-f' : ''} btn`}>
                    <span className='origin-left transition-all bg-black w-full h-[2px]  dark:bg-slate-300'></span>
                    <span className='origin-left transition-all bg-black w-full h-[2px]  dark:bg-slate-300'></span>
                    <span className='origin-left transition-all bg-black w-full h-[2px]  dark:bg-slate-300'></span>
                </button>

            </div>
        </div>
        <div className='text-center h-screen flex flex-col justify-center gap-8'>
            {
                navegation.map((item, index) => {
                    return (
                    <li key={index} className='list-none' >
                        <Link to={item.href} spy={true} smooth={true} duration={500} className='text-2xl dark:text-slate-300 cursor-pointer' >{item.name}</Link>
                    </li>
                    )
                })
            }
        </div>
    </div>
  )
}
