import { Button } from "@/components/ui/button";
import { Check, Minus } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "A$499",
    period: "/month",
    annual: "A$5,988/year",
    monthly: "or A$1,490/month on monthly billing",
    for: "SMEs A$10–50m revenue · 1 entity · 5 users",
    cta: "Get started",
    href: "/contact#starter",
    highlight: false,
    features: {
      "Emissions": ["Scope 1 & 2 (GHG Protocol)", "GHG Protocol draft report", false, false],
      "Reporting": ["Modern Slavery statement template", false, false, false],
      "Integrations": ["Xero & MYOB", false, false, false],
      "Users & entities": ["1 entity · 5 users", false, false, false],
      "Support": ["Email support", false, false, false],
    },
  },
  {
    name: "Growth",
    price: "A$1,950",
    period: "/month",
    annual: "A$23,400/year",
    monthly: "or A$4,990/month on monthly billing",
    for: "Mid-market A$50–200m · 3 entities · 25 users",
    cta: "Book a demo",
    href: "/contact#demo",
    highlight: true,
    features: {
      "Emissions": ["Scope 1 & 2", "Scope 3 (15 categories)", "NGER annual report", false],
      "Reporting": ["AASB S2 full disclosure draft", "TCFD-aligned risk section", false, false],
      "Integrations": ["100–2,000 supplier engagement", "SSO (Okta, Azure AD)", false, false],
      "Users & entities": ["3 entities · 25 users", false, false, false],
      "Support": ["Priority email & phone", "Dedicated success manager", false, false],
    },
  },
  {
    name: "Enterprise",
    price: "From A$60k",
    period: "/year",
    annual: "Median A$120k · up to A$250k",
    monthly: "Custom contract · ex-GST",
    for: "ASX 300 · Group 1 reporters · NGER reporters",
    cta: "Talk to sales",
    href: "/contact#enterprise",
    highlight: false,
    features: {
      "Emissions": ["Scope 1, 2 & 3 unlimited", "NGER + Safeguard Mechanism", "SBTi pathway modelling", "IFRS S1 & S2"],
      "Reporting": ["AASB S2 + GRI + TCFD + TNFD", "Assurance-ready evidence pack", "Multi-entity group consolidation", "Custom disclosure templates"],
      "Integrations": ["Unlimited suppliers", "Custom ERP connectors", "API access", false],
      "Users & entities": ["Unlimited entities & users", false, false, false],
      "Support": ["24/7 support", "Dedicated CSM", "99.9% SLA", "On-site training"],
    },
  },
];

const addons = [
  { name: "Additional entity", price: "A$250–400/mo" },
  { name: "Safeguard facility pack", price: "A$950–3,500/mo per facility" },
  { name: "Scope 3 Plus (advanced)", price: "A$1,200/mo" },
  { name: "Peer Analyst module", price: "A$600/mo" },
  { name: "Assurance-Ready Pack", price: "A$9,800/yr" },
  { name: "TNFD module", price: "A$4,800/yr" },
  { name: "Modern Slavery Drafting Assist", price: "A$2,400/yr" },
  { name: "Sustainability-Linked Loan reporting", price: "A$3,600/yr" },
];

const discounts = [
  { label: "Annual prepay", value: "15% off" },
  { label: "3-year commitment", value: "20% off" },
  { label: "Non-profit / B-Corp", value: "20% off" },
  { label: "First 50 SME customers", value: "30% lifetime early-adopter" },
  { label: "First 10 enterprise customers", value: "30% lifetime early-adopter" },
];

export default function PricingPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 sm:py-20 gradient-hero border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
            Transparent pricing.<br />
            <span className="text-primary">No lock-in. No surprises.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All prices in AUD, ex-GST. Annual billing saves 15%. Early-adopter pricing available
            for the first 50 SME and 10 enterprise customers.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border bg-card p-6 flex flex-col ${
                  tier.highlight ? "ring-2 ring-primary shadow-lg" : ""
                }`}
              >
                {tier.highlight && (
                  <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                    Most popular
                  </div>
                )}
                <div className="text-2xl font-bold text-foreground mb-1">{tier.name}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
                <div className="text-xs text-muted-foreground mb-1">{tier.annual}</div>
                <div className="text-xs text-muted-foreground mb-4">{tier.monthly}</div>
                <div className="text-sm text-muted-foreground border-t pt-4 mb-5">{tier.for}</div>

                {Object.entries(tier.features).map(([category, items]) => (
                  <div key={category} className="mb-4">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">{category}</div>
                    <ul className="space-y-1.5">
                      {items.filter(Boolean).map((f) => (
                        <li key={f as string} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="mt-auto pt-4">
                  <Button variant={tier.highlight ? "default" : "outline"} className="w-full" asChild>
                    <a href={tier.href}>{tier.cta}</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="rounded-2xl border bg-muted/30 p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Add-ons</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Available on Growth and Enterprise. Add only what you need.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {addons.map(({ name, price }) => (
                <div key={name} className="rounded-xl bg-card border p-4">
                  <div className="text-sm font-semibold text-foreground mb-1">{name}</div>
                  <div className="text-sm text-primary font-medium">{price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Discounts */}
          <div className="rounded-2xl border bg-primary/5 border-primary/20 p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Discounts & early-adopter pricing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {discounts.map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between gap-4 rounded-lg bg-card border p-4">
                  <span className="text-sm text-foreground">{label}</span>
                  <span className="text-sm font-bold text-primary flex-shrink-0">{value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Early-adopter discounts apply for the lifetime of the account. Cannot be combined with other discounts.
              Non-profit/B-Corp discount requires verification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
