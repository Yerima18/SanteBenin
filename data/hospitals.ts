import { Hospital } from '@/types';

export const hospitals: Hospital[] = [
  // ==================== LITTORAL (Cotonou) ====================
  {
    id: 1,
    name: "Centre National Hospitalier Universitaire Hubert Koutoukou Maga (CNHU-HKM)",
    location: "Cotonou",
    type: "Centre Hospitalier Universitaire",
    phone: "+229 21 30 01 35",
    lat: 6.3703,
    lng: 2.3912,
    specialties: ["Urgences 24h/24", "Chirurgie générale", "Pédiatrie", "Maternité", "Cardiologie", "Neurologie", "Oncologie"]
  },
  {
    id: 2,
    name: "Hôpital de Zone Suru-Léré",
    location: "Cotonou",
    type: "Hôpital de Zone",
    phone: "+229 21 33 30 74",
    lat: 6.3833,
    lng: 2.3833,
    specialties: ["Médecine générale", "Pédiatrie", "Urgences", "Maternité", "Laboratoire"]
  },
  {
    id: 3,
    name: "Hôpital Saint-Luc",
    location: "Cotonou",
    type: "Hôpital Privé",
    phone: "+229 21 31 30 57",
    lat: 6.3667,
    lng: 2.4167,
    specialties: ["Cardiologie", "Ophtalmologie", "Chirurgie", "Imagerie médicale", "Laboratoire"]
  },
  {
    id: 4,
    name: "Clinique Louis Pasteur",
    location: "Cotonou",
    type: "Clinique Privée",
    phone: "+229 21 31 25 67",
    lat: 6.3715,
    lng: 2.3928,
    specialties: ["Médecine générale", "Gynécologie", "Pédiatrie", "Dentaire", "Urgences"]
  },
  {
    id: 5,
    name: "Centre de Santé de Tokpa-Domè",
    location: "Cotonou",
    type: "Centre de Santé",
    phone: "+229 21 33 45 12",
    lat: 6.3456,
    lng: 2.4123,
    specialties: ["Consultation externe", "Vaccination", "Planning familial", "SMI"]
  },

  // ==================== ATLANTIQUE ====================
  {
    id: 6,
    name: "Centre de Santé de Godomey",
    location: "Abomey-Calavi",
    type: "Centre de Santé",
    phone: "+229 21 05 12 34",
    lat: 6.3833,
    lng: 2.3167,
    specialties: ["Médecine générale", "Vaccination", "Maternité", "Pédiatrie", "Planning familial"]
  },
  {
    id: 7,
    name: "Hôpital de Zone de Sô-Ava",
    location: "Sô-Ava",
    type: "Hôpital de Zone",
    phone: "+229 21 05 45 67",
    lat: 6.4667,
    lng: 2.3000,
    specialties: ["Maternité", "Urgences", "Médecine générale", "Chirurgie mineure"]
  },
  {
    id: 8,
    name: "Centre de Santé d'Allada",
    location: "Allada",
    type: "Centre de Santé",
    phone: "+229 21 05 23 45",
    lat: 6.6653,
    lng: 2.1514,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "Laboratoire"]
  },
  {
    id: 9,
    name: "Centre de Santé de Toffo",
    location: "Toffo",
    type: "Centre de Santé", 
    phone: "+229 21 05 67 89",
    lat: 6.8444,
    lng: 1.9833,
    specialties: ["Médecine générale", "SMI", "Vaccination", "Planning familial"]
  },
  {
    id: 10,
    name: "Hôpital de Zone d'Ouidah",
    location: "Ouidah",
    type: "Hôpital de Zone",
    phone: "+229 21 34 10 25",
    lat: 6.3667,
    lng: 2.0833,
    specialties: ["Médecine générale", "Chirurgie", "Maternité", "Urgences", "Vaccination"]
  },

  // ==================== OUÉMÉ ====================
  {
    id: 11,
    name: "Hôpital Départemental de l'Ouémé-Plateau",
    location: "Porto-Novo",
    type: "Hôpital Départemental",
    phone: "+229 20 21 26 82",
    lat: 6.4969,
    lng: 2.6036,
    specialties: ["Chirurgie", "Médecine interne", "Pédiatrie", "Maternité", "Urgences", "Ophtalmologie"]
  },
  {
    id: 12,
    name: "Centre de Santé Urbain de Porto-Novo",
    location: "Porto-Novo",
    type: "Centre de Santé",
    phone: "+229 20 21 35 46",
    lat: 6.4833,
    lng: 2.6167,
    specialties: ["Consultation externe", "Vaccination", "Planning familial", "SMI"]
  },
  {
    id: 13,
    name: "Hôpital de Zone d'Adjarra",
    location: "Adjarra",
    type: "Hôpital de Zone",
    phone: "+229 20 24 12 56",
    lat: 6.4833,
    lng: 2.6500,
    specialties: ["Médecine générale", "Maternité", "Urgences", "Chirurgie mineure"]
  },
  {
    id: 14,
    name: "Centre de Santé d'Akpro-Missérété",
    location: "Akpro-Missérété",
    type: "Centre de Santé",
    phone: "+229 20 24 78 90",
    lat: 6.5500,
    lng: 2.5833,
    specialties: ["Consultation externe", "Vaccination", "SMI", "Laboratoire"]
  },
  {
    id: 15,
    name: "Centre de Santé d'Avrankou",
    location: "Avrankou",
    type: "Centre de Santé",
    phone: "+229 20 24 34 12",
    lat: 6.4167,
    lng: 2.7000,
    specialties: ["Médecine générale", "Maternité", "Vaccination", "Planning familial"]
  },

  // ==================== PLATEAU ====================
  {
    id: 16,
    name: "Hôpital de Zone de Pobè",
    location: "Pobè",
    type: "Hôpital de Zone",
    phone: "+229 20 25 67 34",
    lat: 6.9833,
    lng: 2.6667,
    specialties: ["Médecine générale", "Chirurgie", "Maternité", "Urgences", "Pédiatrie"]
  },
  {
    id: 17,
    name: "Centre de Santé de Kétou",
    location: "Kétou",
    type: "Centre de Santé",
    phone: "+229 20 25 45 23",
    lat: 7.3639,
    lng: 2.6058,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },
  {
    id: 18,
    name: "Centre de Santé d'Adja-Ouèrè",
    location: "Adja-Ouèrè",
    type: "Centre de Santé",
    phone: "+229 20 25 78 56",
    lat: 7.1167,
    lng: 2.6167,
    specialties: ["Médecine générale", "Vaccination", "Planning familial", "Laboratoire"]
  },

  // ==================== ZOU ====================
  {
    id: 19,
    name: "Hôpital Départemental du Zou-Collines",
    location: "Abomey",
    type: "Hôpital Départemental",
    phone: "+229 22 50 01 23",
    lat: 7.1833,
    lng: 1.9833,
    specialties: ["Chirurgie", "Maternité", "Médecine interne", "Pédiatrie", "Urgences", "Cardiologie"]
  },
  {
    id: 20,
    name: "Hôpital de Zone de Bohicon",
    location: "Bohicon",
    type: "Hôpital de Zone",
    phone: "+229 22 51 00 46",
    lat: 7.1667,
    lng: 2.0667,
    specialties: ["Maternité", "Pédiatrie", "Chirurgie", "Médecine générale", "Urgences"]
  },
  {
    id: 21,
    name: "Centre de Santé de Covè",
    location: "Covè",
    type: "Centre de Santé",
    phone: "+229 22 51 67 89",
    lat: 7.2167,
    lng: 2.2833,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },
  {
    id: 22,
    name: "Centre de Santé de Za-Kpota",
    location: "Za-Kpota",
    type: "Centre de Santé",
    phone: "+229 22 51 34 56",
    lat: 7.0833,
    lng: 1.9167,
    specialties: ["Médecine générale", "Vaccination", "Planning familial", "Laboratoire"]
  },
  {
    id: 23,
    name: "Centre de Santé de Zagnanado",
    location: "Zagnanado",
    type: "Centre de Santé",
    phone: "+229 22 51 78 12",
    lat: 7.2000,
    lng: 2.3500,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },

  // ==================== COLLINES ====================
  {
    id: 24,
    name: "Hôpital de Zone de Savalou",
    location: "Savalou",
    type: "Hôpital de Zone",
    phone: "+229 22 55 12 34",
    lat: 7.9278,
    lng: 1.9750,
    specialties: ["Médecine générale", "Chirurgie", "Maternité", "Pédiatrie", "Urgences"]
  },
  {
    id: 25,
    name: "Centre de Santé de Bantè",
    location: "Bantè",
    type: "Centre de Santé",
    phone: "+229 22 55 45 67",
    lat: 8.4167,
    lng: 1.8833,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },
  {
    id: 26,
    name: "Centre de Santé de Glazoué",
    location: "Glazoué",
    type: "Centre de Santé",
    phone: "+229 22 55 78 90",
    lat: 7.9667,
    lng: 2.2333,
    specialties: ["Médecine générale", "Vaccination", "Planning familial", "Laboratoire"]
  },

  // ==================== MONO ====================
  {
    id: 27,
    name: "Hôpital de Zone de Lokossa",
    location: "Lokossa",
    type: "Hôpital de Zone",
    phone: "+229 21 41 00 85",
    lat: 6.6389,
    lng: 1.7167,
    specialties: ["Médecine générale", "Urgences", "Maternité", "Chirurgie", "Pédiatrie"]
  },
  {
    id: 28,
    name: "Centre de Santé d'Aplahoué",
    location: "Aplahoué",
    type: "Centre de Santé",
    phone: "+229 21 41 23 45",
    lat: 6.9333,
    lng: 1.6833,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },
  {
    id: 29,
    name: "Centre de Santé de Comè",
    location: "Comè",
    type: "Centre de Santé",
    phone: "+229 21 41 56 78",
    lat: 6.4000,
    lng: 1.8833,
    specialties: ["Médecine générale", "Vaccination", "Planning familial", "Laboratoire"]
  },
  {
    id: 30,
    name: "Centre de Santé de Houéyogbé",
    location: "Houéyogbé",
    type: "Centre de Santé",
    phone: "+229 21 41 78 90",
    lat: 6.7833,
    lng: 1.7333,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },

  // ==================== COUFFO ====================
  {
    id: 31,
    name: "Hôpital de Zone de Dogbo",
    location: "Dogbo",
    type: "Hôpital de Zone",
    phone: "+229 21 42 12 34",
    lat: 6.7833,
    lng: 1.7833,
    specialties: ["Médecine générale", "Maternité", "Urgences", "Chirurgie mineure", "Pédiatrie"]
  },
  {
    id: 32,
    name: "Centre de Santé d'Agouna",
    location: "Agouna",
    type: "Centre de Santé",
    phone: "+229 21 42 45 67",
    lat: 7.1000,
    lng: 1.8167,
    specialties: ["Consultation externe", "Vaccination", "SMI", "Planning familial"]
  },
  {
    id: 33,
    name: "Centre de Santé de Klouékanmè",
    location: "Klouékanmè",
    type: "Centre de Santé",
    phone: "+229 21 42 78 90",
    lat: 7.0167,
    lng: 1.9833,
    specialties: ["Médecine générale", "Maternité", "Vaccination", "Laboratoire"]
  },

  // ==================== DONGA ====================
  {
    id: 34,
    name: "Hôpital de Zone de Djougou",
    location: "Djougou",
    type: "Hôpital de Zone",
    phone: "+229 23 80 00 92",
    lat: 9.7000,
    lng: 1.6667,
    specialties: ["Chirurgie", "Médecine générale", "Maternité", "Pédiatrie", "Urgences"]
  },
  {
    id: 35,
    name: "Centre de Santé de Bassila",
    location: "Bassila",
    type: "Centre de Santé",
    phone: "+229 23 80 23 45",
    lat: 9.0167,
    lng: 1.6667,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },
  {
    id: 36,
    name: "Centre de Santé de Copargo",
    location: "Copargo",
    type: "Centre de Santé",
    phone: "+229 23 80 56 78",
    lat: 9.1000,
    lng: 1.3833,
    specialties: ["Médecine générale", "Vaccination", "Planning familial", "Laboratoire"]
  },

  // ==================== ATACORA ====================
  {
    id: 37,
    name: "Hôpital Départemental de l'Atacora-Donga",
    location: "Natitingou",
    type: "Hôpital Départemental",
    phone: "+229 23 82 11 31",
    lat: 10.3167,
    lng: 1.3833,
    specialties: ["Chirurgie", "Maternité", "Médecine interne", "Pédiatrie", "Urgences", "Ophtalmologie"]
  },
  {
    id: 38,
    name: "Centre de Santé de Tanguiéta",
    location: "Tanguiéta",
    type: "Centre de Santé",
    phone: "+229 23 82 45 67",
    lat: 10.6167,
    lng: 1.2667,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },
  {
    id: 39,
    name: "Centre de Santé de Boukoumbé",
    location: "Boukoumbé",
    type: "Centre de Santé",
    phone: "+229 23 82 78 90",
    lat: 10.1833,
    lng: 1.1167,
    specialties: ["Médecine générale", "Vaccination", "Planning familial", "Laboratoire"]
  },
  {
    id: 40,
    name: "Centre de Santé de Kérou",
    location: "Kérou",
    type: "Centre de Santé",
    phone: "+229 23 82 12 56",
    lat: 10.8167,
    lng: 2.0667,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },

  // ==================== BORGOU ====================
  {
    id: 41,
    name: "Hôpital Départemental du Borgou-Alibori",
    location: "Parakou",
    type: "Hôpital Départemental",
    phone: "+229 23 61 01 95",
    lat: 9.3500,
    lng: 2.6333,
    specialties: ["Médecine générale", "Pédiatrie", "Chirurgie", "Maternité", "Urgences", "Cardiologie"]
  },
  {
    id: 42,
    name: "Hôpital de Zone de Nikki",
    location: "Nikki",
    type: "Hôpital de Zone",
    phone: "+229 23 61 34 56",
    lat: 9.9333,
    lng: 3.2167,
    specialties: ["Médecine générale", "Maternité", "Chirurgie", "Pédiatrie", "Urgences"]
  },
  {
    id: 43,
    name: "Centre de Santé de Tchaourou",
    location: "Tchaourou",
    type: "Centre de Santé",
    phone: "+229 23 61 67 89",
    lat: 8.8833,
    lng: 2.6000,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },
  {
    id: 44,
    name: "Centre de Santé de Bembèrèkè",
    location: "Bembèrèkè",
    type: "Centre de Santé",
    phone: "+229 23 61 78 12",
    lat: 10.2167,
    lng: 2.6667,
    specialties: ["Médecine générale", "Vaccination", "Planning familial", "Laboratoire"]
  },
  {
    id: 45,
    name: "Centre de Santé de Sinendé",
    location: "Sinendé",
    type: "Centre de Santé",
    phone: "+229 23 61 90 34",
    lat: 9.5833,
    lng: 2.4000,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },

  // ==================== ALIBORI ====================
  {
    id: 46,
    name: "Hôpital de Zone de Kandi",
    location: "Kandi",
    type: "Hôpital de Zone",
    phone: "+229 23 60 00 78",
    lat: 11.1333,
    lng: 2.9333,
    specialties: ["Médecine générale", "Maternité", "Chirurgie", "Pédiatrie", "Urgences"]
  },
  {
    id: 47,
    name: "Centre de Santé de Banikoara",
    location: "Banikoara",
    type: "Centre de Santé",
    phone: "+229 23 60 23 45",
    lat: 11.3000,
    lng: 2.4333,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },
  {
    id: 48,
    name: "Centre de Santé de Gogounou",
    location: "Gogounou",
    type: "Centre de Santé",
    phone: "+229 23 60 56 78",
    lat: 10.8333,
    lng: 2.8333,
    specialties: ["Médecine générale", "Vaccination", "Planning familial", "Laboratoire"]
  },
  {
    id: 49,
    name: "Centre de Santé de Karimama",
    location: "Karimama",
    type: "Centre de Santé",
    phone: "+229 23 60 78 90",
    lat: 12.0500,
    lng: 3.3833,
    specialties: ["Consultation externe", "Maternité", "Vaccination", "SMI"]
  },
  {
    id: 50,
    name: "Centre de Santé de Malanville",
    location: "Malanville",
    type: "Centre de Santé",
    phone: "+229 23 60 90 12",
    lat: 11.8667,
    lng: 3.3833,
    specialties: ["Médecine générale", "Vaccination", "Planning familial", "Laboratoire"]
  },

  // ==================== CENTRES SPÉCIALISÉS ====================
  {
    id: 51,
    name: "Institut National d'Ophtalmologie (INO)",
    location: "Cotonou",
    type: "Institut Spécialisé",
    phone: "+229 21 30 14 76",
    lat: 6.3650,
    lng: 2.3889,
    specialties: ["Ophtalmologie", "Chirurgie oculaire", "Consultation spécialisée", "Urgences ophtalmologiques"]
  },
  {
    id: 52,
    name: "Centre National de Pneumo-Phtisiologie (CNPP)",
    location: "Cotonou",
    type: "Centre Spécialisé",
    phone: "+229 21 30 22 88",
    lat: 6.3722,
    lng: 2.3945,
    specialties: ["Pneumologie", "Tuberculose", "Maladies respiratoires", "Radiologie pulmonaire"]
  }
];