import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./header.css";

const Header = () => {
  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="hero__inner">
        <div className="hero__status reveal">
          <span className="hero__status-dot" aria-hidden="true" />
          Available for select collaborations
        </div>

        <h1 className="hero__title display reveal">
          Jefferson <em>Adjetey</em>
        </h1>

        <p className="hero__lede reveal">
          Software Engineer at <strong>Oracle Cloud Infrastructure</strong>,
          building developer-facing APIs and control-plane services for the OCI
          Load Balancer at global scale. Co-founder of{" "}
          <a
            className="hero__inline-link"
            href="https://praecept.ai/"
            target="_blank"
            rel="noreferrer"
          >
            Praecept
          </a>
          . Dartmouth Computer Science, '24.
        </p>

        <div className="hero__cta reveal">
          <a href="#work" className="btn btn-primary">
            See selected work
          </a>
          <a href="#contact" className="btn">
            Get in touch
          </a>
        </div>

        <ul className="hero__socials reveal" aria-label="Social links">
          <li>
            <a
              href="https://github.com/Jeffersonadjetey"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jeffersonmubarakadjetey/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:Jeffersonadjetey24@gmail.com"
              aria-label="Email"
            >
              <MdOutlineEmail />
              <span>Email</span>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
