import { Section } from "../components/Section";

const STEPS = [
  { tag: "user", label: "Prompt", note: 'olympus "delete the crashed pod"' },
  { tag: "router", label: "Pick agent", note: "sysadmin" },
  { tag: "agent", label: "Emit tool call", note: "delete_pod(name=api-7f4)" },
  { tag: "runtime", label: "gate_tools", note: "in declaration · destructive" },
  { tag: "approval", label: "ApprovalHook", note: "queued → human ✓" },
  { tag: "rollback", label: "Capture inverse", note: "apply_manifest(pod.yaml)" },
  { tag: "exec", label: "Shell out", note: "kubectl delete pod api-7f4" },
  { tag: "audit", label: "Append result", note: "audit.jsonl + bus event" },
];

export function Architecture(): JSX.Element {
  return (
    <Section
      id="architecture"
      eyebrow="A single turn, end-to-end"
      title="Eight stops between your prompt and a real verb."
      description="Every tool call walks the same path. The bus pings the dashboard at each stop, so you watch it happen live."
    >
      <div className="rounded-lg border border-border-subtle bg-dark-secondary/60 overflow-hidden">
        <ol className="divide-y divide-border-subtle">
          {STEPS.map(({ tag, label, note }, i) => (
            <li
              key={tag}
              className="flex items-center gap-4 px-5 py-4 hover:bg-dark-panel/40 transition-colors"
            >
              <span className="font-mono text-[11px] text-text-muted w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent-green w-24 shrink-0">
                {tag}
              </span>
              <span className="font-display text-text-primary font-medium w-44 shrink-0">
                {label}
              </span>
              <code className="font-mono text-[12px] text-text-secondary truncate">{note}</code>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
