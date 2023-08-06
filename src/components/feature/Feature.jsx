import React from 'react';
import './feature.css';

const Feature = ({title,text,text2,label}) => {
  return (
    <div className='gpt3_feature_container_feature'>
      <div className='gpt3_feature_container_feature_title'>
      <div />
      <h1>{title}</h1>
    </div>

      <div className='gpt3_feature_container_feature_text'>
      <p><h3>{text}</h3>  
          <p>{text2}</p>
          {label && typeof label === 'object' && (
          <p className="label">
          <ul>
              {Object.entries(label).map(([key, value]) => (
                <li key={key}>
                  {value}
                </li>
              ))}
            </ul>
          </p>
        )}
      </p>

      </div>
    </div>
  )
}

export default Feature;