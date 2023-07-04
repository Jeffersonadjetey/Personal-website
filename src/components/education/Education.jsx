import React from "react";
import Dartmouth from "../../assets/dartmouth.png";
import "./education.css";

const Education = () => {
  return (
    <section id="education">
      {/* <h5>Become informed about my</h5> */}
      <h2>Education</h2>

      <div className="container education__container">
        <div className="education-list-container">
          <div className="education-image">
            <img src={Dartmouth} alt="Uber logo" />
          </div>
          <div className="education-description">
            <h3 className="education-title">Dartmouth College</h3>
            <h4>Computer Science</h4>
            <h5>September 2020 - June 2024</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
