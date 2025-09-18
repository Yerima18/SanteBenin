'use client';

import { ChevronRight } from 'lucide-react';
import { Disease, Language } from '@/types';

// ----------------------------
// PROPS INTERFACE
// ----------------------------
interface DiseaseCardProps {
  disease: Disease;                 // Disease object with all its details
  language: Language;               // Current app language (used for translations)
  onClick: (disease: Disease) => void; // Callback when the card is clicked
}

// ----------------------------
// DISEASE CARD COMPONENT
// ----------------------------
export default function DiseaseCard({ disease, language, onClick }: DiseaseCardProps) {
  return (
    <div 
      className={`disease-card ${disease.color} cursor-pointer`} // Add dynamic color class
      onClick={() => onClick(disease)}                          // Trigger callback with disease
    >
      {/* Top row: disease icon + priority badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{disease.icon}</span>
        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
          {disease.priority}
        </span>
      </div>
      
      {/* Disease name (translated) */}
      <h3 className="text-xl font-bold mb-2">
        {disease.name[language]}
      </h3>
      
      {/* Optional: local/traditional name */}
      {disease.nameLocal && (
        <p className="text-sm opacity-90 mb-2">{disease.nameLocal}</p>
      )}
      
      {/* Prevalence info */}
      <p className="text-sm opacity-80 mb-4">{disease.prevalence}</p>
      
      {/* Right arrow indicator */}
      <div className="flex items-center justify-end">
        <ChevronRight size={16} />
      </div>
    </div>
  );
}
