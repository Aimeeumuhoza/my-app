import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () =>{
    return(
        <div className="container">
            <div className="textContainer">
            <input className="searchContainer" placeholder="search"/>
                    <button className="button">Home</button>
                    <Link to="/about">
                        <button className="button">about</button>
                    </Link>
                    <Link to="/register">
                        <button className="button">register</button>
                    </Link>
                    <Link to='/login'>
                    <button className="button">login</button>
                    </Link>
                    
            </div>
        </div>
    )
}
export default Navbar
