import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import MenuCard from '../components/ui/MenuCard';
import { menuItems, menuCategories } from '../data/menu';

export default function MenuPage() {
  const [category, setCategory] = useState<string>('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let items = menuItems;
    if (category !== 'All') items = items.filter((i) => i.category === category);
    const q = search.trim().toLowerCase();
    if (q) items = items.filter((i) => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q));
    return items;
  }, [category, search]);

  return (
    <div className="pt-20">
      <section className="py-12 section-pad bg-cream-100 dark:bg-coffee-900">
        <div className="container-max text-center">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent-500 mb-3">Our Menu</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 dark:text-cream-50">Explore Our Offerings</h1>
          <p className="mt-3 text-coffee-600 dark:text-cream-300/70 max-w-xl mx-auto">
            From classic espresso to artisan pastries, every item is crafted with the finest ingredients.
          </p>
        </div>
      </section>

      <section className="py-12 section-pad">
        <div className="container-max">
          {/* Search + Filters */}
          <div className="flex flex-col gap-5 mb-10">
            <div className="relative max-w-md mx-auto w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search menu items..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white dark:bg-coffee-800 border border-coffee-200 dark:border-coffee-700 text-coffee-900 dark:text-cream-100 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 transition-all"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-coffee-400 mr-1" />
              {menuCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    category === cat
                      ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25'
                      : 'bg-white dark:bg-coffee-800 text-coffee-600 dark:text-cream-200 border border-coffee-200 dark:border-coffee-700 hover:border-accent-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-center text-sm text-coffee-500 dark:text-cream-300/60 mb-8">
            Showing {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
            {category !== 'All' && ` in ${category}`}
          </p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-medium text-coffee-500 dark:text-cream-300/60">No items match your search.</p>
              <button onClick={() => { setSearch(''); setCategory('All'); }} className="mt-4 btn-secondary">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((item) => <MenuCard key={item.id} item={item} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
