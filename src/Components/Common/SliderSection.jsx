import React from 'react'
import Slider from "react-slick"
const SliderSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,      
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (

    <>
      <Slider {...settings}>
        <div>
          <div className="main-slider-item"><img src="img/slider-1.jpg" alt="Slider Image" style={{ height: '500px', width: '100%' }} /></div>
        </div>
        <div>
          <div className="main-slider-item"><img src="img/slider-2.jpg" alt="Slider Image" style={{ height: '500px', width: '100%' }} /></div>
        </div>
        <div>
          <div className="main-slider-item"><img src="img/slider-3.jpg" alt="Slider Image" style={{ height: '500px', width: '100%' }} /></div>
        </div>
      </Slider>
    </>
  )
}

export default SliderSection
