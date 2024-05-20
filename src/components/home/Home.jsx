import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Home() {
  return (
    <main className='w-full flex flex-col md:flex-row h-screen bg-gray-100'>
      <section className='w-full h-full md:w-1/2 md:h-full bg-gray-100'>
        <div className=' w-full h-2/3 '>
          <img src='./src/assets/ayodhya.webp' alt="backrgound Image"  className='w-full h-full'/>
        </div>

        <div className=' md:w-full  h-1/3  flex flex-row  justify-around pt-2  md:py-5'>

        <div className='px-2 border-r-4 border-black h-1/3 '>  
            <h1 className=' text-lg md:text-xl font-bold py-1'>Unique offer</h1>
            <p>For Nature Lovers </p>
          </div>

          <div className=' px-2 border-r-4 border-black h-1/3 '>  
            <h1 className=' text-xl font-bold py-1'> 4+</h1>
            <p>Hills to Explore</p>
          </div>

          <div className='px-2 border-r-4 border-black h-1/3'>
            <h1  className=' text-xl font-bold py-1'>3+ </h1>
            <p>Dams to Visit</p>
          </div>

          <div className='px-2 border-r-4 border-black h-1/3 hidden md:block'>
            <h1  className=' text-xl font-bold py-1 '>Local cuisine </h1>
            <p> To Taste and Enjoy </p>
          </div>

        </div>

      </section>
      <aside className=' w-full flex flex-col  items-center h-2/3 md:w-1/2 md:h-full bg-gray-100'>

        <div className='  flex items-center w-full h-[10%] '>

        <h1 className=' text-3xl px-2  font-semibold'>About</h1>
         <IoArrowForwardCircleOutline className="w-10 h-10 "/>
        </div>

        <div className=' w-full h-[90%]'>

      <h1 className='px-2 py-2 text-3xl md:text-5xl font-semibold font-sans text-pink-400'>Escape to Hillside Retreat where <br /> comfort meets nature’s charm. <br /> Book Your Stay</h1>
        <p className='px-2 py-2 text-sm md:text-base'> Welcome to Kingsukh - Your cozy corner in the hills of Purulia. Reserve your spot for a peaceful getaway surrounded by nature. Explore nature without leaving the comfort of your home enjoy local cuisine and delicacies. Come, relax and make memories with us!!</p>

          {/* content  */}


          
        <div className=' w-full py-5 px-3'>
        <button className='bg-black px-5  text-white py-2 border-2 rounded-lg font-semibold hover:text-green-400 '><a href="https://wa.me/919007062180?text=I%20would%20like%20to%20book%20a%20hotel%20room" target="_blank" rel="noopener noreferrer">Book Now</a></button>
        <button className=' border-2 text-lg font-semibold py-1 px-3 mx-2  hover:border-green-400 rounded-md'><a href="https://maps.app.goo.gl/fTkygbNuLaZ5wWvF9" target="_blank" rel="noopener noreferrer">Location</a></button>
        </div>

        <div className=' w-[90%] md:w-full h-1/4  flex flex-row justify-around items-center lg:mt-14 '>

          <div className=' px-2 border-r-4 border-black h-1/3'>  
            <h1 className=' text-xl font-bold'> 100 +</h1>
            <p>Booking Confirmed</p>
          </div>

          <div className='px-2 border-r-4 border-black h-1/3'>
            <h1  className=' text-xl font-bold '>50+ </h1>
            <p>Happy Customers</p>
          </div>

          <div className='px-2 border-r-4 border-black h-1/3'>
            <h1  className=' text-xl font-bold '>4.8+ </h1>
            <p>Rating </p>
          </div>

        </div>

        </div>

      </aside>
    </main>
  )
}

export default Home
