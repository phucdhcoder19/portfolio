import React from 'react'
import './Footer.css'
import hp_logo from '../../assets/hp_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={hp_logo} alt='' />
          <p>I'm back-end developer from Viet Nam</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className="footer-subcribe">Subcribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@ 2025 D.Hoang Phuc. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

