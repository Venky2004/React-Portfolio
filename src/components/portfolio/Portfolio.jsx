import React from 'react'
import './portfolio.css'
import Img1 from '../assests/aas.jpg'
import Img2 from '../assests/bfs.jpeg'
import Img3 from '../assests/ems.jpg'
import Img4 from '../assests/hms.jpg'
import Img5 from '../assests/jarvis.jpg'
import Img6 from '../assests/goku.jpg'
import mypic from '../assests/mypic.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Img1} alt="" />
          </div>
            <h3>Agriculuture & Aquaculture System (MERN STACK)</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com/Venky2004/MSWD_SDP/tree/master/client" className='btn'>Github</a>
            <a href="https://agricultureandaquaculture.netlify.app" className=' btn btn-primary' target="_blank">Live Demo</a>
           </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Img2} alt="" />
          </div>
            <h3>Banking & Finance System (DJANGO)</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com/Venky2004/Banking_Finance_System" className='btn'>Github</a>
            <a href="https://venky.pythonanywhere.com" className=' btn btn-primary' target="_blank">Live Demo</a>
           </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Img3} alt="" />
          </div>
            <h3>Employee Management System (Enterpirse Programming)</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className=' btn btn-primary' target="_blank">Live Demo</a>
           </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Img4} alt="" />
          </div>
            <h3>Hotel Management System (Spring Boot & MicroServices)</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className=' btn btn-primary' target="_blank">Live Demo</a>
           </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Img5} alt="" />
          </div>
            <h3>JARVIS</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className=' btn btn-primary' target="_blank">Live Demo</a>
           </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Img6} alt="" />
          </div>
            <h3>This is portfolio item title</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className=' btn btn-primary' target="_blank">Live Demo</a>
           </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio