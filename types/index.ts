export interface Disease {
  id: number;
  name: {
    fr: string;
    fon: string;
    yoruba: string;
  };
  nameLocal?: string;
  priority: 'Très Haute' | 'Haute' | 'Moyenne' | 'Faible';
  prevalence: string;
  category: string;
  color: string;
  icon: string;
  prevention: {
    fr: string[];
    fon: string[];
    yoruba: string[];
  };
  symptoms: {
    fr: string[];
    fon: string[];
    yoruba: string[];
  };
  treatment: {
    fr: string;
    fon: string;
    yoruba: string;
  };
  statistics?: {
    affected: string;
    mortality: string;
  };
  subDiseases?: string[];
}

export interface Hospital {
  id: number;
  name: string;
  location: string;
  type: string;
  phone: string;
  lat: number;
  lng: number;
  specialties: string[];
  distance?: number;
}

export type Language = 'fr' | 'fon' | 'yoruba';

export interface UserLocation {
  lat: number;
  lng: number;
}