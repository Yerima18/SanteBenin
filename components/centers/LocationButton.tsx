'use client';
import { MapPin, Loader2 } from 'lucide-react';
import { UserLocation } from '@/types';

interface LocationButtonProps {
  userLocation: UserLocation | null;
  loading: boolean;
  error: string | null;
  onClick: () => void;
}

export default function LocationButton({ 
  userLocation, 
  loading, 
  error, 
  onClick 
}: LocationButtonProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-blue-800">
            Trouvez les centres les plus proches de vous
          </h3>
          <p className="text-blue-600 text-sm mt-1">
            {loading && "Localisation en cours..."}
            {error && error}
            {userLocation && !loading && 
              `Position détectée: ${userLocation.lat.toFixed(4)}°, ${userLocation.lng.toFixed(4)}°`
            }
            {!userLocation && !loading && !error && 
              "Cliquez pour activer la géolocalisation"
            }
          </p>
        </div>
        
        <button
          onClick={onClick}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <MapPin size={18} />
          )}
          <span>{loading ? 'Localisation...' : 'Me localiser'}</span>
        </button>
      </div>
      
      {error && (
        <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}