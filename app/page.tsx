"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  MessageCircleQuestion,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" }
];

const projects = [
  {
    title: "KAIRO — Real-Time Job Monitor",
    stack: ["Next.js", "PostgreSQL", "Telegram Bot", "Vercel"],
    link: "https://github.com/ridhwankhan/kairo",
    liveLink: "https://kairo-job.vercel.app",
    statement: "Job seekers waste hours manually checking dozens of career portals for new listings.",
    problem:
      "There was no unified, automated system that could scrape multiple job boards, deduplicate results, and deliver real-time alerts to users personally.",
    solution:
      "Built KAIRO — a full-stack, real-time job monitoring platform with automated scrapers, a PostgreSQL-backed deduplication engine, per-user Telegram bot notifications, and a live dashboard for tracking opportunities across portals.",
    outcome:
      "Deployed a production-grade SaaS-style platform on Vercel that actively monitors job listings 24/7 and pushes instant alerts to registered users via Telegram."
  },
  {
    title: "ZERO Trust Banking System",
    stack: ["Django", "React", "Cryptography"],
    link: "https://github.com/ridhwankhan/ZERO-trust-Banking-system",
    liveLink: null,
    statement: "Banks need stronger trust boundaries without slowing down user actions.",
    problem:
      "Traditional security layers were not enough for sensitive financial workflows and peer-to-peer transactions.",
    solution:
      "Built a zero-trust banking platform with role-based flows, RSA/ECC encryption, and stricter identity checks at every step.",
    outcome:
      "Created a safer, modern prototype that shows secure operations can still feel smooth for users."
  },
  {
    title: "Multimodal ML Framework",
    stack: ["Python", "ML", "Data Engineering"],
    link: null,
    liveLink: null,
    statement: "Land-use planning often relies on fragmented data and guesswork.",
    problem:
      "Geospatial, climate, and socio-economic signals were spread across different formats and hard to combine.",
    solution:
      "Designed a multimodal pipeline that cleans, aligns, and learns from mixed datasets for better prediction quality.",
    outcome:
      "Improved consistency of analysis and made model outputs more useful for practical agricultural decisions."
  },
  {
    title: "Meta-Visual Deepfake Forensics",
    stack: ["Deep Learning", "CV", "NLP"],
    link: null,
    liveLink: null,
    statement: "Deepfake detection fails when models depend on only one signal type.",
    problem:
      "Visual-only detectors were easier to bypass on tougher manipulated media samples.",
    solution:
      "Combined visual features with metadata-driven signals in a multimodal detection workflow.",
    outcome:
      "Raised robustness against manipulated content and improved confidence in detection results."
  },
  {
    title: "Techie Tokor E-Commerce",
    stack: ["PHP", "MySQL"],
    link: "https://github.com/ridhwankhan/CSE370-Project",
    liveLink: null,
    statement: "Small online stores need reliable shopping flows without heavy infrastructure.",
    problem:
      "Basic storefront implementations struggled with auth, product handling, and scalable order flow.",
    solution:
      "Built a full-stack e-commerce platform with structured relational schema and optimized backend operations.",
    outcome:
      "Delivered a stable shopping experience with better performance and cleaner store management."
  },
  {
    title: "Server Automation & ETL Utility",
    stack: ["Bash", "Linux", "Cron"],
    link: "https://github.com/ridhwankhan/Linux-Shell-Scripting",
    liveLink: null,
    statement: "Manual server tasks create delays and increase operation mistakes.",
    problem:
      "Backups and data pulls were repetitive, error-prone, and inconsistent across schedules.",
    solution:
      "Automated recurring jobs with Bash scripts, cron scheduling, and logging-driven ETL tasks.",
    outcome:
      "Reduced manual overhead and established repeatable data operations with reliable timing."
  },
  {
    title: "Quadcopter Flight Controller",
    stack: ["C++", "Arduino", "Embedded"],
    link: "https://github.com/ridhwankhan/Arduino-flight-controller",
    liveLink: null,
    statement: "Stable flight requires fast control loops and accurate sensor handling.",
    problem:
      "Without tuned feedback control, the quadcopter drifted and became unstable under movement.",
    solution:
      "Implemented PID-based flight control with IMU and ESC integration on embedded hardware.",
    outcome:
      "Achieved smoother real-time stabilization and stronger hardware-software control integration."
  }
];

