import React from "react";
import { BiCheck } from "react-icons/bi";
import Uber from "../../assets/uber.jpeg";
import Amazon from "../../assets/Citigroup.png";
import Dartmouth from "../../assets/dartmouth.png";
import "./work.css";

const Work = () => {
  return (
    <section id="work">
      {/* <h5>Find out about my</h5> */}
      <h2>Work</h2>

      <div className="container services__container">
      <div className="job-container">
          <div className="job-image">
            <img src={Amazon} alt="Amazon logo" />
          </div>
          <div className="job-description">
            <h3 className="job-title">Software Engineering Intern</h3>
            <h4>Citi Retail Services</h4>
            <h5>June 2023 - August 2023</h5>
          </div>
        </div>

        <div className="job-container">
          <div className="job-image">
            <img src={Dartmouth} alt="Uber logo" />
          </div>
          <div className="job-description">
            <h3 className="job-title">Teaching Assistant</h3>
            <h4>Introduction to Engineering(ENGS 21)</h4>
            <h5>March 2023 - May 2023</h5>
          </div>
        </div>

        <div className="job-container">
          <div className="job-image">
            <img src={Dartmouth} alt="Amazon logo" />
          </div>
          <div className="job-description">
            <h3 className="job-title">Software Engineer and UI/UX designer</h3>
            <h4>Thayer School of Engineering</h4>
            <h5>January 2022 - June 2022</h5>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Work;
