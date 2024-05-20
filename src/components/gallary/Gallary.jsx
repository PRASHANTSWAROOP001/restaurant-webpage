import React from 'react'
import GallaryCard from '../gallaryCard/GallaryCard'
import { FcPicture } from "react-icons/fc";
import { FaCircleArrowRight } from "react-icons/fa6";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallry() {

  const Link1 ={
    image:"./src/assets/baranti.webp",
    heading:"Near By Lake"
  }

  const Link2 ={
    image:"./src/assets/flower.jpg",
    heading:"Outer View"
  }

  const Link3={
    image:"./src/assets/mithonDam.webp",
    heading:"Mithon Dam"
  }

  const Link4={
    image:"./src/assets/recep.jpg",
    heading:"Reception"
  }

  const Link5 ={
    image:"./src/assets/out.jpg",
    heading:"Out View"
  }

  const Link6 ={
    image:"./src/assets/x01.jpg",
    heading:"Trekking View"
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=' w-full h-screen'>

      <div>

      <div className='flex flex-row px-2 justify-self-center items-center gap-2 '>
      <h1 className='text-4xl font-semibold py-2  text-center'> Gallary </h1>
       <FaCircleArrowRight className=' w-8 h-8'></FaCircleArrowRight>
      </div>
     
      </div>

      <div className='w-full h-4/5 mt-5 '>
      <Slider {...settings}>
        <div><GallaryCard value={Link1}/></div>
        <div><GallaryCard value={Link2}/></div>
        <div><GallaryCard value={Link3}/></div>
        <div><GallaryCard value={Link4}/></div>
        <div><GallaryCard value={Link5}/></div>
        <div><GallaryCard value={Link6}/></div>      
       </Slider>
       <p className=' py-8 text-center font-medium'>Great things dont ask for attention they take it. So come enjoy the views.</p> 
      </div>

      
      

    </div>
  )
}

export default Gallry