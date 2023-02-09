//import funcionalidades
import React, { useState } from 'react'

//import components
import { Services } from './components/Services'
import { Portafolio } from './components/Portafolio'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { Boton } from './components/Boton'
import { NavMobile } from './components/NavMobile'

function App() {
  //darkmode: archivo tailwind.config poner darkMode: 'class',
  //useState para cambiar el estado de la clase
  const [dark, setDark] = useState(false);
  const [navMobile, setNavMobile ] = useState(false);

  //function dark mode
  const darkMode = () => {
    dark ? setDark(false) :  setDark(true)
  }

  return (
    <div className={`${dark ? "dark bg-gray-900" : ""} `}>
        
        <Header darkMode={darkMode} setNavMobile={setNavMobile}/>

        <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full transition-all bg-red-300 dark:bg-slate-700`}>
          <NavMobile setNavMobile={setNavMobile}/>
        </div>

      <section className='min-h-screen container mx-auto px-7'>

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
