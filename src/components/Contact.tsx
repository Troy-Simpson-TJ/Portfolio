import { Mail, GitBranch } from "lucide-react";
import Section from "./Section";

export default function Contact() {
  return (
    <>
      <Section id="contact" title="Contact">
        <p className="max-w-xl text-white/70">
          I'm open to opportunities and always happy to chat. Say hello!
        </p>
        {/* mailto keeps it simple: no backend needed */}
        <a
          href="mailto:you@example.com" /* TODO */
          className="mt-6 inline-flex items-center gap-2 rounded bg-brand px-6 py-3 font-medium transition hover:bg-brand-light"
        >
          <Mail size={18} /> Email Me
        </a>
        <div className="mt-8 flex gap-5">
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-brand-light"><GitBranch /></a>
        </div>
      </Section>
      <footer className="border-t border-white/10 py-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Your Name
      </footer>
    </>
  );
}