import React from 'react';
import './brand.css';
import {AiFillGithub,  AiFillLinkedin, AiFillHtml5, AiFillYoutube, AiFillDribbbleCircle,IoLogoCss3, IoLogoPython,  SiJavascript,SiFigma,SiVisualstudio,SiMicrosoftazure,SiAdobephotoshop,SiAdobeillustrator,SiAdobexd, SlArrowDown, IoLogoReact, TbSeo,TbBrandGmail, FiExternalLink, FaWordpress} from "./imports";

const Brand = () => {
  return (
    <div className="gpt3_brand section_padding">
      <div className='gpt3_brand_title'>Follow Me:</div>
      <div>
      <a href="https://github.com/Chloe-Wu" target="_blank" ><AiFillGithub  className="social_icon" size={48} /></a>
      </div>
      <div>
      <a href="https://www.linkedin.com/in/yiweiwu/" target="_blank" onClick ={()=>{window.dataLayer.push({'event':'linkedin'})}}><AiFillLinkedin className="social_icon" size={48}/></a>

      </div>
      <div>
      <a href="https://dribbble.com/YiweiW" target="_blank" onClick ={()=>{window.dataLayer.push({'event':'dribble'})}}><AiFillDribbbleCircle className="social_icon" size={48}/></a>

      </div>
    </div>
  )
}

export default Brand