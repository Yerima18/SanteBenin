
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="animate-fade-in">
      <section className="bg-blue-600 py-16 sm:py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="animate-slide-up text-3xl sm:text-4xl md:text-5xl font-black mb-6">Notre Mission : Un Bénin en Bonne Santé</h1>
          <p className="animate-slide-up delay-1 text-lg sm:text-xl text-blue-100 leading-relaxed">
            SanteBenin est la plateforme de référence pour l'éducation à la santé publique en République du Bénin.
          </p>
        </div>
      </section>

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
          <div className="scroll-reveal-right bg-slate-100 rounded-3xl sm:rounded-[40px] p-8 sm:p-10 border border-slate-200">
             <div className="stagger-children grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                   <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                   <div className="text-xs text-slate-500 font-bold uppercase">Gratuit</div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                   <div className="text-3xl font-bold text-green-600 mb-1">2026</div>
                   <div className="text-xs text-slate-500 font-bold uppercase">Mise à jour</div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                   <div className="text-3xl font-bold text-indigo-600 mb-1">77</div>
                   <div className="text-xs text-slate-500 font-bold uppercase">Communes</div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                   <div className="text-3xl font-bold text-red-600 mb-1">24/7</div>
                   <div className="text-xs text-slate-500 font-bold uppercase">Disponibilité</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="scroll-reveal text-3xl font-bold text-slate-900 mb-12">Nos Engagements</h2>
          <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl mb-4">🔍</div>
              <h4 className="font-bold mb-2">Exactitude</h4>
              <p className="text-sm text-slate-500">Contenus validés par des experts en santé publique.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🌍</div>
              <h4 className="font-bold mb-2">Proximité</h4>
              <p className="text-sm text-slate-500">Focus sur les réalités épidémiologiques du Bénin.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🛡️</div>
              <h4 className="font-bold mb-2">Prévention</h4>
              <p className="text-sm text-slate-500">La priorité absolue est donnée aux gestes qui sauvent.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
