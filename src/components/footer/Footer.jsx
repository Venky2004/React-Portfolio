import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {RxTwitterLogo} from 'react-icons/rx'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Venky</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_socials'>
<a href="https://facebook.com"><FiFacebook/></a>
<a href="https://www.instagram.com/venkatasairamreddy"><AiOutlineInstagram/></a>
<a href="https://facebook.com"><RxTwitterLogo/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Credits Egator</small>
      </div>
    </footer>
  )
}

export default Footer