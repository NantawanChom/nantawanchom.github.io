import { motion } from "framer-motion";
import { HexPattern } from "./HexPattern.tsx";
import { Code, Layout, Server, Zap } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Frontend Architecture",
    desc: "Scalable, maintainable UI systems.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Robust APIs and database design.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimized for speed and accessibility.",
  },
  {
    icon: Code,
    title: "Clean Code",
    desc: "Readable, tested, and documented.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative bg-white">
      <HexPattern opacity={0.02} color="#2D5A3D" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h2 className="text-[var(--forest)] font-bold tracking-wider uppercase text-sm mb-2">
              About Me
            </h2>
            <h3 className="text-4xl font-bold text-[var(--dark)] mb-6">
              5 years of delivering high-impact{" "}
              <span className="text-[var(--sage)]">
                full-stack applications
              </span>
              .
            </h3>
            <p className="text-[var(--sage)] mb-6 leading-relaxed">
              I am a Full-Stack Software Developer who believes the best digital
              products are born at the intersection of logical rigor and
              aesthetic clarity.
            </p>
            <p className="text-[var(--sage)] mb-8 leading-relaxed">
              With 5 years of experience building everything from high-impact
              auction platforms to secure government chat systems, I specialize
              in bringing complex designs to life with clean, efficient code. My
              approach is end-to-end: I don't just build interfaces; I architect
              the databases, design the APIs, and ensure every pixel is exactly
              where it belongs.
            </p>
          </motion.div>

          <motion.div
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
              duration: 0.6,
              delay: 0.2,
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[var(--cream)] border border-[var(--sage)]/10 hover:border-[var(--mint)] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--forest)]/10 flex items-center justify-center text-[var(--forest)] mb-4 group-hover:bg-[var(--forest)] group-hover:text-white transition-colors">
                  <feature.icon size={20} />
                </div>
                <h4 className="font-bold text-[var(--dark)] mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-[var(--sage)]">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
