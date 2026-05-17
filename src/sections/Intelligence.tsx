import { Brain, ThumbsUp, RotateCcw, Activity, Plug } from "lucide-react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";

const ITEMS = [
  {
    icon: Brain,
    title: "Memory + retrieval",
    body: "Every task is stored. The next prompt retrieves top-K similar prior runs by lexical Jaccard or OpenAI embeddings (cosine), and prepends them as untrusted context.",
  },
  {
    icon: ThumbsUp,
    title: "Feedback loop",
    body: "👍 / 👎 / correction on any turn. Bad runs get filtered, good ones get a similarity boost, corrections ride into future prompt blocks.",
  },
  {
    icon: RotateCcw,
    title: "Per-verb rollback",
    body: "Three of four agents opt in: programmer (write/edit/delete), sysadmin (delete_pod), terraform (tf_apply). The undo gets the same approval treatment as the original.",
  },
  {
    icon: Activity,
    title: "Telemetry",
    body: "Per-instance cost accumulator, per-turn cost chip, footer aggregate. Memory entries carry their cost so the system can prefer cheap precedents.",
  },
  {
    icon: Plug,
    title: "MCP integration",
    body: "Stdio and Streamable-HTTP transports, both stdlib-only. Per-server destructive allowlist is owned by the integrator — not the server author.",
  },
];

export function Intelligence(): JSX.Element {
  return (
    <Section
      id="intelligence"
      eyebrow="Beyond the loop"
      title="The agents get better the more you use them."
      description="The five invariants are the floor. On top of that floor: memory of prior runs, a feedback loop, reversible destruction, real cost telemetry, and a path to any third-party tool that speaks MCP."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ITEMS.map(({ icon: Icon, title, body }) => (
          <Card key={title} className="p-6 group">
            <div className="h-9 w-9 rounded-md bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue mb-4 group-hover:bg-accent-blue/20 transition-colors">
              <Icon size={17} strokeWidth={2} />
            </div>
            <h3 className="font-display text-base font-semibold text-text-primary mb-2">
              {title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
