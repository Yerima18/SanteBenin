'use client';
import { X, Shield, Activity, Heart, Globe } from 'lucide-react';
import { Disease, Language } from '@/types';
import { translations } from '@/data/translations';

interface DiseaseModalProps {
  disease: Disease;
  language: Language;
  onLanguageChange: (language: Language) => void;
  onClose: () => void;
}

export default function DiseaseModal({ 
  disease, 
  language, 
  onLanguageChange, 
  onClose 
}: DiseaseModalProps) {
  const t = translations[language];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className={`${disease.color} text-white p-6`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{disease.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">
                  {disease.name[language]}
                </h2>
                {disease.nameLocal && (
                  <p className="opacity-90 text-sm">{disease.nameLocal}</p>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="flex items-center space-x-2 bg-white text-black px-2 py-1 rounded shadow-sm">
                <Globe size={16} className="text-gray-600" />
                <select 
                  value={language} 
                  onChange={(e) => onLanguageChange(e.target.value as Language)}
                  className="bg-transparent text-sm focus:outline-none"
                  onClick={e => e.stopPropagation()}
                >
                  <option value="fr">🇫🇷 Français</option>
                  <option value="fon">Fon</option>
                  <option value="yoruba">Yoruba</option>
                </select>
              </div>
              
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Prevention */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Shield className="mr-2 text-green-600" size={20} />
                {t.prevention}
              </h3>
              <ul className="space-y-2">
                {disease.prevention[language].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Symptoms */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Activity className="mr-2 text-orange-600" size={20} />
                {t.symptoms}
              </h3>
              <ul className="space-y-2">
                {disease.symptoms[language].map((symptom, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1 flex-shrink-0">⚠</span>
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Treatment */}
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Heart className="mr-2 text-red-600" size={20} />
              {t.treatment}
            </h3>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="text-red-800">{disease.treatment[language]}</p>
            </div>
          </div>
          
          {/* Statistics */}
          {disease.statistics && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-800">
                {t.statistics}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <span className="font-medium text-blue-700">
                    {t.affectedPeople}
                  </span>
                  <p className="text-blue-600">{disease.statistics.affected}</p>
                </div>
                <div>
                  <span className="font-medium text-blue-700">
                    {t.impact}
                  </span>
                  <p className="text-blue-600">{disease.statistics.mortality}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Sub-diseases */}
          {disease.subDiseases && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {t.includedDiseases}
              </h3>
              <div className="flex flex-wrap gap-2">
                {disease.subDiseases.map((subDisease, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {subDisease}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Language indicator */}
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <span className="text-sm text-gray-600">
              {language === 'fr' && '🇫🇷 Contenu en français'}
              {language === 'fon' && '🇧🇯 Nukun lɛ le Fongbè me'}
              {language === 'yoruba' && '🇧🇯 Àkọọ́lẹ̀ ní èdè Yorùbá'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
