import React from 'react';
import { HomeOutlined, UserOutlined, BookOutlined, MessageOutlined, GithubOutlined } from "@ant-design/icons";
import { Link } from 'react-scroll';
import './nav.css';

const Nav = () => {
  return (
    <nav>
      <Link activeClass="active" to="home" spy={true} smooth={true}><HomeOutlined /></Link>
      <Link  to="about" spy={true} smooth={true}><UserOutlined /></Link>
      <Link  to="experience" spy={true} smooth={true}><BookOutlined /></Link>
      <Link  to="portfolio" spy={true} smooth={true}><GithubOutlined /></Link>
      <Link  to="contact" spy={true} smooth={true}><MessageOutlined /></Link>
    </nav>
  )
}
export default Nav