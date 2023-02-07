import React from 'react'
import { Boton } from './Boton'

export const NavMobile = ({setNavMobile}) => {
  return (
    <div className='lg:hidden bg-[#251f3f] w-full h-full'>
        <Boton onClick={() => setNavMobile(false)} />
    </div>
  )
}
