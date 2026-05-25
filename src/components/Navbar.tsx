import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const navGroups = [
  {
    label: "Compliance",
    items: [
      { label: "AASB S2", href: "/aasb-s2", desc: "Climate-related financial disclosures" },
      { label: "NGER Reporting", href: "/nger", desc: "Emissions & energy reporting" },
      { label: "Modern Slavery Act", href: "/modern-slavery-act", desc: "Supply chain statements" },
      { label: "Safeguard Mechanism", href: "/safeguard-mechanism", desc: "Stay under baseline" },
      { label: "Scope 3 Emissions", href: "/scope-3", desc: "Value-chain footprint" },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Mining & Resources", href: "/industries/mining", desc: "NGER, Safeguard, Scope 3" },
      { label: "Financial Services", href: "/industries/financial-services", desc: "PCAF, APRA CPG 229" },
      { label: "Agriculture", href: "/industries/agriculture", desc: "NGER Ag, MLA, ACCUs" },
      { label: "Real Estate", href: "/industries/real-estate", desc: "NABERS, GRESB" },
      { label: "Construction", href: "/industries/construction", desc: "EPDs, ISC ratings" },
      { label: "Retail", href: "/industries/retail", desc: "Scope 3 across thousands of suppliers" },
      { label: "Manufacturing", href: "/industries/manufacturing", desc: "Product carbon, CBAM" },
      { label: "Healthcare", href: "/industries/healthcare", desc: "Hospital & aged care" },
      { label: "Government & Public Sector", href: "/industries/government", desc: "Procurement-driven reporting" },
    ],
  },
  {
    label: "For Suppliers",
    items: [
      { label: "Browse all supplier types", href: "/for-suppliers", desc: "Pick your situation" },
      { label: "Farmers & Primary Producers", href: "/for-suppliers/farmer", desc: "Cattle, grain, dairy, horticulture" },
      { label: "Food & Beverage Producers", href: "/for-suppliers/food-producer", desc: "Retailer Scope 3 responses" },
      { label: "Logistics & Transport", href: "/for-suppliers/logistics-provider", desc: "Per-shipment emissions" },
      { label: "Cleaning & Facility Services", href: "/for-suppliers/cleaning-services", desc: "Property contracts" },
      { label: "IT Services & Software", href: "/for-suppliers/it-services", desc: "Vendor questionnaires" },
      { label: "Construction Subcontractors", href: "/for-suppliers/construction-subcontractor", desc: "EPDs & ISC data" },
      { label: "Get started — fixed monthly fee", href: "/for-suppliers/signup", desc: "Sign up in 2 minutes" },
    ],
  },
  {
    label: "Compare",
    items: [
      { label: "vs Sustainability Coordinator", href: "/vs/sustainability-coordinator", desc: "A$322k hire vs A$75k/yr" },
      { label: "vs Big 4 Consultants", href: "/vs/consultants", desc: "Own every artefact" },
      { label: "vs Watershed", href: "/vs/watershed", desc: "AU-first vs US-centric" },
      { label: "vs Persefoni", href: "/vs/persefoni", desc: "AASB S2 vs TCFD-only" },
      { label: "vs Sweep", href: "/vs/sweep", desc: "NGER automation advantage" },
      { label: "vs Workiva", href: "/vs/workiva", desc: "Purpose-built vs GRC add-on" },
    ],
  },
];

function Dropdown({ group }: { group: typeof navGroups[0] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {group.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-72 rounded-xl border bg-background shadow-lg p-2 z-50">
          {group.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 hover:bg-muted transition-colors"
              onClick={() => setOpen(false)}
            >
              <div className="text-sm font-medium text-foreground">{item.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">e</span>
          </div>
          <span className="text-xl font-bold tracking-tight">emify</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <a href="/product" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Product
          </a>
          {navGroups.map((g) => (
            <Dropdown key={g.label} group={g} />
          ))}
          <a href="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </a>
          <a href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="/contact">Sign in</a>
          </Button>
          <Button size="sm" asChild>
            <a href="/contact#demo">Request a demo</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-muted-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-background px-4 py-4 space-y-1">
          {[
            { label: "Product", href: "/product" },
            { label: "For Suppliers", href: "/for-suppliers" },
            { label: "Locations", href: "/locations" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
            { label: "Resources", href: "/resources" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="block py-2 text-sm font-medium text-foreground hover:text-primary">
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-2">
            <Button className="w-full" asChild>
              <a href="/contact#demo">Request a demo</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
