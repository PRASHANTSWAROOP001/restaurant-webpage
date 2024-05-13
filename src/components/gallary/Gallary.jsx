import React from 'react'
import GallaryCard from '../gallaryCard/GallaryCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallry() {

  var settings = {
    dots: true,
    infinite: false,
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
      <h1 className='text-4xl font-semibold py-2  text-center'> Gallary & Images</h1>
      </div>

      <div className='w-full h-4/5 mt-5 '>
      <Slider {...settings}>
        <div><GallaryCard/></div>
        <div><GallaryCard/></div>
        <div><GallaryCard/></div>
        <div><GallaryCard/></div>
        <div><GallaryCard/></div>
        <div><GallaryCard/></div>
        <div><GallaryCard/></div>
        <div><GallaryCard/></div>
        <div><GallaryCard/></div>
        <div><GallaryCard/></div>
        
       </Slider> 
      </div>

      

    </div>
  )
}

export default Gallry