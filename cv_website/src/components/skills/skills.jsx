import React from 'react'
import './skills.css'
import {MdOutlineVerified} from 'react-icons/md'

const skills = () => {
  return (
    <section id='skills' className='skills__section'>

        <h5>What Skills I Have</h5>
        <h2>My skills</h2>

        <div className='container skills__container'>
          <div className='skills__frontend'>
            <h3>Frontend Development</h3>
            <div className='skills__content'>
              <article className='skills__details'>
                <MdOutlineVerified className='skills__details-icon'/>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
              </article>
              <article className='skills__details'>
              <MdOutlineVerified className='skills__details-icon'/>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
              </article>
              <article className='skills__details'>
              <MdOutlineVerified className='skills__details-icon'/>
                <div>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
                </div>
              </article>
              <article className='skills__details'>
              <MdOutlineVerified className='skills__details-icon'/>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
              </article>
              <article className='skills__details'>
              <MdOutlineVerified className='skills__details-icon'/>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
              </article>
              <article className='skills__details'>
              <MdOutlineVerified className='skills__details-icon'/>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
              </article>
            </div>
          </div>
          <div className='skills__backend'>
          <h3>Backend Development</h3>
            <div className='skills__content'>
              <article className='skills__details'>
              <MdOutlineVerified className='skills__details-icon'/>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
              </article>
              <article className='skills__details'>
              <MdOutlineVerified className='skills__details-icon'/>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
              </article>
              <article className='skills__details'>
              <MdOutlineVerified className='skills__details-icon'/>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
              </article>
              <article className='skills__details'>
              <MdOutlineVerified className='skills__details-icon'/>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
              </article>
              <article className='skills__details'>
              <MdOutlineVerified className='skills__details-icon'/>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
              </article>
              <article className='skills__details'>
              <MdOutlineVerified className='skills__details-icon'/>
                <div>
                  <h4>Lorem</h4>
                  <small className='text-light'>Lorem Ipsum</small>
                </div>
              </article>
            </div>
          </div>
        </div>

    </section>
  )
}

export default skills