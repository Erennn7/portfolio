import {
  Navbar,
  StatusBadge,
  Section,
  TimelineItem,
  ProjectCard,
  StackPill,
  WritingItem,
} from "./components";

export default function Home() {
  const experiences = [
    {
      company: "Nexentia",
      role: "Co-Founder & Full Stack Developer",
      period: "2025 — Present",
      highlights: [
        "Built and shipped 5+ production-grade software systems for real clients",
        "Shipped solutions across healthcare, retail, hospitality, and logistics sectors",
        "Designed scalable backend architectures and managed production deployments",
        "Managed client communications, translating business requirements into code",
        "Made critical architectural, technology choice, and business trade-offs",
      ],
    },
    {
      company: "ANK Upsurge Digital",
      role: "MERN + GenAI Intern",
      period: "2025",
      highlights: [
        "Built and implemented AI-powered task management features into primary SaaS product",
        "Integrated Vercel AI SDK to stream real-time generative responses",
        "Developed and optimized complex Node.js/Express backend APIs",
        "Improved system reliability through structured integration and unit testing",
      ],
    },
  ];

  const wins = [
    { text: "🏆 Won 4 national-level hackathons against hundreds of competing teams" },
    { text: "⚡ Contributed 20+ merged pull requests to stdlib-js (JavaScript standard library)" },
    { text: "🚀 Shipped multiple production systems actively used by real businesses" },
    { text: "🤝 Co-founded a software solutions company (Nexentia) while pursuing engineering" },
  ];

  const projects = [
    {
      name: "Trinetra",
      description: "An AI-powered public safety platform engineered for large-scale gatherings. Uses computer vision and smart communications to coordinate security and emergency services in real-time.",
      features: [
        "Multi-agent architecture for automated coordination",
        "Real-time crowd density & anomaly monitoring",
        "AI CCTV threat detection models",
        "Twilio-powered automated emergency alerts",
        "Voice-assisted incident reporting portal",
        "Intelligent AI-based lost & found registry",
      ],
      techStack: [
        "Next.js",
        "Node.js",
        "Flask",
        "Firebase",
        "Gemini",
        "Twilio",
        "VideoSDK",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/samarthkolarkar/trinetra" },
      ],
    },
    {
      name: "CureConnect",
      description: "A comprehensive telemedicine and healthcare accessibility platform designed to bridge the gap between patients and specialized medical attention, even in remote locations.",
      features: [
        "WebRTC-powered real-time video consultations",
        "Instant messaging and doctor-patient chat rooms",
        "AI-assisted diagnosis and summary reports",
        "IVRS telephony integration for offline access",
        "Google Maps real-time location mapping",
        "Multilingual interface for regional reach",
      ],
      techStack: [
        "Next.js",
        "Node.js",
        "WebSockets",
        "Google Maps",
        "Exotel",
        "AI Models",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/samarthkolarkar/cureconnect" },
      ],
    },
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
    { label: "GitHub", href: "https://github.com/samarthkolarkar", id: "social-github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/samarthkolarkar", id: "social-linkedin" },
    { label: "Twitter / X", href: "https://x.com/samarthkolarkar", id: "social-twitter" },
    { label: "Email", href: "mailto:samarthkolarkar@gmail.com", id: "social-email" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex flex-col gap-y-20">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col animate-fade-in delay-75">
          <h1 className="font-serif italic text-4xl md:text-5xl font-normal tracking-tight text-foreground">
            Samarth, 20
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

        {/* Work / Experience Section */}
        <Section id="work" title="Work" delayClass="delay-225">
          <h3 className="text-xs uppercase tracking-wider text-foreground/70 mb-4 font-mono font-medium">
            Things I’ve Built Professionally
          </h3>
          <div className="flex flex-col gap-y-10">
            {experiences.map((exp, idx) => (
              <TimelineItem
                key={idx}
                company={exp.company}
                role={exp.role}
                period={exp.period}
                highlights={exp.highlights}
              />
            ))}
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

        {/* Projects Section */}
        <Section id="projects" title="Projects" delayClass="delay-375">
          <h3 className="text-xs uppercase tracking-wider text-foreground/70 mb-4 font-mono font-medium">
            Things I’ve Built
          </h3>
          <div className="flex flex-col gap-y-8">
            {projects.map((proj, idx) => (
              <ProjectCard
                key={idx}
                name={proj.name}
                description={proj.description}
                features={proj.features}
                techStack={proj.techStack}
                links={proj.links}
              />
            ))}
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
                className="text-secondary hover:text-foreground transition-colors link-underline font-medium"
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
