'use client';

import React from 'react';

interface Font {
  id: string;
  name: string;
  category: string;
  preview: string;
}

interface PreviewCanvasProps {
  selectedFont: Font | null;
  previewText: string;
  onTextChange: (text: string) => void;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

export const PreviewCanvas: React.FC<PreviewCanvasProps> = ({
  selectedFont,
  previewText,
  onTextChange,
  fontSize,
  fontWeight,
  lineHeight,
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center rounded-lg border border-border bg-card/50 p-8 overflow-hidden">
      <textarea
        value={previewText}
        onChange={(e) => onTextChange(e.target.value)}
        className="w-full h-full bg-transparent text-center outline-none resize-none text-foreground placeholder-muted-foreground"
        placeholder="Enter text to preview..."
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: fontWeight,
          lineHeight: lineHeight,
          fontFamily: selectedFont?.name || 'system-ui, -apple-system',
          letterSpacing: '-0.02em',
        }}
      />
      {selectedFont && (
        <p className="mt-4 text-xs text-muted-foreground">
          {selectedFont.name} • {selectedFont.category}
        </p>
      )}
    </div>
  );
};
