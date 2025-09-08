import { UserLocation } from '@/types';

// Fonction pour calculer la distance entre deux points GPS
export const calculateDistance = (
  pos1: UserLocation,
  pos2: UserLocation
): number => {
  const R = 6371; // Rayon de la Terre en km
  const dLat = (pos2.lat - pos1.lat) * Math.PI / 180;
  const dLon = (pos2.lng - pos1.lng) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(pos1.lat * Math.PI / 180) *
    Math.cos(pos2.lat * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Fonction utilitaire pour les classes CSS
export function cn(...inputs: (string | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}