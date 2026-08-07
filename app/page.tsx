"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
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
import CertificateDeck from "./components/CertificateDeck";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

const projects = [
  {
    title: "Shoukhin E-Commerce Platform",
    stack: ["React", "TypeScript", "Supabase"],
    link: "https://github.com/ridhwankhan/soukhin",
    liveLink: "https://soukhin.vercel.app",
    statement: "A bilingual production storefront needed secure checkout, admin control, and real payments for live customers.",
    problem:
      "Building and operating a full e-commerce stack alone meant shipping auth, catalog, payments, and admin tooling without sacrificing security or speed.",
    solution:
      "Shipped a React/TypeScript storefront with Supabase (PostgreSQL, Auth, Storage, Edge Functions), role-based admin, RLS, and bKash checkout with server-side price validation.",
    outcome:
      "Generated 25 cold-market sales in 4 days (60% net margin) and achieved a 20% repeat-purchase rate within 72 hours."
  },
  {
    title: "KAIRO — Job Monitoring SaaS",
    stack: ["Next.js", "Supabase", "Python"],
    link: "https://github.com/ridhwankhan/kairo",
    liveLink: "https://kairo-job.vercel.app",
    statement: "Job seekers waste hours manually checking career pages for new listings.",
    problem:
      "There was no unified system to automate career-page monitoring, alerts, and admin governance in one product.",
    solution:
      "Launched a live SaaS for career-page monitoring and job alerts; owned requirements, architecture, build, testing, and production deployment with admin tools for user management and messaging.",
    outcome:
      "Deployed a production SaaS on Vercel that monitors listings and supports ongoing user and account moderation."
  },
  {
    title: "Fiducia Bank — Zero-Trust Banking",
    stack: ["Django", "React", "Cryptography", "JWT", "2FA"],
    link: "https://github.com/ridhwankhan/ZERO-trust-Banking-system",
    liveLink: "https://fiducia-bank.vercel.app/",
    statement:
      "High-stakes financial systems need layered encryption, role-aware controls, and integrity checks — not just a login wall.",
    problem:
      "Traditional banking prototypes leave sessions, stored data, and transactions under-protected for real security demos and compliance workflows.",
    solution:
      "Built Fiducia Bank as a zero-trust encrypted banking platform: hardened JWT sessions with optional 2FA, encrypted data at rest, HMAC-backed transaction verification, and Admin/Authority workspaces for KYC and monitoring. Showcased at the NSU Cybersecurity Inauguration.",
    outcome:
      "Shipped a live demo at fiducia-bank.vercel.app that models production-grade secure storage, audit-ready crypto checks, and role-aware authorization paths."
  },
  {
    title: "Quadcopter Flight Controller",
    stack: ["C++", "Arduino", "Embedded Systems"],
    link: "https://github.com/ridhwankhan/Arduino-flight-controller",
    liveLink: null,
    statement: "Stable flight requires fast control loops and accurate sensor handling.",
    problem:
      "Without tuned feedback control, the quadcopter drifted and became unstable under movement.",
    solution:
      "Engineered a custom flight controller with MPU-6050 IMU sensing, ESC motor control, PID stabilization, and a 250Hz real-time control loop.",
    outcome:
      "Achieved smoother real-time stabilization and stronger hardware-software control integration."
  }
];

