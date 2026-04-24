import { FileSearch, Network, Truck, FileText, ShieldCheck, Bell, BookOpen, LineChart } from "lucide-react";

const agents = [
  {
    icon: FileSearch,
    name: "Invoice Analyst",
    tagline: "Reads every document so you don't have to.",
    capabilities: [
      "Extracts Scope 1, 2 & 3 figures from invoices, bills and statements",
      "Auto-codes to GHG Protocol categories and NGER activity definitions",
      "Flags anomalies and low-confidence extractions for human review",
    ],
  },
  {
    icon: Network,
    name: "Data Orchestrator",
    tagline: "Pulls sustainability data from every corner of your business.",
    capabilities: [
      "Integrates with ERP, finance, operations and HR systems",
      "Normalises data across 150+ source formats into a clean audit layer",
      "Reconciles gaps and surfaces conflicts before they reach a report",
    ],
  },
  {
    icon: Truck,
    name: "Supplier Liaison",
    tagline: "Chases suppliers until the data arrives.",
    capabilities: [
      "Sends structured data requests to 100–2,000+ suppliers",
      "Follows up automatically by email and portal, escalates when overdue",
      "Validates responses against emission factor libraries and benchmarks",
    ],
  },
  {
    icon: FileText,
    name: "Report Drafter",
    tagline: "Turns raw data into AASB S2 and NGER disclosures.",
    capabilities: [
      "Produces structured first drafts mapped to AASB S2, ESRS and GRI",
      "Generates NGER Annual Report and Modern Slavery Statement templates",
      "Version-controls every draft with change reasons and data lineage",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Audit Guardian",
    tagline: "Every evidence trail, ready for scrutiny the moment you need it.",
    capabilities: [
      "Maintains immutable, time-stamped records for every data point",
      "Packages evidence bundles for ASIC, CER and third-party assurance",
      "Tracks who reviewed and approved each figure in the reporting chain",
    ],
  },
  {
    icon: Bell,
    name: "Regulatory Sentinel",
    tagline: "Sees regulatory changes before they catch you.",
    capabilities: [
      "Monitors ASIC, CER, Treasury, ISSB and TCFD for material updates",
      "Summarises changes and their impact on your current disclosures",
      "Raises action items and adjusts report templates automatically",
    ],
  },
  {
    icon: BookOpen,
    name: "Risk Mapper",
    tagline: "Your living climate risk and opportunity register.",
    capabilities: [
      "Identifies physical and transition risks using TCFD and TNFD frameworks",
      "Quantifies financial exposure and opportunity value by scenario",
      "Updates the register continuously as market and regulatory conditions shift",
    ],
  },
  {
    icon: LineChart,
    name: "Peer Analyst",
    tagline: "Benchmarks your position against ASX peers every quarter.",
    capabilities: [
      "Analyses publicly available sustainability reports from sector peers",
      "Scores disclosures on completeness, ambition and assurance quality",
      "Delivers a board-ready benchmarking summary with gap recommendations",
    ],
  },
];

export default function AgentGrid() {
  return (
    <section id="agents" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet your AI sustainability team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eight specialised agents work in parallel — each an expert in its domain, all sharing
            a single audit trail and reporting layer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {agents.map(({ icon: Icon, name, tagline, capabilities }) => (
            <div
              key={name}
              className="rounded-xl border bg-card p-5 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm font-bold text-primary mb-0.5">{name}</div>
              <div className="text-sm font-medium text-foreground mb-3">{tagline}</div>
              <ul className="space-y-1.5 mt-auto">
                {capabilities.map((cap) => (
                  <li key={cap} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
