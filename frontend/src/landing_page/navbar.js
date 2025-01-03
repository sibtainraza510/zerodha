import React from 'react';
import {Link} from "react-router-dom";
function Navbar() {
    return ( 
        <div style={{display:"flex", borderBottom:"1px solid grey", justifyContent:"space-around"}}>
            <div >
                <img style={{width:"33%", padding:"15px", }} src="/imagesforzerodha/logo.svg" alt="logo"></img>     
            </div>
            <div style={{display:"flex",justifyContent:"space-around", padding:"15px", width:"40%",}}>
                <li style={{listStyleType: "none"}}><Link style={{color:"black", textDecoration:"none"}} to="/signup">Signup</Link></li>
                <li style={{listStyleType: "none"}}><Link style={{color:"black", textDecoration:"none"}} to="/about">About</Link></li>
                <li style={{listStyleType: "none"}}><Link style={{color:"black", textDecoration:"none"}} to="/products">Products</Link></li>
                <li style={{listStyleType: "none"}}><Link style={{color:"black", textDecoration:"none"}} to="/pricing">Pricing</Link></li>
                <li style={{listStyleType: "none"}}><Link style={{color:"black", textDecoration:"none"}} to="/support">Support</Link></li>
                <li style={{listStyleType: "none"}}><i class="fa-solid fa-bars"></i></li>
            </div>
        </div>
     );
}

export default Navbar;

