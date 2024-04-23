import React from 'react'
import './Home.scss'
import mainImage from '../../assets/Online-NA-Headshots_January-2024_0018_Nipuna-Gamage--Software-Engineering-Jan-NA-Online-2024.jpg'

function Home() {
  return (
    <div className='home'>
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
        
    </div>
  )
}

export default Home
