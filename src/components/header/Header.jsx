import React, { useEffect, useRef } from "react";
import CTA from "./CTA";
import ME from "../../assets/profile.jpg";
import HeaderSocials from "./HeaderSocials";
import Typed from "typed.js";
import "./header.css";

const Header = () => {
  const el = useRef(null);

  // useEffect(() => {
  //   // const typed = new Typed(el.current, {
  //   //   strings: ["CS Major", "Dartmouth College Senior"],
  //   //   startDelay: 300,
  //   //   typeSpeed: 100,
  //   //   backDelay: 1000,
  //   //   backSpeed: 100,
  //   //   smartBackspace: true,
  //   //   showCursor: false,
  //   //   loop: true,
  //   // });

  //   const typed = new Typed(el.current, {
  //     strings: ["CS Major", "Dartmouth College Senior"],
  //     typeSpeed: 100,
  //     backDelay: 1000,
  //     backSpeed: 100,
  //     showCursor: false,
  //     loop: true,
  //   });
  // }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jefferson Mubarak Adjetey</h1>
        <div className="typed-block">
          <div className="text-light">
            <span ref={el}></span>
          </div>
        </div>

        {/* <CTA /> */}
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#portfolio" className="scroll__down sd-2">
          <div className="scroll-down-text"> Scroll Down</div>

          <span className="mouse">
            <span className="wheel"></span>
          </span>
        </a>
        {/* <span className="mouse">
          <span className="wheel"></span>
        </span> */}
      </div>
    </header>
  );
};

export default Header;
