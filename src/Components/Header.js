
// import Helmet  from 'Helmet';
import Script from "react-load-script";
import React, { useState, useEffect } from 'react';
import { RxJsEventEmitter } from '../RxJsEventEmitter/RxJsEventEmitter';
const eventEmitter = RxJsEventEmitter.getInstance();


export default function Header() {

    let detail = JSON.parse(localStorage.getItem('userStamp'));
    const localCart = JSON.parse(localStorage.getItem('localCart'));
    const [cart, setCartData] = useState(localCart ? localCart : []);
    const [showCart, setCart] = useState(false);
    const [total,setTotal]= useState(0);
    useEffect(() => {
        eventEmitter.on("onCartAdd", (itm) => {
            setCartDetail(itm)
        });
        getTotal(cart)
    }, []);


    const setCartDetail = (itm) => {
        setCart(false);
        setTimeout(() => {
            const temp = cart;
            temp.push(JSON.parse(itm));

            const data = groupBy(temp, 'id');
            let finalArr = [];
            for (const property in data) {
                let element = data[property][0];
                element["Qty"] = data[property].length;
                finalArr.push(element)
            }

            setCartData(finalArr);
            saveCartonLocal(finalArr)
            getTotal(finalArr)
            setCart(true)
        }, 500);

    }


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
        getTotal(newArr)
        setCart(false)
        setCart(true)
    }

    const groupBy = (xs, key) => {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }


    const saveCartonLocal = (item)=>{
        localStorage.setItem('localCart', JSON.stringify(item));
        eventEmitter.emit("cartRefresh", "");
    }

    const logout = () =>{
        localStorage.setItem('userStamp',null);
        window.location.href="/login";
    }

    const themeChange = () => {



        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);

            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }


        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }


    }

    const getTotal = (arr) => {
        let sum = 0;
        arr.forEach(element => {
            sum += element.Qty * element.OfferPrice;
        })
        setTotal(sum)
    }

    return (
        <header id="site-header" className="fixed-top nav-fixed">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
                    <h1><a className="navbar-brand pe-xl-5 pe-lg-4" href="/">
                        Goodie<span className="w3yellow">Craft</span>
                    </a></h1>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className={window.location.pathname == "/" ? "nav-link active":"nav-link"} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={window.location.pathname == "/products" ? "nav-link active":"nav-link"} href="/products">Products</a>
                            </li>

                            
                            
                            <li className="nav-item">
                                <a className={window.location.pathname == "/contact" ? "nav-link active":"nav-link"} href="/contact">Contact</a>
                            </li>
                            {detail && Object.keys(detail).length!=0?<>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#Pages" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Your Account <span className="fa fa-angle-down ms-1"></span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item pt-2" href="">My Profile</a></li>
                                    <li><a className="dropdown-item pt-2" href="/your-orders">Your Orders</a></li>
                                    <li><a className="dropdown-item pt-2" onClick={()=>{logout()}}>Logout</a></li>
                                </ul>
                            </li>
                            </>:<></>}
                            <li className="nav-item search-right">
                                <a href="#search" className="btn search-btn" title="search"><span className="fas fa-search me-2" aria-hidden="true"></span></a>

                                <div id="search" className="pop-overlay">
                                    <div className="popup">
                                        <h3 className="title-w3l two mb-4 text-left">Search Here</h3>
                                        <form action="#" method="GET" className="search-box d-flex position-relative">
                                            <input type="search" placeholder="Enter Keyword here" name="search" required="required" autoFocus="" />
                                            <button type="submit" className="btn"><span className="fas fa-search" aria-hidden="true"></span></button>
                                        </form>
                                    </div>
                                    <a className="close" href="#close">×</a>
                                </div>

                            </li>
                        </ul>


                    </div>
                    <ul className="header-search me-lg-4 d-flex">
                        {!detail ?<>
                        <li className="get-btn me-2">
                            <a href="/login" className="btn btn-style btn-primary" title="search"><i className="fas fa-user me-lg-2"></i> <span className="btn-texe-inf">Login</span></a>
                        </li>
                        </>:<>
                        
                        </>}
                        <li className="shopvcart galssescart2 cart cart box_1 get-btn">
                            {/* <form className="last"> */}
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button className="top_shopv_cart" type="submit" name="submit" value="" onClick={() => { setCart(true) }}>
                                <span className="fas fa-shopping-bag me-lg-2"></span> <span className="btn-texe-inf" >Cart</span>

                            </button>
                            {/* </form> */}
                        </li>
                    </ul>

                    <div className="mobile-position">
                        <nav className="navigation">
                            <div className="theme-switch-wrapper">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" id="checkbox" onChange={() => { themeChange() }} />
                                    <div className="mode-container">
                                        <i className="gg-sun"></i>
                                        <i className="gg-moon"></i>
                                    </div>
                                </label>
                            </div>
                        </nav>
                    </div>

                </nav>
            </div>
            {showCart ? <>
                <div id="staplesbmincart">
                    <form onSubmit={e => {           e.preventDefault();         }}    >
                        <div className="sbmincart-suc-cart-text"> Cart</div>
                        <button type="button" className="sbmincart-closer" onClick={() => { setCart(false) }}>×</button>
                        <ul>
                            {cart.map((val, id) => {
                                return (
                                    <li className="sbmincart-item">
                                        <div className="sbmincart-details-name">
                                            <a className="sbmincart-name" href={"/productsDetail?id=" + val.id}>{val.ProductName}</a>
                                            <ul className="sbmincart-attributes">
                                            </ul>
                                        </div>
                                        <div className="sbmincart-details-quantity">
                                            <input className="sbmincart-quantity" data-sbmincart-idx="0" name="quantity_1" type="text" pattern="[0-9]*" defaultValue={val.Qty} onChange={(e) => {
                                                const temp = cart;
                                                temp[id]["Qty"] = e.target.value ? e.target.value : 0;
                                                setCartData(temp);
                                                saveCartonLocal(temp)
                                                getTotal(temp)
                                            }} autoComplete="off" />
                                        </div>
                                        <div className="sbmincart-details-remove">
                                            <button type="button" className="sbmincart-remove" data-sbmincart-idx="0" onClick={() => {
                                                deletItem(val.id)
                                                
                                            }}>×</button>
                                        </div>            <div className="sbmincart-details-price">
                                            <span className="sbmincart-price">₹{val.OfferPrice}</span>
                                        </div>
                                    </li>
                                )
                            })}

                        </ul>
                        <div className="sbmincart-footer">
                            <div className="sbmincart-subtotal">                Subtotal: ₹{total}           </div>
                            <button className="sbmincart-submit" type="submit" data-sbmincart-alt="undefined" onClick={()=>{window.location.href="/checkout"}}>Check Out</button>
                        </div>
                    </form>
                </div>
            </> : <></>}
        </header>
    );
}
