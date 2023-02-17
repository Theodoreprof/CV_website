import React from 'react'
import ME from '../../assets/about_me_image.png'
import {BsAward} from 'react-icons/bs'
import './about.css'


const about = () => {
  return (
    <section id='about'>
        
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt="About Me"/>
            </div>
          </div>  
        

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Lorem Ipsum</h5>
              <small>Lorem Ipsum</small>
            </article>
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Lorem Ipsum</h5>
              <small>Lorem Ipsum</small>
            </article>
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Lorem Ipsum</h5>
              <small>Lorem Ipsum</small>
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
        </div>

    </section>
  )
}

export default about