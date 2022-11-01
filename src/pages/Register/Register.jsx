import axios from "axios";
import React, {useState} from "react";
import "./register.css"
function Register() {
    const [isSubmitted] = useState(false);
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [ password, setPassword] = useState("")

    const addData = async () =>{
      try {
        await axios.post("https://ecommerc-eba.herokuapp.com/api/user/register",
        {username,email,password})
      } catch (error) {
        console.log(error);
      }  
      

    }

const renderForm = (
    <div className="app">
      <form onSubmit>
        <div className="input-container">
          <label>username </label>

          <input 
          type="text" 
          name="uname" 
          value={username}
          onChange={(e) => setUsername(e.target.value) }
          />
    
        </div>
        <div className="input-container">
          <label>email</label>
          <input
           type="email"
           name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
            />
    
        </div>
        <div className="input-container">
          <label>password </label>
          <input 
          type="password"
           name="pass"
           value={password}
           onChange = {(e) => setPassword(e.target.value)}
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