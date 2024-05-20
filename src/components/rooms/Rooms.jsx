import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";

function Rooms() {
  return (
    <div className="w-full min-h-screen flex flex-col">

      <div className="w-full h-[10%] flex flex-row itmes-center py-2 gap-5">
        <h1 className=" text-4xl font-semibold  pl-10">Rooms</h1>
        <FiArrowRightCircle className=" w-10 h-10 " />
      </div>

      <div className=" w-full h-[90%] pb-5 flex flex-col md:flex-row md:justify-around md:items-center pt-5 gap-4 items-center  ">
        <div className=" w-4/5 h-2/4 md:w-2/5 md:h-2/5 lg:w-1/4  rounded-lg shadow-lg overflow-hidden ">
          <img
            src="./src/assets/room1.jpg"
            alt="room image"
            className=" w-full h-1/4  "
          />

          <div className="  pt-2 pb-2">
            <h1 className=" text-xl px-2 font-semibold">Cozy Retreat</h1>

            <p className="text-sm px-2 ">
            Enjoy luxury on a budget with our cozy rooms for couples at just ₹1500/night. Book now for a comfortable stay that won’t cost a fortune!
            </p>
            <h3 className='text-lg px-2 '>Starts At <span className=' font-medium'>₹1500/night</span></h3>
          </div>

          <div className="pb-1 flex flex-row justify-center  ">
            <button className="px-3 py-2 bg-pink-400 hover:bg-pink-300 rounded-md  text-white">
            <a href="https://wa.me/919007062180?text=I%20Want%20To%20Book%20A%20Cozy%20Retreat%20Room." target="_blank" rel="noopener noreferrer">Book Now</a>
            </button>
          </div>
        </div>

        <div className=" w-4/5 h-2/4 md:w-2/5 md:h-2/5 lg:w-1/4  rounded-lg shadow-lg overflow-hidden ">
          <img
            src="./src/assets/small.jpg"
            alt="room image"
            className=" w-full h-1/4 border-2 "
          />

          <div className="  pt-2 pb-2">
            <h1 className=" text-xl font-semibold px-2">Budget Bliss</h1>

            <p className="text-sm px-2">
            Your Cozy Escape at ₹1000/Night. Ideal for couples or solo adventurers on a budget, our rooms offer a stylish sanctuary without the hefty price tag.
            </p>
            <h1  className='px-2 py-1 text-lg'>Starts At <span className='font-medium'>₹1000/Night</span></h1>
          </div>

          <div className="pb-1 flex flex-row justify-center ">
            <button className="px-3 py-2 bg-pink-400 hover:bg-pink-300 rounded-md  text-white">
              <a href="https://wa.me/919007062180?text=I%20Want%20To%20Book%20A%20Budget%20Bliss%20Room." target="_blank" rel="noopener noreferrer">Book Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms