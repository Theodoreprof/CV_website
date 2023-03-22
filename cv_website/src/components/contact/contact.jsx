import React from 'react'
import '../contact/contact.css'
import {AiOutlineMail} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineSend} from "react-icons/ai"

const contact = () => {
  return (
    <section id='contact'>

        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className="contact__option">
              <AiOutlineMail className='contact__icon'/>
              <h4>Email</h4>
              <h5>theo.dhmopoulos@gmail.com</h5>
              <a href="mailto:theo.dhmopoulos@gmail.com">Send a message</a>
            </article>
            <article className="contact__option">
              <AiFillLinkedin className='contact__icon'/>
              <h4>LinkedIn</h4>
              <h5>theo.dhmopoulos@gmail.com</h5>
              <a href="mailto:theo.dhmopoulos@gmail.com">Send a message</a>
            </article>
            <article className="contact__option">
              <AiFillGithub className='contact__icon'/>
              <h4>Github</h4>
              <h5>theo.dhmopoulos@gmail.com</h5>
              <a href="mailto:theo.dhmopoulos@gmail.com">Send a message</a>
            </article>
          </div>
          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn_primary">Send  <AiOutlineSend/></button>
          </form>
        </div>
        
    </section>
  )
}

export default contact