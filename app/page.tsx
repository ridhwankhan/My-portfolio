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
  FileText,
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
    title: "Multimodal ML for Sustainable Crop Decision Support",
    stack: ["Research", "CNN", "XGBoost", "Remote Sensing", "Streamlit"],
    link: null,
    liveLink: null,
    statement:
      "Defended thesis (98% marks) — multimodal ML for soil classification and crop yield decision support in Bangladesh.",
    problem:
      "Paired image-yield datasets are scarce, and single-modality models struggle to turn soil imagery, satellite sensing, and climate history into local actionable advice.",
    solution:
      "Built a cascaded multimodal ML framework: EfficientNet-B0 classifies soil imagery (macro F1 0.870), XGBoost predicts Aman rice and Wheat yields (R² 0.847 / 0.512 on temporal holdout), and decision-level fusion combines both under agronomic rules in a Streamlit GUI.",
    outcome:
      "Successfully defended the undergraduate thesis with 98% marks, delivering a multimodal system for district-level soil classification and yield forecasting.",
    abstract:
      "Bangladesh's agriculture land management is facing unprecedented climate volatility and soil degradation, which are forcing Bangladesh to take multi-source data into account for proper decision making on a local basis. A cascaded multimodal machine learning approach has been proposed to classify soil conditions and predict Aman rice and Wheat yields at several districts. This study starts with the fusion of satellite, climate and historical yield data, and a preparation of a soil image manifest in balance. Two parallel machine learning pipelines are then trained. The raw imagery is classified into local soil types using a strong macro F1 score of 0.870 Convolutional Neural Network (EfficientNet-B0). XGBoost ensemble models are built for each crop to predict the yield of each crop. The yield models have a strong potential of prediction on a temporal holdout with an R² of 0.847 for Aman rice and 0.512 for Wheat. The key challenge is the scarcity of paired image-yield datasets. Thus, the system uses decision-level fusion (DLF) to readily integrate the CNN soil predictions with the XGBoost yield predictions, guided by agronomic rules. Last, this multimodal application is implemented using a Streamlit interactive GUI for actionable support to stakeholders' decision making.",
    keywords:
      "Multimodal machine learning, soil image classification, crop yield forecasting, decision-level fusion, Bangladesh agriculture, EfficientNet-B0, XGBoost, remote sensing",
    researchPdf: null
  },
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
      "Delivered a live production storefront with secure payments, role-based admin, and measurable early customer traction.",
    abstract: null,
    keywords: null,
    researchPdf: null
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
      "Deployed a production SaaS on Vercel that monitors listings and supports ongoing user and account moderation.",
    abstract: null,
    keywords: null,
    researchPdf: null
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
      "Shipped a live demo at fiducia-bank.vercel.app that models production-grade secure storage, audit-ready crypto checks, and role-aware authorization paths.",
    abstract: null,
    keywords: null,
    researchPdf: null
  },
  {
    title: "Project Signal Sweep",
    stack: ["Python", "OpenGL", "Bleak", "Bluetooth"],
    link: "https://github.com/ridhwankhan/Project-Signal-Sweep",
    liveLink: null,
    statement:
      "Nearby Bluetooth devices are hard to interpret without a clear spatial, real-time visualization.",
    problem:
      "Raw Bluetooth scans lack an intuitive interface for presence, signal strength, and device enter/leave events.",
    solution:
      "Built a Python + OpenGL CSE423 computer-graphics radar: real-time BLE scanning (Bleak), 3D radar sweep animation, theme modes (Green/Blue/Orange), play/pause and speed controls, and audio notifications for device detected/lost.",
    outcome:
      "Delivered an interactive radar application that maps nearby Bluetooth devices onto a live 3D sweep display with keyboard/mouse controls.",
    abstract: null,
    keywords: null,
    researchPdf: null
  },
  {
    title: "Meta-Visual Forensics — Deepfake & Image Manipulation Detection",
    stack: ["Deep Learning", "CNN", "Metadata", "Computer Vision"],
    link: null,
    liveLink: null,
    statement:
      "Deepfake and image-tampering detection is weaker when models rely on visual cues alone.",
    problem:
      "Visual-only detectors miss metadata anomalies, and metadata-only models ignore visual manipulation artifacts common in social-media uploads.",
    solution:
      "Designed a hybrid CSE427 pipeline: CNN visual branch (ResNet/EfficientNet/MobileNet) + metadata MLP (EXIF fields), fused embeddings for real vs fake/tampered prediction, with Grad-CAM and SHAP-style explainability, FaceForensics++ / ExifForensics / Celeb-DF evaluation plans.",
    outcome:
      "Produced a forensic research plan and hybrid architecture for deepfake + manipulation detection that combines visual evidence with metadata integrity signals.",
    abstract:
      "CSE427 Meta-Visual Forensics detects deepfakes and image manipulations with a hybrid deep-learning design. Phase 1 prepares a hybrid dataset from FaceForensics++ (and optional Celeb-DF) visual frames plus EXIF metadata (camera model, software, timestamp, ISO, GPS, compression), synthesizing metadata anomalies for fake samples. Phase 2 builds a visual CNN branch (transfer learning) and a metadata MLP branch, then fuses embeddings (optional attention) into a binary classifier. Phase 3 trains the hybrid model against CNN-only and MLP-only baselines with cross-dataset checks. Phase 4 adds explainability via Grad-CAM/saliency for visuals and feature-importance/SHAP for metadata. Phase 5–6 cover robustness (JPEG/resize), metrics (Accuracy, F1, ROC-AUC), and paper-ready reporting. Novelty focuses on hybrid visual + metadata forensics rather than CNN-only detection.",
    keywords:
      "Deepfake detection, image forensics, hybrid CNN + metadata MLP, EXIF anomalies, Grad-CAM, FaceForensics++",
    researchPdf: null
  },
  {
    title: "Multi-Class Text Classification with Deep Learning",
    stack: ["NLP", "TensorFlow", "Word2Vec", "LSTM", "GRU"],
    link: "https://github.com/ridhwankhan/NLP-II-_project",
    liveLink: null,
    statement:
      "Question-answer text needs reliable multi-class classification across classical ML and deep sequence models.",
    problem:
      "Choosing between TF-IDF baselines and embedding-based RNN variants is unclear without a controlled experimental pipeline.",
    solution:
      "Built a CSE440 NLP pipeline with EDA, cleaning/lemmatization, TF-IDF and Skip-gram Word2Vec representations, then compared Random Forest against DNN, RNN, GRU, LSTM, and bidirectional variants in TensorFlow/Keras.",
    outcome:
      "Delivered a complete notebook-driven comparison of traditional and deep architectures for multi-class text classification.",
    abstract: null,
    keywords: null,
    researchPdf: null
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
      "Achieved smoother real-time stabilization and stronger hardware-software control integration.",
    abstract: null,
    keywords: null,
    researchPdf: null
  }
];

