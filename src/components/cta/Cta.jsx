import React from 'react';
import './cta.css';
import {FaMicrochip,AiFillHtml5, IoLogoCss3, IoLogoPython,  SiJavascript,SiFigma,SiVisualstudio,SiMicrosoftazure,SiAdobephotoshop,SiAdobeillustrator,SiAdobexd, SlArrowDown, IoLogoReact, TbSeo,TbBrandGmail, FiExternalLink, FaWordpress,FaNodeJs,FaGitAlt,IoLogoFirebase,TbApi,SiMongodb} from'../../components/brand/imports'


const CTA = () => (
  <div className="gpt3__cta  section_padding" id="skills">
    <div className="gpt3__cta-content">
      {/* <p>My Skills</p> */}
      <div/>
      <h1 className='gradient_text'>Skills</h1>
    {/* <div className="gpt3__cta-btn">
      <button type="button">Get Started</button>
    </div> */}
    <div className="techStack">
        <div className="icon"><AiFillHtml5 className="skills_icon" size={60}/><p>HTML5</p></div>
        <div className="icon"><IoLogoCss3 className="skills_icon" size={60}/><p>CSS3</p></div>
        <div className="icon"><SiJavascript className="skills_icon" size={60}/><p>JavaScript</p></div>
        <div className="icon"><IoLogoReact className="skills_icon" size={60}/><p>React</p></div>
        <div className="icon"><IoLogoPython className="skills_icon" size={60}/><p>Python</p></div>
        <div className="icon"><FaNodeJs className="skills_icon" size={60}/><p>Node</p></div>
        <div className="icon"><TbApi className="skills_icon" size={60}/><p>Api</p></div>
        <div className="icon"><SiVisualstudio className="skills_icon" size={60}/><p>Visual Studio</p></div>
        <div className="icon"><FaGitAlt className="skills_icon" size={60}/><p>Git</p></div>
        <div className="icon"><FaWordpress className="skills_icon" size={60}/><p>WordPress</p></div>
        <div className="icon"><SiMicrosoftazure className="skills_icon" size={60}/><p>Azure</p></div>
        <div className="icon"><SiMongodb className="skills_icon" size={60}/><p>MongoDB</p></div>
        <div className="icon"><IoLogoFirebase className="skills_icon" size={60}/><p>Firebase</p></div>
        <div className="icon"><SiFigma className="skills_icon" size={60}/><p>Figma</p></div>
        <div className="icon"><SiAdobeillustrator className="skills_icon" size={60}/><p>Illustrator</p></div>
        <div className="icon"><SiAdobexd className="skills_icon" size={60}/><p>XD</p></div>
        <div className="icon"><TbSeo className="skills_icon" size={60}/><p>SEO</p></div> 
        <div className="icon"><FaMicrochip className="skills_icon" size={60}/><p>Microcontroller</p></div>
</div>
    </div>
  </div>
);

export default CTA;