import axios from "axios";
import { Link } from "react-router-dom";
import React, {useState,useEffect} from "react";
import update from "./update";
import "./about.css"
const About = () =>{
    const [data , setData] =  useState([])

    const deleteData=async (id)=> {
        await axios.delete( 'https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/deleteVerse/'+id )
    }

    useEffect(() =>{
        const getData = async() =>{
            const res = await axios.get("https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/allVerse")
    setData([...res.data.bible])
        }
        getData();
       
    },[deleteData])
 
    const itlo = localStorage.getItem("email")
    // console.log(data);
    return(
        <div>
            <div>
               welcome <span>{itlo}</span>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>description</th>
                        <th>line</th>
                        <th colspan="2">Action</th>
                    </tr>
                   {data !== undefined ? data !==null ? data.map((u) =>(
                   <tr key={u._id}>
                        <td>{u.title} </td>
                        <td>{u.description}</td>
                        <td>{u.line}</td> 
                        <td><button onClick={()=>deleteData(u._id)}>delete</button>
                    <Link to={"/update/"+u._id}>
                        <button>update</button>
                    </Link>
                         </td>
                        
                    </tr>
                    )):<span>loading ......</span> :<span>there is no data</span>
                    }
                    
                </table>
            </div>
        </div>
    );
}


export default About