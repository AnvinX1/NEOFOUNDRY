'use client';

import { Input } from '@/components/ui/input';
import { FontCard } from './FontCard';

interface Font {
  id: string;
  name: string;
  category: string;
  preview: string;
}

interface FontGalleryProps {
  fonts: Font[];
  selectedFontId: string | null;
  onFontSelect: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function FontGallery({
  fonts,
  selectedFontId,
  onFontSelect,
  searchQuery,
  onSearchChange,
}: FontGalleryProps) {
  const filteredFonts = fonts.filter(
    (font) =>
      font.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      font.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-full flex-col space-y-4 overflow-hidden">
      <div>
        <Input
          placeholder="Search fonts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="bg-input text-sm"
        />
      </div>
      <div className="flex-1 overflow-y-auto pr-2">
        <div className="grid gap-3">
          {filteredFonts.map((font) => (
            <FontCard
              key={font.id}
              {...font}
              isSelected={selectedFontId === font.id}
              onSelect={onFontSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
