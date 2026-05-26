import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Briefcase, MapPin, ExternalLink } from "lucide-react";

const professionals = [
  {
    name: "Sarah Chen",
    title: "Sustainability Director",
    firm: "Chen Sustainability Advisory",
    location: "Sydney, NSW",
    services: ["AASB S2 disclosure", "Scope 3 emissions inventory", "Climate scenario analysis"],
    website: "#",
  },
  {
    name: "James Millard",
    title: "ESG Assurance Partner",
    firm: "Millard & Associates",
    location: "Melbourne, VIC",
    services: ["Limited & reasonable assurance", "NGER audit", "Modern Slavery review"],
    website: "#",
  },
  {
    name: "Priya Nair",
    title: "Climate Risk Consultant",
    firm: "Horizon Climate Consulting",
    location: "Brisbane, QLD",
    services: ["Physical & transition risk assessment", "TCFD gap analysis", "Board training"],
    website: "#",
  },
  {
    name: "Tom Watkins",
    title: "Sustainability Reporting Specialist",
    firm: "Watkins ESG",
    location: "Perth, WA",
    services: ["AASB S2", "Safeguard Mechanism", "GHG inventory verification"],
    website: "#",
  },
  {
    name: "Amelia Foster",
    title: "Supply Chain Sustainability Manager",
    firm: "Foster Supply Co.",
    location: "Adelaide, SA",
    services: ["Scope 3 Cat 1 & 4 data collection", "Supplier engagement", "Modern Slavery due diligence"],
    website: "#",
  },
  {
    name: "David Park",
    title: "Sustainability Accountant",
    firm: "Park ESG Finance",
    location: "Sydney, NSW",
    services: ["Carbon accounting", "NGER reporting", "Transition finance advisory"],
    website: "#",
  },
];

const serviceOptions = [
  "AASB S2 / Climate disclosure",
  "NGER reporting",
  "Modern Slavery Act",
  "Safeguard Mechanism",
  "Scope 3 emissions",
  "Assurance & audit",
  "Climate risk & scenario analysis",
  "Board & executive training",
  "Supply chain due diligence",
  "ESG strategy",
];

const stateOptions = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

export default function DirectoryPage() {
  const [tab, setTab] = useState<"browse" | "register">("browse");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="py-16 sm:py-20 gradient-hero border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
            Sustainability Professional<br />
            <span className="text-primary">Directory</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Find Australian sustainability professionals offering reporting, advisory, and assurance services.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b bg-background sticky top-16 z-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-0">
            {[
              { key: "browse", label: "Browse professionals" },
              { key: "register", label: "Register yourself" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key as "browse" | "register")}
                className={`px-5 py-4 text-sm font-medium border-b-2 transition-colors ${
                  tab === key
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {tab === "browse" && (
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {professionals.map(({ name, title, firm, location, services, website }) => (
                <div key={name} className="rounded-xl border bg-card p-6 flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className="rounded-full bg-primary/10 p-2.5">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <a
                      href={website}
                      className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                    >
                      Website <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Briefcase className="h-3.5 w-3.5" /> {title} · {firm}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" /> {location}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-10">
              Are you a sustainability professional?{" "}
              <button
                onClick={() => setTab("register")}
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                Add your listing →
              </button>
            </p>
          </div>
        </section>
      )}

      {tab === "register" && (
        <section className="py-12">
          <div className="mx-auto max-w-xl px-4 sm:px-6">
            {submitted ? (
              <div className="rounded-xl border bg-card p-10 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h2 className="text-xl font-bold text-foreground mb-2">Listing submitted</h2>
                <p className="text-muted-foreground text-sm">
                  We'll review your details and add your listing to the directory within 2 business days.
                </p>
                <Button className="mt-6" onClick={() => { setSubmitted(false); setTab("browse"); }}>
                  Back to directory
                </Button>
              </div>
            ) : (
              <div className="rounded-xl border bg-card p-8">
                <h2 className="text-xl font-bold text-foreground mb-1">Register as a sustainability professional</h2>
                <p className="text-sm text-muted-foreground mb-6">Free listing. Reviewed and published within 2 business days.</p>
                <form
                  className="space-y-4"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">First name</label>
                      <input required className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Last name</label>
                      <input required className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Job title</label>
                    <input required className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. Sustainability Director" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Firm / Organisation</label>
                    <input required className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">State</label>
                    <select required className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select…</option>
                      {stateOptions.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Services offered</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {serviceOptions.map((s) => (
                        <label key={s} className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          {s}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Website (optional)</label>
                    <input type="url" className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="https://" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Contact email</label>
                    <input required type="email" className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <Button type="submit" className="w-full">Submit listing</Button>
                </form>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
