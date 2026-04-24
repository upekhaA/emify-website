import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Group {
  label: string;
  when: string;
  who: string;
}

interface ComplianceData {
  badge: string;
  h1: string;
  sub: string;
  groups?: Group[];
  capabilities: string[];
  cta: string;
  ctaHref: string;
  demoHref: string;
}

export default function CompliancePage({ data }: { data: ComplianceData }) {
  const { badge, h1, sub, groups, capabilities, cta, ctaHref, demoHref } = data;

  return (
    <div>
      <section className="py-16 sm:py-24 gradient-hero border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-6">
            {badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 max-w-3xl">
            {h1}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">{sub}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href={demoHref}>Book a demo</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={ctaHref}>{cta}</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Capabilities */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">What Emify does for {badge}</h2>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline / group selector */}
          {groups && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Which group are you in?</h2>
              <div className="space-y-3">
                {groups.map(({ label, when, who }) => (
                  <div key={label} className="rounded-xl border bg-card p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-foreground">{label}</span>
                      <span className="text-xs font-semibold text-primary rounded-full bg-primary/10 px-2.5 py-0.5">
                        {when}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{who}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="text-sm text-foreground font-medium mb-1">Not sure which group you're in?</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Our team will assess your reporting obligations and prepare a gap analysis at no charge for qualified prospects.
                </p>
                <Button size="sm" asChild>
                  <a href={demoHref}>Get a free gap analysis</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
