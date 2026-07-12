import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import { useToast } from '../contexts/ToastContext';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '142 Maple Street, Portland, OR 97201' },
  { icon: Phone, label: 'Phone', value: '(503) 555-0142', href: 'tel:+15035550142' },
  { icon: Mail, label: 'Email', value: 'hello@brewhavencafe.com', href: 'mailto:hello@brewhavencafe.com' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 7AM–8PM · Sat–Sun: 8AM–6PM' },
];

export default function ContactPage() {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (form.phone && !/^[\d\s+()-]{7,}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setForm({ name: '', email: '', phone: '', message: '' });
    showToast('Message sent! We will get back to you soon.', 'success');
  };

  const set = (field: keyof typeof form, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  return (
    <div className="pt-20">
      <section className="py-12 section-pad bg-cream-100 dark:bg-coffee-900">
        <div className="container-max text-center">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent-500 mb-3">Contact Us</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 dark:text-cream-50">Get in Touch</h1>
          <p className="mt-3 text-coffee-600 dark:text-cream-300/70 max-w-xl mx-auto">
            Have a question or want to book a table? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-12 section-pad">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl font-bold text-coffee-900 dark:text-cream-50 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="block text-sm font-semibold text-coffee-700 dark:text-cream-300 mb-1.5">Name *</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      placeholder="Your full name"
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-coffee-800 border text-coffee-900 dark:text-cream-100 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 transition-all ${errors.name ? 'border-rose-400' : 'border-coffee-200 dark:border-coffee-700'}`}
                    />
                  </div>
                  {errors.name && <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-coffee-700 dark:text-cream-300 mb-1.5">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="you@example.com"
                        className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-coffee-800 border text-coffee-900 dark:text-cream-100 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 transition-all ${errors.email ? 'border-rose-400' : 'border-coffee-200 dark:border-coffee-700'}`}
                      />
                    </div>
                    {errors.email && <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-coffee-700 dark:text-cream-300 mb-1.5">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-coffee-800 border text-coffee-900 dark:text-cream-100 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 transition-all ${errors.phone ? 'border-rose-400' : 'border-coffee-200 dark:border-coffee-700'}`}
                      />
                    </div>
                    {errors.phone && <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-coffee-700 dark:text-cream-300 mb-1.5">Message *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-4 w-5 h-5 text-coffee-400" />
                    <textarea
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-coffee-800 border text-coffee-900 dark:text-cream-100 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 transition-all resize-none ${errors.message ? 'border-rose-400' : 'border-coffee-200 dark:border-coffee-700'}`}
                    />
                  </div>
                  {errors.message && <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.message}</p>}
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-full">
                  {loading ? 'Sending...' : <>Send Message <Send className="w-4 h-4" /></>}
                </button>
              </form>
            </div>

            {/* Info + Map */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-display text-xl font-bold text-coffee-900 dark:text-cream-50 mb-5">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-accent-500/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-accent-500" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-coffee-400 uppercase tracking-wider">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-sm font-medium text-coffee-800 dark:text-cream-100 hover:text-accent-500 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-coffee-800 dark:text-cream-100">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-display text-xl font-bold text-coffee-900 dark:text-cream-50 mb-4">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+15035550142" className="btn-primary flex-1">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a
                    href="https://wa.me/15035550142?text=Hi%20Brew%20Haven%20Caf%C3%A9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1"
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="glass-card overflow-hidden">
                <iframe
                  title="Brew Haven Café Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.0!2d-122.6765!3d45.5231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzIzLjIiTiAxMjLCsDQwJzM1LjQiVw!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
