// import React, { useState } from "react";
// import { AiOutlineHome, AiOutlineUser, AiOutlineHistory } from "react-icons/ai";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { MdOutlineWorkOutline } from "react-icons/md";
// import { TbSchool } from "react-icons/tb";
// import "./nav.css";

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState("#");
//   return (
//     <nav>
//       <a
//         href="#"
//         onClick={() => setActiveNav("#")}
//         className={activeNav === "#" ? "active" : ""}
//       >
//         <AiOutlineHome />
//       </a>
//       <a
//         href="#about"
//         onClick={() => setActiveNav("#about")}
//         className={activeNav === "#about" ? "active" : ""}
//       >
//         <AiOutlineUser />
//       </a>
//       <a
//         href="#experience"
//         onClick={() => setActiveNav("#experience")}
//         className={activeNav === "#experience" ? "active" : ""}
//       >
//         <AiOutlineHistory />
//       </a>
//       <a
//         href="#education"
//         onClick={() => setActiveNav("#education")}
//         className={activeNav === "#education" ? "active" : ""}
//       >
//         <TbSchool />
//       </a>
//       <a
//         href="#work"
//         onClick={() => setActiveNav("#work")}
//         className={activeNav === "#work" ? "active" : ""}
//       >
//         <MdOutlineWorkOutline />
//       </a>
//       <a
//         href="#contact"
//         onClick={() => setActiveNav("#contact")}
//         className={activeNav === "#contact" ? "active" : ""}
//       >
//         <BiMessageSquareDetail />
//       </a>
//     </nav>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineHistory } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
        <span>Home</span>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
        <span>About</span>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineHistory />
        <span>Experience</span>
      </a>
      <a
        href="#education"
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <TbSchool />
        <span>Education</span>
      </a>
      <a
        href="#work"
        onClick={() => setActiveNav("#work")}
        className={activeNav === "#work" ? "active" : ""}
      >
        <MdOutlineWorkOutline />
        <span>Work</span>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BiMessageSquareDetail />
        <span>Portfolio</span>
      </a>
    </nav>
  );
};

export default Nav;
