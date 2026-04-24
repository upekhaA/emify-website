import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, AlertCircle, XCircle, RefreshCw } from "lucide-react";

const inbox = [
  {
    id: 1,
    to: "procurement@supplier-a.com.au",
    subject: "AASB S2 Scope 3 data request — action required",
    sent: "14 Mar",
    status: "no-reply",
    statusLabel: "No reply — 12 days",
    preview: "Hi James, we're preparing our AASB S2 climate disclosure and need your...",
  },
  {
    id: 2,
    to: "ops.manager@acme-logistics.com",
    subject: "Re: Emissions data for annual sustainability report",
    sent: "18 Mar",
    status: "wrong-format",
    statusLabel: "Wrong format",
    preview: "Here's last year's numbers — hope this helps! (attached: FY23_data.xlsx)",
  },
  {
    id: 3,
    to: "sustainability@globalparts.com",
    subject: "Re: Re: Scope 3 Category 1 data request",
    sent: "22 Mar",
    status: "blocked",
    statusLabel: "Password-protected PDF",
    preview: "Please find our emissions report attached. Password sent separately to...",
  },
  {
    id: 4,
    to: "finance@vendor-corp.com.au",
    subject: "Re: Follow-up #3 — AASB S2 supplier data",
    sent: "28 Mar",
    status: "declined",
    statusLabel: "Declined",
    preview: "We appreciate you reaching out, but this data is commercially sensitive and...",
  },
  {
    id: 5,
    to: "28 more recipients...",
    subject: "",
    sent: "",
    status: "pending",
    statusLabel: "14 no reply · 6 wrong format · 4 password-protected",
    preview: "",
  },
];

const statusConfig = {
  "no-reply": { icon: Clock, iconClass: "text-amber-500", barClass: "bg-amber-100 text-amber-700" },
  "wrong-format": { icon: AlertCircle, iconClass: "text-orange-500", barClass: "bg-orange-100 text-orange-700" },
  "blocked": { icon: XCircle, iconClass: "text-red-500", barClass: "bg-red-100 text-red-700" },
  "declined": { icon: XCircle, iconClass: "text-red-500", barClass: "bg-red-100 text-red-700" },
  "pending": { icon: RefreshCw, iconClass: "text-white/40", barClass: "bg-white/10 text-white/50" },
};

const emifyWorkflow = [
  {
    step: "emify sends structured requests",
    detail: "AASB S2-specific templates, pre-filled with what's already known, sent to all 48 suppliers simultaneously.",
    done: true,
  },
  {
    step: "emify follows up automatically",
    detail: "Configurable cadence — day 5, day 10, day 15. Escalates to your team only when overdue past threshold.",
    done: true,
  },
  {
    step: "emify extracts data from any format",
    detail: "Excel, PDF (including password-protected), CSV, portal export. Units normalised. Categories mapped automatically.",
    done: true,
  },
  {
    step: "Sarah reviews and approves",
    detail: "She sees a clean queue of validated figures — not a folder of inconsistent attachments. She approves. Never chases.",
    done: true,
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
            <Button
              size="lg"
              className="px-8 text-base"
              asChild
              data-track="cta-click"
              data-variant="B"
            >
              <a href="/contact#demo">Book a demo — let emify do the chasing</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            AU data residency · SOC 2 Type II · No lock-in contracts
          </p>
        </div>
      </section>

      {/* Pain point — Sarah's chasing story */}
      <section id="pain-point-b" data-ab-section className="py-20 sm:py-28 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left — Sarah's inbox chaos */}
            <div>
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60 mb-6">
                Sound familiar?
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Week six. Sarah's inbox.
              </h2>
              <p className="text-white/60 mb-8">
                She sent emails to 30 people inside the organisation and 18 suppliers. Half didn't
                reply. The rest sent the wrong format, last year's data, or a PDF she can't open.
              </p>

              {/* Inbox mockup */}
              <div className="rounded-xl border border-white/10 bg-black/30 overflow-hidden font-mono">
                <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/60">Sent — AASB S2 Data Requests</span>
                  <span className="text-xs text-red-400 font-medium">32 of 48 unresolved</span>
                </div>
                <div className="divide-y divide-white/5">
                  {inbox.map(({ id, to, subject, sent, status, statusLabel, preview }) => {
                    const cfg = statusConfig[status as keyof typeof statusConfig];
                    const Icon = cfg.icon;
                    return (
                      <div key={id} className="px-4 py-3">
                        {id < 5 ? (
                          <>
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <div className="flex items-center gap-2 min-w-0">
                                <Icon className={`h-3.5 w-3.5 flex-shrink-0 ${cfg.iconClass}`} />
                                <span className="text-xs text-white/70 truncate">{to}</span>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className={`text-xs rounded-full px-2 py-0.5 font-medium ${cfg.barClass}`}>{statusLabel}</span>
                                <span className="text-xs text-white/30">{sent}</span>
                              </div>
                            </div>
                            <div className="text-xs font-medium text-white/80 mb-0.5 pl-5">{subject}</div>
                            <div className="text-xs text-white/40 truncate pl-5">{preview}</div>
                          </>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Icon className={`h-3.5 w-3.5 ${cfg.iconClass}`} />
                            <span className="text-xs text-white/50 font-medium">{to}</span>
                            <span className={`ml-auto text-xs rounded-full px-2 py-0.5 ${cfg.barClass}`}>{statusLabel}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white mb-1">
                  Deadline in four days. She submits her best guess.
                </div>
                <div className="text-sm text-white/60">
                  The board asks where the Scope 3 Category 1 number came from. She can't confidently
                  answer. That number represents 68% of the total footprint.
                  <span className="block mt-1 text-white/40 italic">— Sarah, every sustainability lead at filing time</span>
                </div>
              </div>
            </div>

            {/* Right — emify's automated workflow */}
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs font-medium text-primary mb-6">
                emify handles all outreach, follow-ups and data extraction
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Sarah approves.{" "}
                <span className="text-primary">emify chases.</span>
              </h2>
              <p className="text-white/60 mb-8">
                emify sends structured requests, follows up automatically on a configurable cadence,
                extracts data from any format, and surfaces only what needs a human decision. Sarah
                reviews a clean queue — not a folder of inconsistent attachments.
              </p>

              <div className="space-y-4">
                {emifyWorkflow.map(({ step, detail, done }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-semibold text-white mb-1">{step}</div>
                      <div className="text-xs text-white/60 leading-relaxed">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-primary/15 border border-primary/30 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
                <Button
                  size="lg"
                  className="w-full text-base"
                  asChild
                  data-track="cta-click"
                  data-variant="B"
                >
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
