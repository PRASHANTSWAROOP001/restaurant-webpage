import React from 'react'

function GallaryCard() {
  return (
    <div className=' min-w-[300px] min-h-[280px] sm:w-1/2 sm:h-3/5 md:w-2/5 md:h-3/5  lg:w-1/4 lg:h-3/5 shadow-xl rounded-lg overflow-hidden flex flex-col '>
      <div className='w-full h-4/5 '>

        <img src="./src/assets/baranti.webp" alt="" className='w-full h-full' />

      </div>
      <div className=' w-full h-1/5 '>

        <h1 className=' text-4xl font-semibold text-center py-2'> Side View</h1>

      </div>
    </div>
  )
}

export default GallaryCard