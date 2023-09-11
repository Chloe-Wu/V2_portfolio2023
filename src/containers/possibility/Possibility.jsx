import React from 'react';
import possibilityImage from '../../assets/5grr.png';
import './possibility.css';
import {FiGithub, FiExternalLink} from'../../components/brand/imports';

const Possibility = () => (
  <div className="gpt3__possibility section_padding" id="projects">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>First Responder Platform</h4>
      <h1 className="gradient_text">School Active Shooter Rapid Response</h1>
      <p>A innovative web app which visualizes data collected by the IoT project's hardware on an interactive map of the school compound allowing first responders to quickly identify high threat areas, coordinate responses, and ultimately make tactically sound decisions to take control of the situation faster.</p>
      <h4><ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>Azure</li>
            <li>Google Map API</li>
            <li>Raspberry pi</li>
        </ul>
      </h4>
      <h4>
        <span><a href="https://chloe-wu.github.io/ast-dev-app/"><FiExternalLink /> <span className='rarrow'>Live Site</span></a></span>  |  <span><a href="https://github.com/Chloe-Wu/capstone"><FiGithub/> <span className='rarrow'>Github</span></a></span>
      </h4>
    </div>
    
  </div>
);

export default Possibility;