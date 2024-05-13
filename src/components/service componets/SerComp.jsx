import React from 'react'

function SerComp({value}) {
  const {image,heading,details} = value
  return (
    <div className='w-[90%] md:w-1/3 md:h-2/4 lg:h-1/2 lg:w-1/5 h-1/3 shadow-lg rounded-xl flex flex-col items-center'>

      <img src={image} alt="card image" className=' w-3/5 h-3/5 ' />

      <div>
      <h1 className='text-2xl font-medium px-2 '>{heading}</h1>

      <p className='px-2 text-base'>{details}</p>
      </div>

      
    </div>
  )
}

export default SerComp