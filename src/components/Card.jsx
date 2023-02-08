import React from 'react'

//import archivo data
import { dataImg } from '../data'

export const Card = () => {
  return (
    <div className='bg-slate-700 mt-8 text-center p-5'>
        <h2 className='text-5xl text-teal-600 font-medium pt-3'>Diseños</h2>
        <h3 className='text-2xl text-slate-300'>Asombrosos</h3>
        <div className='flex justify-center'>
        <img src={dataImg.img} style={{width:"250px"}} alt="foto aqui" className='my-5'/>
        </div>
        <p className='text-slate-300 py-3 leading-8'>Nesciunt ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit..</p>
    </div>
  )
}
