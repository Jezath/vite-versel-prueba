import React, {useState} from 'react'

export const Boton = () => {

    //const [act, setAct] = useState(true) 
    // onClick={() => {
    //   // act ? setAct(false) : setAct(true)
    //   if(act) setAct(false) 
    //   else setAct(true) 
    // }}
    //className={`btn ${act ? 'btn-f' : ''} `}

  return (
    <button  className='btn'>
        <span className='origin-left transition-all bg-black w-full h-[2px] rounded dark:bg-slate-300'></span>
        <span className='origin-left transition-all bg-black w-full h-[2px] rounded dark:bg-slate-300'></span>
        <span className='origin-left transition-all bg-black w-full h-[2px] rounded dark:bg-slate-300'></span>
    </button>
  )
}
