import axios from "axios";
import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";

import "./login.css";

function Login() {
  // React States
  const [email,setEmail] = useState("");
  const [pass , setPass] = useState("");
console.log(email, pass);
  const [isSubmitted] = useState(false);
   const LoginUser = async(e) =>{
        e.preventDefault()
      // const data = await axios.post("https://ecommerc-eba.herokuapp.com/api/user/login",{email,pass})
      localStorage.setItem("password",pass)
      localStorage.setItem("email",email)

    
   }

  // User Login info
  /*
  
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
/*
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };*/

  // Generate JSX code for error message
  /* const renderErrorMessage = (name) =>
     name === errorMessages.name && (
       <div className="error">{errorMessages.message}</div>
     );
 */
  // JSX code for login form
  const renderForm = (
    <div className="form">
       <form onSubmit>
        <div className="input-container">
          <label>Email: </label>
          <input 
          type="text" 
          name="email" 
          value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
    
        </div>
        <div className="input-container">
          <label>Password </label>
          <input 
            type="password" 
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            />
          
        </div>
        <div className="button-container" >
          <input onClick={LoginUser} type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;