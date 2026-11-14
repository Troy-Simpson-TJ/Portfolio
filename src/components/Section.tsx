import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Wraps a section with a consistent heading, spacing , and fade-in on scroll.
export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
    return (
      <motion.section
        id={id}
        className="mx-auto max-w-5xl px-6 py-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-10 text-3xl font-bold">
          <span className="text-brand">/</span> {title}
        </h2>
        {children}
      </motion.section>
    );
  }