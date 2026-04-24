const testimonials = [
  {
    quote:
      "We were facing our first NGER lodgement with no in-house expertise and a six-week timeline. Emify had our facility data mapped, emission calculations done and the draft report ready for review in under two weeks. We lodged on time with full confidence.",
    name: "Chief Financial Officer",
    company: "ASX-listed resources company, Queensland",
    initials: "CFO",
  },
  {
    quote:
      "Our Modern Slavery statement used to be a three-month ordeal involving three consultants and six rounds of review. Emify drafted it from our actual procurement data in days. The board-approved version required fewer changes than any previous year.",
    name: "General Counsel",
    company: "Mid-market retail group, New South Wales",
    initials: "GC",
  },
  {
    quote:
      "AASB S2 readiness was on our board agenda for 18 months and we kept deferring it because we didn't know where to start. Emify ran our double materiality assessment, identified our Scope 3 hotspots and produced a disclosure draft we could actually defend. It's changed how we think about this problem.",
    name: "Head of Sustainability",
    company: "Financial services firm, Victoria",
    initials: "HS",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by Australian sustainability teams
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From first NGER lodgements to Group 1 AASB S2 readiness — Emify has been there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, company, initials }) => (
            <div key={initials} className="rounded-xl border bg-card p-6 flex flex-col">
              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                "{quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{name}</div>
                  <div className="text-xs text-muted-foreground">{company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
