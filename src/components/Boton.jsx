import React, {useState} from 'react'

export const Boton = () => {

    const [act, setAct] = useState(true) 

  return (
    <button onClick={() => {
        // act ? setAct(false) : setAct(true)
        if(act) setAct(false) 
        else setAct(true) 
        
        console.log(act)
    }} className={`btn ${act ? 'btn-f' : ''}`}>
        <div className='div-t'></div>
        <div className='div-t'></div>
        <div className='div-t'></div>
    </button>
  )
}
