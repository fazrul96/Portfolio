import React from 'react';
import { Image } from "antd";
import { Link } from 'react-scroll';
import { DownloadOutlined  } from "@ant-design/icons";
import HeaderSocials from './HeaderSocials';

import CV from '../../../../assets/pdf/portfolio6.jpg';
import ME from '../../../../assets/images/me.png';

import './header.css'

const HeaderIntro = () => {
  return (
    <section id="home">
      <div className="container header_container">
          <h5>Hi I'm</h5>
          <h1>Fazrul Romli</h1>
          <h5>Software Developer</h5>
          
          <a href={CV} download className="btn"><DownloadOutlined /> Download Resume</a>
          <Link to="contact" className="btn btn-primary" spy={true} smooth={true}>Let's Talk</Link>
          <HeaderSocials />

          <div className="me">
              <Image.PreviewGroup>
                  <Image src={ME} alt="me" />
              </Image.PreviewGroup>
          </div>

          <Link to="contact" className="scroll-down" spy={true} smooth={true}>Scroll Down</Link>
      </div>
    </section>
  )
}

export default HeaderIntro