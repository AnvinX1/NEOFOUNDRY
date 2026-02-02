'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  selectedFontName?: string;
}

const navItems = ['Fonts', 'Terms of Use', "FAQ's", 'About'];

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  selectedFontName,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b border-gray-100 h-14 px-4 bg-white sticky top-0 z-40">
      <div className="flex items-center gap-4 md:gap-14 h-full flex-1">
        <span className="text-sm md:text-lg font-black tracking-tighter uppercase italic whitespace-nowrap">
          NEOFOUNDRY®
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex h-14">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onTabChange(item)}
              className={`px-4 lg:px-8 h-full transition-colors flex items-center text-[10px] lg:text-[11px] font-bold uppercase tracking-widest ${
                activeTab === item
                  ? 'bg-black text-white'
                  : 'text-gray-400 hover:text-black hover:bg-gray-50'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden ml-auto p-2"
        >
          {mobileMenuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="absolute top-14 left-0 right-0 bg-white border-b border-gray-100 md:hidden flex flex-col animate-slide-in-down">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                onTabChange(item);
                setMobileMenuOpen(false);
              }}
              className={`px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-left transition-colors ${
                activeTab === item
                  ? 'bg-black text-white'
                  : 'text-gray-400 hover:text-black hover:bg-gray-50'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      )}

      {/* Selected Font Display */}
      <div className="text-gray-300 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-right whitespace-nowrap ml-2">
        {selectedFontName ? `${selectedFontName} Selected` : 'No Font Selected'}
      </div>
    </header>
  );
};
