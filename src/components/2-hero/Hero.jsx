import React, { useRef } from "react";
import "./hero.css";
import { motion } from 'framer-motion';
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Developer from "../../developer.json";
import Lottie from "lottie-react";
export default function Hero() {
  const lottife = useRef();
  return (
    <div className="hero">
      <div className="hero-contants">
        <div className="title">
          <img src="../title.png" alt="this is img" />
          <motion.h1
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
          >Software designer,founder,and amateur astronaut.</motion.h1>
        </div>
        <p>
          i'm Zeinab ramadan, a Software designer and enterpreneur based in New
          york city.
        </p>
        <div className="hero-icons">
          <a href="#">
            <XIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
          <a href="#">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="hero-img">
        <Lottie
          lottieRef={lottife}
          onLoadedImages={() => {
            lottife.current.setSpeed(0.5);
          }}
          animationData={Developer}
        />
      </div>
    </div>
  );
}
