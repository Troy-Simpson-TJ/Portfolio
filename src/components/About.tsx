import Section from "./Section";

// Skills grouped by area (better than a giant logo wall)
const skills: Record<string, string[]> = {
  Web: ["React", "TypeScript", "Tailwind CSS"],        // TODO: edit to what's true
  Backend: ["Node.js", "Python"],
  Tools: ["Git", "GitHub", "Netlify"],
};

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-2xl text-white/70">
        {/* TODO: write 2-3 honest sentences about your journey */}
        I'm a software developer early in my career, interested in several areas of tech.
        I pick up new tools quickly and learn best by building real things.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="rounded-lg border border-white/10 bg-panel p-5">
            <h3 className="mb-3 font-semibold text-brand-light">{group}</h3>
            <ul className="space-y-1 text-sm text-white/70">
              {items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Highlights the quick-learner angle */}
      <p className="mt-8 text-sm text-white/60">
        <span className="text-brand-light">Currently exploring:</span> {/* TODO */} AI/ML, cloud, and mobile development.
      </p>
    </Section>
  );
}