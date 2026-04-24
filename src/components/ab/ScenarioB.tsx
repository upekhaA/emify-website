import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, AlertCircle, XCircle, MailX } from "lucide-react";

const inbox = [
  {
    id: 1,
    to: "procurement@supplier-a.com.au",
    subject: "AASB S2 Scope 3 data request — action required",
    sent: "14 Mar",
    status: "no-reply",
    statusLabel: "No reply · 12 days",
  },
  {
    id: 2,
    to: "ops.manager@acme-logistics.com",
    subject: "Re: Emissions data for annual sustainability report",
    sent: "18 Mar",
    status: "wrong-format",
    statusLabel: "Wrong format",
  },
  {
    id: 3,
    to: "sustainability@globalparts.com",
    subject: "Re: Re: Scope 3 Category 1 data request",
    sent: "22 Mar",
    status: "blocked",
    statusLabel: "Password-protected PDF",
  },
  {
    id: 4,
    to: "finance@vendor-corp.com.au",
    subject: "Re: Follow-up #3 — AASB S2 supplier data",
    sent: "28 Mar",
    status: "declined",
    statusLabel: "Declined — commercially sensitive",
  },
];

const statusConfig = {
  "no-reply":     { icon: Clock,       dot: "bg-amber-400",  pill: "bg-amber-400/20 text-amber-300 border border-amber-400/30" },
  "wrong-format": { icon: AlertCircle, dot: "bg-orange-400", pill: "bg-orange-400/20 text-orange-300 border border-orange-400/30" },
  "blocked":      { icon: XCircle,     dot: "bg-red-400",    pill: "bg-red-400/20 text-red-300 border border-red-400/30" },
  "declined":     { icon: MailX,       dot: "bg-red-500",    pill: "bg-red-500/20 text-red-300 border border-red-500/30" },
};

const emifySteps = [
  {
    step: "Sends structured requests to all suppliers simultaneously",
    detail: "AASB S2-specific templates, pre-filled with what's already known. All 48 suppliers receive a consistent, professional request.",
  },
  {
    step: "Follows up automatically on a configurable cadence",
    detail: "Day 5, day 10, day 15. Escalates to your team only when a supplier is overdue past your threshold.",
  },
  {
    step: "Extracts data from any format",
    detail: "Excel, PDF (including password-protected), CSV, portal exports. Units normalised. GHG Protocol categories mapped automatically.",
  },
  {
    step: "Sarah reviews and approves — never chases",
    detail: "A clean queue of validated figures replaces a folder of inconsistent attachments. She approves. emify handles the rest.",
  },
];

export default function ScenarioB() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 gradient-hero">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary font-medium mb-8">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
            The Chasing Problem
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Getting data from real people{" "}
            <span className="text-primary">is exhausting.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10 text-balance">
            You know what you need. But getting it from 30 colleagues and 18 suppliers — each with
            their own format, their own timeline, and their own definition of "urgent" — is a
            full-time job. The deadline doesn't care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 text-base" asChild data-track="cta-click" data-variant="B">
              <a href="/contact#demo">Book a demo — let emify do the chasing</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 text-base" asChild>
              <a href="/pricing">See pricing</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            AU data residency · SOC 2 Type II · No lock-in contracts
          </p>
        </div>
      </section>

      {/* Pain point */}
      <section id="pain-point-b" data-ab-section className="py-20 sm:py-28 bg-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* Section intro */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60 mb-4">
              Sound familiar?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Sarah.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Head of Finance at an ASX-listed manufacturer. First year doing AASB S2.
              No dedicated sustainability team. She knows exactly what data she needs —
              getting it from 30 colleagues and 18 suppliers is another matter entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — inbox */}
            <div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
                Without emify
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white/80">Sent — AASB S2 Data Requests</span>
                  <span className="text-xs font-medium text-red-400 bg-red-400/10 border border-red-400/20 rounded-full px-2 py-0.5">
                    32 of 48 unresolved
                  </span>
                </div>

                <div className="divide-y divide-white/5">
                  {inbox.map(({ id, to, subject, sent, status, statusLabel }) => {
                    const cfg = statusConfig[status as keyof typeof statusConfig];
                    const Icon = cfg.icon;
                    return (
                      <div key={id} className="px-4 py-4">
                        <div className="flex items-start justify-between gap-3 mb-1.5">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className={`h-2 w-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
                            <span className="text-sm text-white/70 truncate">{to}</span>
                          </div>
                          <span className="text-xs text-white/30 flex-shrink-0">{sent}</span>
                        </div>
                        <div className="pl-4 flex items-center justify-between gap-3">
                          <span className="text-sm text-white/50 truncate">{subject}</span>
                          <span className={`flex-shrink-0 flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg.pill}`}>
                            <Icon className="h-3 w-3" />
                            {statusLabel}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Summary row */}
                  <div className="px-4 py-3 bg-white/3">
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <span className="h-2 w-2 rounded-full bg-white/20 flex-shrink-0" />
                      <span>28 more recipients</span>
                      <span className="ml-auto">14 no reply · 6 wrong format · 4 password-protected · 4 declined</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white mb-2">
                  Deadline in four days. She submits her best guess.
                </div>
                <p className="text-sm text-white/50 leading-relaxed">
                  The board asks where the Scope 3 Category 1 number came from. She can't
                  confidently answer. That number represents 68% of the total reported footprint.
                </p>
              </div>
            </div>

            {/* Right — emify workflow */}
            <div>
              <div className="text-xs font-semibold text-primary/80 uppercase tracking-widest mb-5">
                With emify — Sarah approves, never chases
              </div>

              <div className="space-y-3">
                {emifySteps.map(({ step, detail }, i) => (
                  <div key={step} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{step}</div>
                      <div className="text-xs text-white/50 leading-relaxed">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-primary/10 border border-primary/25 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">
                      46 of 48 suppliers resolved. Every figure traceable to source.
                    </div>
                    <div className="text-xs text-white/60">
                      When the board asks, Sarah has an answer — and an audit trail behind every number.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button size="lg" className="w-full text-base" asChild data-track="cta-click" data-variant="B">
                  <a href="/contact#demo">Book a demo — let emify do the chasing</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
