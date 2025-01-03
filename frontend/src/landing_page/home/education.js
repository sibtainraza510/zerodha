import React from "react";
function Education() {
    return ( 
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginTop:"50px"}}>
            <div style={{width:"50%", paddingLeft:"80px"}}>
                <img src="/imagesforzerodha/education.svg" alt="education"></img>
            </div>
            <div style={{width:"50%", paddingRight:"30px", paddingTop:"5px"}}>
                <h1>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading. </p>
                <a href="">Varsity </a>
                <br></br>
                <br></br>
                <p>
                TradingQ&A, the most active trading and investment community in India for all your market related queries. 
                </p>
                <a href="">Varsity </a>
            </div>
        </div>
     );
}

export default Education;

