'use client';

import React from 'react';

interface TextCustomizationBarProps {
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  fontWeight: number;
  onFontWeightChange: (weight: number) => void;
  lineHeight: number;
  onLineHeightChange: (height: number) => void;
}

export const TextCustomizationBar: React.FC<TextCustomizationBarProps> = ({
  fontSize,
  onFontSizeChange,
  fontWeight,
  onFontWeightChange,
  lineHeight,
  onLineHeightChange,
}) => {
  return (
    <div className="space-y-4 rounded-lg border border-border bg-card p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold text-foreground">
            Font Size: {fontSize}px
          </label>
          <input
            type="range"
            min="24"
            max="200"
            value={fontSize}
            onChange={(e) => onFontSizeChange(Number(e.target.value))}
            className="h-2 w-full rounded-lg bg-input appearance-none accent-primary"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold text-foreground">
            Font Weight: {fontWeight}
          </label>
          <input
            type="range"
            min="100"
            max="900"
            step="100"
            value={fontWeight}
            onChange={(e) => onFontWeightChange(Number(e.target.value))}
            className="h-2 w-full rounded-lg bg-input appearance-none accent-primary"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold text-foreground">
            Line Height: {lineHeight.toFixed(1)}
          </label>
          <input
            type="range"
            min="1"
            max="2.5"
            step="0.1"
            value={lineHeight}
            onChange={(e) => onLineHeightChange(Number(e.target.value))}
            className="h-2 w-full rounded-lg bg-input appearance-none accent-primary"
          />
        </div>
      </div>
    </div>
  );
};
