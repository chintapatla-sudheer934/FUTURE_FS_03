import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15035550142?text=Hi%20Brew%20Haven%20Caf%C3%A9%2C%20I%27d%20like%20to%20know%20more"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] flex items-center justify-center shadow-2xl shadow-[#25D366]/40 transition-all hover:scale-110 active:scale-95 animate-float"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  );
}
