import React from "react";
import Hero from "./hero.js";
import Leftsection from "./leftsection.js";
import Rightsection from "./rightsection.js";
import Universe from "./universe.js";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
export default function Product() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr style={{width:"80%",marginLeft:"200px", marginBottom:"60px"}}></hr>
      <Leftsection
        imageURL="/imagesforzerodha/kite.png"
        productname="kite"
        productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."  trydemo="try demo" learnmore="learn more" googleplay="" appstore=""
      />
     
      <Rightsection
       imageURL="/imagesforzerodha/console.png"
       productname="console"
       productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."  trydemo="learn more" learnmore="" googleplay="" appstore=""
        />
      <br></br>

      <Leftsection
        imageURL="/imagesforzerodha/coin.png"
        productname="coin"
        productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."  trydemo="coin" learnmore="" googleplay="" appstore=""
      />
      <Rightsection
       imageURL="/imagesforzerodha/kiteconnect.png"
       productname="kite connect api"
       productdescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."  trydemo="kite connect" learnmore="" googleplay="" appstore=""
        />
      <br></br>

      <Leftsection
        imageURL="/imagesforzerodha/varsity.png"
        productname="varsity"
        productdescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  trydemo="" learnmore="" googleplay="" appstore=""
      />
      <br></br>

      <h5 style={{textAlign:"center", padding:"70px"}}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
      <Universe />
      <Footer />
    </>
  );
}
