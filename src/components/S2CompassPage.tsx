import { FileText, TrendingUp, AlertTriangle, Target, BarChart2, ExternalLink } from "lucide-react";

const reports = [
  { company: "BHP Group", sector: "Mining", period: "FY2025", highlights: "Scope 3 Cat 11 dominates; transition plan references Paris 1.5°C pathway" },
  { company: "Rio Tinto", sector: "Mining", period: "FY2025", highlights: "Climate scenario analysis using IEA NZE; detailed Scope 1 & 2 by asset" },
  { company: "Commonwealth Bank", sector: "Financial Services", period: "FY2025", highlights: "PCAF-aligned financed emissions; 10 sector decarbonisation targets" },
  { company: "Westpac Banking Corp", sector: "Financial Services", period: "FY2025", highlights: "Absolute emissions target by 2030; Scope 3 Cat 15 portfolio coverage" },
  { company: "NAB", sector: "Financial Services", period: "FY2025", highlights: "Climate risk integrated into credit risk framework; TCFD to AASB S2 transition noted" },
  { company: "ANZ Group", sector: "Financial Services", period: "FY2025", highlights: "Sector-by-sector financed emissions; fossil fuel exposure disclosed" },
  { company: "Macquarie Group", sector: "Financial Services", period: "FY2025", highlights: "Green asset portfolio growth; PCAF data quality scoring disclosed" },
  { company: "Wesfarmers", sector: "Retail / Industrials", period: "FY2025", highlights: "Scope 3 Cat 1 & 11 dominant; supplier engagement programme detailed" },
  { company: "Woolworths Group", sector: "Retail", period: "FY2025", highlights: "Scope 3 Cat 11 (sold goods) material; refrigerant emissions reduction target" },
  { company: "Coles Group", sector: "Retail", period: "FY2025", highlights: "Refrigeration retrofit plan; energy intensity metric by store format" },
  { company: "Fortescue", sector: "Mining", period: "FY2025", highlights: "Green hydrogen strategy as climate opportunity; Scope 2 zero by 2030" },
  { company: "Woodside Energy", sector: "Energy", period: "FY2025", highlights: "Physical risk assessment across all operating assets; LNG Scope 3 Cat 11" },
  { company: "Santos", sector: "Energy", period: "FY2025", highlights: "CCS projects as mitigation strategy; Scope 1 intensity vs absolute target debate" },
  { company: "Origin Energy", sector: "Energy", period: "FY2025", highlights: "Transition plan linked to NEM decarbonisation trajectory; Scope 2 market-based" },
  { company: "AGL Energy", sector: "Energy", period: "FY2025", highlights: "Coal exit timeline; Scope 1 dominates; community transition fund disclosure" },
  { company: "Transurban Group", sector: "Infrastructure", period: "FY2025", highlights: "Physical risk: flooding & heat for tunnels; EV charging as opportunity" },
  { company: "Lendlease Group", sector: "Real Estate", period: "FY2025", highlights: "Embodied carbon in construction tracked; Green Star ratings disclosure" },
  { company: "Stockland", sector: "Real Estate", period: "FY2025", highlights: "NABERS energy intensity by portfolio; transition risk in residential land" },
  { company: "GPT Group", sector: "Real Estate", period: "FY2025", highlights: "Net zero pathway by 2024 (operations); GRESB score disclosed" },
  { company: "QBE Insurance", sector: "Insurance", period: "FY2025", highlights: "Underwriting risk from extreme weather events; climate VaR methodology" },
  { company: "IAG", sector: "Insurance", period: "FY2025", highlights: "Flood & bushfire claims trend data; climate scenario using RCP 4.5 & 8.5" },
  { company: "Suncorp Group", sector: "Insurance / Banking", period: "FY2025", highlights: "Physical risk hotspot mapping for home insurance portfolio" },
  { company: "Telstra Group", sector: "Telecommunications", period: "FY2025", highlights: "Network resilience under heat stress; renewable energy PPAs disclosed" },
  { company: "CSL Limited", sector: "Healthcare", period: "FY2025", highlights: "Water stress at manufacturing sites; Scope 3 Cat 1 plasma supply chain" },
  { company: "Brambles Limited", sector: "Logistics", period: "FY2025", highlights: "Circularity model as climate strategy; Scope 3 Cat 4 upstream transport" },
];

const themes = [
  {
    icon: BarChart2,
    title: "Scope 3 is the defining challenge",
    body: "22 of 25 entities identified Scope 3 as their largest emissions source. Category 11 (sold products / financed emissions) dominated in financial services and retail. Only 8 entities provided full Category-level breakdowns.",
  },
  {
    icon: AlertTriangle,
    title: "Scenario analysis is inconsistent",
    body: "All 25 used at least one climate scenario, but only 11 disclosed quantified financial impacts. IEA NZE and RCP 4.5/8.5 were the most common reference scenarios. Very few linked scenarios to specific asset or revenue exposure.",
  },
  {
    icon: TrendingUp,
    title: "Transition plans vary widely in maturity",
    body: "13 entities published a standalone transition plan or a dedicated section. Most referenced Paris 1.5°C alignment without quantified interim milestones. Sectoral pathways (e.g. SBTi) were cited by 9 entities.",
  },
  {
    icon: Target,
    title: "Targets lack consistency",
    body: "18 entities have at least one climate target. Absolute vs intensity-based targets split roughly 60/40. Only 6 disclosed targets that cover Scope 3 with a baseline year and verification methodology.",
  },
];

export default function S2CompassPage() {
  return (
    <div>
      <section className="py-16 sm:py-20 gradient-hero border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
            First-wave analysis · 25 ASX entities
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
            S2 Compass
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An analysis of the first 25 AASB S2 climate disclosure reports prepared by ASX-listed entities.
            What they disclosed, how they disclosed it, and what it means for reporters preparing their own.
          </p>
        </div>
      </section>

      {/* Key themes */}
      <section className="py-16 border-b">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Key themes across 25 reports</h2>
          <p className="text-sm text-muted-foreground mb-8">Patterns observed from reading every first-wave disclosure in full.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {themes.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports table */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Reports analysed</h2>
          <p className="text-sm text-muted-foreground mb-8">
            All 25 entities are Group 1 reporters with a 30 June 2025 financial year-end, subject to mandatory AASB S2 disclosure.
          </p>
          <div className="space-y-2">
            {reports.map(({ company, sector, period, highlights }) => (
              <div
                key={company}
                className="grid grid-cols-1 md:grid-cols-[200px_160px_80px_1fr] gap-x-6 gap-y-1 items-start rounded-xl border bg-card px-5 py-4"
              >
                <div className="font-semibold text-sm text-foreground">{company}</div>
                <div className="text-xs text-muted-foreground">{sector}</div>
                <div className="text-xs text-muted-foreground">{period}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{highlights}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t bg-muted/30">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <FileText className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-3">Preparing your own AASB S2 report?</h2>
          <p className="text-muted-foreground mb-6">
            Emify maps your data to AASB S2 disclosure requirements and benchmarks your approach against what peers have already lodged.
          </p>
          <a
            href="/contact#demo"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Request a demo <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
