import React, { useState, useEffect } from 'react';

const RecentProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(response => response.json())
            .then(data => { setProducts(data); })
            .catch(error => console.error(error));
    }, []);
    return (
        <>
            <div class="recent-product">
                <div className="container">
                    <div className="section-header">
                        <h3>Recent Product</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
                        </p>
                    </div>
                    <div className="row align-items-center product-slider product-slider-4">
                        {products.map((product) => (
                            <div className="col-lg-2" key={product.id}>
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src={product.image} alt="Product Image"  style={{ height: '200px', width: '100%' }}/>
                                        </a>
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
                                        <div className="price">Rs {product.price}<span>25</span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentProducts
