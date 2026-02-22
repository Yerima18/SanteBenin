
import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Prevention: React.FC = () => {
  const ref = useScrollReveal();

  const sections = [
    {
      id: 'hygiene',
      title: 'Hygiène & Assainissement',
      icon: '🧼',
      iconBg: 'bg-[#E8F5E9]',
      accent: '#008751',
      tips: [
        'Lavage des mains régulier au savon après passage aux toilettes.',
        'Traitement de l\'eau de boisson (bouillir, filtrer ou chlorer).',
        'Lavage systématique des fruits et légumes à l\'eau propre.',
        'Gestion correcte des ordures ménagères pour éviter les mouches.',
      ],
    },
    {
      id: 'vectors',
      title: 'Protection Vectorielle',
      icon: '🦟',
      iconBg: 'bg-amber-50',
      accent: '#D97706',
      tips: [
        'Dormir chaque nuit sous moustiquaire imprégnée (MII).',
        'Destruction des gîtes larvaires (eaux stagnantes, vieux pneus).',
        'Utilisation de grillages aux fenêtres et portes.',
        'Désinsectisation périodique des habitations.',
      ],
    },
    {
      id: 'maternal',
      title: 'Santé Maternelle & Infantile',
      icon: '🤱',
      iconBg: 'bg-rose-50',
      accent: '#E8112D',
      tips: [
        'Respect strict du calendrier vaccinal dès la naissance.',
        'Allaitement maternel exclusif jusqu\'à 6 mois.',
        'Consultations prénatales régulières pour les femmes enceintes.',
        'Utilisation du traitement préventif intermittent (TPI) contre le paludisme.',
      ],
    },
    {
      id: 'nutrition',
      title: 'Nutrition & Alimentation Saine',
      icon: '🥗',
      iconBg: 'bg-orange-50',
      accent: '#EA580C',
      tips: [
        'Consommer des légumes verts riches en fer : épinards, feuilles de morelle.',
        'Diversifier les protéines : poisson frais, légumineuses, œufs locaux.',
        'Limiter les aliments ultra-transformés et les boissons sucrées.',
        'Assurer 3 repas équilibrés par jour incluant tubercules, céréales et fruits.',
      ],
    },
  ];

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">

      {/* Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="animate-slide-up text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
          Mieux vaut prévenir que guérir
        </h1>
        <p className="animate-slide-up delay-1 text-lg text-slate-600">
          Adopter des gestes simples au quotidien permet de réduire de 80% l'incidence des maladies courantes au Bénin.
        </p>
      </div>

      {/* 4 Prevention Sections — 2×2 grid */}
      <div className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {sections.map((section) => (
          <Link
            id={section.id}
            key={section.id}
            to={`/prevention/${section.id}`}
            className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all scroll-mt-24 block"
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`w-16 h-16 ${section.iconBg} rounded-2xl flex items-center justify-center text-3xl`}>
                {section.icon}
              </div>
              <span
                className="mt-1 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: section.iconBg }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: section.accent }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-slate-900 transition-colors">{section.title}</h3>
            <ul className="space-y-4">
              {section.tips.map((tip, i) => (
                <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: section.accent }}
                  ></span>
                  {tip}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold transition-colors" style={{ color: section.accent }}>
              Voir le guide complet
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Climate & Health Banner */}
      <div className="scroll-reveal-scale bg-[#006B3F] rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-16 text-white relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              Contexte 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Risques Climatiques & Santé</h2>
            <p className="text-green-100 mb-8 leading-relaxed">
              Le changement climatique au Bénin entraîne des vagues de chaleur plus intenses et des inondations fréquentes. En 2026, la prévention inclut désormais :
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="p-1.5 bg-[#FCD116]/20 rounded-lg">☀️</span>
                Hydratation régulière, même sans sensation de soif.
              </li>
              <li className="flex items-center gap-3">
                <span className="p-1.5 bg-[#FCD116]/20 rounded-lg">🌧️</span>
                Vigilance accrue sur la qualité de l'eau après les inondations.
              </li>
              <li className="flex items-center gap-3">
                <span className="p-1.5 bg-[#FCD116]/20 rounded-lg">🏠</span>
                Amélioration de la ventilation naturelle des habitats.
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center p-12 text-center">
              <p className="text-green-100 italic text-lg leading-relaxed">
                "La santé est un état de complet bien-être physique, mental et social."
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FCD116]/10 rounded-full blur-3xl -mb-48 -mr-48"></div>
      </div>

    </div>
  );
};

export default Prevention;
