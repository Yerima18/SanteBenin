
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center animate-fade-in">
      <div className="text-8xl font-black text-slate-200 mb-4">404</div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Page introuvable</h1>
      <p className="text-slate-600 mb-10 leading-relaxed">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
          Retour à l'accueil
        </Link>
        <Link to="/maladies" className="px-8 py-4 bg-white text-blue-600 border border-blue-200 font-semibold rounded-xl hover:bg-blue-50 transition-all">
          Catalogue Maladies
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
