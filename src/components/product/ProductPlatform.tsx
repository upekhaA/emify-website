import { Server, Shield, Lock, Layers, BookOpen, Globe, RefreshCw, Users } from "lucide-react";

const capabilities = [
  { icon: Server, title: "AU data residency", body: "AWS ap-southeast-2 (Sydney). Your data never leaves Australian jurisdiction." },
  { icon: Shield, title: "SOC 2 Type II", body: "Independently audited. Report available to Enterprise customers under NDA." },
  { icon: Lock, title: "SSO & SAML 2.0", body: "Okta, Azure AD, Google Workspace. MFA enforced. RBAC with custom role definitions." },
  { icon: Layers, title: "150+ integrations", body: "Xero, MYOB, SAP, NetSuite, Procore, AgriWebb, Bloomberg and a REST API for custom." },
  { icon: BookOpen, title: "Framework library", body: "NGER factors, DEFRA, EPA, IEA. AASB S2, GRI, GHG Protocol. Updated automatically." },
  { icon: Globe, title: "Multi-entity", body: "Subsidiaries, JVs, foreign operations. Group consolidation included in Enterprise." },
  { icon: RefreshCw, title: "Real-time sync", body: "Bi-directional sync with connected systems. Configurable refresh intervals from 15 min." },
  { icon: Users, title: "Role-based review", body: "Approval workflows, review queues and sign-off trails customised to your governance model." },
];

export default function ProductPlatform() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Enterprise-grade platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The infrastructure your legal, IT security and audit teams will sign off on.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border bg-card p-5">
              <div className="mb-3 h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-4.5 w-4.5 text-primary" />
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">{title}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
