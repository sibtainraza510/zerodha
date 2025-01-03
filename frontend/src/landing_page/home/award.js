import React from 'react';
function Award() {
    return ( 
        <div>
            <div  style={{display:'flex', flexDirection:"row", justifyContent:"space-around", flexWrap:"wrap"}}>
                <div style={{height:"", width:"40%", marginTop: "50px", marginBottom:"50px"}}>
                    <img  src="/imagesforzerodha/largestBroker.svg" alt="broker" />
                </div>
                <div style={{height:"", width:"40%", marginTop: "55px", marginBottom:"50px"}}>
                    <h3>largest stock broker in india </h3>
                    <p>+2 million zerodha client contribute to over 15% of all retail order volume in india daily by  trading and investing in : </p>
                    <div style={{display: "flex", justifyContent: "space-between", marginTop:"35px"}}>
                    <div style={{marginLeft:"-13px"}}>
                    <ul>
                        <li>futures and options</li>
                        <br></br>
                        <li>commodity derivatives</li>
                        <br></br>
                        <li>currency derivatives</li>
                    </ul>
                    </div>
                    <div  style={{marginRight:"40px"}}>
                        <ul>
                            <li>stock and ipos </li>
                            <br></br>
                            <li>direct mutual funds</li>
                            <br></br>
                            <li>bonds and government </li>
                        </ul>                   
                    </div>
                    </div>

                    <div style={{marginTop:"50px"}}>
                        <img style={{width:"90%"}} src="/imagesforzerodha/pressLogos.png" alt="logos" /> 
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Award ;
