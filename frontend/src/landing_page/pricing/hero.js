import React from "react";
export default function Hero(){
    return(
        <div>
            <div style={{paddingLeft:"50px", paddingRight:"50px", textAlign:"center", paddingTop:"70px", paddingBottom:"70px"}}>
                <h2>Charges</h2>
                <h4 style={{color:"grey"}}>List of all charges and taxes</h4>
            </div>
            
            <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems:"center",
          width: "80%",
          marginLeft:"170px",
          columnGap:"80px",
          paddingLeft:"60px",
          paddingBottom:"30px",
          paddingRight:"60px",
          paddingTop:"60px"
        }}
      >
        <div style={{width:"33.33%"}}>
          <img style={{width:"70%",paddingBottom:"20px"}} src="/imagesforzerodha/pricing0.svg" alt="#"></img>
          <br></br>
          <h4>Free equity delivery</h4>
          <p>
          All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div style={{width:"33.33%"}}>
          <img style={{width:"70%",paddingBottom:"20px"}}src="/imagesforzerodha/intradayTrades.svg" alt="#"></img>
          <br></br>
          <h4>Intraday and F&O trades</h4>
          <p>
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div style={{width:"33.33%"}}>
          <img style={{width:"70%",paddingBottom:"20px"}}src="/imagesforzerodha/pricingMF.svg" alt="#"></img>
          <br></br>
          <h4>
          Free direct MF</h4>
          <p>
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>

     
    </div>
    )
}