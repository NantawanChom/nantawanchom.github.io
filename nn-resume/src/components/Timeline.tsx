import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Looloo Technology",
    period: "2020 - Present",
    description:
      "Full-stack development of donation and auction platforms: built APIs, databases, payment integrations, user interfaces, encrypted chat, RPA automation, and managed Dockerized servers for ML data validation.",
    skills: [
      "Python",
      "Go",
      "NestJS",
      "Django",
      "TypeScript",
      "React",
      "VueJS",
      "NuxtJS",
      "JavaScript",
      "HTML",
      "CSS",
      "TailwindCSS",
      "Docker",
      "Jquery",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "FREELANCE (no company)",
    period: "2020",
    description:
      "Developed and maintained the backend system for the dip-music-dedupe project using .NET, ensuring data processing for the official copyright-song.ipthailand.go.th website.",
    skills: [".NET", "C#"],
  },
];

export function Timeline() {
  return (
    <section
      id="experience"
      className="py-24 bg-[var(--cream)] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-[var(--forest)] font-bold tracking-wider uppercase text-sm mb-2">
            Career Path
          </h2>
          <h3 className="text-4xl font-bold text-[var(--dark)]">
            Professional Experience
          </h3>
        </div>

        {/* Central Line */}
        <div className="absolute left-6 md:left-1/2 top-32 bottom-0 w-0.5 bg-[var(--sage)]/20 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Content Card */}
              <div className="flex-1 ml-12 md:ml-0">
                <div
                  className={`bg-white p-6 rounded-xl shadow-sm border border-[var(--sage)]/10 hover:shadow-md transition-shadow relative group ${index % 2 === 0 ? "md:text-right" : ""}`}
                >
                  {/* Hexagon Connector (Desktop) */}
                  <div
                    className={`hidden md:flex absolute top-6 w-8 h-1 items-center ${index % 2 === 0 ? "-left-8 justify-end" : "-right-8 justify-start"}`}
                  >
                    <div className="w-full h-[2px] bg-[var(--sage)]/30" />
                  </div>

                  <h4 className="text-xl font-bold text-[var(--dark)] group-hover:text-[var(--forest)] transition-colors">
                    {exp.role}
                  </h4>
                  <div
                    className={`flex items-center gap-2 text-[var(--sage)] text-sm mb-4 mt-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                  >
                    <Briefcase size={14} />
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-1">•</span>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-[var(--dark)]/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                  >
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-[var(--cream)] text-[var(--forest)] text-xs font-medium rounded-md border border-[var(--sage)]/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Node */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-12 h-12 bg-[var(--cream)] flex items-center justify-center z-10">
                  <div className="relative w-10 h-10 flex items-center justify-center group">
                    {/* Hexagon Shape */}
                    <div className="absolute inset-0 bg-[var(--forest)] clip-hex transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-[2px] bg-white clip-hex z-10" />
                    <div className="absolute inset-[6px] bg-[var(--mint)]/20 clip-hex z-20" />
                    <span className="relative z-30 text-[var(--forest)] font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
