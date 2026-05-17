import { Wordmark } from "./Wordmark";

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-border-subtle bg-dark-secondary/40">
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <Wordmark />
          <p className="text-xs text-text-muted font-mono">
            CS 153 · Stanford · built solo · 540 tests passing
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
          <a href="https://0lympu5.com" target="_blank" rel="noreferrer">
            0lympu5.com
          </a>
          <a href="https://github.com/01p5/01p5" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://cs153.stanford.edu/" target="_blank" rel="noreferrer">
            CS 153
          </a>
        </div>
      </div>
    </footer>
  );
}
