
import React from 'react';
import { Link } from 'react-router-dom';
import BeninFlag from '../components/BeninFlag';

const NotFound: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center animate-fade-in">

      {/* Flag */}
      <div className="flex justify-center mb-8 animate-slide-up">
        <div className="bg-slate-100 rounded-2xl p-4 ring-1 ring-slate-200">
          <BeninFlag width={72} height={48} className="rounded-lg opacity-50" />
        </div>
      </div>

      <div className="text-8xl font-black text-slate-200 mb-4 animate-slide-up delay-1">404</div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4 animate-slide-up delay-2">Page introuvable</h1>
      <p className="text-slate-600 mb-10 leading-relaxed animate-slide-up delay-3">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>

      <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-4">
        <Link
          to="/"
          className="px-8 py-4 bg-[#008751] text-white font-semibold rounded-xl hover:bg-[#006B3F] shadow-lg shadow-green-200 transition-all"
        >
          Retour à l'accueil
        </Link>
        <Link
          to="/maladies"
          className="px-8 py-4 bg-white text-[#008751] border border-[#008751]/30 font-semibold rounded-xl hover:bg-[#E8F5E9] transition-all"
        >
          Catalogue Maladies
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
