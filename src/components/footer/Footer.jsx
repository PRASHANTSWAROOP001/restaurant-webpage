import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className='w-full flex flex-col justify-between items-center sticky  md:flex-row  h-auto bottom-2 md:bottom-0 text-white bg-black'>
      <div className=' w-full md:w-1/2  h-80'>
        <div className='px-10 md:px-20 md:py-2'>
          <h1 className=' text-xl md:text-3xl md:font-semibold'>Book Your Room</h1>
          <p className='md:text-lg  text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tempore!</p>
        </div>

        <form className='w-full' action="">
          <div className='w-full flex justify-around items-center py-2'>
            <input type="text" name="name" id="name" placeholder='Name*' required className=' w-[30%] bg-black text-white border-2 border-gray-400 rounded-sm px-1 py-2 focus:none ' />
            <input type="email" name="email" id="email" placeholder='Email*'  required className=' w-[30%] bg-black text-white border-2 border-gray-400 rounded-sm px-1 py-2 focus-visible:bg-none'/>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <textarea placeholder='Booking Enquiry' name="message" id="message" className=' w-4/5 h-20 px-2 py-1 rounded-s border-2 border-gray-400 bg-black text-white'>
            </textarea>
            <input type="submit" className='w-4/5  h-14 bg-gray-400 rounded-sm text-black ' value="Submit" />
          </div>
        </form>
        

      </div>
      <div className='w-full md:w-1/2 h-80  flex flex-col '>
        <section className='w-full h-1/3 flex'>
           <div className='w-1/4 flex items-center justify-center'>
            <h1 className='text-2xl text-center'>Location</h1>
           </div>

           <div className='w-3/4 flex justify-center items-center'>

            <a className='text-lg' href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu" target="_blank" rel="noopener noreferrer">
            Address <span><RiMapPinLine className=' w-6 h-6 inline-block'/></span> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
            </a>

           </div>

        </section>

        <section className=' w-full h-1/3 flex '>

        <div className='w-1/4 flex items-center justify-center'>
            <h1 className='text-2xl text-center'>Contact</h1>
           </div>

           <div className='w-3/4 flex justify-center items-center '>

            <ul className=' flex flex-col gap-1 justify-center items-center'>
              <li>
              <a className='text-lg' href="tel:+91 9007062180">+91 9007062180</a>
              </li>
              <li><a className='text-lg' href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></li>
            </ul>


           </div>

          

        </section>

        <section className=' w-full h-1/3 flex flex-col justify-around items-center'>

          <ul  className=' flex w-full justify-around gap-2 flex-1 py-2'>
          <li> <a href="#"><FaInstagram className='w-8 h-8  rounded-sm hover:text-pink-400'/></a></li>
          <li> <a href="#"><SiFacebook  className='w-8 h-8 rounded-sm hover:text-blue-600'/></a></li>
          <li> <a href="#"><CiYoutube  className='w-8 h-8 hover:text-red-500' /></a></li>
          <li> <a href="#"><FaXTwitter className='w-8 h-8 hover:text-gray-600'/></a></li>
          <li> <a href="mailto:kkghosh0099@gmail.com"><MdOutlineMailOutline className=' w-8 h-8 hover:text-green-400' /></a> </li>
          </ul>

          <div>
            <p> Copyright © and design right belongs to swaroop101 ©.</p>
          </div>
           
        </section>

      </div>
    </footer>
  )
}

export default Footer