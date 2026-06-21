"use client";

import { useState, useMemo } from "react";
import { Navbar, ProjectCard, StackPill } from "../components";

interface ProjectItem {
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  imagePath?: string;
  links: { label: string; href: string; type: "live" | "repo" }[];
}

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

const allProjects: ProjectItem[] = [
  {
    name: "Trinetra",
    description: "An AI-powered public safety platform engineered for large gatherings and events. Processes video feeds and triggers automated emergency coordination protocols dynamically.",
    features: [
      "Multi-agent system dispatching alerts based on threat severity",
      "Computer Vision CCTV models tracking crowding and anomalies",
      "Twilio automated IVR system for emergency responses",
      "Multilingual voice-assisted SOS portal",
    ],
    techStack: ["Next.js", "Node.js", "Flask", "Firebase", "Gemini", "Twilio", "VideoSDK"],
    imagePath: "/trinetra.png",
    links: [
      // { label: "Live Preview", href: "https://trinetra.nexentia.in", type: "live" },
      { label: "Repo Url", href: "https://github.com/Erennn7/trinetra", type: "repo" },
    ],
  },
  {
    name: "CureConnect",
    description: "A comprehensive telemedicine and healthcare delivery network focused on accessibility in remote communities, integrating smart diagnosis and automated IVRS scheduling.",
    features: [
      "WebRTC consultation rooms with real-time symptoms summaries",
      "AI Diagnostic agent identifying primary illness metrics",
      "Integrated telephony routing offline calls to local doctors",
      "Google Maps API tracking and directing to nearby clinics",
    ],
    techStack: ["Next.js", "Node.js", "WebSockets", "Google Maps", "Exotel", "AI Models"],
    imagePath: "/cureconnect.png",
    links: [
      // { label: "Live Preview", href: "https://cureconnect.nexentia.in", type: "live" },
      { label: "Repo Url", href: "https://github.com/Erennn7/cureconnect", type: "repo" },
    ],
  },
  {
    name: "Chatty",
    description: "A scalable real-time messaging platform built with React, Node.js, Express, MongoDB, and Socket.IO. Features secure authentication, instant message delivery, online user status tracking, image sharing via Cloudinary, and persistent chat history, showcasing modern full-stack web development practices.",
    features: [
      "Secure user authentication and session handling via JWT token system",
      "Instant real-time message delivery and delivery events powered by Socket.IO",
      "Online user status tracking showing indicators for active members",
      "Optimized media pipeline utilizing Cloudinary CDN for instant image sharing",
      "Persistent chat history storage indexed in MongoDB cloud cluster",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary"],
    imagePath: "/chatty.png",
    links: [
      { label: "Live Preview", href: "https://chatty-csuq.onrender.com/", type: "live" },
      { label: "Repo Url", href: "https://github.com/Erennn7/chatty", type: "repo" },
    ],
  },
  {
    name: "Socially",
    description: "A modern full-stack social media platform built with Next.js 14, TypeScript, Prisma, PostgreSQL, and Clerk featuring posts, comments, likes, follows, notifications, and image sharing.",
    features: [
      "Full-stack post publishing framework with high-speed image uploads",
      "Interactive social features supporting posts comments, likes, and follows",
      "Real-time notifications dashboard tracking social engagement indicators",
      "Robust modern Clerk authentication and secure onboarding integration",
      "Optimized Prisma ORM mapping queries on PostgreSQL database",
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Tailwind CSS"],
    imagePath: "/socially.png",
    links: [
      { label: "Live Preview", href: "https://x-seven-lime.vercel.app", type: "live" },
      { label: "Repo Url", href: "https://github.com/Erennn7/socially", type: "repo" },
    ],
  },
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Client-side filtering logic
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return allProjects;
    return allProjects.filter(
      (proj) =>
        proj.name.toLowerCase().includes(query) ||
        proj.description.toLowerCase().includes(query) ||
        proj.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
        proj.features.some((feat) => feat.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col min-h-[50vh]">
        {/* Title and search panel */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-4 mb-16 animate-fade-in delay-75">
          <h1 className="font-serif italic text-3xl md:text-4xl text-foreground font-normal tracking-tight">
            All Projects
          </h1>
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Search Projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-border-custom/20 border border-border-custom/90 px-4 py-2 pl-9 text-sm text-foreground placeholder-secondary/80 rounded-md focus:outline-none focus:border-secondary/40 transition-colors focus:ring-1 focus:ring-secondary/35"
              id="projects-search-input"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/80"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        {/* Tech Stack directory */}
        <div className="mb-16 animate-fade-in delay-150 border-b border-border-custom pb-12">
          <h2 className="font-serif italic text-2xl text-foreground font-normal tracking-tight mb-4">
            Tech Directory
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <StackPill key={tech} label={tech} />
            ))}
          </div>
        </div>

        {/* Dynamic Project grid layout */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 animate-fade-in delay-225">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                features={project.features}
                techStack={project.techStack}
                imagePath={project.imagePath}
                links={project.links}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
            <p className="text-secondary text-sm mb-2">No projects found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-foreground hover:underline font-mono"
            >
              Clear Search Query
            </button>
          </div>
        )}
      </main>

      <footer className="w-full flex flex-col sm:flex-row gap-y-2 justify-between items-center mt-24 pt-8 border-t border-border-custom/40 text-xs text-secondary font-mono animate-fade-in delay-300">
        <span>© {new Date().getFullYear()} Samarth Kolarkar</span>
        <span>Solapur, India</span>
      </footer>
    </>
  );
}
