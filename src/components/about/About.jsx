import React from "react";
import ME from "../../assets/my_image.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      {/* <h5>Get To Know</h5> */}
      <h2>About Me</h2>

     

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        
        <div className="about__content">
        {/* <p>
            Hello! I&apos;m Jefferson Mubarak Adjetey, a senior at Dartmouth
            College studying computer science. I cultivated an irresistible desire for building, designing, and scaling products. During my time at Dartmouth, I have taken amazing Computer Science and design courses that have taught me to build human-centered products. 
          </p> */}
          <p>Hello! My name is Jefferson Mubarak Adjetey, 
            and I'm currently a senior pursuing a computer science degree 
            at Dartmouth College. My passion for creating, designing, and 
            scaling products is insatiable. Throughout my academic journey at Dartmouth, 
            I have had the privilege of taking exceptional computer science and 
            design courses that have equipped me with the skills to develop products that 
            prioritize the needs of users.</p>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 internship</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects(including start-ups)</small>
            </article>
          </div>

          {/* <p>
            Hello! I&apos;m Jefferson William Akesseh, a senior at Dartmouth
            College studying computer science. 
          </p> */}

          {/* <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
