import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  FileSearch,
  Truck,
  BarChart3,
  ShieldCheck,
  Bell,
  FileText,
  BookOpen,
  LineChart,
  Network,
} from "lucide-react";

const capabilities = [
  {
    icon: Network,
    title: "Cross-department data orchestration",
    description:
      "Connects purchasing, finance, and operations to pull all sustainability data into one place — no spreadsheet wrangling, no chasing colleagues.",
  },
  {
    icon: FileSearch,
    title: "Invoice & document processing",
    description:
      "Extracts emission-relevant figures directly from invoices and documents, fills reporting formats, and computes Scope 1, 2, and 3 emissions automatically.",
  },
  {
    icon: Truck,
    title: "Supplier engagement & follow-up",
    description:
      "Reaches out to suppliers on your behalf, follows up, and collects the data required for ESG disclosures — so you don't have to manage that inbox.",
  },
  {
    icon: BarChart3,
    title: "Executive dashboards",
    description:
      "Compiles data into clear dashboards and delivers sustainability summaries to decision-makers on a schedule they set.",
  },
  {
    icon: ShieldCheck,
    title: "Audit trails & audit facilitation",
    description:
      "Maintains a complete, time-stamped audit trail of every data point, source, and calculation — ready to present to auditors on demand.",
  },
  {
    icon: Bell,
    title: "Regulatory watch",
    description:
      "Continuously monitors global sustainability regulations and alerts management to new laws, updates, and compliance deadlines before they become a problem.",
  },
  {
    icon: FileText,
    title: "CSRD / S2 report drafting",
    description:
      "Produces a structured first draft of your CSRD sustainability report, mapped to the European Sustainability Reporting Standards — ready for human review.",
  },
  {
    icon: BookOpen,
    title: "Risk & opportunity library",
    description:
      "Builds and maintains a living register of sustainability risks and opportunities specific to your business, updated as conditions change.",
  },
  {
    icon: LineChart,
    title: "Peer benchmarking",
    description:
      "Analyses publicly available sustainability reports from industry peers and surfaces where your organisation stands — giving management a competitive view.",
  },
];

export default function Features() {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            What Emify does for you
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A full-stack sustainability coordinator, available 24/7, embedded in your existing
            workflows — without the recruiting process or the salary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base leading-snug">{title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
