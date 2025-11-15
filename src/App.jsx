import React from "react";

const simulations = [
  {
    title: "BCG X GenAI Consulting Job Simulation — Forage",
    meta: "GenAI · Financial Chatbot · July 2025",
    body: [
      "Completed a hands-on GenAI consulting simulation focused on designing and implementing an AI-powered financial insights chatbot tailored for enterprise clients.",
      "Developed Python-based data processing workflows using pandas to ingest, clean, and structure financial data extracted from 10-K and 10-Q SEC filings.",
      "Applied rule-based logic and prompt refinement frameworks to interpret complex financial statements, enabling automated generation of user-friendly insights and summaries.",
      "Designed prompt strategies to reduce hallucinations and improve factual accuracy, including contextual grounding, templated responses, and scenario-based testing.",
      "Delivered a working prototype demonstrating how GenAI can support financial analysis, streamline reporting workflows, and enhance decision-making for business users."
    ],
    tags: ["GenAI", "Python", "pandas", "10-K / 10-Q", "Financial Chatbot"],
    certificateUrl: "/BCG_GenAI_JoB_Simulation_certificate.pdf" 
  },
  {
    title: "Prompt Engineering for ChatGPT — Vanderbilt University",
    meta: "Certification · LLMs & Prompt Design",
    body: [
      "Completed a Prompt Engineering for ChatGPT certificate program focused on advanced prompting techniques for large language models.",
      "Studied and implemented reusable prompt patterns such as role prompting, chain-of-thought, few-shot prompting, and constraint-based prompts to enhance response quality and consistency.",
      "Designed structured prompts for real-world applications across business, education, and technical scenarios, including automated reasoning tasks and content generation.",
      "Created multi-step prompt workflows combining instructions, examples, and constraints to build prompt-based applications that produce reliable and predictable outputs.",
      "Strengthened understanding of how LLMs interpret prompts, manage context, and generate structured responses for applied use cases."
    ],
    tags: ["Prompt Engineering", "LLMs", "ChatGPT", "Prompt Patterns"],
    certificateUrl: "/PromptEngineering_Certificate.pdf" 
  }
  // ➕ Add more simulations here later by pushing new objects
];

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <span>MR</span> MADHUSUDHAN REDDY KUPPAM
          </div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#simulations">Simulations &amp; Certificates</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-cta">
            <a className="btn btn-ghost" href="mailto:madhusudhanreddy.k16@gmail.com">
              Email
            </a>
            <a className="btn btn-primary" href="#contact">
              Let’s talk <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="section">
        <section className="hero" id="about">
          <div className="hero-left">
            <div className="hero-badge-row">
              <div className="hero-badge">
                <i className="fa-solid fa-bolt" /> Software Engineer
              </div>
              <div className="hero-badge">
                <i className="fa-solid fa-diagram-project" /> Distributed Systems &amp; Data Pipelines
              </div>
            </div>
            <h1 className="hero-title">
              I build <span>fast, reliable systems</span> that turn complex data into decisions.
            </h1>
            <p className="hero-subtitle">
              Software Engineer (Full-Stack) with 3.5+ years of experience designing distributed backends, real-time data
              pipelines, and high-performance UIs for engineering, research, and trading teams.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View selected work <i className="fa-solid fa-arrow-trend-up" />
              </a>
              <a
                className="btn btn-ghost"
                href="https://linkedin.com/in/hafig-b6498a285"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <i className="fa-brands fa-linkedin" />
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <i className="fa-solid fa-location-dot" /> Denton, TX • Open to hybrid / remote
              </span>
              <span>
                <i className="fa-solid fa-circle-nodes" /> Python • React • Node.js • AWS
              </span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-tag">Snapshot</div>
              <div className="hero-highlight">
                <strong>3.5+ years</strong> shipping distributed backend services, real-time dashboards, and internal
                trading tools.
              </div>
              <div className="hero-pills">
                <div className="pill">Throughput ↑ 32% on data ingestion</div>
                <div className="pill">Latency ↓ 30% on core APIs</div>
                <div className="pill">Prod issues ↓ 20% via RCA &amp; monitoring</div>
              </div>
              <div className="hero-mini">
                <span>M.S. Computer Science @ UNT</span>
                <span>Currently . Global Digital Resources</span>
                <span>Previously . Wipro, CompIndia</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-header">
          <div className="eyebrow">Experience</div>
          <h2 className="section-title">Delivering impact across trading, data, and engineering teams.</h2>
          <p className="section-subtitle">
            I work end-to-end: from clarifying requirements with senior stakeholders to designing distributed systems and
            iterating on production tooling.
          </p>
        </div>

        <div className="experience-grid">
          <div>
            <div className="badge-stack">
              <div className="badge-soft">Python</div>
              <div className="badge-soft">Node.js</div>
              <div className="badge-soft">React</div>
              <div className="badge-soft">AWS</div>
              <div className="badge-soft">Distributed Compute</div>
            </div>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-role">Software Engineer (Full-Stack) · Global Digital Resources</div>
              <div className="timeline-meta">Jan 2024 – Present · USA</div>
              <ul className="timeline-points">
                <li>
                  Engineered a distributed compute &amp; data ingestion framework (Python + Node.js) increasing
                  throughput by 32% and cutting failures by 25%.
                </li>
                <li>
                  Built React dashboards/control panels to visualize data flows and job execution, improving
                  observability coverage by 40%.
                </li>
                <li>Optimized API and caching layers (Redis) to reduce average response latency by 30% on critical workflows.</li>
                <li>
                  Led automated monitoring with CloudWatch &amp; custom pipelines, reducing manual debugging time by 45%.
                </li>
              </ul>
            </article>

            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-role">Project Engineer · Wipro</div>
              <div className="timeline-meta">May 2022 – Feb 2023 · India</div>
              <ul className="timeline-points">
                <li>
                  Developed scalable Python/Java services supporting high-volume financial data pipelines (22% faster E2E
                  runs).
                </li>
                <li>
                  Collaborated with architects to refine designs for distributed datasets, caching, and multi-step
                  workflows.
                </li>
                <li>Automated regression suites (JUnit, PyTest, Postman) reducing manual validation effort by ~30%.</li>
              </ul>
            </article>

            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-role">Software Engineer · CompIndia</div>
              <div className="timeline-meta">May 2021 – Apr 2022 · India</div>
              <ul className="timeline-points">
                <li>
                  Built modular REST APIs and React components for internal monitoring consoles, reducing UI load time by
                  40%.
                </li>
                <li>
                  Improved backend algorithms and data structures, cutting core computation time by 18%.
                </li>
                <li>
                  Authored automation scripts (Python/Bash) for log parsing &amp; deployment, reducing operational
                  overhead by 40%.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-header">
          <div className="eyebrow">Selected Work</div>
          <h2 className="section-title">Projects that showcase how I think and build.</h2>
          <p className="section-subtitle">
            From role-based project tooling to GenAI assistants and ML pipelines, I design systems that are robust,
            observable, and easy to extend.
          </p>
        </div>

        <div className="card-grid">
          <article className="card">
            <div className="card-eyebrow">Full-Stack · Team Project</div>
            <h3 className="card-title">Role-Based Agile Project Management Tool</h3>
            <p className="card-body">
              React + Node.js/Express app with role-based access, Kanban boards, and reusable UI components for agile
              teams. Implemented secure REST APIs, permissions, and coverage-focused integration tests.
            </p>
            <div className="card-tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Node.js</span>
              <span className="tag">RBAC</span>
            </div>
            {/* Optional GitHub link
            <a className="card-link" href="#" target="_blank" rel="noreferrer">
              View code <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
            */}
          </article>

          <article className="card">
            <div className="card-eyebrow">GenAI · Simulation</div>
            <h3 className="card-title">Financial Q&amp;A Assistant (GenAI/LLM Prototype)</h3>
            <p className="card-body">
              Completed BCG X GenAI job simulation by ingesting 10-K/10-Q filings, designing prompt patterns and
              guardrails, and exploring lightweight retrieval to reduce hallucinations for finance queries.
            </p>
            <div className="card-tags">
              <span className="tag">OpenAI API</span>
              <span className="tag">Prompt Engineering</span>
              <span className="tag">Retrieval</span>
            </div>
          </article>

          <article className="card">
            <div className="card-eyebrow">ML · Data Pipeline</div>
            <h3 className="card-title">Financial Loan Approval ML</h3>
            <p className="card-body">
              Built a classification pipeline with Logistic Regression and Random Forest, engineered features, and
              tracked accuracy, precision, and recall. Packaged a scoring service with a clean, reproducible I/O schema.
            </p>
            <div className="card-tags">
              <span className="tag">Python</span>
              <span className="tag">pandas</span>
              <span className="tag">scikit-learn</span>
              <span className="tag">Model Ops</span>
            </div>
          </article>
        </div>
      </section>

      {/* SIMULATIONS & CERTIFICATES */}
      <section className="section" id="simulations">
        <div className="section-header">
          <div className="eyebrow">Simulations &amp; Certificates</div>
          <h2 className="section-title">Applied GenAI and prompt engineering experience.</h2>
          <p className="section-subtitle">
            Practical simulations and coursework where I built real GenAI workflows, prompt-based systems,
            and financial-analysis assistants.
          </p>
        </div>

        <div className="card-grid">
          {simulations.map((item, index) => (
            <article
              className="card sim-card"
              key={item.title}
              style={{ animationDelay: `${index * 0.08}s` }} // staggered animation
            >
              <div className="card-eyebrow">{item.meta}</div>
              <h3 className="card-title">{item.title}</h3>

              <div className="card-body">
                <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
                  {item.body.map((line, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: "0.35rem",
                        fontSize: "0.83rem",
                        color: "var(--text-muted)"
                      }}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="card-tags sim-card-footer"
              >
                <div className="sim-tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost sim-cert-btn"
                  >
                    View Certificate <i className="fa-solid fa-up-right-from-square" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-header">
          <div className="eyebrow">Skills</div>
          <h2 className="section-title">The tools and concepts I use to ship production systems.</h2>
          <p className="section-subtitle">
            I blend practical engineering with sound architecture: from low-latency APIs to CI/CD, observability, and
            clean code practices.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-pill">
            <span>Python</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Java</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>JavaScript / TypeScript</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>React</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Node.js / Express</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>REST APIs</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>SQL (MySQL / PostgreSQL)</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>MongoDB</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>SQL / MySql</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>AWS (EC2, S3, Lambda)</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Redis</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>GraphQL</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Docker</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>CI/CD · GitHub Actions</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Jest / JUnit / PyTest</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Postman / Swagger</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>System Design</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Distributed Systems</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Agile / Scrum</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Azure</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Machine Learning</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>NLP</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>HTML & CSS</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Gen AI</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>ChatGPTs</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>APIs</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Git / GitHub</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>Data Visualization / BI</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>RPA (Robotic Process Automation)</span>
            <div className="skill-dot" />
          </div>
          <div className="skill-pill">
            <span>UiPath</span>
            <div className="skill-dot" />
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="section-header">
          <div className="eyebrow">Contact</div>
          <h2 className="section-title">Let’s build something ambitious.</h2>
        </div>

        <div className="contact-card">
          <div>
            <div className="contact-title">Ready for Software Engineer (full-stack) roles in high-impact environments.</div>
            <p className="contact-text">
              I’m looking for roles where I can own critical paths: from real-time backend systems to UIs used by
              engineers, traders, and data teams. If you’re building distributed systems, algorithmic trading tools, or
              data platforms, I’d love to talk.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:madhusudhanreddy.k16@gmail.com">
                Email me <i className="fa-solid fa-envelope" />
              </a>
              <a
                className="btn btn-ghost"
                href="https://linkedin.com/in/hafig-b6498a285"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <i className="fa-brands fa-linkedin" />
              </a>
            </div>
            <div className="contact-meta">
              <span>
                <i className="fa-solid fa-location-dot" /> Based in Denton, TX · Open to relocation for the right team
              </span>
              <span>
                <i className="fa-solid fa-graduation-cap" /> M.S. Computer Science · University of North Texas
              </span>
            </div>
          </div>

          <div className="contact-right">
            <p>
              I bring a mix of <strong>distributed systems thinking</strong>, <strong>product intuition</strong>, and{" "}
              <strong>hands-on coding</strong> in Python, React, and modern cloud tooling.
            </p>
            <p>
              Whether it’s building a data ingestion framework, a trader-facing UI, or tightening CI/CD and observability,
              I care about reliability, latency, and developer experience.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© {currentYear} Madhusudhan Reddy Kuppam</span>
      </footer>
    </>
  );
};

export default App;
