import { Navbar, Section, WritingItem } from "../components";

export default function WritingPage() {
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

  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col min-h-[50vh] gap-y-16">
        {/* Page Header */}
        <div className="mb-8 animate-fade-in delay-75">
          <h1 className="font-serif italic text-3xl md:text-4xl text-foreground font-normal tracking-tight mb-3">
            Notes
          </h1>
          <p className="text-secondary text-sm md:text-base max-w-[580px] leading-relaxed">
            Occasionally writing about engineering systems, building startups, and lessons learned while shipping products.
          </p>
        </div>

        {/* Philosophy / Things I Believe Section */}
        <Section id="philosophy" title="Things I Believe" delayClass="delay-150">
          <div className="flex flex-col gap-y-6">
            {philosophies.map((philo, idx) => (
              <div key={idx} className="flex flex-col gap-y-1">
                <h3 className="text-foreground text-sm font-medium">{philo.text}</h3>
                <p className="text-xs text-secondary/90 leading-relaxed">{philo.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Writing list Section */}
        <Section id="articles" title="Notes & Drafts" delayClass="delay-225">
          <div className="flex flex-col gap-y-6 w-full">
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
      </main>

      <footer className="w-full flex flex-col sm:flex-row gap-y-2 justify-between items-center mt-24 pt-8 border-t border-border-custom/40 text-xs text-secondary font-mono animate-fade-in delay-300">
        <span>© {new Date().getFullYear()} Samarth Kolarkar</span>
        <span>Solapur, India</span>
      </footer>
    </>
  );
}
