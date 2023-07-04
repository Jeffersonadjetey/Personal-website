import React from "react";
import IMG1 from "../../assets/rendezvous.png";
import IMG2 from "../../assets/drinkwatch.png";
import IMG3 from "../../assets/campuspathfinder.png";
import IMG4 from "../../assets/editor.png";
import IMG5 from "../../assets/tse.png";
import IMG6 from "../../assets/painting.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Rendezvous</h3>
          <h6>React Native</h6>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Intro-to-HCI-Spring-2023/p5_v2-group12" className="btn" target="_blank">
              Github
            </a>
           
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>drinkWatch</h3>
          <h6>C Programming Language</h6>
          <div className="portfolio__item-cta">
            <a href="https://docs.google.com/presentation/d/16zJb2qSbY41cy9Jpg-uu76_o7jXi8u69AUTV19R5PAs/edit#slide=id.g146a100fd73_0_139" className="btn" target="_blank">
              Report
            </a>
            {/* <a
              href="https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Campus pathfinder</h3>
          <h6>Python</h6>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Jeffersonadjetey/Campus-Pathinder" className="btn" target="_blank">
              Github
            </a>
            {/* <a
              href="https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Collaborative Graphical Editor</h3>
          <h6>Java</h6>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Jeffersonadjetey/Collaborative-Graphical-Editor" className="btn" target="_blank">
              Github
            </a>
            {/* <a
              href="https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Tiny Search Engine</h3>
          <h6>C Programming Language</h6>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Jeffersonadjetey/Tiny-Search-Engine" className="btn" target="_blank">
              Github
            </a>
            {/* <a
              href="https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Webcam Based Painting Program</h3>
          <h6>Java</h6>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Jeffersonadjetey/Webcam-Based-Painting-Program" className="btn" target="_blank">
              Github
            </a>
            {/* <a
              href="https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
