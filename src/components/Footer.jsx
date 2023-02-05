import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-teal-600 mt-8'>
        <h1 className='text-3xl pt-3 text-center'>Footer</h1>
        <div className='w-full h-full p-5 flex justify-evenly gap-5'>
            <div>
                <ul>
                    <li>Lorem ipsum</li>
                    <li>consectetur adipisicin</li>
                    <li>Dolorum dolorem</li>
                    <li>Libero accusantium</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>NPM</li>
                    <li>Vite</li>
                    <li>RUN START</li>
                    <li>RUN DEV</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
