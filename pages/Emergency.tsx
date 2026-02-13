
import React from 'react';
import { EMERGENCY_NUMBERS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Emergency: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="animate-slide-up text-3xl sm:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Urgences Médicales</h1>
        <p className="animate-slide-up delay-1 text-slate-600 text-lg">Que faire quand chaque seconde compte ? Suivez ce guide.</p>
      </div>

      <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {EMERGENCY_NUMBERS.map(num => (
          <a key={num.number} href={`tel:${num.number}`} className="group bg-white p-8 rounded-3xl sm:rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-500 active:scale-95 transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-4xl font-black text-slate-900 mb-1">{num.number}</span>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{num.label}</span>
          </a>
        ))}
      </div>

      <div className="scroll-reveal bg-white rounded-3xl sm:rounded-[32px] border border-slate-200 overflow-hidden mb-12">
        <div className="p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Gestes de Premier Secours</h2>
          <div className="space-y-8">
            <div className="flex gap-4 sm:gap-6">
              <div className="w-12 h-12 shrink-0 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">01</div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Évaluer la situation</h4>
                <p className="text-slate-600 leading-relaxed">Assurez-vous qu'il n'y a pas de danger immédiat pour vous ou la victime. Vérifiez l'état de conscience.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <div className="w-12 h-12 shrink-0 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">02</div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Appeler à l'aide</h4>
                <p className="text-slate-600 leading-relaxed">Désignez une personne précise pour appeler le SAMU (187). Soyez calme, donnez le lieu exact et décrivez les symptômes.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <div className="w-12 h-12 shrink-0 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">03</div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Mise en Position Latérale de Sécurité (PLS)</h4>
                <p className="text-slate-600 leading-relaxed">Si la personne est inconsciente mais respire, placez-la sur le côté pour libérer ses voies respiratoires.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-50 p-6 sm:p-8 border-t border-red-100">
           <h4 className="font-bold text-red-900 mb-2 italic">Avertissement :</h4>
           <p className="text-red-800 text-sm">Ces conseils ne remplacent pas une formation certifiée en secourisme. Contactez la Croix-Rouge Béninoise pour vous former.</p>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
