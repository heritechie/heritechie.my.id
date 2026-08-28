import { useState } from "react";

const domains = [
  {
    number: "01",
    title: "Fintech & Credit Systems",
    label: "PROFESSIONAL EXPERIENCE",
    subtitle: "Lending · Credit Assessment · Decision Workflows",
    text: "Building systems that support lending operations, from loan onboarding and credit assessment to eligibility, scoring, and operational decision workflows.",
    focus: [
      "Credit Assessment",
      "Lending Systems",
      "Decision Workflows",
      "Backoffice Systems",
    ],
    flow: { rows: [["INPUT", "ASSESSMENT", "DECISION"]] },
  },
  {
    number: "02",
    title: "System Integration",
    label: "PROFESSIONAL EXPERIENCE",
    subtitle: "APIs · External Data · Service Integration",
    text: "Connecting business systems, internal services, and external data sources into reliable workflows that support real operational processes.",
    focus: [
      "API Integration",
      "Service Integration",
      "External Data",
      "Data Synchronization",
    ],
    flow: { rows: [["SERVICE", "API", "SERVICE"], ["DATA"]] },
  },
  {
    number: "03",
    title: "Workflow Automation",
    label: "PROFESSIONAL EXPERIENCE",
    subtitle: "Business Processes · n8n · Zapier",
    text: "Turning multi-step operational processes into automated workflows across APIs, services, data sources, and business rules.",
    focus: [
      "Workflow Orchestration",
      "Business Automation",
      "Scheduled Processing",
      "API-driven Workflows",
    ],
    flow: { rows: [["TRIGGER", "PROCESS", "DECISION", "ACTION"]] },
  },
  {
    number: "04",
    title: "Application Security & Compliance",
    label: "CURRENTLY EXPLORING",
    subtitle: "Application Security · Security Controls · Compliance",
    text: "Exploring practical approaches to application security and compliance, with a focus on integrating security into real-world application and engineering workflows.",
    focus: [
      "Application Security",
      "Security Assessment",
      "Security Controls",
      "Compliance",
    ],
    flow: {
      rows: [["APPLICATION"], ["AUTH", "DATA", "API"], ["SECURITY CONTROL"]],
      frame: true,
    },
  },
];

