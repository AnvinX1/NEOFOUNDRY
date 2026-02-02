'use client';

import React from 'react';
import {
  Search,
  ChevronDown,
  RotateCcw,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from 'lucide-react';

interface Font {
  id: string;
  name: string;
  designer: string;
  styles: number;
  category: string;
  variable?: string;
}

interface FontsPageProps {
  selectedFont: Font | null;
  onFontSelect: (font: Font) => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  leading: number;
  onLeadingChange: (leading: number) => void;
  width: number;
  onWidthChange: (width: number) => void;
  weight: number;
  onWeightChange: (weight: number) => void;
  text: string;
  onTextChange: (text: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  textAlign: 'left' | 'center' | 'right';
  onTextAlignChange: (align: 'left' | 'center' | 'right') => void;
  colorMode: 'white' | 'black';
  onColorModeChange: (mode: 'white' | 'black') => void;
  onReset: () => void;
  fonts: Font[];
}

const FeatureToggle: React.FC<{
  label: string;
  active?: boolean;
  disabled?: boolean;
}> = ({ label, active = false, disabled = false }) => (
  <div
    className={`flex items-center gap-3 cursor-pointer group ${
      disabled ? 'opacity-20 pointer-events-none' : ''
    }`}
  >
    <div
      className={`w-2.5 h-2.5 rounded-full border border-black transition-all ${
        active ? 'bg-black' : 'bg-transparent'
      } group-hover:scale-110`}
    />
    <span
      className={
        active
          ? 'text-black text-[9px] md:text-[10px]'
          : 'text-gray-300 group-hover:text-gray-500 text-[9px] md:text-[10px]'
      }
    >
      {label}
    </span>
  </div>
);

export const FontsPage: React.FC<FontsPageProps> = ({
  selectedFont,
  onFontSelect,
  fontSize,
  onFontSizeChange,
  leading,
  onLeadingChange,
  width,
  onWidthChange,
  weight,
  onWeightChange,
  text,
  onTextChange,
  activeFilter,
  onFilterChange,
  textAlign,
  onTextAlignChange,
  colorMode,
  onColorModeChange,
  onReset,
  fonts,
}) => {
  return (
    <>
      {/* Level 2: Secondary Controls */}
      <div className="border-b border-gray-100 py-3 flex items-center justify-between text-[12px] overflow-x-auto px-0">
        <div className="flex items-center gap-4 md:gap-10 flex-1 min-w-0 pl-4">
          <div className="flex items-center gap-2 text-gray-400 shrink-0">
            <Search size={14} strokeWidth={3} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-24 md:w-32 placeholder-gray-300 font-bold uppercase text-[9px] md:text-[10px] tracking-widest"
            />
          </div>

          <div className="flex items-center gap-1 cursor-pointer font-bold uppercase tracking-widest text-[8px] md:text-[10px] whitespace-nowrap">
            Sans Serif <ChevronDown size={12} />
          </div>

          <div className="flex items-center gap-2 md:gap-4 flex-1 max-w-[150px] md:max-w-[200px]">
            <span className="text-gray-400 font-bold text-[8px] md:text-[10px] whitespace-nowrap">
              40px
            </span>
            <input
              type="range"
              className="w-full h-[1px] bg-gray-200 appearance-none cursor-pointer accent-black"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-8 shrink-0 pr-4">
          <span className="font-bold uppercase text-[8px] md:text-[10px] tracking-widest whitespace-nowrap">
            5 Styles
          </span>
          <button 
            onClick={onReset}
            className="flex items-center gap-1 text-gray-400 hover:text-black font-bold uppercase text-[8px] md:text-[10px] tracking-widest"
          >
            <RotateCcw size={12} strokeWidth={3} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Level 3: Text Customization Bar */}
      <div className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-100 gap-3 px-0">
        <div className="flex gap-2 md:gap-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-300 pl-4">
          Your Text
        </div>
        <div className="flex items-center gap-4 md:gap-8 text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] mx-auto">
          {['Cities', 'Pangrams', 'Names'].map((filter) => (
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
        <div className="flex gap-2 md:gap-3 text-gray-200 ml-auto sm:ml-0 pr-4">
          <AlignLeft 
            size={14} 
            className={`cursor-pointer ${textAlign === 'left' ? 'text-black' : 'text-gray-200 hover:text-gray-400'}`}
            onClick={() => onTextAlignChange('left')}
          />
          <AlignCenter 
            size={14} 
            className={`cursor-pointer ${textAlign === 'center' ? 'text-black' : 'text-gray-200 hover:text-gray-400'}`}
            onClick={() => onTextAlignChange('center')}
          />
          <AlignRight 
            size={14} 
            className={`cursor-pointer ${textAlign === 'right' ? 'text-black' : 'text-gray-200 hover:text-gray-400'}`}
            onClick={() => onTextAlignChange('right')}
          />
        </div>
      </div>

      {/* Level 4: Main Lab Canvas */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Quick Sliders Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 border-b border-gray-50 pb-3 gap-3 px-4 pt-4">
          <div className="flex flex-wrap items-center gap-2 md:gap-10 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <div className="flex items-center gap-1 text-black whitespace-nowrap">
              {selectedFont ? selectedFont.name : 'Passenger Sans'}{' '}
              <ChevronDown size={12} strokeWidth={3} />
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              Bold <ChevronDown size={12} strokeWidth={3} />
            </div>

            <div className="flex items-center gap-2 md:gap-4 w-full md:w-40">
              <span className="min-w-[40px] whitespace-nowrap">{fontSize}px</span>
              <input
                type="range"
                min="20"
                max="300"
                value={fontSize}
                onChange={(e) => onFontSizeChange(Number(e.target.value))}
                className="w-full h-[1px] bg-gray-200 appearance-none accent-black"
              />
            </div>

            <div className="flex items-center gap-2 md:gap-4 w-full md:w-40">
              <span className="min-w-[70px] whitespace-nowrap">
                Leading {leading.toFixed(1)}
              </span>
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
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-6 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
            <button className="flex items-center gap-1 text-gray-300 whitespace-nowrap">
              Hide Settings <ChevronDown size={12} strokeWidth={3} />
            </button>
            <span className="text-gray-300">Variable</span>
            <span className="text-black">6 styles</span>
          </div>
        </div>

        {/* Font Gallery */}
        <div className="mb-4 px-4">
          <h3 className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-3 text-gray-400">
            Available Fonts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-28 overflow-y-auto">
            {fonts.map((font) => (
              <button
                key={font.id}
                onClick={() => onFontSelect(font)}
                className={`p-2 rounded text-[8px] md:text-[9px] font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                  selectedFont?.id === font.id
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-600 border-gray-100 hover:border-gray-300'
                }`}
                style={{ fontFamily: font.variable ? `${font.variable}, sans-serif` : 'sans-serif' }}
              >
                {font.name}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editable Area */}
        <div className={`flex-1 flex items-center justify-center overflow-hidden transition-colors duration-300 ${
          colorMode === 'black' ? 'bg-black' : 'bg-transparent'
        }`}>
          <input
            type="text"
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            className={`w-full text-center outline-none bg-transparent uppercase italic transition-colors duration-300 ${
              colorMode === 'black' ? 'text-white caret-white' : 'text-black caret-black'
            }`}
            style={{
              fontSize: `clamp(24px, ${fontSize}px, 100vw)`,
              fontWeight: weight,
              lineHeight: leading,
              letterSpacing: '-0.04em',
              fontFamily: selectedFont?.variable ? `${selectedFont.variable}, sans-serif` : 'sans-serif',
              textAlign: textAlign,
              fontVariationSettings: `'wght' ${weight}, 'wdth' ${width}`,
            }}
          />
        </div>

        <div className="border-t border-gray-100 pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-gray-300 gap-2 px-2 pb-4">
          <span className="text-center sm:text-left w-full sm:w-auto">
            Designed by NeoFoundry Lab // Sector 07
          </span>
          <div className="flex gap-3 md:gap-4 w-full sm:w-auto justify-center sm:justify-end">
            <span className="text-black cursor-pointer hover:text-gray-700">
              Download OTF
            </span>
            <span className="cursor-pointer hover:text-gray-500">License</span>
          </div>
        </div>
      </main>

      {/* Level 5: Detailed Configuration Panels */}
      <footer className="border-t border-gray-100 py-4 px-4 bg-white space-y-6 overflow-y-auto max-h-48 md:max-h-full">
        {/* Row 1: Text Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-start md:items-center text-[8px] md:text-[10px] font-bold uppercase tracking-widest gap-3 md:gap-0">
          <div className="md:col-span-1">Text</div>
          <div className="md:col-span-2 flex gap-3 md:gap-4 text-gray-200">
            <AlignLeft size={14} className="text-black" />
            <AlignCenter size={14} />
            <AlignRight size={14} />
            <div className="border-l border-gray-100 h-4 mx-2" />
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-3 md:gap-8 text-gray-300">
            <span className="text-black">Single</span>
            <span>Words</span>
            <span>Type</span>
            <div className="border-l border-gray-100 h-4 mx-2" />
          </div>
          <div className="md:col-span-3 flex flex-wrap gap-3 md:gap-8 text-gray-300">
            <button 
              onClick={() => onColorModeChange('white')}
              className={`${colorMode === 'white' ? 'text-black border-b-2 border-black pb-1' : 'hover:text-gray-500'}`}
            >
              White
            </button>
            <button 
              onClick={() => onColorModeChange('black')}
              className={`${colorMode === 'black' ? 'text-black border-b-2 border-black pb-1' : 'hover:text-gray-500'}`}
            >
              Black
            </button>
          </div>
          <div className="md:col-span-2 flex justify-start md:justify-end gap-3 md:gap-6">
            <span className="text-black cursor-pointer">Apply</span>
            <span onClick={onReset} className="text-gray-200 hidden md:inline cursor-pointer hover:text-black">Reset</span>
          </div>
        </div>

        {/* Row 2: Variable Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 items-start md:items-center text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
          <div className="md:col-span-1">Variable</div>
          <div className="md:col-span-3 flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
            <span className="text-gray-300 min-w-[60px] md:min-w-[80px]">
              Leading {leading.toFixed(1)}
            </span>
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
          <div className="md:col-span-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
            <span className="text-gray-300 min-w-[50px] md:min-w-[70px]">
              Width {width}%
            </span>
            <input
              type="range"
              min="50"
              max="150"
              step="1"
              value={width}
              onChange={(e) => onWidthChange(Number(e.target.value))}
              className="w-full h-[1px] bg-gray-200 appearance-none accent-black"
            />
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
            <span className="text-gray-300 min-w-[60px] md:min-w-[80px]">
              Weight {weight}
            </span>
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

        {/* Row 3: Features & Sets */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
          <div className="md:col-span-1 pt-1">Features</div>
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 md:gap-y-3">
            <FeatureToggle label="Ligatures" active />
            <FeatureToggle label="Old-style Figures" />
            <FeatureToggle label="Stylistic Alternates" />
            <FeatureToggle label="Proportional" active />
            <FeatureToggle label="Contextual Alternates" />
            <FeatureToggle label="Lining Figures" disabled />
          </div>

          <div className="md:col-span-1 pt-1">Sets</div>
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 md:gap-y-3">
            <FeatureToggle label="Old-style Figures" />
            <FeatureToggle label="Proportional" active />
            <FeatureToggle label="Digital Glitch" active />
          </div>
        </div>
      </footer>
    </>
  );
};
