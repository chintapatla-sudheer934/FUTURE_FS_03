import { useState, type FormEvent } from 'react';
import { Send, Mail } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

export default function Newsletter() {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setEmail('');
    showToast('Successfully subscribed to our newsletter!', 'success');
  };

  return (
    <section className="py-16 section-pad">
      <div className="container-max">
        <div className="glass-card p-8 sm:p-12 text-center max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-accent-500/30">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-display text-2xl font-bold text-coffee-900 dark:text-cream-50">Join Our Newsletter</h3>
          <p className="mt-2 text-sm text-coffee-600 dark:text-cream-300/70">
            Get the latest updates on new menu items, special offers, and events — straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-white dark:bg-coffee-800 border border-coffee-200 dark:border-coffee-700 text-coffee-900 dark:text-cream-100 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500 transition-all"
            />
            <button type="submit" disabled={loading} className="btn-primary whitespace-nowrap">
              {loading ? 'Subscribing...' : <>Subscribe <Send className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
