import React, {useRef} from 'react';
import { MailOutlined, MessageOutlined, PhoneOutlined } from "@ant-design/icons";
import emailjs from '@emailjs/browser';
import env from "react-dotenv";
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(env.REACT_APP_EMAILJS_ID, env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MailOutlined className="contact_option-icon"/>
            <h4 className="text-light">Email</h4>
            <a href="mailto:mfazrul07@gmail.com">Email Me</a>
          </article>
          <article className="contact_option">
            <MessageOutlined className="contact_option-icon" />
            <h4 className="text-light">Whatsapp</h4>
            <a href="https://wa.me/+60199508927" target="_blank">Whatsapp Me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required></input>
          <input type="email" name="email" placeholder="Your Email" required></input>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact