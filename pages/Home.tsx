
import React from 'react';
import { Link } from 'react-router-dom';
import { DISEASES, ALERTS, EMERGENCY_NUMBERS } from '../constants';
import DiseaseCard from '../components/DiseaseCard';
import BeninFlag from '../components/BeninFlag';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="animate-fade-in">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-white pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="animate-slide-up inline-flex items-center gap-2 px-3 py-1.5 bg-[#E8F5E9] text-[#006B3F] rounded-full text-xs font-bold mb-6 ring-1 ring-[#008751]/20">
              <span className="w-2 h-2 bg-[#008751] rounded-full animate-pulse"></span>
              Santé Publique Bénin 2026
            </div>

            <h1 className="animate-slide-up delay-1 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Prévenir. Protéger.{' '}
              <span className="text-[#008751]">S'informer.</span>
            </h1>
            <p className="animate-slide-up delay-2 text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
              Votre guide officiel pour la santé au Bénin. Accédez à des informations fiables, des conseils de prévention et des alertes en temps réel.
            </p>

            <div className="animate-slide-up delay-3 flex flex-wrap gap-4">
              <Link
                to="/maladies"
                className="px-6 sm:px-8 py-4 bg-[#008751] text-white font-semibold rounded-xl hover:bg-[#006B3F] shadow-lg shadow-[#008751]/20 transition-all flex items-center gap-2 animate-pulse-glow"
              >
                Catalogue Maladies
              </Link>
              <Link
                to="/prevention"
                className="px-6 sm:px-8 py-4 bg-white text-[#008751] border border-[#008751]/30 font-semibold rounded-xl hover:bg-[#E8F5E9] transition-all"
              >
                Conseils Prévention
              </Link>
            </div>

            {/* Mobile-only flag — replaces the hidden desktop floating card */}
            <div className="animate-slide-up delay-4 lg:hidden mt-10 flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 w-fit">
              <BeninFlag width={72} height={48} className="rounded-md ring-1 ring-black/10 shadow-sm" />
              <div>
                <div className="text-xs font-bold text-slate-700">République du Bénin</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Plateforme de Santé Publique 2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right-side decoration: Benin flag-inspired bg ── */}
        <div className="absolute top-0 right-0 w-2/5 h-full hidden lg:flex -z-10 overflow-hidden rounded-l-[100px]">
          <div className="w-[33%] h-full bg-[#008751]/8"></div>
          <div className="w-[67%] flex flex-col h-full">
            <div className="flex-1 bg-[#FCD116]/10"></div>
            <div className="flex-1 bg-[#E8112D]/8"></div>
          </div>
        </div>

        {/* ── Floating Benin flag card ── */}
        <div className="absolute top-10 right-24 hidden lg:block animate-slide-right delay-4">
          <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-slate-100 p-5">
            <BeninFlag width={210} height={140} className="rounded-lg" />
            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">
              République du Bénin
            </p>
          </div>
        </div>

        {/* Soft green glow blob */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#008751]/8 rounded-full blur-3xl hidden lg:block -z-10"></div>
      </section>

      {/* ── Country Health Pulse ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="scroll-reveal-scale bg-slate-900 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center relative overflow-hidden">

          {/* Tiny tricolor accent on the card */}
          <div className="absolute top-0 left-0 right-0 flex h-[3px]">
            <div className="flex-1 bg-[#008751]"></div>
            <div className="flex-1 bg-[#FCD116]"></div>
            <div className="flex-1 bg-[#E8112D]"></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden p-1.5">
              <BeninFlag width={36} height={24} className="rounded-sm" />
            </div>
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
              <div className="font-bold text-[#4CAF7D]">-12% vs 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Access ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Vaccination', description: 'Calendrier vaccinal PEV 2026', icon: '💉', path: '/vaccination',        from: 'from-[#E8F5E9]', border: 'border-[#008751]/20', iconBg: 'bg-[#008751]/10', labelColor: 'text-[#006B3F]' },
            { label: 'Urgences',    description: 'Numéros & premiers secours',   icon: '🚨', path: '/urgences',           from: 'from-red-50',    border: 'border-red-200',     iconBg: 'bg-red-100',       labelColor: 'text-red-700' },
            { label: 'Hygiène',     description: 'Gestes de prévention quotidiens', icon: '🧼', path: '/prevention/hygiene',  from: 'from-cyan-50',   border: 'border-cyan-200',    iconBg: 'bg-cyan-100',      labelColor: 'text-cyan-700' },
            { label: 'Nutrition',   description: 'Alimentation saine au Bénin',  icon: '🥗', path: '/prevention/nutrition', from: 'from-orange-50', border: 'border-orange-200',  iconBg: 'bg-orange-100',    labelColor: 'text-orange-700' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`group bg-gradient-to-br ${item.from} to-white p-5 rounded-2xl flex items-center gap-4 border ${item.border} shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all`}
            >
              <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-bold ${item.labelColor}`}>{item.label}</div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">{item.description}</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300 group-hover:text-slate-400 group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Alerts ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 mb-20 scroll-reveal">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Alertes Santé Publique</h2>
          <span className="text-xs font-semibold text-slate-400 uppercase">Mise à jour: Mai 2026</span>
        </div>
        <div className="space-y-4">
          {ALERTS.map(alert => (
            <div key={alert.id} className={`p-4 rounded-xl border-l-4 flex items-start gap-4 ${
              alert.type === 'warning' ? 'bg-amber-50 border-amber-400 text-amber-900' : 'bg-[#E8F5E9] border-[#008751] text-[#1B5E20]'
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

      {/* ── Featured Diseases ──────────────────────────────── */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Maladies Prioritaires</h2>
              <p className="text-slate-600">Focus sur les enjeux de santé majeurs au Bénin en 2026.</p>
            </div>
            <Link to="/maladies" className="text-[#008751] font-semibold hover:underline mt-4 md:mt-0 flex items-center gap-1">
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

      {/* ── Emergency Quick Call ────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="scroll-reveal-scale bg-white p-8 sm:p-10 rounded-3xl sm:rounded-[32px] border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#E8112D]"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">Besoin d'aide immédiate ?</h2>
          <p className="text-slate-600 mb-10 max-w-lg mx-auto">
            Si vous ou un proche présentez des symptômes graves, ne perdez pas de temps. Contactez les services d'urgence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EMERGENCY_NUMBERS.slice(0, 2).map(num => (
              <a key={num.number} href={`tel:${num.number.replace(/\s/g, '')}`} className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#E8112D]/30 active:scale-95 transition-all">
                <span className="text-3xl font-black text-[#E8112D] mb-1">{num.number}</span>
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
