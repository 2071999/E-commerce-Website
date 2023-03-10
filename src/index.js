import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from './Components/Home';
import Login from './Components/Login';
import Products from './Components/Products';
import ProductDescription from './Components/ProductDescription';
import Cart from './Components/Cart';
import ContactUs from './Components/ContactUs';
import Payments from './Components/Payments';
import Error from './Components/Error';
import DataList from './Admin/DataList';
import Register from './Components/Register';
import YourOrders from './Components/YourOrders';
import InvoicePDF from './Components/InvoicePDF';
import AdminLogin from './Components/AdminLogin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/productsDetail" element={<ProductDescription/>} />
        <Route path="/checkout" element={<Cart/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/payment" element={<Payments/>} />
        <Route path="/admin" element={<DataList/>} />
        
        <Route path="/your-orders" element={<YourOrders/>} />
        <Route path="/invoice" element={<InvoicePDF/>} />
        <Route path="/adminLogin" element={<AdminLogin/>} />
        <Route path="*" element={<Error/>} />
        
        {/* <Redirect from='*' to='/404' /> */}
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
