import React from 'react'
import './experience.css'
import {BiBadgeCheck} from 'react-icons/bi'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I have</h5>
      <h2>My Experience</h2>
      <div className="experience_container container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
<BiBadgeCheck className='experience_details-icons'/>
<div><h4>HTML</h4>
<small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
<BiBadgeCheck className='experience_details-icons'/>
<div><h4>CSS</h4>
<small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
<BiBadgeCheck className='experience_details-icons'/>
<div><h4>Java Script</h4>
<small className='text-light'>Novice</small></div>
            </article>
            <article className='experience_details'>
<BiBadgeCheck className='experience_details-icons'/>
<div><h4>Bootstrap</h4>
<small className='text-light'>Beginner</small></div>
            </article>
            <article className='experience_details'>
<BiBadgeCheck className='experience_details-icons'/>
<div><h4>React</h4>
<small className='text-light'>Intermediate</small></div>
            </article>
          </div>
          </div>
          <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
<BiBadgeCheck className='experience_details-icons'/>
<div><h4>SQL</h4>
<small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
<BiBadgeCheck className='experience_details-icons'/>
<div><h4>Mongo DB</h4>
<small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
<BiBadgeCheck className='experience_details-icons'/>
<div><h4>Python</h4>
<small className='text-light'>Novice</small></div>
            </article> <article className='experience_details'>
<BiBadgeCheck className='experience_details-icons'/>
<div><h4>Java</h4>
<small className='text-light'>Experienced</small></div>
            </article>
          </div></div></div> 
    </section>
  )
}

export default Experience