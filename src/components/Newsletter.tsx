import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-[#1C1917] text-[#FAF9F5] border-b border-[#2C2825]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#E8D3A7] text-[11px] uppercase tracking-[0.25em] font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Private Society</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF9F5] tracking-tight mb-4">
          Enter the World of Gabriel
        </h2>

        <p className="text-sm sm:text-base text-[#D4CEBF] font-light max-w-xl mx-auto mb-8 leading-relaxed">
          Be the first to discover new collections, private launches and exclusive offers.
        </p>

        {subscribed ? (
          <div className="bg-[#2A2623] border border-[#C5A059] p-6 max-w-md mx-auto text-center space-y-2 animate-fadeIn">
            <CheckCircle2 className="w-8 h-8 text-[#C5A059] mx-auto" />
            <h3 className="font-serif text-xl font-normal text-[#FAF9F5]">Welcome to the Society</h3>
            <p className="text-xs text-[#D4CEBF]">You have been granted access to our private communications circle.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-[#A8A29E] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-[#272320] border border-[#3E3834] focus:border-[#C5A059] text-xs text-[#FAF9F5] placeholder-[#A8A29E] pl-11 pr-4 py-3.5 focus:outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-[#C5A059] hover:bg-[#B08C46] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[11px] text-[#A8A29E] mt-4 font-light">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
};
