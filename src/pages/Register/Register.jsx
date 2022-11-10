import axios from "axios";

import React, {useState} from "react";
import "./register.css"
function Register() {
    const [isSubmitted] = useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [ line, setLine] = useState("")
   console.log(title,description,line);
    const addData = async (e) =>{
      e.preventDefault()

      try {
       const res =await axios.post("https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/create",
        {title,description,line}) 
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }  
    
    }
const renderForm = (
    <div className="app">
      <form >
        <div className="input-container">
          <label>title </label>

          <input 
          type="text" 

          value={title}
          onChange={(e) => setTitle(e.target.value) }
          />
    
        </div>
        <div className="input-container">
          <label>description</label>
          <input
           type="text"
           
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
            />
    
        </div>
        <div className="input-container">
          <label>line </label>
          <input 
          type="text"
          
           value={line}
           onChange = {(e) => setLine(e.target.value)}
           />
          
        </div>
        {/* <div className="input-container">
          <label>Confirm-password </label>
          <input type="password" name="uname" required />
    
        </div> */}
        <div className="button-container">
          <input type="submit" onClick={addData} />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title" >Sign up</div>
        {isSubmitted ? <div>Account created</div> : renderForm}
      </div>
    </div>
  );
}

export default Register;