import { Navbar } from "../components";

export default function WorkPage() {
  const experiences = [
    {
      company: "Nexentia",
      role: "Co-Founder & Full Stack Developer",
      period: "2025 — Present",
      description: "Co-founded a software solutions agency to build production-grade web systems for startups and regional businesses. As the lead full stack developer, I handle the architecture, backend design, API integration, and direct client interactions, balancing engineering constraints with business timelines.",
      projects: [
        {
          title: "Healthcare Delivery Platform",
          details: "Architected a telemedicine platform connecting patients to rural health specialists. Features video consultations (WebRTC) and automated offline booking systems through IVR call routing, bypassing weak internet connectivity.",
        },
        {
          title: "Retail & Inventory Ledger",
          details: "Designed and implemented a high-performance inventory synchronization platform supporting multi-tenant retail warehouses. Built complex PostgreSQL indexing patterns that optimized stock query speeds by 35%.",
        },
        {
          title: "Logistics Optimization Node",
          details: "Shipped an automated route scheduling system for third-party logistics dispatchers, incorporating location APIs and live traffic models.",
        },
      ],
      learnings: "Co-founding a company while pursuing my studies taught me that code isn't written in a vacuum. I learned to make trade-offs: when to choose a simple PostgreSQL schema over a complex distributed setup, how to communicate technical complexity in plain English to clients, and how to prototype at high speeds without accumulating crippling technical debt.",
    },
    {
      company: "Pragamana",
      role: "Full Stack Developer Intern",
      period: "April 2026 – June 2026",
      description: "Worked on DIGI MOULD, an industrial multi-tenant IoT manufacturing telemetry platform, owning microservices engineering, real-time telemetry streaming, and automated operational reporting.",
      projects: [
        {
          title: "DIGI MOULD Telemetry Platform",
          details: "Developed and shipped features for DIGI MOULD, a multi-tenant IoT manufacturing telemetry platform (4 Express microservices + Next.js frontend), and owned its end-to-end cloud redeployment.",
        },
        {
          title: "Real-time OEE & Pipeline Engine",
          details: "Built downtime/OEE and shift-aware reporting features on top of a real-time MongoDB Change Streams + Socket.io pipeline, along with RBAC-gated password reset and audit-logged specification locking.",
        },
      ],
      learnings: "Working with industrial IoT manufacturing telemetry deepened my practical expertise in distributed microservices communication, real-time database change streams with MongoDB and Socket.io, and zero-downtime cloud redeployment.",
    },
    {
      company: "ANK Upsurge Digital",
      role: "MERN Stack & GenAI Intern",
      period: "July 2025 – September 2025",
      description: "Contributed to building generative AI features and assistive productivity tools for users with ADHD, focusing on real-time task generation, streaming API pipelines, and system reliability.",
      projects: [
        {
          title: "LLM-Based Task Management System",
          details: "Built RESTful backend routes and integrated Vercel AI SDK to power an LLM-based task management system for ADHD users.",
        },
        {
          title: "Testing & Application Reliability",
          details: "Wrote unit tests and assisted in frontend-backend integration, contributing to application reliability and code quality.",
        },
      ],
      learnings: "Deepened practical skills in LLM application architecture with Vercel AI SDK, strict API contracts, and unit testing workflows that maintain code quality across full-stack features.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col min-h-[50vh]">
        {/* Page Header */}
        <div className="mb-16 animate-fade-in delay-75">
          <h1 className="font-serif italic text-3xl md:text-4xl text-foreground font-normal tracking-tight mb-3">
            Professional Experience
          </h1>
          <p className="text-secondary text-sm md:text-base max-w-[580px] leading-relaxed">
            I build software systems that solve operational problems. Here is a timeline of where I have worked, what I have built, and the architectural trade-offs I made along the way.
          </p>
        </div>

        {/* Achievements / A Few Wins */}
        <div className="mb-16 animate-fade-in delay-150 border-b border-border-custom pb-12">
          <h2 className="font-serif italic text-2xl text-foreground font-normal tracking-tight mb-4">
            A Few Wins
          </h2>
          <ul className="flex flex-col gap-y-3">
            <li className="flex gap-x-2 text-secondary text-sm leading-relaxed">
              <span>🏆</span>
              <span>Won 4 national-level hackathons against hundreds of competing teams</span>
            </li>
            <li className="flex gap-x-2 text-secondary text-sm leading-relaxed">
              <span>⚡</span>
              <span>Contributed 20+ merged pull requests to <a href="https://github.com/stdlib-js/stdlib" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline font-mono">stdlib-js</a> (JavaScript standard library)</span>
            </li>
            <li className="flex gap-x-2 text-secondary text-sm leading-relaxed">
              <span>🚀</span>
              <span>Shipped multiple production systems actively used by real businesses</span>
            </li>
            <li className="flex gap-x-2 text-secondary text-sm leading-relaxed">
              <span>🤝</span>
              <span>Co-founded a software solutions company (Nexentia) while pursuing engineering</span>
            </li>
          </ul>
        </div>

        {/* Detailed Timeline list */}
        <div className="flex flex-col gap-y-16 animate-fade-in delay-225">
          {experiences.map((exp) => (
            <section
              key={exp.company}
              className="border-t border-border-custom/60 pt-8 first-of-type:border-t-0 first-of-type:pt-0 flex flex-col gap-y-4"
            >
              {/* Header metadata */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h2 className="text-foreground text-xl font-medium">
                  {exp.company}
                </h2>
                <span className="text-xs text-secondary/90 font-mono">{exp.period}</span>
              </div>
              <p className="text-xs text-secondary italic -mt-2">{exp.role}</p>

              {/* Narratives */}
              <p className="text-secondary/95 text-sm leading-relaxed mt-2">
                {exp.description}
              </p>

              {/* Shipped subprojects */}
              <div className="mt-4">
                <h3 className="text-xs uppercase tracking-wider text-foreground/75 mb-4 font-mono font-medium">
                  Key Systems Shipped
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-1.5">
                  {exp.projects.map((proj) => (
                    <div
                      key={proj.title}
                      className="border border-border-custom bg-border-custom/5 p-4 rounded-md flex flex-col gap-y-1.5"
                    >
                      <h4 className="text-foreground text-sm font-semibold">{proj.title}</h4>
                      <p className="text-xs text-secondary/95 leading-relaxed">{proj.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retrospective / learnings */}
              <div className="mt-4 border-l-2 border-border-custom pl-4 py-1 italic text-secondary/90 text-xs md:text-sm leading-relaxed">
                <span className="font-mono text-[10px] uppercase tracking-wider block text-foreground/70 not-italic mb-1 font-semibold">
                  Takeaway & Learning
                </span>
                {exp.learnings}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="w-full flex flex-col sm:flex-row gap-y-2 justify-between items-center mt-24 pt-8 border-t border-border-custom/40 text-xs text-secondary font-mono animate-fade-in delay-300">
        <span>© {new Date().getFullYear()} Samarth Kolarkar</span>
        <span>Solapur, India</span>
      </footer>
    </>
  );
}
