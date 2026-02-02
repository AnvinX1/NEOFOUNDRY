'use client';

import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="w-full max-w-5xl mx-auto space-y-6 p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-6">
          Terms of Use
        </h1>

        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">
            1. License Grant
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            NeoFoundry® grants you a non-exclusive, non-transferable license to use the fonts for personal and commercial projects. The fonts are licensed, not sold. You agree not to sell, redistribute, or modify the fonts without explicit permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">
            2. Allowed Use
          </h2>
          <ul className="text-sm md:text-base text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
            <li>Install fonts on any device you own or control</li>
            <li>Use fonts in desktop applications, web designs, and digital media</li>
            <li>Embed fonts in PDFs and digital publications</li>
            <li>Use fonts for commercial projects and client work</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">
            3. Prohibited Use
          </h2>
          <ul className="text-sm md:text-base text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
            <li>Do not redistribute or resell the fonts</li>
            <li>Do not modify or create derivatives without permission</li>
            <li>Do not use fonts for illegal activities</li>
            <li>Do not rent or lease the fonts</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">
            4. Limitations of Liability
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            NeoFoundry® is provided "as is" without warranties. We shall not be liable for any damages arising from the use or inability to use the fonts.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">
            5. Termination
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            This license is effective until terminated. Your rights under this license will terminate automatically without notice if you fail to comply with any terms.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">
            Last updated: February 2026
          </p>
        </div>
      </div>
    </main>
  );
};
