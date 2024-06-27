import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";


function App() {

  
useEffect(() => { 
  window.addEventListener('scroll',()=>{
    if(window.scrollY>300){
      setShowscroll(true)
    }else{
      setShowscroll(false)
    }
  })

 },[])
 const [showscroll , setShowscroll] =useState(false)
  return (
    <div id="up" className="container">
      <Header  />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a style={{opacity:showscroll?1:0, transition:'0.3s'}}  href="#up">
        <button  className="scroll2up">
          <IoIosArrowUp />
        </button>
      </a>
    </div>
  );
}

export default App;
