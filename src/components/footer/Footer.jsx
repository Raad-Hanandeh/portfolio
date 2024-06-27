import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer >
      
        <ul className="list">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">speaking</a>
          </li>
          <li>
            <a href="">Uses</a>
          </li>
        </ul>
     
        <div className="copy">
          <span>
            @ 2023 Spencer sharp . All rights reservid
          </span>
        </div>
      
    </footer>
  );
};

export default Footer;
