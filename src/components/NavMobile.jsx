import React from 'react'
import { Boton } from './Boton'

export const NavMobile = ({setNavMobile}) => {
  return (
    <div className='py-8'>
        <div className='container mx-auto px-7 flex justify-between'>
            <div></div>
            <div>
                <button onClick={() => setNavMobile(false)} className='btn bg-slate-600 rounded-full dark:bg-slate-300'/>
            </div>
        </div>
        <div className='text-center'>
            <a href=".#" onClick={() => setNavMobile(false)}>Hola</a>
        </div>
    </div>
  )
}
