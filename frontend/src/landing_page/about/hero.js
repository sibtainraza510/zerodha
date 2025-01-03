import React from "react";
export default function Hero(){
    return(
        <div>
            <div style={{paddingLeft:"50px", paddingRight:"50px", textAlign:"center", paddingTop:"70px", paddingBottom:"70px", borderBottom:"0.5px solid grey"}}>
                <h2>We pioneered the discount broking model in India.</h2>
                <h2>Now, we are breaking ground with our technology.</h2>
            </div>
            <div style={{display:"flex", justifyContent:"space-around", maxWidth:"100%", paddingLeft:"200px", paddingRight:"200px", paddingTop:"70px", alignItems:"top"}}>
                <div style={{width:"40%", lineHeight:"1.5"}}>
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <br></br>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <br></br>
                    <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div style={{width:"40%", lineHeight:"1.5"}}>
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <br></br>
                    <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <br></br>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
                </div>
            </div>
        </div>
    )
};
