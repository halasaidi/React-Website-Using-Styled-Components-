
import React from "react";
import Navb from "./components/Navbar";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import About from "./components/aboutus/About";
import Aboutus from "./components/aboutus/Aboutus";
import Foods from "./components/Foods";
import Testimonials from "./components/Testimonials";
import Frequently from "./components/reviews/Frequently";
import Baked from "./components/reviews/Baked";
import Register from "./components/Register";
import Footer from "./components/Footer";


function App() {
  return (
<>
<Navb/>
<Header/>
<Home/>
<About/>
<Aboutus/>
<Foods/>
<Testimonials/>
<Frequently/>
<Baked/> 
<Register/>
<Footer/>
</>
   );
}


export default App;


