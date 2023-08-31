import React, { useState, useEffect } from 'react';
import Categories from '../Common/Categories'
const imageStyle = {
   // Set your desired width here
    height: '300px',  // Set your desired height here
  };
const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => { setProducts(data);})
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div className="breadcrumb-wrap">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Products</a></li>
                        <li className="breadcrumb-item active">product list</li>
                    </ul>
                </div>
            </div>

            <div className="product-view">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="product-search">
                                            <input type="email" value="Search"/>
                                            <button><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="product-short">
                                            <div className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Product short by</a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item">Newest</a>
                                                    <a href="#" className="dropdown-item">Popular</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {products.map((product) => (
                            <div className="col-lg-4">
                                <div className="product-item">
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                        <img src={product.image} alt="Product Image" style={imageStyle} />

                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus"></i></a>
                                            <a href="#"><i className="fa fa-heart"></i></a>
                                            <a href="#"><i className="fa fa-search"></i></a>
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
                                        <div className="price">${product.price} <span>$25</span></div>
                                    </div>
                                </div>
                            </div>
                           ))}
                        </div>
                        <div className="col-lg-12">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                      <Categories/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Products
