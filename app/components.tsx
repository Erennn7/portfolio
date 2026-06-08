import React from "react";

// Minimal Navbar Component
export function Navbar() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/resume.pdf", external: true },
  ];

  return (
    <nav className="w-full flex justify-between items-center py-6 border-b border-border-custom mb-16 animate-fade-in">
      <a href="#" className="font-serif italic text-xl tracking-tight text-foreground hover:opacity-80 transition-opacity">
        sk.
      </a>
      <div className="flex gap-x-5 md:gap-x-6 text-sm">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="text-secondary hover:text-foreground transition-colors link-underline font-medium"
            id={`nav-link-${item.label.toLowerCase()}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

// StatusBadge Component
export function StatusBadge() {
  return (
    <div className="flex flex-col gap-y-2 mt-6 animate-fade-in delay-150">
      <div className="inline-flex items-center gap-2 text-sm text-foreground bg-border-custom/40 border border-border-custom px-3 py-1.5 rounded-full w-fit">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-medium">Building Nexentia</span>
      </div>
      <p className="text-xs text-secondary leading-relaxed">
        Based in Solapur, India. Open to startups, collaborations, and interesting conversations.
      </p>
    </div>
  );
}

// Editorial Section Wrapper
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  delayClass?: string;
}

export function Section({ id, title, children, delayClass = "" }: SectionProps) {
  return (
    <section id={id} className={`py-12 border-t border-border-custom/55 first-of-type:border-t-0 animate-fade-in ${delayClass}`}>
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-6 md:gap-x-8">
        <h2 className="font-serif italic text-2xl md:text-3xl text-foreground font-normal tracking-tight md:sticky md:top-8 h-fit">
          {title}
        </h2>
        <div className="flex flex-col gap-y-8 text-secondary text-sm md:text-[15px] leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

// TimelineItem for Experience
interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export function TimelineItem({ company, role, period, highlights }: TimelineItemProps) {
  return (
    <div className="flex flex-col gap-y-2 group">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
        <h3 className="text-foreground font-medium text-base group-hover:text-white transition-colors">
          {company}
        </h3>
        <span className="text-xs text-secondary/70 font-mono">{period}</span>
      </div>
      <p className="text-xs text-secondary/90 italic -mt-1">{role}</p>
      <ul className="mt-2 flex flex-col gap-y-1.5">
        {highlights.map((highlight, index) => (
          <li key={index} className="custom-list-dot text-secondary/85 text-xs md:text-sm pl-4">
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ProjectCard Component
interface ProjectCardProps {
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  links?: { label: string; href: string }[];
}

export function ProjectCard({ name, description, features, techStack, links }: ProjectCardProps) {
  return (
    <div className="border border-border-custom bg-border-custom/10 p-5 rounded-lg hover:border-border-custom/90 hover:bg-border-custom/20 transition-all duration-300 group">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-serif italic text-xl md:text-2xl text-foreground font-normal group-hover:text-white transition-colors">
          {name}
        </h3>
        {links && links.length > 0 && (
          <div className="flex gap-x-3 text-xs font-mono">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-secondary hover:text-foreground transition-colors link-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <p className="text-secondary/90 text-sm mb-4 leading-relaxed">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-xs uppercase tracking-wider text-foreground/70 mb-2 font-mono font-medium">Key Highlights</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {features.map((feat, idx) => (
            <li key={idx} className="custom-list-dot text-xs text-secondary/80 pl-4">
              {feat}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-2">
        {techStack.map((tech) => (
          <StackPill key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}

// StackPill Component
export function StackPill({ label }: { label: string }) {
  return (
    <span className="bg-border-custom/40 border border-border-custom px-2.5 py-0.5 rounded text-[11px] font-mono text-secondary/90 hover:text-foreground hover:border-secondary/40 transition-colors">
      {label}
    </span>
  );
}

// WritingItem Component
interface WritingItemProps {
  title: string;
  excerpt: string;
  date?: string;
  slug?: string;
}

export function WritingItem({ title, excerpt, date = "Draft", slug = "#" }: WritingItemProps) {
  return (
    <a
      href={slug}
      className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 group border-b border-border-custom/30 pb-4 last:border-b-0 hover:opacity-90 transition-opacity"
    >
      <div className="flex flex-col gap-y-1 max-w-[500px]">
        <h3 className="text-foreground text-sm md:text-base font-medium group-hover:text-white transition-colors link-underline w-fit">
          {title}
        </h3>
        <p className="text-xs text-secondary/70 line-clamp-1">{excerpt}</p>
      </div>
      <span className="text-xs text-secondary/60 font-mono whitespace-nowrap md:text-right">{date}</span>
    </a>
  );
}
