import React from 'react'
import './header.css'


const navigation = () => {
  return (
    <header>
        <div className='container header__container'>
        <h4>Hello I'm</h4>
        <h1>Theodore Dimopoulos</h1>
        <h3>Junior Web Developer</h3>
        <button className='cta'>
            Download CV
        </button>
        </div>
        
    </header>
  )
}

export default navigation