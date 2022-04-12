import React from 'react';
import HeaderSocials from './HeaderSocials';

import CTA from './CTA'
import ME from '../../../../assets/images/me.png';

import './header.css'
import { Image } from "antd";

const HeaderIntro = () => {
  return (
    <>
        <div className="container header_container">
            <h5>Hi I'm</h5>
            <h1>Fazrul Romli</h1>
            <h5>Software Developer</h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <Image.PreviewGroup>
                    <Image src={ME} alt="me" />
                </Image.PreviewGroup>
            </div>

            <a href="#contact" className="scroll-down">Scroll Down</a>
        </div>
    </>
  )
}

export default HeaderIntro