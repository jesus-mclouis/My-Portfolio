import React from 'react'
import './portfolio.css'
import Portfolio4 from '../../assets/portfolio11.png'
import LMS from '../../assets/best1.png'
import dog from '../../assets/best.png'
import music from '../../assets/best2.png'
import basketball from '../../assets/best6.png'
import wallpaper from '../../assets/best4.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LMS} alt="Library System" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://wallpapercave.com/w/wp12352641" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio4} alt="Slider" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://wallpapercave.com/w/wp12352641" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={wallpaper} alt="A wallpaper website" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://wallpapercave.com/" className='btn'>Github</a>
          <a href="https://wallpapercave.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={music} alt="Twitter home page" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://open.spotify.com/playlist/37i9dQZF1DX48TTZL62Yht" className='btn'>MUSIC</a>
          <a href="https://open.spotify.com/playlist/37i9dQZF1DX48TTZL62Yht" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={basketball} alt="Outstanding dunk from the king" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://www.gettyimages.com/photos/lebron-james" className='btn'>Basketball</a>
          <a href="https://www.nba.com/fantasy" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={dog} alt="Lovely pics of animals." />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://wallpapercave.com/wp/QJWSGfo.jpg" className='btn'>PUPPY</a>
          <a href="https://wallpapercave.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>
        
      </div>

       
    </section>
  )
}

export default Portfolio
