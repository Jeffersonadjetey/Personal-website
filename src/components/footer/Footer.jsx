import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__lead">
          <span className="eyebrow reveal">Get in touch</span>
          <h2 className="footer__title display reveal">
            Let's build something <em>good</em>.
          </h2>
          <p className="footer__lede reveal">
            Whether you're working on something interesting or just want to say
            hi — my inbox is open.
          </p>
          <a
            href="mailto:Jeffersonadjetey24@gmail.com"
            className="footer__email reveal"
          >
            Jeffersonadjetey24@gmail.com
            <HiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="footer__bottom">
          <div className="footer__copy">
            <span>© {year} Jefferson Adjetey</span>
            <span className="footer__sep">·</span>
            <span>Built with React</span>
          </div>
          <ul className="footer__socials">
            <li>
              <a
                href="https://github.com/Jeffersonadjetey"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
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
              </a>
            </li>
            <li>
              <a
                href="mailto:Jeffersonadjetey24@gmail.com"
                aria-label="Email"
              >
                <MdOutlineEmail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
