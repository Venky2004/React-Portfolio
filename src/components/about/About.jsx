import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FaUserSecret} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'
import pic from '../assests/goku.jpg'
import mypic from '../assests/aigen1.jpg'
const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={mypic} alt="About me images" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
               <h5>Experience</h5>
               <small>Full Time Student</small>
            </article>
            <article className='about_card'>
              <FaUserSecret className='about_icon'/>
               <h5>Interest</h5>
               <small>Ethical Hacking</small>
            </article>
            <article className='about_card'>
              <AiFillFolderOpen className='about_icon'/>
               <h5>Projects</h5>
               <small>Ongoing</small>
            </article>
          </div>
          <p>Hey there! I'm Venky, a passionate cyber freak.I thrive on creating new things 🚀,from innovative coding projects to exploring cybersecurity landscapes 🌐💻🔒, constantly seeking new experiences 🌟. By day, I'm immersed in the world of tech and security 🛡️, diving into intricate challenges and solutions. Beyond that, I'm all about 🤖 the power of ethical hacking  and continuous learning 🧠, working towards a safer digital realm.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about