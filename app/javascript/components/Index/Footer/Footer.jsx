import React from "react";
import './footer.css';
import { UserOutlined } from "@ant-design/icons";
// import { Layout } from "antd";

// const { Footer } = Layout;

export default () => (
    // <Footer style={{ textAlign: "center" }}>
    //     Honeybadger ©2020.
    // </Footer>
    <footer>
        <a href="#" className="footer_logo">Fazrul Romli</a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#about">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer_socials">
            <a href="#"><UserOutlined/></a>
            <a href="#"><UserOutlined/></a>
            <a href="#"><UserOutlined/></a>
        </div>

        <div className="footer_copyright">
            <small>&copy; Fazrul Romli. All rights reserved.</small>
        </div>
    </footer>
);