const certifications = [
  {
    title: "Data Visualization and Dashboards with Excel and Cognos",
    provider: "IBM",
    description: "Building dashboards and business-friendly data stories.",
    link: "https://www.coursera.org/account/accomplishments/records/NHMVLI9B3AU0",
    image: "/certifications/ibm-data-visualization.jpeg",
    date: "Feb 2026"
  },
  {
    title: "Excel Basics for Data Analysis",
    provider: "IBM",
    description: "Practical analysis workflows with spreadsheet tooling.",
    link: "https://www.coursera.org/account/accomplishments/records/MZ7XNU90NPSD",
    image: "/certifications/ibm-excel-basics.jpeg",
    date: "Feb 2026"
  },
  {
    title: "Introduction to Software Engineering",
    provider: "IBM",
    description: "Software lifecycle, process, and team collaboration basics.",
    link: "https://www.coursera.org/account/accomplishments/records/Q96T2E1H58CP",
    image: "/certifications/ibm-software-engineering.jpeg",
    date: "Oct 2024"
  },
  {
    title: "Machine Learning with Python",
    provider: "IBM",
    description: "Applied ML concepts and model-building workflow.",
    link: "https://www.credly.com/go/73syFRKm",
    image: "/certifications/ibm-machine-learning-python.png",
    date: "Oct 2024"
  },
  {
    title: "Deep Learning Essentials with Keras",
    provider: "IBM",
    description: "Deep learning foundations and neural network workflow in practice.",
    link: "https://www.credly.com/go/kZa8jAh7",
    image: "/certifications/ibm-deep-learning-keras.png",
    date: "Oct 2024"
  },
  {
    title: "Hands-on Introduction to Linux Commands and Shell Scripting",
    provider: "IBM",
    description: "Command-line automation, scripting, and system workflow efficiency.",
    link: "https://www.coursera.org/account/accomplishments/records/T2JF14B8P7W3",
    image: "/certifications/ibm-linux-shell.jpeg",
    date: "Aug 2024"
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    provider: "Google",
    description: "Business analytics mindset for asking better questions and guiding decisions.",
    link: "https://www.coursera.org/account/accomplishments/records/GMKO8YT5EDC6",
    image: "/certifications/google-data-driven-decisions.jpeg",
    date: "Aug 2024"
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    provider: "Google",
    description: "Core data thinking and analysis foundations.",
    link: "https://www.coursera.org/account/accomplishments/records/VPKDZ344UPHQ",
    image: "/certifications/google-data-foundations.jpeg",
    date: "Aug 2024"
  },
  {
    title: "App Development — Residential Semester",
    provider: "BRAC University",
    description: "Extra-curricular app development completed during Residential Semester (RS-62).",
    link: "/certifications/brac-app-development.jpeg",
    image: "/certifications/brac-app-development.jpeg",
    date: "Spring 2023"
  }
];

