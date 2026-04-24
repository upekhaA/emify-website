import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          Don't recruit a sustainability coordinator. Deploy one.
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Emify is ready to join your organisation today. Eight agents, one audit trail, purpose-built for
          Australia — and available in the time it takes to book a call.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button size="lg" variant="secondary" className="px-8 text-base" asChild>
            <a href="/contact#demo">Book a demo</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 text-base border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href="/pricing">View pricing</a>
          </Button>
        </div>
        <p className="text-sm text-primary-foreground/60">
          Early-adopter pricing available · No lock-in · AU data residency guaranteed
        </p>
      </div>
    </section>
  );
}
