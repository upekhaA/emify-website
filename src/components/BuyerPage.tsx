import { Button } from "@/components/ui/button";
import { Check, AlertTriangle, ArrowRight, ExternalLink } from "lucide-react";
import FAQSection, { type Faq } from "@/components/FAQSection";

interface BuyerData {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  url: string;
  programmeName: string;
  portalName: string;
  intro: string;
  whatTheyAsk: string[];
  supplierTypes: string[];
  fearPoint: string;
  emifyResponse: string;
  faqs?: Faq[];
}

interface SupplierLink {
  slug: string;
  name: string;
}

interface Props {
  data: BuyerData;
  relatedSuppliers: SupplierLink[];
}

export default function BuyerPage({ data, relatedSuppliers }: Props) {
  const { name, shortName, url, programmeName, portalName, intro, whatTheyAsk, fearPoint, emifyResponse, faqs } = data;

  return (
    <div>
      <section className="py-16 sm:py-24 gradient-hero border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              Buyer profile
            </span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-muted border px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition"
            >
              {name} <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 max-w-3xl text-balance">
            Supplying {shortName}? We respond to their sustainability data requests for you.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild data-track="cta-click">
              <a href="/for-suppliers/signup">Get started — from $500/month</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/for-suppliers">See supplier types</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-b" data-ab-section>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-5">What {shortName} asks suppliers for</h2>
            <ul className="space-y-3">
              {whatTheyAsk.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-base font-bold text-foreground mb-2">Programme</h3>
              <p className="text-sm text-muted-foreground">{programmeName}</p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-base font-bold text-foreground mb-2">Where they collect data</h3>
              <p className="text-sm text-muted-foreground">{portalName}</p>
            </div>
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-amber-900 mb-1">Why this matters</h3>
                  <p className="text-sm text-amber-900">{fearPoint}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/30 border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">How Emify responds to {shortName} for you</h2>
          <p className="text-base text-foreground max-w-3xl mb-8">{emifyResponse}</p>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Flat monthly fee</div>
            <div className="text-3xl font-bold text-foreground mb-3">from $500/month</div>
            <p className="text-sm text-foreground mb-5">No per-questionnaire charges. No hourly billing. We answer every {shortName} sustainability data request for one flat fee.</p>
            <Button size="lg" asChild data-track="cta-click">
              <a href="/for-suppliers/signup">Get started</a>
            </Button>
          </div>
        </div>
      </section>

      {relatedSuppliers.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">Supplier types we help with {shortName}</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Pick your situation to see exactly how we respond to {shortName} on your behalf.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedSuppliers.map((s) => (
                <a
                  key={s.slug}
                  href={`/for-suppliers/${s.slug}`}
                  className="group rounded-xl border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition">{s.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <FAQSection title={`Supplying ${shortName} — common questions`} faqs={faqs} />
      )}
    </div>
  );
}
