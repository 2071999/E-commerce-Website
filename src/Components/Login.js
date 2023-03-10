import Header from "./Header";
import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import '../assets/css/home-style.css';
import { Insert, Update, DeleteById, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'


export default function Login() {
    const [formData, setColumns] = useState({});
    const [isProcessing, setFlag] = useState(false);
    useEffect(() => {
        checkSession();
    }, []);

    const checkSession = async()=>{
        let detail = JSON.parse(localStorage.getItem('userStamp'));
        const x = await getItemByFilter("Registration", ['Email', '==', detail.Email]);
        let isValid = false;

        x.forEach(element=>{
            if(element.Password == detail.Password){
                isValid = true;
            }
        });
        if(isValid){
            
            window.location.href="/checkout"
        }
        
    }

    const login = async ()=>{
        setFlag(true)
        const x = await getItemByFilter("Registration", ['Email', '==', formData.Email]);
        let isValid = false;
        let item = {};
        x.forEach(element=>{
            if(element.Password == formData.Password){
                isValid = true;
                item = element;
            }
        });
        if(isValid){
            localStorage.setItem('userStamp', JSON.stringify(item));
            window.location.href="/checkout"
        }
        else{
            alert('Email or Password is Invalid')
        }
        setFlag(false)
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
                                    Login </h2>
                            </div>
                            <div className="w3breadcrumb-right">
                                <ul className="breadcrumbs-custom-path">
                                    <li><a href="/">Home</a></li>
                                    <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Login </li>
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

                        <h2>Login to your account</h2>
                        <form action="#" method="post">
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
                            <div className="form-sub-content">
                                <p className="forgot-w3ls"><a className href="#">Forgot Password?</a></p>
                                <p className="forgot-w3ls1"> <a className href="/register">New User?</a></p>
                            </div>
                            <div className="submit-button text-center">
                                <button disabled={isProcessing} className="btn btn-style btn-primary" onClick={()=>{login()}}>Login Now</button>

                            </div>
                        </form>

                    </div>

                </div>

            </section>
            <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>



            </div>
            <Footer />
        </>
    )
}