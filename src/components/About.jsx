import React from 'react'

//import react-type-animation
import { TypeAnimation } from 'react-type-animation'

//import icons social red
import { 
    AiFillTwitterCircle,
    AiFillGithub,
    AiFillLinkedin 
} from 'react-icons/ai'

export const About = () => {
  return (
    <div className='mt-16 pt-16 pb-5' id='About'>

        <div >
          <h1 className='text-5xl text-teal-600 font-medium'>Jonathan Zamora</h1>
          <TypeAnimation 
            sequence={[
                'Front-End Developer', 2000,
                'Designer UX/UI', 2000,
              ]}
            speed={50}
            className='text-2xl dark:text-slate-300'
            wrapper='span'
            repeat={Infinity}
          />
          <p className='py-6 leading-8 text-gray-800 dark:text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>


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
