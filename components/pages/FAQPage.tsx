'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What file formats are included?',
    answer:
      'All fonts are provided in OTF (OpenType), TTF (TrueType), and WOFF2 formats for maximum compatibility across desktop and web applications.',
  },
  {
    id: '2',
    question: 'Can I use these fonts for commercial projects?',
    answer:
      'Yes! NeoFoundry fonts are licensed for both personal and commercial use. You can use them in client work, branding, and any commercial project without additional licensing fees.',
  },
  {
    id: '3',
    question: 'Do you offer custom font design?',
    answer:
      'We offer consulting services for custom font design and modifications. Contact us at hello@neofoundry.io for custom design inquiries.',
  },
  {
    id: '4',
    question: 'How do I install the fonts?',
    answer:
      'Download the font files and follow your operating system instructions: Mac (Font Book), Windows (Control Panel > Fonts), or Linux (copy to ~/.fonts directory).',
  },
  {
    id: '5',
    question: 'Are there web font licenses available?',
    answer:
      'Yes, web font licenses are available for embedding in websites. Check the individual font pages for web licensing options.',
  },
  {
    id: '6',
    question: 'What is your refund policy?',
    answer:
      'We offer a 30-day money-back guarantee if you are not satisfied with your font purchase. Contact support for refund requests.',
  },
  {
    id: '7',
    question: 'Do fonts include all Unicode characters?',
    answer:
      'Most fonts support Latin Extended, Greek, and Cyrillic. Check individual font specifications for complete character sets.',
  },
  {
    id: '8',
    question: 'Can I modify the fonts?',
    answer:
      'Font modifications require explicit permission from NeoFoundry. Contact us to discuss custom modifications or licensing for font editing.',
  },
];

const FAQItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded">
      <button
        onClick={onToggle}
        className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-left text-sm md:text-base font-bold uppercase tracking-wide">
          {item.question}
        </h3>
        <ChevronDown
          size={20}
          className={`transition-transform shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200 bg-gray-50 animate-slide-in-up">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export const FAQPage: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="w-full max-w-5xl mx-auto space-y-6 p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-6">
          Frequently Asked Questions
        </h1>

        <div className="space-y-3 md:space-y-4">
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm md:text-base text-gray-600 mb-4">
            Still have questions? Contact us at{' '}
            <span className="font-bold">hello@neofoundry.io</span>
          </p>
          <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">
            Last updated: February 2026
          </p>
        </div>
      </div>
    </main>
  );
};
