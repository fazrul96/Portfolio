import React from 'react';
import { UserOutlined, StarOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { Image, Card, Col, Row, Avatar  } from "antd";

import ME from '../../../../assets/images/me1.jpg';

const { Meta } = Card;

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

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={9}>
            <Card bordered={false}>
              {/* <Image.PreviewGroup>
                <Image src={ME} alt="About Image" />
              </Image.PreviewGroup> */}
            </Card>
          </Col>
          {
            data.map(({id, icon, title, description}) => {
              return (
                <Col key={id} span={5}>
                  <Card title={icon} bordered={false} style={{ textAlign: 'center'}}>
                    <Meta
                      style={{ textAlign: 'left'}}
                      avatar={<Avatar src={icon} />}
                      title={title}
                      description={description}
                    />
                  </Card>
                </Col>
              )
            })
          }
        </Row>
        <p style={{ textAlign: "center" }}>
          Innovative, task-driven professional with 3+ years of experience in web development across diverse industries. Adept at leveraging superior analytical thinking skills to prioritize tasks, identify technical issues, and provide timely resolutions. For more info, check out my resume, projects and blog.
        </p>
      </div>
    </section>
  )
}

export default About