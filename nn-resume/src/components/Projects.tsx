import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
const projects = [
  {
    title: "DIP Copyright Song",
    description:
      "Developed and maintained the backend system for the dip-music-dedupe project using .NET, ensuring data processing for the official copyright-song.ipthailand.go.th website.",
    tags: [".NET", "C#"],
    image: "/images/dip-project.png",
    links: {
      demo: "https://copyright-song.ipthailand.go.th/",
      github: "#",
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-[var(--forest)] font-bold tracking-wider uppercase text-sm mb-2">
              Portfolio
            </h2>
            <h3 className="text-4xl font-bold text-[var(--dark)]">
              Featured Projects
            </h3>
          </div>
          <a
            href="https://github.com/NantawanChom"
            className="flex items-center gap-2 text-[var(--forest)] font-medium hover:text-[var(--sage)] transition-colors group"
          >
            View Github{" "}
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
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
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--sage)]/10 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--forest)]/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Links */}
                <div className="absolute bottom-4 right-4 z-20 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <a
                    href={project.links.github}
                    className="p-2 bg-white rounded-full text-[var(--dark)] hover:text-[var(--forest)] shadow-lg"
                    aria-label="View Source"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.links.demo}
                    className="p-2 bg-[var(--forest)] rounded-full text-white hover:bg-[var(--sage)] shadow-lg"
                    aria-label="View Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-bold text-[var(--dark)] mb-3 group-hover:text-[var(--forest)] transition-colors">
                  {project.title}
                </h4>
                <p className="text-[var(--sage)] mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-[var(--cream)] text-[var(--forest)] rounded-full border border-[var(--sage)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
