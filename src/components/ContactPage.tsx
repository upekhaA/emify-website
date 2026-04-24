import { Button } from "@/components/ui/button";
import { Building2, Mail, Phone, Clock } from "lucide-react";

const paths = [
  {
    id: "demo",
    label: "Enterprise demo",
    desc: "For organisations exploring Growth or Enterprise. 45-minute live demo tailored to your industry and reporting obligations.",
    cta: "Book a demo",
    email: "demo@emify.com.au",
  },
  {
    id: "starter",
    label: "Self-serve signup",
    desc: "Starter plan customers can sign up and connect their first data source in under 30 minutes.",
    cta: "Start free trial",
    email: "signup@emify.com.au",
  },
  {
    id: "support",
    label: "Customer support",
    desc: "For existing customers. Growth and Enterprise customers can also call the priority line.",
    cta: "Open a ticket",
    email: "support@emify.com.au",
  },
  {
    id: "partnerships",
    label: "Partnerships",
    desc: "Accounting firms, law firms, ERP vendors and industry associations looking to partner or refer.",
    cta: "Get in touch",
    email: "partners@emify.com.au",
  },
  {
    id: "press",
    label: "Press & media",
    desc: "Media enquiries, spokesperson requests and editorial access to Emify's regulatory intelligence.",
    cta: "Contact press",
    email: "press@emify.com.au",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 sm:py-20 gradient-hero border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
            Let's talk sustainability
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Choose the right path below. Our team is based in Sydney and Melbourne and
            responds within one business day.
          </p>
        </div>
      </section>

      {/* Contact paths */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {paths.map(({ id, label, desc, cta, email }) => (
              <div
                key={id}
                id={id}
                className={`rounded-xl border bg-card p-6 flex flex-col ${
                  id === "demo" ? "ring-2 ring-primary" : ""
                }`}
              >
                {id === "demo" && (
                  <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                    Most requested
                  </div>
                )}
                <h3 className="text-base font-bold text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{desc}</p>
                <a
                  href={`mailto:${email}`}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors mb-3"
                >
                  {email}
                </a>
                <Button
                  variant={id === "demo" ? "default" : "outline"}
                  size="sm"
                  asChild
                >
                  <a href={`mailto:${email}`}>{cta}</a>
                </Button>
              </div>
            ))}
          </div>

          {/* Office details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border bg-card p-6">
              <Building2 className="h-5 w-5 text-primary mb-3" />
              <div className="text-sm font-semibold text-foreground mb-1">Sydney (HQ)</div>
              <div className="text-sm text-muted-foreground">Level 10, 1 Martin Place<br />Sydney NSW 2000</div>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <Building2 className="h-5 w-5 text-primary mb-3" />
              <div className="text-sm font-semibold text-foreground mb-1">Melbourne</div>
              <div className="text-sm text-muted-foreground">Level 7, 380 Collins Street<br />Melbourne VIC 3000</div>
            </div>
            <div className="rounded-xl border bg-card p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground font-medium">1300 EMIFY 1</span>
              </div>
              <div className="text-xs text-muted-foreground">(1300 364 391)</div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Mon–Fri 8am–7pm AEST</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@emify.com.au" className="text-sm text-primary hover:underline">
                  hello@emify.com.au
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-8">
            Emify Pty Ltd · ABN [to be confirmed] · Registered in New South Wales, Australia
          </p>
        </div>
      </section>
    </div>
  );
}
