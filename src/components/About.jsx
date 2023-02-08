import React from 'react'

//import icons social red
import { 
    AiFillTwitterCircle,
    AiFillGithub,
    AiFillLinkedin 
} from 'react-icons/ai'

export const About = () => {
  return (
    <div className='text-center mt-24 pt-14'>

          <h2 className='text-5xl text-teal-600 font-medium'>Jonathan Zamora</h2>
          <h3 className='text-2xl dark:text-slate-300'>Developer and designer</h3>
          <p className='py-5 leading-8 text-gray-800 dark:text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className='text-4xl flex justify-center gap-16 text-gray-600 pb-8'>
            <a href="https://twitter.com/" target={'_blank'}>
                <AiFillTwitterCircle className='dark:text-slate-300'/>
            </a>
            <AiFillLinkedin className='dark:text-slate-300'/>
            <AiFillGithub className='dark:text-slate-300'/>
        </div>

    </div>
  )
}
