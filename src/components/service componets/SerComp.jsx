import React from 'react'

function SerComp({value}) {
  const {image,heading,details} = value
  return (
    // <div className='w-4/5 md:w-1/3 md:h-2/4 lg:h-1/2 lg:w-1/5 h-1/5 shadow-lg rounded-xl flex flex-col items-center'>

    //   <img src={image} alt="card image" className=' w-3/5 h-3/5 ' />

    //   <div>
    //   <h1 className='text-2xl font-medium px-2 '>{heading}</h1>

    //   <p className='px-2 text-base'>{details}</p>
    //   </div>

      
    // </div>

    

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg  w-full h-64" src={image} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  )
}

export default SerComp