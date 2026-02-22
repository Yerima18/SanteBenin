
import React, { useState, useMemo, useEffect } from 'react';
import { DISEASES } from '../constants';
import { Category } from '../types';
import DiseaseCard from '../components/DiseaseCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Diseases: React.FC = () => {
  const ref = useScrollReveal();

  useEffect(() => {
    document.title = "SanteBenin | Catalogue des Maladies et Symptômes";
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const categories = ['All', ...Object.values(Category)];

  const filteredDiseases = useMemo(() => {
    return DISEASES.filter(d => {
      const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           d.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           d.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || d.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="mb-12">
        <h1 className="animate-slide-up text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Répertoire des Maladies
        </h1>
        <p className="animate-slide-up delay-1 text-slate-600 max-w-2xl">
          Consultez notre guide complet sur les maladies courantes au Bénin, leurs symptômes, modes de transmission et méthodes de prévention actualisées pour 2026.
        </p>
      </div>

      <div className="animate-slide-up delay-2 flex flex-col md:flex-row gap-6 mb-12">
        {/* Search */}
        <div className="flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher une maladie, un symptôme, un tag..."
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008751] focus:border-[#008751] transition-all outline-none pl-12 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as Category | 'All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-[#008751] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#008751]/40 hover:text-[#008751]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 flex items-center gap-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Résultats : {filteredDiseases.length} maladie{filteredDiseases.length !== 1 ? 's' : ''}
        </span>
        {searchTerm && (
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="text-xs text-[#008751] font-bold hover:underline"
          >
            · Réinitialiser
          </button>
        )}
      </div>

      {filteredDiseases.length > 0 ? (
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDiseases.map(disease => (
            <DiseaseCard key={disease.id} disease={disease} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 animate-scale-in">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-slate-500 mb-4 font-medium">Aucune maladie ne correspond à votre recherche.</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            className="text-[#008751] font-bold hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
};

export default Diseases;
