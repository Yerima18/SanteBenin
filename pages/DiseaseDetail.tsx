
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { DISEASES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const DiseaseDetail: React.FC = () => {
  const ref = useScrollReveal();
  const { slug } = useParams<{ slug: string }>();
  const disease = DISEASES.find(d => d.slug === slug);

  useEffect(() => {
    if (disease) {
      document.title = `SanteBenin | ${disease.name} - Symptômes et Prévention`;
    }
  }, [disease]);

  if (!disease) {
    return <Navigate to="/maladies" replace />;
  }

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">

      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
        <Link to="/" className="hover:text-[#008751] transition-colors">Accueil</Link>
        <span>/</span>
        <Link to="/maladies" className="hover:text-[#008751] transition-colors">Maladies</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">{disease.name}</span>
      </nav>

      <div className="bg-white rounded-3xl sm:rounded-[32px] border border-slate-200 shadow-sm overflow-hidden mb-12">

        {/* Disease hero header — Benin green */}
        <div className="animate-slide-up relative bg-[#008751] p-6 sm:p-8 md:p-12 text-white overflow-hidden">
          {/* Tricolor accent on top of the card */}
          <div className="absolute top-0 left-0 right-0 flex h-[3px]">
            <div className="flex-1 bg-[#008751]"></div>
            <div className="flex-1 bg-[#FCD116]"></div>
            <div className="flex-1 bg-[#E8112D]"></div>
          </div>
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            {disease.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">{disease.name}</h1>
          <p className="text-green-100 text-base sm:text-lg leading-relaxed max-w-2xl">
            {disease.overview}
          </p>
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 right-24 w-32 h-32 bg-[#FCD116]/10 rounded-full -mb-16"></div>
        </div>

        <div className="p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* Left: Symptoms + Transmission */}
            <div className="scroll-reveal">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">!</span>
                Symptômes fréquents
              </h2>
              <ul className="space-y-3">
                {disease.symptoms.map((s, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></div>
                    {s}
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#E8F5E9] text-[#008751] flex items-center justify-center text-sm font-bold">?</span>
                Mode de transmission
              </h2>
              <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm">
                {disease.transmission}
              </p>
            </div>

            {/* Right: Prevention */}
            <div className="scroll-reveal-right">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#E8F5E9] text-[#008751] flex items-center justify-center text-sm font-bold">✓</span>
                Conseils de prévention
              </h2>
              <ul className="space-y-4">
                {disease.prevention.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#008751] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2026 Update */}
          <div className="scroll-reveal mt-16 pt-10 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Mise à jour Santé 2026</h2>
            <div className="bg-[#E8F5E9] border-l-4 border-[#008751] p-6 rounded-r-xl">
              <p className="text-[#1B5E20] leading-relaxed font-medium text-sm">
                {disease.update2026}
              </p>
            </div>
          </div>

          {/* Myth vs Fact */}
          <div className="scroll-reveal mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Mythe vs Réalité</h2>
            <div className="space-y-5">
              {disease.myths.map((m, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Myth */}
                  <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#E8112D] text-white flex items-center justify-center text-xs font-black shrink-0">✕</span>
                      <span className="text-[10px] font-bold text-[#E8112D] uppercase tracking-widest">Mythe</span>
                    </div>
                    <p className="text-red-900 font-medium italic text-sm leading-relaxed">"{m.myth}"</p>
                  </div>
                  {/* Fact */}
                  <div className="bg-[#E8F5E9] p-6 rounded-2xl border border-[#008751]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#008751] text-white flex items-center justify-center text-xs font-black shrink-0">✓</span>
                      <span className="text-[10px] font-bold text-[#008751] uppercase tracking-widest">Réalité scientifique</span>
                    </div>
                    <p className="text-[#1B5E20] font-medium text-sm leading-relaxed">{m.fact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* When to see a doctor */}
          <div className="scroll-reveal-scale mt-16 bg-slate-900 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-[#FCD116]">Quand consulter un médecin ?</h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                {disease.whenToSeekHelp}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:136"
                  className="px-6 py-3 bg-[#E8112D] rounded-xl font-bold hover:bg-red-700 active:scale-95 transition-all"
                >
                  Appeler le 136
                </a>
                <Link
                  to="/urgences"
                  className="px-6 py-3 bg-white/10 rounded-xl font-bold hover:bg-white/20 active:scale-95 transition-all"
                >
                  Guide des urgences
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8112D]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          </div>

          <div className="mt-12 text-center text-slate-400 text-xs italic">
            Dernière révision : Janvier 2026 par l'équipe stratégique SanteBenin.
            <br />
            Avertissement : Ce contenu est à titre éducatif uniquement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetail;
