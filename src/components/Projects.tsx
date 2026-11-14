import { useRef } from "react";
import { ChevronLeft, ChevronRight, GitBranch, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  // Reference to the scrolling row so the arrow buttons can move it
  const row = useRef<HTMLDivElement>(null);

  // Scroll by roughly one card (card width + gap)
  const scroll = (dir: number) => {
    row.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <>
      <h1 className="mb-10 text-center text-3xl font-bold">
        <span className="text-brand">/</span> Projects
      </h1>

      {/* Scrolling row: snap makes each card lock into the center.
          The scrollbar is hidden; py-4 leaves room for the hover lift. */}
      <div
        ref={row}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <article
            key={p.title}
            // first:ml-auto / last:mr-auto centers the cards when they fit,
            // and lets the row scroll normally when there are more
            className="flex w-[85%] shrink-0 snap-center flex-col overflow-hidden rounded-lg border border-white/10 bg-panel transition hover:-translate-y-1 hover:border-brand first:ml-auto last:mr-auto sm:w-96"
          >
            {/* Banner: aspect-video keeps 16:9, object-cover crops instead of stretching */}
            <img
              src={p.banner}
              alt={`${p.title} banner`}
              className="aspect-video w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <p className="mt-3 text-sm text-brand-light">What I learned: {p.learned}</p>

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

              {/* Links pinned to the bottom so every card lines up */}
              <div className="mt-auto flex gap-3 pt-6">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-brand px-4 py-2 text-sm hover:bg-brand/10"
                >
                  <GitBranch size={16} /> Code
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-brand px-4 py-2 text-sm hover:bg-brand-light"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Arrows centered under the cards, shown only with 2+ projects */}
      {projects.length > 1 && (
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous project"
            className="rounded-full border border-white/10 bg-panel p-2 transition hover:border-brand hover:text-brand-light"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next project"
            className="rounded-full border border-white/10 bg-panel p-2 transition hover:border-brand hover:text-brand-light"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  );
}