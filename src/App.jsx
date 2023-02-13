//import funcionalidades
import React, { useState } from 'react'

//import components
import { Services } from './components/Services'
import { Portafolio } from './components/Portafolio'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { NavMobile } from './components/NavMobile'
import { Nav } from './components/Nav'
import { Contact } from './components/Contact'

function App() {
  //darkmode: archivo tailwind.config poner darkMode: 'class',
  //useState para cambiar el estado de la clase
  const [dark, setDark] = useState(false);

  //boton de menu
  const [navMobile, setNavMobile ] = useState(false);
  
  //function dark mode
  const darkMode = () => {
    dark ? setDark(false) :  setDark(true)
  }

  return (
    <div className={`${dark ? "dark bg-gray-900" : ""} `}>
        
        <Header darkMode={darkMode} setNavMobile={setNavMobile} navMobile={navMobile}/>

        <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full min-h-screen transition-all bg-white dark:bg-slate-700 lg:hidden`}>
          <NavMobile setNavMobile={setNavMobile} navMobile={navMobile}/>
        </div>

      <section className='min-h-screen container mx-auto px-7'>

        {/* <Nav /> */}

        <About />
        
        <Card />   
        
        <Services />

        <Portafolio />

        <Contact />

      </section>

      <Footer />

    </div>
  )
}

export default App
