import React from 'react';
import Hero from './hero';
import Award from './award';
import Education from "./education";
import Pricing from "./pricing";
import Stats from './stats';
import Openaccount from '../openaccount';
import Navbar from '../navbar';
import Footer from '../footer';
function Homepage() {
    return (  
        <>
        <Navbar/>
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <Openaccount/>
        <Footer/>
        </>
    );
}

export default Homepage;


