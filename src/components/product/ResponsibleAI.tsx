import { UserCheck, FileCheck, Eye, AlertTriangle } from "lucide-react";

const principles = [
  {
    icon: UserCheck,
    title: "A human always holds the pen",
    body: "Emify agents draft, flag, calculate and recommend — but every figure that enters a public disclosure is reviewed and approved by a named member of your team. We log who approved what and when. There is no auto-publish.",
  },
  {
    icon: FileCheck,
    title: "Every number has a source",
    body: "Emify operates on the principle that any figure in any disclosure must be traceable to a primary source document in two clicks. If we can't source it, we don't surface it.",
  },
  {
    icon: Eye,
    title: "Transparent uncertainty",
    body: "When data is estimated, interpolated or of low confidence, Emify says so — explicitly, in the review interface, in the disclosure and in the audit trail. We do not present estimates as facts.",
  },
  {
    icon: AlertTriangle,
    title: "Conservative by default",
    body: "Where methodology allows discretion, Emify defaults to the more conservative interpretation. Your legal exposure matters more than a better-looking emission figure.",
  },
];

export default function ResponsibleAI() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
              Responsible AI
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              "A human always holds the pen."
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Emify's agents are powerful — but your sustainability disclosures carry legal liability.
              Every design decision we've made reflects that reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground mb-1">{title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
