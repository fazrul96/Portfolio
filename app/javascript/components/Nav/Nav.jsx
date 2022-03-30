import React, {useState} from 'react'
import { HomeOutlined, UserAddOutlined, BookOutlined, CustomerServiceOutlined, MessageOutlined } from "@ant-design/icons";
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onclick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HomeOutlined /></a>
      <a href="#about" onclick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><UserAddOutlined /></a>
      <a href="#experience" onclick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BookOutlined /></a>
      <a href="#services" onclick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><CustomerServiceOutlined /></a>
      <a href="#contact" onclick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MessageOutlined /></a>
    </nav>
  )
}

export default Nav