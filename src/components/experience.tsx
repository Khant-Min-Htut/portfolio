"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Junior Developer",
    company: "Connected Group",
    type: "Full-time",
    date: "Dec 2025 – Present · 10 mos",
    location: "Remote",
    tags: ["React", "Next.js", "Full-Stack"],
  },
  {
    title: "Backend Developer",
    company: "MMS IT",
    type: "Part-time",
    date: "Oct 2024 – Dec 2025 · 1 yr 3 mos",
    location: "Yangon · Hybrid",
    tags: ["Website Building", "Site Development", "Backend"],
  },
];

const education = [
  {
    title: "I space International College",
    degree: "Advanced Diploma, Computer Software Engineering",
    date: "Mar 2025 – Mar 2027",
    grade: "Freshman",
  },
  {
    title: "Dagon University",
    degree: "Bachelor's degree, Chemistry",
    date: "Jan 2024 – Present",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function ExperienceItem({
  item,
  index,
  isLast,
}: {
  item: { title: string; company: string; type: string; date: string; location: string; tags?: string[] };
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.35, delay: 0.08 + index * 0.08 }}
      className="relative flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-2.5 w-2.5 shrink-0 rounded-full border-2 border-primary bg-background ring-4 ring-background" />
        {!isLast && <div className="w-px flex-1 bg-border/60" />}
      </div>

      <div className="pb-8">
        <h3 className="mb-0.5 text-sm font-semibold">{item.title}</h3>
        <p className="text-xs text-muted-foreground">
          {item.company} · {item.type}
        </p>
        <p className="text-xs text-muted-foreground">{item.date}</p>
        <p className="mb-3 text-xs text-muted-foreground">{item.location}</p>
        {item.tags && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/50 bg-secondary/30 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function EducationItem({
  item,
  index,
  isLast,
}: {
  item: { title: string; degree: string; date: string; grade?: string };
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.35, delay: 0.08 + index * 0.08 }}
      className="relative flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-2.5 w-2.5 shrink-0 rounded-full border-2 border-primary bg-background ring-4 ring-background" />
        {!isLast && <div className="w-px flex-1 bg-border/60" />}
      </div>

      <div className="pb-8">
        <h3 className="mb-0.5 text-sm font-semibold">{item.title}</h3>
        <p className="text-xs text-muted-foreground">{item.degree}</p>
        <p className="text-xs text-muted-foreground">{item.date}</p>
        {item.grade && (
          <p className="text-xs text-muted-foreground">Grade: {item.grade}</p>
        )}
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-border/50 py-24 sm:py-32">
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
              Experience & Education
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              My background
            </h2>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Experience */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35 }}
                className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Experience
              </motion.h3>
              <div>
                {experiences.map((item, index) => (
                  <ExperienceItem
                    key={item.title}
                    item={item}
                    index={index}
                    isLast={index === experiences.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: 0.08 }}
                className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Education
              </motion.h3>
              <div>
                {education.map((item, index) => (
                  <EducationItem
                    key={item.title}
                    item={item}
                    index={index}
                    isLast={index === education.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
