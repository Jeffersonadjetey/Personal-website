import "./about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__inner">
          <div className="section-header">
            <span className="eyebrow reveal">About</span>
            <h2 className="section-title reveal">
              Engineer at heart, <em>builder</em> by instinct.
            </h2>
          </div>

          <div className="about__prose reveal">
            <p>
              I'm a software engineer on the OCI Load Balancer Control Plane and
              Global Accelerator team at Oracle, where I build APIs and
              control-plane services that route traffic for some of the
              world's largest workloads.
            </p>
            <p>
              Before Oracle, I studied Computer Science at Dartmouth College
              (2024) — a TuckLab Scholar and Undergraduate Research Scholar at
              the Thayer School of Engineering, where I worked on AI-powered
              educational systems that combine game mechanics, physical
              interfaces, and social dynamics for children.
            </p>
            <p>
              Outside my day job, I'm co-founder of{" "}
              <a
                className="about__link"
                href="https://praecept.ai/"
                target="_blank"
                rel="noreferrer"
              >
                Praecept
              </a>
              . I care about distributed systems, thoughtful product design,
              and building tools that hold up under real-world scale.
            </p>
          </div>

          <dl className="about__facts reveal">
            <div>
              <dt>Based in</dt>
              <dd>United States</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>Dartmouth College, B.A. CS '24</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>Software Engineer @ Oracle Cloud</dd>
            </div>
            <div>
              <dt>Building</dt>
              <dd>Praecept</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
