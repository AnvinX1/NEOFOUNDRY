'use client';

import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="w-full max-w-5xl mx-auto space-y-8 p-6 md:p-10">
        <section className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight">
            About NeoFoundry
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            NeoFoundry is a digital typography foundry specializing in minimalist, cyberpunk, and experimental typefaces. Founded in 2024, we believe that type design should push boundaries, challenge conventions, and inspire creativity.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">
            Our Mission
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            We create fonts that tell stories. Each typeface in our collection is designed with intentionality—whether it's a sleek minimalist sans-serif for modern interfaces or a wild experimental display font for creative projects. We empower designers and creators to express their vision through type.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">
            The Process
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Every font in the NeoFoundry collection undergoes a rigorous design process:
          </p>
          <ul className="text-sm md:text-base text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
            <li>Conceptualization and research into design trends</li>
            <li>Detailed sketching and digital crafting</li>
            <li>Extensive testing across multiple platforms</li>
            <li>Refinement and feedback iterations</li>
            <li>Final release and ongoing support</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">
            Our Fonts
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Our collection features hand-crafted typefaces ranging from clean, minimalist designs perfect for modern web interfaces to experimental fonts that push the boundaries of typography. Each font is optimized for both print and digital use.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">
            Community
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            NeoFoundry is more than just a font foundry—it's a community of designers, developers, and type enthusiasts. We regularly share design insights, tutorials, and updates about new typefaces. Join us on our social channels to stay connected.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">
            Get in Touch
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
          <div className="pt-4 space-y-2">
            <p className="text-sm font-bold">
              Email:{' '}
              <span className="text-gray-600 font-normal">hello@neofoundry.io</span>
            </p>
            <p className="text-sm font-bold">
              Location:{' '}
              <span className="text-gray-600 font-normal">
                Internet • Sector 07
              </span>
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">
            © 2024-2026 NeoFoundry® • All rights reserved
          </p>
        </div>
      </div>
    </main>
  );
};
