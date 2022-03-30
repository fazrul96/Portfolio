import React, { useState } from 'react';
import Header from './Header/Header';
import HeaderIntro from './Header/HeaderIntro';
import Nav from './Nav/Nav';
import About from './About/About';
import Experience from './Experience/Experience';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
// import Card from './Card/Card';
import Footer from './Footer/Footer';
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const { Content } = Layout;

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
  );

const Home = () => {
  return (
    <>
        <Header />
        <Content style={{ padding: "0 50px" }}>
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
    </>
  )
}

export default Home