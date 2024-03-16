import React from 'react'
import Cta from './Cta'
import Header_Social from './Header_Social'
import mypic from '../assests/person/mypic.png'
import './header.css'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Venkata Sai Ram Reddy</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta/>
        <Header_Social/>
        <div className="my">
          <img src={mypic} alt="My pic" height={500}/>
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header