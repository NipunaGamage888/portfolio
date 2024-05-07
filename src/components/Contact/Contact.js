import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
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
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="contact"
    >
      <h1 className="contact__heading">
        Get <span1 className="contact__me">In Touch</span1>
      </h1>
      <div className="contact__methods">
        <div className="contact__info">
          <h2 className="contact__friends">Let'Be Frinds!</h2>
          <p className="contact__summary">
            I am recently graduated boot camp graduate. Feel free to contact me,
            I am open to working on new projects and seeking for position as a
            software Engineering role.
          </p>
          <div className="contact__email">
            <FontAwesomeIcon
            className="contact__icon"
              icon={faEnvelope}
              style={{ color: "#ffb400" }}
            />
            <div>
              <h3 className="contact__email-heading">Email</h3>
              <p className="contact__email-address">
                nipunagamage888@gmail.com
              </p>
            </div>
          </div>
          <div className="contact__email">
          <FontAwesomeIcon
            className="contact__icon"
              icon={faEnvelope}
              style={{ color: "#ffb400" }}
            />
            <div>
              <h3 className="contact__email-heading">Email</h3>
              <p className="contact__email-address">
                nipunagamage888@gmail.com
              </p>
            </div>
          </div>
          <div>
            <a>
            <FontAwesomeIcon icon={faLinkedin}  style={{ color: "#ffb400" }}/>
            </a>
            <a>

            </a>
          </div>
        </div>
        <div className="contact__message">
          <form>
            <div className="contact__inputs">
              <input className="contact__input" placeholder="Name"></input>
              <input className="contact__input" placeholder="Name"></input>
              <input className="contact__input" placeholder="Name"></input>
            </div>
            <div>
              <textarea
                placeholder="Write your Message here"
                className="contact__textarea"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
