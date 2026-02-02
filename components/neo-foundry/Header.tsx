'use client';

import React from 'react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  selectedFontName?: string;
}

const NAV_ITEMS = ['Fonts', 'Terms of Use', "FAQ's", 'About'];

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  selectedFontName
}) => {
  return (
    <header className="flex items-center justify-between border-b border-gray-100 h-14 px-8">
      <div className="flex items-center gap-14 h-full">
        <span className="text-lg font-black tracking-tighter uppercase italic">
          NEOFOUNDRY®
        </span>
        <nav className="flex h-14">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => onTabChange(item)}
              className={`px-8 h-full transition-colors flex items-center text-[11px] font-bold uppercase tracking-widest ${
                activeTab === item
                  ? 'bg-black text-white'
                  : 'text-gray-400 hover:text-black hover:bg-gray-50'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
      <div className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em]">
        {selectedFontName ? `${selectedFontName} Selected` : 'No Fonts Selected'}
      </div>
    </header>
  );
};
