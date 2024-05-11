import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FcPhoneAndroid } from "react-icons/fc";
import { IoIosArrowDropright } from "react-icons/io"
import { GoArrowDownRight } from "react-icons/go";
import { RiMapPinLine } from "react-icons/ri";
function Home() {
  return (
    <main className='w-full flex flex-col md:flex-row h-screen'>
      <section className='w-full h-1/3 md:w-1/2 md:h-full bg-slate-400'>
        <div className=' w-full h-2/3'>
          <img src='./src/assets/ayodhya.webp' alt="backrgound Image"  className='w-full h-full'/>
        </div>
        <div className='w-full h-1/3 flex flex-col'>

          <div className=' w-full border-2 border-green-400 rounded-lg justify-center items-center h-1/2 bg-gray-100'>

            <div className='flex flex-row items-center justify-between '>
            <div className=' flex flex-row items-center'><h1 className='text-lg px-1 font-semibold'> Address </h1> <IoIosArrowDropright  className=' w-8 h-8 text-green-500'/></div>
             <a href="https://maps.app.goo.gl/kE8NNUgpTJtXPU5S8" target='_blank'> <RiMapPinLine className=' w-8 h-8 hover:text-orange-400 ' /> </a>
            </div>

          </div>

          <div className='w-full h-1/2 bg-gray-100  flex justify-start gap-10 items-center'>


             
          </div>

        </div>

      </section>
      <aside className=' w-full flex flex-col  items-center h-2/3 md:w-1/2 md:h-full bg-gray-100'>

        <div className='  flex items-center w-full h-[10%] '>

        <h1 className=' text-3xl px-2  font-semibold hover:bg-green-300'>About</h1>
         <IoArrowForwardCircleOutline className="w-10 h-10  hover:text-green-400"/>
        </div>

        <div className=' w-full h-[90%]'>

        <h1 className='px-2 py-2 text-4xl font-semibold  text-pink-400'>King Sukh Guest House</h1>
        <p className='px-2 py-2 text-2xl'> Welcome to Kingsukh - Your cozy corner in the hills of Purulia. Reserve your spot for a peaceful getaway surrounded by nature. Come, relax and make memories with us!!</p>

          {/* content  */}

       <h4 className='text-3xl px-1 text-pink-400 font-semibold  '>Address</h4>

       <p className='px-1 text-xl'> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>


          
        <div className=' w-full flex flex-row  justify-center   gap-5 py-5'>
        <button className='bg-yellow-400 px-5 py-2 border-2 rounded-lg font-semibold'>Book Now</button>
         <button className='bg-zinc-700 text-white px-4 py-2 border-2 rounded-lg'>Inquire</button> 
        </div>

        </div>

      </aside>
    </main>
  )
}

export default Home
