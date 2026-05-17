import { Shield, UserCheck, ScrollText, Radio, Undo2 } from "lucide-react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";

const INVARIANTS = [
  {
    icon: Shield,
    title: "Tool-gated execution",
    body: "Each agent declares its tools and destructive verbs up front. The runtime literally cannot call something outside the declaration — the sysadmin agent cannot run `terraform apply`, no matter what the LLM emits.",
    tone: "text-accent-green",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-loop on destruction",
    body: "Anything in `destructive_verbs` re-enters through an ApprovalHook before shelling out. Three implementations ship — CLI prompt, dashboard sidebar, and HTTP webhook.",
    tone: "text-accent-blue",
  },
  {
    icon: ScrollText,
    title: "Append-only audit",
    body: "Every tool call is logged twice — pre-execution with the approval decision, post-execution with the result. JSONL on disk, or in-memory for tests. Nothing is overwritten.",
    tone: "text-accent-yellow",
  },
  {
    icon: Radio,
    title: "Bus-based observability",
    body: "The orchestrator publishes `task_started → agent_picked → tool_call → approval_request → tool_result → task_done` to a Bus. The dashboard's SSE stream just relays it. Default in-memory; opt-in Redis Streams.",
    tone: "text-accent-orange",
  },
  {
    icon: Undo2,
    title: "Reversibility on destruction",
    body: "Every successful destructive call captures its inverse before running. Executing a rollback re-routes through the same approval gate — the undo also needs a human nod.",
    tone: "text-accent-red",
  },
];

export function Invariants(): JSX.Element {
  return (
    <Section
      id="invariants"
      eyebrow="The design DNA"
      title="Five invariants. Every component arranges them the same way."
      description="Agents are LLM-driven and unpredictable. The runtime around them is not. These five constraints are what make it safe to hand a model real production verbs."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {INVARIANTS.map(({ icon: Icon, title, body, tone }) => (
          <Card key={title} className="p-6">
            <Icon className={tone} size={22} strokeWidth={2} />
            <h3 className="font-display text-lg font-semibold text-text-primary mt-4 mb-2">
              {title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