const projects = [
  {
    number: "01",
    title: "Credit Assessment",
    label: "PROFESSIONAL EXPERIENCE",
    text: "Credit assessment and decisioning for fintech lending, orchestrating financial data integrations, eligibility checks, and scoring into structured credit decisions.",
    asset: "credit-assessment.png",
  },
  {
    number: "02",
    title: "Siberin",
    label: "SECURITY ENGINEERING · ONGOING",
    text: "Application security engineering and analysis, combining SAST, API security, WAF context, and SIEM log analysis within security and compliance workflows.",
    asset: "siberin.png",
  },
  {
    number: "03",
    title: "Zonatic",
    label: "SIDE PROJECT · ONGOING",
    text: "Indonesia-focused geospatial infrastructure, with structured administrative-region data, reverse geocoding, and location lookup for reliable geographic systems.",
    asset: "zonatic.png",
  },
  {
    number: "04",
    title: "Wadidaw",
    label: "IN DEVELOPMENT",
    text: "WhatsApp-based AI assistant for handling everyday tasks through natural language, from finance and job search to learning, travel, and general assistance.",
    asset: "wadidaw.png",
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
  ["Data", "PostgreSQL · MySQL · MongoDB"],
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
                src="/assets/hero/hero-section.png"
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
          <p className="lead">
            I build business-critical systems where software, data,
            integrations, and operational workflows come together.
          </p>
          <div className="domain-grid">
            {domains.map((domain) => (
              <article className="domain-card" key={domain.number}>
                <div className="domain-top">
                  <span>{domain.number}</span>
                  <p>{domain.label}</p>
                </div>
                <DomainFlow rows={domain.flow.rows} frame={domain.flow.frame} />
                <h3>{domain.title}</h3>
                <p className="domain-subtitle">{domain.subtitle}</p>
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
                  <img src={`/assets/projects/${item.asset}`} alt={item.title} />
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
                "DAST",
                "API Security",
                "WAF",
                "SIEM",
                "Security Testing",
                "Compliance",
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

function DomainFlow({
  rows,
  frame = false,
}: {
  rows: string[][];
  frame?: boolean;
}) {
  const CW = 240;
  const CH = 64;
  const maxCols = Math.max(...rows.map((r) => r.length), 1);
  const font = maxCols > 3 ? 6 : 7;
  const nodeH = rows.length === 1 ? 24 : rows.length === 2 ? 20 : 14;
  const gap = maxCols > 3 ? 12 : 16;
  const nw = (s: string) =>
    Math.max(34, Math.min(110, Math.round(s.length * 3.7) + 10));
  const rowWidth = (row: string[]) =>
    row.reduce((acc, label, i) => acc + nw(label) + (i ? gap : 0), 0);
  const rowY = (i: number) =>
    rows.length === 1
      ? (CH - nodeH) / 2
      : rows.length === 2
        ? 8 + i * 30
        : 5 + i * 19;

  const boxes = rows.map((row, i) => {
    let cx = (CW - rowWidth(row)) / 2;
    return row.map((label) => {
      const w = nw(label);
      const box = { cx: cx + w / 2, x: cx, y: rowY(i), w, label };
      cx += w + gap;
      return box;
    });
  });

  const terminal = rows[rows.length - 1][rows[rows.length - 1].length - 1];

  return (
    <svg
      className="domain-flow"
      viewBox={`0 0 ${CW} ${CH}`}
      role="presentation"
      aria-hidden="true"
    >
      {frame && (
        <rect
          x={2}
          y={2}
          width={CW - 4}
          height={CH - 4}
          rx={12}
          fill="none"
          stroke="var(--border)"
          strokeOpacity={0.55}
          strokeDasharray="1 4"
        />
      )}
      {rows.map((row, i) =>
        row.map((label, j) => {
          const b = boxes[i][j];
          const term = i === rows.length - 1 && label === terminal;
          return (
            <g key={`n-${i}-${j}`}>
              <rect
                x={b.x}
                y={b.y}
                width={b.w}
                height={nodeH}
                rx={5}
                fill="var(--panel2)"
                stroke={term ? "var(--accent)" : "var(--border)"}
                strokeOpacity={term ? 0.55 : 1}
              />
              <text
                x={b.cx}
                y={b.y + nodeH / 2}
                dy="0.35em"
                textAnchor="middle"
                fontFamily="monospace"
                fontWeight={700}
                fontSize={font}
                fill={term ? "var(--accent)" : "var(--muted)"}
                opacity={term ? 0.9 : 0.95}
              >
                {label}
              </text>
            </g>
          );
        }),
      )}
      {rows.map((row, i) =>
        row.slice(0, -1).map((_, j) => {
          const a = boxes[i][j];
          const b = boxes[i][j + 1];
          const midY = a.y + nodeH / 2;
          return (
            <g key={`h-${i}-${j}`} stroke="var(--border)">
              <line x1={a.x + a.w} y1={midY} x2={b.x} y2={midY} />
              <path
                d={`M ${b.x - 3} ${midY - 2.5} L ${b.x - 1} ${midY} L ${b.x - 3} ${midY + 2.5}`}
                fill="var(--border)"
                stroke="none"
              />
            </g>
          );
        }),
      )}
      {rows.slice(0, -1).map((_, i) => {
        const top = boxes[i];
        const bottom = boxes[i + 1];
        const cx =
          (top.reduce((acc, b) => acc + b.cx, 0) / top.length +
            bottom.reduce((acc, b) => acc + b.cx, 0) / bottom.length) /
          2;
        const y1 = rowY(i) + nodeH;
        const y2 = rowY(i + 1);
        return (
          <g key={`v-${i}`} stroke="var(--border)">
            <line x1={cx} y1={y1} x2={cx} y2={y2} />
            <path
              d={`M ${cx - 2.5} ${y2 - 3} L ${cx} ${y2 - 1} L ${cx + 2.5} ${y2 - 3}`}
              fill="var(--border)"
              stroke="none"
            />
          </g>
        );
      })}
    </svg>
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
