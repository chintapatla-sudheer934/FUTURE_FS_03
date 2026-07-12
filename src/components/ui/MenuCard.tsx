import { Star } from 'lucide-react';
import type { MenuItem } from '../../data/menu';

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="glass-card overflow-hidden card-hover group">
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {item.popular && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-accent-500 text-white shadow-lg">
            Popular
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/40 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold text-coffee-900 dark:text-cream-50">{item.name}</h3>
          <span className="font-display text-lg font-bold text-accent-500 whitespace-nowrap">${item.price.toFixed(2)}</span>
        </div>
        <p className="mt-2 text-sm text-coffee-600 dark:text-cream-300/70 leading-relaxed">{item.description}</p>
        <div className="mt-3 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
          ))}
          <span className="ml-1 text-xs text-coffee-400">Popular pick</span>
        </div>
      </div>
    </div>
  );
}
