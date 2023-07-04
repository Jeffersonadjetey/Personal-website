import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        JEFFERSON
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#work">Work</a>
        </li>
        
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/jefferson-william-akesseh/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/jeffersonwilliam" target="_blank">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        {/* <small>&copy; EGATOR TUTS. All rights reserved.</small> */}
      </div>
    </footer>
  );
};

export default Footer;
