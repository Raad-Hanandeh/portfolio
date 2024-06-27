import React, { useEffect, useState } from "react";
import "./Header.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";

const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [mode , setMode]=useState(localStorage.getItem('currentmode') ?? "dark")

useEffect(() => { 
 if(mode==="dark"){
  document.body.classList.remove("dark")
  document.body.classList.add("light")
 }else{
  document.body.classList.remove("light")
  document.body.classList.add("dark")
 }

 },[mode])

  return (
    <header className="flex">
      <button
        onClick={() => {
          setShowModel(true);
        }}
        className="menu mood"
      >
        {/* <span className="icon-menu"></span> */}
        <CiMenuBurger/>
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Article</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button onClick={()=>{
        localStorage.setItem('currentmode',mode==="dark"?'light':'dark')

        setMode(localStorage.getItem('currentmode'))
      }} className="mood">
        {/* <span className="icon-moon-o"></span> */}
      {mode === 'light'?  <IoMoonOutline/>:
        <FaSun color="orange"/>}
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button className="icon-remove" onClick={()=>{
                setShowModel(false)
              }} ></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Article</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
