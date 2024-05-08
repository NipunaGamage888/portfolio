import React from 'react'
import './Home.scss'
import mainImage from '../../assets/Face.jpg'
import {motion } from 'framer-motion'

function Home() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100vw',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        duration:2
      },
    },
    exit: {
      opacity: 0,
      x: '100vw',
      transition: {
        ease: 'easeInOut',
        duration:2
      },
    },
  };
  return (
    <motion.div className='home' initial="initial" animate="animate" exit="exit" variants={pageVariants} >
      <div className='home__image-sec'>
        <div className='home__image-back'></div>
        <img className='home__image' src={mainImage}/>
       
        
      </div>
      <div >
        <div  className='home__details'>
        <h1 className='home__name'>
            I'm Nipuna Gamage
            <span className='home__title'>Web Developer</span>
        </h1>
        <p className='home__info'>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
  
      </div>
      <button className='home__button'>About Me</button>
        </div>
        
    </motion.div>
  )
}

export default Home
