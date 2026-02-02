'use client';

import React, { useState } from 'react';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { FeatureToggle } from './FeatureToggle';

interface ControlPanelProps {
  fontSize: number;
  leading: number;
  width: number;
  weight: number;
  onLeadingChange: (value: number) => void;
  onWidthChange: (value: number) => void;
  onWeightChange: (value: number) => void;
}

const FEATURES = [
  { label: 'Ligatures', active: true },
  { label: 'Old-style Figures' },
  { label: 'Stylistic Alternates' },
  { label: 'Proportional', active: true },
  { label: 'Contextual Alternates' },
  { label: 'Lining Figures', disabled: true }
];

const STYLISTIC_SETS = [
  { label: 'Old-style Figures' },
  { label: 'Proportional', active: true },
  { label: 'Digital Glitch', active: true }
];

export const ControlPanel: React.FC<ControlPanelProps> = ({
  fontSize,
  leading,
  width,
  weight,
  onLeadingChange,
  onWidthChange,
  onWeightChange
}) => {
  const [features, setFeatures] = useState(
    FEATURES.map(f => ({ ...f, currentActive: f.active || false }))
  );
  const [sets, setSets] = useState(
    STYLISTIC_SETS.map(s => ({ ...s, currentActive: s.active || false }))
  );

  const handleFeatureToggle = (index: number) => {
    const newFeatures = [...features];
    if (!newFeatures[index].disabled) {
      newFeatures[index].currentActive = !newFeatures[index].currentActive;
      setFeatures(newFeatures);
    }
  };

  const handleSetToggle = (index: number) => {
    const newSets = [...sets];
    newSets[index].currentActive = !newSets[index].currentActive;
    setSets(newSets);
  };

  return (
    <footer className="border-t border-gray-100 p-8 bg-white space-y-10">
      {/* Text Controls Row */}
      <div className="grid grid-cols-12 items-center text-[10px] font-bold uppercase tracking-widest">
        <div className="col-span-1">Text</div>
        <div className="col-span-2 flex gap-4 text-gray-200">
          <button className="text-black hover:text-gray-400 transition-colors">
            <AlignLeft size={16} />
          </button>
          <button className="hover:text-black transition-colors">
            <AlignCenter size={16} />
          </button>
          <button className="hover:text-black transition-colors">
            <AlignRight size={16} />
          </button>
          <div className="border-l border-gray-100 h-4 mx-2" />
        </div>
        <div className="col-span-4 flex items-center gap-8 text-gray-300">
          <span className="text-black">Single</span>
          <span>Words</span>
          <span>Type</span>
          <div className="border-l border-gray-100 h-4 mx-2" />
        </div>
        <div className="col-span-3 flex items-center gap-8 text-gray-300">
          <span className="text-black border-b-2 border-black pb-1">White</span>
          <span>Black</span>
        </div>
        <div className="col-span-2 flex justify-end gap-6">
          <span className="text-black">Apply to All</span>
          <span className="text-gray-200">Reset All</span>
        </div>
      </div>

      {/* Variable Sliders Row */}
      <div className="grid grid-cols-12 gap-10 items-center text-[10px] font-bold uppercase tracking-widest">
        <div className="col-span-1">Variable</div>
        <div className="col-span-3 flex items-center gap-4">
          <span className="text-gray-300 min-w-[80px]">Leading {leading}</span>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={leading}
            onChange={(e) => onLeadingChange(Number(e.target.value))}
            className="w-full h-[1px] bg-gray-200 appearance-none accent-black"
          />
        </div>
        <div className="col-span-4 flex items-center gap-4">
          <span className="text-gray-300 min-w-[70px]">Width {width}</span>
          <input
            type="range"
            min="0.5"
            max="1.5"
            step="0.1"
            value={width}
            onChange={(e) => onWidthChange(Number(e.target.value))}
            className="w-full h-[1px] bg-gray-200 appearance-none accent-black"
          />
        </div>
        <div className="col-span-4 flex items-center gap-4">
          <span className="text-gray-300 min-w-[80px]">Weight {weight}</span>
          <input
            type="range"
            min="100"
            max="900"
            step="100"
            value={weight}
            onChange={(e) => onWeightChange(Number(e.target.value))}
            className="w-full h-[1px] bg-gray-200 appearance-none accent-black"
          />
        </div>
      </div>

      {/* Features & Sets Row */}
      <div className="grid grid-cols-12 gap-10 text-[10px] font-bold uppercase tracking-widest">
        <div className="col-span-1 pt-1">Features</div>
        <div className="col-span-5 grid grid-cols-2 gap-y-3">
          {features.map((feature, index) => (
            <FeatureToggle
              key={index}
              label={feature.label}
              active={feature.currentActive}
              disabled={feature.disabled}
              onToggle={() => handleFeatureToggle(index)}
            />
          ))}
        </div>

        <div className="col-span-1 pt-1">Stylistic Sets</div>
        <div className="col-span-5 grid grid-cols-2 gap-y-3">
          {sets.map((set, index) => (
            <FeatureToggle
              key={index}
              label={set.label}
              active={set.currentActive}
              onToggle={() => handleSetToggle(index)}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
