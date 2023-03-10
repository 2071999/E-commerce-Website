import Header from "./Header";
import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import '../assets/css/home-style.css';
import { Insert, Update, DeleteById,emailVerification, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'

export default function Register() {

    const [formData, setColumns] = useState({});
    const [isProcessing, setFlag] = useState(false);
    useEffect(() => {

    }, []);

    const onSave = async () => {
        setFlag(true)
        if (checkPhone(formData.Phone)) {
            if (checkEmail(formData.Email)) {
                if (formData.Password) {


                    const x = await getItemByFilter("Registration", ['Email', '==', formData.Email]);
                    if (x.length == 0) {
                        await Insert("Registration", formData);
                        // await emailVerification(formData.Email)
                        alert('Successfully Registered!!')
                    }
                    else {
                        alert('User Already Exist!!')
                    }
                }
                else {
                    alert('Please Enter Password')
                }
            }
            else {
                alert('Please Enter Valid Email')
            }
        }
        else {
            alert('Please Enter Valid Mobile number')
        }
        setFlag(false)
    }

    const checkEmail = (input) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (input.match(validRegex)) {
            return true
        }
        else {
            return false;
        }
    }

    const checkPhone = (inputtxt) => {

        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

        return re.test(inputtxt);

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
                                    Register </h2>
                            </div>
                            <div className="w3breadcrumb-right">
                                <ul className="breadcrumbs-custom-path">
                                    <li><a href="/">Home</a></li>
                                    <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Register </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>



            </div>
            <section className="w3l-forml-main py-5">
                <div className="form-hnyv-sec py-sm-5 py-3">

                    <div className="form-wrapv">

                        <h2>Register your account</h2>
                        {/* <form> */}
                        <div className="form-sub-w3">
                            <input type="text" name="Name" placeholder="Full Name" onChange={(e) => {
                                let temp = formData;
                                temp["Name"] = e.target.value
                                setColumns(temp)
                            }} required="" />
                            <div className="icon-w3">
                                <span className="fas fa-user" aria-hidden="true"></span>
                            </div>
                        </div>
                        <div className="form-sub-w3">
                            <input type="tel" name="Mobile No" placeholder="Mobile No" required="" onChange={(e) => {
                                let temp = formData;
                                temp["Phone"] = e.target.value
                                setColumns(temp)
                            }} />
                            <div className="icon-w3">
                                <span className="fas fa-mobile" aria-hidden="true"></span>
                            </div>
                        </div>
                        <div className="form-sub-w3">
                            <input type="text" name="email" placeholder="Email " required="" onChange={(e) => {
                                let temp = formData;
                                temp["Email"] = e.target.value
                                setColumns(temp)
                            }} />
                            <div className="icon-w3">
                                <span className="fas fa-envelope" aria-hidden="true"></span>
                            </div>
                        </div>
                        <div className="form-sub-w3">
                            <input type="password" name="Password" placeholder="Password" required="" onChange={(e) => {
                                let temp = formData;
                                temp["Password"] = e.target.value
                                setColumns(temp)
                            }} />
                            <div className="icon-w3">
                                <span className="fas fa-unlock-alt" aria-hidden="true"></span>
                            </div>
                        </div>

                        <div className="submit-button text-center">
                            <button disabled={isProcessing} className="btn btn-style btn-primary" onClick={() => { onSave() }}>Register</button>

                        </div>
                        {/* </form> */}

                    </div>

                </div>

            </section>
            <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>



            </div>
            <Footer />
        </>
    )
}