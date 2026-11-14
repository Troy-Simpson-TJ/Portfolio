import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, GitBranch, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = previous
  const p = projects[index];

  // Move to the next/previous project, wrapping around at the ends
  const go = (step: number) => {
    setDirection(step);
    setIndex((i) => (i + step + projects.length) % projects.length);
  };

  // Jump straight to a project when a dot is clicked
  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">
        <span className="text-brand">/</span> Projects
      </h1>

      <div className="relative">
        {/* Slide area: animates the current project in and out */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={p.title}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg border border-white/10 bg-panel"
          >
            {/* Banner: aspect-video keeps 16:9, object-cover crops instead of stretching */}
            <img
              src={p.banner}
              alt={`${p.title} banner`}
              className="aspect-video w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-white/70">{p.description}</p>
              <p className="mt-3 text-brand-light">What I learned: {p.learned}</p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand/15 px-3 py-1 text-xs text-brand-light"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-brand px-5 py-2 hover:bg-brand/10"
                >
                  <GitBranch size={18} /> Code
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2 hover:bg-brand-light"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        {/* Arrows and dots only appear when there is more than one project */}
        {projects.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="absolute left-3 top-1/4 rounded-full bg-ink/70 p-2 backdrop-blur transition hover:bg-brand"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next project"
              className="absolute right-3 top-1/4 rounded-full bg-ink/70 p-2 backdrop-blur transition hover:bg-brand"
            >
              <ChevronRight />
            </button>

            <div className="mt-6 flex justify-center gap-2">
              {projects.map((proj, i) => (
                <button
                  key={proj.title}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${proj.title}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-brand" : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}