import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import FeaturedProducts from '../Common/FeaturedProducts'

export const ProductDetail = () => {

    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    // Product details attributes
    const [title, setTitle] = useState([]);
    const [category, setCategory] = useState([]);
    const [description, setDescription] = useState([]);
    const [img, setImg] = useState([]);
    //

    window.scrollTo(0, 0);
    fetch('https://fakestoreapi.com/products/' + id)
        .then(response => response.json())
        .then(data => {
            setTitle(data.title);
            setCategory(data.category);
            setDescription(data.description);
            setImg(data.image);
            setLoading(false);
        })
        .catch(error => console.error(error));

    return (
        <>
            <div className="breadcrumb-wrap">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Products</a></li>
                        <li className="breadcrumb-item active">product details</li>
                    </ul>
                </div>
            </div>


            <div className="product-detail">
                <div className="container">
                    <div className="row">
                        <>
                            {loading ? (
                                <div className="col-lg-9 shimmer" style={{ height: '200px', width: '100%' }}></div>
                            ) : (
                                <div className="col-lg-9">
                                    <div className="row align-items-center product-detail-top">
                                        <div className="col-md-5">
                                            <div className="product-slider-single">
                                                <img src={img} alt="Product Image" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="product-content">
                                                <div className="title"><h2>{title}</h2></div>
                                                <div className="ratting">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="price">$22 <span>$25</span></div>
                                                <div className="details">
                                                    <p>
                                                        {description}
                                                    </p>
                                                </div>

                                                <div className="quantity">
                                                    <h4>Quantity:</h4>
                                                    <div className="qty">
                                                        <button className="btn-minus"><i className="fa fa-minus"></i></button>
                                                        <input type="text" value="1" />
                                                        <button className="btn-plus"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                </div>
                                                <div className="action">
                                                    <a href="#"><i className="fa fa-cart-plus"></i></a>
                                                    <a href="#"><i className="fa fa-heart"></i></a>
                                                    <a href="#"><i className="fa fa-search"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row product-detail-bottom">
                                        <div className="col-lg-12">
                                            <ul className="nav nav-pills nav-justified">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="pill" href="#description">Description</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="pill" href="#specification">Specification</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="pill" href="#reviews">Reviews (1)</a>
                                                </li>
                                            </ul>

                                            <div className="tab-content">
                                                <div id="description" className="container tab-pane active">
                                                    <h4>Product description</h4>
                                                    <p>
                                                        {description}
                                                    </p>
                                                </div>
                                                <div id="specification" className="container tab-pane fade">
                                                    <h4>Product specification</h4>
                                                    <ul>
                                                        <li>Lorem ipsum dolor sit amet</li>
                                                        <li>Lorem ipsum dolor sit amet</li>
                                                        <li>Lorem ipsum dolor sit amet</li>
                                                        <li>Lorem ipsum dolor sit amet</li>
                                                        <li>Lorem ipsum dolor sit amet</li>
                                                    </ul>
                                                </div>
                                                <div id="reviews" className="container tab-pane fade">
                                                    <div className="reviews-submitted">
                                                        <div className="reviewer">Phasellus Gravida - <span>01 Jan 2020</span></div>
                                                        <div className="ratting">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <p>
                                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                                        </p>
                                                    </div>
                                                    <div className="reviews-submit">
                                                        <h4>Give your Review:</h4>
                                                        <div className="ratting">
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        {/* <div className="row form">
                                                            <div className="col-sm-6">
                                                                <input type="text" placeholder="Name" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="email" placeholder="Email" />
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <textarea placeholder="Review"></textarea>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <button>Submit</button>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <FeaturedProducts />
                                </div>
                            )}

                        </>
                        <div className="col-lg-3">
                            <div className="sidebar-widget category">
                                <h2 className="title">Category</h2>
                                <ul>
                                    <li><a href="#">Lorem Ipsum</a><span>(83)</span></li>
                                    <li><a href="#">Cras sagittis</a><span>(198)</span></li>
                                    <li><a href="#">Vivamus</a><span>(95)</span></li>
                                    <li><a href="#">Fusce vitae</a><span>(48)</span></li>
                                    <li><a href="#">Vestibulum</a><span>(210)</span></li>
                                    <li><a href="#">Proin phar</a><span>(78)</span></li>
                                </ul>
                            </div>

                            <div className="sidebar-widget image">
                                <h2 className="title">Featured Product</h2>
                                <a href="#">
                                    <img src="img/category-1.jpg" alt="Image" />
                                </a>
                            </div>

                            <div className="sidebar-widget brands">
                                <h2 className="title">Our Brands</h2>
                                <ul>
                                    <li><a href="#">Nulla </a><span>(45)</span></li>
                                    <li><a href="#">Curabitur </a><span>(34)</span></li>
                                    <li><a href="#">Nunc </a><span>(67)</span></li>
                                    <li><a href="#">Ullamcorper</a><span>(74)</span></li>
                                    <li><a href="#">Fusce </a><span>(89)</span></li>
                                    <li><a href="#">Sagittis</a><span>(28)</span></li>
                                </ul>
                            </div>

                            <div className="sidebar-widget tag">
                                <h2 className="title">Tags Cloud</h2>
                                <a href="#">Lorem ipsum</a>
                                <a href="#">Vivamus</a>
                                <a href="#">Phasellus</a>
                                <a href="#">pulvinar</a>
                                <a href="#">Curabitur</a>
                                <a href="#">Fusce</a>
                                <a href="#">Sem quis</a>
                                <a href="#">Mollis metus</a>
                                <a href="#">Sit amet</a>
                                <a href="#">Vel posuere</a>
                                <a href="#">orci luctus</a>
                                <a href="#">Nam lorem</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
