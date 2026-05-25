import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

interface StateData {
  slug: string;
  code: string;
  name: string;
  epaName: string;
  procurementFramework: string;
  industryMix: string;
  keyRegulators: string[];
  supplierContext: string;
}

interface RegionData {
  state: string;
  slug: string;
  name: string;
  industryNote: string;
}

interface SiblingRegion {
  slug: string;
  name: string;
}

interface SiblingSuburb {
  slug: string;
  name: string;
}

interface MatchingCombo {
  supplierType: string;
  supplierTypeName: string;
  href: string;
}

type Level = "state" | "region" | "suburb";

interface Props {
  level: Level;
  state: StateData;
  region?: RegionData;
  suburbSlug?: string;
  suburbName?: string;
  siblingRegions?: SiblingRegion[];
  siblingSuburbs?: SiblingSuburb[];
  matchingCombos?: MatchingCombo[];
}

function titleCase(slug: string) {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export default function LocationPage({
  level,
  state,
  region,
  suburbSlug,
  suburbName,
  siblingRegions = [],
  siblingSuburbs = [],
  matchingCombos = [],
}: Props) {
  const locationLabel =
    level === "suburb"
      ? `${suburbName ?? titleCase(suburbSlug ?? "")}, ${region?.name}, ${state.code}`
      : level === "region"
        ? `${region?.name}, ${state.code}`
        : state.name;

  const h1 =
    level === "suburb"
      ? `Sustainability reporting for businesses in ${suburbName ?? titleCase(suburbSlug ?? "")}.`
      : level === "region"
        ? `Sustainability reporting for businesses in the ${region?.name} region.`
        : `Sustainability reporting for businesses in ${state.name}.`;

  return (
    <div>
      <section className="py-16 sm:py-24 gradient-hero border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-6">
            <a href="/locations" className="hover:text-primary">Locations</a>
            <span>/</span>
            {level === "state" ? (
              <span className="text-foreground font-medium">{state.name}</span>
            ) : (
              <a href={`/locations/${state.slug}`} className="hover:text-primary">{state.name}</a>
            )}
            {(level === "region" || level === "suburb") && region && (
              <>
                <span>/</span>
                {level === "region" ? (
                  <span className="text-foreground font-medium">{region.name}</span>
                ) : (
                  <a href={`/locations/${state.slug}/${region.slug}`} className="hover:text-primary">{region.name}</a>
                )}
              </>
            )}
            {level === "suburb" && (
              <>
                <span>/</span>
                <span className="text-foreground font-medium">{suburbName ?? titleCase(suburbSlug ?? "")}</span>
              </>
            )}
          </nav>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-6">
            <MapPin className="h-3 w-3" />
            {locationLabel}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 max-w-3xl text-balance">{h1}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Emify provides outsourced sustainability reporting for businesses across Australia — including AASB S2, NGER, Modern Slavery Act compliance and supplier data requests from large customers. We handle the entire process for a fixed monthly fee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild data-track="cta-click">
              <a href="/for-suppliers/signup">Get started</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/for-suppliers">See supplier types</a>
            </Button>
          </div>
        </div>
      </section>

      {(level === "region" || level === "suburb") && region && (
        <section className="py-12 sm:py-16 border-b" data-ab-section>
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">About the {region.name} region</h2>
            <p className="text-base text-foreground max-w-3xl">{region.industryNote}</p>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 border-b bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-5">Regulatory context — {state.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2">Environment regulator</h3>
              <p className="text-sm text-muted-foreground">{state.epaName}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2">Procurement framework</h3>
              <p className="text-sm text-muted-foreground">{state.procurementFramework}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold text-foreground mb-2">Industry mix</h3>
              <p className="text-sm text-muted-foreground">{state.industryMix}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold text-foreground mb-2">What this means for suppliers</h3>
              <p className="text-sm text-muted-foreground">{state.supplierContext}</p>
            </div>
          </div>
        </div>
      </section>

      {matchingCombos.length > 0 && (
        <section className="py-12 sm:py-16 border-b">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">Suppliers in the {region?.name ?? state.name}</h2>
            <p className="text-sm text-muted-foreground mb-6">
              We work with these supplier types in this region:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {matchingCombos.map((c) => (
                <a
                  key={c.supplierType}
                  href={c.href}
                  className="rounded-xl border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{c.supplierTypeName}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {level === "state" && siblingRegions.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-foreground mb-5">Regions in {state.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {siblingRegions.map((r) => (
                <a
                  key={r.slug}
                  href={`/locations/${state.slug}/${r.slug}`}
                  className="rounded-lg border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition"
                >
                  {r.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {level === "region" && siblingSuburbs.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-foreground mb-5">Suburbs in {region?.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {siblingSuburbs.map((s) => (
                <a
                  key={s.slug}
                  href={`/locations/${state.slug}/${region?.slug}/${s.slug}`}
                  className="rounded-lg border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {level === "suburb" && siblingSuburbs.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-foreground mb-5">Other suburbs in {region?.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {siblingSuburbs
                .filter((s) => s.slug !== suburbSlug)
                .map((s) => (
                  <a
                    key={s.slug}
                    href={`/locations/${state.slug}/${region?.slug}/${s.slug}`}
                    className="rounded-lg border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition"
                  >
                    {s.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
