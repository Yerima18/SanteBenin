'use client';
import { MapPin, Phone } from 'lucide-react';
import { Hospital } from '@/types';

interface HospitalCardProps {
  hospital: Hospital;
}

export default function HospitalCard({ hospital }: HospitalCardProps) {
  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${hospital.lat},${hospital.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-lg text-gray-800">{hospital.name}</h4>
        {hospital.distance && (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
            {hospital.distance.toFixed(1)} km
          </span>
        )}
      </div>
      
      <p className="text-gray-600 flex items-center mt-1">
        <MapPin size={14} className="mr-1 text-gray-500" />
        {hospital.location}
      </p>
      
      <p className="text-sm text-gray-500 mb-2">{hospital.type}</p>
      
      <p className="text-green-600 flex items-center mb-3">
        <Phone size={14} className="mr-1" />
        {hospital.phone}
      </p>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Spécialités:</p>
        <div className="flex flex-wrap gap-1">
          {hospital.specialties.slice(0, 2).map((specialty, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              {specialty}
            </span>
          ))}
          {hospital.specialties.length > 2 && (
            <span className="text-xs text-gray-500">+{hospital.specialties.length - 2}</span>
          )}
        </div>
      </div>
      
      <button
        onClick={handleGetDirections}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm flex items-center justify-center space-x-2"
      >
        <MapPin size={16} />
        <span>Obtenir l'itinéraire</span>
      </button>
    </div>
  );
}