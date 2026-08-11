import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, CheckCircle2, MapPin } from 'lucide-react';

interface BespokeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BespokeModal: React.FC<BespokeModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Custom Engagement Ring',
    preferredCity: 'Mumbai Flagship Atelier',
    date: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#1C1917] border border-[#C5A059]/40 max-w-2xl w-full p-6 sm:p-10 relative text-[#FAF9F5] max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#A8A29E] hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Atelier Private Service</span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF9F5] mb-2">
          Bespoke Jewellery Consultation
        </h3>

        <p className="text-xs text-[#D4CEBF] font-light leading-relaxed mb-6">
          Collaborate directly with Gabriel master goldsmiths to translate your personal narrative into a one-of-a-kind high fine jewellery masterpiece.
        </p>

        {submitted ? (
          <div className="bg-[#2A2623] border border-[#C5A059] p-8 text-center space-y-4 my-6">
            <CheckCircle2 className="w-12 h-12 text-[#C5A059] mx-auto" />
            <h4 className="font-serif text-2xl font-normal text-[#FAF9F5]">Appointment Confirmed</h4>
            <p className="text-xs text-[#D4CEBF] leading-relaxed max-w-md mx-auto font-light">
              Thank you, <span className="font-semibold text-white">{formData.name}</span>. Senior Atelier Concierge has received your consultation request and will contact you via WhatsApp/Phone within 4 business hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-[#C5A059] text-white px-8 py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-[#B08C46]"
            >
              Return to Atelier
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#D4CEBF] uppercase tracking-wider mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Vikram Sharma"
                  className="w-full bg-[#272320] border border-[#3E3834] focus:border-[#C5A059] text-[#FAF9F5] p-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#D4CEBF] uppercase tracking-wider mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#272320] border border-[#3E3834] focus:border-[#C5A059] text-[#FAF9F5] p-3 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#D4CEBF] uppercase tracking-wider mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="vikram@example.com"
                className="w-full bg-[#272320] border border-[#3E3834] focus:border-[#C5A059] text-[#FAF9F5] p-3 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#D4CEBF] uppercase tracking-wider mb-1">Creation Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full bg-[#272320] border border-[#3E3834] focus:border-[#C5A059] text-[#FAF9F5] p-3 focus:outline-none"
                >
                  <option value="Custom Engagement Ring">Custom Engagement Ring</option>
                  <option value="Bespoke Bridal Suite">Bespoke Bridal Suite</option>
                  <option value="Heirloom Redesign & Gem Setting">Heirloom Redesign & Gem Setting</option>
                  <option value="High Jewellery Necklace Commission">High Jewellery Necklace Commission</option>
                </select>
              </div>

              <div>
                <label className="block text-[#D4CEBF] uppercase tracking-wider mb-1">Consultation Format</label>
                <select
                  value={formData.preferredCity}
                  onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
                  className="w-full bg-[#272320] border border-[#3E3834] focus:border-[#C5A059] text-[#FAF9F5] p-3 focus:outline-none"
                >
                  <option value="Castle Hill Store (297 Old Northern Rd)">In-Person: Castle Hill Store (297 Old Northern Rd, NSW)</option>
                  <option value="Sydney Private Salon">In-Person: Sydney Private Salon</option>
                  <option value="Virtual VIP Video Session">Virtual: Private HD Video Suite</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#D4CEBF] uppercase tracking-wider mb-1">Preferred Date & Notes</label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Share any vision details, target gemstone preferences, or date flexibility..."
                className="w-full bg-[#272320] border border-[#3E3834] focus:border-[#C5A059] text-[#FAF9F5] p-3 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-white py-4 uppercase tracking-[0.25em] font-medium text-xs transition-colors"
            >
              Request Private Atelier Appointment
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
