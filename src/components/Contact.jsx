import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ipft79l', 'template_2o9txzb', form.current, 'b4ttKD39rH6UxftTd')
        .then((result) => {
            console.log(result.text);
            alert('Your message sent successfuly');
        }, (error) => {
            console.log(error.text);
        });
        //resect formulario
        e.target.reset()
    };

  return (
    <section className='mt-8' id='Contacto'>

        <h3 className='text-3xl dark:text-teal-600 pt-3'>Contact</h3>
        <p className='py-3 leading-8 text-gray-800 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloremque quisquam fugiat! A repellendus eum eos et, perspiciatis consequuntur, architecto dolores provident aut obcaecati quibusdam dolorem. Libero accusantium quas deserunt.</p>

        <div className='container mx-auto bg-slate-700 flex flex-col md:flex-row md:justify-around'>

            <div className='flex flex-col items-center text-center md:justify-center'>
                <h3 className='text-3xl text-teal-600 pt-3'>Contact</h3>
                <p className='py-3 leading-8 text-slate-300'>Contact me if you need help</p>
            </div>

            <form className='p-5' ref={form} onSubmit={sendEmail}>
                
                <input 
                    type="text" 
                    name="user_name" 
                    placeholder='Your name'
                    className=' py-3 outline-none w-full transition-all mb-3'
                />
                
                <input 
                    type="email" 
                    name="user_email" 
                    placeholder='Your email'
                    className='py-3 outline-none w-full focus:border-accent transition-all mb-3'
                />
                
                <textarea 
                    name="message"
                    placeholder='Your message'
                    className='py-12 outline-none w-full focus:border-accent transition-all resize-none mb-3'
                />

                <input type="submit" value="Send" className='cursor-pointer bg-slate-300 py-2 px-4 rounded-md hover:bg-teal-600 hover:text-slate-300'/>
            </form>

        </div>
    </section>
  )
}
