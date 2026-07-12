import { useMemo, useState } from 'react';
import Lightbox from '../components/ui/Lightbox';
import { galleryImages, galleryCategories } from '../data/gallery';

export default function GalleryPage() {
  const [category, setCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (category === 'All') return galleryImages;
    return galleryImages.filter((img) => img.category === category);
  }, [category]);

  return (
    <div className="pt-20">
      <section className="py-12 section-pad bg-cream-100 dark:bg-coffee-900">
        <div className="container-max text-center">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent-500 mb-3">Gallery</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 dark:text-cream-50">A Glimpse Inside</h1>
          <p className="mt-3 text-coffee-600 dark:text-cream-300/70 max-w-xl mx-auto">
            Take a visual tour of our café, our coffee, and the moments that make us special.
          </p>
        </div>
      </section>

      <section className="py-12 section-pad">
        <div className="container-max">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
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

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setLightboxIndex(i)}
                className="block w-full overflow-hidden rounded-2xl group relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm font-medium text-white">{img.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
