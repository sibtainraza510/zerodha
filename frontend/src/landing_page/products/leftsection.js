import React from "react";
export default function Leftsection({imageURL,productname,productdescription,trydemo,learnmore,googleplay,appstore}){
    return(
            <div style={{display:"flex", flexDirection:"row",justifyContent:"space-around", alignItems:"center", flexWrap:"nowrap", marginLeft:"100px"}}>
                <div style={{width:"40%"}}>
                    <img src={imageURL} alt="#"></img>
                </div>

                <div style={{width:"30%"}}>
                    <h1>{productname}</h1>
                    <p>{productdescription}</p>
                    <div style={{width:"100%", display:"flex",justifyContent:"start"}}>
                    <a style={{paddingRight:"100px",textDecoration:"none"}}href={trydemo}>{trydemo}</a>
                    <a href={learnmore}>{learnmore}</a>
                    </div>
                    <br></br>
                    <div style={{width:"100%", display:"flex",justifyContent:"start"}}>
                    <a style={{paddingRight:"100px"}}href={googleplay}><img src="/imagesforzerodha/googlePlayBadge.svg" alt="#"></img></a>
                    <a href={appstore}><img src="/imagesforzerodha/appstoreBadge.svg" alt="#"></img></a>
                    </div>
                </div>
            </div>
    )
}