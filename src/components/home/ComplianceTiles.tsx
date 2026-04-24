const frameworks = [
  { label: "AASB S2", desc: "Climate disclosures", href: "/aasb-s2" },
  { label: "NGER", desc: "National Greenhouse & Energy Reporting", href: "/nger" },
  { label: "Modern Slavery Act", desc: "Supply chain transparency", href: "/modern-slavery-act" },
  { label: "Safeguard Mechanism", desc: "Baseline & headroom", href: "/safeguard-mechanism" },
  { label: "GHG Protocol", desc: "Scope 1, 2 & 3", href: "/scope-3" },
  { label: "TCFD", desc: "Climate-related risk", href: "/aasb-s2" },
  { label: "TNFD", desc: "Nature-related risk", href: "/product" },
  { label: "GRI Standards", desc: "Stakeholder reporting", href: "/product" },
  { label: "ISSB / IFRS S1 & S2", desc: "Global baseline", href: "/aasb-s2" },
  { label: "SBTi", desc: "Science-based targets", href: "/product" },
];

export default function ComplianceTiles() {
  return (
    <section className="py-20 sm:py-24 border-y bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Every Australian obligation. One platform.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Emify is pre-loaded with Australian and international sustainability frameworks — so you're
            never starting from a blank page.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {frameworks.map(({ label, desc, href }) => (
            <a
              key={label}
              href={href}
              className="rounded-xl border bg-card p-4 text-center hover:border-primary/50 hover:shadow-sm transition-all group"
            >
              <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                {label}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
