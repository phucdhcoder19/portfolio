import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "65d4a8e8-6d16-4f5f-ace5-c258e55809e6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new project, so feel free</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt='' /><p>dhphuc1406@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt='' /><p>#</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt='' /><p>TP.HCM, VIET NAM</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor=''>Your name</label>
          <input type='text' placeholder='Enter your name' name='name' />
          <label htmlFor=''>Your Email </label>
          <input type='text' placeholder='Enter your Email' name='email' />
          <label htmlFor=''>Write your message here</label>
          <textarea
            name="message"
            id=""
            cols="30"
            row="8"
            placeholder='Enter your message' ></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>

    </div>
  )
}

export default Contact
