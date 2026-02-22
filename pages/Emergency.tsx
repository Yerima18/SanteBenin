
import React, { useState } from 'react';
import { EMERGENCY_NUMBERS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

type GeoState = 'idle' | 'loading' | 'error';

const Emergency: React.FC = () => {
  const ref = useScrollReveal();
  const [geoState, setGeoState] = useState<GeoState>('idle');

  const findNearbyCenters = () => {
    setGeoState('loading');

    if (!navigator.geolocation) {
      // Geolocation not supported — fall back to generic Benin search
      window.open('https://www.google.com/maps/search/centre+de+santé+Bénin', '_blank');
      setGeoState('idle');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        window.open(
          `https://www.google.com/maps/search/centre+de+santé/@${latitude},${longitude},14z`,
          '_blank'
        );
        setGeoState('idle');
      },
      () => {
        // User denied or error — fall back to Benin-wide search
        window.open('https://www.google.com/maps/search/centre+de+santé+Bénin', '_blank');
        setGeoState('error');
        setTimeout(() => setGeoState('idle'), 3000);
      },
      { timeout: 8000 }
    );
  };

  const steps = [
    {
      number: '01',
      title: 'Évaluer la situation',
      body: "Assurez-vous qu'il n'y a pas de danger immédiat pour vous ou la victime. Vérifiez l'état de conscience.",
    },
    {
      number: '02',
      title: 'Appeler à l\'aide',
      body: 'Désignez une personne précise pour appeler le SAMU (51 04 00 00). Soyez calme, donnez le lieu exact et décrivez les symptômes.',
    },
    {
      number: '03',
      title: 'Mise en Position Latérale de Sécurité (PLS)',
      body: "Si la personne est inconsciente mais respire, placez-la sur le côté pour libérer ses voies respiratoires.",
    },
  ];

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">

      {/* Header */}
      <div className="text-center mb-16">
        <div className="animate-slide-up inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-bold mb-6 ring-1 ring-red-200">
          <span className="w-2 h-2 bg-[#E8112D] rounded-full animate-pulse"></span>
          Numéros actifs 24h/24
        </div>
        <h1 className="animate-slide-up delay-1 text-3xl sm:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
          Urgences Médicales
        </h1>
        <p className="animate-slide-up delay-2 text-slate-600 text-lg">
          Que faire quand chaque seconde compte ? Suivez ce guide.
        </p>
      </div>

      {/* Emergency numbers */}
      <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {EMERGENCY_NUMBERS.map(num => (
          <a
            key={num.number}
            href={`tel:${num.number.replace(/\s/g, '')}`}
            className="group bg-white p-8 rounded-3xl sm:rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#E8112D]/40 active:scale-95 transition-all flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E8112D] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="w-14 h-14 bg-red-50 text-[#E8112D] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#E8112D] group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-4xl font-black text-slate-900 mb-2 group-hover:text-[#E8112D] transition-colors">
              {num.number}
            </span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{num.label}</span>
            <span className="mt-3 text-[10px] font-semibold text-[#008751] bg-[#E8F5E9] px-3 py-1 rounded-full">
              Appuyer pour appeler
            </span>
          </a>
        ))}
      </div>

      {/* ── Find Nearby Centers ─────────────────────────── */}
      <div className="scroll-reveal mb-12">
        <div className="bg-[#008751] rounded-3xl sm:rounded-[32px] p-6 sm:p-8 text-white relative overflow-hidden">
          {/* Tricolor accent */}
          <div className="absolute top-0 left-0 right-0 flex h-[3px]">
            <div className="flex-1 bg-[#006B3F]"></div>
            <div className="flex-1 bg-[#FCD116]"></div>
            <div className="flex-1 bg-[#E8112D]"></div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {/* Map pin icon */}
                <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Trouver un Centre de Santé</h3>
              </div>
              <p className="text-green-100 text-sm leading-relaxed pl-[52px]">
                Localise les centres de santé, hôpitaux et pharmacies les plus proches de vous via Google Maps.
              </p>
            </div>

            <button
              onClick={findNearbyCenters}
              disabled={geoState === 'loading'}
              className="shrink-0 flex items-center gap-2 px-6 py-3.5 bg-white text-[#008751] font-bold rounded-2xl hover:bg-[#E8F5E9] active:scale-95 disabled:opacity-70 transition-all shadow-lg shadow-black/10"
            >
              {geoState === 'loading' ? (
                <>
                  <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Localisation…
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Centres près de moi
                </>
              )}
            </button>
          </div>

          {geoState === 'error' && (
            <p className="mt-4 text-[11px] text-green-200 pl-[52px]">
              Localisation non disponible — ouverture d'une recherche générale au Bénin.
            </p>
          )}

          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-16 -mb-16"></div>
        </div>
      </div>

      {/* First aid steps */}
      <div className="scroll-reveal bg-white rounded-3xl sm:rounded-[32px] border border-slate-200 overflow-hidden mb-12">
        <div className="p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Gestes de Premier Secours</h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 sm:gap-6 group">
                <div className="w-12 h-12 shrink-0 bg-[#E8F5E9] text-[#008751] rounded-xl flex items-center justify-center font-bold text-sm group-hover:bg-[#008751] group-hover:text-white transition-colors">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning footer */}
        <div className="bg-red-50 p-6 sm:p-8 border-t border-red-100 flex items-start gap-3">
          <span className="text-[#E8112D] font-black text-lg shrink-0">⚠</span>
          <div>
            <h4 className="font-bold text-red-900 mb-1">Avertissement :</h4>
            <p className="text-red-800 text-sm leading-relaxed">
              Ces conseils ne remplacent pas une formation certifiée en secourisme. Contactez la Croix-Rouge Béninoise pour vous former.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Emergency;
