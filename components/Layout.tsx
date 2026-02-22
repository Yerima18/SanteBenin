
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BeninFlag from './BeninFlag';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Maladies', path: '/maladies' },
    { name: 'Prévention', path: '/prevention' },
    { name: 'Vaccination', path: '/vaccination' },
    { name: 'Urgences', path: '/urgences' },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Show back-to-top after 400px scroll
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* Benin Tricolor Bar */}
      <div className="flex h-[3px] w-full">
        <div className="flex-1 bg-[#008751]"></div>
        <div className="flex-1 bg-[#FCD116]"></div>
        <div className="flex-1 bg-[#E8112D]"></div>
      </div>

      {/* Warning Ribbon — min 11px for accessibility */}
      <div className="bg-[#006B3F] text-white text-[11px] md:text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <BeninFlag width={16} height={11} className="rounded-[2px] shrink-0 ring-1 ring-white/20" />
        Ceci est une plateforme éducative. En cas d'urgence, appelez le <strong>136</strong> ou le <strong>187</strong>.
      </div>

      <header className="sticky top-0 z-50 glass-nav" ref={navRef}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <BeninFlag
                width={42}
                height={28}
                className="rounded-[4px] ring-1 ring-black/10 shadow-sm group-hover:shadow-md transition-shadow"
              />
              <div className="leading-none">
                <div className="text-lg font-bold text-slate-800 tracking-tight">SanteBenin</div>
                <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">République du Bénin</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs lg:text-sm font-medium transition-colors hover:text-[#008751] ${
                    location.pathname === link.path
                      ? 'text-[#008751] border-b-2 border-[#008751]'
                      : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
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
                        ? 'bg-[#E8F5E9] text-[#008751]'
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
              <div className="flex items-center gap-3 mb-4">
                <BeninFlag width={48} height={32} className="rounded-[4px] ring-1 ring-white/20 shadow-md" />
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">SanteBenin</div>
                  <div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">République du Bénin · 2026</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                SanteBenin est une initiative éducative dédiée à la promotion de la santé publique et de la prévention des maladies au Bénin.
              </p>
              <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Avertissement Médical</p>
                <p className="text-xs italic">
                  Ce contenu est à but éducatif uniquement. Il ne remplace pas l'avis d'un professionnel de santé qualifié.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/maladies" className="hover:text-[#4CAF7D] transition-colors">Liste des maladies</Link></li>
                <li><Link to="/prevention" className="hover:text-[#4CAF7D] transition-colors">Conseils de prévention</Link></li>
                <li><Link to="/vaccination" className="hover:text-[#4CAF7D] transition-colors">Calendrier vaccinal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase">Contact & Liens</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="hover:text-[#4CAF7D] transition-colors">Nous contacter</Link></li>
                <li><Link to="/a-propos" className="hover:text-[#4CAF7D] transition-colors">À propos de nous</Link></li>
                <li><a href="#" className="hover:text-[#4CAF7D] transition-colors">Ministère de la Santé</a></li>
                <li className="flex items-center space-x-2 pt-2">
                  <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center text-white text-[10px] font-bold">WA</div>
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

          {/* Footer tricolor */}
          <div className="mt-8 flex h-[3px] rounded-full overflow-hidden">
            <div className="flex-1 bg-[#008751]"></div>
            <div className="flex-1 bg-[#FCD116]"></div>
            <div className="flex-1 bg-[#E8112D]"></div>
          </div>
        </div>
      </footer>

      {/* WhatsApp — smaller on mobile, proper safe area */}
      <a
        href="https://wa.me/22901000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter via WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform z-40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43.001 9.85-4.417 9.854-9.848.002-5.43-4.415-9.849-9.841-9.851-5.433 0-9.85 4.418-9.854 9.848-.001 2.203.572 4.126 1.61 5.923l-1.054 3.856 3.965-1.041z"/>
        </svg>
      </a>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Retour en haut"
        className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-10 h-10 bg-slate-800 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#008751] transition-all z-40 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ transition: 'opacity 0.3s, transform 0.3s, background-color 0.2s' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Layout;
