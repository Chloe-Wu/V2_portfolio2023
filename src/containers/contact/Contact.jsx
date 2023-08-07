import React from 'react'
import './contact.css'
import {Feature} from '../../components'
import {AiOutlineMail} from '../../components//brand/imports';

const Contact = () => {
  return (
    <div className='contact section_margin' id="contact">
      <div className='contact_feature'>
        <Feature title="Get In Touch" text={<p><p>I’m currently looking for new opportunities, and my inbox is always open. If you have a question or want to grab a coffee, send me an email!</p><p className='email '><a href = "mailto: yiweiwu.hello@gmail.com"><AiOutlineMail/> yiweiwu.hello@gmail.com</a></p></p>}/>
      </div>
      {/* <div className='gpt3_whatgpt3_header'>
        <h1 className='gradient_text'># Problem solver <br/># UW Husky <br/># Music lover <br/># Love cool things
</h1>
      </div>
      <div className='gpt3_whatgpt3_container'>
        <Feature title="Front-End" text="Experience with React, html5, css, Javascript" />
        <Feature title="UX/UI" text="Experience with tools like figma, Adobe XD" />
        <Feature title="Back-End" text="Experience with Node, Azure, Python" />    
      </div>¸ */}
    </div>
  )
}

export default Contact