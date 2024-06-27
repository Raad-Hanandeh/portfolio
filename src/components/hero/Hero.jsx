import React, { useRef } from "react";
import "./Hero.css";
import { MdVerified } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import developer from "../../../public/animation/dev.json";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section
      style={{ justifyContent: "space-between", alignItems: "center" }}
      className="flex hero"
    >
      <div className="grow">
        <div className="img">
         
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src="./img/raad.jpg"
            alt="raad"
          />
          <MdVerified className="verifi" />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="title"
          >
            Software designer, founder, and amateur astronaut.
          </motion.h1>
          <p className="subtitle">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
          <div className="flex icons">
            <FaXTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaGithub className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
      </div>
      <div>
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          className="dev"
          style={{ height: "400px",width:'400px' }}
          animationData={developer}
        />
      </div>
    </section>
  );
};

export default Hero;
