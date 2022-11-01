import React from "react";
import Content from "../components/content/Content";
import Navbar from "../components/Navbar/Navbar";
import Footer from "./footer/footer";

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )
}
export default Home
