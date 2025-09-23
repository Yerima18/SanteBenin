'use client';
import { useState } from 'react';
import { Heart, Bell, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Language } from '@/types';

interface HeaderProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
  notifications: string[];
}

const languages = {
  fr: { flag: '🇫🇷', name: 'Français' },
  fon: { flag: '🇧🇯', name: 'Fon' },
  yoruba: { flag: '🇳🇬', name: 'Yoruba' }
};

export default function Header({ selectedLanguage, onLanguageChange, notifications }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleLanguageChange = (language: Language) => {
    onLanguageChange(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and App Title */}
          <div className="flex items-center space-x-3">
            <Heart size={32} className="text-white" />
            <div>
              <h1 className="text-2xl font-bold">SantéBénin</h1>
              <p className="text-sm opacity-90">Plateforme de Prévention Santé</p>
            </div>
          </div>
          
          {/* Desktop Section: Language Selector + Notifications */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Custom Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">{languages[selectedLanguage].flag}</span>
                <span className="text-sm font-medium">{languages[selectedLanguage].name}</span>
                <ChevronDown size={14} className={`transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[140px]">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => handleLanguageChange(code as Language)}
                      className={`w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        selectedLanguage === code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notifications Bell Icon */}
            <div className="relative">
              <Bell size={20} />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white border-opacity-20">
            <div className="pt-4 space-y-3">
              {/* Mobile Language Selector */}
              <div className="space-y-2">
                <p className="text-sm opacity-90">Choisir la langue:</p>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => handleLanguageChange(code as Language)}
                      className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-colors ${
                        selectedLanguage === code 
                          ? 'bg-white text-gray-800' 
                          : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-xs font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Click outside to close dropdown */}
      {isLanguageDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </header>
  );
}