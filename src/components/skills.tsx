"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "CI/CD", "Linux", "PostgreSQL", "Prisma"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function Skills() {
  return (
    <section id="skills" className="border-t border-border/50 py-24 sm:py-32">
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
              Skills
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technologies I work with
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                {...fadeUp}
                transition={{ duration: 0.35, delay: 0.08 + catIndex * 0.08 }}
                className="rounded-lg border border-border/60 bg-card/50 p-6"
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/50 bg-secondary/30 px-3 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
