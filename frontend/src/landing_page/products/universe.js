import React from "react";
export default function Universe() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>The zerodha universe </h1>
      <br></br>
      <p style={{ textAlign: "center" }}>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
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
          <img style={{width:"70%",paddingBottom:"20px"}} src="/imagesforzerodha/zerodhaFundhouse.png" alt="#"></img>
          <br></br>
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div style={{width:"33.33%"}}>
          <img style={{width:"70%",paddingBottom:"20px"}}src="/imagesforzerodha/sensibullLogo.svg" alt="#"></img>
          <br></br>
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div style={{width:"33.33%"}}>
          <img style={{width:"70%",paddingBottom:"20px"}}src="/imagesforzerodha/goldenpiLogo.png" alt="#"></img>
          <br></br>
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
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
          paddingBottom:"60px",
          paddingRight:"60px",
          paddingTop:"30px"
        }}
      >
        <div style={{width:"33.33%"}}>
          <img style={{width:"50%",paddingBottom:"20px"}}src="/imagesforzerodha/streakLogo.png" alt="#"></img>
          <br></br>
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div style={{width:"33.33%"}}>
          <img style={{width:"70%",paddingBottom:"20px"}}src="/imagesforzerodha/smallcaselogo.png" alt="#"></img>
          <br></br>
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div style={{width:"33.33%"}}>
          <img style={{width:"50%", paddingBottom:"20px"}}src="/imagesforzerodha/dittoLogo.png" alt="#"></img>
          <br></br>
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
      </div>
        <div style={{padding:"60px"}}>
      <button style={{display:"block",width: "20%",margin: "0 auto", backgroundColor: "blue", padding:"2px", color:"white", border:"2px solid black", borderRadius:"6px" }}>signup now </button>
      </div>
    </div>
  );
}
