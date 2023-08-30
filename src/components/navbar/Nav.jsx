import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activenav,setactivenav]=useState('#');
  return (
    <nav>
      <a href="#"    onClick={()=>setactivenav('#')} className={activenav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setactivenav('#about')} className={activenav === '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setactivenav('#experience')} className={activenav === '#experience' ? 'active': ''}><AiOutlineBook/></a>
      <a href="#portfolio" onClick={()=>setactivenav('#portfolio')} className={activenav === '#portfolio' ? 'active': ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setactivenav('#contact')} className={activenav === '#contact' ? 'active': ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav