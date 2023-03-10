import Header from "./Header";
import Footer from "./Footer";
import '../assets/css/home-style.css';
import React, { useState, useEffect } from 'react';
import { Insert, Update, DeleteById, emailVerification, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'


import { RxJsEventEmitter } from '../RxJsEventEmitter/RxJsEventEmitter';
const eventEmitter = RxJsEventEmitter.getInstance();
export default function ProductDescription() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    const [data, setData] = useState({});
    useEffect(() => {
        loadData();
        
    }, []);

    const loadData = async () => {
        const result = await getItemByID("ProductDetails",myParam);
        setData(result)
    }

    const addToCart = (itm) =>{
        let item = {id:itm.id,ProductName:itm.ProductName,OfferPrice:itm.OfferPrice,Img1:itm.Img1,OriginalPrice:itm.OriginalPrice}
        eventEmitter.emit("onCartAdd", JSON.stringify(item));
    }

    const buyNow = (itm) =>{
        let item = {id:itm.id,ProductName:itm.ProductName,OfferPrice:itm.OfferPrice,Img1:itm.Img1,OriginalPrice:itm.OriginalPrice}
        eventEmitter.emit("onCartAdd", JSON.stringify(item));
        setTimeout(() => {
            window.location.href="/checkout";
        }, 500);
        
    }
    return (
        <>
            <Header />
            <section className="w3mid-gap"></section>

            <div className="inner-banner py-5">
                <section className="w3l-breadcrumb text-left py-sm-5 ">
                    <div className="container">
                        <div className="w3breadcrumb-gids">
                            <div className="w3breadcrumb-left text-left">
                                <h2 className="inner-w3-title">
                                    {data.ProductName} </h2>
                            </div>
                            <div className="w3breadcrumb-right">
                                <ul className="breadcrumbs-custom-path">
                                    <li><a href="/">Home</a></li>
                                    <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Product</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>




            </div>
            <section className="w3l-ecommerce-main">

                <div className="ecom-contenthny w3l-ecommerce-main-inn py-5">
                    <div className="container py-lg-5">

                        <div className="sp-store-single-page row">
                            <div className="col-lg-5 single-right-left">
                                <div className="flexslider1">

                                    <ul className="slides">
                                        <li data-thumb={data.Img1}>
                                            <div className="thumb-image"> <img src={data.Img1}data-imagezoom="true" className="img-fluid radius-image" alt=" " /> </div>
                                        </li>
                                        <li data-thumb={data.Img2}>
                                            <div className="thumb-image"> <img src={data.Img2}data-imagezoom="true" className="img-fluid radius-image" alt=" " /> </div>
                                        </li>
                                        <li data-thumb={data.Img3}>
                                            <div className="thumb-image"> <img src={data.Img3}data-imagezoom="true" className="img-fluid radius-image" alt=" " /> </div>
                                        </li>
                                        <li data-thumb={data.Img4}>
                                            <div className="thumb-image"> <img src={data.Img4}data-imagezoom="true" className="img-fluid radius-image" alt=" " /> </div>
                                        </li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="eco-buttons mt-5 d-flex">

                                    <div className="shopv single-item">
                                        <form onSubmit={e => { e.preventDefault(); }}>
                                            {/* <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="shopv_item" value="Cotton Flared Kurta" />
                                            <input type="hidden" name="amount" value="599.99" /> */}
                                            <button onClick={()=>{addToCart(data)}} type="submit" className="shopv-cart pshopv-cart add-to-cart btn btn-style btn-primary">
                                                Add to Cart
                                            </button>
                                        </form>
                                    </div>
                                    <div className="buyhny-now" onClick={()=>{buyNow(data)}}> <a href="#buy" className="btn btn-style btn-primary">Buy Now </a></div>

                                </div>
                            </div>
                            <div className="col-lg-7 single-right-left ps-lg-5">
                                <h3>{data.ProductName}
                                </h3>
                                <div className="caption">

                                    <ul className="rating-single">
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-star yellow-star" aria-hidden="true"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-star yellow-star" aria-hidden="true"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-star yellow-star" aria-hidden="true"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-star-half-o yellow-star" aria-hidden="true"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-star-half yellow-star" aria-hidden="true"></span>
                                            </a>
                                        </li>
                                    </ul>

                                    <h6>
                                        <span className="item_price">₹{data.OriginalPrice}</span>
                                        <del>₹{data.OfferPrice}</del> Free Delivery
                                    </h6>
                                </div>
                                {/* <div className="desc_single my-4">
                                    <ul className="emi-views">
                                        <li><span>Special Price</span> Get extra 5% off (price inclusive of discount)</li>
                                        <li><span>Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
                                        <li><span>Bank Offer</span> 5% Cashback* on HDFC Bank Debit Cards</li>
                                        <li><span>Bank Offer</span> Extra 5% off* with Axis Bank Buzz Credit Card</li>
                                    </ul>
                                </div> */}
                                <div className="desc_single mb-4" style={{marginTop:'15px'}}>
                                    <h5>Description:</h5>
                                    <p>{data.ProductDescription}</p>
                                </div>
                                <div className="description-apt d-grid mb-4">
                                    <div className="occasional">
                                        <h5 className="sp_title mb-3">Highlights:</h5>
                                        <div dangerouslySetInnerHTML={{__html:data.Highlights}}></div>

                                    </div>

                                    <div className="color-quality">
                                        <h5 className="sp_title">Services:</h5>
                                        <div dangerouslySetInnerHTML={{__html:data.Services}}></div>
                                    </div>
                                </div>
                                <div className="description mb-4">
                                    <h5>Check delivery, payment options and charges at your location</h5>
                                    <form action="#" className="d-flex" method="post">
                                        <input type="text" placeholder="Enter pincode" required />
                                        <button className="submit btn btn-style btn-primary ms-3" type="submit">Check</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="w3l-witemshny-main py-5">
                <div className="container py-md-4">
                    <h3 className="title-w3l">New Collections</h3>

                    <div className="witemshny-grids row mt-lg-3">
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require("../assets/images/d1.jpg")} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 40% Off on Formal Wear</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require("../assets/images/d2.jpg")} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 60% Off on Active Wear</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require("../assets/images/d3.jpg")} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 40% Off on Shoes</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require("../assets/images/d4.jpg")} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 50% Off on Shirts</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require("../assets/images/d5.jpg")} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 50% Off on Clothing</a>
                            </h4>
                        </div>
                        <div className="col-xl-2 col-md-4 col-6 product-incfhny mt-4">
                            <div className="weitemshny-grid oposition-relative">
                                <a href="products-1" className="d-block zoom"><img src={require("../assets/images/d6.jpg")} alt="" className="img-fluid news-image" /></a>
                                <div className="witemshny-inf">
                                </div>
                            </div>
                            <h4 className="gdnhy-1 mt-4"><a href="products-1">Min. 60% Off on Sandles</a>
                            </h4>
                        </div>
                    </div>


                </div>
            </section>

            <section className="w3l-ecommerce-main">

                <div className="ecom-contenthny py-5">
                    <div className="container py-lg-5">
                        <h3 className="title-w3l">Featured Products</h3>
                        <p className="">Handpicked Favourites just for you</p>

                        <div className="ecom-products-grids row mt-lg-4 mt-3">
                            <div className="col-lg-3 col-6 product-incfhny mt-4">
                                <div className="product-grid2 shopv">
                                    <div className="product-image2">
                                        <a href="product-single">
                                            <img className="pic-1 img-fluid radius-image" src={require("../assets/images/shop-1.jpg")} />
                                            <img className="pic-2 img-fluid radius-image" src={require("../assets/images/shop-1.jpg")} />
                                        </a>
                                        <ul className="social">
                                            <li><a href="#" data-tip="Quick View"><span className="fa fa-eye"></span></a></li>

                                            <li><a href="products" data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a>
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
                                            <img className="pic-1 img-fluid radius-image" src={require("../assets/images/shop-2.jpg")} />
                                            <img className="pic-2 img-fluid radius-image" src={require("../assets/images/shop-2.jpg")} />
                                        </a>
                                        <ul className="social">
                                            <li><a href="#" data-tip="Quick View"><span className="fa fa-eye"></span></a></li>

                                            <li><a href="products" data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a>
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
                                            <img className="pic-1 img-fluid radius-image" src={require("../assets/images/shop-3.jpg")} />
                                            <img className="pic-2 img-fluid radius-image" src={require("../assets/images/shop-3.jpg")} />
                                        </a>
                                        <ul className="social">
                                            <li><a href="#" data-tip="Quick View"><span className="fa fa-eye"></span></a></li>

                                            <li><a href="products" data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a>
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
                                            <img className="pic-1 img-fluid radius-image" src={require("../assets/images/shop-4.jpg")} />
                                            <img className="pic-2 img-fluid radius-image" src={require("../assets/images/shop-4.jpg")} />
                                        </a>
                                        <ul className="social">
                                            <li><a href="#" data-tip="Quick View"><span className="fa fa-eye"></span></a></li>

                                            <li><a href="products" data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a>
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
            </section>

            <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>



            </div>
            <Footer />
        </>
    )
}