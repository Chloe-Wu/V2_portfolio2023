import React, {useState, useEffect, useRef} from 'react'
import './navbar.css'
import { Link } from 'react-scroll';

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const NavLink = ({ href, isActive, children }) => (
  <p>
    <Link
      to={href.slice(1)} // Remove the '#' from the href to match the element's ID
      spy
      smooth = {false}

    >
      {children}
    </Link>
  </p>
);

const Menu = () => {

  // const [isActive, setIsActive] = useState(false);

  // const handleLinkClick = (event) => {
  //   event.preventDefault();
  //   const target = event.currentTarget.getAttribute('href');
  //   if (target) {
  //     const element = document.querySelector(target);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //       setIsActive(true); // Set isActive to true when the link is clicked
  //     }
  //   }
  // };
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  const handleLinkClick = (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('href');
    if (target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Function to handle scroll events using IntersectionObserver
    const handleScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check if the section is in view
          const target = entry.target.getAttribute('id');
          if (target) {
            setIsActive(`#${target}` === window.location.hash);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      rootMargin: '-20% 0px -80% 0px', // Adjust this margin as needed to trigger the change
    });

    const menuItems = menuRef.current.querySelectorAll('a[href^="#"]');
    menuItems.forEach((item) => observer.observe(document.querySelector(item.getAttribute('href'))));

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // This effect listens for scroll events and sets isActive to false
    // after a brief delay (100ms) to update the CSS immediately after the scroll.
    const handleScroll = () => {
      setIsActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

return (
  // <>
  // <p><a href="#home"className={isActive ? 'active' : ''} // Add the 'active' class when isActive is true
  //         onClick={handleLinkClick}>Home</a></p>
  // <p><a href="#about">About</a></p>
  // <p><a href="#resume">Resume</a></p>
  // <p><a href="#skills">Skills</a></p>
  // <p><a href="#projects">Projects</a></p>
  // </>
  <div ref={menuRef}>
  <NavLink href="#home" isActive={isActive}>
    <span></span><div>Home</div>
  </NavLink>
  <NavLink href="#about" isActive={isActive}>
  <span></span>About
  </NavLink>
  <NavLink href="#resume" isActive={isActive}>
  <span></span>Resume
  </NavLink>
  <NavLink href="#skills" isActive={isActive}>
  <span></span>Skills
  </NavLink>
  <NavLink href="#projects" isActive={isActive}>
  <span></span>Projects
  </NavLink>
  <NavLink href="#contact" isActive={isActive}>
  <span></span>Contact
  </NavLink>
</div>
)}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    // <div className='gpt3_navbar_container'>
    <div className='gpt3_navbar'>

      <div className='gpt3_navbar_links'>

        <div className='gpt3_navbar_links_logo'>
          <img src={logo} alt="logo"/>
        </div>

        <div className='gpt3_navbar_links_container'>
          <Menu />
        </div>
      </div>
      
        {/* <div className='gpt3_navbar_sign'>
          <p>yiweiwu.hello@gmail.com</p>
        </div> */}

        <div className='gpt3_navbar_menu'>
        {toggleMenu 
        ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>
        : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3_navbar_menu_container scale-up-center'>
            <Menu />
            {/* <div className='gpt3_navbar_menu_container_links_sign'>
            <p>Sign In</p>
            <button type="button">Sign Up</button>
          </div> */}
          </div>
        )}
        </div>
    </div>
    // </div>
  )
}

export default Navbar