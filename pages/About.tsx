
import React from 'react';
import BeninFlag from '../components/BeninFlag';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const ref = useScrollReveal();

  const stats = [
    { value: '100%', label: 'Gratuit',       color: 'text-[#008751]' },
    { value: '2026', label: 'Mise à jour',    color: 'text-[#FCD116]' },
    { value: '77',   label: 'Communes',       color: 'text-slate-800' },
    { value: '24/7', label: 'Disponibilité',  color: 'text-[#E8112D]' },
  ];

  const commitments = [
    { icon: '🔍', title: 'Exactitude',   desc: 'Contenus validés par des experts en santé publique.' },
    { icon: '🌍', title: 'Proximité',    desc: 'Focus sur les réalités épidémiologiques du Bénin.' },
    { icon: '🛡️', title: 'Prévention',  desc: 'La priorité absolue est donnée aux gestes qui sauvent.' },
  ];

  return (
    <div ref={ref} className="animate-fade-in">

      {/* Hero — Benin green with flag */}
      <section className="relative bg-[#008751] py-16 sm:py-24 text-white text-center overflow-hidden">
        {/* Tricolor top bar */}
        <div className="absolute top-0 left-0 right-0 flex h-[3px]">
          <div className="flex-1 bg-[#006B3F]"></div>
          <div className="flex-1 bg-[#FCD116]"></div>
          <div className="flex-1 bg-[#E8112D]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Floating flag */}
          <div className="animate-slide-up flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 ring-1 ring-white/20 shadow-2xl">
              <BeninFlag width={96} height={64} className="rounded-lg" />
            </div>
          </div>

          <h1 className="animate-slide-up delay-1 text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
            Notre Mission : Un Bénin en Bonne Santé
          </h1>
          <p className="animate-slide-up delay-2 text-lg sm:text-xl text-green-100 leading-relaxed max-w-2xl mx-auto">
            SanteBenin est la plateforme de référence pour l'éducation à la santé publique en République du Bénin.
          </p>
        </div>

        {/* Decorative blobs */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FCD116]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8112D]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      </section>

      {/* Why section */}
      <section className="max-w-5xl mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="scroll-reveal-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pourquoi SanteBenin ?</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Face à la prolifération des fausses informations sur la santé, nous avons créé un espace sécurisé où chaque citoyen peut trouver des informations vérifiées, basées sur les recommandations de l'OMS et du Ministère de la Santé du Bénin.
              </p>
              <p>
                Notre approche pour 2026 repose sur la prévention numérique : utiliser la technologie pour rendre la santé accessible à tous, des zones urbaines de Cotonou aux régions rurales du nord.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="scroll-reveal-right bg-slate-100 rounded-3xl sm:rounded-[40px] p-8 sm:p-10 border border-slate-200">
            <div className="stagger-children grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-3xl shadow-sm text-center">
                  <div className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="scroll-reveal text-3xl font-bold text-slate-900 mb-4">Nos Engagements</h2>
          <p className="scroll-reveal text-slate-500 mb-12 max-w-xl mx-auto">
            Trois piliers qui guident chacune de nos décisions éditoriales.
          </p>
          <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((c) => (
              <div key={c.title} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#008751]/30 transition-all group">
                <div className="w-14 h-14 bg-[#E8F5E9] rounded-2xl flex items-center justify-center text-2xl mb-5 mx-auto group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-lg">{c.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
