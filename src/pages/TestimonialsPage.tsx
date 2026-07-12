import { Star, Quote } from 'lucide-react';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { testimonials } from '../data/testimonials';

const stats = [
  { end: 500, suffix: '+', label: 'Reviews' },
  { end: 48, suffix: '', label: '5-Star Ratings' },
  { end: 98, suffix: '%', label: 'Would Recommend' },
  { end: 15, suffix: '+', label: 'Years Trusted' },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <section className="py-12 section-pad bg-cream-100 dark:bg-coffee-900">
        <div className="container-max text-center">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent-500 mb-3">Testimonials</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 dark:text-cream-50">Loved by Our Community</h1>
          <p className="mt-3 text-coffee-600 dark:text-cream-300/70 max-w-xl mx-auto">
            Real stories from real customers. See why Brew Haven is Portland's favorite café.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 section-pad">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center glass-card p-6">
                <p className="font-display text-4xl font-bold text-accent-500">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm font-medium text-coffee-600 dark:text-cream-300/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 section-pad">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review) => (
              <div key={review.id} className="glass-card p-6 card-hover">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-accent-400/40" />
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-coffee-700 dark:text-cream-200/80 leading-relaxed">"{review.text}"</p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-coffee-100 dark:border-coffee-800">
                  <img src={review.image} alt={review.name} loading="lazy" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-coffee-900 dark:text-cream-50">{review.name}</p>
                    <p className="text-xs text-accent-500 font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
