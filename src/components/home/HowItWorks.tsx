const steps = [
  {
    step: "01",
    label: "Connect",
    heading: "Connect Emify to your systems in a day",
    body: "Emify integrates with your ERP, finance platform, email and supplier portals via 150+ pre-built connectors. No custom dev. Onboarding is guided by your dedicated success manager — we've seen companies go live in under 48 hours.",
    detail: "Xero · MYOB · SAP · NetSuite · Microsoft 365 · Salesforce · and 140+ more",
  },
  {
    step: "02",
    label: "Review",
    heading: "Your agents get to work — you stay in control",
    body: "The eight agents begin collecting, processing and validating data across your organisation and supply chain. Every figure surfaced for a disclosure is presented to your team for review before it enters a report. A human always holds the pen.",
    detail: "Role-based review queues · inline data lineage · confidence scoring",
  },
  {
    step: "03",
    label: "Report",
    heading: "Publish with confidence, backed by a complete audit trail",
    body: "Emify produces structured draft disclosures — AASB S2 climate statements, NGER annual reports, Modern Slavery statements — that your team finalises and signs off. Every number is traceable to source. Every decision is logged.",
    detail: "AASB S2 · NGER · Modern Slavery Act · Safeguard · GRI · TCFD · TNFD · GHG Protocol",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            From invoice to disclosure in three steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Emify is designed to embed into how your organisation already works — not replace it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-border" />

          {steps.map(({ step, label, heading, body, detail }) => (
            <div key={step} className="relative flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 z-10 relative">
                  {step}
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">{label}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{heading}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{body}</p>
              <div className="mt-auto rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
                {detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
