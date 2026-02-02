'use client';

import React, { useState } from 'react';
import { FontGallery } from './FontGallery';
import { PreviewSection } from './PreviewSection';

interface Font {
  id: string;
  name: string;
  category: string;
  preview: string;
}

const FONTS: Font[] = [
  { id: 'neon-void', name: 'NEON-VOID', category: 'Display', preview: 'Typography' },
  { id: 'cyber-grid', name: 'CYBER-GRID', category: 'Monospace', preview: 'Code' },
  { id: 'glitch-min', name: 'GLITCH-MIN', category: 'Variable', preview: 'Minimal' },
  { id: 'synth-path', name: 'SYNTH-PATH', category: 'Sans', preview: 'Modern' },
  { id: 'proxy-mono', name: 'PROXY-MONO', category: 'Monospace', preview: 'Retro' },
  { id: 'vector-pun', name: 'VECTOR-PUN', category: 'Serif', preview: 'Elegant' },
  { id: 'acid-drip', name: 'ACID-DRIP', category: 'Weird', preview: 'Trippy' },
  { id: 'neo-tech', name: 'NEO-TECH', category: 'Display', preview: 'Futuristic' },
  { id: 'pulse-beat', name: 'PULSE-BEAT', category: 'Variable', preview: 'Vibrant' },
  { id: 'chrome-edge', name: 'CHROME-EDGE', category: 'Sans', preview: 'Sleek' },
];

export const NeoFoundryContainer: React.FC = () => {
  const [selectedFontId, setSelectedFontId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [previewText, setPreviewText] = useState('Discover the best minimalist & cyberpunk fonts');
  const [fontSize, setFontSize] = useState(64);
  const [fontWeight, setFontWeight] = useState(700);
  const [lineHeight, setLineHeight] = useState(1.4);

  const selectedFont = FONTS.find((f) => f.id === selectedFontId) || null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex h-screen">
        {/* Sidebar Gallery */}
        <aside className="w-80 border-r border-border bg-sidebar p-4 overflow-hidden">
          <div className="space-y-2 mb-4">
            <h1 className="text-2xl font-bold text-sidebar-foreground">FontLab</h1>
            <p className="text-xs text-muted-foreground">
              Explore minimalist, cyberpunk & weird fonts
            </p>
          </div>
          <FontGallery
            fonts={FONTS}
            selectedFontId={selectedFontId}
            onFontSelect={setSelectedFontId}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </aside>

        {/* Main Preview Area */}
        <main className="flex-1 flex flex-col p-6 overflow-hidden">
          <PreviewSection
            selectedFont={selectedFont}
            previewText={previewText}
            onPreviewTextChange={setPreviewText}
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
            fontWeight={fontWeight}
            onFontWeightChange={setFontWeight}
            lineHeight={lineHeight}
            onLineHeightChange={setLineHeight}
          />
        </main>
      </div>
    </div>
  );
};
