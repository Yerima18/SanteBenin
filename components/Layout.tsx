
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Maladies', path: '/maladies' },
    { name: 'Prévention', path: '/prevention' },
    { name: 'Vaccination', path: '/vaccination' },
    { name: 'Urgences', path: '/urgences' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Warning Ribbon */}
      <div className="bg-blue-600 text-white text-[10px] md:text-xs py-1 px-4 text-center font-medium">
        Ceci est une plateforme éducative. En cas d'urgence, appelez le 136 ou le 187.
      </div>

      <header className="sticky top-0 z-50 glass-nav">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">SB</div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">SanteBenin</span>
            </Link>

            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs lg:text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-100 animate-slide-down">
              <div className="flex flex-col space-y-1 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">SB</div>
                <span className="text-xl font-bold text-white tracking-tight">SanteBenin</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                SanteBenin est une initiative éducative dédiée à la promotion de la santé publique et de la prévention des maladies au Bénin. Notre mission est d'informer chaque citoyen pour un Bénin plus sain en 2026.
              </p>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Avertissement Médical</p>
                <p className="text-xs italic">
                  Ce contenu est à but éducatif uniquement. Il ne remplace pas l'avis d'un professionnel de santé qualifié. Ne négligez jamais un avis médical professionnel à cause de ce que vous avez lu ici.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/maladies" className="hover:text-blue-400 transition-colors">Liste des maladies</Link></li>
                <li><Link to="/prevention" className="hover:text-blue-400 transition-colors">Conseils de prévention</Link></li>
                <li><Link to="/vaccination" className="hover:text-blue-400 transition-colors">Calendrier vaccinal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase">Contact & Liens</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Nous contacter</Link></li>
                <li><Link to="/a-propos" className="hover:text-blue-400 transition-colors">À propos de nous</Link></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Ministère de la Santé</a></li>
                <li className="flex items-center space-x-2 pt-2">
                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">WA</div>
                   <span className="text-xs">WhatsApp Santé: +229 01 00 00 00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2026 SanteBenin. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Confidentialité</a>
              <a href="#" className="hover:text-white">Accessibilité</a>
              <a href="#" className="hover:text-white">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/22901000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43.001 9.85-4.417 9.854-9.848.002-5.43-4.415-9.849-9.841-9.851-5.433 0-9.85 4.418-9.854 9.848-.001 2.203.572 4.126 1.61 5.923l-1.054 3.856 3.965-1.041z"/>
        </svg>
      </a>
    </div>
  );
};

export default Layout;
