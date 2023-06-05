import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
         <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Experience</p>
            
            </li>
         
          </ul>
        </article>
            {/* WEB DEVELOPMENT ENDS*/}
            <article className="service">
          <div className="service__head">
            <h3>Sports</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Volleyball coaching/player</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Fitness Trainer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Basketball coaching/player</p>
            
            </li>
         
          </ul>
        </article>
         <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Videographer / photographer </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Experience</p>
            </li>
          
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
