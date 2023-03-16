import React from 'react'
import './portfolio.css'
import IMG from '../../assets/sample.png'

const portfolio = () => {
  return (
    <section id='portfolio'>

        <h5>My recent work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG} alt="sample" />
            </div>
            <h3>Project Title</h3>
            <a href="https://github.com" className='btn' target={'_blank'} rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target={'_blank'} rel="noreferrer">other button</a>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG} alt="sample" />
            </div>
            <h3>Project Title</h3>
            <a href="https://github.com" className='btn' target={'_blank'} rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target={'_blank'} rel="noreferrer">other button</a>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG} alt="sample" />
            </div>
            <h3>Project Title</h3>
            <a href="https://github.com" className='btn' target={'_blank'} rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target={'_blank'} rel="noreferrer">other button</a>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG} alt="sample" />
            </div>
            <h3>Project Title</h3>
            <a href="https://github.com" className='btn' target={'_blank'} rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target={'_blank'} rel="noreferrer">other button</a>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG} alt="sample" />
            </div>
            <h3>Project Title</h3>
            <a href="https://github.com" className='btn' target={'_blank'} rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target={'_blank'} rel="noreferrer">other button</a>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG} alt="sample" />
            </div>
            <h3>Project Title</h3>
            <a href="https://github.com" className='btn' target={'_blank'} rel="noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target={'_blank'} rel="noreferrer">other button</a>
          </article>
        </div>
    </section>
  )
}

export default portfolio