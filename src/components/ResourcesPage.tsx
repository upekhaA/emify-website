import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Download } from "lucide-react";

const featured = [
  {
    type: "Guide",
    title: "AASB S2 Readiness Checklist for Group 1 Reporters",
    desc: "A step-by-step checklist for ASX companies reporting under the mandatory AASB S2 climate disclosure standards from 1 July 2025.",
    tag: "AASB S2",
    icon: FileText,
    href: "/aasb-s2",
  },
  {
    type: "Template",
    title: "NGER Annual Report Data Collection Template",
    desc: "Pre-formatted Excel and CSV templates for NGER facility-level data collection, mapped to Method 1–4 calculation pathways.",
    tag: "NGER",
    icon: Download,
    href: "/nger",
  },
  {
    type: "Guide",
    title: "Scope 3 Category Heatmap by Australian Industry",
    desc: "Which Scope 3 categories are material for mining, agriculture, construction, financial services and real estate — with data quality guidance.",
    tag: "Scope 3",
    icon: BookOpen,
    href: "/scope-3",
  },
];

const topics = ["AASB S2", "NGER", "Modern Slavery", "Safeguard", "Scope 3", "TCFD", "Greenwashing", "TNFD"];
const types = ["Guide", "Template", "Webinar", "Case study", "Regulatory update"];
const industries = ["Mining", "Financial Services", "Agriculture", "Real Estate", "Construction", "Energy", "Retail"];

const resources = [
  { title: "NGER Facility Boundary Mapping Guide", type: "Guide", topic: "NGER", industry: "Mining" },
  { title: "Modern Slavery Statement: Seven Criteria Template", type: "Template", topic: "Modern Slavery", industry: "Retail" },
  { title: "ASIC Greenwashing Enforcement: What It Means for Your Disclosures", type: "Guide", topic: "Greenwashing", industry: "All" },
  { title: "Safeguard Mechanism: Baseline Calculation Explained", type: "Guide", topic: "Safeguard", industry: "Energy" },
  { title: "PCAF Financed Emissions for Australian Banks", type: "Guide", topic: "Scope 3", industry: "Financial Services" },
  { title: "TNFD Pilot: Nature-related Risk for Agricultural Companies", type: "Guide", topic: "TNFD", industry: "Agriculture" },
  { title: "TCFD vs AASB S2: What Changes for Australian Reporters", type: "Guide", topic: "TCFD", industry: "All" },
  { title: "Double Materiality Assessment: A Practical Guide", type: "Guide", topic: "AASB S2", industry: "All" },
  { title: "Embodied Carbon in Construction: ISC and EPD Approach", type: "Guide", topic: "Scope 3", industry: "Construction" },
];

export default function ResourcesPage() {
  return (
    <div>
      <section className="py-16 sm:py-20 gradient-hero border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
            Resources for Australian<br />
            <span className="text-primary">sustainability teams</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Practical guides, templates and regulatory intelligence — written for people
            who have to actually lodge the reports.
          </p>
          {/* Newsletter */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-xl border bg-card px-6 py-4 shadow-sm">
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">Emify Monthly</div>
              <div className="text-xs text-muted-foreground">Regulatory updates, every first Tuesday</div>
            </div>
            <Button size="sm" asChild>
              <a href="mailto:subscribe@emify.com.au?subject=Subscribe to Emify Monthly">Subscribe</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {featured.map(({ type, title, desc, tag, icon: Icon, href }) => (
              <a
                key={title}
                href={href}
                className="rounded-xl border bg-card p-6 flex flex-col hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {tag}
                  </div>
                  <span className="text-xs text-muted-foreground">{type}</span>
                </div>
                <Icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
              </a>
            ))}
          </div>

          {/* Filter strip */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-sm font-semibold text-foreground mr-2 self-center">Topic:</span>
            {topics.map((t) => (
              <span key={t} className="rounded-full border px-3 py-1 text-xs text-muted-foreground cursor-pointer hover:border-primary hover:text-primary transition-colors">
                {t}
              </span>
            ))}
          </div>

          {/* Resource list */}
          <div className="space-y-3">
            {resources.map(({ title, type, topic, industry }) => (
              <div
                key={title}
                className="flex items-center justify-between rounded-xl border bg-card px-5 py-4 hover:shadow-sm transition-shadow"
              >
                <div>
                  <div className="text-sm font-semibold text-foreground">{title}</div>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">{type}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{topic}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{industry}</span>
                  </div>
                </div>
                <Button size="sm" variant="ghost" asChild>
                  <a href="#">Read →</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
