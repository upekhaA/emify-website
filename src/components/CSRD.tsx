import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const requirements = [
  "Double materiality assessment support",
  "Scope 1, 2 & 3 emissions calculation",
  "ESRS-aligned data collection & gap analysis",
  "Structured first draft of the sustainability statement",
  "Audit-ready documentation and evidence trail",
  "Continuous monitoring for ESRS updates",
];

export default function CSRD() {
  return (
    <section id="csrd" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-3 py-1 text-xs font-medium mb-6">
              CSRD ready
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
              CSRD compliance without the chaos
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The Corporate Sustainability Reporting Directive is the most significant shift in
              corporate reporting in a generation. Most companies don't have the internal capacity
              to handle it — Emify does.
            </p>
            <p className="text-muted-foreground mb-8">
              Emify works to the European Sustainability Reporting Standards (ESRS), collects the
              evidence you need, and produces a structured first draft of your sustainability
              statement — giving your team a human-reviewed document instead of a blank page.
            </p>
            <ul className="space-y-3 mb-8">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg">Talk to us about CSRD</Button>
          </div>

          <div className="rounded-2xl border bg-muted/40 p-8 space-y-5">
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Timeline reality check
            </div>
            {[
              { year: "2025", label: "Large EU companies", status: "now" },
              { year: "2026", label: "Listed SMEs & non-EU companies with EU operations", status: "soon" },
              { year: "2028", label: "Sector-specific standards (ESRS S2 in scope)", status: "upcoming" },
            ].map(({ year, label, status }) => (
              <div key={year} className="flex items-center gap-4">
                <div
                  className={`w-14 text-center rounded-lg py-1.5 text-xs font-bold ${
                    status === "now"
                      ? "bg-red-100 text-red-700"
                      : status === "soon"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {year}
                </div>
                <div className="text-sm text-foreground">{label}</div>
              </div>
            ))}
            <p className="text-xs text-muted-foreground pt-2">
              The deadline is closer than it looks — and preparation takes months, not weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
