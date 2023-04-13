import React from 'react'
import './header.css'
import {FaFacebookF} from 'react-icons/fa'
import ME from '../../assets/hero_image.png'
import Typed from 'typed.js'

function MyComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      string: ["fullstack developer", "sadasdasd", "asdasdasd"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.el();
    };
  }, []);
}

const navigation = () => {
  return (
    
    <header id='header'>
        <div className='container header__info'>
          <h3>Hello, It's Me</h3>
          <h1>Theodore Dimopoulos</h1>
          <h2>And I'm a <span ref={el} /></h2>
          <div className='social__icons'>
            <a href='https://www.facebook.com/' className='bxl__facebook'><FaFacebookF/></a>
            <a href='https://www.facebook.com/' className='bxl__facebook'><FaFacebookF/></a>
            <a href='https://www.facebook.com/' className='bxl__facebook'><FaFacebookF/></a>
          </div>
          <button className='btn cv__download'>Download my CV</button>
          
        </div>
        
        <div className='header__image'>
          <img src={ME} alt="" />
          <center>/* This photo is enhanced with AI and i thing its cool */</center>
        </div>
    </header>
  )
}


export default navigation