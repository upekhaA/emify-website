const bars = [
  { label: "In-house team", amount: 245000, display: "A$245k", note: "Salary + on-costs + tools", color: "bg-red-400" },
  { label: "Big 4 consultants", amount: 150000, display: "A$120–180k", note: "Per reporting cycle", color: "bg-amber-400" },
  { label: "Boutique ESG firm", amount: 75000, display: "A$75k", note: "Per cycle", color: "bg-yellow-300" },
  { label: "Emify Growth", amount: 23400, display: "A$23,400", note: "All-in, annual", color: "bg-primary" },
];

const max = 245000;

export default function ROIChart() {
  return (
    <section className="py-20 sm:py-28 bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The cost of getting this right
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Annual total cost of sustainability reporting — for a mid-market company with A$50–200m revenue.
          </p>
        </div>

        <div className="space-y-5">
          {bars.map(({ label, amount, display, note, color }) => (
            <div key={label}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-sm font-semibold text-white">{label}</span>
                  <span className="ml-2 text-xs text-white/50">{note}</span>
                </div>
                <span className={`text-base font-bold ${label === "Emify Growth" ? "text-primary" : "text-white"}`}>
                  {display}
                </span>
              </div>
              <div className="h-10 rounded-lg bg-white/10 overflow-hidden">
                <div
                  className={`h-full rounded-lg ${color} flex items-center px-3 transition-all`}
                  style={{ width: `${(amount / max) * 100}%` }}
                >
                  {label === "Emify Growth" && (
                    <span className="text-xs font-bold text-white whitespace-nowrap">10× cheaper than in-house</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-white/40 text-center mt-8">
          In-house estimate includes base salary A$130k, 30% on-costs, software licences and estimated management overhead.
          Consultant estimates based on market rates for annual engagement. All figures AUD ex-GST.
        </p>
      </div>
    </section>
  );
}
