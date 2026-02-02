'use client';

import React from 'react';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onAlignChange?: (align: 'left' | 'center' | 'right') => void;
}

const FILTER_OPTIONS = ['Cities', 'Pangrams', 'Names'];

export const FilterBar: React.FC<FilterBarProps> = ({
  activeFilter,
  onFilterChange,
  onAlignChange
}) => {
  return (
    <div className="px-8 py-4 flex items-center justify-between border-b border-gray-100">
      <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-300">
        Your Text
      </div>
      <div className="flex items-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em]">
        {FILTER_OPTIONS.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={
              activeFilter === filter
                ? 'text-black'
                : 'text-gray-300 hover:text-gray-500'
            }
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex gap-3 text-gray-200">
        <button onClick={() => onAlignChange?.('left')} className="hover:text-black transition-colors">
          <AlignLeft size={16} />
        </button>
        <button onClick={() => onAlignChange?.('center')} className="text-black hover:text-gray-400 transition-colors">
          <AlignCenter size={16} />
        </button>
        <button onClick={() => onAlignChange?.('right')} className="hover:text-black transition-colors">
          <AlignRight size={16} />
        </button>
      </div>
    </div>
  );
};
