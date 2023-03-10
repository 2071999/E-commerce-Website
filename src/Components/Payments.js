import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import '../assets/css/home-style.css';
import $ from 'jquery';
import { Insert, Update, DeleteById, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'

// require('../assets/js/payments.js')
export default function Payments() {

    const [order, setOrder] = useState(false);
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    useEffect(() => {
        loadOrder();
    }, []);

    const loadOrder = async ()=>{
       
        const result = await getItemByID("Orders",myParam);
        setOrder(result);
    }

    const ProceesToPayment = async ()=>{
        let temp = order;
        temp["PaymentMethod"] = "COD";
        temp["Status"] = "In Processing"
        await Update("Orders",myParam,temp);
        localStorage.setItem('localCart', JSON.stringify([]));
        alert('Your Order has been placed successfully!!')
        window.location.href="/"
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
                                    <li><a href="/">Home</a></li>
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

                <div className="ecom-contenthny py-5">
                    <div className="container py-lg-5">

                        <div className="ecom-contenthny-w3lcheckout privacy">

                            <h3>Payment</h3>

                            <div className="checkout-right mt-4">

                                <div id="parentHorizontalTab">
                                    <ul className="resp-tabs-list hor_1">
                                        <li>Cash on delivery (COD)</li>
                                        <li>Credit/Debit</li>
                                        <li>Netbanking</li>
                                        <li>Paypal Account</li>
                                    </ul>
                                    <div className="resp-tabs-container hor_1">

                                        <div>
                                            <div className="vertical_post check_box_agile pb-lg-5 pb-4">
                                                <h5>COD</h5>
                                                <div className="checkbox">
                                                    <div className="check_box_one cashon_delivery">
                                                        <label className="anim">
                                                            <input type="checkbox" className="checkbox" />
                                                            <span className="pl-2"> We also accept Credit/Debit card on delivery. Please Check with the
                                                                agent.</span>
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <form action="#" method="post" className="creditly-card-form agileinfo_form information-wrapper">
                                                <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                                                    <div className="credit-card-wrapper">
                                                        <div className="first-row form-group">
                                                            <div className="controls">
                                                                <label className="control-label">Name on Card</label>
                                                                <input className="billing-address-name form-control" type="text" name="name" placeholder="John Smith" />
                                                            </div>
                                                            <div className="w3_agileits_card_number_grids">
                                                                <div className="w3_agileits_card_number_grid_left">
                                                                    <div className="controls">
                                                                        <label className="control-label">Card Number</label>
                                                                        <input className="number credit-card-number form-control" type="text" name="number" inputMode="numeric" autoComplete="cc-number" autocompletetype="cc-number" x-autocompletetype="cc-number" placeholder="&#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149;" />
                                                                    </div>
                                                                </div>
                                                                <div className="w3_agileits_card_number_grid_right">
                                                                    <div className="controls">
                                                                        <label className="control-label">CVV</label>
                                                                        <input className="security-code form-control" inputMode="numeric" type="text" name="security-code" placeholder="&#149;&#149;&#149;" />
                                                                    </div>
                                                                </div>
                                                                <div className="clear"> </div>
                                                            </div>
                                                            <div className="controls">
                                                                <label className="control-label">Expiration Date</label>
                                                                <input className="expiration-month-and-year form-control" type="text" name="expiration-month-and-year" placeholder="MM / YY" />
                                                            </div>
                                                        </div>
                                                        <button className="submit btn btn-style btn-primary mt-4">Make a payment</button>

                                                    </div>
                                                </section>
                                            </form>

                                        </div>
                                        <div>
                                            <div className="vertical_post">
                                                <form action="#" method="post">
                                                    <h5>Select From Popular Banks</h5>
                                                    <div className="swit-radio mt-4">
                                                        <div className="check_box_one">
                                                            <div className="radio_one"> <label><input type="radio" name="radio" /><i></i>Syndicate Bank</label> </div>
                                                        </div>
                                                        <div className="check_box_one">
                                                            <div className="radio_one"> <label><input type="radio" name="radio" /><i></i>Bank of Baroda</label> </div>
                                                        </div>
                                                        <div className="check_box_one">
                                                            <div className="radio_one"> <label><input type="radio" name="radio" /><i></i>Canara Bank</label> </div>
                                                        </div>
                                                        <div className="check_box_one">
                                                            <div className="radio_one"> <label><input type="radio" name="radio" /><i></i>ICICI Bank</label> </div>
                                                        </div>
                                                        <div className="check_box_one">
                                                            <div className="radio_one"> <label><input type="radio" name="radio" /><i></i>State Bank Of India</label> </div>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <h5>Or SELECT OTHER BANK</h5>
                                                    <div className="section_room_pay mt-4">
                                                        <select className="year py-3">
                                                            <option value="">=== Other Banks ===</option>
                                                            <option value="ALB-NA">Allahabad Bank NetBanking</option>
                                                            <option value="ADB-NA">Andhra Bank</option>
                                                            <option value="BBK-NA">Bank of Bahrain and Kuwait NetBanking</option>
                                                            <option value="BBC-NA">Bank of Baroda Corporate NetBanking</option>
                                                            <option value="BBR-NA">Bank of Baroda Retail NetBanking</option>
                                                            <option value="BOI-NA">Bank of India NetBanking</option>
                                                            <option value="BOM-NA">Bank of Maharashtra NetBanking</option>
                                                            <option value="CSB-NA">Catholic Syrian Bank NetBanking</option>
                                                            <option value="CBI-NA">Central Bank of India</option>
                                                            <option value="CUB-NA">City Union Bank NetBanking</option>
                                                            <option value="CRP-NA">Corporation Bank</option>
                                                            <option value="DBK-NA">Deutsche Bank NetBanking</option>
                                                            <option value="DCB-NA">Development Credit Bank</option>
                                                            <option value="DC2-NA">Development Credit Bank - Corporate</option>
                                                            <option value="DLB-NA">Dhanlaxmi Bank NetBanking</option>
                                                            <option value="FBK-NA">Federal Bank NetBanking</option>
                                                            <option value="IDS-NA">Indusind Bank NetBanking</option>
                                                            <option value="IOB-NA">Indian Overseas Bank</option>
                                                            <option value="ING-NA">ING Vysya Bank (now Kotak)</option>
                                                            <option value="JKB-NA">Jammu and Kashmir NetBanking</option>
                                                            <option value="JSB-NA">Janata Sahakari Bank Limited</option>
                                                            <option value="KBL-NA">Karnataka Bank NetBanking</option>
                                                            <option value="KVB-NA">Karur Vysya Bank NetBanking</option>
                                                            <option value="LVR-NA">Lakshmi Vilas Bank NetBanking</option>
                                                            <option value="OBC-NA">Oriental Bank of Commerce NetBanking</option>
                                                            <option value="CPN-NA">PNB Corporate NetBanking</option>
                                                            <option value="PNB-NA">PNB NetBanking</option>
                                                            <option value="RSD-DIRECT">Rajasthan State Co-operative Bank-Debit Card
                                                            </option>
                                                            <option value="RBS-NA">RBS (The Royal Bank of Scotland)</option>
                                                            <option value="SWB-NA">Saraswat Bank NetBanking</option>
                                                            <option value="SBJ-NA">SB Bikaner and Jaipur NetBanking</option>
                                                            <option value="SBH-NA">SB Hyderabad NetBanking</option>
                                                            <option value="SBM-NA">SB Mysore NetBanking</option>
                                                            <option value="SBT-NA">SB Travancore NetBanking</option>
                                                            <option value="SVC-NA">Shamrao Vitthal Co-operative Bank</option>
                                                            <option value="SIB-NA">South Indian Bank NetBanking</option>
                                                            <option value="SBP-NA">State Bank of Patiala NetBanking</option>
                                                            <option value="SYD-NA">Syndicate Bank NetBanking</option>
                                                            <option value="TNC-NA">Tamil Nadu State Co-operative Bank NetBanking
                                                            </option>
                                                            <option value="UCO-NA">UCO Bank NetBanking</option>
                                                            <option value="UBI-NA">Union Bank NetBanking</option>
                                                            <option value="UNI-NA">United Bank of India NetBanking</option>
                                                            <option value="VJB-NA">Vijaya Bank NetBanking</option>
                                                        </select>
                                                    </div>
                                                    <button className="submit btn btn-style btn-primary mt-4">Pay Now</button>

                                                </form>
                                            </div>
                                        </div>
                                        <div>
                                            <div id="tab4" className="tab-grid" style={{ display: 'block' }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <img className="pp-img img-fluid" src={require("../assets/images/paypal.png")} alt="Image Alternative text" title="Image Title" />
                                                        <p>Important: You will be redirected to PayPal's website to securely
                                                            complete your payment.</p><a className="btn btn-style btn-primary mt-4">Checkout via
                                                                Paypal</a>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <form className="cc-form information-wrapper">
                                                            <div className="clearfix">
                                                                <div className="form-group form-group-cc-number">
                                                                    <label>Card Number</label>
                                                                    <input className="form-control" placeholder="xxxx xxxx xxxx xxxx" type="text" />
                                                                    <span className="cc-card-icon" />
                                                                </div>
                                                                <div className="form-group form-group-cc-cvc">
                                                                    <label>CVV</label>
                                                                    <input className="form-control" placeholder="xxxx" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="clearfix">
                                                                <div className="form-group form-group-cc-name">
                                                                    <label>Card Holder Name</label>
                                                                    <input className="form-control" type="text" />
                                                                </div>
                                                                <div className="form-group form-group-cc-date">
                                                                    <label>Valid Thru</label>
                                                                    <input className="form-control" placeholder="mm/yy" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="checkbox">
                                                                <div className="check_box_one pament-check vertical_post">
                                                                    <label className="anim">
                                                                        <input type="checkbox" className="checkbox checkboxpay" />
                                                                        <span className="pe-2"> Add to My
                                                                            Cards</span>
                                                                    </label>
                                                                    <div className="clearfix"></div>
                                                                </div>
                                                                <div className="clearfix"></div>
                                                            </div>

                                                            <button className="submit btn btn-style btn-primary mt-4">Proceed Payment </button>

                                                        </form>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div style={{textAlign:'right',marginTop:'15px'}}>

                        
                        <button className="submit check_out btn btn-style btn-primary" onClick={() => { ProceesToPayment() }}>Place Order</button>
                        </div>
                    </div>

                </div>
                
            </section>

            <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>



            </div>
            <script src='../assets/js/payments.js'></script>
            <Footer />
        </>
    )
}