import { GitBranch, ExternalLink } from "lucide-react";
import Section from "./Section";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-lg border border-white/10 bg-panel p-6 transition hover:-translate-y-1 hover:border-brand"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.description}</p>
            <p className="mt-3 text-sm text-brand-light">What I learned: {p.learned}</p>

            {/* Field/tech tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-brand/15 px-3 py-1 text-xs text-brand-light">{t}</span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-5 flex gap-4">
              <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-brand-light">
                <GitBranch size={20} />
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live demo" className="hover:text-brand-light">
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}