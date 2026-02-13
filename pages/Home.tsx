
import React from 'react';
import { Link } from 'react-router-dom';
import { DISEASES, ALERTS, EMERGENCY_NUMBERS } from '../constants';
import DiseaseCard from '../components/DiseaseCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="animate-slide-up inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Santé Publique Bénin 2026
            </div>
            <h1 className="animate-slide-up delay-1 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Prévenir. Protéger. <span className="text-blue-600">S'informer.</span>
            </h1>
            <p className="animate-slide-up delay-2 text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
              Votre guide officiel pour la santé au Bénin. Accédez à des informations fiables, des conseils de prévention et des alertes en temps réel.
            </p>
            <div className="animate-slide-up delay-3 flex flex-wrap gap-4">
              <Link to="/assistant" className="px-6 sm:px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all animate-pulse-glow flex items-center gap-2">
                Assistant Symptômes AI
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link to="/maladies" className="px-6 sm:px-8 py-4 bg-white text-blue-600 border border-blue-200 font-semibold rounded-xl hover:bg-blue-50 transition-all">
                Catalogue Maladies
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 hidden lg:block rounded-l-[100px] -z-10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl hidden lg:block"></div>
      </section>

      {/* Country Health Pulse */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="scroll-reveal-scale bg-slate-900 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">🌍</div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">État Sanitaire</div>
              <div className="font-bold">Stable / Vigilance Urbaine</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">💉</div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Taux de Vaccination PEV</div>
              <div className="font-bold">89.4% (Mai 2026)</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">🦟</div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Malaria Pulse</div>
              <div className="font-bold text-green-400">-12% vs 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Buttons */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="stagger-children grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Vaccination', icon: '💉', path: '/vaccination', color: 'bg-green-50' },
            { label: 'Urgences', icon: '🚨', path: '/urgences', color: 'bg-red-50' },
            { label: 'Hygiène', icon: '🧼', path: '/prevention', color: 'bg-cyan-50' },
            { label: 'Nutrition', icon: '🥗', path: '/prevention', color: 'bg-orange-50' },
          ].map((item) => (
            <Link key={item.label} to={item.path} className={`${item.color} p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 active:scale-95 transition-transform border border-white/50 shadow-sm`}>
              <span className="text-3xl mb-2">{item.icon}</span>
              <span className="font-bold text-slate-800">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Alerts Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20 scroll-reveal">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Alertes Santé Publique</h2>
          <span className="text-xs font-semibold text-slate-400 uppercase">Mise à jour: Mai 2026</span>
        </div>
        <div className="space-y-4">
          {ALERTS.map(alert => (
            <div key={alert.id} className={`p-4 rounded-xl border-l-4 flex items-start gap-4 ${
              alert.type === 'warning' ? 'bg-amber-50 border-amber-400 text-amber-900' : 'bg-blue-50 border-blue-400 text-blue-900'
            }`}>
              <div className="text-2xl">{alert.type === 'warning' ? '⚠️' : 'ℹ️'}</div>
              <div>
                <h4 className="font-bold">{alert.title}</h4>
                <p className="text-sm opacity-90">{alert.content}</p>
                <p className="text-[10px] mt-2 font-semibold uppercase opacity-60">{alert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Diseases */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Maladies Prioritaires</h2>
              <p className="text-slate-600">Focus sur les enjeux de santé majeurs au Bénin en 2026.</p>
            </div>
            <Link to="/maladies" className="text-blue-600 font-semibold hover:underline mt-4 md:mt-0 flex items-center gap-1">
              Voir tout le catalogue
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DISEASES.slice(0, 3).map(disease => (
              <DiseaseCard key={disease.id} disease={disease} />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Quick Call */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="scroll-reveal-scale bg-white p-8 sm:p-10 rounded-3xl sm:rounded-[32px] border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">Besoin d'aide immédiate ?</h2>
          <p className="text-slate-600 mb-10 max-w-lg mx-auto">
            Si vous ou un proche présentez des symptômes graves, ne perdez pas de temps. Contactez les services d'urgence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EMERGENCY_NUMBERS.slice(0, 2).map(num => (
              <a key={num.number} href={`tel:${num.number}`} className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-200 active:scale-95 transition-all">
                <span className="text-3xl font-black text-red-600 mb-1">{num.number}</span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{num.label}</span>
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-slate-400">
            Ligne d'information santé gratuite : <strong>136</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
