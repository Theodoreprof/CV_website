import React from 'react'
import './experience.css'
import {MdOutlineVerified} from 'react-icons/md'

const experience = () => {
  return (
    <section id='experience'>

        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3>Frontend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <MdOutlineVerified />
                <h4>Lorem</h4>
                <small className='text-light'>Lorem Ipsum</small>
              </article>
              <article className='experience__details'>
                <MdOutlineVerified />
                <h4>Lorem</h4>
                <small className='text-light'>Lorem Ipsum</small>
              </article>
              <article className='experience__details'>
                <MdOutlineVerified />
                <h4>Lorem</h4>
                <small className='text-light'>Lorem Ipsum</small>
              </article>
              <article className='experience__details'>
                <MdOutlineVerified />
                <h4>Lorem</h4>
                <small className='text-light'>Lorem Ipsum</small>
              </article>
              <article className='experience__details'>
                <MdOutlineVerified />
                <h4>Lorem</h4>
                <small className='text-light'>Lorem Ipsum</small>
              </article>
            </div>
          </div>
        </div>

    </section>
  )
}

export default experience