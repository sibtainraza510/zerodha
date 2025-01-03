import React from "react";
import Createticket from "./createticket.js";
import Hero from "./hero.js";
import Footer from "../footer.js";
import Navbar from"../navbar.js";
export default function Supportpage(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <Createticket/>
            <Footer/>
        </>
    )
}