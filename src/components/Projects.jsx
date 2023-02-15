import React from 'react'

import { AiOutlineLink } from 'react-icons/ai'

//import projects data
import { projects } from '../data'

export const Projects = () => {
  return (
    <section className='mt-8' id='Projects'>
        <div>
            <div>
                <h1 className='text-3xl dark:text-teal-600 pt-3'>Projects</h1>
                <p className='py-3 leading-8 text-gray-800 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque quisquam fugiat! A repellendus eum eos et, perspiciatis consequuntur, architecto dolores provident aut obcaecati quibusdam dolorem. Libero accusantium quas deserunt. </p>
            </div>

            <div className='flex bg-slate-300 flex-col md:flex-row justify-center gap-5' >
                {
                    projects.map((item, index) => {

                        const {title, img, link ,tools} = item;

                        return <div key={index} className='group bg-red-200 border-4 border-slate-700  relative overflow-hidden'>

                            <div className='group-hover:bg-black/40 w-full h-full absolute z-20 transition-all duration-300'></div>
                            <img src={img} alt="" className='group-hover:scale-125 transition-all duration-500s'/>

                            <div className='absolute -bottom-full w-full left-0 p-3 group-hover:bottom-0 transition-all duration-500 z-30 bg-red-300'>
                                <h1>{title}</h1>
                                <a href=".#">Ver proyecto<AiOutlineLink /></a>

                                <div className='flex flex-row gap-2 bg-red-400'>
                                    <p>Tools dev:</p>
                                    {
                                        tools.map((item, index) => {
                                            return <div key={index} >
                                                <img src={item.img} alt="" />
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
  
                        </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}
