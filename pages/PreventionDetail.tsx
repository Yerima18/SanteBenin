
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PREVENTION_SECTIONS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PreventionDetail: React.FC = () => {
  const ref = useScrollReveal();
  const { id } = useParams<{ id: string }>();
  const section = PREVENTION_SECTIONS.find(s => s.id === id);

  useEffect(() => {
    if (section) {
      document.title = `SanteBenin | ${section.title}`;
    }
  }, [section]);

  if (!section) {
    return <Navigate to="/prevention" replace />;
  }

  const others = PREVENTION_SECTIONS.filter(s => s.id !== section.id);

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">

      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
        <Link to="/" className="hover:text-[#008751] transition-colors">Accueil</Link>
        <span>/</span>
        <Link to="/prevention" className="hover:text-[#008751] transition-colors">Prévention</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">{section.title}</span>
      </nav>

      {/* Hero header — colored per section */}
      <div
        className="animate-slide-up rounded-3xl sm:rounded-[32px] p-6 sm:p-8 md:p-12 text-white mb-10 relative overflow-hidden"
        style={{ backgroundColor: section.accent }}
      >
        {/* Tricolor bar */}
        <div className="absolute top-0 left-0 right-0 flex h-[3px]">
          <div className="flex-1 bg-[#008751]"></div>
          <div className="flex-1 bg-[#FCD116]"></div>
          <div className="flex-1 bg-[#E8112D]"></div>
        </div>

        <div className="flex items-start gap-5">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl shrink-0">
            {section.icon}
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
              Guide Prévention
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">{section.title}</h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
              {section.description}
            </p>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 right-24 w-32 h-32 bg-black/5 rounded-full -mb-16"></div>
      </div>

      {/* Tips list */}
      <div className="scroll-reveal bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-6 sm:p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
              style={{ backgroundColor: section.accent }}
            >
              ✓
            </span>
            Conseils pratiques
          </h2>
          <ol className="space-y-5">
            {section.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style={{ backgroundColor: section.accentLight, color: section.accent }}
                >
                  {i + 1}
                </span>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{tip}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Did you know */}
        <div
          className="p-6 sm:p-8 border-t flex items-start gap-4"
          style={{ backgroundColor: section.accentLight, borderColor: `${section.accent}20` }}
        >
          <span className="text-2xl shrink-0">💡</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: section.accent }}>
              Le saviez-vous ?
            </p>
            <p className="text-sm leading-relaxed text-slate-700">{section.didYouKnow}</p>
          </div>
        </div>
      </div>

      {/* Other topics */}
      <div className="scroll-reveal mt-12">
        <h3 className="text-lg font-bold text-slate-800 mb-5">Autres thèmes de prévention</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {others.map(s => (
            <Link
              key={s.id}
              to={`/prevention/${s.id}`}
              className="group flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: s.accentLight }}
              >
                {s.icon}
              </div>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 leading-snug">
                {s.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Back link */}
      <div className="mt-10 text-center">
        <Link
          to="/prevention"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#008751] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à la Prévention
        </Link>
      </div>

    </div>
  );
};

export default PreventionDetail;
