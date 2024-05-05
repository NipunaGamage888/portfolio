import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import CV from '../../assets/NipunaGamageCV.pdf'

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
              Address:
              <span className="about__desc-info">
                725 greenoch Court Oshawa
              </span>
            </p>
            <p className="about__desc">
              Freelance: <span className="about__desc-info">Available</span>
            </p>
            <a href={CV} download="Nipuna_Gamage_CV.pdf" class="about__download-btn">
              <p className="about__download-name">Download CV</p>
              
              <span class="about__download-icon">&#x2B07;</span>
            </a>
          </div>
          <div className="about_second">
            <p className="about__desc">
              Phone: <span className="about__desc-info">+16478945532</span>
            </p>
            <p className="about__desc">
              Email:
              <span className="about__desc-info">
                nipunagamage888@gmail.com
              </span>
            </p>
            <p className="about__desc">
              Address:
              <span className="about__desc-info">
                725 greenoch Court Oshawa
              </span>
            </p>
            <p className="about__desc">
              Linkedin{" "}
              <span className="about__desc-info">
                dafasdadfadfdafadfdafadfda
              </span>
            </p>
            <p className="about__desc">
              Address:
              <span className="about__desc-info">
                725 greenoch Court Oshawa
              </span>
            </p>
          </div>
        </div>
        <div className="about__years">
          <div className="about__exp">
            <h1 className="about__exp-heading">2+</h1>
            <p className="about__exp-para"> years of Experience</p>
            <p className="about__exp-para"> Front End Developer</p>
          </div>
          <div className="about__exp">
            <h1 className="about__exp-heading">1+</h1>
            <p className="about__exp-para">years of Experience</p>
            <p className="about__exp-para">Intern Full Stack developer</p>
          </div>
          <div className="about__exp">
            <h1 className="about__exp-heading">6+</h1>
            <p className="about__exp-para">years of Experience</p>
            <p className="about__exp-para">Hackathon Participations</p>
          </div>
          <div className="about__exp">
            <h1 className="about__exp-heading">4+</h1>
            <p className="about__exp-para">years of Experience</p>
            <p className="about__exp-para">Personal Projects</p>
          </div>
        </div>
      </div>
      <div className="about__skills">
          <div className="about__chart">
            <div className="about__progress">
                <p className="about__percentage">
                  20%
                </p>
                
            </div>  
            <p className="about__language">Html</p>
          </div>
          <div className="about__chart">
            <div className="about__progress">
                <p className="about__percentage">
                  20%
                </p>
                
            </div>  
            <p className="about__language">Html</p>
          </div>
          <div className="about__chart">
            <div className="about__progress">
                <p className="about__percentage">
                  20%
                </p>
                
            </div>  
            <p className="about__language">Html</p>
          </div>
          <div className="about__chart">
            <div className="about__progress">
                <p className="about__percentage">
                  20%
                </p>
                
            </div>  
            <p className="about__language">Html</p>
          </div>
          <div className="about__chart">
            <div className="about__progress">
                <p className="about__percentage">
                  20%
                </p>
                
            </div>  
            <p className="about__language">Html</p>
          </div>
          <div className="about__chart">
            <div className="about__progress">
                <p className="about__percentage">
                  20%
                </p>
                
            </div>  
            <p className="about__language">Html</p>
          </div>
          <div className="about__chart">
            <div className="about__progress">
                <p className="about__percentage">
                  20%
                </p>
                
            </div>  
            <p className="about__language">Html</p>
          </div>
          <div className="about__chart">
            <div className="about__progress">
                <p className="about__percentage">
                  20%
                </p>
                
            </div>  
            <p className="about__language">Html</p>
          </div>
          <div className="about__chart">
            <div className="about__progress">
                <p className="about__percentage">
                  20%
                </p>
                
            </div>  
            <p className="about__language">Html</p>
          </div>
          <div className="about__chart">
            <div className="about__progress">
                <p className="about__percentage">
                  20%
                </p>
                
            </div>  
            <p className="about__language">Html</p>
          </div>
         
      </div>
      <div className="about__final">
        <div>
        <h2 className="about__education">Education</h2>
        <div className="about__first-ed">
          <h2 className="about__institution">Software Engineer Diploma - Branstation</h2>
          <p>Completed my brainstation Bootcamp and obtained a Software Engineer  diploma. I was able to learn and developer
            skills such as React, Scss, Node, express and lot more. 
          </p>
        </div>
        </div>
        <div>
          <h2>Experience</h2>
          
        </div>
        
      </div>
    </motion.div>
  );
}

export default About;
