'use client';

import { Button } from '@/components/ui/button';

interface FontCardProps {
  id: string;
  name: string;
  category: string;
  preview: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function FontCard({
  id,
  name,
  category,
  preview,
  isSelected,
  onSelect,
}: FontCardProps) {
  return (
    <button
      onClick={() => onSelect(id)}
      className={`group relative overflow-hidden rounded-lg border-2 p-4 text-left transition-all duration-300 ${
        isSelected
          ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(169,_39,_209,_0.3)]'
          : 'border-border bg-card hover:border-primary/50 hover:shadow-[0_0_15px_rgba(169,_39,_209,_0.15)]'
      }`}
    >
      <div className="space-y-2">
        <div
          style={{ fontFamily: name }}
          className="text-sm font-bold tracking-tight text-foreground"
        >
          {preview}
        </div>
        <div className="space-y-1">
          <h3 className="text-xs font-semibold text-foreground">{name}</h3>
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>
      </div>
      {isSelected && (
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
}
