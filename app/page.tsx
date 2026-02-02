'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { FontsPage } from '@/components/pages/FontsPage';
import { TermsPage } from '@/components/pages/TermsPage';
import { FAQPage } from '@/components/pages/FAQPage';
import { AboutPage } from '@/components/pages/AboutPage';
import { LoadingSkeleton } from '@/components/loading/LoadingSkeleton';

interface Font {
    id: string;
    name: string;
    designer: string;
    styles: number;
    category: string;
    variable?: string;
  }

  const App = () => {
    const [activeTab, setActiveTab] = useState('Fonts');
    const [selectedFont, setSelectedFont] = useState<Font | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    // Design States
    const [fontSize, setFontSize] = useState(150);
    const [leading, setLeading] = useState(0.9);
    const [width, setWidth] = useState(100);
    const [weight, setWeight] = useState(400);
    const [text, setText] = useState('Edit Mode');
    const [activeFilter, setActiveFilter] = useState('Names');
    const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('center');
    const [colorMode, setColorMode] = useState<'white' | 'black'>('white');
  
    const cyberpunkFonts: Font[] = [
      { id: 'neon-void', name: 'NEON-VOID', designer: 'Akira Tech', styles: 8, category: 'Display', variable: 'var(--font-orbitron)' },
      { id: 'cyber-grid', name: 'CYBER-GRID', designer: 'Data Stream', styles: 12, category: 'Mono', variable: 'var(--font-share-tech-mono)' },
      { id: 'glitch-min', name: 'GLITCH-MIN', designer: 'System-0', styles: 4, category: 'Variable', variable: 'var(--font-rubik-glitch)' },
      { id: 'synth-path', name: 'SYNTH-PATH', designer: 'Retro Fut', styles: 6, category: 'Sans', variable: 'var(--font-rajdhani)' },
      { id: 'proxy-mono', name: 'PROXY-MONO', designer: 'Kernel', styles: 10, category: 'Mono', variable: 'var(--font-jetbrains-mono)' },
      { id: 'vector-pun', name: 'VECTOR-PUN', designer: 'Neon Soul', styles: 5, category: 'Serif', variable: 'var(--font-cinzel)' },
    ];

  const navItems = ['Fonts', 'Terms', 'FAQ', 'About']; // Declare navItems variable here

  // Simulate initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleFontClick = (font: Font) => {
    setSelectedFont(font);
    setText(font.name);
    setActiveTab('Fonts');
  };

  if (isLoading) {
    return (
      <div className="h-[100dvh] w-full bg-white font-sans text-[#1A1A1A] flex flex-col">
      <div className="w-full h-full flex flex-col">
        <LoadingSkeleton />
      </div>
    </div>
    );
  }

  return (
    <div className="h-[100dvh] w-full bg-white font-sans text-[#1A1A1A] flex flex-col overflow-hidden">
      {/* Main Container - Full Screen Seamless */}
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        selectedFontName={selectedFont?.name}
      />

      <div className="flex-1 flex flex-col overflow-hidden animate-fade-in">
        {activeTab === 'Fonts' && (
          <FontsPage
            selectedFont={selectedFont}
            onFontSelect={handleFontClick}
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
            leading={leading}
            onLeadingChange={setLeading}
            width={width}
            onWidthChange={setWidth}
            weight={weight}
            onWeightChange={setWeight}
            text={text}
            onTextChange={setText}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            textAlign={textAlign}
            onTextAlignChange={setTextAlign}
            colorMode={colorMode}
            onColorModeChange={setColorMode}
            onReset={() => {
              setFontSize(150);
              setLeading(0.9);
              setWidth(100);
              setWeight(400);
              setText('Edit Mode');
              setTextAlign('center');
              setColorMode('white');
            }}
            fonts={cyberpunkFonts}
          />
        )}

        {activeTab === 'Terms of Use' && <TermsPage />}
        {activeTab === "FAQ's" && <FAQPage />}
        {activeTab === 'About' && <AboutPage />}
      </div>
    </div>
  );
};

export default App;
