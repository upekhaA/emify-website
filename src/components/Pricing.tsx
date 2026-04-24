import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Contact us",
    description: "For companies taking their first steps in structured sustainability reporting.",
    features: [
      "Scope 1 & 2 emissions tracking",
      "Basic supplier data collection",
      "Regulatory update alerts",
      "Executive summary dashboard",
      "Email support",
    ],
    cta: "Request a quote",
    highlight: false,
  },
  {
    name: "Growth",
    price: "Contact us",
    description: "For companies with CSRD obligations or active ESG programmes.",
    features: [
      "Full Scope 1, 2 & 3 computation",
      "Supplier engagement & follow-up",
      "CSRD / ESRS report drafting",
      "Audit trail & audit facilitation",
      "Risk & opportunity library",
      "Peer benchmarking",
      "Priority support",
    ],
    cta: "Book a demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organisations with complex reporting requirements or multiple entities.",
    features: [
      "Multi-entity & multi-jurisdiction",
      "Custom workflow integrations",
      "Dedicated onboarding",
      "SLA guarantee",
      "Custom data connectors",
      "24/7 support",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Built for the complexity ahead
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Emify scales with your reporting obligations. Start where you are — grow as regulation demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${plan.highlight ? "border-primary shadow-lg ring-2 ring-primary" : ""}`}
            >
              <CardHeader>
                {plan.highlight && (
                  <div className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                    Most popular
                  </div>
                )}
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="text-2xl font-bold">{plan.price}</div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full" variant={plan.highlight ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include onboarding support. Pricing based on organisation size and reporting scope.
        </p>
      </div>
    </section>
  );
}
