import React from 'react'
import ME from '../../../../assets/images/me1.jpg';
import './about.css'
import { UserOutlined, StarOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { Image } from "antd";

const data = [
  {
    id:1,
    icon: <UserOutlined className="about_icon" />,
    title: 'Experience',
    description: '3+ Years Working'
  },
  {
    id:2,
    icon: <StarOutlined className="about_icon" />,
    title: 'Certificate',
    description: 'CPRE and  Android ATC'
  },
  {
    id:3,
    icon: <SafetyCertificateOutlined className="about_icon" />,
    title: 'Achievements',
    description: '3+ Years Working'
  }
]

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
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
          {
            data.map(({id, icon, title, description}) => {
              return (
                <article key={id} className="about_card">
                  {icon}
                  <h5 className="text-light">{title}</h5>
                  <small className="text-light">{description}</small>
                </article>
              )
            })
          }
          </div>
          <br/>
          <p style={{ textAlign: "center" }}>
            Innovative, task-driven professional with 3+ years of experience in web design and development across diverse industries. Adept at leveraging superior analytical thinking skills to prioritize tasks, identify technical issues, and provide timely resolutions.
          </p>

          <p style={{ textAlign: "center" }}>
            Yevgeniy (Jim) Brikman loves programming, writing, speaking, traveling, and lifting heavy things. He does not love talking about himself in the 3rd person. He is the co-founder of Gruntwork, a company that provides DevOps as a Service. He's also the author of two books published by O'Reilly Media: Hello, Startup and Terraform: Up & Running. Previously, he spent more than a decade building infrastructure and products that served hundreds of millions of users while working as a software engineer at LinkedIn, TripAdvisor, Cisco Systems, and Thomson Financial. For more info, check out his writing, speaking, projects, and photos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About