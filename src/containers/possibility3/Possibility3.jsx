import React from 'react';
import possibilityImage from '../../assets/rms.png';
import '../possibility/possibility.css';

const Possibility3 = () => (
  <div className="gpt3__possibility section_padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Machine Learning - Online Emotion Detection</h4>
      <h1 className="gradient_text">RMS</h1>
      <p>Monitor the remote meeting Anxiety and boost efficiency for both presenters and audiences during presentations through emotional design.</p>
      <h4><ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Machine Learning</li>
            <li>Firebase</li>
            <li>Full Stack</li>
        </ul>
      </h4>
      <h4>
        <span><a href="https://github.com/Chloe-Wu/RMS/tree/main">Github<span className='rarrow'>-&gt;</span></a></span>
      </h4>
    </div>
    
  </div>
);

export default Possibility3;