
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Fade({value}) {
    const{link1,link2,link3,link4,link5} = value
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
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
      ],

  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={link1} className=" w-full h-1/2 " />
        </div>
        <div>
          <img src={link2} />
        </div>
        <div>
          <img src={link3} />
        </div>
        <div>
          <img src={link4} />
        </div>
        <div>
            <img src={link5} alt="images of slider" />
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
