import { Github, ExternalLink } from "lucide-react";
import { Wordmark } from "./Wordmark";

export function Nav(): JSX.Element {
  return (
    <header className="sticky top-0 z-30 bg-dark-secondary/70 backdrop-blur-xl border-b border-border-subtle">
      <div className="max-w-6xl mx-auto flex items-center h-16 px-5 gap-6">
        <a href="#top" className="flex items-baseline gap-2 group">
          <Wordmark />
          <span className="hidden sm:inline text-[10px] uppercase tracking-[1.5px] text-text-muted font-mono">
            dev ops platform
          </span>
        </a>
        <nav className="hidden md:flex gap-1 ml-2">
          {[
            ["Invariants", "#invariants"],
            ["Agents", "#agents"],
            ["Architecture", "#architecture"],
            ["Intelligence", "#intelligence"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-3 py-2 rounded-md text-sm text-text-secondary hover:text-text-primary hover:bg-dark-panel transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex-1" />
        <a
          href="https://0lympu5.com"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-green transition-colors"
        >
          0lympu5.com <ExternalLink size={13} />
        </a>
        <a
          href="https://github.com/01p5/01p5"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border-subtle bg-dark-panel hover:border-border-active hover:bg-dark-control text-sm text-text-primary transition-colors"
        >
          <Github size={14} /> GitHub
        </a>
      </div>
    </header>
  );
}
