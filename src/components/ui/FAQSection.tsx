import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../../data/faq';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(faqItems[0]?.id ?? null);

  return (
    <section className="py-20 section-pad">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent-500 mb-3">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-coffee-900 dark:text-cream-50">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-coffee-600 dark:text-cream-300/70">Everything you need to know before your visit.</p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => {
            const open = openId === item.id;
            return (
              <div key={item.id} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-coffee-900 dark:text-cream-100">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-accent-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm text-coffee-600 dark:text-cream-300/70 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
