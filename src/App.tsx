import { useState } from "react";

const domains = [
  {
    number: "01",
    title: "Fintech & Credit Systems",
    label: "PROFESSIONAL EXPERIENCE",
    text: "Building backend systems for loan onboarding, eligibility, credit assessment, and decisioning, integrating multiple financial data sources and external credit bureaus.",
    focus: [
      "Credit Assessment",
      "Credit Decisioning",
      "Financial Data",
      "Backend Systems",
    ],
  },
  {
    number: "02",
    title: "Workflow Automation & Integration",
    label: "PROFESSIONAL EXPERIENCE",
    text: "Designing business workflows that connect services, APIs, external systems, and operational processes using automation platforms and custom integrations.",
    focus: ["n8n", "Zapier", "APIs", "Webhooks"],
  },
  {
    number: "03",
    title: "Application Security & Compliance",
    label: "CURRENTLY EXPLORING",
    text: "Deepening application security and compliance knowledge through Siberin, an ongoing independent engineering project.",
    focus: ["SAST", "API Security", "WAF", "SIEM", "Compliance"],
  },
  {
    number: "04",
    title: "Geospatial Infrastructure",
    label: "SIDE PROJECT · ONGOING",
    text: "Building Indonesia-focused geospatial infrastructure around administrative regions, postal areas, reverse geocoding, and business-defined territories.",
    focus: [
      "Indonesia",
      "Administrative Data",
      "Reverse Geocoding",
      "Territories",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Credit Assessment",
    label: "PROFESSIONAL EXPERIENCE",
    text: "Credit assessment and decisioning system for fintech lending, integrating financial data sources, credit bureaus, and multiple eligibility checks.",
    asset: "credit-assessment.svg",
  },
  {
    number: "02",
    title: "Siberin",
    label: "SECURITY ENGINEERING · ONGOING",
    text: "Practical exploration of application security, API security, security analysis, compliance-oriented controls, and orchestrated security workflows.",
    asset: "siberin.svg",
  },
  {
    number: "03",
    title: "Zonatic",
    label: "SIDE PROJECT · ONGOING",
    text: "Indonesia-focused geospatial infrastructure designed for administrative-region lookup, reverse geocoding, and custom business territories.",
    asset: "zonatic.svg",
  },
  {
    number: "04",
    title: "Wadidaw",
    label: "IN DEVELOPMENT",
    text: "WhatsApp-based AI assistant for turning natural-language financial messages into structured transactions and automated workflows.",
    asset: "wadidaw.svg",
  },
];

const approach = [
  ["01", "Reliability", "Design around failure, timeouts, retries."],
  ["02", "Integration", "Connect services and external dependencies."],
  ["03", "Maintainability", "Prefer explicit boundaries and testable code."],
  ["04", "Automation", "Turn repetitive processes into workflows."],
  [
    "05",
    "Pragmatism",
    "Use the simplest architecture that solves the problem.",
  ],
];

const technology = [
  ["Backend", "Node.js · TypeScript · Go"],
  ["Data", "PostgreSQL · MySQL · Redis"],
  ["Workflow", "n8n · Zapier · Temporal"],
  ["Infrastructure", "Docker · Kubernetes"],
  ["Frontend", "React · Vue"],
];

function App() {
  const [menu, setMenu] = useState(false);
  const [project, setProject] = useState<(typeof projects)[number] | null>(
    null,
  );

  const scrollTo = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">
          <span>&gt;_</span> HERIYANTO
        </a>
        <button
          className="hamburger"
          onClick={() => setMenu(!menu)}
          aria-label="Menu"
        >
          <i />
          <i />
          <i />
        </button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          <button onClick={() => scrollTo("work")}>Work</button>
          <button onClick={() => scrollTo("domains")}>Domains</button>
          <button onClick={() => scrollTo("approach")}>Approach</button>
          <button onClick={() => scrollTo("experience")}>Experience</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <a
            href="https://github.com/heritechie"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            GH
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">SOFTWARE ENGINEER</p>
            <h1>
              I build systems for complex <em>business workflows.</em>
            </h1>
            <p className="lead">
              Software Engineer focused on fintech, credit systems, system
              integration, workflow automation, and application security.
            </p>
            <div className="hero-buttons">
              <button
                className="button primary"
                onClick={() => scrollTo("work")}
              >
                View My Work <span>→</span>
              </button>
              <a
                className="button ghost"
                href="mailto:heritechie@gmail.com?subject=Software%20Engineer%20Opportunity"
              >
                Contact Me <span>↗</span>
              </a>
            </div>
            <div className="hero-domains">
              <span>Credit Systems</span>
              <span>System Integration</span>
              <span>Workflow Automation</span>
              <span>Application Security</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-art">
              <img
                src="/assets/hero/wide_dark_futuristic_tech_illustration_on_a_deep_n.png"
                alt="Software engineering systems illustration"
              />
            </div>
          </div>
        </section>

        <section id="domains" className="section shell">
          <SectionHeading
            eyebrow="WHAT I WORK ON"
            title="Domains, not just technologies."
          />
          <div className="domain-grid">
            {domains.map((domain) => (
              <article className="domain-card" key={domain.number}>
                <div className="domain-top">
                  <span>{domain.number}</span>
                  <p>{domain.label}</p>
                </div>
                <h3>{domain.title}</h3>
                <p className="domain-text">{domain.text}</p>
                <div className="domain-focus">
                  {domain.focus.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section shell">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Engineering work behind the domains."
          />
          <div className="projects">
            {projects.map((item) => (
              <article className="project" key={item.number}>
                <div className="project-image">
                  <img src={`/assets/projects/${item.asset}`} alt="" />
                </div>
                <span className="project-no">{item.number}</span>
                <p className="project-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="project-footer">
                  <button onClick={() => setProject(item)}>Case Study →</button>
                  <span>
                    {item.title === "Credit Assessment"
                      ? "Confidential"
                      : "Ongoing"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="section shell">
          <SectionHeading
            eyebrow="ENGINEERING APPROACH"
            title="How I approach complex systems."
          />
          <div className="approach-grid">
            {approach.map(([n, title, text]) => (
              <div className="approach-item" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section shell">
          <SectionHeading
            eyebrow="CURRENTLY EXPLORING"
            title="Application security & compliance."
          />
          <div className="exploring">
            <div>
              <p className="project-label">SIBERIN · INDEPENDENT · ONGOING</p>
              <h3>Deepening Application Security</h3>
              <p>
                Exploring application and API security through practical
                analysis, detection, security workflows, and compliance-oriented
                controls.
              </p>
            </div>
            <div className="exploring-tags">
              {[
                "SAST",
                "API Security",
                "WAF",
                "SIEM",
                "Security Testing",
                "Compliance",
                "Temporal",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell">
          <SectionHeading
            eyebrow="TECHNOLOGY"
            title="Tools that support the work."
          />
          <div className="tech-groups">
            {technology.map(([title, items]) => (
              <div key={title}>
                <b>{title}</b>
                <p>{items}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section shell">
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="Professional experience."
          />
          <div className="experience">
            <div className="experience-date">2022 — PRESENT</div>
            <div>
              <p className="project-label">SOFTWARE ENGINEER · FINTECH</p>
              <h3>Modal Rakyat Indonesia</h3>
              <p>
                Building and maintaining software supporting loan onboarding,
                credit assessment, application workflows, and external
                integrations, with a focus on backend reliability, performance,
                and maintainable engineering practices.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section shell about">
          <div>
            <p className="eyebrow">ABOUT</p>
            <h2>Practical engineering over unnecessary complexity.</h2>
          </div>
          <div>
            <p>
              I'm Heriyanto, a Software Engineer based in Cirebon, Indonesia. I
              enjoy turning ambiguous requirements into reliable systems,
              especially backend services, integrations, data workflows, and
              automation.
            </p>
            <p>
              My strongest interest is where application development meets
              complex business processes: APIs, databases, integration, workflow
              automation, security, and reliable backend systems.
            </p>
          </div>
        </section>

        <section className="contact shell">
          <div>
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Have a problem worth building?</h2>
            <p>
              I'm open to interesting engineering opportunities and
              collaborations.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:heritechie@gmail.com">
              ✉ <span>heritechie@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/heritechie/"
              target="_blank"
              rel="noreferrer"
            >
              in <span>linkedin.com/in/heritechie</span>
            </a>
            <a
              href="https://github.com/heritechie"
              target="_blank"
              rel="noreferrer"
            >
              GH <span>github.com/heritechie</span>
            </a>
            <span>⌖ Cirebon, Indonesia</span>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Heriyanto</span>
        <span>Built with React + TypeScript</span>
      </footer>

      {project && (
        <div className="modal-backdrop" onMouseDown={() => setProject(null)}>
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setProject(null)}>
              ×
            </button>
            <p className="project-label">{project.label}</p>
            <h2>{project.title}</h2>
            <p className="modal-text">{project.text}</p>
            <div className="modal-grid">
              <div>
                <b>PUBLIC PORTFOLIO</b>
                <p>
                  Showing the problem, domain, engineering approach, and outcome
                  without exposing confidential implementation details.
                </p>
              </div>
              <div>
                <b>STATUS</b>
                <p>
                  {project.title === "Credit Assessment"
                    ? "Professional experience · Confidential implementation"
                    : "Ongoing project"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default App;
