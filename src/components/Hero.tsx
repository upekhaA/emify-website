import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm text-muted-foreground mb-8">
          <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Built for CSRD — now in early access
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Meet your AI{" "}
          <span className="text-primary">sustainability teammate</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-4">
          Emify does the work of a full-time sustainability coordinator — collecting data across your
          organisation, chasing suppliers, computing emissions, drafting CSRD reports, and keeping
          management informed — without the hire.
        </p>

        <p className="mx-auto max-w-xl text-base text-muted-foreground mb-10">
          It doesn't just surface insights. It acts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8">
            Request early access
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            See a demo
          </Button>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Trusted by sustainability leads and CFOs at mid-market companies
        </p>
      </div>
    </section>
  );
}
