import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
          Don't recruit a sustainability coordinator. Deploy one.
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
          Emify is ready to join your organisation — integrating with your workflows, taking on
          the reporting burden, and keeping management in the picture from day one.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="secondary" className="px-8">
            Request early access
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
          >
            Schedule a demo
          </Button>
        </div>
      </div>
    </section>
  );
}
