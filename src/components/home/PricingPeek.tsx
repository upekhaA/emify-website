import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "A$499",
    period: "/month",
    note: "Annual billing · ex-GST",
    for: "SMEs A$10–50m · 1 entity · 5 users",
    features: ["Scope 1 & 2 emissions", "GHG Protocol draft", "MSA statement template", "Xero & MYOB integration"],
    cta: "Get started",
    href: "/pricing",
    highlight: false,
  },
  {
    name: "Growth",
    price: "A$1,950",
    period: "/month",
    note: "Annual billing · ex-GST",
    for: "Mid-market A$50–200m · 3 entities · 25 users",
    features: [
      "Full AASB S2 disclosures",
      "NGER annual reporting",
      "Scope 3 (15 categories)",
      "100–2,000 supplier engagement",
      "SSO & audit-ready pack",
    ],
    cta: "Book a demo",
    href: "/contact#demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "From A$60k",
    period: "/year",
    note: "Custom contract · ex-GST",
    for: "ASX 300 · Group 1 reporters · NGER reporters",
    features: [
      "Unlimited entities & users",
      "Safeguard Mechanism tracking",
      "IFRS S1/S2 & SBTi",
      "Assurance-ready evidence pack",
      "99.9% SLA · dedicated CSM",
    ],
    cta: "Talk to sales",
    href: "/contact#enterprise",
    highlight: false,
  },
];

export default function PricingPeek() {
  return (
    <section id="pricing-peek" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transparent pricing. No surprises.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Annual prepay saves 15%. First 50 SME customers receive 30% lifetime early-adopter pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border bg-card p-6 flex flex-col ${
                tier.highlight ? "ring-2 ring-primary shadow-lg" : ""
              }`}
            >
              {tier.highlight && (
                <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                  Most popular
                </div>
              )}
              <div className="text-xl font-bold text-foreground mb-0.5">{tier.name}</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <div className="text-xs text-muted-foreground mb-1">{tier.note}</div>
              <div className="text-xs text-muted-foreground mb-4 pb-4 border-b">{tier.for}</div>
              <ul className="space-y-2 flex-1 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={tier.highlight ? "default" : "outline"} className="w-full" asChild>
                <a href={tier.href}>{tier.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/pricing" className="text-sm text-primary hover:underline font-medium">
            View full pricing including add-ons →
          </a>
        </div>
      </div>
    </section>
  );
}
