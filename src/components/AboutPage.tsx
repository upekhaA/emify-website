import { Button } from "@/components/ui/button";

const values = [
  {
    name: "Ledger-grade honesty",
    body: "Every figure we surface is traceable, every estimate is labelled, every uncertainty is disclosed. We hold ourselves to the same standard we help you meet.",
  },
  {
    name: "Human in the loop",
    body: "emify drafts, calculates and flags. Your team approves, signs and owns. We will never design a product that removes accountability from the humans who bear it.",
  },
  {
    name: "Sovereign by default",
    body: "Australian companies deserve Australian infrastructure. Your data stays in ap-southeast-2 unless you explicitly choose otherwise. No exceptions.",
  },
  {
    name: "Ship weekly, listen daily",
    body: "The regulatory landscape moves fast. So do we. We release improvements every week and treat customer feedback as our product roadmap.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 sm:py-20 gradient-hero border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
            Built by people who've<br />
            <span className="text-primary">felt the problem first-hand</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Emify exists because two founders — one with deep domain expertise in sustainability
            science, one with deep expertise in AI engineering — saw the same broken system from
            different angles and decided to fix it.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-6">
                Our story
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                The engineer and the scientist
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  One of us spent years inside the machinery of corporate sustainability reporting —
                  the spreadsheets that break at 40,000 rows, the supplier portals nobody fills in,
                  the consultants who arrive in October and deliver a report in March that's already
                  out of date. The expertise is real. The process is broken.
                </p>
                <p>
                  The other spent years building AI systems at scale — learning that the hardest part
                  isn't the model, it's the data pipeline, the governance layer, and the human review
                  workflow. The capability is real. The application is what matters.
                </p>
                <p>
                  We started Emify because the problem is exactly hard enough to be interesting and
                  exactly important enough to matter. Australian companies are facing the most
                  significant expansion of mandatory climate disclosure in history. Most of them
                  don't have the capacity to handle it well. We built the solution we wish existed.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <a href="/contact">Get in touch</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact#demo">Book a demo</a>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  role: "Co-founder & CEO",
                  bg: "Sustainability science, corporate ESG reporting, NGER methodology",
                  focus: "Product direction, customer success, regulatory intelligence",
                  initials: "CO-F1",
                },
                {
                  role: "Co-founder & CTO",
                  bg: "AI/ML engineering, data pipelines, distributed systems",
                  focus: "Platform architecture, security, integration layer",
                  initials: "CO-F2",
                },
              ].map(({ role, bg, focus, initials }) => (
                <div key={role} className="rounded-2xl border bg-card p-6 flex gap-5">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                    {initials}
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground mb-1">{role}</div>
                    <div className="text-xs text-muted-foreground mb-2">
                      <span className="font-medium text-foreground">Background: </span>{bg}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">Focus at Emify: </span>{focus}
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <div className="text-sm font-semibold text-foreground mb-1">Hiring</div>
                <p className="text-sm text-muted-foreground mb-3">
                  We're looking for people who care about the problem — sustainability scientists,
                  GHG accountants, product engineers and customer success specialists.
                </p>
                <a href="/contact" className="text-sm font-medium text-primary hover:underline">
                  See open roles →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">What we believe</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These aren't aspirations. They're design constraints that show up in every product decision.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ name, body }) => (
              <div key={name} className="rounded-xl border bg-card p-6">
                <div className="text-base font-bold text-primary mb-2">{name}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
