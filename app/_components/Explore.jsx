import Image from 'next/image'
import React from 'react'

const Explore = () => {
  return (
    <div className='py-20' >
        <div className="container ">
            <div className="grid md:grid-cols-6 text-center md:py-16">
                <div className="md:col-start-2 col-span-4">
                    <h1 className='text-3xl md:text-5xl font-bold'>Explore Our Alowishus</h1>
                    <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio quisquam dicta maxime, perferendis veniam!</p>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 md:w-4/5 mx-auto">
            <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all aos-init aos-animate">
                <h1 className="text-3xl font-semibold tetx-gray-700">Our Catering</h1>
                <p className="py-2 text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur</p>
                <div className="text-center flex items-center flex-col">
                    <Image className='py-6' src='/icon1.png' width={200} height={200}/>
                    <button className='inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide'>Order Catering</button>
                </div>
            </div>
            <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all aos-init aos-animate">
                <h1 className="text-3xl font-semibold tetx-gray-700">The Food</h1>
                <p className="py-2 text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur</p>
                <div className="text-center flex items-center flex-col">
                    <Image className='py-6' src='/icon2.png' width={200} height={200}/>
                    <button className='inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide'>Food Menu</button>
                </div>
            </div>
            <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all aos-init aos-animate">
                <h1 className="text-3xl font-semibold tetx-gray-700">Our Getato</h1>
                <p className="py-2 text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur</p>
                <div className="text-center flex items-center flex-col">
                    <Image className='py-6' src='/icon3.png' width={200} height={200}/>
                    <button className='inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide'>Discover More</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Explore