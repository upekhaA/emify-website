import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import FAQSection, { type Faq } from "@/components/FAQSection";

interface SupplierTypeData {
  slug: string;
  name: string;
  h1: string;
  sub: string;
  typicalBuyers: string[];
  dataAsked: string[];
  emifyServices: string[];
  fixedPriceFrom: string;
  ctaLabel: string;
  faqs?: Faq[];
}

interface RegionContext {
  regionName: string;
  stateCode: string;
  stateName: string;
  industryNote: string;
}

interface Props {
  data: SupplierTypeData;
  region?: RegionContext;
}

export default function SupplierTypePage({ data, region }: Props) {
  const { name, h1, sub, typicalBuyers, dataAsked, emifyServices, fixedPriceFrom, ctaLabel, faqs } = data;
  const regionalH1 = region ? `${h1} For ${name.toLowerCase()} in the ${region.regionName}, ${region.stateCode}.` : h1;
  const regionalSub = region
    ? `${sub} This page is for ${name.toLowerCase()} operating in the ${region.regionName} region of ${region.stateName}. ${region.industryNote}`
    : sub;

  return (
    <div>
      <section className="py-16 sm:py-24 gradient-hero border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              For Suppliers
            </span>
            <span className="inline-flex items-center rounded-full bg-muted border px-3 py-1 text-xs font-medium text-muted-foreground">
              {name}
            </span>
            {region && (
              <span className="inline-flex items-center rounded-full bg-muted border px-3 py-1 text-xs font-medium text-muted-foreground">
                {region.regionName}, {region.stateCode}
              </span>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 max-w-3xl text-balance">{regionalH1}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">{regionalSub}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild data-track="cta-click">
              <a href="/for-suppliers/signup">{ctaLabel} — {fixedPriceFrom}</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/for-suppliers">See other supplier types</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b" data-ab-section>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-5">Who's asking — and what they want</h2>
            <p className="text-sm text-muted-foreground mb-6">Your typical buyers requesting sustainability data:</p>
            <ul className="space-y-2 mb-8">
              {typicalBuyers.map((buyer) => (
                <li key={buyer} className="flex items-start gap-3 text-sm text-foreground">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{buyer}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-5">The data they're asking for</h2>
            <ul className="space-y-3">
              {dataAsked.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/30 border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">What Emify does — end to end</h2>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl">
            You hand us the request. We do the work. You approve. That's it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {emifyServices.map((service, i) => (
              <div key={service} className="rounded-xl border bg-card p-5">
                <div className="text-xs font-bold text-primary mb-2">STEP {i + 1}</div>
                <p className="text-sm text-foreground">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-10">
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Fixed monthly fee</div>
            <div className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{fixedPriceFrom}</div>
            <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">
              No per-questionnaire charges. No hourly billing. We answer every data request your buyers send — for a flat monthly fee.
            </p>
            <Button size="lg" asChild data-track="cta-click">
              <a href="/for-suppliers/signup">{ctaLabel}</a>
            </Button>
          </div>
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <FAQSection
          title={region ? `${name} in the ${region.regionName} — common questions` : `${name} — common questions`}
          faqs={faqs}
        />
      )}
    </div>
  );
}
