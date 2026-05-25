import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface IndustryData {
  slug?: string;
  name: string;
  h1: string;
  sub: string;
  integrations: string[];
  capabilities: string[];
  frameworks: string[];
  highlight: string;
  largeBuyers?: string[];
  supplierPressure?: string;
}

export default function IndustryPage({ data }: { data: IndustryData }) {
  const { name, h1, sub, integrations, capabilities, frameworks, highlight, largeBuyers, supplierPressure } = data;

  return (
    <div>
      <section className="py-16 sm:py-24 gradient-hero border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-6">
            {name}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 max-w-3xl">{h1}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">{sub}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild><a href="/contact#demo">Book a demo</a></Button>
            <Button size="lg" variant="outline" asChild><a href="/pricing">See pricing</a></Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-5">What Emify does for {name}</h2>
              <ul className="space-y-3">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm font-medium text-foreground italic">{highlight}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-foreground mb-3">Native integrations</h3>
              <div className="flex flex-wrap gap-2">
                {integrations.map((i) => (
                  <span key={i} className="rounded-full border bg-card px-3 py-1 text-xs font-medium text-foreground">
                    {i}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-3">Frameworks supported</h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((f) => (
                  <span key={f} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border bg-card p-5">
              <div className="text-sm font-semibold text-foreground mb-2">Talk to an industry specialist</div>
              <p className="text-xs text-muted-foreground mb-3">
                Our team includes sustainability professionals with direct experience in {name.toLowerCase()}.
              </p>
              <Button size="sm" className="w-full" asChild>
                <a href="/contact#demo">Book a call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {(supplierPressure || (largeBuyers && largeBuyers.length > 0)) && (
        <section className="py-16 sm:py-24 border-t bg-muted/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">Supply this sector?</h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl">
              If your business supplies products or services to {name.toLowerCase()} buyers in Australia, you may have already been asked for sustainability data.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {supplierPressure && (
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="text-base font-bold text-foreground mb-3">What's happening in the supply chain</h3>
                  <p className="text-sm text-foreground">{supplierPressure}</p>
                </div>
              )}
              {largeBuyers && largeBuyers.length > 0 && (
                <div className="rounded-xl border bg-card p-6">
                  <h3 className="text-base font-bold text-foreground mb-3">Major buyers in this sector</h3>
                  <div className="flex flex-wrap gap-2">
                    {largeBuyers.map((b) => (
                      <span key={b} className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-foreground">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="/for-suppliers">See how Emify helps suppliers</a>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
