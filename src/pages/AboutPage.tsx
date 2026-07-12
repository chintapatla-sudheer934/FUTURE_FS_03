import { Target, Eye, Heart, Coffee } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const team = [
  { name: 'Sarah Mitchell', role: 'Founder & Head Barista', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'James Park', role: 'Master Roaster', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Maria Lopez', role: 'Pastry Chef', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Tom Anderson', role: 'Operations Manager', image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const values = [
  { icon: Target, title: 'Our Mission', description: 'To serve exceptional coffee and food that brings people together, creating a warm space where every guest feels at home.' },
  { icon: Eye, title: 'Our Vision', description: 'To be Portland\'s most loved café — a community hub where quality, sustainability, and genuine hospitality meet.' },
  { icon: Heart, title: 'Our Values', description: 'Quality without compromise, genuine care for our community, and a relentless pursuit of the perfect cup.' },
];

const stats = [
  { end: 15, suffix: '+', label: 'Years Serving' },
  { end: 50, suffix: 'K+', label: 'Cups Served' },
  { end: 12, suffix: '', label: 'Team Members' },
  { end: 100, suffix: '%', label: 'Organic' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Story */}
      <section className="py-20 section-pad">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent-500 mb-3">Our Story</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-coffee-900 dark:text-cream-50">
                From a Small Dream to a Beloved Café
              </h2>
              <div className="mt-5 space-y-4 text-coffee-600 dark:text-cream-300/70 leading-relaxed">
                <p>
                  Brew Haven Café was born in 2011 from a simple passion: to create a space where great coffee and genuine community come together. What started as a tiny corner shop with a single espresso machine has grown into one of Portland's most cherished café destinations.
                </p>
                <p>
                  Our founder, Sarah Mitchell, traveled the world studying coffee culture — from the bustling cafés of Melbourne to the traditional espresso bars of Rome. She brought that knowledge home to create a café that honors the craft of coffee while making everyone who walks through the door feel like family.
                </p>
                <p>
                  Today, we roast our own beans, bake our pastries fresh every morning, and serve every cup with the same love and care that started it all.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Café interior" loading="lazy" className="rounded-2xl h-full object-cover shadow-lg" />
              <img src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Coffee being brewed" loading="lazy" className="rounded-2xl h-full object-cover shadow-lg mt-8" />
            </div>
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

      {/* Mission / Vision / Values */}
      <section className="py-20 section-pad">
        <div className="container-max">
          <SectionHeading eyebrow="What Drives Us" title="Our Mission, Vision & Values" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={i} className="glass-card p-8 card-hover">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-5 shadow-lg shadow-accent-500/30">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-coffee-900 dark:text-cream-50">{value.title}</h3>
                <p className="mt-3 text-sm text-coffee-600 dark:text-cream-300/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 section-pad bg-cream-100 dark:bg-coffee-900">
        <div className="container-max">
          <SectionHeading eyebrow="The People" title="Meet Our Team" subtitle="The passionate individuals who make every visit special." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="glass-card overflow-hidden card-hover group">
                <div className="relative h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/60 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-bold text-coffee-900 dark:text-cream-50">{member.name}</h3>
                  <p className="text-sm text-accent-500 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="py-16 section-pad">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto">
            <Coffee className="w-10 h-10 text-accent-400 mx-auto mb-4" />
            <p className="font-display text-2xl sm:text-3xl font-medium text-coffee-800 dark:text-cream-100 italic leading-relaxed">
              "Coffee is a hug in a mug. Our job is to make sure every hug is perfect."
            </p>
            <p className="mt-4 text-sm font-semibold text-accent-500">— Sarah Mitchell, Founder</p>
          </div>
        </div>
      </section>
    </div>
  );
}
