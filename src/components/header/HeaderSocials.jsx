import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaDribbble } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import myresume from "../../assets/resume.pdf"


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/Jeffersonmubarakadjetey/"
        target="_blank"
      >
        <BsLinkedin />
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/Jeffersonadjetey" target="_blank">
        <FaGithub />
        <span>Github</span>
      </a>
      <a
        href= {myresume}
        target="_blank"
      >
        <BiMessageSquareDetail />
        <span>Resume</span>
      </a>
    </div>
  );
};

export default HeaderSocials;
// import React from "react";
// import { BsLinkedin } from "react-icons/bs";
// import { FaGithub, FaDribbble } from "react-icons/fa";
// import { BiMessageSquareDetail } from "react-icons/bi";

// const HeaderSocials = () => {
//   const openPdf = () => {
//     const pdfUrl = "../../assets/resume.pdf"; // Replace with the path to your PDF file
//     window.open(pdfUrl, "_blank");
//   };

//   return (
//     <div className="header__socials">
//       <a href="https://www.linkedin.com/in/Jeffersonmubarakadjetey/" target="_blank">
//         <BsLinkedin />
//       </a>
//       <a href="https://github.com/Jeffersonadjetey" target="_blank">
//         <FaGithub />
//       </a>
//       <button onClick={openPdf}>
//         <BiMessageSquareDetail />
//       </button>
//     </div>
//   );
// };

// export default HeaderSocials;

