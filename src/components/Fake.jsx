import React ,{ useEffect }  from "react";
import axios from "axios"


const Fake = () => {


const res = axios.get("http://localhost:8000/user/All")
console.log(res);


    return(
        
        <div>

        </div>
       
    )
}
export default Fake