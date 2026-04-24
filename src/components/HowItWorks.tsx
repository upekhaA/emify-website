const steps = [
  {
    number: "01",
    title: "Connects to your organisation",
    description:
      "Emify integrates with your existing tools — ERP, finance systems, email, and supplier portals — and is onboarded like a new employee, not a software implementation project.",
  },
  {
    number: "02",
    title: "Collects and processes data autonomously",
    description:
      "It reaches across departments and suppliers, extracts figures from invoices and documents, resolves gaps through follow-up, and builds a clean, auditable data layer.",
  },
  {
    number: "03",
    title: "Computes, drafts, and reports",
    description:
      "Emissions are calculated, CSRD-aligned reports are drafted, dashboards are prepared, and summaries land in management inboxes — all without manual coordination.",
  },
  {
    number: "04",
    title: "Keeps watch so you don't have to",
    description:
      "Emify monitors regulatory developments, tracks peer disclosures, maintains your risk register, and surfaces what matters — before it becomes urgent.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            A teammate, not a tool
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Emify doesn't wait to be queried. It operates continuously — coordinating, collecting,
            computing, and communicating on behalf of your organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="relative">
              <div className="text-5xl font-bold text-primary/20 mb-4 select-none">{number}</div>
              <h3 className="text-lg font-semibold mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
