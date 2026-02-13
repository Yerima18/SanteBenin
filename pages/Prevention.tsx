
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Prevention: React.FC = () => {
  const ref = useScrollReveal();

  const sections = [
    {
      title: 'Hygiène & Assainissement',
      icon: '🧼',
      tips: [
        'Lavage des mains régulier au savon après passage aux toilettes.',
        'Traitement de l\'eau de boisson (bouillir, filtrer ou chlorer).',
        'Lavage systématique des fruits et légumes à l\'eau propre.',
        'Gestion correcte des ordures ménagères pour éviter les mouches.'
      ]
    },
    {
      title: 'Protection Vectorielle',
      icon: '🦟',
      tips: [
        'Dormir chaque nuit sous moustiquaire imprégnée (MII).',
        'Destruction des gîtes larvaires (eaux stagnantes, vieux pneus).',
        'Utilisation de grillages aux fenêtres et portes.',
        'Désinsectisation périodique des habitations.'
      ]
    },
    {
      title: 'Santé Maternelle & Infantile',
      icon: '🤱',
      tips: [
        'Respect strict du calendrier vaccinal dès la naissance.',
        'Allaitement maternel exclusif jusqu\'à 6 mois.',
        'Consultations prénatales régulières pour les femmes enceintes.',
        'Utilisation du traitement préventif intermittent (TPI) contre le paludisme.'
      ]
    }
  ];

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="animate-slide-up text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Mieux vaut prévenir que guérir</h1>
        <p className="animate-slide-up delay-1 text-lg text-slate-600">
          Adopter des gestes simples au quotidien permet de réduire de 80% l'incidence des maladies courantes au Bénin.
        </p>
      </div>

      <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl sm:rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
              {section.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-6">{section.title}</h3>
            <ul className="space-y-4">
              {section.tips.map((tip, i) => (
                <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="scroll-reveal-scale bg-indigo-900 rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-16 text-white relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Contexte 2026</span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Risques Climatiques & Santé</h2>
            <p className="text-indigo-100 mb-8 leading-relaxed">
              Le changement climatique au Bénin entraîne des vagues de chaleur plus intenses et des inondations fréquentes. En 2026, la prévention inclut désormais :
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="p-1 bg-indigo-500 rounded-lg">☀️</span>
                Hydratation régulière, même sans sensation de soif.
              </li>
              <li className="flex items-center gap-3">
                <span className="p-1 bg-indigo-500 rounded-lg">🌧️</span>
                Vigilance accrue sur la qualité de l'eau après les inondations.
              </li>
              <li className="flex items-center gap-3">
                <span className="p-1 bg-indigo-500 rounded-lg">🏠</span>
                Amélioration de la ventilation naturelle des habitats.
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
             <div className="w-full h-80 bg-indigo-800/50 rounded-3xl border border-indigo-700 flex items-center justify-center italic text-indigo-300 p-12 text-center">
                "La santé est un état de complet bien-être physique, mental et social."
             </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mb-48 -mr-48"></div>
      </div>
    </div>
  );
};

export default Prevention;
