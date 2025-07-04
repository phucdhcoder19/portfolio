import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import hp_img from '../../assets/hp_img.svg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={hp_img} alt='' />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>With a strong foundation in front-end and back-end technologies, I specialize in building responsive, user-friendly websites and web applications. </p>
            <p> I enjoy turning complex problems into elegant solutions using modern frameworks like React, Node.js, and more. My focus is on clean code, performance, and creating seamless user experiences.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Node JS</p><hr style={{width:"90%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>2+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
         <hr/>
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
