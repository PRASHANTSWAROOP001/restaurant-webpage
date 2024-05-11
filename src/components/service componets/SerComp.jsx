import React from 'react'

function SerComp() {
  return (
    <div className=' w-1/2 h-4/5 flex flex-col items-center border-2 rounded-lg bg-white'>
    
    <img src="/src/assets/officer.png" className="w-1/2 h-1/2" alt="officer image" />
    
    <div className='w-full h-1/2 flex flex-col justify-around items-center'>
        <h1 className=' text-2xl md:text-4xl text-center'>Security</h1>
        <p className='text-sm px-1 md:text-lg'> Security for sure and worry free Stay</p>
    </div>

    </div>
  )
}

export default SerComp