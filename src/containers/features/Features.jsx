import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'May 2023 - Present',
    text: 'Frontend Software Engineer · Mercer Island Telecom',
    text2: 'Re-architected multi-page web programs using JavaScript, MySQL, and PHP, ensuring customization aligned with responsive design and branding guidelines.',
    label:{
        // 1:'React',
        // 2:'HTML',
        // 3:'CSS',
        4:'JavaScript',
        5:'WordPress',
      }
  },
  {
    title: '2022 - 2023',
    text: 'Frontend Engineer · T-Mobile',
    text2:'Developed a cloud-based web application, implementing map, automation, communication, and collabora- tion features using React, HTML5, CSS, JavaScript/ES6. Increased response efficiency by 30%.',
    label:{
      1:'React',
      2:'HTML',
      3:'CSS',
      4:'JavaScript',
      5:'Azure',
      // 6:'CosmosDB',
      7:'Python',
      8:'Figma',
    }
  },
  {
    title: '2020 - 2021',
    text: 'UX Engineer / Cofounder · 345pi',
    text2:'Developed a cloud-based web application, implementing map, automation, communication, and collabora- tBuilt an innovative edTech web3 app MVP for math major students using React, Tailwind CSS, NextJS, TypeScript and Python.',
    label:{
      1:'React',
      // 2:'HTML',
      3:'TailwindCSS',
      4:'NextJS',
      5:'TypeScript',
      // 6:'CosmosDB',
      7:'Python',
      8:'AdobeXD',
    }
  },
  {
    title: '2019 - 2020',
    text: 'IoT Project Assistant · Motic',
    text2:'Research competitive products in China, collect and analyze the Smart Energy Technology fund policy. Prioritize and manage several milestones based on the severity of tasks and labor schedule.',
    label:{
      1:'Project Management',
      2:'IoT',
      3:'Smart Energy',
    }
  },
];

const Features = () => (
  <div className="gpt3__features section_padding" id="resume">
    <div className="gpt3__features-heading">
      <h1 className="gradient_text">I have experience with various web development technologies, spanning backend to design.</h1>
      <p><a href="https://drive.google.com/file/d/1RinYIgs7pSqcGBCHPEx861oNnZ21-rfO/view?usp=sharing" alt="resume" target="_blank">View full resume</a></p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} text2 = {item.text2} label={item.label} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;