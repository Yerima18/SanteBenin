'use client';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ensemble contre les maladies au Bénin
      </h2>
      <p className="text-lg mb-6 opacity-90">
        Informez-vous, prévenez et protégez votre famille avec des conseils adaptés au contexte béninois
      </p>
      <button 
        onClick={onExploreClick}
        className="btn-primary"
      >
        Explorer les maladies prioritaires
      </button>
    </div>
  );
}