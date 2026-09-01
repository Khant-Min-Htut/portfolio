"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Layers } from "lucide-react";

const focusAreas = [
  {
    icon: Code,
    title: "Frontend",
    description:
      "React, Next.js, React Native, and Tailwind CSS for clean, responsive interfaces.",
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "NestJS and Node.js for robust server-side applications and APIs.",
  },
  {
    icon: Database,
    title: "Web Fundamentals",
    description:
      "HTML, CSS, and JavaScript as the foundation of every project.",
  },
  {
    icon: Cloud,
    title: "DevOps",
    description:
      "Learning deployment, CI/CD pipelines, and cloud basics.",
  },
  {
    icon: Layers,
    title: "Growth",
    description:
      "Motivated to build real projects and take on new opportunities.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function About() {
  return (
    <section id="about" className="border-t border-border/50 py-24 sm:py-32">
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
              About
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A bit about me
            </h2>
          </motion.div>

          {/* Bio + Focus Grid */}
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="space-y-4 text-[15px] leading-[1.7] text-muted-foreground">
                <p>
                  I&apos;m a Junior Developer with a background in Software
                  Engineering. I work with HTML, CSS, JavaScript, React, Next.js,
                  NestJS, Tailwind, and React Native to build clean and responsive
                  applications.
                </p>
                <p>
                  I&apos;m also learning backend fundamentals and following a DevOps
                  pathway to understand deployment, CI/CD, and cloud basics.
                </p>
                <p>
                  I&apos;m motivated to grow, build real projects, and take on new
                  opportunities.
                </p>
              </div>
            </motion.div>

            {/* Focus Areas Grid */}
            <div className="lg:col-span-3">
              <div className="grid gap-3 sm:grid-cols-2">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    {...fadeUp}
                    transition={{ duration: 0.35, delay: 0.1 + index * 0.06 }}
                    className="group rounded-lg border border-border/60 bg-card/50 p-4 transition-all hover:border-border hover:bg-accent/50"
                  >
                    <div className="mb-2.5 flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary/80 transition-colors group-hover:bg-primary/10">
                        <area.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </div>
                      <h3 className="text-sm font-semibold">{area.title}</h3>
                    </div>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
