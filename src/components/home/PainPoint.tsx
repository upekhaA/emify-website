const costs = [
  {
    label: "Senior Sustainability Manager",
    salary: "A$130,000",
    oncosts: "A$39,000",
    tools: "A$18,000",
    total: "A$187,000+",
    note: "Salary + 30% on-costs + tooling",
    highlight: false,
  },
  {
    label: "Big 4 Consultant (annual engagement)",
    salary: "A$120,000",
    oncosts: "–",
    tools: "–",
    total: "A$120–180k",
    note: "Per reporting cycle, you own nothing",
    highlight: false,
  },
  {
    label: "Boutique ESG Firm",
    salary: "A$55,000",
    oncosts: "–",
    tools: "–",
    total: "A$55–90k",
    note: "Per cycle, limited AU-specific depth",
    highlight: false,
  },
  {
    label: "Emify Growth",
    salary: "A$23,400",
    oncosts: "–",
    tools: "Included",
    total: "A$23,400/yr",
    note: "All-in, AU-specific, 24/7, audit-ready",
    highlight: true,
  },
];

export default function PainPoint() {
  return (
    <section className="py-20 sm:py-28 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 mb-6">
              The maths don't work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Hiring a sustainability coordinator costs A$120k+.{" "}
              <span className="text-primary">Getting AASB S2 wrong costs more.</span>
            </h2>
            <p className="text-white/70 text-lg mb-6">
              ASIC is watching. NGER penalties start at A$18,000 per contravention. Group 1 AASB S2
              reporters are live from 1 July 2025 — and most companies don't have the capacity to
              handle it.
            </p>
            <p className="text-white/70">
              You need deep expertise across GHG accounting, TCFD, Australian Greenwashing Law,
              supply chain traceability and NGER methodology. One coordinator can't hold all of that.
              emify can.
            </p>
          </div>

          <div className="space-y-3">
            {costs.map((c) => (
              <div
                key={c.label}
                className={`rounded-xl p-4 ${
                  c.highlight
                    ? "bg-primary/20 border border-primary/40"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className={`text-sm font-semibold ${c.highlight ? "text-primary" : "text-white"}`}>
                      {c.label}
                    </div>
                    <div className="text-xs text-white/50 mt-0.5">{c.note}</div>
                  </div>
                  <div className={`text-lg font-bold flex-shrink-0 ${c.highlight ? "text-primary" : "text-white"}`}>
                    {c.total}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
