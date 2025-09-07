'use client';
import { Heart, Activity, MapPin, Shield, Bell } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const navItems = [
    { id: 'accueil', label: 'Accueil', icon: Heart },
    { id: 'maladies', label: 'Maladies', icon: Activity },
    { id: 'centres', label: 'Centres de Santé', icon: MapPin },
    { id: 'vaccination', label: 'Vaccination', icon: Shield },
    { id: 'actualites', label: 'Actualités', icon: Bell }
  ];

  return (
    <nav className="bg-white shadow-sm border-b hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`nav-link ${
                activeTab === id ? 'nav-link-active' : 'nav-link-inactive'
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}