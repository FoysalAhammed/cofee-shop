import Image from 'next/image'
import React from 'react'

const CofeeBanner = () => {
  return (
    <div className=" md:py-10 md:my-10">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
                <div className="">
                 <Image src="/coffee-mid.png" width={600} height={600} className='object-cover md:w-full'/>
                </div>
                <div className="md:pe-40 py-10 md:py-0 aos-init aos-animate">
                    <h1 className="text-3xl md:text-5xl font-bold">Order Your Favourite Cofee</h1>
                    <p className=" text-gray-500 text-lg py-4 md:py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reprehenderit repellat aut molestias est, odit quos voluptatem sint dicta, mollitia minima corporis accusantium optio vero?</p>
                     <button className='inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide'>Order Now</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default CofeeBanner