import React from "react";
import { LinkedinOutlined, GithubOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from 'react-scroll';
import './footer.css';

export default () => (
    <footer>
        {/* <a href="#" className="footer_logo">Fazrul Romli</a> */}

        <ul className="permalinks">
            <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
            <Link  to="about" spy={true} smooth={true}>About</Link>
            <Link  to="experience" spy={true} smooth={true}>Experience</Link>
            <Link  to="portfolio" spy={true} smooth={true}>Portfolio</Link>
            <Link  to="contact" spy={true} smooth={true}>Contact</Link>
        </ul>

        <div className="footer_socials">
            <a href="https://www.linkedin.com/in/fazrul-romli-79138415b/" target="_blank"><LinkedinOutlined/></a>
            <a href="https://github.com/fazrul96" target="_blank"><GithubOutlined/></a>
            <a href="mailto:mfazrul07@gmail.com" target="_blank"><MailOutlined/></a>
        </div>

        <div className="footer_copyright">
            <small>&copy; Fazrul Romli. All rights reserved.</small>
        </div>
    </footer>
);