const certifications = [
  {
    title: "Foundations: Data, Data, Everywhere",
    provider: "Google",
    description: "Core data thinking and analysis foundations.",
    link: "https://www.coursera.org/account/accomplishments/records/VPKDZ344UPHQ"
  },
  {
    title: "Excel Basics for Data Analysis",
    provider: "IBM",
    description: "Practical analysis workflows with spreadsheet tooling.",
    link: "https://www.coursera.org/account/accomplishments/records/MZ7XNU90NPSD"
  },
  {
    title: "Data Visualization and Dashboards",
    provider: "IBM",
    description: "Building dashboards and business-friendly data stories.",
    link: "https://www.coursera.org/account/accomplishments/records/NHMVLI9B3AU0"
  },
  {
    title: "Machine Learning with Python (Honors)",
    provider: "IBM",
    description: "Applied ML concepts and model-building workflow.",
    link: "https://www.coursera.org/account/accomplishments/records/QLUMHV6CN7J4"
  },
  {
    title: "Introduction to Software Engineering",
    provider: "IBM",
    description: "Software lifecycle, process, and team collaboration basics.",
    link: "https://www.coursera.org/account/accomplishments/records/Q96T2E1H58CP"
  },
  {
    title: "Introduction to Deep Learning and Neural Networks with Keras",
    provider: "IBM",
    description: "Deep learning foundations and neural network workflow in practice.",
    link: "https://www.coursera.org/account/accomplishments/records/W5YSDN986KPA"
  },
  {
    title: "Hands-on Linux Commands and Shell Scripting",
    provider: "IBM",
    description: "Command-line automation, scripting, and system workflow efficiency.",
    link: "https://www.coursera.org/account/accomplishments/records/T2JF14B8P7W3"
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    provider: "Google",
    description: "Business analytics mindset for asking better questions and guiding decisions.",
    link: "https://www.coursera.org/account/accomplishments/records/GMKO8YT5EDC6"
  }
];

