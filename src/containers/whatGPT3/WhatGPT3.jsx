import React from 'react'
import './whatGPT3.css'
import {Feature} from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3_whatgpt3 section_margin' id="about">
      <div className='gpt3_whatgpt3_feature'>
        <Feature title="About Me" text={<p>Specialized in solving complex problems through creative and innovative solutions. Collaborating with teams, utilizing agile methodologies, and staying adaptable to changing project requirements. <p>Have a keen eye for detail and a strong ability to identify and address user pain points.
        </p></p>}/>
      </div>
      <div className='gpt3_whatgpt3_header'>
        <h1 className='gradient_text'># Problem solver <br/># UW Husky <br/># Music lover <br/># Love cool things
</h1>
        {/* <p>Explore the library</p> */}
      </div>
      <div className='gpt3_whatgpt3_container'>
        <Feature title="Front-End" text="Experience with React, html5, css, Javascript" />
        <Feature title="UX/UI" text="Experience with tools like figma, Adobe XD" />
        <Feature title="Back-End" text="Experience with Node, Azure, Python" />    
      </div>¸
    </div>
  )
}

export default WhatGPT3