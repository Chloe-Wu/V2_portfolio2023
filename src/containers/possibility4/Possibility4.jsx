import React from 'react';
import possibilityImage from '../../assets/iseefront.png';
import '../possibility/possibility.css';
import {FiGithub, FiExternalLink} from'../../components/brand/imports';

const Possibility4 = () => (
  <div className="gpt3__possibility section_padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Fullstack Ecommerse</h4>
      <h1 className="gradient_text">I-SEE Ecommerse Shop</h1>
      <p>I-SEE is an e-commerce platform specializing in a range of clothing and bags for both men and women. Explore the website to discover the diverse product offerings, including the latest arrivals.</p>
      <h4><ul>
            <li>NextJS</li>
            <li>MongoDB</li>
            <li>Stripe</li>
            <li>Styled Components</li>
        </ul>
      </h4>
      <h4>
        <span>
          <a href="https://i-see-front.vercel.app/">
            <FiExternalLink />
            <span className='rarrow'>Live Site</span>
          </a>
        </span> 
          | 
        <span>
          <a href="https://github.com/Chloe-Wu/i-see-admin">
            <FiGithub/> 
            <span className='rarrow'>Github</span>
          </a>
        </span>
      </h4>
    </div>
    
  </div>
);

export default Possibility4;