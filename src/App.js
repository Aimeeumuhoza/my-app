import Home from "./pages/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/login/login";
import {BrowserRouter  as Router, Routes, Route} from "react-router-dom"
import About from "./pages/about/about";
import Update from "./pages/about/update";

const App  =() => {

    return(
      	 <Router>
			<Routes>
                <Route path ="/" element={<Home/>}/>
                <Route path ="/register" element={<Register/>}/>
                <Route path ="/login" element={<Login/>}/>
                <Route path ="/about" element={<About/>}/>
                <Route path ="/update/:_id" element={<Update/>}/>
            </Routes>
         </Router>
);
 
}

export default App;

// import React from 'react'
// import Try from './components/try'
// function App() {
//   return (
//     <div className='App'>
//       <Try/>
//     </div>
//   )
// }

// export default App
