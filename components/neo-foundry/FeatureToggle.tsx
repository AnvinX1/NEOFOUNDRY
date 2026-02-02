'use client';

import React from 'react';

interface FeatureToggleProps {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onToggle?: (active: boolean) => void;
}

export const FeatureToggle: React.FC<FeatureToggleProps> = ({
  label,
  active = false,
  disabled = false,
  onToggle
}) => {
  return (
    <div
      className={`flex items-center gap-3 cursor-pointer group ${
        disabled ? 'opacity-20 pointer-events-none' : ''
      }`}
      onClick={() => !disabled && onToggle?.(!active)}
    >
      <div
        className={`w-2.5 h-2.5 rounded-full border border-black transition-all ${
          active ? 'bg-black' : 'bg-transparent'
        } group-hover:scale-110`}
      />
      <span className={active ? 'text-black' : 'text-gray-300 group-hover:text-gray-500'}>
        {label}
      </span>
    </div>
  );
};
