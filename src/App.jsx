//import funcionalidades
import React, { useState } from 'react'
import './App.css'

import { RiMoonFill } from 'react-icons/ri'

//import components
import { Services } from './components/Services'
import { Portafolio } from './components/Portafolio'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Card } from './components/Card'

function App() {
  //darkmode: archivo tailwind.config poner darkMode: 'class',
  //useState para cambiar el estado de la clase
  const [dark, setDark] = useState(false);
  
  return (
    <div className={`${dark ? "dark bg-gray-900" : ""} `}>

      <section className='min-h-screen container mx-auto px-9'>

        <nav className='py-10 flex justify-between'>
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
        
        <About />
        
        <Card />   
        
        <Services />

        <Portafolio />

      </section>

      <Footer />

    </div>
  )
}

export default App
