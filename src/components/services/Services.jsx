import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import SerComp from '../service componets/SerComp';


function Services() {

  const image1 = {
    image:"./src/assets/tour guide.jpg",
    heading:"Tour Guide",
    details:" We provide tour guides so that people can explore and enjoy best of our locality without any hassle."
  }

  const image2 = {
    image:"./src/assets/restraunt.jpg",
    heading:"Restraunt",
    details:"Enjoy the local and best cusine without leaving comfort of your room. we provide tasty food round o clock."
  }
  const image3 = {
    image:"./src/assets/shop.jpg",
    heading:"Service",
    details:"Our services are open round the clock."
  }

  const image4= {
    image:"./src/assets/security.jpg",
    heading:"Security",
    details:"With guards and security camera you can enjoy your stay without worry."
  }

  


  return (
    <div className=" w-full h-screen flex flex-col ">
      <section className="w-full flex flex-col  h-full">
        <div className=" flex flex-row items-center gap-2 py-4 px-1">
          <h1 className="px-2 text-3xl "> We Strive For Best Services </h1>
          <FaArrowCircleRight className="h-8 w-8" />
        </div>

        <div className='w-full h-full flex flex-col lg:flex-row lg:justify-around gap-5 lg:items-center items-center '>
         
         <SerComp value={image1}/>
         <SerComp value ={image2}/>
         <SerComp value ={image3}/>
         <SerComp value = {image4} />


        </div>
      </section>
      
    </div>
  );
}

export default Services