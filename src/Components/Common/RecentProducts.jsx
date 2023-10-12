import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import {
    Link
} from "react-router-dom";

const RecentProducts = () => {
    const [products, setProducts] = useState([]);


    var settings = {
        autoplay: true,
        infinite: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=15')
            .then(response => response.json())
            .then(data => { setProducts(data); })
            .catch(error => console.error(error));
    }, []);
    return (
        <>
            <div className="featured-product">
                <div className="container">
                    <div className="section-header">
                        <h3>Recent Product</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
                        </p>
                    </div>
                    <Slider {...settings} className="row align-items-center product-slider product-slider-4">
                        {products.map((product) => (
                            <div key={product.id} >
                                <div className="product-item" >
                                    <div className="product-image">
                                        <Link to={`/product-detail/${product.id}`}>
                                            <img src={product.image} alt="Product Image" style={{ height: '300px', width: '100%' }} />
                                        </Link>
                                    <div className="product-action">
                                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                                        <a href="#"><i className="fa fa-heart"></i></a>
                                        <a href="#"><i className="fa fa-search"></i></a>
                                        <a href="#"><i className="fa fa-eye"></i></a>

                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="title"><a href="#">{product.title}</a></div>
                                    <div className="ratting">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">Rs {product.price}</div>
                                </div>
                            </div>
                            </div>
                            
                        ))}
            </Slider>
        </div >
            </div >
        </>
    )
}

export default RecentProducts
