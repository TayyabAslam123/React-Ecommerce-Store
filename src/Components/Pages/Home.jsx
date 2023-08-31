import React from 'react'
import Slider from '../Common/Slider'
import FeaturedProducts from '../Common/FeaturedProducts'
import RecentProducts from '../Common/RecentProducts'
import OurBrands from '../Common/OurBrands'

const Home = () => {
    return (
        <>
            <Slider />

            {/* Feature's Section */}
            <div className="feature">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-shield"></i>
                                <h2>Trusted Shopping</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-shopping-bag"></i>
                                <h2>Quality Product</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-truck"></i>
                                <h2>Worldwide Delivery</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-phone"></i>
                                <h2>Telephone Support</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature's Section */}

            {/* Category Start */}
            <div className="category">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="category-img">
                                <img src="img/category-1.jpg" />
                                <a className="category-name" href="">
                                    <h2>Category Name</h2>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-img">
                                <img src="img/category-3.jpg" />
                                <a className="category-name" href="">
                                    <h2>Category Name</h2>
                                </a>
                            </div>
                            <div className="category-img">
                                <img src="img/category-4.jpg" />
                                <a className="category-name" href="">
                                    <h2>Category Name</h2>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-img">
                                <img src="img/category-2.jpg" />
                                <a className="category-name" href="">
                                    <h2>Category Name</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category End */}

            {/* Featured Products */}
            <FeaturedProducts />
            {/* Featured Products */}

            {/* Recent Products */}
            <RecentProducts />
            {/* Recent Products */}

            {/* Brands */}
            <OurBrands />
            {/* Brands */}

        </>
    )
}

export default Home
