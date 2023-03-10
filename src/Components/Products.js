import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import '../assets/css/home-style.css';
import { RxJsEventEmitter } from '../RxJsEventEmitter/RxJsEventEmitter';
import { Insert, Update, DeleteById, emailVerification, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'

const eventEmitter = RxJsEventEmitter.getInstance();
export default function Products() {

    const [data, setData] = useState([]);
    const [copydata, setCopyData] = useState([]);
    const [category, setCategories] = useState([]);
    const [discount, setDiscount] = useState([]);

    useEffect(() => {
        loadData();
        
    }, []);

    const loadData = async () => {
        const result = await getItemByFilter("ProductDetails", ["IsActive", "==", true])
        setData(result)
        setCopyData(JSON.stringify(result))
        categories(result);
    }

    const categories = async (result) => {
        const data = groupBy(result, 'Category')
        let temp = [];
        for (const property in data) {
            temp.push({ Category: property, val: data[property] })
        }

        setCategories(temp)
    }

    const applyDiscount = async (discount)=>{
        
        const data = JSON.parse(copydata);
        let percent = [];
        for (const property in data) {
            if(data[property]){
                percent.push(property);
            }
        }
        if(percent.length == 0){
            setData(data);
        }
        else{
            data.forEach(element=>{
                let OfferPrice = element.OfferPrice;
                let OriginalPrice = element.OriginalPrice;
                
            })
        }
    }

    const groupBy = (xs, key) => {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }


    const addToCart = (itm) =>{
        let item = {id:itm.id,ProductName:itm.ProductName,OfferPrice:itm.OfferPrice,Img1:itm.Img1,OriginalPrice:itm.OriginalPrice}
        eventEmitter.emit("onCartAdd", JSON.stringify(item));
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
                                    Products </h2>
                            </div>
                            <div className="w3breadcrumb-right">
                                <ul className="breadcrumbs-custom-path">
                                    <li><a href="">Home</a></li>
                                    <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Products </li>
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
                        <div className="ecommerce-grids row">
                            <div className="ecommerce-left-hny col-lg-4">

                                <aside className="pe-lg-4">
                                    <div className="sider-bar">


                                        <div className="single-gd mb-5">
                                            <h4>Product Categories</h4>
                                            <ul className="list-group single">
                                                {category.map((val, id) => {
                                                    return (
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            {val.Category}
                                                            <span className="badge badge-primary badge-pill">{val.val.length}</span>
                                                        </li>
                                                    )
                                                })}


                                            </ul>
                                        </div>

                                        <div className="single-gd mb-5">
                                            <h4>Discount </h4>
                                            <div className="box-hny">
                                                <label className="containerhny-checkbox">15% or More
                                                    <input type="checkbox" onChange={(e) => {
                                                        let temp = discount;
                                                        temp["15"] = e.target.checked
                                                        setDiscount(temp)
                                                        applyDiscount(temp);
                                                    }} />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="containerhny-checkbox">20% or More
                                                    <input type="checkbox" onChange={(e) => {
                                                        let temp = discount;
                                                        temp["20"] = e.target.checked
                                                        setDiscount(temp)
                                                        applyDiscount(temp);
                                                    }} />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="containerhny-checkbox">35% or More
                                                    <input type="checkbox" onChange={(e) => {
                                                        let temp = discount;
                                                        temp["35"] = e.target.checked
                                                        setDiscount(temp)
                                                        applyDiscount(temp);
                                                    }} />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="containerhny-checkbox">55% or More
                                                    <input type="checkbox" onChange={(e) => {
                                                        let temp = discount;
                                                        temp["55"] = e.target.checked
                                                        setDiscount(temp)
                                                        applyDiscount(temp);
                                                    }} />
                                                    <span className="checkmark"></span>
                                                </label>

                                                <label className="containerhny-checkbox">65% or More
                                                    <input type="checkbox" onChange={(e) => {
                                                        let temp = discount;
                                                        temp["65"] = e.target.checked
                                                        setDiscount(temp)
                                                        applyDiscount(temp);
                                                    }} />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="containerhny-checkbox">75% or More
                                                    <input type="checkbox" onChange={(e) => {
                                                        let temp = discount;
                                                        temp["75"] = e.target.checked
                                                        setDiscount(temp)
                                                        applyDiscount(temp);
                                                    }} />
                                                    <span className="checkmark"></span>
                                                </label>

                                            </div>

                                        </div>
                                    </div>
                                </aside>

                            </div>

                            <div className="ecommerce-right-hny col-lg-8">
                                <div className="row ecomhny-topbar">
                                    <div className="col-6 ecomhny-result">
                                        <h4 className="ecomhny-result-count"> Showing all 9 Results</h4>
                                    </div>
                                    <div className="col-6 ecomhny-topbar-ordering">

                                        <div className="ecom-ordering-select d-flex">
                                            <span className="fa fa-angle-down" aria-hidden="true"></span>
                                            <select>
                                                <option value="menu_order">Default Sorting</option>
                                                <option value="popularity">Sort by Popularity</option>
                                                <option value="rating">Sort by Average rating</option>
                                                <option value="date">Sort by latest</option>
                                                <option value="price">Sort by Price: low to high</option>
                                                <option value="price-desc">Sort by Price: high to low</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className="ecom-products-grids row">
                                    {data.map((val, id) => {
                                        return (
                                            <div className="col-lg-4 col-6 product-incfhny mt-4">
                                                <div className="product-grid2 shopv">
                                                    <div className="product-image2">
                                                        <a href={"/productsDetail?id="+val.id}>
                                                            <img style={{ width: '241px', height: '310px', objectFit: 'cover' }} className="pic-1 img-fluid radius-image" src={val.Img1} />
                                                            <img style={{ width: '241px', height: '310px', objectFit: 'cover' }} className="pic-2 img-fluid radius-image" src={val.Img1} />
                                                        </a>
                                                        <ul className="social">
                                                            <li><a onClick={()=>{addToCart(val)}} data-tip="Quick View"><span className="fa fa-eye"></span></a></li>

                                                            <li><a onClick={()=>{addToCart(val)}} data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a>
                                                            </li>
                                                        </ul>
                                                        <div className="shopv single-item">
                                                            {/* <form action="#" method="post"> */}
                                                                <input type="hidden" name="cmd" value="_cart" />
                                                                <input type="hidden" name="add" value="1" />
                                                                <input type="hidden" name="shopv_item" value="Checkered Casual Shirt" />
                                                                <input type="hidden" name="amount" value="899.99" />
                                                                <button type="submit" className="shopv-cart pshopv-cart add-to-cart" onClick={()=>{addToCart(val)}}>
                                                                    Add to Cart
                                                                </button>
                                                            {/* </form> */}
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h3 className="title"><a href={"/productsDetail?id="+val.id}>{val.ProductName} </a></h3>
                                                        <span className="price"><del>₹{val.OriginalPrice}</del>₹{val.OfferPrice}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}



                                </div>
                                <div className="row w3l-3-grids mt-5">
                                    <div className="col-md-6 mt-md-0">
                                        <div className="grids3-info position-relative">
                                            <a href="products-1" className="d-block zoom"><img src={require('../assets/images/banner5.jpg')} alt="" className="img-fluid news-image" /></a>
                                            <div className="w3-grids3-info">
                                                <h4 className="gdnhy-1"><a href="products">Platform Velvet <br />Sandals</a>

                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-md-0 mt-4 grids3-info2">
                                        <div className="grids3-info second position-relative">
                                            <a href="products-1" className="d-block zoom"><img src={require('../assets/images/banner4.jpg')} alt="" className="img-fluid news-image" /></a>
                                            <div className="w3-grids3-info second">
                                                <h4 className="gdnhy-1"><a href="products">Pebbled Weekend <br />Bag</a>

                                                </h4>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="pagination">
                                    <ul>
                                        <li className="prev"><a href="#page-number"><span className="fa fa-angle-double-left"></span></a></li>
                                        <li><a href="#page-number" className="active">1</a></li>
                                        <li><a href="#page-number">2</a></li>
                                        <li><a href="#page-number">3</a></li>

                                        <li className="next"><a href="#page-number"><span className="fa fa-angle-double-right"></span></a></li>
                                    </ul>
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