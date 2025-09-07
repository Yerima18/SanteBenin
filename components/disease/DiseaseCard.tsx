'use client';
import { ChevronRight } from 'lucide-react';
import { Disease, Language } from '@/types';

interface DiseaseCardProps {
  disease: Disease;
  language: Language;
  onClick: (disease: Disease) => void;
}

export default function DiseaseCard({ disease, language, onClick }: DiseaseCardProps) {
  return (
    <div 
      className={`disease-card ${disease.color} cursor-pointer`}
      onClick={() => onClick(disease)}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{disease.icon}</span>
        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
          {disease.priority}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-2">
        {disease.name[language]}
      </h3>
      
      {disease.nameLocal && (
        <p className="text-sm opacity-90 mb-2">{disease.nameLocal}</p>
      )}
      
      <p className="text-sm opacity-80 mb-4">{disease.prevalence}</p>
      
      <div className="flex items-center justify-end">
        <ChevronRight size={16} />
      </div>
    </div>
  );
}