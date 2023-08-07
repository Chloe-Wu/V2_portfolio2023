import React from 'react'
import './whatGPT3.css'
import {Feature} from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3_whatgpt3 section_margin' id="about">
      <div className='gpt3_whatgpt3_feature'>
        <Feature title="About Me" text={<p><p>Back in 2018, I decided to try my hand at joining the IoT team at Motic and dove head-first into the rabbit hole of the new tech world. Fast-forward to today, I have had the privilege of building software for a financial firm, a telecom company, a start-up, and T-mobile.</p><br/><p>From ideation to lines of code, I love combining the worlds of logic and creative design to create eye-catching, accessible, and user-friendly websites and applications. My passion for new tech and fast learning speed has also led me to experience diverse projects involving IoT, CMS, ML, AR, and Web3.
        </p><br/><p>When I’m not at the computer, I usually go kayaking, hiking, and hanging out with my friends and the cute Frenchie!</p></p>}/>
      </div>
      <div className='gpt3_whatgpt3_header'>
        <h1 className='gradient_text'>Architect in the brain, adventurer at heart!
</h1>
        {/* <p>Explore the library</p> */}
      </div>
      <div className='gpt3_whatgpt3_container'>
        <Feature title="Front-End" text={<p>Proficient in HTML5, CSS3, and JavaScript. Skilled in building responsive and interactive user interfaces using React.js and other modern front-end frameworks.</p>} />
        <Feature title="Back-End" text={<p>Experienced in server-side programming with Node.js and working with databases such as CosmosDB and MySQL to develop robust and scalable web applications.</p>}  />
        <Feature title="UX/UI" text={<p>PA strong advocate for creating intuitive and delightful user experiences. Familiar with UX design principles, wireframing, and prototyping tools to craft seamless interactions.</p>}  />    
      </div>¸
    </div>
  )
}

export default WhatGPT3