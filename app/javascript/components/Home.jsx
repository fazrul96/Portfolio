import React from 'react';
import { Link } from "react-router-dom";
import { Link as LinkScroller } from 'react-scroll';
import Header from './Index/Header';
import HeaderIntro from './Index/Header';
import Nav from './Index/Nav';
import About from './Index/About';
import Experience from './Index/Experience';
// import Services from './Index/Services';
import Portfolio from './Index/Portfolio';
// import Testimonials from './Index/Testimonials';
import Contact from './Index/Contact';
// import Card from './Index/Card';
import Footer from './Index/Footer';

import { Layout, Menu, Divider } from 'antd';
import { TeamOutlined, UserOutlined, BookOutlined, GithubOutlined, MessageOutlined, FileOutlined, BookFilled} from '@ant-design/icons';

import env from "react-dotenv";
import "antd/dist/antd.css";
import "./index.css";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
class Home extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout className="layout">
      {/* <Layout style={{ minHeight: "100vh" }}> */}
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              <LinkScroller  to="about" spy={true} smooth={true}>About</LinkScroller>
            </Menu.Item>
            <Menu.Item key="2" icon={<BookOutlined />}>
              <LinkScroller  to="experience" spy={true} smooth={true}>Experience</LinkScroller>
            </Menu.Item>
            <SubMenu key="3" icon={<GithubOutlined />} title="Portfolio">
              <Menu.Item key="4"><LinkScroller  to="portfolio" spy={true} smooth={true}>Homestay</LinkScroller></Menu.Item>
              <Menu.Item key="5"><LinkScroller  to="portfolio" spy={true} smooth={true}>Intelligent Food</LinkScroller></Menu.Item>
              <Menu.Item key="6"><LinkScroller  to="portfolio" spy={true} smooth={true}>Guard</LinkScroller></Menu.Item>
            </SubMenu>
            <Menu.Item key="7" icon={<MessageOutlined />}>
              <LinkScroller  to="contact" spy={true} smooth={true}>Contact</LinkScroller>
            </Menu.Item>
            <SubMenu key="8" icon={<TeamOutlined />} title="Assessments">
              <Menu.Item key="9">Ruby on Rails</Menu.Item>
              <Menu.Item key="10">Laravel</Menu.Item>
            </SubMenu>
            <Menu.Item key="11" icon={<FileOutlined />}>
              <Link to="/home/resume">Resume</Link>
            </Menu.Item>
            <Menu.Item key="12" icon={<BookFilled />}>
              Blog
            </Menu.Item>
          </Menu>
        </Sider>
        {/* <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header> */}
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <HeaderIntro />
            <Nav />
            <About />
            <Experience />
            {/* <Services /> */}
            <Portfolio />
            {/* <Testimonials /> */}
            <Contact />
            {/* <Card /> */}
          </Content>
          <Divider />
          <Footer style={{ textAlign: "center" }}/>
        </Layout>
      </Layout>
    );
  }
}

export default Home