import React from "react";
import Link from "next/link";
import Image from "next/image";

// Minimal Navbar Component
export function Navbar() {
  const navItems = [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/work" },
    { label: "Projects", href: "/projects" },
    { label: "Writing", href: "/#writing" },
    { label: "Contact", href: "/#contact" },
    { label: "Resume", href: "/resume.pdf", external: true },
  ];

  return (
    <nav className="w-full flex justify-between items-center py-6 border-b border-border-custom mb-16 animate-fade-in">
      <Link href="/" className="font-serif italic text-xl tracking-tight text-foreground hover:opacity-80 transition-opacity">
        sk.
      </Link>
      <div className="flex gap-x-5 md:gap-x-6 text-sm">
        {navItems.map((item) => {
          const LinkComponent = item.external ? "a" : Link;
          return (
            <LinkComponent
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-secondary hover:text-foreground transition-colors link-underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              id={`nav-link-${item.label.toLowerCase()}`}
            >
              {item.label}
            </LinkComponent>
          );
        })}
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

// ProjectCard Component matching Reference Design Layout
interface ProjectCardProps {
  name: string;
  description: string;
  features?: string[];
  techStack: string[];
  imagePath?: string;
  links?: { label: string; href: string; type?: "live" | "repo" }[];
}

export function ProjectCard({ name, description, features, techStack, imagePath, links }: ProjectCardProps) {
  return (
    <div className="flex flex-col group animate-fade-in">
      {/* Mockup visual block */}
      {imagePath && (
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg border border-border-custom bg-border-custom/20 mb-4">
          <Image
            src={imagePath}
            alt={`${name} Dashboard Mockup`}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority={false}
          />
        </div>
      )}
      
      {/* Metadata & Title */}
      <h3 className="font-serif italic text-2xl text-foreground font-normal tracking-tight hover:text-white transition-colors">
        {name}
      </h3>
      
      {/* Tech tag list separated by slashes */}
      <p className="text-secondary/60 text-xs font-mono mt-1 mb-2">
        {techStack.join(" / ")}
      </p>
      
      {/* Description */}
      <p className="text-secondary/85 text-sm mb-3 leading-relaxed">
        {description}
      </p>

      {/* Extra key features if rendering a detailed view */}
      {features && features.length > 0 && (
        <ul className="mb-4 flex flex-col gap-y-1 pl-4">
          {features.map((feat, idx) => (
            <li key={idx} className="custom-list-dot text-xs text-secondary/70">
              {feat}
            </li>
          ))}
        </ul>
      )}
      
      {/* Action links with custom SVGs */}
      {links && links.length > 0 && (
        <div className="flex gap-x-4 text-xs font-mono mt-auto pt-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center text-secondary hover:text-foreground transition-colors link-underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.type === "live" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1.5"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1.5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              )}
              {link.label}
            </a>
          ))}
        </div>
      )}
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
