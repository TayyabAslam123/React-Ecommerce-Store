import React from 'react'
import Slider from "react-slick";
const OurBrands = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: false, 
        pauseOnHover: true
      };
    return (
        <>

                <div className="brand">
                    <div className="container">
                        <div className="section-header">
                            <h3>Our Brands</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
                            </p>
                        </div>
                        <Slider {...settings} >
                            <div><img src="img/brand-1.png" alt="" /></div>
                            <div><img src="img/brand-2.png" alt="" /></div>
                            <div><img src="img/brand-3.png" alt="" /></div>
                            <div><img src="img/brand-4.png" alt="" /></div>
                            <div><img src="img/brand-5.png" alt="" /></div>
                            <div><img src="img/brand-6.png" alt="" /></div>
                        </Slider>
                    </div>
                </div>
  
        </>
    )
}

export default OurBrands
