import React from 'react'
import ME from '../../../../assets/images/me-about.jpg';
import './about.css'
import { UserOutlined } from "@ant-design/icons";
import { Image } from "antd";

const About = () => {
  return (
    <section id="about">
      <h5 className="text-light">Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <Image.PreviewGroup>
              <Image src={ME} alt="About Image" />
            </Image.PreviewGroup>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <UserOutlined className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>

            <article className="about_card">
              <UserOutlined className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>

            <article className="about_card">
              <UserOutlined className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>

            <p>
              lorem Ips lorem conv lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About