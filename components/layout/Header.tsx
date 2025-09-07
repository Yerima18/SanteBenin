'use client';
import { useState } from 'react';
import { Heart, Bell, Menu, X } from 'lucide-react';
import { Language } from '@/types';

interface HeaderProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
  notifications: string[];
}

export default function Header({ selectedLanguage, onLanguageChange, notifications }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Heart size={32} className="text-white" />
            <div>
              <h1 className="text-2xl font-bold">SantéBénin</h1>
              <p className="text-sm opacity-90">Plateforme de Prévention Santé</p>
            </div>
          </div>
          
          {/* Desktop: Language + Notifications */}
          <div className="hidden md:flex items-center space-x-4">
            <select 
              value={selectedLanguage} 
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-white bg-opacity-20 border border-white border-opacity-30 rounded px-3 py-1 text-sm text-white"
            >
              <option value="fr" className="text-black">Français</option>
              <option value="fon" className="text-black">Fon</option>
              <option value="yoruba" className="text-black">Yoruba</option>
            </select>
            
            <div className="relative">
              <Bell size={20} />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white border-opacity-20">
            <div className="pt-4 space-y-3">
              <select 
                value={selectedLanguage} 
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded px-3 py-2 text-white"
              >
                <option value="fr" className="text-black">Français</option>
                <option value="fon" className="text-black">Fon</option>
                <option value="yoruba" className="text-black">Yoruba</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}