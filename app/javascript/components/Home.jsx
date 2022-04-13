import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Index/Header';
import HeaderIntro from './Index/Header';
import Nav from './Index/Nav';
import About from './Index/About';
import Experience from './Index/Experience';
import Services from './Index/Services';
import Portfolio from './Index/Portfolio';
import Testimonials from './Index/Testimonials';
import Contact from './Index/Contact';
// import Card from './Index/Card';
import Footer from './Index/Footer';

import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';

import env from "react-dotenv";
import "antd/dist/antd.css";
import "./index.css";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const Home = () => {
  return (
    <Layout className="layout">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              About
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Experience
            </Menu.Item>
            <Menu.Item key="3" icon={<PieChartOutlined />}>
              Portfolio
            </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />}>
              Testimonials
            </Menu.Item>
            <Menu.Item key="5" icon={<DesktopOutlined />}>
              Contact
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Projects">
              <Menu.Item key="6">Portfolio</Menu.Item>
              <Menu.Item key="7">Homestay</Menu.Item>
              <Menu.Item key="8">Intelligent Food</Menu.Item>
              <Menu.Item key="9">Guard</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Assessments">
              <Menu.Item key="10">Ruby on Rails</Menu.Item>
              <Menu.Item key="11">Laravel</Menu.Item>
            </SubMenu>
            <Menu.Item key="12" icon={<DesktopOutlined />}>
              <Link to="/home/resume">Resume</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header /> */}
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0', padding: "0 50px" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Fazrul</Breadcrumb.Item>
              <div>{env.API_URL}</div>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div> */}
            <HeaderIntro />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            {/* <Card /> */}
          </Content>
          <Footer />
          {/* <button onClick={sayHello}>Click me!</button> */}
        </Layout>
    </Layout>
  )
}

export default Home