const timeline = [
  {
    title: "Started CS Degree",
    period: "2022",
    detail: "Began my Computer Science journey at BRAC University.",
    phase:
      "Built my foundation in computer science and started exploring how technology creates business value."
  },
  {
    title: "Learned Programming Fundamentals",
    period: "Early Journey",
    detail: "Built a strong base in programming, data structures, and problem solving.",
    phase: "Developed coding discipline and structured thinking through hands-on practice."
  },
  {
    title: "Built First Projects",
    period: "Hands-on Phase",
    detail: "Moved from theory to practice by shipping end-to-end project work.",
    phase: "Learned execution, ownership, and product thinking by building complete solutions."
  },
  {
    title: "Explored AI/ML",
    period: "Growth Phase",
    detail: "Started applying ML concepts and data-driven thinking to real use cases.",
    phase: "Connected data science methods with real-world decision support and intelligence."
  },
  {
    title: "Business Analytics and Leadership Focus",
    period: "Current Focus",
    detail: "Expanded into business analytics, strategy, and leadership-oriented impact.",
    phase:
      "Building a profile that combines technical depth with communication, planning, and decision-making."
  },
  {
    title: "Final Semester (Current)",
    period: "Now",
    detail: "Graduating May 2026. Open to work from June 2026.",
    phase:
      "Preparing for full-time roles where software, analytics, and cross-functional collaboration matter.",
    highlight: true
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const rotatingWords = ["AI systems", "web apps", "data tools"];
  const [activeWord, setActiveWord] = useState(0);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [activeCert, setActiveCert] = useState(0);
  const [activeAsk, setActiveAsk] = useState<string | null>("What do you build?");
  const [showFullJourney, setShowFullJourney] = useState(false);
  const [expandedJourney, setExpandedJourney] = useState("Final Semester (Current)");
  const askItems = [
    {
      question: "What do you build?",
      answer:
        "I build practical software products with clean user experience, solid backend logic, and clear real-world value."
    },
    {
      question: "What technologies do you use?",
      answer:
        "I mostly work with Python, React, Django, SQL, and ML tooling. I choose tools based on the problem, not trends."
    },
    {
      question: "Are you available for work?",
      answer:
        "Yes. I am available for full-time roles from June 2026 in software engineering, backend, and entry-level AI/ML roles."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  useEffect(() => {
    const certTimer = setInterval(() => {
      setActiveCert((prev) => (prev + 1) % certifications.length);
    }, 3600);
    return () => clearInterval(certTimer);
  }, []);

  const orderedJourney = [...timeline].sort((a, b) => Number(Boolean(b.highlight)) - Number(Boolean(a.highlight)));

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="snap-shell relative overflow-x-hidden"
    >
      <div className="soft-grid pointer-events-none fixed inset-0 -z-10 opacity-30" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white">
            RIDHWANUR RAHMAN KHAN
          </a>
          <ul className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="snap-section relative flex min-h-screen items-center justify-center overflow-hidden px-5 md:px-8"
      >
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.12, 1], rotate: [0, -14, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, 14, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-x-0 top-[18%] mx-auto h-40 w-[75%] rounded-full bg-gradient-to-r from-cyan-500/15 via-sky-400/15 to-violet-500/15 blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
          >
            <Sparkles size={14} />
            Open to work from June 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mt-6 max-w-4xl bg-gradient-to-r from-white via-slate-100 to-slate-500 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl"
          >
            I build simple, intelligent software that solves real problems.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-4 h-8 text-sm text-slate-300 md:text-base"
          >
            <span className="text-slate-400">Focused on </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[activeWord]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32 }}
                className="inline-block bg-gradient-to-r from-cyan-200 to-violet-200 bg-clip-text font-medium text-transparent"
              >
                {rotatingWords[activeWord]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
          >
            RIDHWANUR RAHMAN KHAN - Computer Science student graduating May 2026. Open to work
            from June 2026.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_-12px_rgba(56,189,248,0.95)] transition hover:-translate-y-0.5 hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.95)]"
            >
              View Projects
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:ridhwankhan03@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="snap-section mx-auto max-w-6xl px-5 py-12 md:px-8"
      >
        <div className="glass w-full overflow-hidden rounded-3xl p-8 md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.65 }}
            >
              <h2 className="text-2xl font-semibold md:text-3xl">About Me</h2>
              <div className="mt-5 space-y-4 text-slate-300">
                <p>
                  I am a Computer Science graduate (May 2026) from BRAC University with a strong
                  foundation in software engineering, data analytics, and business intelligence.
                </p>
                <p>
                  My work sits at the intersection of technology and strategy — I build data-driven
                  systems that solve real operational problems, not just technical exercises.
                </p>
                <p>
                  I am particularly drawn to roles in data analytics, operations management, and
                  corporate leadership tracks, where I can translate technical insight into
                  measurable business outcomes.
                </p>
                <p>
                  I thrive in cross-functional environments and bring both the analytical rigour of
                  an engineer and the communication clarity of a business thinker.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 md:h-80"
            >
              <Image
                src="/my_hero.jpeg"
                alt="Ridhwanur Rahman Khan"
                fill
                className="absolute inset-0 h-full w-full object-cover opacity-85"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
              <motion.div
                aria-hidden
                animate={{
                  x: [0, 18, -8, 0],
                  y: [0, -12, 10, 0],
                  scale: [1, 1.08, 0.98, 1]
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-10 top-12 h-36 w-36 rounded-full bg-cyan-400/30 blur-3xl"
              />
              <motion.div
                aria-hidden
                animate={{
                  x: [0, -16, 12, 0],
                  y: [0, 14, -10, 0],
                  scale: [1, 0.95, 1.12, 1]
                }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-8 h-40 w-40 rounded-full bg-violet-500/25 blur-3xl"
              />
              <motion.div
                aria-hidden
                animate={{ opacity: [0.2, 0.45, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 m-auto h-24 w-4/5 rounded-full bg-gradient-to-r from-cyan-300/20 via-white/15 to-violet-300/20 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section id="skills" className="snap-section mx-auto max-w-6xl px-5 py-16 md:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-2xl font-semibold md:text-3xl"
        >
          Skills Snapshot
        </motion.h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { icon: Code2, title: "Software Engineering", text: "Backend systems, APIs, scalable architecture, product-focused execution." },
            { icon: Database, title: "Data + AI/ML", text: "EDA, model development, multimodal pipelines, and practical analytics." },
            { icon: BriefcaseBusiness, title: "Business + Leadership Lens", text: "Interest in business intelligence, leadership, and strategy-driven product execution." }
          ].map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <item.icon className="text-cyan-300" />
              <h3 className="mt-4 text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="snap-section mx-auto max-w-6xl px-5 py-16 md:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-2xl font-semibold md:text-3xl"
        >
          Selected Projects
        </motion.h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
          A few case studies where I focused on real user problems and practical outcomes.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="interactive-lift group relative overflow-hidden glass rounded-3xl p-6 transition hover:border-cyan-200/40"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-violet-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.statement}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: "auto" }}
                className="mt-4 space-y-2 overflow-hidden text-xs leading-5 text-slate-300"
              >
                <p>
                  <span className="text-slate-100">Problem:</span> {project.problem}
                </p>
                <p>
                  <span className="text-slate-100">Solution:</span> {project.solution}
                </p>
                <p>
                  <span className="text-slate-100">Outcome:</span> {project.outcome}
                </p>
              </motion.div>
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="interactive-lift mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white transition hover:bg-white/10"
              >
                View Case Study
                <ArrowRight size={14} />
              </button>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-lift inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-4 py-2 text-xs font-semibold text-emerald-100 shadow-[0_0_20px_-6px_rgba(52,211,153,0.6)] hover:bg-emerald-400/25 hover:shadow-[0_0_28px_-6px_rgba(52,211,153,0.85)] transition"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Live Website
                    <ExternalLink size={13} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-lift inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-100 hover:bg-cyan-400/15"
                  >
                    GitHub
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="glass relative w-full max-w-2xl rounded-3xl p-7 md:p-8"
            >
              <h3 className="text-2xl font-semibold text-white">{selectedProject.title}</h3>
              <p className="mt-3 text-slate-300">{selectedProject.statement}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selectedProject.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
                <p>
                  <span className="font-medium text-white">Problem</span>
                  <br />
                  {selectedProject.problem}
                </p>
                <p>
                  <span className="font-medium text-white">Solution</span>
                  <br />
                  {selectedProject.solution}
                </p>
                <p>
                  <span className="font-medium text-white">Outcome</span>
                  <br />
                  {selectedProject.outcome}
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-5 py-2.5 text-sm font-semibold text-emerald-100 shadow-[0_0_20px_-6px_rgba(52,211,153,0.6)] hover:bg-emerald-400/25 transition"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Live Website
                    <ExternalLink size={14} />
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-2.5 text-sm text-cyan-100 hover:bg-cyan-400/15 transition"
                  >
                    GitHub
                    <ExternalLink size={14} />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs text-white transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="timeline" className="snap-section mx-auto max-w-6xl px-5 py-16 md:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-2xl font-semibold md:text-3xl"
        >
          Journey
        </motion.h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
          A simple timeline of how I learned by building, one step at a time.
        </p>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => setShowFullJourney((prev) => !prev)}
            className="interactive-lift inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-100"
          >
            {showFullJourney ? "Collapse Journey" : "Expand Full Journey"}
          </button>
        </div>
        <AnimatePresence mode="wait">
          {showFullJourney ? (
            <motion.div
              key="journey-expanded"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 space-y-2"
            >
              {orderedJourney.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedJourney((prev) => (prev === item.title ? "" : item.title))
                    }
                    className={`glass w-full rounded-2xl p-4 text-left transition ${
                      item.highlight ? "border-cyan-200/40 bg-cyan-400/[0.06]" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <GraduationCap
                          className={item.highlight ? "mt-0.5 text-cyan-200" : "mt-0.5 text-violet-300"}
                          size={18}
                        />
                        <div>
                          <h3 className="font-medium text-white">{item.title}</h3>
                          <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                        </div>
                      </div>
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs ${
                          item.highlight
                            ? "border-cyan-200/40 text-cyan-100"
                            : "border-white/15 text-slate-200"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>
                    <AnimatePresence initial={false}>
                      {expandedJourney === item.title && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-8 pr-2 pt-3 text-sm text-slate-300"
                        >
                          {item.phase}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="journey-stack"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative mt-6 h-52"
            >
              {orderedJourney.slice(0, 4).map((item, idx) => (
                <motion.button
                  key={item.title}
                  type="button"
                  onClick={() => setShowFullJourney(true)}
                  whileHover={{ y: -2 }}
                  className={`glass absolute left-0 right-0 rounded-2xl p-4 text-left ${
                    idx === 0 ? "z-40" : idx === 1 ? "z-30" : idx === 2 ? "z-20" : "z-10"
                  } ${item.highlight ? "border-cyan-200/40 bg-cyan-400/[0.06]" : ""}`}
                  style={{
                    top: `${idx * 24}px`,
                    transform: `scale(${1 - idx * 0.035})`
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <GraduationCap
                        className={item.highlight ? "text-cyan-200" : "text-violet-300"}
                        size={16}
                      />
                      <span className="text-sm font-medium text-white">{item.title}</span>
                    </div>
                    <span className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-slate-200">
                      {item.period}
                    </span>
                  </div>
                </motion.button>
              ))}
              <p className="absolute bottom-0 left-1 text-xs text-slate-400">
                Current phase is on top. Click stack to expand full journey.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="snap-section mx-auto max-w-6xl px-5 py-8 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 14 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-cyan-300/35 bg-gradient-to-r from-cyan-500/20 via-slate-900/70 to-violet-500/20 p-7 text-center md:p-9"
        >
          <motion.div
            aria-hidden
            animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.03, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.2),transparent_45%)]"
          />
          <motion.span
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto inline-flex rounded-full border border-cyan-200/35 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-100"
          >
            Open to Work
          </motion.span>
          <h3 className="relative mt-4 text-2xl font-semibold text-white md:text-3xl">
            Available for full-time roles from June 2026
          </h3>
          <div className="relative mt-5 flex flex-wrap justify-center gap-2">
            {[
              "Data Analytics",
              "Business Intelligence",
              "Operations & Management",
              "MTO / Leadership Programs",
              "Software Engineering",
              "AI / ML (Entry Level)"
            ].map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-slate-100"
              >
                {role}
              </span>
            ))}
          </div>
          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_-8px_rgba(56,189,248,0.8)] transition hover:-translate-y-0.5"
            >
              <ExternalLink size={15} />
              View Resume Online
            </a>
            <a
              href="/Corporate_resume.pdf"
              download="Ridhwan_Corporate_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
            >
              <Download size={15} />
              Download PDF
            </a>
            <a
              href="mailto:ridhwankhan03@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-5 py-2.5 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Mail size={15} />
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      <section className="snap-section mx-auto max-w-6xl px-5 py-12 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="glass w-full overflow-hidden rounded-3xl p-6 md:p-8"
        >
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-semibold md:text-2xl">Certification Highlights</h3>
            <div className="flex items-center gap-2">
              <span className="mr-2 hidden rounded-full border border-cyan-300/25 bg-cyan-400/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-cyan-100 md:inline-flex">
                Auto Play
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveCert((prev) => (prev - 1 + certifications.length) % certifications.length)
                }
                className="interactive-lift rounded-full border border-white/20 p-2 text-slate-100 hover:bg-white/10"
                aria-label="Previous certification"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => setActiveCert((prev) => (prev + 1) % certifications.length)}
                className="interactive-lift rounded-full border border-white/20 p-2 text-slate-100 hover:bg-white/10"
                aria-label="Next certification"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.a
              key={certifications[activeCert].title}
              href={certifications[activeCert].link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -26 }}
              transition={{ duration: 0.35 }}
              className="group grid gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900/70 to-violet-500/10 p-5 md:grid-cols-[1.1fr_0.9fr] md:p-7"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-cyan-100/85">Certification</p>
                <h4 className="mt-2 text-xl font-semibold text-white">{certifications[activeCert].title}</h4>
                <p className="mt-2 text-sm text-slate-300">{certifications[activeCert].description}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
                  {certifications[activeCert].provider}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />
                <p className="relative text-sm text-slate-200">
                  Slide-style showcase. Click to open credential.
                </p>
                <div className="relative mt-6 inline-flex items-center gap-2 text-sm text-white">
                  View certificate
                  <ExternalLink size={15} className="transition group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.a>
          </AnimatePresence>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              key={activeCert}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "linear" }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
            />
          </div>
          <div className="mt-4 flex gap-2">
            {certifications.map((item, idx) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Go to ${item.title}`}
                onClick={() => setActiveCert(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeCert ? "w-8 bg-cyan-300" : "w-3 bg-white/25"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="snap-section mx-auto max-w-6xl px-5 py-10 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="glass rounded-3xl p-6 md:p-7"
        >
          <div className="mb-5 flex items-center gap-2 text-sm text-cyan-100">
            <MessageCircleQuestion size={16} />
            About My Work
          </div>
          <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-2">
              {askItems.map((item) => (
                <button
                  key={item.question}
                  type="button"
                  onClick={() => setActiveAsk(item.question)}
                  className={`interactive-lift w-full rounded-2xl border px-4 py-3 text-left text-sm ${
                    activeAsk === item.question
                      ? "border-cyan-200/40 bg-cyan-400/10 text-cyan-50"
                      : "border-white/10 bg-white/[0.02] text-slate-200 hover:bg-white/[0.05]"
                  }`}
                >
                  {item.question}
                </button>
              ))}
            </div>

            <div className="relative min-h-40 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <AnimatePresence mode="wait">
                {askItems
                  .filter((item) => item.question === activeAsk)
                  .map((item) => (
                    <motion.div
                      key={item.question}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mb-3 inline-flex max-w-[90%] rounded-2xl rounded-bl-md border border-white/15 bg-white/[0.05] px-3 py-2 text-sm text-slate-100">
                        {item.question}
                      </div>
                      <div className="ml-auto inline-flex max-w-[95%] rounded-2xl rounded-br-md border border-cyan-200/20 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-3 py-2 text-sm text-slate-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="snap-section mx-auto max-w-6xl px-5 py-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-10"
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Let&apos;s Build Something Impactful</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            If you&apos;re hiring for software engineering, AI/ML, or data roles, I&apos;d love to
            connect and discuss how I can contribute.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:ridhwankhan03@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
            >
              <Mail size={15} /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/ridhwan1/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href="https://github.com/ridhwankhan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Github size={15} /> GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
