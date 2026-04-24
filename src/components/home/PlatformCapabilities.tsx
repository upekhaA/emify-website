import { Shield, Server, Lock, Layers, BookOpen, Globe } from "lucide-react";

const capabilities = [
  {
    icon: Server,
    title: "Australian data residency",
    body: "All data is stored and processed in AWS ap-southeast-2 (Sydney). Your sustainability data never leaves Australian jurisdiction.",
  },
  {
    icon: Shield,
    title: "SOC 2 Type II",
    body: "Independently audited against the AICPA Trust Service Criteria. Full report available to Enterprise customers under NDA.",
  },
  {
    icon: Lock,
    title: "SSO & SAML 2.0",
    body: "Integrates with Okta, Azure AD, Google Workspace and any SAML 2.0 provider. MFA enforced across all tiers.",
  },
  {
    icon: Layers,
    title: "150+ integrations",
    body: "Pre-built connectors for Xero, MYOB, SAP S/4HANA, NetSuite, Procore, AgriWebb, Bloomberg and more. REST API for custom connections.",
  },
  {
    icon: BookOpen,
    title: "Framework library",
    body: "Built-in emission factor libraries (NGER, DEFRA, EPA, IEA), ESRS/AASB S2 disclosure templates, GRI indexes and GHG Protocol worksheets.",
  },
  {
    icon: Globe,
    title: "Multi-entity & multi-jurisdiction",
    body: "Manage reporting across subsidiaries, joint ventures and foreign operations in a single workspace. Enterprise tier supports group consolidation.",
  },
];

export default function PlatformCapabilities() {
  return (
    <section className="py-20 sm:py-28 gradient-section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Enterprise-grade platform, right-sized for you
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Security and compliance infrastructure that your legal, IT and audit teams can rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border bg-card p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
