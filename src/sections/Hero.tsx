import { ArrowRight, Github, Terminal } from "lucide-react";

export function Hero(): JSX.Element {
  return (
    <section id="top" className="relative px-5 pt-20 pb-28 sm:pt-28 sm:pb-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-accent-blue/10 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-dark-panel/60 backdrop-blur text-[11px] font-mono uppercase tracking-[1.5px] text-text-secondary mb-8 animate-fade-up">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-green" />
          </span>
          CS 153 · Stanford · Frontier Systems
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-[1.05] animate-fade-up">
          The DevOps team is{" "}
          <span className="text-accent-green">five agents</span>
          <br />
          and <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">one human in the loop.</span>
        </h1>

        <p
          className="max-w-2xl mx-auto text-lg text-text-secondary leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Olympus is a multi-agent system that operates a real cluster — Kubernetes, Terraform,
          Ansible, code edits, and any MCP-compatible tool — behind a chat-style dashboard.
          Tool-gated, human-approved, append-only audited, reversible by default.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <a
            href="https://0lympu5.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-green text-dark-primary font-semibold hover:bg-accent-green-dim transition-colors"
          >
            Open the dashboard <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com/01p5/01p5"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border-subtle bg-dark-panel hover:border-border-active hover:bg-dark-control text-text-primary transition-colors"
          >
            <Github size={16} /> View source
          </a>
        </div>

        <div
          className="mt-16 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <div className="rounded-lg border border-border-subtle bg-dark-secondary/80 backdrop-blur overflow-hidden shadow-2xl shadow-black/40 text-left">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border-subtle bg-dark-tertiary">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-red/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent-yellow/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent-green/70" />
              </div>
              <span className="ml-2 font-mono text-[11px] text-text-muted">olympus@dev-vm</span>
            </div>
            <div className="px-4 py-4 font-mono text-[13px] leading-relaxed">
              <div className="text-text-muted flex items-start gap-2">
                <Terminal size={13} className="mt-0.5 shrink-0" />
                <span className="text-text-primary">
                  <span className="text-accent-green">$</span> olympus "list pods in the default
                  namespace"
                </span>
              </div>
              <div className="mt-3 pl-5 text-text-secondary">
                <div>
                  <span className="text-accent-blue">→ router</span> picked{" "}
                  <span className="text-text-primary">sysadmin</span>
                </div>
                <div>
                  <span className="text-accent-blue">→ tool</span>{" "}
                  <span className="text-text-primary">kubectl_get</span>{" "}
                  <span className="text-text-muted">(read-only · no approval needed)</span>
                </div>
                <div className="text-accent-green">✓ 7 pods returned · $0.0021 · 1.2s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
