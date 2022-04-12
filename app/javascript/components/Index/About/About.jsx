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
              <h5>Certificate</h5>
              <small>CPRE and  Android ATC</small>
            </article>

            <article className="about_card">
              <UserOutlined className="about_icon" />
              <h5>Achievements</h5>
              <small>3+ Years Working </small>
            </article>

            <p>
              Innovative, task-driven professional with 3+ years of
              experience in web design and development across
              diverse industries. Adept at leveraging superior
              analytical thinking skills to prioritize tasks, identify
              technical issues, and provide timely resolutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About