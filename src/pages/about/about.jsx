import axios from "axios";
import React, {useState,useEffect} from "react";
import "./about.css"
const About = () =>{
    const [data , setData] =  useState([])

    useEffect(() =>{
        const getData = async() =>{
            const res = await axios.get("https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/allVerse")
    setData([...res.data.bible])
        }
        getData()
    },[])
    const itlo = localStorage.getItem("email")
    // console.log(data);
    return(
        <div>
            <div>
               welcome <span>{itlo}</span>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>descriprion</th>
                        <th>line</th>
                        <th colspan="2">Action</th>
                    </tr>
                   {data !== undefined ? data !==null ? data.map((u) =>(
                   <tr key={u._id}>
                        <td>{u.title} </td>
                        <td>{u.description}</td>
                        <td>{u.line}</td> 
                        <td><button>delete</button> </td>
                        <td><button>update</button>  </td>
                    </tr>
                    )):<span>loading ......</span> :<span>there is no data</span>
                    }
                    
                </table>
            </div>
        </div>
    )
}

export default About