import Image from "next/image";

const ArrowUpRight = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M4 12 12 4M5 4h7v7" />
  </svg>
);

const Download = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 2v8m0 0 3-3m-3 3L5 7M3 13h10" />
  </svg>
);

const researchProjects = [
  {
    number: "02",
    status: "Exploratory design · On hold",
    title: "RPi CM5 ATX Carrier Board",
    description:
      "An exploratory 8-layer, nano-ATX carrier design for the Raspberry Pi Compute Module 5, developed around high-current power delivery, per-rail telemetry, and embedded supervision. The project is currently on hold.",
    details: [
      "TPS544B27W buck converters",
      "10A per-rail telemetry",
      "ESP32 supervisory firmware",
      "Controlled-impedance stackup",
    ],
    image: null,
  },
  {
    number: "03",
    status: "Research under review · SENSORS 2026",
    title: "Air Sentry",
    description:
      "I independently designed, assembled, and tested this indoor air-quality monitor through several hardware revisions. Related additive-manufacturing research is currently under review for SENSORS 2026 in Rotterdam.",
    details: [
      "Complete hardware ownership",
      "PCB design and assembly",
      "Firmware and sensor integration",
      "Validation and enclosure design",
    ],
    image: {
      src: "/projects/air-sentry.jpg",
      alt: "Air Sentry indoor air-quality monitor with its enclosure opened",
    },
  },
];

