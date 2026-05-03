import "./skills.css";

const groups = [
  {
    label: "Languages",
    items: [
      "Python",
      "Java",
      "C",
      "JavaScript",
      "TypeScript",
      "Go",
      "SQL",
      "Bash",
      "HTML/CSS",
    ],
  },
  {
    label: "Frameworks & Tools",
    items: [
      "React",
      "React Native",
      "Angular",
      "Flutter",
      "Spring Boot",
      "Git",
      "Docker",
      "Kubernetes",
      "Terraform",
      "REST APIs",
    ],
  },
  {
    label: "Cloud & Systems",
    items: [
      "Oracle Cloud (OCI)",
      "Distributed Systems",
      "Load Balancing",
      "Microservices",
      "CI/CD",
      "Observability",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow reveal">Toolbox</span>
          <h2 className="section-title reveal">
            What I work <em>with</em>.
          </h2>
        </div>

        <div className="skills__grid">
          {groups.map((g) => (
            <div key={g.label} className="skills__group reveal">
              <h3>{g.label}</h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
