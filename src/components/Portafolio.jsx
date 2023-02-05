import React from 'react'
//import img de array con objetos
import { imgArrayObjetos } from '../data'

export const Portafolio = () => {
  return (
    <div className='mt-8 '>
        <h3 className='text-3xl dark:text-teal-600 pt-3'>Portafolio</h3>
        <p className='py-3 leading-8 text-gray-800 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque quisquam fugiat! A repellendus eum eos et, perspiciatis consequuntur, architecto dolores provident aut obcaecati quibusdam dolorem. Libero accusantium quas deserunt.</p>
        <p className='py-3 leading-8 text-gray-800 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque quisquam fugiat! A repellendus eum eos et, perspiciatis consequuntur, architecto dolores provident aut obcaecati quibusdam dolorem. Libero accusantium quas deserunt.</p>
        <p className='py-3 leading-8 text-gray-800 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque quisquam fugiat! A repellendus eum eos et, perspiciatis consequuntur, architecto dolores provident aut obcaecati quibusdam dolorem. Libero accusantium quas deserunt.</p>

        <div className='flex justify-around flex-wrap bg-slate-600 p-5 mt-5 gap-5'>
        {
          imgArrayObjetos.map((item, index) => {
            return <div key={index}>
              <img src={imgArrayObjetos[index].img1} alt="react img" style={{width:"250px", height:"150px"}} />
              <h2 className='text-center text-slate-300'>{item.title}</h2>
            </div>
          }) 
        }
        </div>
    </div>
  )
}
