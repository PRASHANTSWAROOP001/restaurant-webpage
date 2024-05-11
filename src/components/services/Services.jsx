import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { GiSecurityGate } from "react-icons/gi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";


function Services() {
  return (
    <div className=" w-full h-screen flex flex-col ">
      <section className="w-full flex flex-col  h-2/3">
        <div className=" flex flex-row items-center gap-2 h-1/5">
          <h1 className="px-2 text-3xl "> We Strive For Best Services </h1>
          <FaArrowCircleRight className="h-8 w-8" />
        </div>

        <div className='w-full h-4/5 flex flex-col items-center'>

  

        </div>
      </section>
      <section className=" w-full h-1/3 bg-red-400"></section>
    </div>
  );
}

export default Services