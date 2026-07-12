import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [index, images.length, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-coffee-950/90 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <button className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" onClick={onClose}>
        <X className="w-6 h-6" />
      </button>
      <button
        className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + images.length) % images.length); }}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <img
        src={images[index].src}
        alt={images[index].alt}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % images.length); }}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/70">{images[index].alt}</p>
    </div>
  );
}
