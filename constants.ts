
import { Disease, Category, Alert } from './types';

export const DISEASES: Disease[] = [
  {
    id: '1',
    name: 'Paludisme (Malaria)',
    slug: 'malaria',
    category: Category.INFECTIOUS,
    overview: 'Le paludisme reste la première cause de consultation au Bénin. C\'est une maladie potentiellement mortelle transmise par les moustiques Anophèles.',
    symptoms: ['Fièvre élevée', 'Frissons', 'Maux de tête', 'Douleurs musculaires', 'Fatigue intense'],
    transmission: 'Transmis par la piqûre d\'un moustique femelle infecté.',
    prevention: [
      'Dormir sous une moustiquaire imprégnée d\'insecticide (MII)',
      'Éliminer les eaux stagnantes autour de la maison',
      'Porter des vêtements couvrants le soir',
      'Utilisation de répulsifs cutanés',
      'Vaccination R21/Matrix-M pour les enfants (disponible en 2026)'
    ],
    whenToSeekHelp: 'Dès l\'apparition de la fièvre, surtout chez l\'enfant de moins de 5 ans et la femme enceinte.',
    update2026: 'Le Bénin a généralisé le vaccin R21 en 2026, réduisant drastiquement les formes graves chez les nourrissons.',
    myths: [
      { myth: 'Manger des mangues donne le paludisme.', fact: 'Le paludisme est causé uniquement par le parasite Plasmodium transmis par les moustiques.' }
    ],
    tags: ['Moustiques', 'Fièvre', 'Vaccin']
  },
  {
    id: '2',
    name: 'Dengue',
    slug: 'dengue',
    category: Category.INFECTIOUS,
    overview: 'La dengue est une infection virale transmise par les moustiques Aedes, de plus en plus fréquente dans les zones urbaines du Bénin comme Cotonou.',
    symptoms: ['Douleur derrière les yeux', 'Éruptions cutanées', 'Douleurs articulaires sévères', 'Forte fièvre'],
    transmission: 'Transmis par les moustiques Aedes aegypti et Aedes albopictus.',
    prevention: [
      'Vider les soucoupes et pots de fleurs',
      'Couvrir les réservoirs d\'eau',
      'Utiliser des moustiquaires même pendant la journée'
    ],
    whenToSeekHelp: 'Si vous ressentez des douleurs abdominales sévères ou des saignements des gencives.',
    update2026: 'Surveillance accrue des variants urbains dans les départements du Littoral et de l\'Atlantique.',
    myths: [
      { myth: 'La dengue est la même chose que le paludisme.', fact: 'Non, ce sont deux maladies différentes causées par des agents et des types de moustiques différents.' }
    ],
    tags: ['Urbain', 'Moustiques', 'Virus']
  },
  {
    id: '3',
    name: 'Drépanocytose',
    slug: 'drepanocytose',
    category: Category.GENETIC,
    overview: 'Maladie génétique du sang très répandue au Bénin affectant l\'hémoglobine. Elle nécessite un suivi médical à vie.',
    symptoms: ['Crises douloureuses (os, articulations)', 'Anémie chronique (pâleur, fatigue)', 'Sensibilité aux infections', 'Yeux jaunes'],
    transmission: 'Héréditaire (transmise par les deux parents porteurs du gène S). Ce n\'est pas contagieux.',
    prevention: [
      'Dépistage électrophorèse de l\'hémoglobine avant le mariage',
      'Hydratation abondante quotidienne',
      'Alimentation équilibrée et acide folique',
      'Éviter le froid intense et les altitudes élevées'
    ],
    whenToSeekHelp: 'En cas de forte douleur ne cédant pas au paracétamol ou de fièvre brutale.',
    update2026: 'Généralisation du dépistage néonatal systématique dans toutes les maternités publiques du Bénin.',
    myths: [
      { myth: 'L\'enfant drépanocytaire est un "enfant de l\'eau" ou maudit.', fact: 'C\'est une maladie génétique claire qui se soigne très bien avec un suivi moderne.' }
    ],
    tags: ['Sang', 'Génétique', 'Dépistage']
  },
  {
    id: '4',
    name: 'Choléra',
    slug: 'cholera',
    category: Category.WATERBORNE,
    overview: 'Une infection diarrhéique aiguë causée par l\'ingestion d\'aliments ou d\'eau contaminés.',
    symptoms: ['Diarrhée aqueuse abondante', 'Vomissements', 'Déshydratation rapide', 'Crampes musculaires'],
    transmission: 'Fécale-orale, via l\'eau ou les aliments souillés.',
    prevention: [
      'Se laver les mains à l\'eau et au savon avant de manger',
      'Boire de l\'eau traitée ou bouillie',
      'Bien cuire les aliments et les consommer chauds',
      'Utiliser des latrines propres'
    ],
    whenToSeekHelp: 'Immédiatement en cas de diarrhée liquide répétée pour éviter une déshydratation fatale.',
    update2026: 'Nouveaux protocoles de gestion de l\'eau dans les zones lacustres (Ganvié, Sô-Ava).',
    myths: [
      { myth: 'Le choléra ne touche que les pauvres.', fact: 'Le choléra peut toucher n\'importe qui exposé à de l\'eau ou de la nourriture contaminée.' }
    ],
    tags: ['Eau', 'Hygiène', 'Urgence']
  },
  {
    id: '5',
    name: 'Tuberculose',
    slug: 'tuberculose',
    category: Category.RESPIRATORY,
    overview: 'Maladie infectieuse touchant principalement les poumons, causée par une bactérie.',
    symptoms: ['Toux persistante (+ de 2 semaines)', 'Perte de poids', 'Sueurs nocturnes', 'Crachats de sang'],
    transmission: 'Par voie aérienne (toux, éternuements d\'une personne malade).',
    prevention: [
      'Vaccination BCG à la naissance',
      'Aérer les lieux de vie',
      'Se couvrir la bouche pour tousser',
      'Dépistage précoce de l\'entourage d\'un malade'
    ],
    whenToSeekHelp: 'Si vous toussez depuis plus de deux semaines sans amélioration.',
    update2026: 'Le traitement antituberculeux reste 100% gratuit dans tous les centres CDT du Bénin.',
    myths: [
      { myth: 'La tuberculose est causée par un sort jeté.', fact: 'C\'est une bactérie (Bacille de Koch) identifiable au microscope et curable.' }
    ],
    tags: ['Poumons', 'Bactérie', 'Gratuit']
  },
  {
    id: '6',
    name: 'Hépatite B',
    slug: 'hepatite-b',
    category: Category.INFECTIOUS,
    overview: 'Infection virale grave du foie pouvant mener à la cirrhose ou au cancer.',
    symptoms: ['Fatigue extrême', 'Urines foncées', 'Peau et yeux jaunes (ictère)', 'Douleurs abdominales'],
    transmission: 'Sang, rapports sexuels non protégés, de la mère à l\'enfant à l\'accouchement.',
    prevention: [
      'Vaccination (3 doses)',
      'Dépistage volontaire',
      'Utilisation de préservatifs',
      'Ne pas partager les objets tranchants (rasoirs, aiguilles)'
    ],
    whenToSeekHelp: 'Faites un test de dépistage au moins une fois dans votre vie d\'adulte.',
    update2026: 'Intensification de la vaccination des nouveau-nés dès la naissance au Bénin.',
    myths: [
      { myth: 'On peut attraper l\'hépatite B en se serrant la main.', fact: 'Non, le virus ne se transmet pas par les contacts occasionnels, la salive ou le partage de repas.' }
    ],
    tags: ['Foie', 'Virus', 'Dépistage']
  },
  {
    id: '7',
    name: 'Hypertension Artérielle',
    slug: 'hypertension',
    category: Category.CHRONIC,
    overview: 'Une "tueuse silencieuse" dont la prévalence augmente au Bénin en raison des changements de mode de vie.',
    symptoms: ['Maux de tête matinaux', 'Saignements de nez', 'Bourdonnements d\'oreille', 'Parfois aucun symptôme'],
    transmission: 'Non-transmissible. Facteurs : sel, sédentarité, stress, génétique.',
    prevention: [
      'Réduire la consommation de sel (bouillons cubes)',
      'Pratiquer une activité physique régulière',
      'Maintenir un poids de santé',
      'Limiter l\'alcool et le tabac'
    ],
    whenToSeekHelp: 'Faites contrôler votre tension au moins une fois par an dès 18 ans.',
    update2026: 'Campagne nationale "Zéro Sel Caché" lancée par le ministère de la Santé.',
    myths: [
      { myth: 'Si je n\'ai pas mal à la tête, ma tension est bonne.', fact: 'On peut avoir une tension très élevée sans aucun symptôme.' }
    ],
    tags: ['Cœur', 'Nutrition', 'Style de vie']
  },
  {
    id: '8',
    name: 'Diabète de Type 2',
    slug: 'diabete',
    category: Category.CHRONIC,
    overview: 'Maladie caractérisée par un taux de sucre trop élevé dans le sang.',
    symptoms: ['Soif excessive', 'Envie fréquente d\'uriner', 'Vision floue', 'Cicatrisation lente'],
    transmission: 'Non-transmissible. Lié à l\'alimentation, au surpoids et à l\'hérédité.',
    prevention: [
      'Éviter les boissons sucrées',
      'Consommer des fruits et légumes locaux',
      'Activité physique (marche rapide)',
      'Dépistage régulier'
    ],
    whenToSeekHelp: 'En cas de fatigue inexpliquée ou de plaies qui ne guérissent pas.',
    update2026: 'Déploiement de cliniques mobiles de dépistage dans les marchés du Bénin.',
    myths: [
      { myth: 'Le diabète est causé par la sorcellerie.', fact: 'C\'est une maladie biologique liée au fonctionnement du pancréas et à l\'alimentation.' }
    ],
    tags: ['Sucre', 'Nutrition', 'Dépistage']
  },
  {
    id: '9',
    name: 'Santé Maternelle (Pré-éclampsie)',
    slug: 'pre-eclampsie',
    category: Category.MATERNAL,
    overview: 'Complication grave de la grossesse liée à une tension artérielle élevée, mettant en danger la mère et l\'enfant.',
    symptoms: ['Forts maux de tête', 'Vision de "mouches" ou de points lumineux', 'Gonflement brutal des mains/visage', 'Douleur sous les côtes'],
    transmission: 'Spécifique à la grossesse. Ce n\'est pas contagieux.',
    prevention: [
      'Suivre strictement les Consultations Prénatales (CPN)',
      'Prendre sa tension à chaque visite médicale',
      'Réduire le stress et se reposer',
      'Signalement immédiat de tout signe inhabituel'
    ],
    whenToSeekHelp: 'Dès l\'apparition d\'un œdème brutal ou de troubles de la vue pendant la grossesse.',
    update2026: 'Nouveau programme de télésurveillance pour les femmes enceintes à risque au Bénin.',
    myths: [
      { myth: 'Le gonflement des pieds est toujours normal pendant la grossesse.', fact: 'Un gonflement léger est fréquent, mais un gonflement brutal et important est un signe d\'alerte majeur.' }
    ],
    tags: ['Grossesse', 'Femme', 'Urgence']
  },
  {
    id: '10',
    name: 'VIH / SIDA',
    slug: 'vih-sida',
    category: Category.INFECTIOUS,
    overview: 'Le virus de l\'immunodéficience humaine attaque le système immunitaire.',
    symptoms: ['Fièvre', 'Fatigue', 'Ganglions gonflés', 'Perte de poids'],
    transmission: 'Rapports sexuels non protégés, sang contaminé, transmission mère-enfant.',
    prevention: [
      'Utilisation systématique du préservatif',
      'Dépistage régulier et précoce',
      'PrEP (Traitement pré-exposition) disponible au Bénin',
      'Traitement ARV pour les personnes vivant avec le VIH'
    ],
    whenToSeekHelp: 'Après toute prise de risque ou pour planifier une grossesse.',
    update2026: 'Le Bénin se rapproche de l\'objectif 95-95-95 de l\'ONUSIDA.',
    myths: [
      { myth: 'On peut attraper le VIH en partageant un repas.', fact: 'Le VIH ne se transmet pas par la salive, la sueur ou le partage d\'ustensiles.' }
    ],
    tags: ['Protection', 'Dépistage', 'SanteSexuelle']
  },
  {
    id: '11',
    name: 'Fièvre Typhoïde',
    slug: 'typhoide',
    category: Category.WATERBORNE,
    overview: 'Infection bactérienne grave causée par Salmonella Typhi, souvent liée à une hygiène défaillante.',
    symptoms: ['Fièvre prolongée', 'Maux de tête', 'Douleurs abdominales', 'Constipation ou diarrhée'],
    transmission: 'Ingestion d\'eau ou d\'aliments contaminés par les selles d\'une personne infectée.',
    prevention: [
      'Se laver les mains après les toilettes',
      'Boire de l\'eau potable uniquement',
      'Vaccination préventive disponible',
      'Éviter les vendeurs de nourriture de rue non hygiéniques'
    ],
    whenToSeekHelp: 'Si une fièvre persiste plus de 3 jours malgré le repos.',
    update2026: 'Introduction du vaccin conjugué contre la typhoïde (TCV) dans les zones à risque.',
    myths: [
      { myth: 'La typhoïde est une forme de paludisme.', fact: 'C\'est faux. L\'un est bactérien (typhoïde), l\'autre est parasitaire (paludisme).' }
    ],
    tags: ['Eau', 'Bactérie', 'Hygiène']
  },
  {
    id: '12',
    name: 'Infections Respiratoires (Grippe/Pneumonie)',
    slug: 'respiratoires',
    category: Category.RESPIRATORY,
    overview: 'Infections touchant les poumons et les voies aériennes, aggravées par la pollution urbaine.',
    symptoms: ['Toux persistante', 'Difficulté à respirer', 'Douleur thoracique', 'Fièvre'],
    transmission: 'Gouttelettes respiratoires (toux, éternuements).',
    prevention: [
      'Se couvrir la bouche en toussant',
      'Lavage des mains',
      'Vaccination contre la grippe et le pneumocoque',
      'Éviter l\'exposition aux fumées de bois en cuisine'
    ],
    whenToSeekHelp: 'En cas de difficulté respiratoire ou de coloration bleue des lèvres.',
    update2026: 'Surveillance renforcée des virus respiratoires dans le cadre du réseau de santé national.',
    myths: [
      { myth: 'Boire du soda chaud guérit la pneumonie.', fact: 'La pneumonie nécessite un traitement médical spécifique, souvent des antibiotiques.' }
    ],
    tags: ['Air', 'Poumons', 'Hygiène']
  }
];

