import React, { useState } from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
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
  const sendEmail = async () => {
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    try {
      await axios.post("http://localhost:8081/api/sendemail", formData);
      alert("Email Sent Successfully");
    } catch (error) {
      console.error(error);
    }
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
              icon={faPhone}
              style={{ color: "#ffb400" }}
            />
            <div>
              <h3 className="contact__email-heading">Contact Number</h3>
              <p className="contact__email-address">+1 647 894 5532</p>
            </div>
          </div>
          <div className="contact__social-media">
            <a href="dasas">
              <FontAwesomeIcon
                className="contact__linkedin"
                icon={faLinkedin}
                style={{ color: "#ffb400" }}
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#ffb400" }}
                className="contact__linkedin"
              />
            </a>
          </div>
        </div>
        <div className="contact__message">
          <form className="contact__form">
            <div className="contact__inputs">
              <input
                className="contact__input"
                placeholder="Name"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                className="contact__input"
                placeholder="Email"
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                className="contact__input"
                placeholder="Subject"
                value={subject}
                type="text"
                onChange={(e) => setSubject(e.target.value)}
              ></input>
            </div>
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your Message here"
                className="contact__textarea"
              ></textarea>
            </div>
          </form>
          <button onClick={sendEmail} className="contact__button">
            Send Email
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
