'use client';
import { MapPin, Loader2, AlertCircle } from 'lucide-react';
import { UserLocation } from '@/types';

interface LocationButtonProps {
  userLocation: UserLocation | null;
  loading: boolean;
  error: string | null;
  onClick: () => void;
}

export default function LocationButton({ userLocation, loading, error, onClick }: LocationButtonProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-blue-800 text-lg mb-2">
            🗺️ Trouvez les centres les plus proches de vous
          </h3>
          <div className="text-blue-600 text-sm">
            {loading && (
              <div className="flex items-center space-x-2">
                <Loader2 size={16} className="animate-spin" />
                <span>Localisation en cours...</span>
              </div>
            )}
            {error && (
              <div className="flex items-center space-x-2 text-red-600">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}
            {userLocation && !loading && (
              <div className="flex items-center space-x-2 text-green-600">
                <MapPin size={16} />
                <span>Position détectée</span>
              </div>
            )}
            {!userLocation && !loading && !error && (
              <span>Cliquez sur "Me localiser" pour trouver les centres près de vous</span>
            )}
          </div>
        </div>
        
        <button
          onClick={onClick}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed ml-4"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Localisation...</span>
            </>
          ) : (
            <>
              <MapPin size={18} />
              <span>Me localiser</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}