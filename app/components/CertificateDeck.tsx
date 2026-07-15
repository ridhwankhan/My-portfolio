"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type Certificate = {
  title: string;
  provider: string;
  description: string;
  link: string;
  image: string;
  date: string;
};

const STACK_DEPTH = 4;
const AUTO_MS = 4500;
const SWIPE_THRESHOLD = 70;

type Props = {
  certifications: Certificate[];
};

export default function CertificateDeck({ certifications }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragMoved = useRef(false);
  const total = certifications.length;

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % total) + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (paused || total < 2) return;
    const timer = setInterval(() => goTo(active + 1), AUTO_MS);
    return () => clearInterval(timer);
  }, [active, paused, goTo, total]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goTo(active + 1);
      if (event.key === "ArrowLeft") goTo(active - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 8) dragMoved.current = true;
    if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -400) {
      goTo(active + 1);
    } else if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > 400) {
      goTo(active - 1);
    }
  };

  const current = certifications[active];

  return (
    <section id="certifications" className="snap-section mx-auto max-w-6xl px-5 py-12 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="cert-deck relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.07] via-slate-950/80 to-slate-950/95 p-6 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.55)] md:p-9"
      >
        <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-8 h-52 w-52 rounded-full bg-violet-500/15 blur-3xl" />

        <div className="relative mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-200/70">
              Credentials
            </p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Certification Deck
            </h3>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Flip through the stack — swipe, arrows, or thumbnails. Front card stays sharp;
              the rest sit behind like layered paper.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                paused
                  ? "border-amber-300/30 bg-amber-400/10 text-amber-100"
                  : "border-emerald-300/30 bg-emerald-400/10 text-emerald-100"
              }`}
            >
              {paused ? "Paused" : "Live"}
            </span>
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              className="rounded-full border border-white/15 bg-white/[0.04] p-2.5 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              aria-label="Previous certification"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              className="rounded-full border border-white/15 bg-white/[0.04] p-2.5 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              aria-label="Next certification"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="relative mx-auto h-[270px] w-full perspective-[1400px] sm:h-[340px] md:h-[380px]">
            {/* Soft stage glow under the deck */}
            <div className="pointer-events-none absolute inset-x-16 bottom-2 h-16 rounded-full bg-cyan-400/20 blur-2xl sm:inset-x-24" />

            {certifications.map((cert, i) => {
              const depth = (i - active + total) % total;
              if (depth >= STACK_DEPTH) return null;
              const isFront = depth === 0;

              return (
                <motion.div
                  key={cert.image}
                  className={`absolute inset-x-3 top-3 sm:inset-x-10 md:inset-x-16 ${
                    isFront ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
                  }`}
                  style={{
                    zIndex: STACK_DEPTH - depth,
                    transformOrigin: "50% 100%",
                    willChange: "transform, filter, opacity"
                  }}
                  initial={false}
                  animate={{
                    y: depth * -28,
                    scale: 1 - depth * 0.07,
                    rotateZ: depth * -2.4,
                    opacity: depth === 0 ? 1 : Math.max(0.35, 1 - depth * 0.22),
                    filter: depth === 0 ? "blur(0px)" : `blur(${1.5 + depth * 1.2}px)`
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 24,
                    mass: 0.55
                  }}
                  drag={isFront ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragStart={() => {
                    dragMoved.current = false;
                  }}
                  onDragEnd={isFront ? onDragEnd : undefined}
                >
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={isFront ? 0 : -1}
                    aria-hidden={!isFront}
                    onClick={(event) => {
                      if (dragMoved.current) {
                        event.preventDefault();
                        dragMoved.current = false;
                      }
                    }}
                    className={`block overflow-hidden rounded-2xl bg-white transition ${
                      isFront
                        ? "border border-cyan-200/50 shadow-[0_28px_70px_-24px_rgba(34,211,238,0.55),0_12px_40px_-18px_rgba(0,0,0,0.7)] ring-1 ring-white/40"
                        : "border border-white/20 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.65)]"
                    }`}
                  >
                    <div className="relative aspect-[1.42/1] w-full">
                      <Image
                        src={cert.image}
                        alt={`${cert.title} — ${cert.provider}`}
                        fill
                        className="object-contain object-center p-1.5 sm:p-2.5"
                        sizes="(max-width: 768px) 92vw, 700px"
                        priority={isFront}
                      />
                      {!isFront && (
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/25 to-slate-950/45" />
                      )}
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                {current.provider}
                <span className="text-slate-600">·</span>
                {current.date}
              </div>
              <h4 className="mx-auto mt-3 max-w-2xl text-lg font-semibold leading-snug text-white md:text-xl">
                {current.title}
              </h4>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                {current.description}
              </p>
              <a
                href={current.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/20"
              >
                Open credential
                <ExternalLink size={13} />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative mt-7 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            key={`${active}-${paused}`}
            initial={{ width: "0%" }}
            animate={{ width: paused ? "0%" : "100%" }}
            transition={{ duration: paused ? 0 : AUTO_MS / 1000, ease: "linear" }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400"
          />
        </div>

        {/* Thumbnail strip */}
        <div className="relative mt-5 flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {certifications.map((item, idx) => {
            const selected = idx === active;
            return (
              <button
                key={item.image}
                type="button"
                aria-label={`Show ${item.title}`}
                aria-current={selected}
                onClick={() => goTo(idx)}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border transition md:h-16 md:w-24 ${
                  selected
                    ? "border-cyan-300/60 ring-2 ring-cyan-400/30"
                    : "border-white/10 opacity-55 hover:opacity-90"
                }`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="96px"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-1 pb-0.5 pt-3 text-[8px] font-medium text-white">
                  {item.provider}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-center text-[11px] text-slate-500">
          {active + 1} / {total} · swipe or use ← →
        </p>
      </motion.div>
    </section>
  );
}
