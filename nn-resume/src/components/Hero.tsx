import { motion } from "framer-motion";
import { ArrowRight, Download, Hexagon } from "lucide-react";
import { HexPattern } from "./HexPattern";
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <HexPattern opacity={0.03} scale={1.5} />

      {/* Decorative Hexagons */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 opacity-5 hidden lg:block">
        <Hexagon
          className="w-full h-full text-[var(--forest)]"
          strokeWidth={0.5}
        />
      </div>
      <div className="absolute bottom-1/4 left-[5%] w-40 h-40 opacity-5 hidden lg:block">
        <Hexagon className="w-full h-full text-[var(--mint)]" strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--mint)]/20 text-[var(--forest)] text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--forest)] animate-pulse" />
            Available for new projects
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold text-[var(--dark)] leading-[1.1] mb-6">
            If you don't successed,
            <br />
            <span className="text-[var(--forest)] relative inline-block">
              try
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-[var(--mint)] opacity-40"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
            <br /> try again.
          </h1>

          <p className="text-xl text-[var(--sage)] mb-8 max-w-lg leading-relaxed">
            Full-Stack Software Developer with 5 years of experience delivering
            scalable, production-ready web applications. Expert in VueJS, NuxtJS
            and Python, with a strong focus on end-to-end development—from
            robust database architecture and API design to seamless payment
            system integrations.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-[var(--forest)] text-white font-medium rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-[var(--forest)]/20"
            >
              <div className="absolute inset-0 w-full h-full bg-[var(--sage)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                View Work <ArrowRight size={18} />
              </span>
            </a>

            <a
              href="/files/NANTAWAN_CHOMBOONMEE_CV.pdf"
              download
              className="group px-8 py-3 border-2 border-[var(--forest)] text-[var(--forest)] font-medium rounded-lg hover:bg-[var(--forest)]/5 transition-colors flex items-center gap-2"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="relative w-96 h-96">
            {/* Abstract Geometric Composition */}
            <div className="absolute inset-0 bg-[var(--mint)]/20 clip-hex transform rotate-12" />
            <div className="absolute inset-4 bg-[var(--sage)]/20 clip-hex transform -rotate-6" />
            <div className="absolute inset-8 bg-[var(--forest)]/10 clip-hex transform rotate-3" />

            {/* Image Placeholder */}
            <div className="absolute inset-6 clip-hex bg-[var(--dark)] overflow-hidden">
              <img
                src="images/1726659078187.jpeg"
                alt="Portrait"
                className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-20 bg-white p-4 rounded-xl shadow-lg border border-[var(--cream)] max-w-[150px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="text-xs font-bold text-[var(--dark)]">
                  VueJs / NuxtJS
                </span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 w-[90%]" />
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -left-8 bottom-20 bg-white p-4 rounded-xl shadow-lg border border-[var(--cream)] max-w-[150px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-xs font-bold text-[var(--dark)]">
                  Python
                </span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[95%]" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
