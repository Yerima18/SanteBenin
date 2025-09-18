'use client';
// This file is a Next.js Client Component (uses hooks, browser APIs, etc.)

import { MapPin, Phone } from 'lucide-react'; // Icons
import { Hospital } from '@/types';           // Hospital type definition

// Props for the HospitalCard component
interface HospitalCardProps {
  hospital: Hospital;
}

export default function HospitalCard({ hospital }: HospitalCardProps) {
  // Open Google Maps directions to the hospital
  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${hospital.lat},${hospital.lng}`;
    window.open(url, '_blank'); // Opens in a new tab
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      
      {/* ---------------------------- */}
      {/* HEADER: Name + Distance      */}
      {/* ---------------------------- */}
      <div className="flex justify-between items-start mb-2">
        {/* Hospital name */}
        <h4 className="font-semibold text-lg text-gray-800">{hospital.name}</h4>
        
        {/* Distance (if available) */}
        {hospital.distance && (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
            {hospital.distance.toFixed(1)} km
          </span>
        )}
      </div>
      
      {/* ---------------------------- */}
      {/* LOCATION                     */}
      {/* ---------------------------- */}
      <p className="text-gray-600 flex items-center mt-1">
        <MapPin size={14} className="mr-1 text-gray-500" />
        {hospital.location}
      </p>
      
      {/* Hospital type (e.g., CHU, Clinique privée, etc.) */}
      <p className="text-sm text-gray-500 mb-2">{hospital.type}</p>
      
      {/* ---------------------------- */}
      {/* PHONE NUMBER                 */}
      {/* ---------------------------- */}
      <p className="text-green-600 flex items-center mb-3">
        <Phone size={14} className="mr-1" />
        {hospital.phone}
      </p>
      
      {/* ---------------------------- */}
      {/* SPECIALTIES (Tags)           */}
      {/* ---------------------------- */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Spécialités:</p>
        <div className="flex flex-wrap gap-1">
          {/* Show max 2 specialties */}
          {hospital.specialties.slice(0, 2).map((specialty, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
            >
              {specialty}
            </span>
          ))}
          
          {/* If more than 2, show "+X" */}
          {hospital.specialties.length > 2 && (
            <span className="text-xs text-gray-500">
              +{hospital.specialties.length - 2}
            </span>
          )}
        </div>
      </div>
      
      {/* ---------------------------- */}
      {/* DIRECTIONS BUTTON (Google Maps) */}
      {/* ---------------------------- */}
      <button
        onClick={handleGetDirections}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded 
                   hover:bg-blue-700 transition-colors text-sm 
                   flex items-center justify-center space-x-2"
      >
        <MapPin size={16} />
        <span>Obtenir l'itinéraire</span>
      </button>
    </div>
  );
}
