import React, { useState } from 'react'
import './App.css'
import { RiMoonFill } from 'react-icons/ri'
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Services } from './Services'
import { Portafolio } from './Portafolio'
import { Footer } from './Footer'
import Img from './assets/laptop.jpg'

function App() {
  //darkmode: archivo tailwind.config poner darkMode: 'class',
  //useState para cambiar el estado de la clase
  const [dark, setDark] = useState(false);
  
  return (
    <div className={`${dark ? "dark bg-gray-900" : ""} `}>
      <section className='min-h-screen container mx-auto px-9'>
        <nav className='py-10 mb-8 flex justify-between'>
          <h1 className='text-3xl dark:text-slate-300'>Developed</h1>

          <ul className='flex items-center'>
            <li>
              {/* dark mode */}
              <RiMoonFill className='cursor-pointer text-teal-700 dark:text-slate-300 w-9 h-9' onClick={() => {
                setDark(!dark)
              }}/>
            </li>
            <li><a href='#' className='bg-teal-600 text-white px-4 py-2 rounded-md ml-4 hover:bg-teal-900'>Resume</a></li>
          </ul>

        </nav>

        <div className='text-center p-8'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Jonathan Zamora</h2>
          <h3 className='text-2xl dark:text-slate-300'>Developer and designer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-4xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle className='dark:text-slate-300'/>
            <AiFillLinkedin className='dark:text-slate-300'/>
            <AiFillGithub className='dark:text-slate-300'/>
          </div>

          <div className='bg-slate-600 mt-5 dark:bg-slate-800 p-5'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Diseños</h2>
            <h3 className='text-2xl text-white dark:text-slate-300'>Asombrosos</h3>
           <div className='flex justify-center'>
            <img src={Img} style={{width:"250px"}} alt="foto aqui" className='my-6'/>
           </div>
            <p className='text-white dark:text-slate-300'>Nesciunt ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      <Services />
      <Portafolio />
      </section>
      <Footer />
    </div>
  )
}

export default App
