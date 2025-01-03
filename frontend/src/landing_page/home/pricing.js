import React from 'react';
function Pricing() {
    return ( 
        <div style={{display:'flex', flexDirection:"row", justifyContent:"space-around", flexWrap:"wrap", marginTop:"80px"}}>
            <div style={{width:"40%",paddingLeft:"100px"}}>
                <h2>Unbeatable pricing </h2>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges. </p>
            </div>

            <div style={{width:"50%", display:"flex", flexDirection:"row" , height:"120px"}}>
                <div style={{border:"1px solid black", textAlign:"center", padding:"10px", width:"40%"}}>
                <h1>$ 0</h1>
                <p>Free equity delivery and direct mutual funds </p>
                </div>
                <div style={{border:"1px solid black",borderLeft:"0px" ,textAlign:"center", padding:"10px",width:"40%"}}>
                <h1>$ 20</h1>
                <p>Intraday and F&O </p>
                </div>
            </div>

        </div>
     );
}

export default Pricing;