// types.ts (si pas déjà défini)
export type HospitalType =
  | "Hôpital universitaire"
  | "Hôpital"
  | "Hôpital privé"
  | "Centre de santé"
  | "Hôpital départemental";

export interface Hospital {
  id: number;
  name: string;
  location: string;
  type: HospitalType;
  phone: string;
  lat: number;
  lng: number;
  specialties: string[];
  website?: string;
}

// hospitals.ts
import { Hospital } from "@/types";

// Coordonnées par ville pour éviter répétition
const cityCoords: Record<string, { lat: number; lng: number }> = {
  "Cotonou": { lat: 6.3703, lng: 2.3912 },
  "Abomey-Calavi": { lat: 6.3833, lng: 2.3167 },
  "Porto-Novo": { lat: 6.4969, lng: 2.6036 },
  "Abomey": { lat: 7.1833, lng: 1.9833 },
};

export const hospitals: Hospital[] = [
  {
    id: 1,
    name: "CNHU-HKM",
    location: "Cotonou",
    type: "Hôpital universitaire",
    phone: "+229 21 30 01 35",
    ...cityCoords["Cotonou"],
    specialties: ["Urgences", "Chirurgie", "Pédiatrie", "Maternité"],
    website: "https://www.cnhu.bj"
  },
  {
    id: 2,
    name: "Hôpital de Zone Suru-Léré",
    location: "Cotonou",
    type: "Hôpital",
    phone: "+229 21 33 30 74",
    ...cityCoords["Cotonou"],
    specialties: ["Médecine générale", "Pédiatrie"]
  },
  {
    id: 3,
    name: "Hôpital Saint-Luc",
    location: "Cotonou",
    type: "Hôpital privé",
    phone: "+229 21 31 30 57",
    ...cityCoords["Cotonou"],
    specialties: ["Cardiologie", "Ophtalmologie"],
    website: "https://www.hopitalsaintluc.bj"
  },
  {
    id: 4,
    name: "Centre de Santé de Godomey",
    location: "Abomey-Calavi",
    type: "Centre de santé",
    phone: "+229 21 05 12 34",
    ...cityCoords["Abomey-Calavi"],
    specialties: ["Médecine générale", "Vaccination"]
  },
  {
    id: 5,
    name: "Hôpital Départemental de l'Ouémé",
    location: "Porto-Novo",
    type: "Hôpital départemental",
    phone: "+229 20 21 26 82",
    ...cityCoords["Porto-Novo"],
    specialties: ["Chirurgie", "Médecine interne"]
  },
  {
    id: 6,
    name: "Hôpital Départemental Zou-Collines",
    location: "Abomey",
    type: "Hôpital départemental",
    phone: "+229 22 50 01 23",
    ...cityCoords["Abomey"],
    specialties: ["Chirurgie", "Maternité"]
  }
];

// Exemple de filtrage rapide :
// const cotonouHospitals = hospitals.filter(h => h.location === "Cotonou");
// const privateHospitals = hospitals.filter(h => h.type === "Hôpital privé");
// const withPediatrics = hospitals.filter(h => h.specialties.includes("Pédiatrie"));
