import "./experience.css";

const roles = [
  {
    company: "Oracle Cloud Infrastructure",
    title: "Software Engineer",
    period: "Sep 2024 — Present",
    location: "Seattle, WA",
    bullets: [
      "Engineer on the OCI Load Balancer Control Plane and Global Accelerator team, building developer-facing APIs and services that manage globally distributed traffic routing at scale.",
      "Designed and shipped distributed traffic-routing metrics and alarm systems, improving real-time observability for internal operators and external customers across multiple availability domains.",
      "Built backend validation and lifecycle logic that proactively prevents invalid configurations, reducing support escalations and improving API usability.",
    ],
    tags: ["Java", "Distributed Systems", "Cloud", "APIs"],
  },
  {
    company: "Citi",
    title: "Software Engineer Intern",
    period: "Jun 2023 — Aug 2023",
    location: "Dallas, TX",
    bullets: [
      "Developed a cloud insights file viewer in Angular that let developers view, edit, and diff Helm chart files — streamlining the application deployment pipeline.",
      "Built backend microservices with Java Spring Boot for Citi's merchant partnership platform, delivering an end-to-end digital onboarding experience.",
    ],
    tags: ["Angular", "Spring Boot", "Java", "Helm"],
  },
  {
    company: "HackNG",
    title: "Software Engineer & UI/UX Designer",
    period: "Jul 2022 — Aug 2023",
    location: "Remote",
    bullets: [
      "Designed and developed a cross-platform learning management system serving Nigerian students and educators, building the React frontend from the ground up.",
      "Created high-fidelity Figma prototypes, ran user studies, and translated qualitative findings into design improvements that increased user engagement.",
    ],
    tags: ["React", "Figma", "User Research"],
  },
  {
    company: "Thayer School of Engineering, Dartmouth",
    title: "Undergraduate Research Assistant",
    period: "Jan 2022 — Jun 2022",
    location: "Hanover, NH",
    bullets: [
      "Built AI-powered educational systems combining game mechanics, physical interfaces, and social dynamics to create immersive learning experiences for children.",
      "Led user studies, conducted interviews, and ran qualitative data analysis on Figma prototypes — directly informing system design iterations.",
    ],
    tags: ["Python", "Research", "HCI"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow reveal">Experience</span>
          <h2 className="section-title reveal">
            Where I've <em>built</em>.
          </h2>
        </div>

        <ol className="timeline">
          {roles.map((r) => (
            <li key={r.company} className="timeline__item reveal">
              <div className="timeline__meta">
                <time>{r.period}</time>
                <span className="timeline__loc">{r.location}</span>
              </div>
              <div className="timeline__body">
                <h3 className="timeline__role">
                  {r.title}
                  <span className="timeline__sep">·</span>
                  <span className="timeline__company">{r.company}</span>
                </h3>
                <ul className="timeline__bullets">
                  {r.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <ul className="timeline__tags" aria-label="Skills">
                  {r.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
