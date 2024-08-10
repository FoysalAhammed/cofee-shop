"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Banner =() => {
  return (
<>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}

        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container md:pt-20 md:pb-10">
            <div className="grid md:grid-cols-2 ">
              <div className="relative">
                <h1 className="md:text-8xl text-5xl font-bold py-4">Alowishus Deliciious Coffee</h1>
                 <div className="absolute top-56 mt-1 right-56 md:flex hidden">
                  <Image src="/cafe.png" alt="" width={80} height={80}  />
                 </div>
                 <p className="py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quae placeat. Corrupti, omnis id a consequatur eius saepe quia dignissimos.</p>
                  <div className="md:flex gap-4 py-6 grid">
                    <button className='inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90 h-10 p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg'>Downlaod App</button>
                    <button className='inline-flex items-center border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg '>Shop Coffee</button>
                  </div>
              </div>






              <div className="relative aos-init aos-animate">
              <Image src="/hero1.png" alt="" width={600} height={600} />
              <div className="absolute top-10 md:top-4 right-0 md:right-24 ">
                <Image src="/cafe.png" alt="cafe" width={120} height={120} />
              </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container md:pt-20 md:pb-10">
            <div className="grid md:grid-cols-2 ">
              <div className="relative">
                <h1 className="md:text-8xl text-5xl font-bold py-4">Alowishus Deliciious Coffee</h1>
                 <div className="absolute top-56 mt-1 right-56 md:flex hidden">
                  <Image src="/cafe.png" alt="" width={80} height={80}  />
                 </div>
                 <p className="py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quae placeat. Corrupti, omnis id a consequatur eius saepe quia dignissimos.</p>
                  <div className="md:flex gap-4 py-6 grid">
                    <button className='inline-flex items-center text-center bg-primary text-primary-foreground hover:bg-primary/90 h-10 p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg'>Downlaod App</button>
                    <button className='inline-flex items-center text-center border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg '>Shop Coffee</button>
                  </div>
              </div>






              <div className="relative aos-init aos-animate">
              <Image src="/man-holding.png" alt="" width={450} height={300} />
              <div className="absolute top-10 md:top-4 right-0 md:right-24 ">
                <Image src="/cafe.png" alt="cafe" width={120} height={120} />
              </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}

      </Swiper>
</>
  );
}

export default Banner;