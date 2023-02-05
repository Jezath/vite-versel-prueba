import React from 'react'

//imagenes desde un array
import { imgArray } from '../data'

export const Services = () => {
  return (
    <div className='mt-8'>
        <h3 className='text-3xl dark:text-teal-600 pt-3'>Services I offer</h3>
        <p className='py-3 leading-8 text-gray-800 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque quisquam fugiat! A repellendus eum eos et, perspiciatis consequuntur, architecto dolores provident aut obcaecati quibusdam dolorem. Libero accusantium quas deserunt.</p>
        <p className='py-3 leading-8 text-gray-800 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque quisquam fugiat! A repellendus eum eos et, perspiciatis consequuntur, architecto dolores provident aut obcaecati quibusdam dolorem. Libero accusantium quas deserunt.</p>
        <p className='py-3 leading-8 text-gray-800 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque quisquam fugiat! A repellendus eum eos et, perspiciatis consequuntur, architecto dolores provident aut obcaecati quibusdam dolorem. Libero accusantium quas deserunt.</p>

        <div className='flex justify-around flex-wrap bg-slate-600 p-5 mt-5 gap-5'>
        {
          imgArray.map((item, index) => {
            return <img src={imgArray[index]} alt="react img" style={{width:"250px"}} key={item}/>
          })
        }
        </div>
    </div>
  )
}
