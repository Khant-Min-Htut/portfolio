"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered tool that analyzes resumes and provides actionable feedback to improve them.",
    tags: ["React", "Next.js", "AI", "TypeScript"],
    image: "/ai-resume-analyzer.png",
    github: "https://github.com/Khant-Min-Htut/ai-resume-analyzer",
    live: "https://ai-resume-analyzer-ashy-five.vercel.app/",
  },
  {
    title: "Plant Ventary",
    description:
      "A plant inventory management application for tracking and organizing plant collections.",
    tags: ["React", "Next.js", "Node.js"],
    image: "/plant-ventary.png",
    github: "https://github.com/Khant-Min-Htut/Plant_ventary",
    live: "https://plant-ventary.vercel.app/",
  },
  {
    title: "Meeting Room Booking",
    description:
      "A room booking system for scheduling and managing meeting room reservations.",
    tags: ["React", "NestJS", "PostgreSQL"],
    image: "/meeting-room.png",
    github: "https://github.com/Khant-Min-Htut/meeting-room-booking-system",
    live: "https://meeting-room-booking-system-lilac.vercel.app/",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function Projects() {
  return (
    <section id="projects" className="border-t border-border/50 py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Projects
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured work
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Main Featured Project — full width */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="group overflow-hidden rounded-lg border border-border/60 bg-card/50 transition-all hover:border-border hover:shadow-md lg:col-span-2"
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="aspect-video overflow-hidden bg-secondary/30 md:aspect-auto">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h3 className="mb-2 text-lg font-semibold">{projects[0].title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {projects[0].description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {projects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/50 bg-secondary/30 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={projects[0].github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={projects[0].live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Projects — side by side */}
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.title}
                {...fadeUp}
                transition={{ duration: 0.35, delay: 0.16 + index * 0.08 }}
                className="group overflow-hidden rounded-lg border border-border/60 bg-card/50 transition-all hover:border-border hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden bg-secondary/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-sm font-semibold">{project.title}</h3>
                  <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/50 bg-secondary/30 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
