import Link from "next/link";
import {
  Navbar,
  StatusBadge,
  Section,
  StackPill,
  WritingItem,
} from "./components";

export default function Home() {
  const wins = [
    { text: "🏆 Won 4 national-level hackathons against hundreds of competing teams" },
    { text: "⚡ Contributed 20+ merged pull requests to stdlib-js (JavaScript standard library)" },
    { text: "🚀 Shipped multiple production systems actively used by real businesses" },
    { text: "🤝 Co-founded a software solutions company (Nexentia) while pursuing engineering" },
  ];

  const techStack = [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Firebase",
    "MongoDB",
    "WebSockets",
    "AI Agents",
    "RAG",
    "Linux",
    "Git",
    "GitHub",
  ];

  const philosophies = [
    { text: "Build before overthinking.", detail: "The fastest way to find out if an idea works is to write code and put it in front of users." },
    { text: "The best way to learn is to ship.", detail: "Tutorials only take you so far. Real learning begins when your code meets the real world." },
    { text: "Hackathons compress years of learning into weekends.", detail: "Nothing forces focus and execution like a 36-hour deadline and a messy problem." },
    { text: "AI is a tool, not a replacement for engineering fundamentals.", detail: "Code generators are fast, but understanding systems, database design, and architecture is what keeps software alive." },
    { text: "Open source makes everyone better.", detail: "Contributing to projects like stdlib-js teaches you how to write code that strangers can trust." },
    { text: "Curiosity compounds.", detail: "Following the rabbit hole of how things work underneath is never a waste of time." },
  ];

  const writing = [
    {
      title: "Building AI Systems That People Actually Use",
      excerpt: "Moving past basic chatbot wrappers to build reliable, multi-agent workflows that solve real business friction.",
      date: "Draft",
      slug: "#",
    },
    {
      title: "What 4 Hackathon Wins Taught Me",
      excerpt: "Tactical advice on rapid prototyping, team alignment, and building high-impact MVPs under intense time pressure.",
      date: "Draft",
      slug: "#",
    },
    {
      title: "Lessons From Shipping Software For Real Clients",
      excerpt: "The engineering, client management, and business trade-offs required when building software at Nexentia.",
      date: "Draft",
      slug: "#",
    },
    {
      title: "Why Every Developer Should Contribute To Open Source",
      excerpt: "How reading and patching libraries like stdlib-js can level up your technical rigor and system comprehension.",
      date: "Draft",
      slug: "#",
    },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Erennn7/", id: "social-github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/samarth-kolarkar/", id: "social-linkedin" },
    { label: "Twitter / X", href: "https://x.com/SamarthKolarkar", id: "social-twitter" },
    { label: "Email", href: "mailto:samarthkolarkar7777@gmail.com", id: "social-email" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex flex-col gap-y-20">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col animate-fade-in delay-75">
          <h1 className="font-serif italic text-4xl md:text-5xl font-normal tracking-tight text-foreground">
            Samarth, 21
          </h1>
          <p className="text-secondary/90 text-lg md:text-xl font-normal mt-3 max-w-[560px] leading-relaxed">
            Engineer who loves building systems that solve messy, real-world problems.
          </p>
          
          <div className="text-secondary/80 text-sm md:text-[15px] space-y-4 max-w-[580px] leading-relaxed mt-6">
            <p>
              I’m co-founding{" "}
              <a href="https://github.com/nexentia-in" className="text-foreground hover:underline underline-offset-4 decoration-1 font-medium" target="_blank" rel="noopener noreferrer">
                Nexentia
              </a>{" "}
              while studying Information Technology at Walchand Institute of Technology. I ship software across AI, healthcare, logistics, retail, and developer tools.
            </p>
            <p>
              Most of my time goes into designing AI agent workflows, writing open-source patches, and building production products for client companies.
            </p>
          </div>

          <StatusBadge />
        </section>

        {/* About Section */}
        <Section id="about" title="About" delayClass="delay-150">
          <p>
            I got into programming because I loved figuring out how things worked. Writing code felt like the closest thing to magic—you type some commands, and a system starts operating on its own.
          </p>
          <p>
            Over time, that curiosity evolved into building products. I started diving into hackathons, collaborating on open-source libraries, and eventually building custom software systems to help real businesses solve their logistical and operational issues.
          </p>
          <p>
            I enjoy working at the intersection of engineering, AI systems, and product thinking. The best projects are the ones where technology moves out of the way and directly improves someone&apos;s day-to-day life.
          </p>
        </Section>

        {/* Work / Experience Section preview */}
        <Section id="work" title="Work" delayClass="delay-225">
          <h3 className="text-xs uppercase tracking-wider text-foreground/70 mb-4 font-mono font-medium">
            Things I’ve Built Professionally
          </h3>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-1">
              <div className="flex justify-between items-baseline">
                <span className="text-foreground text-sm font-semibold">Co-Founder & Full Stack Developer</span>
                <span className="text-xs text-secondary/60 font-mono">2025 — Present</span>
              </div>
              <span className="text-xs text-secondary/80">Nexentia</span>
              <p className="text-xs text-secondary/75 mt-1 leading-relaxed">
                Co-founded a software solutions agency to build production systems across healthcare, retail, hospitality, and logistics.
              </p>
            </div>
            
            <div className="flex flex-col gap-y-1">
              <div className="flex justify-between items-baseline">
                <span className="text-foreground text-sm font-semibold">MERN + GenAI Intern</span>
                <span className="text-xs text-secondary/60 font-mono">2025</span>
              </div>
              <span className="text-xs text-secondary/80">ANK Upsurge Digital</span>
              <p className="text-xs text-secondary/75 mt-1 leading-relaxed">
                Built AI task managers and streamed real-time summaries using Node.js and the Vercel AI SDK.
              </p>
            </div>
            
            <Link
              href="/work"
              className="text-xs text-foreground font-mono font-medium inline-flex items-center gap-1.5 hover:underline underline-offset-4 w-fit pt-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/50 rounded"
              id="view-all-work-link"
            >
              View detailed timeline and architectures →
            </Link>
          </div>
        </Section>

        {/* Achievements Section */}
        <Section id="wins" title="A Few Wins" delayClass="delay-300">
          <div className="flex flex-col gap-y-4">
            {wins.map((win, idx) => (
              <div key={idx} className="flex gap-x-3 items-start">
                <span className="text-secondary/90 text-sm md:text-[15px]">{win.text}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section preview */}
        <Section id="projects" title="Projects" delayClass="delay-375">
          <h3 className="text-xs uppercase tracking-wider text-foreground/70 mb-4 font-mono font-medium">
            Things I’ve Built
          </h3>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-1">
              <h4 className="text-foreground text-sm font-semibold">Trinetra</h4>
              <p className="text-xs text-secondary/85 leading-relaxed">
                AI-powered public safety dashboard built for large gatherings. Features computer vision threat detection and multi-agent coordination.
              </p>
            </div>
            
            <div className="flex flex-col gap-y-1">
              <h4 className="text-foreground text-sm font-semibold">CureConnect</h4>
              <p className="text-xs text-secondary/85 leading-relaxed">
                Telemedicine platform utilizing WebRTC and IVR call systems to make healthcare accessible in offline and remote regions.
              </p>
            </div>
            
            <Link
              href="/projects"
              className="text-xs text-foreground font-mono font-medium inline-flex items-center gap-1.5 hover:underline underline-offset-4 w-fit pt-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/50 rounded"
              id="view-all-projects-link"
            >
              View all projects with visual mockups and source links →
            </Link>
          </div>
        </Section>

        {/* Tech Stack Section */}
        <Section id="stack" title="Stack" delayClass="delay-450">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <StackPill key={tech} label={tech} />
            ))}
          </div>
        </Section>

        {/* Philosophy Section */}
        <Section id="philosophy" title="Philosophy" delayClass="delay-525">
          <h3 className="text-xs uppercase tracking-wider text-foreground/70 mb-4 font-mono font-medium">
            Things I Believe
          </h3>
          <div className="flex flex-col gap-y-6">
            {philosophies.map((philo, idx) => (
              <div key={idx} className="flex flex-col gap-y-1">
                <h4 className="text-foreground text-sm font-medium">{philo.text}</h4>
                <p className="text-xs text-secondary/80">{philo.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Writing Section */}
        <Section id="writing" title="Notes" delayClass="delay-600">
          <div className="flex flex-col gap-y-4">
            {writing.map((note, idx) => (
              <WritingItem
                key={idx}
                title={note.title}
                excerpt={note.excerpt}
                date={note.date}
                slug={note.slug}
              />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact" delayClass="delay-600">
          <p className="text-base text-foreground mb-4">
            Let’s build something interesting.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                id={social.id}
                className="text-secondary hover:text-foreground transition-colors link-underline font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/50 rounded"
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              >
                {social.label}
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="w-full flex justify-between items-center mt-24 pt-8 border-t border-border-custom/40 text-xs text-secondary/50 font-mono animate-fade-in delay-600">
        <span>© {new Date().getFullYear()} Samarth Kolarkar</span>
        <span>Solapur, India</span>
      </footer>
    </>
  );
}
