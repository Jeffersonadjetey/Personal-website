import { HiArrowUpRight } from "react-icons/hi2";
import IMG1 from "../../assets/rendezvous.png";
import IMG2 from "../../assets/drinkwatch.png";
import IMG3 from "../../assets/campuspathfinder.png";
import IMG4 from "../../assets/editor.png";
import IMG5 from "../../assets/tse.png";
import "./work.css";

const projects = [
  {
    title: "Rendezvous",
    blurb:
      "A date-planning iOS app built in React Native. Led frontend development across a team of four; won Best Design & Implementation in a class of 14 teams.",
    stack: ["React Native", "Figma"],
    href: "https://github.com/Intro-to-HCI-Spring-2023/p5_v2-group12",
    img: IMG1,
  },
  {
    title: "drinkWatch",
    blurb:
      "A wearable breathalyzer with embedded firmware that alerts users when BAC exceeds the legal limit. Co-designed the hardware and shipped the C-on-Arduino software stack.",
    stack: ["C", "Arduino", "Embedded"],
    href: "https://docs.google.com/presentation/d/16zJb2qSbY41cy9Jpg-uu76_o7jXi8u69AUTV19R5PAs/edit",
    img: IMG2,
  },
  {
    title: "Tiny Search Engine",
    blurb:
      "A search engine for Dartmouth's CS department websites — built from scratch with a Crawler, Indexer, and Querier handling HTML parsing, inverted indexing, and ranked retrieval.",
    stack: ["C", "Bash"],
    href: "https://github.com/Jeffersonadjetey/Tiny-Search-Engine",
    img: IMG5,
  },
  {
    title: "Collaborative Graphical Editor",
    blurb:
      "A real-time collaborative drawing tool enabling concurrent editing across a local network — built with Java socket programming and concurrency primitives.",
    stack: ["Java", "Sockets"],
    href: "https://github.com/Jeffersonadjetey/Collaborative-Graphical-Editor",
    img: IMG4,
  },
  {
    title: "Campus Pathfinder",
    blurb:
      "Shortest-path routing across the Dartmouth campus graph using BFS and Dijkstra's algorithm.",
    stack: ["Python"],
    href: "https://github.com/Jeffersonadjetey/Campus-Pathinder",
    img: IMG3,
  },
];

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow reveal">Selected work</span>
          <h2 className="section-title reveal">
            Things I've <em>shipped</em>.
          </h2>
          <p className="section-lede reveal">
            A few projects I've built — from production cloud services to
            embedded hardware to research prototypes.
          </p>
        </div>

        <a
          href="https://praecept.ai/"
          target="_blank"
          rel="noreferrer"
          className="featured reveal"
        >
          <div className="featured__copy">
            <span className="eyebrow">Currently building</span>
            <h3 className="featured__title">Praecept</h3>
            <p className="featured__blurb">
              An AI-native platform I'm co-founding. Designed and shipped from
              the ground up with a small team — currently applying to Y
              Combinator.
            </p>
            <span className="featured__cta">
              Visit praecept.ai
              <HiArrowUpRight aria-hidden="true" />
            </span>
          </div>
          <div className="featured__visual" aria-hidden="true">
            <div className="featured__pill">praecept.ai</div>
            <div className="featured__grid">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </a>

        <div className="projects">
          {projects.map((p) => (
            <a
              key={p.title}
              className="project reveal"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project__media">
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div className="project__body">
                <div className="project__head">
                  <h3>{p.title}</h3>
                  <HiArrowUpRight className="project__arrow" aria-hidden="true" />
                </div>
                <p>{p.blurb}</p>
                <ul className="project__stack">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
