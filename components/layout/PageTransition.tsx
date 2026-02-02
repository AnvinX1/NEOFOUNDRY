'use client';

import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isActive: boolean;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  isActive,
}) => {
  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
};
