import { Button } from "@/components/ui/button";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 gradient-hero">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary font-medium mb-8">
          <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
          Purpose-built for Australian sustainability obligations
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Your AI sustainability coordinator.{" "}
          <span className="text-primary">Eight agents. One audit trail.</span>
        </h1>

        <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground mb-10 text-balance">
          Emify is an AI-powered sustainability coordinator purpose-built for Australian reporting
          obligations. Eight specialised agents collect supplier data, code invoices, draft AASB S2
          disclosures and keep you audit-ready for NGER, the Modern Slavery Act and the Safeguard
          Mechanism — at a fraction of the cost of hiring, outsourcing or standing up a team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button size="lg" className="px-8 text-base" asChild>
            <a href="/contact#demo">Book a demo</a>
          </Button>
          <Button size="lg" variant="outline" className="px-8 text-base" asChild>
            <a href="/pricing">See pricing</a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          AU data residency · SOC 2 Type II · No lock-in contracts
        </p>
      </div>
    </section>
  );
}
