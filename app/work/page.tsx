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
      company: "ANK Upsurge Digital",
      role: "MERN + GenAI Intern",
      period: "2025",
      description: "Joined a fast-growing digital products team as an engineering intern. Worked closely with senior engineers to implement AI features into the core team productivity SaaS application, focusing on real-time task generation and scheduling API pipelines.",
      projects: [
        {
          title: "GenAI Task Assistant",
          details: "Integrated the Vercel AI SDK to stream real-time task blueprints and project outlines from LLM models. Designed backend prompt schemas that minimized hallucinated tasks.",
        },
        {
          title: "REST APIs & Optimization",
          details: "Built new endpoints in Node.js/Express, refactoring database queries on MongoDB to optimize dashboard loading times. Wrote extensive integration tests to cover new features.",
        },
      ],
      learnings: "Working in an established codebase helped me understand code review cycles, version control systems, and collaborative development. It sharpened my understanding of server-sent events, streaming responses, and writing production-ready APIs.",
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
          <p className="text-secondary/80 text-sm md:text-base max-w-[580px] leading-relaxed">
            I build software systems that solve operational problems. Here is a timeline of where I have worked, what I have built, and the architectural trade-offs I made along the way.
          </p>
        </div>

        {/* Detailed Timeline list */}
        <div className="flex flex-col gap-y-16 animate-fade-in delay-150">
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
                <span className="text-xs text-secondary/70 font-mono">{exp.period}</span>
              </div>
              <p className="text-xs text-secondary/90 italic -mt-2">{exp.role}</p>

              {/* Narratives */}
              <p className="text-secondary/85 text-sm leading-relaxed mt-2">
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
                      <p className="text-xs text-secondary/80 leading-relaxed">{proj.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retrospective / learnings */}
              <div className="mt-4 border-l-2 border-border-custom pl-4 py-1 italic text-secondary/75 text-xs md:text-sm leading-relaxed">
                <span className="font-mono text-[10px] uppercase tracking-wider block text-foreground/70 not-italic mb-1 font-semibold">
                  Takeaway & Learning
                </span>
                {exp.learnings}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="w-full flex justify-between items-center mt-24 pt-8 border-t border-border-custom/40 text-xs text-secondary/50 font-mono animate-fade-in delay-300">
        <span>© {new Date().getFullYear()} Samarth Kolarkar</span>
        <span>Solapur, India</span>
      </footer>
    </>
  );
}
