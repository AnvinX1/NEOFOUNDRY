'use client';

import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface SearchBarProps {
  onSearchChange?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearchChange,
  onCategoryChange
}) => {
  return (
    <div className="border-b border-gray-100 px-8 py-3 flex items-center justify-between text-[12px]">
      <div className="flex items-center gap-10 flex-1">
        <div className="flex items-center gap-2 text-gray-400">
          <Search size={14} strokeWidth={3} />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="bg-transparent outline-none w-32 placeholder-gray-300 font-bold uppercase text-[10px] tracking-widest"
          />
        </div>

        <div className="flex items-center gap-1 cursor-pointer font-bold uppercase tracking-widest text-[10px]">
          Sans Serif <ChevronDown size={14} />
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-[200px]">
          <span className="text-gray-400 font-bold text-[10px]">40px</span>
          <input
            type="range"
            className="w-full h-[1px] bg-gray-200 appearance-none cursor-pointer accent-black"
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <span className="font-bold uppercase text-[10px] tracking-widest">5 Styles Selected</span>
      </div>
    </div>
  );
};
