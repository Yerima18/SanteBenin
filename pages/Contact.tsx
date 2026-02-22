
import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      bg: 'bg-[#E8F5E9]',
      color: 'text-[#008751]',
      title: 'Ligne Verte Santé',
      detail: 'Appelez le 136 (Gratuit, 24h/24)',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bg: 'bg-[#E8F5E9]',
      color: 'text-[#008751]',
      title: 'Email',
      detail: 'contact@santebenin.bj',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      bg: 'bg-[#E8F5E9]',
      color: 'text-[#008751]',
      title: 'Siège',
      detail: 'Zone Résidentielle, Cotonou, Bénin',
    },
  ];

  const inputClass = "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#008751] focus:border-[#008751] outline-none transition-all text-sm";

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* Left: contact info */}
        <div>
          <h1 className="animate-slide-up text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            Contactez SanteBenin
          </h1>
          <p className="animate-slide-up delay-1 text-lg text-slate-600 mb-10 leading-relaxed">
            Vous avez une question sur nos contenus ou souhaitez collaborer pour la sensibilisation ? Notre équipe est à votre écoute.
          </p>

          <div className="stagger-children space-y-4 mb-12">
            {contactItems.map((item) => (
              <div key={item.title} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-[#008751]/20 hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp card */}
          <div className="scroll-reveal bg-[#E8F5E9] p-8 rounded-3xl sm:rounded-[32px] border border-[#008751]/20">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-[#25D366] rounded-full animate-pulse"></div>
              WhatsApp Santé
            </h4>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Discutez directement avec un conseiller via WhatsApp pour des conseils de prévention rapides.
            </p>
            <a
              href="https://wa.me/22901000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#1ebe5d] active:scale-95 transition-all shadow-md shadow-green-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43.001 9.85-4.417 9.854-9.848.002-5.43-4.415-9.849-9.841-9.851-5.433 0-9.85 4.418-9.854 9.848-.001 2.203.572 4.126 1.61 5.923l-1.054 3.856 3.965-1.041z"/>
              </svg>
              Ouvrir WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="scroll-reveal-right bg-white p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-[40px] border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="text-center py-20 animate-scale-in">
              <div className="w-20 h-20 bg-[#E8F5E9] text-[#008751] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
              <p className="text-slate-600 text-sm">Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-[#008751] font-bold hover:underline text-sm"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nom complet</label>
                  <input type="text" required className={inputClass} placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input type="email" required className={inputClass} placeholder="jean@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Sujet</label>
                <select className={inputClass}>
                  <option>Question sur une maladie</option>
                  <option>Vaccination</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  required
                  rows={5}
                  className={inputClass + ' resize-none'}
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#008751] text-white font-bold rounded-xl hover:bg-[#006B3F] active:scale-[0.98] shadow-lg shadow-green-100 transition-all animate-pulse-glow"
              >
                Envoyer le message
              </button>
              <p className="text-[10px] text-slate-400 text-center italic">
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
