import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Routes,Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
const App = () => {
    return(
        <>
        <Navbar/>
           <Routes>
           <Route path="/" element={<Home/>}/>
           <Route exact path="/about" element={<About/>}/>
           <Route exact path="/service" element={<Service/>}/>
           <Route exact path="/contact" element={<Contact/>}/>
            <Route render={() => <Navigate to = "/"/>}/>
           </Routes>
        <Footer/>
        </>
        
    )

}
export default App;