import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import CV from "../../assets/NipunaGamageCV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

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
        <div className="about__both">
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
                <span className="about__desc-info">Ontario</span>
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
                Email:
                <span className="about__desc-info">
                  nipunagamage888@gmail.com
                </span>
              </p>
              <p className="about__desc">
                Languages:
                <span className="about__desc-info">English and Sinhala</span>
              </p>
              <p className="about__desc">
                Linkedin:
                <span
                  className="about__desc-info about__desc-info-link"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/nipunamadhuwantha/",
                      "_blank"
                    )
                  }
                >
                  nipunamadhuwantha
                </span>
              </p>
              <p className="about__desc">
                Github:
                <span
                  className="about__desc-info about__desc-info-link"
                  onClick={() =>
                    window.open("https://github.com/NipunaGamage888", "_blank")
                  }
                >
                  NipunaGamage888
                </span>
              </p>
            </div>
          </div>
          <a
            href={CV}
            download="Nipuna_Gamage_CV.pdf"
            class="about__download-btn"
          >
            <p className="about__download-name">Download CV</p>

            <span class="about__download-icon">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </span>
          </a>
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

            <p className="about__exp-para">Hackathon Participations</p>
          </div>
          <div className="about__exp">
            <h1 className="about__exp-heading">4+</h1>

            <p className="about__exp-para">Personal Projects</p>
          </div>
        </div>
      </div>
      <div className="about__skills">
        <div className="about__chart">
          <div className="about__progress">
            <p className="about__percentage">95%</p>
          </div>
          <p className="about__language">Html</p>
        </div>
        <div className="about__chart">
          <div className="about__progress2">
            <p className="about__percentage">80%</p>
          </div>
          <p className="about__language">Scss</p>
        </div>
        <div className="about__chart">
          <div className="about__progress3">
            <p className="about__percentage">75%</p>
          </div>
          <p className="about__language">javaScript</p>
        </div>
        <div className="about__chart">
          <div className="about__progress4">
            <p className="about__percentage">60%</p>
          </div>
          <p className="about__language">Node</p>
        </div>
        <div className="about__chart">
          <div className="about__progress5">
            <p className="about__percentage">60%</p>
          </div>
          <p className="about__language">Express</p>
        </div>
        <div className="about__chart">
          <div className="about__progress6">
            <p className="about__percentage">70%</p>
          </div>
          <p className="about__language">MySql</p>
        </div>
        <div className="about__chart">
          <div className="about__progress7">
            <p className="about__percentage">45%</p>
          </div>
          <p className="about__language">Python</p>
        </div>
        <div className="about__chart">
          <div className="about__progress8">
            <p className="about__percentage">78%</p>
          </div>
          <p className="about__language">React</p>
        </div>
        <div className="about__chart">
          <div className="about__progress9">
            <p className="about__percentage">70%</p>
          </div>
          <p className="about__language">CI/CD</p>
        </div>
        <div className="about__chart">
          <div className="about__progress10">
            <p className="about__percentage">60%</p>
          </div>
          <p className="about__language">MongoDb</p>
        </div>
        <div className="about__chart">
          <div className="about__progress11">
            <p className="about__percentage">80%</p>
          </div>
          <p className="about__language">Github</p>
        </div>
        <div className="about__chart">
          <div className="about__progress12">
            <p className="about__percentage">70%</p>
          </div>
          <p className="about__language">Web Apis</p>
        </div>
      </div>
      <div className="about__final">
        <div className="about__edu-sec">
          <h2 className="about__education">Education</h2>
          <div className="about__first-ed">
            <h2 className="about__institution">
              Software Engineer Diploma - Branstation
            </h2>
            <p className="about__info-institute">
              Completed my brainstation Bootcamp and obtained a Software
              Engineer diploma. I was able to learn and developer skills such as
              React, Scss, Node, express and lot more.
            </p>
          </div>
          <div className="about__first-ed">
            <h2 className="about__institution">
              Computer Science Diploma - Edith Cowan University
            </h2>
            <p className="about__info-institute">
              Started my computer science diploma by enrolling to ACBT which was
              affiliated with Edith Cowan University Australlia. I was able to
              learn and develope skills such as Python, Web Development,
              Computer Security, database and more.
            </p>
          </div>
        </div>
        <div className="about__edu-sec">
          <h2 className="about__education">Experience</h2>
          <div className="about__first-ed">
            <h2 className="about__institution">
              Private Eye Security - Internship
            </h2>
            <p className="about__info-institute">
              Assisted in developing project Eagle viewer a React CCTV camera
              viewer app. An application that provide live access feed of CCTV
              cameras from multiple devices. Assisted in developing user
              interfaces, enabling the camera view access from any device,
              including mobile, tablets and laptops.
            </p>
          </div>
          <div className="about__first-ed">
            <h2 className="about__institution">
              Virtusa Sri Lanka - Internship
            </h2>
            <p className="about__info-institute">
              Contributed to 3 react applications that were developed as part of
              the project Reppido. System that provides an overview of all
              incident reports within the municipality. The application consist
              of Incident. Responsible for creating and designing 20% user
              interfaces. Implemented secure payment gateways, fostering
              customer trust and boosting sales by 15% during incident report
              downloads. Designed and developed the application using Agile
              Scrum methodology by breaking down the project to several points.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
