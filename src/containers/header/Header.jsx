import React from 'react'
import './header.css'

import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className='gpt3_header section_padding' id="home">
      
      <div className='gpt3_header_content'>
        <h1 className="gradient_text ">Hello &#128075;, I'm Yiwei Wu,</h1>
        <p className="gradient_text">a front-end & ux engineer in Seattle.</p>
      {/* <div className='gpt3_header_content_input'>
        <input type="email" placeholder='Your email address'/>
        <button type="button">Get Started</button>
      </div> */}
      <div className='gpt3_header_content_people'>
        {/* <img src={people} alt="people"/> */}
        <p>I aim to deliver seamless and user-centric digital experiences that not only meet project objectives but also provide effective solutions to users' needs.</p>
      </div>
      </div>

      <div className='gpt3_header_image'>
        <img src={ai} alt="ai"/>
      </div>

    </div>
  )
}

export default Header