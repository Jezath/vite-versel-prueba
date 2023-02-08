//import funcionalidades
import React, { useState } from 'react'

//import components
import { Services } from './components/Services'
import { Portafolio } from './components/Portafolio'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Card } from './components/Card'
import { Header } from './components/Header'

function App() {
  //darkmode: archivo tailwind.config poner darkMode: 'class',
  //useState para cambiar el estado de la clase
  const [dark, setDark] = useState(false);

  const darkMode = () => {
    dark ? setDark(false) :  setDark(true)
  }

  return (
    <div className={`${dark ? "dark bg-gray-900" : ""} `}>
        
        <Header darkMode={darkMode} />

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
