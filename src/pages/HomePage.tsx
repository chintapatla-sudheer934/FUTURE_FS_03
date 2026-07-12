import { ArrowRight, Coffee, Leaf, Award, Clock, Star, Quote } from 'lucide-react';
import Button from '../components/ui/Button';
import MenuCard from '../components/ui/MenuCard';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import SectionHeading from '../components/ui/SectionHeading';
import { menuItems } from '../data/menu';
import { testimonials } from '../data/testimonials';

const features = [
  { icon: Coffee, title: 'Artisan Coffee', description: 'Beans roasted in-house daily for the freshest cup possible.' },
  { icon: Leaf, title: 'Organic Ingredients', description: 'Locally sourced, organic produce in every dish we serve.' },
  { icon: Award, title: 'Award Winning', description: 'Voted Best Café in Portland three years running.' },
  { icon: Clock, title: 'Fast Service', description: 'Quick, friendly service without ever cutting corners.' },
];

const stats = [
  { end: 15, suffix: '+', label: 'Years of Passion' },
  { end: 50, suffix: 'K+', label: 'Happy Customers' },
  { end: 30, suffix: '+', label: 'Menu Items' },
  { end: 48, suffix: '', label: 'Five-Star Reviews' },
];

export default function HomePage() {
  const featured = menuItems.filter((m) => m.popular).slice(0, 4);
  const featuredReviews = testimonials.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-cafe bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/70 via-coffee-950/50 to-coffee-950/70" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cream-100 text-sm font-medium mb-6 animate-fade-in">
            <Coffee className="w-4 h-4 text-accent-400" /> Portland's Favorite Coffee Spot
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance animate-fade-up">
            Welcome to <span className="text-accent-400">Brew Haven</span> Café
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-cream-100/90 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Your cozy neighborhood coffee haven — where every cup tells a story and every visit feels like home.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button to="/menu" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>Order Now</Button>
            <Button to="/contact" variant="secondary">Book a Table</Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 section-pad bg-cream-100 dark:bg-coffee-900">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-4xl sm:text-5xl font-bold text-accent-500">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm font-medium text-coffee-600 dark:text-cream-300/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-20 section-pad">
        <div className="container-max">
          <SectionHeading
            eyebrow="Our Specials"
            title="Featured Menu Items"
            subtitle="Handcrafted with love, served with pride. Try our most-loved picks."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item) => <MenuCard key={item.id} item={item} />)}
          </div>
          <div className="text-center mt-10">
            <Button to="/menu" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>View Full Menu</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 section-pad bg-cream-100 dark:bg-coffee-900">
        <div className="container-max">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Brew Haven Difference"
            subtitle="We are passionate about crafting the perfect coffee experience for every guest."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass-card p-6 card-hover text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-accent-500/30">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-coffee-900 dark:text-cream-50">{feature.title}</h3>
                <p className="mt-2 text-sm text-coffee-600 dark:text-cream-300/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 section-pad">
        <div className="container-max">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
            subtitle="Don't just take our word for it — hear from our wonderful community."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <div key={review.id} className="glass-card p-6 card-hover">
                <Quote className="w-8 h-8 text-accent-400/40 mb-3" />
                <p className="text-sm text-coffee-700 dark:text-cream-200/80 leading-relaxed">"{review.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <img src={review.image} alt={review.name} loading="lazy" className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-coffee-900 dark:text-cream-50">{review.name}</p>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 text-amber-400" fill="currentColor" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/testimonials" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>Read More Reviews</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-pad">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-coffee-800 to-coffee-950 p-10 sm:p-16 text-center">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent-600/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream-50 text-balance">
                Ready for Your Perfect Cup?
              </h2>
              <p className="mt-3 text-cream-200/80 max-w-lg mx-auto">
                Visit us today or book a table for a memorable coffee experience. We can't wait to serve you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/menu" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>Explore Menu</Button>
                <a href="tel:+15035550142" className="btn-secondary">
                  <Coffee className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
