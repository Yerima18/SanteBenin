'use client';
import { useState, useEffect } from 'react';
import { useGeolocation } from '@/hooks/useGeolocation';
import { calculateDistance } from '@/lib/utils';
import { hospitals } from '@/data/hospitals';
import { Hospital } from '@/types';
import LocationButton from '@/components/centers/LocationButton';
import HospitalCard from '@/components/centers/HospitalCard';

export default function CentersSection() {
  const { location, error, loading, getCurrentLocation } = useGeolocation();
  const [nearbyHospitals, setNearbyHospitals] = useState<Hospital[]>([]);
  const [allHospitalsByRegion, setAllHospitalsByRegion] = useState<{[key: string]: Hospital[]}>({});

  // Grouper les hôpitaux par région
  useEffect(() => {
    const grouped = hospitals.reduce((acc, hospital) => {
      const region = hospital.location;
      if (!acc[region]) {
        acc[region] = [];
      }
      acc[region].push(hospital);
      return acc;
    }, {} as {[key: string]: Hospital[]});
    
    setAllHospitalsByRegion(grouped);
  }, []);

  // Calculer les hôpitaux les plus proches quand la position change
  useEffect(() => {
    if (location) {
      const centersWithDistance = hospitals.map(center => ({
        ...center,
        distance: calculateDistance(location, { lat: center.lat, lng: center.lng })
      }));
      
      // Trier par distance et prendre les 6 plus proches
      const nearby = centersWithDistance
        .sort((a, b) => a.distance! - b.distance!)
        .slice(0, 6);
        
      setNearbyHospitals(nearby);
    } else {
      // Si pas de localisation, montrer les centres de Cotonou par défaut
      const cotonouCenters = hospitals
        .filter(center => center.location === "Cotonou")
        .map(center => ({ ...center, distance: undefined }));
      setNearbyHospitals(cotonouCenters);
    }
  }, [location]);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Centres de Santé au Bénin</h2>
      
      {/* Géolocalisation */}
      <LocationButton 
        userLocation={location}
        loading={loading}
        error={error}
        onClick={getCurrentLocation}
      />

      {/* Centres les plus proches */}
      {nearbyHospitals.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-2">🏥</span>
            <h3 className="text-xl font-semibold">
              {location ? 
                "Centres les plus proches de vous" : 
                "Centres de santé recommandés"
              }
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyHospitals.map((hospital) => (
              <HospitalCard key={hospital.id} hospital={hospital} />
            ))}
          </div>
        </div>
      )}

      {/* Tous les centres par région */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center">
          <span className="text-2xl mr-2">📍</span>
          Tous les centres de santé par région
        </h3>
        
        <div className="space-y-8">
          {Object.entries(allHospitalsByRegion).map(([region, regionHospitals]) => (
            <div key={region}>
              <h4 className="font-semibold text-lg text-gray-800 mb-4 border-b pb-2">
                {region} ({regionHospitals.length} centres)
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {regionHospitals.map((hospital) => (
                  <HospitalCard key={hospital.id} hospital={hospital} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services d'urgence */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="font-semibold text-red-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">🚨</span>
          Services d'Urgence - Bénin
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-red-700 mb-2">Numéros d'urgence:</h4>
            <div className="space-y-1 text-red-600">
              <p><strong>166</strong> - Urgences médicales (gratuit)</p>
              <p><strong>117</strong> - Police secours</p>
              <p><strong>118</strong> - Pompiers</p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">SAMU Bénin:</h4>
            <div className="space-y-1 text-red-600">
              <p><strong>+229 95 56 56 56</strong> - Service mobile d'urgence</p>
              <p><strong>Disponible 24h/24</strong></p>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-red-100 rounded-lg">
          <p className="text-red-800 text-sm">
            <strong>⚠️ Important:</strong> En cas d'urgence vitale, appelez immédiatement le 166. 
            Ce service est gratuit depuis tous les opérateurs téléphoniques du Bénin.
          </p>
        </div>
      </div>
    </div>
  );
}