import React from 'react';

function Hero() {
    return ( 
        <div className='container' style={{padding: "5px"}}>
            <div className='row' >
               
                <img style={{marginBottom: "5px"}} src="/imagesforzerodha/homeHero.png" alt="hero" />
                <h1 style={{textAlign: "center"}}>invest in anything</h1>
                <p style={{textAlign: "center"}}>online platform to invest in stocks, mutual funds, and derivatives </p>
                <button style={{width: "20%",margin: "0 auto", backgroundColor: "blue", padding:"2px", color:"white", border:"2px solid black", borderRadius:"6px" }}>signup now </button>

            </div>
        </div>
     );
}

export default Hero;




