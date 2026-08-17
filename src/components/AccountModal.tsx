import React, { useState } from 'react';
import { X, User, Package, Calendar, Award, LogOut, CheckCircle2 } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('profile');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#FAF9F5] border border-[#E2DDD0] max-w-2xl w-full p-6 sm:p-8 relative text-[#1C1917] max-h-[90vh] overflow-y-auto shadow-2xl">
        
        <button onClick={onClose} className="absolute top-6 right-6 p-1 text-[#57534E] hover:text-[#1C1917]">
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
          <User className="w-4 h-4" />
          <span>Gabriel Patron Suite</span>
        </div>

        <h3 className="font-serif text-3xl font-normal text-[#1C1917] mb-6">
          Privilege Account
        </h3>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E2DDD0] mb-6 text-xs uppercase tracking-wider font-semibold">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-4 border-b-2 transition-all ${
              activeTab === 'profile' ? 'border-[#C5A059] text-[#C5A059]' : 'border-transparent text-[#57534E]'
            }`}
          >
            Patron Profile
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3 px-4 border-b-2 transition-all ${
              activeTab === 'orders' ? 'border-[#C5A059] text-[#C5A059]' : 'border-transparent text-[#57534E]'
            }`}
          >
            Saved Design Notes
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6 text-xs">
            <div className="bg-[#F3F0E6] p-6 border border-[#E2DDD0] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1C1917] text-[#C5A059] flex items-center justify-center font-serif text-xl font-semibold">
                  AS
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#1C1917]">Ananya Sharma</h4>
                  <p className="text-[#57534E]">ananya.s@example.com • +91 98200 88776</p>
                </div>
              </div>

              <div className="bg-[#1C1917] text-[#FAF9F5] px-3 py-1.5 text-[10px] uppercase tracking-widest flex items-center gap-1 font-medium border border-[#C5A059]">
                <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Gold Patron</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#F3F0E6] border border-[#E2DDD0]">
                <span className="text-[#57534E] uppercase tracking-wider block mb-1">Primary Residence</span>
                <p className="font-medium text-[#1C1917]">402 Altamount Luxury Residences, Altamount Road, Mumbai 400026</p>
              </div>

              <div className="p-4 bg-[#F3F0E6] border border-[#E2DDD0]">
                <span className="text-[#57534E] uppercase tracking-wider block mb-1">Privilege Status</span>
                <p className="font-medium text-[#1C1917]">Complimentary Annual Cleaning & Inspection Active</p>
              </div>
            </div>

            <div className="pt-4 flex justify-end items-center border-t border-[#E8E5DA]">
              <button
                onClick={() => alert('Logged out successfully.')}
                className="text-[#57534E] hover:text-red-700 font-medium uppercase tracking-wider flex items-center gap-1"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
            </div>
          </div>
        )}

        {/* Saved Design Notes Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-4 text-xs">
            <div className="p-4 bg-[#F3F0E6] border border-[#E2DDD0]">
              <div className="flex justify-between items-start pb-2 border-b border-[#E2DDD0]">
                <div>
                  <span className="font-mono text-sm font-semibold text-[#1C1917]">Design Inquiry #GAB-849201</span>
                  <p className="text-[#57534E] text-[11px]">Saved on July 14, 2026</p>
                </div>
                <span className="bg-[#C5A059]/10 text-[#C5A059] text-[10px] px-2.5 py-1 uppercase tracking-wider font-semibold border border-[#C5A059]/30">
                  Solitaire Engagement Ring
                </span>
              </div>
              <div className="pt-3 flex justify-between items-center">
                <span className="font-serif text-sm font-normal text-[#1C1917]">The Celestia Solitaire Diamond Ring</span>
                <span className="text-xs font-semibold text-[#C5A059]">18K Gold • 1.5 Ct VVS1</span>
              </div>
            </div>

            <div className="p-4 bg-[#F3F0E6] border border-[#E2DDD0]">
              <div className="flex justify-between items-start pb-2 border-b border-[#E2DDD0]">
                <div>
                  <span className="font-mono text-sm font-semibold text-[#1C1917]">Design Inquiry #GAB-729104</span>
                  <p className="text-[#57534E] text-[11px]">Saved on May 28, 2026</p>
                </div>
                <span className="bg-[#C5A059]/10 text-[#C5A059] text-[10px] px-2.5 py-1 uppercase tracking-wider font-semibold border border-[#C5A059]/30">
                  Statement Gemstone
                </span>
              </div>
              <div className="pt-3 flex justify-between items-center">
                <span className="font-serif text-sm font-normal text-[#1C1917]">The Sovereign Emerald Pendant Necklace</span>
                <span className="text-xs font-semibold text-[#C5A059]">18K Gold • 2.2 Ct Emerald</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
