import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt='' />
      <h1><span>I'm Hoang Phuc</span>, developer in Viet Nam.</h1>
      <p>Transforming ideas into high-quality digital solutions with clean code, scalable architecture, and user-focused design</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={20} href='#contact'>
            Connect With Me
          </AnchorLink>
          </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
