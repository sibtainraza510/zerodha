import React from 'react';
function Stats() {
    return ( 
        <div  style={{display:'flex', flexDirection:"row", justifyContent:"space-around", flexWrap:"wrap"}}>
             <div style={{width:"40%",paddingLeft:"100px",paddingTop:"25px"}}>
                <h2>Trust with confidence</h2>
                <br></br>
                <h5>Customer-first always </h5>
                <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India. </p>
                <br></br>
                <h5>No spam or gimmicks</h5>
                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                <br></br>
                <h5>The Zerodha universe </h5>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <br></br>
                <h5>Do better with money </h5>
                <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>

            <div style={{width:"50%"}}>
                <img style={{height:"550px"}} src="/imagesforzerodha/ecosystem.png" alt="ecosystem"></img>
                <a style={{paddingLeft:"150px"}} href="">Explore our products<i class="fa-solid fa-arrow-right"></i> </a>
                <a style={{paddingLeft:"40px"}} href="">Try kite demo<i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
     );
}

export default Stats;


