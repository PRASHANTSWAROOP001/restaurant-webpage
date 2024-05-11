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
            <h1 className=" text-xl px-1">Cozy Rooms</h1>

            <p className="text-sm px-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              esse placeat odit dolores ipsam saepe perspiciatis nihil fugit
              impedit adipisci?
            </p>
          </div>

          <div className="pb-1 flex flex-row justify-center  ">
            <button className="px-3 py-2 bg-pink-400 hover:bg-pink-300 rounded-md  text-white">
              Book Now
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
            <h1 className=" text-xl px-1">Cozy Rooms</h1>

            <p className="text-sm px-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              esse placeat odit dolores ipsam saepe perspiciatis nihil fugit
              impedit adipisci?
            </p>
          </div>

          <div className="pb-1 flex flex-row justify-center ">
            <button className="px-3 py-2 bg-pink-400 hover:bg-pink-300 rounded-md  text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms