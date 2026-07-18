"use client";

import { motion } from "framer-motion";
import { Download, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative flex min-h-screen flex-col bg-slate-950 text-white"
    >
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-3.5 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/CV_Ridhwanur_Rahman_Khan.pdf"
              download="CV_Ridhwanur_Rahman_Khan.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              <Download size={13} />
              Job CV
            </a>
            <a
              href="/CVi_Ridhwanur_Rahman_Khan.pdf"
              download="CVi_Ridhwanur_Rahman_Khan.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-100 transition hover:bg-cyan-400/20"
            >
              <Download size={13} />
              Internship CV
            </a>
            <a
              href="/CV_Ridhwanur_Rahman_Khan.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10"
            >
              <ExternalLink size={13} />
              Open in Tab
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col items-center px-4 py-8 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="w-full max-w-4xl"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h1 className="text-lg font-semibold text-white md:text-xl">
                Ridhwanur Rahman Khan
              </h1>
              <p className="mt-0.5 text-xs text-slate-400">
                Professional CV · Expected graduation Oct 2026 · Open to Work
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/35 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-100">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Open to Work
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_-20px_rgba(56,189,248,0.25)]">
            <iframe
              src="/CV_Ridhwanur_Rahman_Khan.pdf#toolbar=1&navpanes=0&view=FitH"
              title="Ridhwanur Rahman Khan — Professional CV"
              className="h-[82vh] w-full"
              style={{ background: "#1e293b" }}
            />
          </div>

          <p className="mt-3 text-center text-xs text-slate-500">
            Download the{" "}
            <a
              href="/CV_Ridhwanur_Rahman_Khan.pdf"
              download="CV_Ridhwanur_Rahman_Khan.pdf"
              className="text-cyan-400 underline-offset-2 hover:underline"
            >
              job CV
            </a>{" "}
            or{" "}
            <a
              href="/CVi_Ridhwanur_Rahman_Khan.pdf"
              download="CVi_Ridhwanur_Rahman_Khan.pdf"
              className="text-cyan-400 underline-offset-2 hover:underline"
            >
              internship CV
            </a>
            . Category-tailored versions live in the repo{" "}
            <span className="text-slate-400">CVs/</span> folders.
          </p>
        </motion.div>
      </div>
    </motion.main>
  );
}