const certifications = [
  {
    title: "Foundations of Business Strategy",
    provider: "University of Virginia",
    description: "Core strategy frameworks from Darden School of Business via Coursera.",
    link: "https://coursera.org/verify/3JZEZRXD8O2X",
    image: "/certifications/uva-foundations-business-strategy.jpeg",
    date: "Aug 2026"
  },
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
  const rotatingWords = ["business operations", "data-driven decisions", "leadership tracks"];
  const [activeWord, setActiveWord] = useState(0);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [abstractProject, setAbstractProject] = useState<(typeof projects)[number] | null>(null);
  const [activeAsk, setActiveAsk] = useState<string | null>("What do you focus on?");
  const [showFullJourney, setShowFullJourney] = useState(false);
  const [expandedJourney, setExpandedJourney] = useState("Final Year (Current)");
  const askItems = [
    {
      question: "What do you focus on?",
      answer:
        "Business operations, ownership, and data-driven decision making — from family e-commerce fulfillment to live products like Shoukhin, KAIRO, and Fiducia Bank."
    },
    {
      question: "What strengths do you bring?",
      answer:
        "Clear thinking, accountability, teamwork, and a mix of analytics (ML, predictive modeling) with real operational work: order handling, customer follow-up, and multi-role admin workflows."
    },
    {
      question: "How do you like to work?",
      answer:
        "I do best in environments that value ownership, clear thinking, teamwork, and continuous learning — whether the work is operational, analytical, or product-focused."
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
            Computer Science · Business & Leadership
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mt-6 max-w-4xl bg-gradient-to-r from-white via-slate-100 to-slate-500 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl"
          >
            I bring ownership, clear thinking, and data-driven decisions to business problems.
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
            RIDHWANUR RAHMAN KHAN — Computer Science graduate focused on business, operations,
            and management-trainee paths, with hands-on product and data experience.
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
                  Motivated Computer Science graduate with a strong interest in business,
                  operations, and management-trainee roles where clear thinking and ownership
                  matter.
                </p>
                <p>
                  I combine hands-on experience from family business support, peer study
                  coordination, and campus club work with a solid base in data-driven decision
                  making — including Machine Learning, predictive modeling, and real-world problem
                  analysis.
                </p>
                <p>
                  Through Shoukhin, KAIRO, and Fiducia Bank I have owned live products end to end —
                  from customer operations and admin workflows to secure digital systems.
                </p>
                <p>
                  I am keen to grow where accountability, teamwork, and continuous learning are
                  valued.
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
            { icon: BriefcaseBusiness, title: "Business Support", text: "Order handling & fulfillment, customer follow-up, vendor coordination, peer study coordination, workshop logistics, multi-role admin workflows." },
            { icon: Database, title: "Analytics & Decision Making", text: "Complex data handling, predictive modeling, algorithmic problem solving, real-world problem analysis, and critical thinking." },
            { icon: Code2, title: "Modern Tech", text: "Machine Learning, Neural Networks, Deep Learning, NLP, TensorFlow, Keras, scikit-learn, pandas, NumPy, Python, SQL." }
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
                {project.abstract && (
                  <button
                    type="button"
                    onClick={() => setAbstractProject(project)}
                    className="interactive-lift inline-flex items-center gap-2 rounded-full border border-violet-300/35 bg-violet-400/15 px-4 py-2 text-xs font-semibold text-violet-100 transition hover:bg-violet-400/25"
                  >
                    <FileText size={13} />
                    Abstract
                  </button>
                )}
                {project.researchPdf && (
                  <a
                    href={project.researchPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-lift inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-400/10 px-4 py-2 text-xs font-medium text-amber-100 transition hover:bg-amber-400/20"
                  >
                    Research PDF
                    <ExternalLink size={13} />
                  </a>
                )}
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
                {selectedProject.abstract && (
                  <button
                    type="button"
                    onClick={() => {
                      setAbstractProject(selectedProject);
                      setSelectedProject(null);
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-violet-300/35 bg-violet-400/15 px-5 py-2.5 text-sm font-semibold text-violet-100 transition hover:bg-violet-400/25"
                  >
                    <FileText size={14} />
                    Abstract
                  </button>
                )}
                {selectedProject.researchPdf && (
                  <a
                    href={selectedProject.researchPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-400/10 px-5 py-2.5 text-sm text-amber-100 transition hover:bg-amber-400/20"
                  >
                    Research PDF
                    <ExternalLink size={14} />
                  </a>
                )}
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

      <AnimatePresence>
        {abstractProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            onClick={() => setAbstractProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-7 md:p-8"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200/80">
                Abstract
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                {abstractProject.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {abstractProject.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-300">{abstractProject.abstract}</p>
              {abstractProject.keywords && (
                <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-6 text-slate-400">
                  <span className="font-medium text-slate-200">Keywords: </span>
                  {abstractProject.keywords}
                </p>
              )}
              <div className="mt-7 flex flex-wrap gap-3">
                {abstractProject.researchPdf && (
                  <a
                    href={abstractProject.researchPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-400/10 px-5 py-2.5 text-sm text-amber-100 transition hover:bg-amber-400/20"
                  >
                    Open Research PDF
                    <ExternalLink size={14} />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setAbstractProject(null)}
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
            Resume
          </motion.span>
          <h3 className="relative mt-4 text-2xl font-semibold text-white md:text-3xl">
            See the full profile
          </h3>
          <p className="relative mx-auto mt-3 max-w-xl text-sm text-slate-300">
            View or download the Business &amp; Leadership CV, or jump to contact details below.
          </p>
          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_-8px_rgba(56,189,248,0.8)] transition hover:-translate-y-0.5"
            >
              <ExternalLink size={15} />
              View Resume Online
            </a>
            <a
              href="/Ridhwanur_Rahman_Khan_bm.pdf"
              download="Ridhwanur_Rahman_Khan_bm.pdf"
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
            If you&apos;re hiring and looking for someone who owns outcomes and learns fast,
            I&apos;d love to connect and discuss how I can contribute.
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
