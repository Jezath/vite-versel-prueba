import React from 'react'
import { Boton } from './Boton'

export const NavMobile = ({navMobile, setNavMobile}) => {
  return (
    <div className='py-8'>
        <div className='container mx-auto px-7 flex justify-between'>
            <div></div>
            <div>
                {/* <button onClick={() => setNavMobile(false)} className='btn bg-slate-600 rounded-full dark:bg-slate-300'/> */}

                <button onClick={() => {
                    navMobile ? setNavMobile(false) : setNavMobile(true)
                    //setNavMobile(false)
                }} className={`btn ${ !navMobile ? 'btn-f' : ''} `}>
                    <span className='origin-left transition-all bg-black w-full h-[2px] rounded dark:bg-slate-300'></span>
                    <span className='origin-left transition-all bg-black w-full h-[2px] rounded dark:bg-slate-300'></span>
                    <span className='origin-left transition-all bg-black w-full h-[2px] rounded dark:bg-slate-300'></span>
                </button>

            </div>
        </div>
        <div className='text-center'>
            <a href=".#" onClick={() => setNavMobile(false)}>Hola</a>
        </div>
    </div>
  )
}
