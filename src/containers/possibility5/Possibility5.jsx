import React from 'react';
import possibilityImage from '../../assets/iseeadmin.png';
import '../possibility/possibility.css';
import {FiGithub, FiExternalLink} from'../../components/brand/imports';

const Possibility5 = () => (
  <div className="gpt3__possibility section_padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Fullstack Ecommerse</h4>
      <h1 className="gradient_text">I-SEE Admin</h1>
      <p>I-SEE Admin serves as the backend hub for the shop, empowering administrators to manage inventory, including categories and products. Additionally, it provides insights into order details for purchases processed through Stripe.</p>
      <h4><ul>
            <li>NextJS</li>
            <li>MongoDB</li>
            <li>AWS</li>
            <li>Tailwind CSS</li>
        </ul>
      </h4>
      <h4>
        <span>
          <a href="https://i-see-admin.vercel.app/">
            <FiExternalLink />
            <span className='rarrow'>Live Site</span>
          </a>
        </span> 
          | 
        <span>
          <a href="https://github.com/Chloe-Wu/i-see-front">
            <FiGithub/> 
            <span className='rarrow'>Github</span>
          </a>
        </span>
      </h4>
    </div>
    
  </div>
);

export default Possibility5;