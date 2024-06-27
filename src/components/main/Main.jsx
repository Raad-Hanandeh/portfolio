import React, { useState } from "react";
import "./Main.css";
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { myProject } from "./myProject";
import { AnimatePresence, motion } from "framer-motion";



const Main = () => {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(myProject);
  const handleclick = (category) => {
    setActive(category);

    const newarr = myProject.filter((item) => {
      const boot = item.category.find((myitem) => {
        return myitem === category;
      });

      return boot === category;
    });
    setArr(newarr);
  };
  return (
    <main className="flex">
      <div className="left ">
        <button
          onClick={() => {
            setActive("all");
            setArr(myProject);
          }}
          className={active === "all" ? "active" : null}
        >
          All Project
        </button>
        <button
          onClick={() => {
            handleclick("css");
          }}
          className={active === "css" ? "active" : null}
        >
          Html & Css
        </button>
        <button
          onClick={() => {
            handleclick("js");
          }}
          className={active === "java" ? "active" : null}
        >
          Javascript
        </button>
        <button
          onClick={() => {
            handleclick("react");
          }}
          className={active === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleclick("node");
          }}
          className={active === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </div>
      <div className="right flex">
        <AnimatePresence>
        {arr.map((item, index) => {
          return (
            <motion.article 
            style={{overflow:"hidden"}}
            layout
            initial={{ transform:"scale(0)"}}
            animate={{ transform:"scale(1)"}}
            transition={{type:"spring" , damping:10}}
           
           
            key={index} className="card">
              <img
                style={{ borderRadius: 5 }}
                width={266}
                src={item.imgPath}
                alt="img"
              />
              <div style={{ width: "266px" }} className="box">
                <h5 className="title">{item.projectTitle}</h5>
                <p className="subtitle">{item.subtitle}</p>
                <div className="link flex">
                  <div className="flex git">
                    <FiLink className="linkhover" />
                    <FaGithub className="linkhover" />
                  </div>
                  <a href="#" className="arrow ">
                    more <FaArrowRight style={{ alignSelf: "end" }} />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Main;
