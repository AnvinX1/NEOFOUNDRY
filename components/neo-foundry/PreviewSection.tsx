'use client';

import { useState } from 'react';
import { PreviewCanvas } from './PreviewCanvas';
import { TextCustomizationBar } from './TextCustomizationBar';
import { ControlPanel } from './ControlPanel';

interface Font {
  id: string;
  name: string;
  category: string;
  preview: string;
}

interface PreviewSectionProps {
  selectedFont: Font | null;
  previewText: string;
  onPreviewTextChange: (text: string) => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  fontWeight: number;
  onFontWeightChange: (weight: number) => void;
  lineHeight: number;
  onLineHeightChange: (height: number) => void;
}

export function PreviewSection({
  selectedFont,
  previewText,
  onPreviewTextChange,
  fontSize,
  onFontSizeChange,
  fontWeight,
  onFontWeightChange,
  lineHeight,
  onLineHeightChange,
}: PreviewSectionProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="flex h-full flex-col space-y-4">
      <TextCustomizationBar
        fontSize={fontSize}
        onFontSizeChange={onFontSizeChange}
        fontWeight={fontWeight}
        onFontWeightChange={onFontWeightChange}
        lineHeight={lineHeight}
        onLineHeightChange={onLineHeightChange}
      />
      <PreviewCanvas
        selectedFont={selectedFont}
        previewText={previewText}
        onTextChange={onPreviewTextChange}
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
      />
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          {showAdvanced ? '−' : '+'} Advanced Settings
        </button>
      </div>
      {showAdvanced && <ControlPanel />}
    </div>
  );
}
