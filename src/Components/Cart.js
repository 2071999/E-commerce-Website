import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import '../assets/css/home-style.css';
import { RxJsEventEmitter } from '../RxJsEventEmitter/RxJsEventEmitter';

import { Insert, Update, DeleteById, emailVerification, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'
const eventEmitter = RxJsEventEmitter.getInstance();
export default function Cart() {
    const localCart = JSON.parse(localStorage.getItem('localCart'));
    let userDetail = JSON.parse(localStorage.getItem('userStamp'));
    const [formData, setColumns] = useState(userDetail ? userDetail : {});
    const [cart, setCartData] = useState(localCart ? localCart : []);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        getTotal(cart);
        eventEmitter.on("cartRefresh", (itm) => {
            const localCart = JSON.parse(localStorage.getItem('localCart'));
            setCartData(localCart ? localCart : [])
            getTotal(localCart ? localCart : []);
        });
    }, []);

    const deletItem = (id) => {
        const temp = cart;
        let newArr = []
        temp.forEach(element => {
            if (element.id != id) {
                newArr.push(element)
            }
        })
        setCartData(newArr);
        saveCartonLocal(newArr)
        getTotal(newArr);

    }

    const IncDecQty = (id, qty) => {
        const temp = cart;
        temp[id]["Qty"] = qty;
        setCartData(temp);
        saveCartonLocal(temp)
        getTotal(temp)

    }

    const getTotal = (arr) => {
        let sum = 0;
        arr.forEach(element => {
            sum += element.Qty * element.OfferPrice;
        })
        setTotal(sum)
    }

    const saveCartonLocal = (item) => {
        localStorage.setItem('localCart', JSON.stringify(item));
    }


    const ProceedToOrder = async () => {
        // let temp = formData;
        // delete temp.id;
        localStorage.setItem('userStamp', JSON.stringify(formData));
        await Update("Registration", formData.id, formData);
        const orders = JSON.parse(JSON.stringify(formData));
        orders["Items"] = cart;
        orders["PlacedOn"] = new Date().toISOString();
        orders["Total"] = total;
        const result = await Insert("Orders",orders);
        
        window.location.href="/payment?id="+result.id
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
                                    Checkout </h2>
                            </div>
                            <div className="w3breadcrumb-right">
                                <ul className="breadcrumbs-custom-path">
                                    <li><a href="/">Home</a></li>
                                    <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Checkout </li>
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
                            <h3>Chec<span>kout</span></h3>
                            <div className="checkout-right">
                                <p className="mb-5">Your shopping cart contains: <span>{cart.length} Products</span></p>
                                <table className="timetable_sub">
                                    <thead>
                                        <tr>
                                            <th>SL No.</th>
                                            <th>Product</th>
                                            <th>Quality</th>
                                            <th>Product Name</th>

                                            <th>Price</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((val, id) => {
                                            return (
                                                <tr className="rem1">
                                                    <td className="invert">{id + 1}</td>
                                                    <td className="invert-image"><a href="product-singl">
                                                        <img src={val.Img1} style={{ width: '128px', height: '164px', objectFit: 'cover' }} className="img-fluid radius-image" alt="" /></a></td>
                                                    <td className="invert">
                                                        <div className="quantity">
                                                            <div className="quantity-select">
                                                                <div className="entry value-minus" onClick={() => { IncDecQty(id, val.Qty - 1) }}>&nbsp;</div>
                                                                <div className="entry value"><span>{val.Qty}</span></div>
                                                                <div className="entry value-plus active" onClick={() => { IncDecQty(id, val.Qty + 1) }}>&nbsp;</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invert">{val.ProductName}</td>

                                                    <td className="invert">₹{val.OfferPrice}</td>
                                                    <td className="invert">
                                                        <div className="rem">
                                                            <div className="close1" onClick={() => { deletItem(val.id) }}><i className="far fa-window-close"></i> </div>
                                                        </div>

                                                    </td>
                                                </tr>
                                            )
                                        })}



                                    </tbody>
                                </table>
                            </div>
                            <div className="row checkout-left mt-5">
                                <div className="col-md-4 checkout-left-basket">
                                    <h4>Continue to basket</h4>
                                    <ul>
                                        {cart.map((val, id) => {
                                            return (
                                                <li>{val.ProductName} <i>-</i> <span>₹{val.OfferPrice} </span></li>
                                            )
                                        })}


                                        <li>Total <i>-</i> <span>₹{total}</span></li>
                                    </ul>
                                </div>
                                {Object.keys(formData).length!=0 ? <>
                                    <div className="col-md-8 address_form_agile ps-lg-5">
                                        <h4>Add a new Details</h4>
                                        <form className="creditly-card-form agileinfo_form mt-4" onSubmit={e => { e.preventDefault(); }}>
                                            <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                                                <div className="information-wrapper">
                                                    <div className="first-row form-group">
                                                        <div className="controls">

                                                            <input className="billing-address-name form-control" type="text" name="name" defaultValue={formData.Name} onChange={(e) => {
                                                                let temp = formData;
                                                                temp["Name"] = e.target.value;
                                                                setColumns(temp);
                                                            }} placeholder="Full name" />
                                                        </div>
                                                        <div className="w3_agileits_card_number_grids">
                                                            <div className="w3_agileits_card_number_grid_left">
                                                                <div className="controls">

                                                                    <input className="form-control" type="text" defaultValue={formData.Phone} onChange={(e) => {
                                                                        let temp = formData;
                                                                        temp["Phone"] = e.target.value;
                                                                        setColumns(temp);
                                                                    }} placeholder="Mobile number" />
                                                                </div>
                                                            </div>
                                                            <div className="w3_agileits_card_number_grid_right">
                                                                <div className="controls">

                                                                    <input className="form-control" type="text" defaultValue={formData.HouseNo} onChange={(e) => {
                                                                        let temp = formData;
                                                                        temp["HouseNo"] = e.target.value;
                                                                        setColumns(temp);
                                                                    }} placeholder="House No" />
                                                                </div>
                                                            </div>
                                                            <div className="clear"> </div>
                                                        </div>
                                                        <div className="w3_agileits_card_number_grids">
                                                            <div className="w3_agileits_card_number_grid_left">
                                                                <div className="controls">

                                                                    <input className="form-control" type="text" defaultValue={formData.Area} onChange={(e) => {
                                                                        let temp = formData;
                                                                        temp["Area"] = e.target.value;
                                                                        setColumns(temp);
                                                                    }} placeholder="Area" />
                                                                </div>
                                                            </div>
                                                            <div className="w3_agileits_card_number_grid_right">
                                                                <div className="controls">

                                                                    <input className="form-control" type="text" defaultValue={formData.Landmark} onChange={(e) => {
                                                                        let temp = formData;
                                                                        temp["Landmark"] = e.target.value;
                                                                        setColumns(temp);
                                                                    }} placeholder="Landmark" />
                                                                </div>
                                                            </div>
                                                            <div className="clear"> </div>
                                                        </div>
                                                        <div className="w3_agileits_card_number_grids">
                                                            <div className="w3_agileits_card_number_grid_left">
                                                                <div className="controls">

                                                                    <input className="form-control" type="text" defaultValue={formData.Pincode} onChange={(e) => {
                                                                        let temp = formData;
                                                                        temp["Pincode"] = e.target.value;
                                                                        setColumns(temp);
                                                                    }} placeholder="Pincode" />
                                                                </div>
                                                            </div>
                                                            <div className="w3_agileits_card_number_grid_right">
                                                                <div className="controls">

                                                                    <input className="form-control" type="text" defaultValue={formData.City} onChange={(e) => {
                                                                        let temp = formData;
                                                                        temp["City"] = e.target.value;
                                                                        setColumns(temp);
                                                                    }} placeholder="City" />
                                                                </div>
                                                            </div>
                                                            <div className="clear"> </div>
                                                        </div>
                                                        <div className="controls">
                                                            <select class="form-control option-w3ls" name="State" id="State" value={formData.State} onChange={(e) => {
                                                                let temp = formData;
                                                                temp["State"] = e.target.value
                                                                setColumns(temp)
                                                            }}><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option><option value="Bihar">Bihar</option><option value="Chhattisgarh">Chhattisgarh</option><option value="Goa">Goa</option><option value="Gujarat">Gujarat</option><option value="Haryana">Haryana</option><option value="Himachal Pradesh">Himachal Pradesh</option><option value="Jammu and Kashmir">Jammu and Kashmir</option><option value="Jharkhand">Jharkhand</option><option value="Karnataka">Karnataka</option><option value="Kerala">Kerala</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Maharashtra">Maharashtra</option><option value="Manipur">Manipur</option><option value="Meghalaya">Meghalaya</option><option value="Mizoram">Mizoram</option><option value="Nagaland">Nagaland</option><option value="Odisha">Odisha</option><option value="Punjab">Punjab</option><option value="Rajasthan">Rajasthan</option><option value="Sikkim">Sikkim</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Telangana">Telangana</option><option value="Tripura">Tripura</option><option value="Uttarakhand">Uttarakhand</option><option value="Uttar Pradesh">Uttar Pradesh</option><option value="West Bengal">West Bengal</option><option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option><option value="Chandigarh">Chandigarh</option><option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option><option value="Daman and Diu">Daman and Diu</option><option value="Delhi">Delhi</option><option value="Lakshadweep">Lakshadweep</option><option value="Puducherry">Puducherry</option></select>
                                                        </div>
                                                    </div>
                                                    {cart.length !=0 ? <>
                                                    <button className="submit check_out btn btn-style btn-primary" onClick={() => { ProceedToOrder() }}>Proceed To Payment</button>
                                                    </>:<></>}
                                                </div>
                                            </section>
                                        </form>
                                        <div className="checkout-right-basket">
                                            {/* <a className="btn btn-style btn-primary" href="/payment">Make a Payment <i className="fas fa-arrow-right ms-lg-3 ms-2"></i></a> */}
                                        </div>
                                    </div>
                                </> : <><b>Kindly please login to place the order</b></>}
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