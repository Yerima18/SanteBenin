
import React from 'react';
import { VACCINATION_SCHEDULE } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Vaccination: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">

      {/* Header */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="animate-slide-up text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
          Vaccination : Protéger l'Avenir
        </h1>
        <p className="animate-slide-up delay-1 text-lg text-slate-600">
          Le Programme Élargi de Vaccination (PEV) du Bénin sauve des milliers de vies chaque année. Restez à jour avec le calendrier 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">

        {/* Vaccination table */}
        <div className="lg:col-span-2 scroll-reveal-left">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <span className="w-10 h-10 bg-[#E8F5E9] text-[#008751] rounded-xl flex items-center justify-center text-lg">📅</span>
            Calendrier Vaccinal de Routine (PEV)
          </h2>
          <div className="bg-white rounded-3xl sm:rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">

            {/* Mobile: card stack */}
            <div className="md:hidden divide-y divide-slate-100">
              {VACCINATION_SCHEDULE.map((item, idx) => (
                <div key={idx} className="px-5 py-4 hover:bg-slate-50/50 transition-colors">
                  <div className="text-[10px] font-bold text-[#008751] uppercase tracking-widest mb-1">{item.age}</div>
                  <div className="text-sm text-slate-700 leading-relaxed">{item.vaccines}</div>
                </div>
              ))}
            </div>

            {/* Desktop: full table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#E8F5E9] border-b border-[#008751]/20">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-[#006B3F] uppercase tracking-wider whitespace-nowrap">Âge de l'enfant</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#006B3F] uppercase tracking-wider">Vaccins obligatoires</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {VACCINATION_SCHEDULE.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">{item.age}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{item.vaccines}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#E8F5E9] text-[11px] text-[#006B3F] text-center italic border-t border-[#008751]/10">
              Note : En 2026, le carnet de vaccination physique est couplé au code QR "SanteDigital Benin".
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Flash info card */}
          <div className="scroll-reveal-right bg-[#008751] rounded-3xl sm:rounded-[32px] p-8 text-white shadow-lg shadow-[#008751]/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 flex h-[3px]">
              <div className="flex-1 bg-[#006B3F]"></div>
              <div className="flex-1 bg-[#FCD116]"></div>
              <div className="flex-1 bg-[#E8112D]"></div>
            </div>
            <h3 className="text-xl font-black mb-4 relative z-10">Flash Info 2026</h3>
            <p className="text-green-100 text-sm leading-relaxed mb-6 relative z-10">
              Le Bénin a franchi une étape historique : Le vaccin antipaludique <strong>R21/Matrix-M</strong> est désormais intégré dans toutes les zones sanitaires.
            </p>
            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-[10px] font-bold bg-white/20 px-3 py-1.5 rounded-lg inline-block w-max">✓ Protection efficace à 75%</span>
              <span className="text-[10px] font-bold bg-white/20 px-3 py-1.5 rounded-lg inline-block w-max">✓ Gratuit pour tous les nourrissons</span>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          </div>

          {/* Parent tips */}
          <div className="scroll-reveal-right bg-white rounded-3xl sm:rounded-[32px] border border-slate-200 p-8 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Conseils aux parents</h3>
            <ul className="space-y-4">
              {[
                "N'attendez pas que l'enfant soit malade pour le faire vacciner.",
                "Apportez toujours le carnet de santé lors de vos visites au centre.",
                "Une légère fièvre après le vaccin est normale et montre que le corps réagit.",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#E8F5E9] text-[#008751] rounded-lg flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Myth busting */}
      <div className="scroll-reveal-scale bg-slate-900 rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-16 text-white mb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 flex h-[3px]">
          <div className="flex-1 bg-[#008751]"></div>
          <div className="flex-1 bg-[#FCD116]"></div>
          <div className="flex-1 bg-[#E8112D]"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">Combattre la désinformation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              myth: "Les vaccins sont un moyen de contrôler la population.",
              truth: "Les vaccins sont rigoureusement testés par des instances internationales (OMS) et locales. Ils n'ont qu'un seul but : apprendre au système immunitaire à reconnaître et combattre les virus.",
            },
            {
              myth: "Trop de vaccins affaiblissent le système de l'enfant.",
              truth: "Le système immunitaire d'un nouveau-né est capable de répondre à des milliers d'antigènes à la fois. Les vaccins ne représentent qu'une infime fraction de ce qu'il combat naturellement chaque jour.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10">
              <span className="text-[#E8112D] font-bold text-xs uppercase mb-2 block tracking-widest">Mythe courant</span>
              <p className="italic text-base sm:text-lg mb-4 text-slate-100 leading-relaxed">"{item.myth}"</p>
              <div className="h-px bg-white/10 my-6"></div>
              <span className="text-[#4CAF7D] font-bold text-xs uppercase mb-2 block tracking-widest">La vérité scientifique</span>
              <p className="text-sm text-slate-300 leading-relaxed">{item.truth}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Where to vaccinate */}
      <div className="scroll-reveal max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Où se faire vacciner ?</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Tous les centres de santé publics (Arrondissements et Communes) du Bénin disposent d'unités PEV ouvertes tous les matins. La vaccination de routine est 100% gratuite.
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8F5E9] text-[#006B3F] rounded-2xl font-bold ring-1 ring-[#008751]/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Trouver le centre le plus proche via le 136
        </div>
      </div>

      <div className="mt-20 p-8 border-t border-slate-200 text-center text-[10px] text-slate-400 italic">
        Avertissement Médical : Ce calendrier est conforme aux directives 2026 de l'OMS et du Ministère de la Santé du Bénin. Toujours consulter le carnet de santé de l'enfant.
      </div>
    </div>
  );
};

export default Vaccination;
