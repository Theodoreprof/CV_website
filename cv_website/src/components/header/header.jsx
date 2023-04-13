import React from 'react'
import './header.css'
import {FaFacebookF} from 'react-icons/fa'
import ME from '../../assets/hero_image.png'


const navigation = () => {
  return (
    <header id='header'>
        <div className='container header__info'>
          <h3>Hello, It's Me</h3>
          <h1>Theodore Dimopoulos</h1>
          <h2>And I'm a <span>Full Stack Developer</span></h2>
          <div className='social__icons'>
            <a href='https://www.facebook.com/' className='bxl__facebook'><FaFacebookF/></a>
            <a href='https://www.facebook.com/' className='bxl__facebook'><FaFacebookF/></a>
            <a href='https://www.facebook.com/' className='bxl__facebook'><FaFacebookF/></a>
          </div>
          <button className='btn cv__download'>Download my CV</button>
          
        </div>
        
        <div className='container header__image'>
          <img src={ME} alt="" />
        </div>

    </header>
  )
}

export default navigation