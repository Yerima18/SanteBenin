import { Disease } from '@/types';

export const diseases: Disease[] = [
  {
    id: 1,
    name: {
      fr: "Paludisme",
      fon: "Azòn", 
      yoruba: "Iba"
    },
    nameLocal: "Azòn (Fon) / Iba (Yoruba)",
    priority: "Très Haute",
    prevalence: "1ère cause de mortalité infantile",
    category: "Parasitaire",
    color: "bg-red-500",
    icon: "🦟",
    prevention: {
      fr: [
        "Utiliser des moustiquaires imprégnées",
        "Éliminer les eaux stagnantes", 
        "Porter des vêtements longs le soir",
        "Utiliser des répulsifs"
      ],
      fon: [
        "Zàn vɔvɔ siwo ɖa amatɛn ɖo gò",
        "Ɖa tsi siwo ma ɖi ma yì o ɖa",
        "Ɖo avɔ dididi le zã mɛ", 
        "Zàn nuku siwo nɔa lãgbɛ ɖo nɔ"
      ],
      yoruba: [
        "Lo àwọ̀n tí a fi egbòogi sí",
        "Pa àwọn omi tí kò ń sàn run",
        "Wọ àwọn aṣọ gígùn ní àṣálẹ́",
        "Lo àwọn ohun àkọlù efọn"
      ]
    },
    symptoms: {
      fr: ["Fièvre", "Maux de tête", "Frissons", "Vomissements"],
      fon: ["Dzoxoxo", "Ta vevee", "Ɖiɖi bɔbɔ", "Ludu ɖuɖu"],
      yoruba: ["Ibà", "Orí fífọ́", "Ìgbọ̀nwọ́", "Èpò pípe"]
    },
    treatment: {
      fr: "Consultation médicale urgente - Tests gratuits disponibles",
      fon: "Yi dokita gbɔ kaba - Dɔ wɔwɔ ko wɛ fɛ̀ɛ o",
      yoruba: "Lọ sí ilé ìwòsàn kíákíá - Àyẹ̀wò ọ̀fẹ́ wà"
    },
    statistics: {
      affected: "2.1M personnes à risque",
      mortality: "Première cause de décès infantile"
    }
  },
  {
    id: 2,
    name: {
      fr: "Maladies Tropicales Négligées",
      fon: "Azòn gbèdoto lɛ",
      yoruba: "Àwọn àrùn agbègbè gbígbóná tí wọ́n kọ̀ sílẹ̀"
    },
    nameLocal: "Azòn gbèdoto (Fon)",
    priority: "Haute",
    prevalence: "1.6M personnes nécessitent un traitement",
    category: "Multiple",
    color: "bg-orange-500",
    icon: "🪱",
    prevention: {
      fr: [
        "Améliorer l'hygiène personnelle",
        "Accès à l'eau potable",
        "Éviter la baignade en eaux contaminées",
        "Porter des chaussures"
      ],
      fon: [
        "Na wò ɖokuikpɔ lɛ nɔ nyuie",
        "No tsi nyuie nu",
        "Mɔ sisi le tsi gbegblɛ lɛ mɛ o",
        "Ɖo afɔkpa"
      ],
      yoruba: [
        "Ṣe ìmọ́tótó ara",
        "Lo omi mímọ́", 
        "Má wẹ̀ sí omi àìmọ́",
        "Wọ bàtà"
      ]
    },
    symptoms: {
      fr: ["Fatigue chronique", "Troubles visuels", "Démangeaisons", "Gonflements"],
      fon: ["Gbɛgbɛ ɖiɖi", "Nukun kpɔkpɔ ma nyɔn", "Ɖuɖu ɖiɖi", "Vu fuflu"],
      yoruba: ["Àárẹ̀ títí", "Àìríran dáadáa", "Inú yíyan", "Wíwú"]
    },
    treatment: {
      fr: "Campagnes de traitement de masse - Médicaments gratuits",
      fon: "Amatɛn na mɛ gbɛtɔ lɛ - Amatɛn ko wɛ fɛ̀ɛ o",
      yoruba: "Ìtọ́jú fún gbogbo ènìyàn - Oògùn ọ̀fẹ́"
    },
    subDiseases: ["Filariose", "Onchocercose", "Schistosomiase", "Trachome"]
  }
  // ... On ajoutera les 4 autres maladies après
];