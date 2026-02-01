import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { HexPattern } from "./HexPattern";
export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const mailto = `mailto:nantawan.cbm.work@gmail.com?subject=${encodeURIComponent(subject || "Contact from Portfolio")}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[var(--dark)] text-white relative overflow-hidden"
    >
      <HexPattern opacity={0.05} color="#8FBC8F" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
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
            <h2 className="text-[var(--mint)] font-bold tracking-wider uppercase text-sm mb-2">
              Get in Touch
            </h2>
            <h3 className="text-4xl font-bold mb-6">
              Let's build something amazing together.
            </h3>
            <p className="text-gray-400 mb-12 max-w-md leading-relaxed">
              I'm currently available for freelance work and full-time
              positions. If you have a project that needs some creative touch,
              I'd love to hear about it.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-[var(--forest)]/30 flex items-center justify-center text-[var(--mint)] group-hover:bg-[var(--mint)] group-hover:text-[var(--dark)] transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">nantawan.cbm.work@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-[var(--forest)]/30 flex items-center justify-center text-[var(--mint)] group-hover:bg-[var(--mint)] group-hover:text-[var(--dark)] transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">(+66) 98 360 5204</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-[var(--forest)]/30 flex items-center justify-center text-[var(--mint)] group-hover:bg-[var(--mint)] group-hover:text-[var(--dark)] transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Bangkok, Thailand</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/NantawanChom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[var(--mint)] hover:border-[var(--mint)] hover:text-[var(--dark)] transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nantawan-chomboonmee-3212b11b5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[var(--mint)] hover:border-[var(--mint)] hover:text-[var(--dark)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
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
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <form className="space-y-6" onSubmit={handleSendEmail}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--mint)] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--mint)] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--mint)] transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--mint)] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--mint)] text-[var(--dark)] font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} NANTAWAN CHOMBOONMEE. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
