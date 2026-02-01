import { motion } from "framer-motion";
import { Code2, Database, Layout, PenTool, Server } from "lucide-react";
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "VueJS",
        icon: Code2,
        level: 80,
      },
      {
        name: "NuxtJS",
        icon: Code2,
        level: 80,
      },
      {
        name: "Tailwind CSS",
        icon: Layout,
        level: 75,
      },
      {
        name: "TypeScript",
        icon: Code2,
        level: 80,
      },
      {
        name: "JavaScript",
        icon: Code2,
        level: 80,
      },
      {
        name: "React",
        icon: Code2,
        level: 40,
      },
      {
        name: "HTML & CSS",
        icon: Code2,
        level: 90,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Python",
        icon: Code2,
        level: 80,
      },
      {
        name: "Django",
        icon: Code2,
        level: 80,
      },
      {
        name: "GO",
        icon: Code2,
        level: 50,
      },
      {
        name: "NestJS",
        icon: Code2,
        level: 70,
      },
      {
        name: "Docker",
        icon: Server,
        level: 70,
      },
      {
        name: "PostgreSQL",
        icon: Database,
        level: 80,
      },
      {
        name: "MySQL",
        icon: Database,
        level: 80,
      },
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      {
        name: "Figma",
        icon: PenTool,
        level: 50,
      },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[var(--forest)] font-bold tracking-wider uppercase text-sm mb-2">
            Expertise
          </h2>
          <h3 className="text-4xl font-bold text-[var(--dark)]">
            Technical Skills
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="space-y-6">
              <h4 className="text-xl font-bold text-[var(--dark)] flex items-center gap-3 pb-4 border-b border-[var(--sage)]/10">
                <span className="w-2 h-8 bg-[var(--forest)] rounded-full" />
                {category.title}
              </h4>

              <div className="grid gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
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
                      duration: 0.4,
                      delay: catIndex * 0.2 + index * 0.1,
                    }}
                    className="group relative bg-[var(--cream)] p-4 rounded-xl border border-transparent hover:border-[var(--mint)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[var(--forest)] shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <skill.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-[var(--dark)]">
                            {skill.name}
                          </span>
                          <span className="text-xs font-medium text-[var(--sage)] opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-[var(--sage)]/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-[var(--forest)] rounded-full"
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: `${skill.level}%`,
                            }}
                            transition={{
                              duration: 1,
                              delay: 0.5,
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Decorative Hexagon Background */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[var(--mint)]/10 clip-hex opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
