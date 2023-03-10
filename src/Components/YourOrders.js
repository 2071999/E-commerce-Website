import Header from "./Header";
import Footer from "./Footer";
import '../assets/css/home-style.css';
import React, { useState, useEffect } from 'react';
import { Insert, Update, DeleteById, emailVerification, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'
const moment = require('moment');

export default function YourOrders() {
    let detail = JSON.parse(localStorage.getItem('userStamp'));
    const [data, setData] = useState([]);
    useEffect(() => {

        loadDate();
    }, []);

    const loadDate = async () => {
        const result = await getItemByFilter("Orders", ["Email", '==', detail.Email]);
        setData(result)

    }
    return (
        <>
            <Header />
            <section className="w3l-ecommerce-main">
                <div className="ecom-contenthny w3l-ecommerce-main-inn py-5">
                    <div className="container py-lg-5">


                        <div className="accordion" id="accordionExample">

                            {data.map((val, id) => {
                                return (
                                    <div className="accordion-item" style={{ marginBottom: '30px',borderRadius:'15px' }}>
                                        <h2 className="accordion-header" id="headingOne">
                                            <div className="accordion-button" style={{borderTopRightRadius:'15px',borderTopLeftRadius:'15px'}}>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <p style={{fontWeight:'bold'}}>ORDER PLACED</p>
                                                    <a>{moment(new Date(val.PlacedOn)).format('d MMMM YYYY')}</a>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <p>Total</p>
                                                    <a>₹{val.Total}</a>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-3"></div>
                                                <div className="col-lg-3 col-md-3 col-sm-3" style={{ textAlign: 'right' }}>

                                                    <a href={"/invoice?id="+val.id}>Download Invoice</a>
                                                </div>
                                            </div>
                                            {/* <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Accordion Item #1
                                            </button> */}
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <b>Delivery Status : {val.Status}</b>
                                                <div className="container">
                                                {val.Items.map((product,idd)=>{
                                                    return(
                                                        <div className="row" style={{marginTop:'10px'}}>
                                                        <div className="col-sm-4 col-lg-1 col-md-4">
                                                            <img style={{width:'58px',height:'90px'}} src={product.Img1}/>
                                                        </div>
                                                        <div className="col-sm-8 col-lg-11 col-md-8">
                                                            <p>{product.ProductName}</p>
                                                            <p><b>Qty: </b>{product.Qty}</p>
                                                            <p>Price:- ₹{product.OfferPrice}</p>
                                                        </div>
                                                    </div>
                                                    )
                                                })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}



                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}