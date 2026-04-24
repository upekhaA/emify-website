import { Button } from "@/components/ui/button";

const timeline = [
  {
    week: "Week 1",
    action: "Download the AASB S2 standard.",
    pain: "It's 550 pages. The Scope 3 section alone is 80.",
    color: "text-red-700",
    bg: "bg-red-100",
  },
  {
    week: "Week 2",
    action: 'Google “Scope 3 emissions.”',
    pain: "Three hours. Fifteen tabs. No closer to a number.",
    color: "text-red-700",
    bg: "bg-red-100",
  },
  {
    week: "Week 3",
    action: 'Email procurement: “what data do we have on suppliers?”',
    pain: "Reply arrives five days later. Two Excel files. No categories.",
    color: "text-amber-700",
    bg: "bg-amber-100",
  },
  {
    week: "Weeks 4–5",
    action: "Chase three procurement managers across two time zones.",
    pain: 'Get a password-protected PDF and a promise to "look into it."',
    color: "text-amber-700",
    bg: "bg-amber-100",
  },
  {
    week: "Weeks 6–8",
    action: "Try to reconcile what you have.",
    pain: "Units don't match. Years don't align. You have fragments. Not a report.",
    color: "text-red-700",
    bg: "bg-red-100",
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
  found: { label: "Connected", dot: "bg-primary", text: "text-primary", bar: "bg-primary/10 text-primary" },
  partial: { label: "Partial", dot: "bg-amber-500", text: "text-amber-700", bar: "bg-amber-100 text-amber-700" },
  missing: { label: "Missing", dot: "bg-red-500", text: "text-red-700", bar: "bg-red-100 text-red-700" },
};

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
            <Button
              size="lg"
              className="px-8 text-base"
              asChild
              data-track="cta-click"
              data-variant="A"
            >
              <a href="/contact#demo">Book a demo — see your data map in 60 minutes</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            AU data residency · SOC 2 Type II · No lock-in contracts
          </p>
        </div>
      </section>

      {/* Pain point — Sarah's story */}
      <section id="pain-point-a" data-ab-section className="py-20 sm:py-28 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left — Sarah's 8-week journey */}
            <div>
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60 mb-6">
                Sound familiar?
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Sarah's first AASB S2 report.
              </h2>
              <p className="text-white/60 mb-8">
                Head of Finance. ASX-listed manufacturing company. No dedicated sustainability team.
                First Group 1 reporter. Eight weeks to deadline.
              </p>

              <div className="space-y-4">
                {timeline.map(({ week, action, pain, bg, color }) => (
                  <div key={week} className="flex gap-4">
                    <div className="flex-shrink-0 w-20 text-xs font-semibold text-white/40 pt-1">{week}</div>
                    <div className={`flex-1 rounded-xl p-4 ${bg}`}>
                      <div className={`text-sm font-semibold ${color} mb-1`}>{action}</div>
                      <div className="text-xs text-foreground/70">{pain}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white mb-1">
                  Eight weeks later. No report. A board presentation in three days.
                </div>
                <div className="text-sm text-white/60">
                  "I can't tell them where half these numbers came from. I don't even know what I'm missing."
                  <span className="block mt-1 text-white/40 italic">— Sarah, every first AASB S2 reporter</span>
                </div>
              </div>
            </div>

            {/* Right — emify's data gap map */}
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs font-medium text-primary mb-6">
                emify connects to your accounting system on day one
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                What emify surfaces in under{" "}
                <span className="text-primary">60 minutes.</span>
              </h2>
              <p className="text-white/60 mb-8">
                Not a guess. Not a spreadsheet. A clear map of exactly what data exists, what's partial,
                and what's genuinely missing — with the source of every figure.
              </p>

              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">Data Readiness Map</span>
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary inline-block" />Connected</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500 inline-block" />Partial</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-500 inline-block" />Missing</span>
                  </div>
                </div>
                <div className="divide-y divide-white/5">
                  {dataMap.map(({ category, scope, status, source }) => {
                    const cfg = statusConfig[status as keyof typeof statusConfig];
                    return (
                      <div key={category} className="px-4 py-3 flex items-start gap-3">
                        <div className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-medium text-white">{category}</span>
                            <span className="text-xs text-white/30">{scope}</span>
                          </div>
                          <div className="text-xs text-white/50 mt-0.5">{source}</div>
                        </div>
                        <div className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${cfg.bar}`}>
                          {cfg.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="px-4 py-3 border-t border-white/10 bg-primary/10">
                  <div className="text-xs text-primary font-medium">
                    ✓ 3 connected · 3 partial · 2 missing — full action plan generated
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  size="lg"
                  className="w-full text-base"
                  asChild
                  data-track="cta-click"
                  data-variant="A"
                >
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
