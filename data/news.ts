export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: 'Vaccination' | 'Épidémie' | 'Campagne' | 'Politique' | 'Prévention';
  priority: 'Haute' | 'Moyenne' | 'Normale';
  icon: string;
  color: string;
  source: string;
}

export interface Alert {
  id: number;
  type: 'urgent' | 'info' | 'warning';
  title: string;
  message: string;
  date: string;
  regions?: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Campagne nationale de vaccination contre la rougeole et la rubéole",
    summary: "Le Bénin a organisé une campagne nationale intégrée de vaccination contre la rougeole et la rubéole du 9 au 15 décembre 2024, soutenue par l'OMS, l'UNICEF et Gavi.",
    date: "Décembre 2024",
    category: "Vaccination",
    priority: "Haute",
    icon: "💉",
    color: "bg-green-500",
    source: "Ministère de la Santé"
  },
  {
    id: 2,
    title: "Élimination de la maladie du sommeil validée au Bénin",
    summary: "L'élimination de la maladie du sommeil en tant que problème de santé publique a été validée au Bénin, marquant une étape importante dans la lutte contre les maladies tropicales négligées.",
    date: "2024",
    category: "Épidémie",
    priority: "Haute",
    icon: "🏆",
    color: "bg-blue-500",
    source: "OMS Bénin"
  },
  {
    id: 3,
    title: "Coalition 'Zéro Paludisme' au Bénin",
    summary: "19 organisations de la société civile se sont engagées pour l'élimination du paludisme avec la campagne 'Zero Malaria Starts with Me'.",
    date: "Juin 2024",
    category: "Campagne",
    priority: "Haute",
    icon: "🦟",
    color: "bg-red-500",
    source: "Coalition société civile"
  },
  {
    id: 4,
    title: "Renforcement de la surveillance épidémiologique",
    summary: "Le Bénin intensifie la surveillance des maladies épidémiques avec de nouveaux systèmes d'alerte précoce dans tous les départements.",
    date: "Novembre 2024",
    category: "Politique",
    priority: "Moyenne",
    icon: "📊",
    color: "bg-purple-500",
    source: "Direction Nationale de la Santé Publique"
  },
  {
    id: 5,
    title: "Campagne de distribution de moustiquaires imprégnées",
    summary: "Distribution gratuite de moustiquaires imprégnées d'insecticide longue durée dans les régions à forte transmission palustre.",
    date: "Septembre 2024",
    category: "Prévention",
    priority: "Haute",
    icon: "🛡️",
    color: "bg-orange-500",
    source: "Programme National de Lutte contre le Paludisme"
  },
  {
    id: 6,
    title: "Journée mondiale du lavage des mains",
    summary: "Sensibilisation nationale sur l'importance du lavage des mains pour prévenir les maladies diarrhéiques et respiratoires.",
    date: "15 octobre 2024",
    category: "Prévention",
    priority: "Normale",
    icon: "🧼",
    color: "bg-cyan-500",
    source: "Ministère de la Santé"
  }
];

export const currentAlerts: Alert[] = [
  {
    id: 1,
    type: "urgent",
    title: "Campagne de vaccination rougeole en cours",
    message: "Vaccination gratuite pour tous les enfants de 6 mois à 15 ans. Rendez-vous dans le centre de santé le plus proche.",
    date: "15-20 septembre 2024",
    regions: ["Littoral", "Atlantique", "Ouémé", "Plateau"]
  },
  {
    id: 2,
    type: "info",
    title: "Distribution de moustiquaires",
    message: "Distribution gratuite de moustiquaires imprégnées dans les quartiers. Contactez votre relais communautaire.",
    date: "Septembre 2024",
    regions: ["Zou", "Collines", "Borgou", "Alibori"]
  },
  {
    id: 3,
    type: "warning",
    title: "Surveillance choléra renforcée",
    message: "Renforcement de la surveillance du choléra dans les zones à risque. Respectez les mesures d'hygiène.",
    date: "Août 2024",
    regions: ["Mono", "Couffo", "Atacora", "Donga"]
  }
];

export const healthStats = {
  vaccination_coverage: "89%",
  malaria_reduction: "25%",
  child_mortality: "67‰",
  health_centers: "200+",
  campaigns_2024: 12
};