import React from 'react';
import Img1 from '../assests/aas.jpg';
import Img2 from '../assests/bfs.jpeg';
import Img3 from '../assests/ems.jpg';
import Img4 from '../assests/hms.jpg';
import Img5 from '../assests/jarvis.jpg';
import Img6 from '../assests/goku.jpg';

const Portfolio = () => {

  const handleLiveDemoClick = (url) => {
   
  };

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
            <button className='btn btn-primary' onClick={() => handleLiveDemoClick('https://agricultureandaquaculture.netlify.app')}>Live Demo</button>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Img2} alt="" />
          </div>
          <h3>Banking & Finance System (DJANGO)</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Venky2004/Banking_Finance_System" className='btn'>Github</a>
            <button className='btn btn-primary' onClick={() => handleLiveDemoClick('https://venky.pythonanywhere.com')}>Live Demo</button>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Img3} alt="" />
          </div>
          <h3>Employee Management System (Enterpirse Programming)</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <button className='btn btn-primary' onClick={() => handleLiveDemoClick(null)}>Live Demo</button>
          </div>
        </article>
        {/* Repeat similar pattern for other portfolio items */}
      </div>
    </section>
  );
};

export default Portfolio;
