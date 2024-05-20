import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";

function About() {
  return (
    <div className="w-full h-screen flex  flex-col md:flex-row">
      <article className='w-full h-1/2 flex flex-col   md:w-1/2 md:h-full'>
        <div className='flex flex-row items-center px-2 py-2 gap-1'> <h1 className='text-2xl font-semibold'>About Us</h1>
               <IoArrowForwardCircleOutline className=' w-10 h-10' ></IoArrowForwardCircleOutline>
        </div>

        <div className=''>
        <h1 className=' text-2xl md:text-5xl font-semibold text-pink-400 px-2 py-4'> We Are Small Hotel With Motto of Atithi Devo Bhava ! </h1>
        <p className=' text-normal md:text-lg px-2 font-medium'> Welcome to King Sukh Guest House! At King Sukh, we are dedicated to providing top-notch services at affordable prices, ensuring that all nature lovers and adventure enthusiasts can enjoy our offerings. Our deep-rooted belief in the saying "Atithi Devo Bhava" reflects our commitment to hospitality. Nestled in the hills amidst nature's bounty, we aim to be your ultimate destination for adventure and relaxation. Join us and create unforgettable memories. We look forward to seeing you soon! :)</p>
        </div>

        <div className=' py-2 md:mt-4 '>
          <button className='text-lg px-3 py-1 bg-black text-white hover:bg-zinc-800 mx-2  rounded-md'><a href="http://" target="_blank" rel="noopener noreferrer">Inquire Now</a></button>
          <button className='text-lg px-3 py-1 border-2 font-semibold hover:text-green-400 hover:border-green-400 rounded-md'><a href="http://" target="_blank" rel="noopener noreferrer">Email</a></button>

        </div>

        <h1 className='px-2 hidden md:block text-2xl font-medium py-2 mt-2 text-center'>Rating And Reviews</h1>
<div class=" hidden md:flex items-center px-2 py-2 justify-center">
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
  <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.8</p>
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
</div>


       
      </article>
      <section className='w-full h-1/2 md:w-1/2 md:h-full'>
        <div className=' w-full h-3/5 flex justify-center'>
          <img src="./src/assets/out.jpg" alt="Guest House Image" className=' w-4/5 h-full ' />
        </div>
        <div className=' py-2'>
        <h1 className='text-2xl font-medium px-10 md:px-20'>Follow Us For Offers </h1>
         <ul className=' flex flex-row gap-2 items-center w-4/5 justify-between px-10 md:px-20  py-4'>
          <li><a href="http://" target="_blank" rel="noopener noreferrer"><SlSocialInstagram className=' hover:text-pink-400 hover:translate-x-1 w-8 h-8'></SlSocialInstagram></a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer"><TiSocialFacebookCircular className=' w-10 h-10 hover:text-blue-600 hover:translate-x-1'></TiSocialFacebookCircular></a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaXTwitter className=' w-8 h-8 hover:translate-x-1'></FaXTwitter></a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer"><SlSocialYoutube  className=' hover:translate-x-1 hover:text-red-500 w-10 h-10'></SlSocialYoutube></a></li>
         </ul>
        </div>

        <h1 className='px-2 md:hidden text-2xl font-medium py-2 mt-2 text-center'>Rating And Reviews</h1>
<div class=" md:hidden flex items-center px-2 py-2 justify-center">
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
  <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.8</p>
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
</div>


      </section>
    </div>
  );
}

export default About