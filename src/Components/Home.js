import Header from "./Header";
import Footer from "./Footer";
import '../assets/css/home-style.css';

import {Insert,Update,DeleteById,DeleteByCondition,getItemByID,getItemByFilter,getAllItems,UploadFile} from '../database/Connection'
export default function Home() {


    const addDate = async () =>{
        var x = await getAllItems("UserDetails");
        console.log(x);
    }
    return (

        <>
            <Header />
            
            <section className="w3mid-gap"></section>

            <section className="w3l-main-slider banner-slider position-relative" id="home">
                <div className="owl-one owl-carousel owl-theme">
                    <div className="item">
                        <div className="slider-info banner-view banner-top1">
                            <div className="container">
                                <div className="banner-info header-hero-19">
                                    <h5>Up To 60% Off Now</h5>
                                    <h3 className="title-hero-19">Mid Season Sale 40%</h3>
                                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                                    <a href="products" className="btn btn-style btn-primary mt-sm-5 mt-4">Start Shopping <i className="fas fa-arrow-right ms-lg-3 ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-info banner-view banner-top2">
                            <div className="container">
                                <div className="banner-info header-hero-19">
                                    <h5>Fall Summer Clearance</h5>
                                    <h3 className="title-hero-19">Enjoy The Season Sale</h3>
                                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                                    <a href="products" className="btn btn-style btn-primary mt-sm-5 mt-4">Start Shopping <i className="fas fa-arrow-right ms-lg-3 ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-info banner-view banner-top3">
                            <div className="container">
                                <div className="banner-info header-hero-19">
                                    <h5>Up To 60% Off Now</h5>
                                    <h3 className="title-hero-19">Mid Season Sale 40%</h3>
                                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                                    <a href="products" className="btn btn-style btn-primary mt-sm-5 mt-4">Start Shopping <i className="fas fa-arrow-right ms-lg-3 ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-info banner-view banner-top4">
                            <div className="container">
                                <div className="banner-info header-hero-19">
                                    <h5>Fall Summer Clearance</h5>
                                    <h3 className="title-hero-19">Enjoy The Season Sale</h3>
                                    <p>Final Clearance: Take 20% off ‘Sale Must-Haves'</p>
                                    <a href="products" className="btn btn-style btn-primary mt-sm-5 mt-4">Start Shopping <i className="fas fa-arrow-right ms-lg-3 ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3free-ship text-center py-md-5 py-4">
                <h2>Free Shipping For You Till Midnight <i className="fas fa-shipping-fast ms-lg-3"></i></h2>
            </section>

            <div className=" w3l-3-grids py-5" id="grids-3">
                <div className="container py-md-4">
                    <div className="row">
                        <div className="col-md-6 mt-md-0">
                            <div className="grids3-info position-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/banner5.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="w3-grids3-info">
                                    <h4 className="gdnhy-1"><a href="products-1">Platform Velvet <br />Sandals</a>
                                        <a className="w3item-link btn btn-style mt-4" href="#">
                                            Shop Now <i className="fas fa-arrow-right ms-2"></i>
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4 grids3-info2">
                            <div className="grids3-info second position-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/banner4.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="w3-grids3-info second">
                                    <h4 className="gdnhy-1"><a href="products-1">Pebbled Weekend <br />Bag</a>
                                        <a className="w3item-link btn btn-style mt-4" href="#">
                                            Shop Now <i className="fas fa-arrow-right ms-2"></i>
                                        </a>
                                    </h4>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section className="w3l-witemshny-main py-5">
                <div className="container py-md-4">
                    <h3 className="title-w3l">Deals Of The Day</h3>

                    <div className="witemshny-grids row mt-lg-3">
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d1.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 40% Off on Formal Wear</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d2.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 60% Off on Active Wear</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d3.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 40% Off on Shoes</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d4.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 50% Off on Shirts</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d5.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 50% Off on Clothing</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d6.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 60% Off on Sandles</a>
                            </h4>
                        </div>
                    </div>

                    <h3 className="title-w3l mt-5 pt-lg-4">Best Discounts for You</h3>

                    <div className="witemshny-grids row mt-lg-3">
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d7.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 40% Off on Swings</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d8.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 30% Off on Office Chairs</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d9.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 40% Off on Glass Mirror</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d10.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 50% Off on Makeup Kit</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d11.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 60% Off on Handbgs</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d12.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 40% Off on Perfumes</a>
                            </h4>
                        </div>
                    </div>

                    <h3 className="title-w3l mt-5 pt-lg-4">Best Offers for You</h3>

                    <div className="witemshny-grids row mt-lg-3">
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d13.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">40% Off on Kids Wear</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d14.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 30% Off on Face Packs</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d15.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 30% Off on Women Heels</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d16.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 40% Off on Baby Toys</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d17.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 60% Off on Herbal Products</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require('../assets/images/d8.jpg')} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">30% Off on Office Chairs</a>
                            </h4>
                        </div>
                    </div>

                </div>
            </section>

            <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>




            </div>

            <section className="w3l-index5 py-5" id="video">
                <div className="new-block py-5">
                    <div className="container">
                        <div className="video-info">
                            <div className="title-content text-center">
                                <h3 className="title-w3l two mb-5">Pre-Fall Collection,That mid-summer<br /> craving for fall styles?</h3>
                            </div>
                        </div>
                        <div className="history-info py-lg-5 align-self pt-0">
                            <div className="position-relative mt-lg-3 py-5 pt-lg-0">
                                <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
                                    <span className="video-play-icon">
                                        <span className="fa fa-play"></span>
                                    </span>
                                </a>

                                <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                                    <iframe src="https://player.vimeo.com/video/145014989" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section className="w3l-ecommerce-main">

                <div className="ecom-contenthny py-5">
                    <div className="container py-lg-5">
                        <h3 className="title-w3l">Shop With Us</h3>
                        <p className="">Handpicked Favourites just for you</p>

                        <div className="ecom-products-grids row mt-lg-4 mt-3">
                            <div className="col-lg-3 col-6 product-incfhny mt-4">
                                <div className="product-grid2 shopv">
                                    <div className="product-image2">
                                        <a href="product-single">
                                            <img className="pic-1 img-fluid radius-image" src={require('../assets/images/shop-1.jpg')} />
                                            <img className="pic-2 img-fluid radius-image" src={require('../assets/images/shop-1.jpg')} />
                                        </a>
                                        <ul className="social">
                                            <li><a href="#" data-tip="Quick View"><span className="fa fa-eye"></span></a></li>

                                            <li><a href="ecommerce" data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a>
                                            </li>
                                        </ul>
                                        <div className="shopv single-item">
                                            <form action="#" method="post">
                                                <input type="hidden" name="cmd" value="_cart" />
                                                <input type="hidden" name="add" value="1" />
                                                <input type="hidden" name="shopv_item" value="Checkered Casual Shirt" />
                                                <input type="hidden" name="amount" value="899.99" />
                                                <button type="submit" className="shopv-cart pshopv-cart add-to-cart">
                                                    Add to Cart
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title"><a href="product-single">Checkered Casual Shirt </a></h3>
                                        <span className="price"><del>$975.00</del>$899.99</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 product-incfhny mt-4">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="product-single">
                                            <img className="pic-1 img-fluid radius-image" src={require('../assets/images/shop-2.jpg')} />
                                            <img className="pic-2 img-fluid radius-image" src={require('../assets/images/shop-2.jpg')} />
                                        </a>
                                        <ul className="social">
                                            <li><a href="#" data-tip="Quick View"><span className="fa fa-eye"></span></a></li>

                                            <li><a href="ecommerce" data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a>
                                            </li>
                                        </ul>
                                        <div className="shopv single-item">
                                            <form action="#" method="post">
                                                <input type="hidden" name="cmd" value="_cart" />
                                                <input type="hidden" name="add" value="1" />
                                                <input type="hidden" name="shopv_item" value="Cotton Flared Kurta" />
                                                <input type="hidden" name="amount" value="599.99" />
                                                <button type="submit" className="shopv-cart pshopv-cart add-to-cart">
                                                    Add to Cart
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title"><a href="product-single">Cotton Flared Kurta</a></h3>
                                        <span className="price"><del>$775.00</del>$599.99</span>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-6 product-incfhny mt-4">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="product-single">
                                            <img className="pic-1 img-fluid radius-image" src={require('../assets/images/shop-3.jpg')} />
                                            <img className="pic-2 img-fluid radius-image" src={require('../assets/images/shop-3.jpg')} />
                                        </a>
                                        <ul className="social">
                                            <li><a href="#" data-tip="Quick View"><span className="fa fa-eye"></span></a></li>

                                            <li><a href="ecommerce" data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a>
                                            </li>
                                        </ul>
                                        <div className="shopv single-item">
                                            <form action="#" method="post">
                                                <input type="hidden" name="cmd" value="_cart" />
                                                <input type="hidden" name="add" value="1" />
                                                <input type="hidden" name="shopv_item" value="Men Casual Shirt" />
                                                <input type="hidden" name="amount" value="799.99" />
                                                <button type="submit" className="shopv-cart pshopv-cart add-to-cart">
                                                    Add to Cart
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title"><a href="product-single">Men Casual Shirt </a></h3>
                                        <span className="price"><del>$875.00</del>$799.99</span>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-6 product-incfhny mt-4">
                                <div className="product-grid2">
                                    <div className="product-image2">
                                        <a href="product-single">
                                            <img className="pic-1 img-fluid radius-image" src={require('../assets/images/shop-4.jpg')} />
                                            <img className="pic-2 img-fluid radius-image" src={require('../assets/images/shop-4.jpg')} />
                                        </a>
                                        <ul className="social">
                                            <li><a href="#" data-tip="Quick View"><span className="fa fa-eye"></span></a></li>

                                            <li><a href="ecommerce" data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a>
                                            </li>
                                        </ul>
                                        <div className="shopv single-item">
                                            <form action="#" method="post">
                                                <input type="hidden" name="cmd" value="_cart" />
                                                <input type="hidden" name="add" value="1" />
                                                <input type="hidden" name="shopv_item" value="Blend Straight Kurta" />
                                                <input type="hidden" name="amount" value="399.99" />
                                                <button type="submit" className="shopv-cart pshopv-cart add-to-cart">
                                                    Add to Cart
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title"><a href="product-single">Blend Straight Kurta </a></h3>
                                        <span className="price"><del>$475.00</del>$399.99</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section> */}

            {/* <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>



            </div> */}

            {/* <section className="w3l-clients w3l-test" id="testimonials">
                <div className="container py-lg-5 py-md-4 pt-5 pb-5">
                    <div className="row">
                        <div className="col-lg-4 testimonials-con-left-info py-sm-5 pt-0 py-3">
                            <div className="title-content text-left p-xl-3">
                                <h6 className="title-subw3hny">Reviews</h6>
                                <h3 className="title-w3l two">What Clients Say ?</h3>
                                <p className="test-p mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                    ultrices in ligula. Semper at tempufddfel.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8 testimonials-con-right mt-lg-0 mt-3 p-xl-3 pb-4">
                            <div id="owl-demo2" className="owl-carousel owl-theme testimonials-2 py-sm-5 pt-0 py-3">
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">

                                            <p><i className="fas fa-quote-left me-2"></i> Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                                faucibus orci luctus et ultrices posuere.</p>
                                        </div>
                                        <div className="bottom-info mt-4">
                                            <a className="comment-img" href="#url"><img src={require('../assets/images/team1.jpg')} className="img-fluid radius-image" alt="placeholder image" /></a>
                                            <div className="people-info align-self">
                                                <h3>Johnson william</h3>
                                                <p className="identity">Example City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <p><i className="fas fa-quote-left me-2"></i> Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                                faucibus orci luctus et ultrices posuere.</p>
                                        </div>
                                        <div className="bottom-info mt-4">
                                            <a className="comment-img" href="#url"><img src={require('../assets/images/team2.jpg')} className="img-fluid radius-image" alt="placeholder image" /></a>
                                            <div className="people-info align-self">
                                                <h3>Alexander sakura</h3>
                                                <p className="identity">Example City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <p><i className="fas fa-quote-left me-2"></i> Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                                faucibus orci luctus et ultrices posuere.</p>
                                        </div>
                                        <div className="bottom-info mt-4">
                                            <a className="comment-img" href="#url"><img src={require('../assets/images/team3.jpg')} className="img-fluid radius-image" alt="placeholder image" /></a>
                                            <div className="people-info align-self">
                                                <h3>John wilson</h3>
                                                <p className="identity">Example City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <p><i className="fas fa-quote-left me-2"></i> Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                                faucibus orci luctus et ultrices posuere.</p>
                                        </div>
                                        <div className="bottom-info mt-4">
                                            <a className="comment-img" href="#url"><img src={require('../assets/images/team4.jpg')} className="img-fluid radius-image" alt="placeholder image" /></a>
                                            <div className="people-info align-self">
                                                <h3>Julia sakura</h3>
                                                <p className="identity">Example City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <p><i className="fas fa-quote-left me-2"></i> Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                                faucibus orci luctus et ultrices posuere.</p>
                                        </div>
                                        <div className="bottom-info mt-4">
                                            <a className="comment-img" href="#url"><img src={require('../assets/images/team2.jpg')} className="img-fluid radius-image" alt="placeholder image" /></a>
                                            <div className="people-info align-self">
                                                <h3>John wilson</h3>
                                                <p className="identity">Example City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <p><i className="fas fa-quote-left me-2"></i> Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                                faucibus orci luctus et ultrices posuere.</p>
                                        </div>
                                        <div className="bottom-info mt-4">
                                            <a className="comment-img" href="#url"><img src={require('../assets/images/team3.jpg')} className="img-fluid radius-image" alt="placeholder image" /></a>
                                            <div className="people-info align-self">
                                                <h3>Julia sakura</h3>
                                                <p className="identity">Example City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="w3l-subscription-infhny py-5">
                <div className="container py-md-5">
                    <div className="subscription-info text-center mx-auto">
                        <i className="far fa-envelope"></i>
                        <h3 className="title-w3l mb-2">Get On The List</h3>
                        <p>Shop Exclusive Promos & SAVE 20% on Your First Order</p>

                        <form action="#" method="post" className="w3l-signin-form mt-4 mb-3">
                            <div className="forms-gds">
                                <div className="form-input">
                                    <input type="email" name="" placeholder="Your email here" required="" />
                                </div>
                                <div className="form-input"><button className="btn btn-style btn-primary">Subscribe</button></div>
                            </div>
                        </form>
                        <p>By entering your email, you are accepting our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>
                    </div>
                </div>
            </section>
            <Footer />
            
        </>

    );
}
