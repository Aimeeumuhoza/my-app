import React from "react";
//import {data} from "../../data";
import "./content.css"
import tomatoes from "../content/data/tomatoes.jpg"
const Content = () =>{
    return(
        <div className="content">
            <div className="content-image">
                <img src={tomatoes} alt="tomato"
        />
        </div>
        <div className="section">
        <section style={{width:"50%"}}>
            <h1><b> OUR SEVERVICES</b></h1>
<p><i>You all know us. And we all 
    know you. We are getting married lorem 
    ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna
     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Excepteur sint occaecat cupidatat non proident, sunt in
       culpa qui officia deserunt mollit anim id est laborum 
       consectetur adipiscing elit, sed do eiusmod tempor 
       incididunt ut labore et dolore magna aliqua. Ut enim 
       ad minim veniam, quis nostrud exercitation ullamco 
       laboris nisi ut aliquip ex ea commodo consequat.</i></p>
    
    </section>
    </div>
    <div className="table">
    <table style={{border:"collapse"}}>
        <tr>
            <td style={{width:"50%"}} ><p><i>You all know us. And we all 
                know you. We are getting married lorem 
                ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Excepteur sint occaecat cupidatat non proident, sunt in
                   culpa qui officia deserunt mollit anim id est laborum 
                   consectetur adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. Ut enim 
                   ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat.</i>
                </p>
            </td>

            <td style={{width:"50%"}}><p><i>You all know us. And we all 
                know you. We are getting married lorem 
                ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Excepteur sint occaecat cupidatat non proident, sunt in
                   culpa qui officia deserunt mollit anim id est laborum 
                   consectetur adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. Ut enim 
                   ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat.</i>
                </p></td>
        </tr>
        </table>
        </div>
        
        </div>
    )
}

export default Content