/** Newest entries first — current phase stays on top. */
const timeline = [
  {
    title: "Final Year (Current)",
    period: "Now",
    detail: "Computer Science at BRAC University.",
    phase:
      "Shipping production full-stack products and preparing for roles in software engineering, secure systems, and AI-assisted development.",
    highlight: true
  },
  {
    title: "Multimodal Thesis Defended",
    period: "Thesis · 98%",
    detail:
      "Defended multimodal ML thesis for agricultural land management with 98% marks.",
    phase:
      "Fused satellite NDVI, Sentinel-1 radar, climate, and soil chemistry across seven Bangladeshi districts to predict Aman rice and Wheat yields. Ensemble models (Random Forest, XGBoost) beat linear baselines (cross-validated R² above ~0.85), targeting climate-adaptive Agriculture 5.0 decision support."
  },
  {
    title: "Founded Shoukhin Lifestyle",
    period: "2026 – Present",
    detail: "Built and operate a production e-commerce storefront solo — React, TypeScript, Supabase, bKash.",
    phase:
      "Shipped secure payments, RLS-hardened auth, and bilingual checkout; drove early sales and repeat purchases."
  },
  {
    title: "Launched KAIRO SaaS",
    period: "Growth Phase",
    detail: "Took a job-monitoring product from requirements to live production deployment.",
    phase: "Owned architecture, build, testing, and admin governance for a live SaaS."
  },
  {
    title: "Built Fiducia Bank & Embedded Systems",
    period: "Hands-on Phase",
    detail:
      "Shipped Fiducia Bank (zero-trust encrypted banking, live on Vercel) and a custom Arduino flight controller.",
    phase:
      "Grew into JWT/2FA sessions, encrypted-at-rest fields, HMAC integrity checks, RBAC, and embedded C++ through end-to-end ownership."
  },
  {
    title: "Operations Associate",
    period: "2022 – Present",
    detail: "Supported order fulfillment, customer communication, and sourcing at Shilar Sokher Rannaghor.",
    phase: "Learned operations discipline running an online food and apparel business day to day."
  },
  {
    title: "Started CS Degree",
    period: "2022",
    detail: "Began Computer Science at BRAC University (CGPA 3.47).",
    phase:
      "Built foundations in programming, data structures, and systems while exploring how software creates real value."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const rotatingWords = ["full-stack apps", "secure systems", "embedded software"];
  const [activeWord, setActiveWord] = useState(0);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [activeAsk, setActiveAsk] = useState<string | null>("What do you build?");
  const [showFullJourney, setShowFullJourney] = useState(false);
  const [expandedJourney, setExpandedJourney] = useState("Final Year (Current)");
  const askItems = [
    {
      question: "What do you build?",
      answer:
        "I build production full-stack web apps, secure systems, and embedded software — from e-commerce storefronts to real-time control systems."
    },
    {
      question: "What technologies do you use?",
      answer:
        "I work with React, TypeScript, Next.js, Python, PostgreSQL/Supabase, Django, C++, and Arduino. I also use AI tools to accelerate coding and technical audits."
    },
    {
      question: "What roles interest you?",
      answer:
        "Software Engineering, Product Management, Management Trainee Officer (MTO), Data Science / Analytics, and Business Intelligence — plus related full-stack and operations tracks."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const orderedJourney = timeline;

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
            Computer Science · BRAC University
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
            RIDHWANUR RAHMAN KHAN — Computer Science undergraduate at BRAC University.
            Building production full-stack apps, secure systems, and embedded software.
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
              href="#contact"
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
                  I am a Computer Science undergraduate at BRAC University building production
                  full-stack web apps, secure systems, and embedded software.
                </p>
                <p>
                  I have shipped live products with React, TypeScript, Next.js, Python, and
                  PostgreSQL — including Shoukhin, a bilingual e-commerce storefront with secure
                  bKash payments, and KAIRO, a live job-monitoring SaaS.
                </p>
                <p>
                  My experience spans cryptography and zero-trust design — including Fiducia Bank —
                  real-time control systems on Arduino, and AI-assisted development workflows with
                  Claude, DeepSeek, ChatGPT, Gemini, and Perplexity.
                </p>
                <p>
                  I also run day-to-day operations for an online food and apparel business, and as
                  founder of Shoukhin Lifestyle I own product, engineering, and go-to-market end to
                  end.
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
            { icon: Code2, title: "Languages & Frameworks", text: "Python, C++, TypeScript, JavaScript, SQL, PHP, Bash · React, Next.js, Django, TensorFlow, Keras." },
            { icon: Database, title: "Backend & Data", text: "PostgreSQL, MySQL, Supabase, REST APIs, authentication, and Row-Level Security (RLS)." },
            { icon: BriefcaseBusiness, title: "Systems & Tools", text: "Git, Linux, Arduino, embedded systems, Vercel, DSA, and AI-assisted development workflows." }
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
          A simple timeline of how I learned by building — newest on top.
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
                Newest on top. Click stack to expand full journey.
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
            Key Roles
          </motion.span>
          <h3 className="relative mt-4 text-2xl font-semibold text-white md:text-3xl">
            Roles I&apos;m targeting
          </h3>
          <div className="relative mt-5 flex flex-wrap justify-center gap-2">
            {[
              "Software Engineer",
              "Product Management",
              "Management Trainee Officer",
              "Data Science / Analyst",
              "Business Intelligence",
              "Full-Stack Development",
              "Operations & Strategy"
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
              href="/Ridhwanur_Rahman_Khan_g.pdf"
              download="Ridhwanur_Rahman_Khan_g.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
            >
              <Download size={15} />
              Download PDF
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-5 py-2.5 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Mail size={15} />
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      <CertificateDeck certifications={certifications} />

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
