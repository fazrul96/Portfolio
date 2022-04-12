import React from 'react';
import './services.css';
import { UserOutlined } from "@ant-design/icons";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
            <li>
              <UserOutlined className="service_list-icon" />
              <p>lorem lorem ipsum d</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services