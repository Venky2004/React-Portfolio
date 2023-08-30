import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v2m4xkp', 'template_knby61l', form.current, 'rl_vjQkju31-_SKp9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail  className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>venkatasairamreddy0404@gmail.com</h5>
            <a href="mailto:venkatasairamreddy0404@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Venkatasairam Reddy</h5>
            <a href="https://m.me/venkatasairam.reddy.3" target='_blank'>Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp  className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=6302115915" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" required placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact