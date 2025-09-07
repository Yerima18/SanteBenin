'use client';
import { useState } from 'react';
import { UserLocation } from '@/types';

export const useGeolocation = () => {
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError('Géolocalisation non supportée');
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setError(null);
        setLoading(false);
      },
      (error) => {
        setError('Impossible d\'obtenir votre position');
        setLoading(false);
      }
    );
  };

  return { location, error, loading, getCurrentLocation };
};