import { Button } from "@/components/ui/button";
import { Check, X, Minus } from "lucide-react";

interface ComparisonRow {
  feature: string;
  emify: string | boolean;
  competitor: string | boolean;
}

interface ComparisonData {
  competitor: string;
  badge: string;
  h1: string;
  sub: string;
  rows: ComparisonRow[];
  emifyAdvantage: string[];
  competitorAdvantage: string[];
  verdict: string;
  costComparison?: { emify: string; competitor: string; note: string };
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="h-4 w-4 text-primary mx-auto" />;
  if (value === false) return <X className="h-4 w-4 text-red-400 mx-auto" />;
  return <span className="text-sm text-foreground">{value}</span>;
}

export default function ComparisonPage({ data }: { data: ComparisonData }) {
  const { competitor, badge, h1, sub, rows, emifyAdvantage, competitorAdvantage, verdict, costComparison } = data;

  return (
    <div>
      <section className="py-16 sm:py-24 gradient-hero border-b">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary mb-6">
            {badge}
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Cost comparison */}
          {costComparison && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
                <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Emify</div>
                <div className="text-4xl font-bold text-primary mb-1">{costComparison.emify}</div>
                <div className="text-xs text-muted-foreground">per year</div>
              </div>
              <div className="rounded-xl border bg-card p-6 text-center">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">{competitor}</div>
                <div className="text-4xl font-bold text-foreground mb-1">{costComparison.competitor}</div>
                <div className="text-xs text-muted-foreground">{costComparison.note}</div>
              </div>
            </div>
          )}

          {/* Comparison table */}
          <div className="rounded-2xl border overflow-hidden mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-5 py-3 font-semibold text-foreground w-1/2">Feature</th>
                  <th className="text-center px-5 py-3 font-semibold text-primary">Emify</th>
                  <th className="text-center px-5 py-3 font-semibold text-muted-foreground">{competitor}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ feature, emify, competitor: comp }, i) => (
                  <tr key={feature} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-5 py-3 text-foreground">{feature}</td>
                    <td className="px-5 py-3 text-center"><Cell value={emify} /></td>
                    <td className="px-5 py-3 text-center"><Cell value={comp} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pros/cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="text-sm font-bold text-primary mb-4">Where Emify wins</div>
              <ul className="space-y-2">
                {emifyAdvantage.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <div className="text-sm font-bold text-muted-foreground mb-4">Where {competitor} may suit you</div>
              <ul className="space-y-2">
                {competitorAdvantage.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Minus className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verdict */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <div className="text-sm font-bold text-primary mb-2">Our honest take</div>
            <p className="text-foreground leading-relaxed">{verdict}</p>
            <div className="mt-6">
              <Button asChild><a href="/contact#demo">See Emify in action</a></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
