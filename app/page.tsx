import Image from "next/image";
import {
  Navbar,
  StatusBadge,
  Section,
} from "./components";

export default function Home() {
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
          <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-6 sm:gap-8">
            <div className="flex flex-col flex-1">
              <h1 className="font-serif italic text-4xl md:text-5xl font-normal tracking-tight text-foreground">
                Samarth, 21
              </h1>
              <p className="text-secondary text-lg md:text-xl font-normal mt-3 max-w-[520px] leading-relaxed">
                Engineer who loves building systems that solve messy, real-world problems.
              </p>
            </div>
            
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0 self-start rounded-full border border-border-custom bg-border-custom/20 overflow-hidden group">
              <Image
                src="/profile.jpeg"
                alt="Samarth Kolarkar"
                fill
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                className="object-cover transition-all duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>
          
          <div className="text-secondary text-sm md:text-[15px] space-y-4 max-w-[580px] leading-relaxed mt-6">
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

        {/* Contact Section */}
        <Section id="contact" title="Contact" delayClass="delay-225">
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

      <footer className="w-full flex flex-col sm:flex-row gap-y-2 justify-between items-center mt-24 pt-8 border-t border-border-custom/40 text-xs text-secondary font-mono animate-fade-in delay-300">
        <span>© {new Date().getFullYear()} Samarth Kolarkar</span>
        <span>Solapur, India</span>
      </footer>
    </>
  );
}
