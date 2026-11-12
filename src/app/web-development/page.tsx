import Link from "next/link";
import type { ReactElement } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Box,
  Code2,
  Database,
  FileCode2,
  Fingerprint,
  FolderOpen,
  Globe,
  Key,
  Layers,
  LayoutDashboard,
  Lock,
  Microscope,
  MonitorSmartphone,
  Package,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Digital Architecture & Web Development",
  description:
    "Full-stack engineering, AI applications, automation systems and secure platforms. Built on real open-source projects — not generic web services.",
};

/* ─────────────────────────────────────────────
   HERO UI PREVIEW — right panel
───────────────────────────────────────────── */
function WdUIPreview() {
  const chartBars = [42, 58, 35, 72, 51, 66, 88];
  return (
    <div className="wd-ui-preview" aria-hidden="true">

      {/* Code editor card */}
      <div className="wd-ui-card wd-ui-card--dark">
        <div className="wd-ui-dots">
          <span className="wd-ui-dot wd-ui-dot--red" />
          <span className="wd-ui-dot wd-ui-dot--yellow" />
          <span className="wd-ui-dot wd-ui-dot--green" />
        </div>
        <div className="wd-ui-code-line">
          <span className="wd-kw">async</span>{" "}
          <span className="wd-fn">encrypt_file</span>
          {"(path: "}
          <span className="wd-str">str</span>
          {") -> "}
          <span className="wd-str">bytes</span>:
        </div>
        <div className="wd-ui-code-line" style={{ paddingLeft: 16 }}>
          <span className="wd-cm"># AES-256 + PBKDF2 key derivation</span>
        </div>
        <div className="wd-ui-code-line" style={{ paddingLeft: 16 }}>
          <span className="wd-kw">return</span>{" "}
          <span className="wd-fn">cipher</span>
          .encrypt(data)
        </div>
        <div className="wd-ui-code-line" style={{ marginTop: 6 }}>
          <span className="wd-fn">agent</span>
          {" = "}
          <span className="wd-fn">OpenAIAgent</span>
          {"(model="}
          <span className="wd-str">"gpt-4o"</span>
          {")"}
        </div>
      </div>

      {/* Analytics + Auth row */}
      <div className="wd-ui-row-grid">
        <div className="wd-ui-card wd-ui-card--accent">
          <div className="wd-ui-top">
            <span className="wd-ui-label">Analytics</span>
            <span className="wd-ui-badge wd-ui-badge--green">
              <TrendingUp size={10} /> Live
            </span>
          </div>
          <div className="wd-ui-value" style={{ fontSize: "1.5rem" }}>94</div>
          <div className="wd-ui-sub">Lighthouse score</div>
          <div className="wd-ui-sparkline">
            {chartBars.map((h, i) => (
              <div
                key={i}
                className={`wd-ui-bar${i === chartBars.length - 1 ? " wd-ui-bar--hi" : ""}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="wd-ui-card">
          <div className="wd-ui-top">
            <span className="wd-ui-label">AI Agent</span>
            <span className="wd-ui-badge wd-ui-badge--purple">GPT-4o</span>
          </div>
          <div className="wd-ui-value" style={{ fontSize: "1.5rem" }}>MCP</div>
          <div className="wd-ui-sub">Model Context Protocol</div>
        </div>
      </div>

      {/* System overview card */}
      <div className="wd-ui-card">
        <div className="wd-ui-label" style={{ marginBottom: 12 }}>
          Platform overview
        </div>
        {[
          ["FastAPI backend",    "Running"],
          ["File encryption",   "AES-256"],
          ["Admin dashboard",   "Active"],
        ].map(([label, value]) => (
          <div key={label} className="wd-ui-row">
            <span className="wd-ui-row-label">{label}</span>
            <span className="wd-ui-row-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROJECT VISUAL SUB-COMPONENTS
───────────────────────────────────────────── */
function SecureHubVisual() {
  return (
    <div
      className="wd-proj-visual"
      style={{ background: "linear-gradient(135deg, #e8f1ff 0%, #f5f9ff 100%)" }}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--sp-2)" }}>
        <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "var(--sp-3)", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>Secure Hub — Admin Dashboard</div>
          {[["Encryption engine", "AES-256 ✓"], ["Auth layer", "JWT ✓"], ["File store", "Encrypted"], ["API status", "FastAPI ●"]].map(([l, v]) => (
            <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid var(--line-soft)", fontSize: "var(--text-xs)" }}>
              <span style={{ color: "var(--muted)" }}>{l}</span>
              <span style={{ fontWeight: 700, color: "var(--navy)" }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-2)" }}>
          {[{ v: "AES", l: "Encryption" }, { v: "JWT", l: "Auth" }, { v: "REST", l: "API" }, { v: "100%", l: "Encrypted" }].map(({ v, l }) => (
            <div key={l} style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-sm)", padding: "var(--sp-2)", textAlign: "center" }}>
              <div style={{ fontSize: "var(--text-lg)", fontWeight: 900, color: "var(--blue)", letterSpacing: "-0.03em" }}>{v}</div>
              <div style={{ fontSize: 11, color: "var(--subtle)", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AIAgentVisual() {
  return (
    <div
      className="wd-proj-visual"
      style={{ background: "linear-gradient(135deg, #0d2d52 0%, #071d3b 100%)" }}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--sp-2)" }}>
        <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius)", padding: "var(--sp-3)" }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
          </div>
          {["agent = OpenAIAgent(model='gpt-4o')", "tool = MCPTool(server_url=url)", "result = await agent.run(task)"].map((line, i) => (
            <div key={i} style={{ fontFamily: "monospace", fontSize: 11, color: i === 2 ? "#79c0ff" : "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>{line}</div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[{ v: "GPT-4o", l: "Model" }, { v: "MCP", l: "Protocol" }, { v: "SDK", l: "OpenAI" }].map(({ v, l }) => (
            <div key={l} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-sm)", padding: "var(--sp-2)", textAlign: "center" }}>
              <div style={{ fontSize: "var(--text-base)", fontWeight: 900, color: "white", letterSpacing: "-0.02em" }}>{v}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DataToolsVisual() {
  const bars = [65, 80, 45, 90, 60, 75, 95];
  return (
    <div
      className="wd-proj-visual"
      style={{ background: "linear-gradient(135deg, #f0fdf7 0%, #f5f9ff 100%)" }}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--sp-2)" }}>
        <div style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: "var(--sp-3)", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>Data Sweeper — Processing</div>
          <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 48 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", background: i === bars.length - 1 ? "var(--blue)" : "var(--blue-light)" }} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 11, color: "var(--subtle)" }}>
            <span>CSV / Excel</span><span>Cleaned ✓</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-2)" }}>
          {[{ v: "CSV", l: "Input" }, { v: "Clean", l: "Output" }, { v: "Pandas", l: "Engine" }, { v: "Web", l: "Streamlit" }].map(({ v, l }) => (
            <div key={l} style={{ background: "white", border: "1px solid var(--line)", borderRadius: "var(--radius-sm)", padding: "var(--sp-1) var(--sp-2)", textAlign: "center" }}>
              <div style={{ fontSize: "var(--text-base)", fontWeight: 900, color: "var(--navy)" }}>{v}</div>
              <div style={{ fontSize: 11, color: "var(--subtle)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FEATURED PROJECTS DATA
───────────────────────────────────────────── */
type WdProject = {
  id: string;
  tag: string;
  category: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  reverse: boolean;
  Visual: () => ReactElement;
};

const projects: WdProject[] = [
  {
    id: "secure-hub",
    tag: "Security Platform",
    category: "Full Stack",
    title: "Secure Hub — File Encryption Platform",
    overview:
      "A production-grade file encryption and management platform combining AES-256 encryption, a FastAPI REST backend and a full admin dashboard.",
    problem:
      "Businesses sharing sensitive files over email or cloud storage expose data to interception. No existing lightweight tool offered end-to-end encryption with an admin interface.",
    solution:
      "Built a full-stack platform with FastAPI for the backend API, AES-256 + PBKDF2 for key derivation, JWT-based authentication and a responsive admin dashboard for file management.",
    features: [
      "AES-256 encryption with PBKDF2 key derivation",
      "FastAPI REST backend with JWT auth",
      "Admin dashboard for file & user management",
      "Secure Vault companion for local encryption",
    ],
    stack: ["Python", "FastAPI", "AES-256", "JWT", "REST API", "Admin UI"],
    reverse: false,
    Visual: SecureHubVisual,
  },
  {
    id: "ai-agents",
    tag: "AI Engineering",
    category: "AI / Agentic",
    title: "Agentic AI Suite — OpenAI SDK & MCP",
    overview:
      "A collection of production-ready AI agent implementations using the OpenAI Agent SDK and Model Context Protocol for autonomous task execution.",
    problem:
      "Most AI demos are one-shot prompts. Real business automation requires agents that can use tools, maintain context, call APIs and hand off between sub-agents.",
    solution:
      "Implemented multi-agent workflows using the OpenAI Agent SDK, built MCP server integrations for tool use, and developed a Learn Agentic AI curriculum covering real patterns.",
    features: [
      "OpenAI Agent SDK with tool-use patterns",
      "Model Context Protocol (MCP) server integrations",
      "Multi-agent handoff and orchestration",
      "Personal Employee — digital workforce automation",
    ],
    stack: ["Python", "OpenAI SDK", "MCP", "Agentic AI", "Async", "GPT-4o"],
    reverse: true,
    Visual: AIAgentVisual,
  },
  {
    id: "data-tools",
    tag: "Data & Automation",
    category: "Streamlit / Python",
    title: "Data Sweeper & Automation Toolkit",
    overview:
      "A suite of Streamlit-powered data tools — CSV/Excel cleaning, unit conversion, password analysis and file management — all deployable as standalone web apps.",
    problem:
      "Operations teams waste hours on manual data cleaning, unit conversions and file organisation tasks that could be automated but lack accessible web interfaces.",
    solution:
      "Built Data Sweeper for CSV/Excel processing, Convertify for unit conversion, Password Pedia for security analysis, and File Fusion as a unified file management platform.",
    features: [
      "CSV & Excel cleaning with Pandas (Data Sweeper)",
      "Multi-category unit converter (Convertify)",
      "Password strength analyser & generator (Password Pedia)",
      "File management platform (File Fusion)",
    ],
    stack: ["Python", "Streamlit", "Pandas", "Excel", "CSV", "Web UI"],
    reverse: false,
    Visual: DataToolsVisual,
  },
];

/* ─────────────────────────────────────────────
   EXPERTISE CARDS DATA
───────────────────────────────────────────── */
const expertise = [
  { Icon: Bot,           title: "AI Applications",        desc: "End-to-end AI products using OpenAI GPT-4o, agent orchestration and tool-use patterns for real business automation.", techs: ["OpenAI", "GPT-4o", "Agents", "Python"] },
  { Icon: Layers,        title: "Full Stack Development",  desc: "Complete web platforms from FastAPI REST backends to responsive frontends — production-ready and maintainable.", techs: ["FastAPI", "Python", "REST API", "HTML/CSS"] },
  { Icon: Lock,          title: "Secure File Systems",     desc: "AES-256 encryption, JWT authentication and secure file handling. Built with security-first architecture.", techs: ["AES-256", "JWT", "FastAPI", "Cryptography"] },
  { Icon: LayoutDashboard, title: "Dashboard Development", desc: "Admin dashboards and analytics interfaces that make complex data immediately actionable for teams.", techs: ["Streamlit", "Charts", "Admin UI", "Pandas"] },
  { Icon: RefreshCw,     title: "Automation Systems",      desc: "Workflow automation and data processing tools that replace manual operations with reliable, repeatable pipelines.", techs: ["Python", "Automation", "Pandas", "Scripting"] },
  { Icon: Microscope,    title: "Machine Learning",        desc: "ML course implementations and real model training workflows — from data preparation to evaluation.", techs: ["Python", "ML", "Scikit-learn", "Notebooks"] },
  { Icon: Terminal,      title: "Python Development",      desc: "Clean, idiomatic Python across CLI tools, web apps, automation scripts and data pipelines.", techs: ["Python", "CLI", "Libraries", "OOP"] },
  { Icon: Globe,         title: "MCP Integrations",        desc: "Model Context Protocol server and client implementations for extending AI agents with external tool capabilities.", techs: ["MCP", "OpenAI SDK", "Async", "APIs"] },
  { Icon: MonitorSmartphone, title: "Responsive UI",       desc: "Accessible, mobile-first interfaces built with modern CSS — performant across every device and screen size.", techs: ["HTML", "CSS", "JavaScript", "WCAG AA"] },
] as const;

/* ─────────────────────────────────────────────
   TECH STACK DATA
───────────────────────────────────────────── */
const techGroups = [
  {
    Icon: Globe,
    name: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "WCAG AA"],
  },
  {
    Icon: Terminal,
    name: "Backend",
    items: ["Python", "FastAPI", "REST APIs", "Async", "JWT"],
  },
  {
    Icon: Bot,
    name: "AI & Agents",
    items: ["OpenAI SDK", "GPT-4o", "MCP", "Agentic AI", "Prompting"],
  },
  {
    Icon: Database,
    name: "Data",
    items: ["Pandas", "Excel", "CSV", "Streamlit", "ML"],
  },
  {
    Icon: ShieldCheck,
    name: "Security",
    items: ["AES-256", "PBKDF2", "JWT", "Cryptography", "Auth"],
  },
] as const;

/* ─────────────────────────────────────────────
   DEV PROCESS DATA
───────────────────────────────────────────── */
const processSteps = [
  { num: "01", Icon: Microscope, label: "Discover",  title: "Understand",  body: "Map requirements, constraints and technical architecture before writing any code." },
  { num: "02", Icon: Layers,     label: "Design",    title: "Design",      body: "System architecture, data models and UI wireframes — decided before build begins." },
  { num: "03", Icon: Code2,      label: "Develop",   title: "Develop",     body: "Clean, documented code with tests. Each feature built to production standard from day one." },
  { num: "04", Icon: Zap,        label: "Optimise",  title: "Optimise",    body: "Performance audits, security review and accessibility checks baked into every release." },
  { num: "05", Icon: Package,    label: "Deploy",    title: "Deploy",      body: "CI-ready builds, documented deployment and environment configuration handover." },
  { num: "06", Icon: RefreshCw,  label: "Maintain",  title: "Maintain",    body: "Ongoing support, dependency updates and clear documentation so teams can continue independently." },
] as const;

/* ─────────────────────────────────────────────
   OPEN SOURCE REPOS DATA
───────────────────────────────────────────── */
const repos = [
  { Icon: Lock,        cat: "Security",    name: "Secure Hub",              desc: "File encryption platform with FastAPI backend, AES-256 and admin dashboard.", lang: "Python",     langColor: "#3572A5" },
  { Icon: Bot,         cat: "AI",          name: "OpenAI Agent SDK",        desc: "Production patterns for OpenAI agent implementations with tool use and handoffs.", lang: "Python",  langColor: "#3572A5" },
  { Icon: Fingerprint, cat: "MCP",         name: "Model Context Protocol",  desc: "MCP server and client integrations for AI agents to use external tools and data.", lang: "Python",  langColor: "#3572A5" },
  { Icon: RefreshCw,   cat: "Data",        name: "Data Sweeper",            desc: "Streamlit app for cleaning and transforming CSV and Excel files with Pandas.", lang: "Python",    langColor: "#3572A5" },
  { Icon: Key,         cat: "Security",    name: "Password Pedia",          desc: "Password generator and strength analyser with scoring and recommendations.", lang: "Python",     langColor: "#3572A5" },
  { Icon: FolderOpen,  cat: "Platform",    name: "File Fusion",             desc: "Unified file management platform with categorisation and bulk operations.", lang: "Python",     langColor: "#3572A5" },
  { Icon: Settings,    cat: "Utility",     name: "Convertify",              desc: "Multi-category unit converter web app with clean Streamlit interface.", lang: "Python",         langColor: "#3572A5" },
  { Icon: Sparkles,    cat: "AI",          name: "Learn Agentic AI",        desc: "Hands-on curriculum for building production AI agent systems from scratch.", lang: "Python",     langColor: "#3572A5" },
  { Icon: FileCode2,   cat: "ML",          name: "Machine Learning Course", desc: "Practical ML implementations covering supervised learning, data pipelines and evaluation.", lang: "Python", langColor: "#3572A5" },
] as const;

/* ─────────────────────────────────────────────
   ENGINEERING PRINCIPLES DATA
───────────────────────────────────────────── */
function PrincipleVisualPerf() {
  const bars = [{ l: "Load time", p: 94 }, { l: "Lighthouse", p: 98 }, { l: "Core Web", p: 91 }, { l: "Uptime", p: 100 }];
  return (
    <div className="wd-principle-visual">
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--sp-2)" }}>
        {bars.map(({ l, p }) => (
          <div key={l} style={{ display: "flex", alignItems: "center", gap: "var(--sp-2)" }}>
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--muted)", minWidth: 72 }}>{l}</span>
            <div style={{ flex: 1, height: 8, borderRadius: 999, background: "var(--line)", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${p}%`, borderRadius: 999, background: "var(--blue)" }} />
            </div>
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--navy)", minWidth: "3ch" }}>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrincipleVisualSecurity() {
  const items = [{ v: "AES", l: "Encryption" }, { v: "JWT", l: "Auth" }, { v: "AA", l: "WCAG" }, { v: "✓", l: "Audited" }];
  return (
    <div className="wd-principle-visual">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-2)", width: "100%" }}>
        {items.map(({ v, l }) => (
          <div key={l} style={{ background: "var(--soft)", border: "1px solid var(--line)", borderRadius: "var(--radius-sm)", padding: "var(--sp-2)", textAlign: "center" }}>
            <div style={{ fontSize: "var(--text-xl)", fontWeight: 900, color: "var(--navy)", letterSpacing: "-0.03em" }}>{v}</div>
            <div style={{ fontSize: 11, color: "var(--subtle)", marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrincipleVisualCode() {
  const items = ["Documented functions", "Typed interfaces", "Clear separation of concerns", "Zero magic numbers"];
  return (
    <div className="wd-principle-visual">
      <ul className="check-list" style={{ width: "100%" }}>
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

const principles = [
  { Icon: Zap,        title: "Performance First",        body: "Every project targets 90+ Lighthouse scores. Performance is not an afterthought — it is part of the architecture from day one.", Visual: PrincipleVisualPerf, reverse: false },
  { Icon: ShieldCheck, title: "Security by Design",       body: "Encryption, authentication and input validation built into the data model — not bolted on after the fact. Demonstrated in Secure Hub and Password Pedia.", Visual: PrincipleVisualSecurity, reverse: true },
  { Icon: Code2,       title: "Maintainable, Clean Code", body: "Typed, documented and modular. Every codebase is handed over with the expectation that a team member who was not involved can understand and extend it.", Visual: PrincipleVisualCode, reverse: false },
] as const;

/* ─────────────────────────────────────────────
   WHY FINWEB DATA
───────────────────────────────────────────── */
const whyCards = [
  { Icon: Box,         title: "Modern tech stack",          body: "Python, FastAPI, OpenAI SDK and MCP — not legacy frameworks. Every project uses the tools that will still be relevant in five years." },
  { Icon: Microscope,  title: "Real engineering experience", body: "Every project in the portfolio reflects production-grade work — tested, documented, and built to a standard that holds up to scrutiny." },
  { Icon: TrendingUp,  title: "Business-focused delivery",   body: "Engineering decisions are made in the context of business outcomes — not for technical elegance alone. Fast, maintainable, purposeful." },
  { Icon: Sparkles,    title: "AI-ready solutions",          body: "Agent SDK, MCP integrations and OpenAI patterns already in production. Building AI into your product is a core capability, not an experiment." },
  { Icon: ShieldCheck, title: "Security first",              body: "AES-256, JWT, PBKDF2 and secure-by-default architecture in every platform that handles sensitive data." },
  { Icon: RefreshCw,   title: "Maintainable codebase",       body: "Clean architecture, typed interfaces and full documentation mean you own the system after handover — no lock-in, no mystery." },
] as const;


/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function WebDevelopment() {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section className="wd-hero">
        <div className="container wd-hero-grid">
          <div className="wd-hero-copy">
            <span className="eyebrow">Digital architecture & web development</span>
            <h1>Make your expertise<br />easy to choose.</h1>
            <p>
              Full-stack engineering, AI applications, automation systems and
              secure platforms — built on real open-source projects, not
              template marketing.
            </p>
            <div className="actions">
              <Link className="btn btn--primary" href="/contact?interest=web">
                Start a project <ArrowRight size={17} />
              </Link>
              <Link className="btn btn--secondary" href="/portfolio">
                See the evidence
              </Link>
            </div>
            <div className="wd-trust">
              {["AI Applications", "Full Stack Systems", "Automation", "Secure Platforms", "Performance Optimised"].map((t) => (
                <span key={t} className="wd-trust-item">{t}</span>
              ))}
            </div>
          </div>
          <WdUIPreview />
        </div>
      </section>

      {/* ══ 2. FEATURED ENGINEERING PROJECTS ════════════════ */}
      <section className="wd-projects-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Featured projects</span>
              <h2>Engineering you can inspect.</h2>
            </div>
            <p>
              Three real engineering projects — each grouped by capability, each
              showing the problem, solution and architecture.
            </p>
          </div>

          <div className="wd-proj-grid">
            {projects.map(({ id, tag, category, title, overview, problem, solution, features, stack, reverse, Visual }) => (
              <article
                key={id}
                className={`wd-proj-card${reverse ? " wd-proj-card--reverse" : ""}`}
              >
                <Visual />
                <div className="wd-proj-body">
                  <div className="wd-proj-meta">
                    <span className="pill">{tag}</span>
                    <span className="pill">{category}</span>
                  </div>

                  <h3 className="wd-proj-title">{title}</h3>

                  <div>
                    <div className="wd-proj-section-label">Overview</div>
                    <p>{overview}</p>
                  </div>

                  <div>
                    <div className="wd-proj-section-label">Problem</div>
                    <p>{problem}</p>
                  </div>

                  <div>
                    <div className="wd-proj-section-label">Solution</div>
                    <p>{solution}</p>
                  </div>

                  <div>
                    <div className="wd-proj-section-label">Key features</div>
                    <ul className="wd-proj-features">
                      {features.map((f) => (
                        <li key={f} className="wd-proj-feature">{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="wd-proj-stack">
                    {stack.map((s) => (
                      <span key={s} className="wd-stack-tag">{s}</span>
                    ))}
                  </div>

                  <div className="wd-proj-links">
                    <Link className="btn btn--primary btn--sm" href="/contact?interest=web">
                      Discuss this work <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. ENGINEERING EXPERTISE ═════════════════════════ */}
      <section className="wd-expertise-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Engineering expertise</span>
              <h2>Capabilities, not categories.</h2>
            </div>
            <p>
              Each capability is demonstrated by a public repository — not
              listed from a service brochure.
            </p>
          </div>

          <div className="wd-expertise-grid">
            {expertise.map(({ Icon, title, desc, techs }) => (
              <div className="wd-exp-card" key={title}>
                <div className="wd-exp-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="wd-exp-techs">
                  {techs.map((t) => (
                    <span key={t} className="wd-exp-tech">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. TECHNOLOGY STACK ══════════════════════════════ */}
      <section className="wd-stack-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Technology stack</span>
              <h2>Tools chosen for longevity.</h2>
            </div>
            <p>
              No legacy frameworks chosen for familiarity. Every tool is here
              because it earns its place in a production codebase.
            </p>
          </div>

          <div className="wd-stack-groups">
            {techGroups.map(({ Icon, name, items }) => (
              <div className="wd-stack-group" key={name}>
                <div className="wd-stack-group-head">
                  <div className="wd-stack-group-icon"><Icon size={16} /></div>
                  <span className="wd-stack-group-name">{name}</span>
                </div>
                <ul className="wd-stack-items">
                  {items.map((item) => (
                    <li key={item} className="wd-stack-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. DEVELOPMENT PROCESS ═══════════════════════════ */}
      <section className="wd-process-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">How we build</span>
              <h2>Six steps. No surprises.</h2>
            </div>
            <p>
              A repeatable process that produces maintainable, documented
              software — every time.
            </p>
          </div>

          <div className="wd-process-grid">
            {processSteps.map(({ num, Icon, label, title, body }) => (
              <div className="wd-process-step" key={num}>
                <div className="wd-process-num" aria-hidden="true">{num}</div>
                <div style={{ display: "grid", placeItems: "center", width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", marginTop: "var(--sp-1)" }}>
                  <Icon size={18} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. OPEN SOURCE REPOS ═════════════════════════════ */}
      <section className="wd-repos-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Open source work</span>
              <h2>Code you can read before you commit.</h2>
            </div>
            <p>
              Every repository is public. Browse the code, review the
              architecture, and judge the quality for yourself.
            </p>
          </div>

          <div className="wd-repos-grid">
            {repos.map(({ Icon, cat, name, desc, lang, langColor }) => (
              <div
                key={name}
                className="wd-repo-card"
              >
                <div className="wd-repo-header">
                  <div className="wd-repo-icon"><Icon size={18} /></div>
                  <span className="wd-repo-cat">{cat}</span>
                </div>
                <div className="wd-repo-name">{name}</div>
                <p className="wd-repo-desc">{desc}</p>
                <div className="wd-repo-footer">
                  <span className="wd-repo-lang">
                    <span className="wd-repo-lang-dot" style={{ background: langColor }} />
                    {lang}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. ENGINEERING PRINCIPLES ════════════════════════ */}
      <section className="wd-principles-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Engineering principles</span>
              <h2>How we write software.</h2>
            </div>
            <p>
              Three non-negotiables that apply to every project, regardless of
              size or timeline.
            </p>
          </div>

          <div className="wd-principles-list">
            {principles.map(({ Icon, title, body, Visual, reverse }) => (
              <div
                key={title}
                className={`wd-principle-block${reverse ? " wd-principle-block--reverse" : ""}`}
              >
                <div className="wd-principle-copy">
                  <div className="wd-principle-icon"><Icon size={26} /></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                <Visual />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. WHY FINWEB ════════════════════════════════════ */}
      <section className="wd-why-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Why FINWEB</span>
              <h2>Engineering that means business.</h2>
            </div>
            <p>
              Six reasons clients choose FINWEB for technical work — each one
              backed by something you can verify.
            </p>
          </div>

          <div className="wd-why-grid">
            {whyCards.map(({ Icon, title, body }) => (
              <div className="wd-why-card" key={title}>
                <div className="wd-why-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. CTA ═══════════════════════════════════════════ */}
      <section className="wd-cta">
        <div className="wd-cta-inner">
          <span className="eyebrow">Ready to build</span>
          <h2>
            Turn your idea into<br />
            production software.
          </h2>
          <p>
            Whether it&rsquo;s an AI product, a secure platform or a business
            automation tool — one conversation is enough to know if we are the
            right team.
          </p>
          <div className="actions">
            <Link className="btn btn--primary" href="/contact?interest=web">
              Start a project <ArrowRight size={17} />
            </Link>
            <Link className="btn btn--ghost" href="/portfolio">
              See the evidence
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
