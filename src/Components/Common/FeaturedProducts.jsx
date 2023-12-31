import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import {
    Link
} from "react-router-dom";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);


    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: true,
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
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(response => response.json())
            .then(data => { setProducts(data); })
            .catch(error => console.error(error));
    }, []);
    return (
        <>
            <div className="featured-product">
                <div className="container">
                    <div className="section-header">
                        <h3>Featured Product</h3>
                        <p>
                            Our Featured Products section showcases a curated selection of our finest items, handpicked for their exceptional quality and popularity
                        </p>
                    </div>
                    <Slider {...settings} className="row align-items-center product-slider product-slider-4">
                        {products.map((product) => (
                            <div key={product.id} className="col-lg-12">
                                <div className="product-item" >
                                    <div className="product-image">
                                        <Link to={`/product-detail/${product.id}`}>
                                            <img src={product.image} alt="Product Image" style={{ height: '250px', width: '100%' }} />
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

export default FeaturedProducts
