import React from 'react';
import possibilityImage from '../../assets/345pi.png';
import '../possibility/possibility.css';
import {FiGithub, FiExternalLink} from'../../components/brand/imports';

const Possibility2 = () => (
  <div className="gpt3__possibility section_padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>EdTech - Calculus Learning Landing Page</h4>
      <h1 className="gradient_text">345pi</h1>
      <p>345pi is a edtech start up company which focused on creating the mobile app to gamified the calculus learning path. When I worked in the company, I developed the company landing page and designed the mobile app.</p>
      <h4><ul>
            <li>NextJS</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>TypeScript</li>
        </ul>
      </h4>
      <h4>
        <span><a href="https://345pi.net"><FiExternalLink /> <span className='rarrow'>Live Site</span></a></span> | <span><a href="https://github.com/345piTeam/345pi.net"><FiGithub/> <span className='rarrow'>Github</span></a></span>
      </h4>
    </div>
    
  </div>
);

export default Possibility2;