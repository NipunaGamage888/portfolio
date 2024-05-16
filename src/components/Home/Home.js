import React, { useEffect } from "react";
import "./Home.scss";
import mainImage from "../../assets/Face.jpg";
import { motion } from "framer-motion";
import { Typed } from "react-typed";
import Main from "../Main/Main";

function Home() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      x: "100vw",
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },
  };

  useEffect(() => {
    const typedName = document.querySelector(".home__name");
    if (typedName) {
      const optionsName = {
        strings: ["Nipuna Gamage"],
        typeSpeed: 40,
        showCursor: false,
      };
      new Typed(".home__name", optionsName);
    }

    const typedTitle = document.querySelector(".home__title");
    if (typedTitle) {
      const optionsTitle = {
        strings: [
          "Frontend Developer",
          "Backend Developer",
          "Native App Developer",
        ],
        typeSpeed: 40,
        backSpeed: 50,
        loop: true,
        showCursor: false,
      };
      new Typed(".home__title", optionsTitle);
    }
  }, []);
  return (
    <motion.div
      className="home"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Main id='main'/>
      <div className="home__image-sec">
        {/* <div className='home__image-back'></div>*/}
        <img alt="personal " className="home__image" src={mainImage} />
      </div>
      <div className="home__main-detail">
        <div className="home__details">
          <div className="home__name"> </div>

          <div className="home__title"> </div>

          <p className="home__info">
            I'm a Canadian based full stack developer focused on
            creating clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
        </div>
        <button className="home__button">About Me</button>
      </div>
    </motion.div>
  );
}

export default Home;
