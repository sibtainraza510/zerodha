import React from "react";
export default function Team() {
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center", paddingTop: "40px" }}>People</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          maxWidth: "100%",
          paddingTop:"50px",
          paddingLeft:"200px",
          paddingRight:"200px"
        }}
      >
        <div style={{width:"40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",}}>
          <img
            style={{ borderRadius: "100%", width: "60%" }}
            src="/imagesforzerodha/nithinkamath.jpg"
            alt="nithinkamath"
          ></img>
          <h3 style={{textAlign:"center", paddingTop:"18px"}}>Nithin kamath</h3>
          <p style={{textAlign:"center"}}>Founder , CEO</p>
        </div>
        <div style={{width:"40%"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          
          <p>Playing basketball is his zen.</p>
          
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}
