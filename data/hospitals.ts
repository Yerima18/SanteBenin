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
  },
  {
    id: 3,
    name: "Hôpital Saint-Luc",
    location: "Cotonou",
    type: "Hôpital privé",
    phone: "+229 21 31 30 57",
    lat: 6.3667,
    lng: 2.4167,
    specialties: ["Cardiologie", "Ophtalmologie"]
  },
  {
    id: 4,
    name: "Centre de Santé de Godomey",
    location: "Abomey-Calavi",
    type: "Centre de santé",
    phone: "+229 21 05 12 34",
    lat: 6.3833,
    lng: 2.3167,
    specialties: ["Médecine générale", "Vaccination"]
  },
  {
    id: 5,
    name: "Hôpital Départemental de l'Ouémé",
    location: "Porto-Novo",
    type: "Hôpital départemental",
    phone: "+229 20 21 26 82",
    lat: 6.4969,
    lng: 2.6036,
    specialties: ["Chirurgie", "Médecine interne"]
  },
  {
    id: 6,
    name: "Hôpital Départemental Zou-Collines",
    location: "Abomey",
    type: "Hôpital départemental",
    phone: "+229 22 50 01 23",
    lat: 7.1833,
    lng: 1.9833,
    specialties: ["Chirurgie", "Maternité"]
  }
];