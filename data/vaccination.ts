export interface VaccineSchedule {
  id: number;
  age: string;
  vaccines: {
    name: string;
    description: string;
    color: string;
  }[];
  important?: boolean;
}

export const vaccinationSchedule: VaccineSchedule[] = [
  {
    id: 1,
    age: "À la naissance",
    vaccines: [
      { name: "BCG", description: "Tuberculose", color: "bg-green-500" },
      { name: "Hépatite B", description: "Hépatite B (1ère dose)", color: "bg-yellow-500" },
      { name: "Polio 0", description: "Poliomyélite", color: "bg-blue-500" }
    ],
    important: true
  },
  {
    id: 2,
    age: "6 semaines",
    vaccines: [
      { name: "Polio 1", description: "Poliomyélite (1ère dose)", color: "bg-blue-500" },
      { name: "Pentavalent 1", description: "DTC-HepB-Hib (1ère dose)", color: "bg-purple-500" }
    ]
  },
  {
    id: 3,
    age: "9 mois",
    vaccines: [
      { name: "Rougeole 1", description: "Rougeole-Rubéole", color: "bg-pink-500" },
      { name: "Fièvre jaune", description: "Fièvre jaune", color: "bg-yellow-600" }
    ],
    important: true
  }
];

export const vaccinationInfo = {
  campaigns: [
    {
      name: "Campagne Rougeole 2024",
      dates: "15-20 septembre 2024", 
      target: "Enfants 6 mois - 15 ans",
      status: "En cours"
    }
  ]
};