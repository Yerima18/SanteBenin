'use client';
import { Heart, Activity, MapPin, Shield, Bell } from 'lucide-react';

interface NavigationProps {
  activeTab: string;                 // The currently active navigation tab
  onTabChange: (tab: string) => void; // Function to update the active tab
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  // Navigation items (tabs) with their labels and icons
  const navItems = [
    { id: 'accueil', label: 'Accueil', icon: Heart },
    { id: 'maladies', label: 'Maladies', icon: Activity },
    { id: 'centres', label: 'Centres de Santé', icon: MapPin },
    { id: 'vaccination', label: 'Vaccination', icon: Shield },
    { id: 'actualites', label: 'Actualités', icon: Bell }
  ];

  return (
    // Desktop navigation bar (hidden on mobile)
    <nav className="bg-white shadow-sm border-b hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)} // Set the clicked tab as active
              className={`nav-link ${
                activeTab === id ? 'nav-link-active' : 'nav-link-inactive'
              }`}
            >
              {/* Icon for the tab */}
              <Icon size={18} />
              {/* Label for the tab */}
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
