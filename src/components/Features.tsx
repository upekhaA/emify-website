import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Shield, BarChart3, Users, RefreshCw, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing fast",
    description: "Real-time updates and instant syncing keep your team on the same page without the lag.",
  },
  {
    icon: Users,
    title: "Built for teams",
    description: "Collaboration tools designed around how modern teams actually work together.",
  },
  {
    icon: BarChart3,
    title: "Powerful analytics",
    description: "Understand your workflow with clear insights and actionable metrics.",
  },
  {
    icon: Shield,
    title: "Enterprise-grade security",
    description: "SOC 2 compliant with end-to-end encryption and fine-grained access control.",
  },
  {
    icon: RefreshCw,
    title: "Seamless integrations",
    description: "Connect with your existing tools — Slack, GitHub, Jira, and 100+ more.",
  },
  {
    icon: Lock,
    title: "Privacy first",
    description: "Your data is yours. We never sell it, and you can export or delete it anytime.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Everything your team needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Emify combines the tools you rely on into one cohesive platform that adapts to your team's way of working.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
