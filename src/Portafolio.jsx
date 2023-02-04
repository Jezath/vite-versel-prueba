import React from 'react'
//import img de array con objetos
import { imgArrayObjetos } from './data'

export const Portafolio = () => {
  return (
    <div className='pb-10 mt-5'>
        <h3 className='text-3xl py-1 dark:text-teal-600 '>Portafolio</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque quisquam fugiat! A repellendus eum eos et, perspiciatis consequuntur, architecto dolores provident aut obcaecati quibusdam dolorem. Libero accusantium quas deserunt.</p>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque quisquam fugiat! A repellendus eum eos et, perspiciatis consequuntur, architecto dolores provident aut obcaecati quibusdam dolorem. Libero accusantium quas deserunt.</p>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque quisquam fugiat! A repellendus eum eos et, perspiciatis consequuntur, architecto dolores provident aut obcaecati quibusdam dolorem. Libero accusantium quas deserunt.</p>

        <div className='flex justify-around flex-wrap bg-slate-600 p-5 mt-5 '>
        {
          imgArrayObjetos.map((item, index) => {
            return <div>
              <img src={imgArrayObjetos[index].img1} alt="react img" style={{width:"250px", height:"150px"}} key={index}/>
              <h2 className='text-center font-bold mt-3 text-2xl text-slate-300'>{item.title}</h2>
            </div>
          }) 
        }
        </div>
    </div>
  )
}