const skills = [
  {
    label: "Languages",
    value: "Python, C, C++, Java, C#, Z80 Assembly",
  },
  {
    label: "Hardware & systems",
    value: "PCB Layout, KiCad, SystemVerilog, PMBus, power delivery",
  },
  {
    label: "Embedded platforms",
    value: "ESP32 / ESP-IDF, Nordic nRF52 & nRF54, Zephyr / NCS, ESPHome",
  },
  {
    label: "Frameworks & tools",
    value: "Docker, Apache NiFi, Django, Git, AWS",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Gabriel Womelsdorf, home">
          <span>GW</span>
          <span className="wordmark-name">Gabriel Womelsdorf</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#professional">Professional</a>
          <a href="#personal">Personal</a>
        </nav>

        <a className="header-contact" href="mailto:gabriel.womelsdorf.work@gmail.com">
          Let&apos;s talk
          <ArrowUpRight />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              Computer Engineer · Builder · Researcher
            </p>
            <h1 id="hero-title">
              Engineering ideas
              <br />
              from <em>signal</em> to system.
            </h1>
            <p className="hero-intro">
              I&apos;m Gabriel, a computer engineering student designing at the
              intersection of embedded systems, power electronics, and
              production software.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                Explore my work
                <ArrowUpRight />
              </a>
              <a
                className="button button-secondary"
                href="/gabriel-womelsdorf-resume.pdf"
                target="_blank"
              >
                View résumé
                <Download />
              </a>
            </div>
          </div>

          <div className="hero-aside" aria-label="Current focus">
            <div className="circuit-mark" aria-hidden="true">
              <svg viewBox="0 0 260 260">
                <circle cx="130" cy="130" r="70" />
                <circle cx="130" cy="130" r="42" />
                <path d="M130 60V14M130 246v-46M60 130H14m232 0h-46M81 81 48 48m164 164-33-33M179 81l33-33M48 212l33-33" />
                <circle className="accent-node" cx="130" cy="14" r="5" />
                <circle className="accent-node" cx="246" cy="130" r="5" />
                <circle className="accent-node" cx="48" cy="212" r="5" />
                <path className="accent-line" d="M104 130h52M130 104v52" />
              </svg>
            </div>
            <p className="aside-label">Current focus</p>
            <p className="aside-title">Embedded systems research</p>
            <p className="aside-meta">Hardware · Firmware · Tools</p>
          </div>

          <div className="hero-footnote">
            <span>Based in Newport News, Virginia</span>
            <span className="scroll-cue">
              Scroll to explore
              <span aria-hidden="true">↓</span>
            </span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="section-index">01 / About</p>
            <h2>I like the layer where software meets the physical world.</h2>
          </div>
          <div className="about-body">
            <div className="about-copy">
              <p className="lead">
                I&apos;m pursuing a B.S. in Computer Engineering and a minor in
                Mathematics at Christopher Newport University, graduating in
                2027.
              </p>
              <p>
                My work moves between circuit boards and code: laying out
                high-current power systems, writing firmware for constrained
                devices, and building reliable software infrastructure. I&apos;m
                especially interested in embedded systems, power delivery
                engineering, and applied hardware research.
              </p>
              <p>
                Alongside school, I&apos;ve spent more than three years growing
                from intern to lead software engineer at Core4ce—experience that
                taught me how to carry technical work from early architecture
                through production deployment.
              </p>
            </div>
            <aside className="education-card">
              <p className="card-kicker">Education</p>
              <h3>Christopher Newport University</h3>
              <p>B.S. Computer Engineering</p>
              <p>Minor in Mathematics</p>
              <div className="education-meta">
                <span>Expected 2027</span>
                <span>Newport News, VA</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-heading heading-row">
            <div>
              <p className="section-index">02 / Research</p>
              <h2>Selected hardware, AI &amp; research projects.</h2>
            </div>
            <p className="heading-note">
              Designing, testing, and iterating from first principles.
            </p>
          </div>

          <article className="tardis-feature">
            <div className="tardis-copy">
              <div className="tardis-topline">
                <p className="project-status">01 · Private research project</p>
                <span>CNU Summer Scholars · Core4ce grant</span>
              </div>
              <h3>Tardis</h3>
              <p className="tardis-lead">
                A modular, AI-accelerated embedded development platform built
                around a reusable compute module and interchangeable carrier
                boards.
              </p>
              <p className="tardis-description">
                I proposed the project, applied for and secured grant support
                from Core4ce through CNU&apos;s Summer Scholars program, then
                independently designed, assembled, and tested the complete
                system with guidance from a faculty mentor. Public technical
                details remain limited.
              </p>
              <span className="privacy-label">Private · Selected details only</span>
            </div>

            <figure className="tardis-photo">
              <Image
                src="/projects/tardis-carrier.jpg"
                alt="Tardis compute module installed in its custom development carrier"
                width={1600}
                height={1600}
                sizes="(max-width: 950px) 86vw, 42vw"
              />
              <figcaption>Development carrier prototype</figcaption>
            </figure>

            <div className="tardis-capabilities">
              <div>
                <span>01</span>
                <p>Independently designed end to end</p>
              </div>
              <div>
                <span>02</span>
                <p>Custom hardware assembly and bring-up</p>
              </div>
              <div>
                <span>03</span>
                <p>Embedded firmware and developer tooling</p>
              </div>
              <div>
                <span>04</span>
                <p>Faculty-mentored undergraduate research</p>
              </div>
            </div>
          </article>

          <div className="project-list">
            {researchProjects.map((project) => (
              <article
                className={project.image ? "project project-with-image" : "project"}
                key={project.title}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="project-status">{project.status}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul className="project-details">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                {project.image && (
                  <figure className="project-photo">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={1600}
                      height={1600}
                      sizes="(max-width: 700px) 82vw, 22vw"
                    />
                    <figcaption>Prototype hardware · Details limited</figcaption>
                  </figure>
                )}
              </article>
            ))}
          </div>

          <div className="research-note">
            <span className="research-note-mark">CNU</span>
            <div>
              <p className="card-kicker">University research · 2023—2025</p>
              <h3>Super BigByte Project</h3>
              <p>
                Explored CNC fabrication of table-sized PCBs and assembled key
                power-delivery systems for the project&apos;s photo-multiplier
                coordinate detector.
              </p>
            </div>
          </div>
        </section>

        <section className="section professional-section" id="professional">
          <div className="section-heading heading-row">
            <div>
              <p className="section-index">03 / Professional</p>
              <h2>Building software that holds up in production.</h2>
            </div>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/gabriel-womelsdorf-038987224"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight />
            </a>
          </div>

          <div className="experience">
            <div className="experience-meta">
              <p className="experience-company">Core4ce</p>
              <p>Reston, Virginia</p>
              <p>June 2022 — Present</p>
            </div>
            <div className="experience-content">
              <p className="role-path">
                Software R&amp;D Intern <span>→</span> Software Engineer{" "}
                <span>→</span> Lead Software Engineer
              </p>
              <ul className="impact-list">
                <li>
                  <span>01</span>
                  <p>
                    Designed a production data pipeline in Apache NiFi on AWS,
                    including custom Java processors and reconfigurable routing.
                  </p>
                </li>
                <li>
                  <span>02</span>
                  <p>
                    Led the end-to-end development of Cyberscape, owning
                    architecture, sprint planning, client deployments, and
                    mentorship.
                  </p>
                </li>
                <li>
                  <span>03</span>
                  <p>
                    Overhauled testing for a critical subsystem and expanded
                    data-forensics capabilities with Django, Docker, and AWS.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill" key={skill.label}>
                <p>{skill.label}</p>
                <span>{skill.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section personal-section" id="personal">
          <div className="personal-intro">
            <p className="section-index">04 / Personal</p>
            <h2>Always making something.</h2>
            <p>
              Outside of classes and client work, I&apos;m usually prototyping
              hardware, 3D printing, or helping other students turn an idea into
              something they can hold.
            </p>
          </div>

          <div className="personal-grid">
            <article className="personal-card featured-card">
              <p className="card-kicker">Community</p>
              <span className="card-number">01</span>
              <h3>The Captains Workshop</h3>
              <p>
                I founded and lead CNU&apos;s 3D-printing club, creating a place
                for students to learn through hands-on workshops and shared
                experimentation.
              </p>
              <span className="card-tag">President · 2023—Present</span>
            </article>
            <article className="personal-card">
              <p className="card-kicker">Early project · High school</p>
              <span className="card-number">02</span>
              <h3>Z80 Microcomputer</h3>
              <p>
                In high school, I designed an 8-bit Z80-based computer and wrote
                a minimalist operating system in assembly with basic I/O and
                memory routines.
              </p>
              <span className="card-tag">
                High school · Computer architecture · Z80 assembly
              </span>
            </article>
            <article className="personal-card">
              <p className="card-kicker">Current obsession</p>
              <span className="card-number">03</span>
              <h3>Power, measured well.</h3>
              <p>
                Exploring how thoughtful power architecture, telemetry, and
                fault handling can make ambitious embedded systems more
                observable and reliable.
              </p>
              <span className="card-tag">PMBus · PCB design · Firmware</span>
            </article>
            <article className="personal-card">
              <p className="card-kicker">Open source</p>
              <span className="card-number">04</span>
              <h3>Code &amp; build logs</h3>
              <p>
                Follow along with experiments, hardware revisions, and the
                software that supports them on GitHub.
              </p>
              <a
                className="text-link"
                href="https://github.com/silverwarriorin"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub
                <ArrowUpRight />
              </a>
            </article>
          </div>
        </section>

        <section className="contact-section">
          <p className="eyebrow">
            <span />
            Have an interesting problem?
          </p>
          <h2>Let&apos;s build something that works.</h2>
          <a
            className="contact-email"
            href="mailto:gabriel.womelsdorf.work@gmail.com"
          >
            gabriel.womelsdorf.work@gmail.com
            <ArrowUpRight />
          </a>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#top">
          <span>GW</span>
        </a>
        <p>Designed &amp; built by Gabriel Womelsdorf.</p>
        <div className="footer-links">
          <a
            href="https://github.com/silverwarriorin"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-womelsdorf-038987224"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="/gabriel-womelsdorf-resume.pdf" target="_blank">
            Résumé
          </a>
        </div>
      </footer>
    </>
  );
}
