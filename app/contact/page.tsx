import { Navbar, Section } from "../components";

export const metadata = {
  title: "Contact — Samarth Kolarkar",
  description: "Get in touch with Samarth Kolarkar. Open to startups, collaborations, and interesting conversations.",
};

export default function ContactPage() {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Erennn7/",
      id: "contact-github",
      username: "Erennn7",
      description: "Source code, hackathon repos, and open-source contributions.",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/samarth-kolarkar/",
      id: "contact-linkedin",
      username: "samarth-kolarkar",
      description: "Professional background, updates, and networking.",
    },
    {
      label: "Twitter / X",
      href: "https://x.com/SamarthKolarkar",
      id: "contact-twitter",
      username: "@SamarthKolarkar",
      description: "Thoughts on tech, builder updates, and random logs.",
    },
    {
      label: "Email",
      href: "mailto:samarthkolarkar7777@gmail.com",
      id: "contact-email",
      username: "samarthkolarkar7777@gmail.com",
      description: "Direct inquiries for consulting, projects, or just chatting.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col min-h-[50vh] gap-y-16">
        {/* Page Header */}
        <div className="mb-8 animate-fade-in delay-75">
          <h1 className="font-serif italic text-3xl md:text-4xl text-foreground font-normal tracking-tight mb-3">
            Contact
          </h1>
          <p className="text-secondary text-sm md:text-base max-w-[580px] leading-relaxed">
            Let&apos;s build something interesting together. I&apos;m always down to chat about startups, systems, AI agents, or neat code.
          </p>
        </div>

        <Section id="connect" title="Connect" delayClass="delay-150">
          <div className="flex flex-col gap-y-6 w-full">
            {socialLinks.map((social) => (
              <div key={social.label} className="group border-b border-border-custom/30 pb-6 last:border-b-0">
                <a
                  href={social.href}
                  id={social.id}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-y-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/50 rounded"
                >
                  <div className="flex flex-col gap-y-1">
                    <span className="text-foreground text-base font-medium group-hover:text-white transition-colors flex items-center gap-1.5 w-fit link-underline">
                      {social.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </span>
                    <span className="text-xs text-secondary/90 leading-relaxed max-w-[450px]">
                      {social.description}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-secondary group-hover:text-foreground transition-colors sm:text-right">
                    {social.username}
                  </span>
                </a>
              </div>
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
