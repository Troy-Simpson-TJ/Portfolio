import { motion  } from "framer-motion";

const links = ["aboutt", "projects", "contact"];

export default function Header() {
    return(
        <>
         {/* Sticky navbar with blurred background */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-bold text-brand-light">TJ.dev</a> 
          <ul className="flex gap-6 text-sm capitalize">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l}`} className="transition hover:text-brand-light">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 text-brand-light">Hi, my name is</p>
          <h1 className="text-5xl font-bold sm:text-7xl">Troy Simpson</h1>
          <h2 className="mt-3 text-3xl text-white/60 sm:text-5xl">I learn fast and build across tech.</h2>
          <p className="mt-6 max-w-xl text-white/70">
            A growing software developer curious about multiple fields of tech. 
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#projects" className="rounded bg-brand px-6 py-3 font-medium transition hover:bg-brand-light">
              View Projects
            </a>
            <a href="#contact" className="rounded border border-brand px-6 py-3 transition hover:bg-brand/10">
              Contact Me
            </a>
          </div>
        </motion.div>
      </header>
        </>
    );
}