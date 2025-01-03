import React from "react";
import { useState} from "react";

export default function Brokerage(){
    const [activeTable, setActiveTable] = useState("table1");
    const handleTabClick = (tableId) => {
      setActiveTable(tableId);
    };
    return(
        <div style={{paddingLeft:"140px"}}>
            <div style={{paddingBottom:"5px", borderBottom:"1.5px solid grey",marginBottom:"30px", width:"90%"}}>
                <a style={{textDecoration:"none", paddingRight:"40px", fontSize:"20px"}} href="#table1"  onClick={() => handleTabClick("table1")}>Equity</a>
                <a style={{textDecoration:"none",paddingRight:"40px", fontSize:"20px"}} href="#table2"   onClick={() => handleTabClick("table2")}>Currency</a>
                <a style={{textDecoration:"none",paddingRight:"40px", fontSize:"20px"}} href="#table3"   onClick={() => handleTabClick("table3")}>Commodity</a>
            </div>
            {activeTable === "table1" && (
            <table id="table1" style={{border:"1.5px solid black", width:"90%"}}>
                <thead style={{borderBottom:"0.5px solid grey"}}>
                    <tr>
                    <th style={{width:"20%",padding:"20px"}}></th>
                    <th style={{width:"20%",padding:"20px"}}>equity delivery</th>
                    <th style={{width:"20%",padding:"20px"}}>equity intraday</th>
                    <th style={{width:"20%",padding:"20px"}}>F&O- futures</th>
                    <th style={{width:"20%",padding:"20px"}}>F&O- options</th>
                    </tr>
                   
                </thead>
                
                <tbody>
                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr></tr>
                </tfoot>
            </table> )}
                {activeTable === "table2" && (
            <table id="table2" style={{border:"1.5px solid black", width:"90%"}}>
                <thead style={{borderBottom:"0.5px solid grey"}}>
                    <tr>
                    <th style={{width:"20%",padding:"20px"}}></th>
                    <th style={{width:"20%",padding:"20px"}}>equity delivery</th>
                    <th style={{width:"20%",padding:"20px"}}>equity intraday</th>
                    <th style={{width:"20%",padding:"20px"}}>F&O- futures</th>
                    <th style={{width:"20%",padding:"20px"}}>F&O- options</th>
                    </tr>
                   
                </thead>
                
                <tbody>
                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr></tr>
                </tfoot>
            </table>)}
                    {activeTable === "table3" && (
            <table id="table3" style={{border:"1.5px solid black", width:"90%"}}>
                <thead style={{borderBottom:"0.5px solid grey"}}>
                    <tr>
                    <th style={{width:"20%",padding:"20px"}}></th>
                    <th style={{width:"20%",padding:"20px"}}>equity delivery</th>
                    <th style={{width:"20%",padding:"20px"}}>equity intraday</th>
                    <th style={{width:"20%",padding:"20px"}}>F&O- futures</th>
                    <th style={{width:"20%",padding:"20px"}}>F&O- options</th>
                    </tr>
                   
                </thead>
                
                <tbody>
                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>

                    <tr>
                    <td style={{padding:"20px"}}>Brokerage</td>
                    <td style={{padding:"20px"}}>zero Brokerage</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td style={{padding:"20px"}}>Flat Rs. 20 per executed order</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr></tr>
                </tfoot>
            </table>
            )}



<div className='row' style={{padding:"50px", paddingRight:"170px"}} >
               
              
               <h1 style={{textAlign: "center"}}>invest in anything</h1>
               <p style={{textAlign: "center"}}>online platform to invest in stocks, mutual funds, and derivatives </p>
               <button style={{width: "20%",margin: "0 auto", backgroundColor: "blue", padding:"2px", color:"white", border:"2px solid black", borderRadius:"6px" }}>signup now </button>

           </div>
        </div>
    )
}