import { ArrowRight, Github, FileText } from "lucide-react";

export function CTA(): JSX.Element {
  return (
    <section className="px-5 py-28">
      <div className="max-w-4xl mx-auto relative overflow-hidden rounded-lg border border-border-subtle bg-dark-secondary/80">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 400px 200px at 20% 0%, rgba(0,255,136,0.12), transparent 60%), radial-gradient(ellipse 500px 250px at 90% 100%, rgba(0,170,255,0.12), transparent 60%)",
          }}
        />
        <div className="relative px-8 sm:px-12 py-14 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[2px] text-accent-green mb-3">
            Try it
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
            Watch the bus light up while five agents do your DevOps.
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary mb-8">
            The dashboard is live. The source is public. The 10-week plan shipped end-to-end with
            540 tests green — go poke at it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://0lympu5.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-accent-green text-dark-primary font-semibold hover:bg-accent-green-dim transition-colors"
            >
              Open dashboard <ArrowRight size={16} />
            </a>
            <a
              href="https://github.com/01p5/01p5"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-border-subtle bg-dark-panel hover:border-border-active hover:bg-dark-control text-text-primary transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://github.com/01p5/01p5/blob/main/docs/DEMO.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-border-subtle bg-transparent hover:bg-dark-panel text-text-secondary hover:text-text-primary transition-colors"
            >
              <FileText size={16} /> 14-min demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