export const VACCINATION_SCHEDULE = [
  { age: 'Naissance', vaccines: 'BCG (Tuberculose), VPO-0 (Polio)' },
  { age: '6 Semaines', vaccines: 'PENTA-1, VPO-1, PCV-13-1, ROTASIIL-1' },
  { age: '10 Semaines', vaccines: 'PENTA-2, VPO-2, PCV-13-2, ROTASIIL-2' },
  { age: '14 Semaines', vaccines: 'PENTA-3, VPO-3, VPI, PCV-13-3, ROTASIIL-3' },
  { age: '6 Mois', vaccines: 'Vitamine A, Vaccin Antipaludique (R21) - Dose 1' },
  { age: '9 Mois', vaccines: 'RR-1 (Rougeole-Rubéole), VAA (Fièvre Jaune), Antipaludique Dose 2' },
  { age: '15 Mois', vaccines: 'RR-2 (Rougeole-Rubéole), Antipaludique Dose 3' },
  { age: '9-14 Ans', vaccines: 'VPH (Virus du Papillome Humain) - Pour les filles' }
];

export const ALERTS: Alert[] = [
  {
    id: 'a1',
    type: 'warning',
    title: 'Vigilance Dengue - Cotonou',
    content: 'Augmentation des cas signalés dans le district sanitaire Cotonou 2. Éliminez vos gîtes larvaires.',
    date: '20 Mai 2026'
  },
  {
    id: 'a2',
    type: 'info',
    title: 'Campagne de Vaccination',
    content: 'La campagne nationale de vaccination contre la Polio débute lundi prochain pour les enfants de 0 à 5 ans.',
    date: '18 Mai 2026'
  }
];

export const EMERGENCY_NUMBERS = [
  { label: 'SAMU (Urgences Médicales)', number: '187' },
  { label: 'Sapeurs-Pompiers', number: '118' },
  { label: 'Police Secours', number: '117' },
  { label: 'Ligne Verte Santé', number: '136' }
];
