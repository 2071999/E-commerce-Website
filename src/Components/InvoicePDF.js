// import '../assets/css/home-style.css';
import React, { useState, useEffect } from 'react';
import '../assets/css/pdf.css'
import { Insert, Update, DeleteById, emailVerification, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'
const moment = require('moment');

export default function InvoicePDF() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    const [data, setData] = useState({});
    useEffect(() => {
        loadDate();
    }, []);

    const loadDate = async () => {
        const result = await getItemByID("Orders", myParam);
        setData(result)

    }
    return (
        <div id="pdf">
            <a href="#" onClick={()=>{window.print();}}>Print this page for your records.</a>
            <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding">
                <div className="card">
                    <div className="card-header p-4">

                        <div className="float-right"> <h3 className="mb-0">Invoice</h3>
                            Date: {moment(new Date(data.PlacedOn)).format('d MMMM YYYY')}</div>
                    </div>
                    <div className="card-body">
                        <div className="row mb-4">
                            <div className="col-sm-6">
                                <h5 className="mb-3">From:</h5>
                                <h3 className="text-dark mb-1">Goodie Craft</h3>
                                <div>Near Jodhpur Cross Road</div>
                                <div>Ahmedabad 380015</div>
                                <div>Email: contact@GoodieCraft.com</div>
                                <div>Phone: +91 7572 861 142</div>
                            </div>
                            <div className="col-sm-6 ">
                                <h5 className="mb-3">To:</h5>
                                <h3 className="text-dark mb-1">{data.Name}</h3>
                                <div>{data.HouseNo}, {data.Area}</div>
                                <div>{data.Landmark}, {data.City}, {data.Pincode} , {data.State}</div>
                                <div>Email:{data.Email}</div>
                                <div>Phone: {data.Phone}</div>
                            </div>
                        </div>
                        <div className="table-responsive-sm">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th className="center">#</th>
                                        <th>Item</th>
                                        
                                        <th className="right">Price</th>
                                        <th className="center">Qty</th>
                                        <th className="right">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.Items && data.Items.map((val, id) => {
                                        return (
                                            <tr>
                                                <td className="center">{id+1}</td>
                                                <td className="left strong">{val.ProductName}</td>
                                               
                                                <td className="right">₹{val.OfferPrice}</td>
                                                <td className="center">{val.Qty}</td>
                                                <td className="right">₹{val.Qty * val.OfferPrice}</td>
                                            </tr>
                                        )
                                    })}

                                   
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-5">
                            </div>
                            <div className="col-lg-4 col-sm-5">
                            </div>
                            <div className="col-lg-4 col-sm-5 ml-auto">
                                <table className="table table-clear">
                                    <tbody>
                                        <tr>
                                            <td className="left">
                                                <strong className="text-dark">Subtotal</strong>
                                            </td>
                                            <td className="right">₹{data.Total}</td>
                                        </tr>
                                        {/* <tr>
                                            <td className="left">
                                                <strong className="text-dark">Discount (20%)</strong>
                                            </td>
                                            <td className="right">$5,761,00</td>
                                        </tr>
                                        <tr>
                                            <td className="left">
                                                <strong className="text-dark">VAT (10%)</strong>
                                            </td>
                                            <td className="right">$2,304,00</td>
                                        </tr> */}
                                        <tr>
                                            <td className="left">
                                                <strong className="text-dark">Total</strong>
                                            </td>
                                            <td className="right">
                                                <strong className="text-dark">₹{data.Total}</strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-white" style={{textAlign:'center'}}>
                        <p className="mb-0">🙏 Thank you for shopping with Goodie Craft 🙏</p>
                    </div>
                </div>
            </div>
        </div>
    )
}