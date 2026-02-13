
import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h1 className="animate-slide-up text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Contactez SanteBenin</h1>
          <p className="animate-slide-up delay-1 text-lg text-slate-600 mb-10 leading-relaxed">
            Vous avez une question sur nos contenus ou vous souhaitez collaborer avec nous pour la sensibilisation ? Notre équipe est à votre écoute.
          </p>

          <div className="stagger-children space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Ligne Verte Santé</h4>
                <p className="text-sm text-slate-600">Appelez le 136 (Gratuit, 24h/24)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Email</h4>
                <p className="text-sm text-slate-600">contact@santebenin.bj</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Siège</h4>
                <p className="text-sm text-slate-600">Zone Résidentielle, Cotonou, Bénin</p>
              </div>
            </div>
          </div>

          <div className="scroll-reveal bg-slate-100 p-8 rounded-3xl sm:rounded-[32px] border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              WhatsApp Santé
            </h4>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Discutez directement avec un conseiller via WhatsApp pour des conseils de prévention rapides.
            </p>
            <a href="https://wa.me/22901000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 active:scale-95 transition-all">
              Ouvrir WhatsApp
            </a>
          </div>
        </div>

        <div className="scroll-reveal-right bg-white p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-[40px] border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="text-center py-20 animate-scale-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
              <p className="text-slate-600">Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-600 font-bold hover:underline">Envoyer un autre message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nom complet</label>
                  <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="jean@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Sujet</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                  <option>Question sur une maladie</option>
                  <option>Vaccination</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:scale-[0.98] shadow-lg shadow-blue-100 transition-all">
                Envoyer le message
              </button>
              <p className="text-[10px] text-slate-400 text-center italic mt-4">
                En envoyant ce formulaire, vous acceptez que vos données soient traitées dans le but de répondre à votre demande.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
