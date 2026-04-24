import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const timeline = [
  {
    week: "Week 1",
    action: "Download the AASB S2 standard.",
    pain: "It's 550 pages. The Scope 3 section alone is 80.",
    severity: "red",
  },
  {
    week: "Week 2",
    action: 'Google "Scope 3 emissions."',
    pain: "Three hours. Fifteen tabs. No closer to a number.",
    severity: "red",
  },
  {
    week: "Week 3",
    action: 'Email procurement: "what data do we have on suppliers?"',
    pain: "Reply arrives five days later. Two Excel files. No categories.",
    severity: "amber",
  },
  {
    week: "Weeks 4–5",
    action: "Chase three procurement managers across two time zones.",
    pain: 'Get a password-protected PDF and a promise to "look into it."',
    severity: "amber",
  },
  {
    week: "Weeks 6–8",
    action: "Try to reconcile what you have.",
    pain: "Units don't match. Years don't align. You have fragments. Not a report.",
    severity: "red",
  },
];

const dataMap = [
  { category: "Electricity consumption", scope: "Scope 2", status: "found", source: "Xero — 12 invoices matched" },
  { category: "Natural gas", scope: "Scope 1", status: "found", source: "MYOB — quarterly bills" },
  { category: "Fleet fuel", scope: "Scope 1", status: "partial", source: "3 of 7 vehicles — EV fleet untracked" },
  { category: "Business travel", scope: "Scope 3 Cat 6", status: "found", source: "Concur — 2,847 trips" },
  { category: "Purchased goods & services", scope: "Scope 3 Cat 1", status: "partial", source: "47 of 134 suppliers connected" },
  { category: "Employee commuting", scope: "Scope 3 Cat 7", status: "partial", source: "Survey: 34% response rate" },
  { category: "Upstream transport", scope: "Scope 3 Cat 4", status: "missing", source: "No data source identified" },
  { category: "Use of sold products", scope: "Scope 3 Cat 11", status: "missing", source: "No data source identified" },
];

const statusConfig = {
  found:   { label: "Connected", dot: "bg-primary",    pill: "bg-primary/20 text-primary border border-primary/30" },
  partial: { label: "Partial",   dot: "bg-amber-400",  pill: "bg-amber-400/20 text-amber-300 border border-amber-400/30" },
  missing: { label: "Missing",   dot: "bg-red-400",    pill: "bg-red-400/20 text-red-300 border border-red-400/30" },
};

const severityBorder = { red: "border-l-red-500", amber: "border-l-amber-400" };
const severityText   = { red: "text-red-300",      amber: "text-amber-300" };

export default function ScenarioA() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 gradient-hero">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary font-medium mb-8">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
            The Blank Page Problem
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            You don't know{" "}
            <span className="text-primary">what you don't have.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10 text-balance">
            Every AASB S2 first-timer hits the same wall. You're handed a standard, told to produce a
            climate disclosure, and you don't know where to start. The question isn't how to calculate
            emissions — it's what data you even have.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 text-base" asChild data-track="cta-click" data-variant="A">
              <a href="/contact#demo">Book a demo — see your data map in 60 minutes</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 text-base" asChild>
              <a href="/pricing">See pricing</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            AU data residency · SOC 2 Type II · No lock-in contracts
          </p>
        </div>
      </section>

      {/* Pain point */}
      <section id="pain-point-a" data-ab-section className="py-20 sm:py-28 bg-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* Section intro */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60 mb-4">
              Sound familiar?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Sarah's first AASB S2 report.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Head of Finance. ASX-listed manufacturing company. No dedicated sustainability team.
              First Group 1 reporter. Eight weeks to deadline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — timeline */}
            <div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
                Without emify
              </div>
              <div className="space-y-3">
                {timeline.map(({ week, action, pain, severity }) => (
                  <div
                    key={week}
                    className={`flex gap-4 rounded-xl bg-white/5 border border-white/10 border-l-4 ${severityBorder[severity as keyof typeof severityBorder]} p-4`}
                  >
                    <div className="flex-shrink-0 w-16 text-xs font-semibold text-white/30 pt-0.5 leading-tight">{week}</div>
                    <div>
                      <div className="text-sm font-semibold text-white/90 mb-0.5">{action}</div>
                      <div className={`text-xs ${severityText[severity as keyof typeof severityText]}`}>{pain}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">
                      Eight weeks later. No report. Board presentation in three days.
                    </div>
                    <div className="text-sm text-white/50 italic">
                      "I can't tell them where half these numbers came from. I don't even know what I'm missing."
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — data gap map */}
            <div>
              <div className="text-xs font-semibold text-primary/80 uppercase tracking-widest mb-5">
                With emify — in under 60 minutes
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/70">Data Readiness Map</span>
                  <div className="flex items-center gap-3">
                    {(["found", "partial", "missing"] as const).map((s) => (
                      <span key={s} className="flex items-center gap-1.5 text-xs text-white/40">
                        <span className={`h-1.5 w-1.5 rounded-full ${statusConfig[s].dot}`} />
                        {statusConfig[s].label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="divide-y divide-white/5">
                  {dataMap.map(({ category, scope, status, source }) => {
                    const cfg = statusConfig[status as keyof typeof statusConfig];
                    return (
                      <div key={category} className="px-4 py-3 flex items-center gap-3">
                        <span className={`h-2 w-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-sm text-white/90">{category}</span>
                            <span className="text-xs text-white/30">{scope}</span>
                          </div>
                          <div className="text-xs text-white/40 truncate">{source}</div>
                        </div>
                        <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${cfg.pill}`}>
                          {cfg.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="px-4 py-3 border-t border-white/10 bg-primary/10 flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  <span className="text-xs text-primary font-medium">
                    3 connected · 3 partial · 2 missing — full action plan generated
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm text-white/70 leading-relaxed">
                  Not a guess. Not a spreadsheet. A clear map of exactly what data exists, what's partial,
                  and what's genuinely missing — with the source of every figure.
                </p>
              </div>

              <div className="mt-6">
                <Button size="lg" className="w-full text-base" asChild data-track="cta-click" data-variant="A">
                  <a href="/contact#demo">Book a demo — see your data map in 60 minutes</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
