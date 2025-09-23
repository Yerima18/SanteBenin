'use client';
import { useState, useEffect } from 'react';
import { useGeolocation } from '@/hooks/useGeolocation';
import { calculateDistance } from '@/lib/utils';
import { hospitals } from '@/data/hospitals';
import { Hospital } from '@/types';
import LocationButton from '@/components/centers/LocationButton';
import HospitalCard from '@/components/centers/HospitalCard';

export default function CentersSection() {
  // Geolocation hook (gives location, error, loading state, and a function to fetch position)
  const { location, error, loading, getCurrentLocation } = useGeolocation();

  // List of nearby hospitals (calculated based on geolocation)
  const [nearbyHospitals, setNearbyHospitals] = useState<Hospital[]>([]);

  // Hospitals grouped by region
  const [allHospitalsByRegion, setAllHospitalsByRegion] = useState<{[key: string]: Hospital[]}>({});

  // Group hospitals by region on first load
  useEffect(() => {
    const grouped = hospitals.reduce((acc, hospital) => {
      const region = hospital.location;
      if (!acc[region]) acc[region] = [];
      acc[region].push(hospital);
      return acc;
    }, {} as {[key: string]: Hospital[]});
    
    setAllHospitalsByRegion(grouped);

    // Default: show Cotonou centers if no location yet
    const cotonouCenters = hospitals
      .filter(center => center.location === "Cotonou")
      .map(center => ({ ...center, distance: undefined }));
    setNearbyHospitals(cotonouCenters);
  }, []);

  // Recalculate nearby hospitals whenever the location changes
  useEffect(() => {
    if (location) {
      const centersWithDistance = hospitals.map(center => ({
        ...center,
        distance: calculateDistance(location, { lat: center.lat, lng: center.lng })
      }));
      
      // Sort by distance and keep only the 6 closest
      const nearby = centersWithDistance
        .sort((a, b) => a.distance! - b.distance!)
        .slice(0, 6);
        
      setNearbyHospitals(nearby);
    }
  }, [location]);

  // Automatically trigger geolocation on component load
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          🏥 Health Centers in Benin
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Quickly find the nearest health centers thanks to geolocation. 
          Over 15 centers listed across Benin.
        </p>
      </div>
      
      {/* Geolocation Button */}
      <LocationButton 
        userLocation={location}
        loading={loading}
        error={error}
        onClick={getCurrentLocation}
      />

      {/* Nearby Centers */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <span className="text-3xl mr-3">📍</span>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              {location ? "Closest centers to you" : "Recommended centers (Cotonou)"}
            </h3>
            {location && (
              <p className="text-green-600 text-sm mt-1">
                Sorted by distance from your position
              </p>
            )}
          </div>
        </div>
        
        {/* Grid of hospitals */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyHospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))}
        </div>
      </div>

      {/* All centers by region */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <span className="text-3xl mr-3">🗺️</span>
          <h3 className="text-2xl font-bold text-gray-800">
            All centers by region
          </h3>
        </div>
        
        {/* Render each region with its hospitals */}
        <div className="space-y-10">
          {Object.entries(allHospitalsByRegion).map(([region, regionHospitals]) => (
            <div key={region}>
              <div className="flex items-center mb-6">
                <h4 className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 pb-1">
                  📍 {region}
                </h4>
                <span className="ml-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {regionHospitals.length} centers
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionHospitals.map((hospital) => (
                  <HospitalCard key={hospital.id} hospital={hospital} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Services */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-red-800 flex items-center justify-center">
            <span className="text-3xl mr-3">🚨</span>
            Emergency Services - Republic of Benin
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Emergency Numbers */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-red-700 mb-4 text-lg">📞 Emergency numbers</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded">
                <span className="font-medium">🏥 Medical Emergencies</span>
                <span className="text-red-600 font-bold text-lg">166</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                <span className="font-medium">👮 Police Help</span>
                <span className="text-blue-600 font-bold text-lg">117</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
                <span className="font-medium">🚒 Firefighters</span>
                <span className="text-orange-600 font-bold text-lg">118</span>
              </div>
            </div>
          </div>
          
          {/* SAMU Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-red-700 mb-4 text-lg">🚑 SAMU Benin</h4>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded">
                <p className="font-medium text-green-700">Emergency Mobile Service</p>
                <p className="text-green-600 font-bold text-lg">+229 95 56 56 56</p>
              </div>
              <div className="p-3 bg-blue-50 rounded">
                <p className="font-medium text-blue-700">Availability</p>
                <p className="text-blue-600 font-bold">24/7</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Important Note */}
        <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
          <p className="text-red-800 text-center">
            <strong>⚠️ IMPORTANT:</strong> In case of a life-threatening emergency, call <strong>166</strong> immediately. 
            This service is <strong>free</strong> from all operators in Benin.
          </p>
        </div>
      </div>
    </div>
  );
}
