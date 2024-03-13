import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub,BsTelegram} from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Header_Social = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/venkata-sai-ram-reddy/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Venky2004" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/venkatasairamreddy/" target="_blank"><BsInstagram/></a>
        <a href="https://t.me/akiraluci" target="_blank"><BsTelegram/></a>
    </div>
  )
}

export default Header_Social