import React from "react";
import { motion } from "framer-motion";
import './About.scss'

function About() {
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
  return (
    <motion.div
    className="about"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <h1 className="about__heading">
        About <span1 className="about__me">Me</span1>
      </h1>
      <h2 className="about__heading-sec">
        Personal <span1 className="about__pers">Info</span1>
      </h2>
      <div className="about__info">
      
        <div className="about__details">
        
          <div className="about__first">
            
            <p className="about__desc">
              First Name:<span className="about__desc-info">Nipuna</span>
            </p>
            <p className="about__desc">
              Last Name: <span className="about__desc-info">Gamage</span>
            </p>
            <p className="about__desc">
              DOB: <span className="about__desc-info">1998/10/24</span>
            </p>
            <p className="about__desc">
              Address:<span className="about__desc-info">725 greenoch Court Oshawa</span>
            </p>
            <p className="about__desc">
              Freelance: <span className="about__desc-info">Available</span>
            </p>
          </div>
          <div className="about_second">
            <p className="about__desc">
              Phone: <span className="about__desc-info">+16478945532</span>
            </p>
            <p className="about__desc">
              Email: <span className="about__desc-info">nipunagamage888@gmail.com</span>
            </p>
            <p className="about__desc">
              Address:<span className="about__desc-info">725 greenoch Court Oshawa</span>
            </p>
            <p className="about__desc">
              Linkedin <span className="about__desc-info">dafasdadfadfdafadfdafadfda</span>
            </p>
            <p className="about__desc">
              Address:<span className="about__desc-info">725 greenoch Court Oshawa</span>
            </p>
          </div>
        </div>
        <div className="about__years">
          <div className="about__exp">
            <h1>12+</h1>
            <p>____ years of Experience</p>
          </div>
          <div className="about__exp">
            <h1>12+</h1>
            <p>____ years of Experience</p>
          </div>
          <div className="about__exp">
            <h1>12+</h1>
            <p>____ years of Experience</p>
          </div>
          <div className="about__exp">
            <h1>12+</h1>
            <p>____ years of Experience</p>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}

export default About;
