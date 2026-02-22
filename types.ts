
export enum Category {
  INFECTIOUS = 'Infectieuses',
  CHRONIC = 'Chroniques',
  RESPIRATORY = 'Respiratoires',
  WATERBORNE = 'Hydriques',
  VACCINE_PREVENTABLE = 'Préventibles par vaccination',
  GENETIC = 'Génétiques',
  MATERNAL = 'Santé Maternelle'
}

export interface MythFact {
  myth: string;
  fact: string;
}

export interface Disease {
  id: string;
  name: string;
  slug: string;
  category: Category;
  overview: string;
  symptoms: string[];
  transmission: string;
  prevention: string[];
  whenToSeekHelp: string;
  update2026: string;
  myths: MythFact[];
  tags: string[];
}

export interface PreventionSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
  accentLight: string;
  tips: string[];
  didYouKnow: string;
}

export interface Alert {
  id: string;
  type: 'info' | 'warning' | 'error';
  title: string;
  content: string;
  date: string;
}
