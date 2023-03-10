import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import '../assets/css/home-style.css';
import { Insert, Update, DeleteById, emailVerification, DeleteByCondition, getItemByID, getItemByFilter, getAllItems, UploadFile } from '../database/Connection'
export default function ContactUs() {
    const [data, setData] = useState({});
    const save = async () => {
        await Insert("ContactUs",data);
        alert('Successfully Saved Details')
        window.location.reload();
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
                                    Contact Us </h2>
                            </div>
                            <div className="w3breadcrumb-right">
                                <ul className="breadcrumbs-custom-path">
                                    <li><a href="index">Home</a></li>
                                    <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Contact Us</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>




            </div>

            <section className="w3l-contact-2 py-5" id="contact">
                <div className="container py-lg-4 py-md-3 py-2">
                    <div className="title-content text-center">
                        <h6 className="title-subw3hny mb-1">Get in touch</h6>
                        <h3 className="title-w3l mb-5">Contact with our support <br />
                            during emergency!</h3>
                    </div>

                    <div className="contact-grids mt-5 pt-lg-3">
                        <div className="contact-left">
                            <div className="row cont-details">
                                <div className="col-lg-4 col-md-6 cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-map-marker-alt"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Office Address:</h6>
                                        <p>Near Jodhpur Cross Road, Ahmedabad, 380015</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 cont-top margin-up ps-lg-5">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-phone-alt"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Call for help :</h6>
                                        <p><a href="tel:+91 7572 861 142">+91 7572 861 142</a></p>
                                        <p><a href="tel:+91 9574 257 564">+91 9574 257 564</a></p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="far fa-envelope"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>
                                            Mail us:</h6>
                                        <p><a href="mailto:support@GoodieCraft.com" className="mail">support@GoodieCraft.com</a></p>
                                        <p><a href="mailto:contact@GoodieCraft.com" className="mail">contact@GoodieCraft.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-right mt-lg-4">
                            <form className="signin-form">
                                <div className="input-grids">
                                    <input type="text" name="w3lName" id="w3lName" placeholder="Your Name*" className="contact-input" required="" onChange={(e) => {
                                        let temp = data;
                                        temp["Name"] = e.target.value
                                        setData(temp)
                                    }} />
                                    <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*" className="contact-input" required="" onChange={(e) => {
                                        let temp = data;
                                        temp["Email"] = e.target.value
                                        setData(temp)
                                    }} />
                                    <input type="text" name="w3lPhone" id="w3lPhone" placeholder="Enter your Phone Number *" required="" onChange={(e) => {
                                        let temp = data;
                                        temp["Phone"] = e.target.value
                                        setData(temp)
                                    }} />
                                    <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject*" className="contact-input" required="" onChange={(e) => {
                                        let temp = data;
                                        temp["Subject"] = e.target.value
                                        setData(temp)
                                    }} />
                                </div>
                                <div className="form-input">
                                    <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here*" required="" onChange={(e) => {
                                        let temp = data;
                                        temp["Message"] = e.target.value
                                        setData(temp)
                                    }}></textarea>
                                </div>
                                <div className="submit-w3l-button text-lg-right">
                                    <button className="btn btn-style btn-primary" onClick={() => { save() }}>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="map-iframe mt-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.891039270222!2d72.52733540000001!3d23.0277726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ceb94fec83%3A0x293f49098743170a!2sJodhpur%20Cross%20Rd%2C%20Suryapooja%20Block%20B%2C%20Satellite%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1678459326660!5m2!1sen!2sin" width="100%" height="400" frameborder="0" style={{ border: '0px' }} allowfullscreen=""></iframe>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl" width="100%" height="400" frameborder="0" style={{ border: '0px' }} allowfullscreen=""></iframe> */}
                    </div>
                </div>
            </section>

            <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}>



            </div>
            <Footer />
        </>
    )
}