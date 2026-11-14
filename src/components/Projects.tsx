import { Code2, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">
        <span className="text-brand">/</span> Projects
      </h1>

      {/* One card per project in projects.ts */}
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="overflow-hidden rounded-lg border border-white/10 bg-panel transition hover:-translate-y-1 hover:border-brand"
          >
            {/* Banner: aspect-video keeps 16:9, object-cover crops instead of stretching */}
            <img
              src={p.banner}
              alt={`${p.title} banner`}
              className="aspect-video w-full object-cover"
            />

            <div className="p-5">
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

              {/* Links */}
              <div className="mt-5 flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-brand-light"
                >
                  <Code2 size={18} /> Code
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-brand-light"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}