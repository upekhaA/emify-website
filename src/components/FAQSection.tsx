import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface Faq {
  question: string;
  answer: string;
}

interface Props {
  title?: string;
  faqs: Faq[];
}

export default function FAQSection({ title = "Common questions", faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 border-t">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">{title}</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="rounded-xl border bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm text-foreground leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
