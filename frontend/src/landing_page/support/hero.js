import React from "react";
export default function Hero(){
    return(
        <div style={{ height:"500px" , display:"flex", flexDirection:"row",  backgroundColor:"blue", opacity:0.6, width:"100%"}}>
            <div style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center",width:"100%", paddingLeft:"230px"}}>
                    <div style={{color:"white", width:"50%"}}>
                        <h3 style={{paddingBottom:"50px"}}>Support Portal</h3>
                        <br></br>
                        <br></br>
                        <h3 style={{width:"85%"}}>Search for an answer or browse help topics to create a ticket</h3>
                        <br></br>
                        <textarea style={{width:"500px",borderRadius:"3px", height:"60px", lineHeight:"50px", paddingLeft:"10px"}} type="text" placeholder="Eg. how do i activate F&O, why is my order getting rejected ..."></textarea>
                        <br></br>
                        <br></br>
                        <div style={{display:"flex", flexDirection:"row" ,flexWrap:"wrap", color:"white"}}>
                        <a style={{paddingRight:"15px"}} href="#"><h6>Track account opening</h6></a>
                        <a style={{paddingRight:"15px"}}href="#"><h6>Track segment activation</h6></a>
                        <a style={{paddingRight:"15px"}}href="#"><h6>Intraday margins</h6></a>
                        <a style={{paddingRight:"10px"}}href="#"><h6>Kite user manual</h6></a>
                        </div>
                    </div>

                    <div style={{color:"white", width:"50%"}}>
                        <a href="#"><h4 style={{paddingBottom:"50px", color:"white"}}>Track Tickets</h4></a>
                        <br></br>
                        <br></br>
                        <h3>Featured</h3>
                        <ol type="1">
                            <li> Offer for sale (OFS) - November 2024 </li><br></br>
                            <li>
                            Surveillance measure on scrips - November 2024</li>
                        </ol>
                    </div>
            </div>  
        </div>
    )
}