import { Hospital } from '@/types';

export const hospitals: Hospital[] = [
  {
    id: 1,
    name: "CNHU-HKM",
    location: "Cotonou",
    type: "Hôpital universitaire",
    phone: "+229 21 30 01 35",
    lat: 6.3703,
    lng: 2.3912,
    specialties: ["Urgences", "Chirurgie", "Pédiatrie", "Maternité"]
  },
  {
    id: 2,
    name: "Hôpital de Zone Suru-Léré",
    location: "Cotonou",
    type: "Hôpital",
    phone: "+229 21 33 30 74",
    lat: 6.3833,
    lng: 2.3833,
    specialties: ["Médecine générale", "Pédiatrie"]
  }
  // ... On ajoutera les autres après
];