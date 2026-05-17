import { Server, Layers, ListChecks, Hammer, Plug } from "lucide-react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";

const AGENTS = [
  {
    icon: Server,
    name: "Sysadmin",
    purview: "Kubernetes",
    tools: ["kubectl_get", "kubectl_describe", "kubectl_logs", "delete_pod", "apply_manifest"],
    destructive: ["delete_pod", "apply_manifest"],
    rollback: "delete_pod → re-apply captured pod YAML",
  },
  {
    icon: Layers,
    name: "Terraform",
    purview: "Infrastructure as code",
    tools: ["tf_init", "tf_plan", "tf_apply", "tf_state_pull", "tf_restore_state"],
    destructive: ["tf_apply", "tf_restore_state"],
    rollback: "tf_apply → tf_restore_state with prior state",
  },
  {
    icon: ListChecks,
    name: "Ansible",
    purview: "Configuration management",
    tools: ["ansible_inventory", "ansible_check", "ansible_playbook"],
    destructive: ["ansible_playbook"],
    rollback: "Deliberately deferred — a playbook IS the operation",
  },
  {
    icon: Hammer,
    name: "Programmer",
    purview: "Codebase edits",
    tools: ["read_file", "write_file", "edit_file", "delete_file", "shell_exec"],
    destructive: ["write_file", "edit_file", "delete_file", "shell_exec"],
    rollback: "write/edit/delete all reversible with prior content",
  },
  {
    icon: Plug,
    name: "MCP servers",
    purview: "Anything else",
    tools: ["any tool exposed over stdio or HTTP"],
    destructive: ["set per-server by the integrator"],
    rollback: "—",
  },
];

export function Agents(): JSX.Element {
  return (
    <Section
      id="agents"
      eyebrow="The team"
      title="Four built-in agents, plus anything MCP."
      description="Each agent owns a narrow surface and declares its tools statically. The router picks one per turn — or you can pin it manually."
    >
      <div className="grid lg:grid-cols-2 gap-4">
        {AGENTS.map(({ icon: Icon, name, purview, tools, destructive, rollback }) => (
          <Card key={name} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-dark-control border border-border-subtle flex items-center justify-center text-accent-blue">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">{name}</h3>
                  <div className="text-xs text-text-muted font-mono">{purview}</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-text-muted font-mono mb-1.5">
                  Tools
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((t) => (
                    <code
                      key={t}
                      className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-dark-control border border-border-subtle text-text-secondary"
                    >
                      {t}
                    </code>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-text-muted font-mono mb-1.5">
                  Destructive (needs approval)
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {destructive.map((t) => (
                    <Badge key={t} tone="orange">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-text-muted font-mono mb-1.5">
                  Rollback
                </div>
                <p className="text-text-secondary text-[13px]">{rollback}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
