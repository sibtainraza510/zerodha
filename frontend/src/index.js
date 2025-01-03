import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Homepage from './landing_page/home/homepage';
import Signup from "./landing_page/signup/signup";
import Aboutpage from './landing_page/about/aboutpage';
import Pricingpage from './landing_page/pricing/pricingpage';
import Supportpage from "./landing_page/support/supportpage";
import Product from "./landing_page/products/productpage";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage></Homepage>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/about" element={<Aboutpage/>}></Route>
    <Route path="/pricing" element={<Pricingpage/>}></Route>
    <Route path="/support" element={<Supportpage/>}></Route>
    <Route path="/products" element={<Product></Product>}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
