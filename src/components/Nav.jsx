import React from 'react'
import { navegation } from '../data'
import { Link } from 'react-scroll'

export const Nav = () => {
  return (
    <div className='flex gap-6'>
            {
                navegation.map((item, index) => {
                    return (
                        <li key={index} className='list-none'>
                            <Link to={item.href} spy={true} smooth={true} duration={500} className='text-2xl dark:text-slate-300 cursor-pointer'>{item.name}</Link>
                        </li>
                    )
                })
            }
    </div>
  )
}
