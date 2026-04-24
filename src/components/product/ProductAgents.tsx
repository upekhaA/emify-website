import { FileSearch, Network, Truck, FileText, ShieldCheck, Bell, BookOpen, LineChart } from "lucide-react";

const agents = [
  {
    icon: FileSearch,
    name: "Invoice Analyst",
    tagline: "Reads every document so you don't have to.",
    capabilities: [
      "Extracts Scope 1, 2 & 3 figures from invoices, utility bills and freight statements using document AI",
      "Auto-codes activities to GHG Protocol categories and NGER activity definitions with confidence scoring",
      "Flags anomalies, missing data and low-confidence extractions for human review before any figure enters a report",
    ],
    demo: "Upload an electricity bill → see Scope 2 market-based and location-based figures in seconds",
  },
  {
    icon: Network,
    name: "Data Orchestrator",
    tagline: "Pulls sustainability data from every corner of your business.",
    capabilities: [
      "Connects to ERP, finance, HR, fleet and operations systems via 150+ pre-built integrations",
      "Normalises data from disparate formats into a clean, versioned audit layer with full provenance",
      "Resolves conflicts and gaps between systems automatically, escalating only what needs human judgement",
    ],
    demo: "Connect SAP → see consolidated Scope 1 activity data across all facilities in one view",
  },
  {
    icon: Truck,
    name: "Supplier Liaison",
    tagline: "Chases suppliers until the data arrives.",
    capabilities: [
      "Sends structured GHG and Modern Slavery data requests to 100–2,000+ suppliers via email and portal",
      "Follows up automatically on a configurable cadence, escalating to your team only when overdue",
      "Validates supplier responses against emission factor libraries, industry benchmarks and prior-year figures",
    ],
    demo: "Configure supplier scope → agent sends, follows up and populates Scope 3 Category 1 automatically",
  },
  {
    icon: FileText,
    name: "Report Drafter",
    tagline: "Turns raw data into AASB S2 and NGER disclosures.",
    capabilities: [
      "Produces ESRS/AASB S2-structured climate statements, NGER Annual Reports and Modern Slavery statements",
      "Applies entity-specific templates, prior-year comparatives and board-approved narrative style",
      "Version-controls every draft with change reasons, data lineage and reviewer sign-off history",
    ],
    demo: "One click → structured AASB S2 draft with every data point linked to its source",
  },
  {
    icon: ShieldCheck,
    name: "Audit Guardian",
    tagline: "Every evidence trail, ready for scrutiny the moment you need it.",
    capabilities: [
      "Maintains immutable, time-stamped records for every data point, calculation and editorial decision",
      "Packages evidence bundles for ASIC review, CER audit and third-party assurance engagements",
      "Tracks and logs every review, approval and override across the entire reporting chain",
    ],
    demo: "Click any disclosure figure → see the full evidence chain from source document to published number",
  },
  {
    icon: Bell,
    name: "Regulatory Sentinel",
    tagline: "Sees regulatory changes before they catch you.",
    capabilities: [
      "Monitors ASIC, CER, Treasury, ISSB and TCFD publications for material updates daily",
      "Summarises changes, assesses their impact on your current disclosures and raises action items",
      "Adjusts report templates and emission factor libraries automatically when standards are updated",
    ],
    demo: "New NGER determination published → agent summarises impact on your current filings within 24 hours",
  },
  {
    icon: BookOpen,
    name: "Risk Mapper",
    tagline: "Your living climate risk and opportunity register.",
    capabilities: [
      "Identifies physical and transition risks using TCFD, TNFD and scenario analysis (RCP 4.5 / RCP 8.5)",
      "Quantifies financial exposure and opportunity value, mapped to your business units and asset base",
      "Updates the register continuously as market conditions, regulatory settings and your own data evolve",
    ],
    demo: "Run 1.5°C and 3°C scenarios → see asset-level transition risk exposure on a single screen",
  },
  {
    icon: LineChart,
    name: "Peer Analyst",
    tagline: "Benchmarks your position against ASX peers every quarter.",
    capabilities: [
      "Reads and analyses publicly available sustainability reports from named and sector peers",
      "Scores disclosures on completeness, ambition, assurance quality and AASB S2 alignment",
      "Delivers a board-ready benchmarking summary with gap analysis and recommended positioning",
    ],
    demo: "Select peer set → receive quarterly benchmarking report with specific disclosure gap recommendations",
  },
];

export default function ProductAgents() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your eight-agent sustainability team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each agent is a specialist. Together, they cover every dimension of Australian and international
            sustainability reporting — sharing a single data layer and audit trail.
          </p>
        </div>

        <div className="space-y-6">
          {agents.map(({ icon: Icon, name, tagline, capabilities, demo }, i) => (
            <div
              key={name}
              className="rounded-2xl border bg-card p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {/* Agent identity */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Agent {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="text-lg font-bold text-foreground">{name}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{tagline}</p>
                <div className="mt-4 rounded-lg bg-primary/5 border border-primary/10 px-3 py-2">
                  <div className="text-xs font-semibold text-primary mb-1">Demo scenario</div>
                  <div className="text-xs text-muted-foreground">{demo}</div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="lg:col-span-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  Capabilities
                </div>
                <ul className="space-y-3">
                  {capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
