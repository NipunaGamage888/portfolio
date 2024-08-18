import React from 'react'
import './Projects.scss'
import parking from '../../assets/parking.jpeg'

export default function Projects() {
  return (
    <div className='project'>
        <p className='project__melwa'>Projects</p>
        <div className='project__info'>
          <div className='project__more'>
          <img className='project__image' alt='Image of a paring' src={parking}/>
          </div>
          <div className='project__more'>
          <img className='project__image' alt='Image of a paring' src={parking}/>
          </div>
          <div className='project__more'>
          <img className='project__image' alt='Image of a paring' src={parking}/>
          </div>
         
        </div>
    </div>
  )
}

