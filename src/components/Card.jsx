import React from 'react'

//import archivo data
import { dataImg } from '../data'

//import swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Card = () => {
  return (
    <div className='bg-slate-700 mt-8 text-center p-5'>
        <h2 className='text-5xl text-teal-600 font-medium pt-3'>Card</h2>
        <h3 className='text-2xl text-slate-300'>Asombrosos</h3>
        
        <div className=' flex flex-col items-center gap-5 md:flex-row md:justify-center'>

          {/* <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className='w-32'>
              {
                <img src={dataImg.img} alt="" className='w-full' />
              }
            </SwiperSlide>

            <SwiperSlide className='w-32'>
              {
                <img src={dataImg.img2} alt="" className='w-full'/>
              }
            </SwiperSlide>

            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper> */}

          <img src={dataImg.img} style={{width:"250px"}} alt="foto aqui" className='my-5'/>

          <img src={dataImg.img2} style={{width:"250px"}} alt="foto aqui" className='my-5'/>

        </div>

        <p className='text-slate-300 py-3 leading-8'>Nesciunt ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
  )
}
