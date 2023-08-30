import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Header_Social = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/venkatasairam-reddy-996029226/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Venky2004" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default Header_Social