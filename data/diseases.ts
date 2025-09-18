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
  },
  {
    id: 3,
    name: {
      fr: "VIH/SIDA",
      fon: "VIH/SIDA",
      yoruba: "VIH/SIDA"
    },
    nameLocal: "VIH/SIDA",
    priority: "Haute",
    prevalence: "Inclus dans le plan stratégique 2020-2024",
    category: "Viral",
    color: "bg-purple-500",
    icon: "🎗️",
    prevention: {
      fr: [
        "Utiliser des préservatifs",
        "Dépistage régulier",
        "Éviter le partage d'objets tranchants",
        "Fidélité mutuelle"
      ],
      fon: [
        "Zàn preservatif",
        "Kpɔn dɔ ɣe sia ɣe",
        "Mɔ nuku ɖuɖu ɖeka zàn",
        "Nɔ ɖeka ko"
      ],
      yoruba: [
        "Lo condom",
        "Ṣe àyẹ̀wò déédéé",
        "Má pin ohun gígé",
        "Jẹ́ òtítọ́"
      ]
    },
    symptoms: {
      fr: ["Fatigue persistante", "Perte de poids", "Infections répétées", "Fièvre prolongée"],
      fon: ["Gbɛgbɛ ɖiɖi", "Kpekpeme ɖiɖi", "Azòn ɖuɖu hoho", "Dzoxoxo didodido"],
      yoruba: ["Àárẹ̀ títí", "Ìpadánù òsùwọ̀n", "Àrùn lọ́pọ̀lọ́pọ̀", "Ibà pípẹ́"]
    },
    treatment: {
      fr: "Dépistage gratuit - Traitement antirétroviral disponible",
      fon: "Dɔ kpɔkpɔ ko wɛ fɛ̀ɛ o - Amatɛn li",
      yoruba: "Àyẹ̀wò ọ̀fẹ́ - Ìtọ́jú wà"
    }
  },
  {
    id: 4,
    name: {
      fr: "Tuberculose",
      fon: "Fɛmɛ azòn kpikpa",
      yoruba: "Èémú ẹ̀dọ̀fóró"
    },
    nameLocal: "Fɛmɛ azòn kpikpa (Fon)",
    priority: "Haute",
    prevalence: "3ème maladie prioritaire de santé publique",
    category: "Bactérienne",
    color: "bg-green-500",
    icon: "🫁",
    prevention: {
      fr: [
        "Éviter les espaces confinés mal aérés",
        "Porter un masque en cas de toux",
        "Améliorer la ventilation des habitations",
        "Dépistage précoce"
      ],
      fon: [
        "Mɔ tekun kpevi siwo me yakatɔn ma ɖi o",
        "Ɖo mask ne su le ɖuɖum",
        "Na yakatɔn ɖi xwegbe me nyuie", 
        "Kpɔn dɔ kaba"
      ],
      yoruba: [
        "Má sí àyè tí kò ní afẹ́fẹ́",
        "Wọ ibòjú nígbà íkọ",
        "Jẹ́ kí afẹ́fẹ́ wọ ilé dáadáa",
        "Ṣe àyẹ̀wò ní kùtùkùtù"
      ]
    },
    symptoms: {
      fr: ["Toux persistante avec crachats", "Fièvre nocturne", "Perte de poids", "Sueurs nocturnes"],
      fon: ["Su ɖiɖi kple tukpa", "Dzoxoxo le zã me", "Kpekpeme ɖiɖi", "Fi le zã me"],
      yoruba: ["Íkọ títí pẹ̀lú itọ́", "Ibà alẹ́", "Ìpadánù òsùwọ̀n", "Òórùn alẹ́"]
    },
    treatment: {
      fr: "Traitement antibiotique gratuit - 6 mois minimum",
      fon: "Amatɛn antibiotic ko wɛ fɛ̀ɛ o - Ɔsun ade gbeɖe",
      yoruba: "Ìtọ́jú àbájáde ọ̀fẹ́ - Oṣù mẹ́fà ó kéré"
    }
  },
  {
    id: 5,
    name: {
      fr: "Choléra",
      fon: "Kolera",
      yoruba: "Kólérà"
    },
    nameLocal: "Kolera (Fon/Yoruba)",
    priority: "Haute",
    prevalence: "Épidémies presque chaque année (2013-2022)",
    category: "Bactérienne",
    color: "bg-cyan-500",
    icon: "💧",
    prevention: {
      fr: [
        "Boire uniquement de l'eau potable ou bouillie",
        "Se laver les mains fréquemment",
        "Éviter les aliments crus ou mal cuits",
        "Utiliser des latrines propres"
      ],
      fon: [
        "No tsi nyuie alo tsi siwo ɖa ɖeko",
        "Klɔ asi hoho",
        "Mɔ nu yovo alo nu siwo me ɖa nyuie o",
        "Zàn ahɔ̀ɖefi nyuie lɛ"
      ],
      yoruba: [
        "Mu omi mímọ́ tàbí omi sísè nìkan",
        "Wẹ ọwọ́ lọ́pọ̀lọ́pọ̀",
        "Má jẹ oúnje tútù tàbí àìdára",
        "Lo ilé ìgbòkègbodò mímọ́"
      ]
    },
    symptoms: {
      fr: ["Diarrhée aqueuse abondante", "Vomissements", "Déshydratation rapide", "Crampes musculaires"],
      fon: ["Bɔtó tsi gbɛtɔ", "Ludu ɖuɖu", "Tsi ɖi le ɖokuime kaba", "Ɖa lɛkplɔn veve"],
      yoruba: ["Ìgbàgbé omi púpọ̀", "Èpò pípe", "Omi ara pípẹ́ kíákíá", "Iṣan fífọ́"]
    },
    treatment: {
      fr: "Réhydratation orale urgente - Hospitalisation si sévère",
      fon: "Na tsi ɖokuime kaba - Yi alɔ̀kpɔgbe ne egbɔna ɖe edzi",
      yoruba: "Àtúnmu omi ara kíákíá - Sí ilé ìwòsàn bí ó bá burú"
    }
  },
  {
    id: 6,
    name: {
      fr: "Rougeole",
      fon: "Gbɔ̀dó",
      yoruba: "Ẹlẹgbẹ"
    },
    nameLocal: "Gbɔ̀dó (Fon) / Ẹlẹgbẹ (Yoruba)",
    priority: "Moyenne",
    prevalence: "Campagne de vaccination 2024",
    category: "Viral",
    color: "bg-pink-500",
    icon: "🤒",
    prevention: {
      fr: [
        "Vaccination obligatoire des enfants",
        "Éviter le contact avec les malades",
        "Renforcer l'immunité générale",
        "Respecter le calendrier vaccinal"
      ],
      fon: [
        "Ɖa atike na vi lɛ", 
        "Mɔ azɔnto lɛ",
        "Na ɖokuikpɔ lɛ sɔ gbɔ",
        "Wɔ atike ɖuɖu ɣe nyuie"
      ],
      yoruba: [
        "Gba àbẹ̀rẹ́ fún àwọn ọmọdé",
        "Má bá aláìsàn dé",
        "Mú ara le lápapọ̀",
        "Tẹ̀lé àkókò àbẹ̀rẹ́"
      ]
    },
    symptoms: {
      fr: ["Éruption cutanée rouge", "Fièvre élevée", "Toux sèche", "Conjonctivite"],
      fon: ["Awuawu bibi ɖo ɖumedeme", "Dzoxoxo gã", "Su ɖuɖu", "Nku bibi"],
      yoruba: ["Ẹ̀gbà pupa lára", "Ibà gíga", "Íkọ gbígbẹ́", "Ojú dídùn"]
    },
    treatment: {
      fr: "Vaccination préventive gratuite - Soins symptomatiques",
      fon: "Atike na gbã ko wɛ fɛ̀ɛ o - Amatɛn na",
      yoruba: "Àbẹ̀rẹ́ àkọ́kọ́ ọ̀fẹ́ - Ìtọ́jú àwọn àmì"
    }
  },

  // Ajoutez ces maladies après les 6 existantes dans diseases.ts
   {
    id: 7,
    name: {
      fr: "Méningite",
      fon: "Ta me azòn",
      yoruba: "Àrùn orí inú"
    },
    nameLocal: "Ta me azòn (Fon) / Àrùn orí inú (Yoruba)",
    priority: "Haute",
    prevalence: "Épidémies saisonnières (saison sèche)",
    category: "Bactérienne",
    color: "bg-indigo-500",
    icon: "🧠",
    prevention: {
      fr: [
        "Vaccination préventive (méningite A, C, Y, W)",
        "Éviter les espaces bondés mal aérés",
        "Renforcer l'immunité générale",
        "Signaler rapidement les cas suspects"
      ],
      fon: [
        "Ɖa atike na gbã",
        "Mɔ tekun siwo me amɛ sɔ gbɔ",
        "Na ɖokuikpɔ sɔ gbɔ",
        "Ɖo azɔnto lɛ nya kaba"
      ],
      yoruba: [
        "Gba àbẹ̀rẹ́ àkọ́kọ́",
        "Má sí àyè tí ènìyàn pọ̀ sí",
        "Mú ara le",
        "Sọ àwọn aláìsàn fún àwọn dókítà kíákíá"
      ]
    },
    symptoms: {
      fr: ["Fièvre élevée soudaine", "Maux de tête intenses", "Raideur de la nuque", "Vomissements", "Photophobie"],
      fon: ["Dzoxoxo gã enumɔ", "Ta veve gbɛtɔ", "Kɔ sesẽ", "Ludu ɖuɖu", "Nukun ma nyɔn keklẽ o"],
      yoruba: ["Ibà gíga lójijì", "Orí fífọ́ púpọ̀", "Ọrùn líle", "Èpò pípe", "Ojú kò fẹ́ ìmọ́lẹ̀"]
    },
    treatment: {
      fr: "URGENCE MÉDICALE - Hospitalisation immédiate - Antibiotiques IV",
      fon: "YI DOKITA GBƆ ENUMƆ - Yi alɔ̀kpɔgbe ɖo kaba",
      yoruba: "ÀJÀLÙ ILERA - Lọ sí ilé ìwòsàn lẹ́sẹ̀kan"
    },
    statistics: {
      affected: "2000+ cas par an en Afrique de l'Ouest",
      mortality: "Létalité 10-15% si traitement rapide"
    }
  },
  {
    id: 8,
    name: {
      fr: "Fièvre Jaune",
      fon: "Dzoxoxo yɔyɔ",
      yoruba: "Ibà pupa"
    },
    nameLocal: "Dzoxoxo yɔyɔ (Fon) / Ibà pupa (Yoruba)",
    priority: "Haute",
    prevalence: "Endémique - vaccination obligatoire",
    category: "Viral",
    color: "bg-yellow-600",
    icon: "🟡",
    prevention: {
      fr: [
        "Vaccination obligatoire (certificat international)",
        "Lutte contre les moustiques Aedes",
        "Éliminer les gîtes larvaires",
        "Porter des vêtements couvrants"
      ],
      fon: [
        "Ɖa atike na (ehiã na mɔ duta)",
        "Wu lãgbɛ Aedes lɛ",
        "Ɖa tsi siwo me lãgbɛ vi lɛ dona ɖo",
        "Ɖo avɔ siwo tsyɔ ɖokuime blibo la"
      ],
      yoruba: [
        "Gba àbẹ̀rẹ́ tí ó yẹ (pàtàkì fún ìrìnàjò)",
        "Pa àwọn efọn Aedes",
        "Pa àwọn ibùgbé efọn run",
        "Wọ aṣọ tí yóó bo gbogbo ara"
      ]
    },
    symptoms: {
      fr: ["Fièvre brutale", "Jaunisse (peau et yeux jaunes)", "Vomissements noirs", "Saignements", "Douleurs abdominales"],
      fon: ["Dzoxoxo sesẽ", "Ɖumedeme kple nku zu yɔyɔ", "Ludu yibo ɖuɖu", "Ʋu dona", "Dɔ me veve"],
      yoruba: ["Ibà líle", "Pupa (àwọ ara àti ojú)", "Èpò dúdú pípe", "Ẹ̀jẹ̀ jáde", "Inú fífọ́"]
    },
    treatment: {
      fr: "Pas de traitement spécifique - Soins de support - PRÉVENTION PAR VACCINATION",
      fon: "Amatɛn tɔxɛ aɖeke mɛ - Kpɔ dɔ ɖe edzi ko - ɖA ATIKE NA GBÃ",
      yoruba: "Kò sí ìtọ́jú pàtó - Àbójútó nìkan - ÀBẸ̀RẸ́ NI KỌKỌ"
    }
  },
  {
    id: 9,
    name: {
      fr: "Dengue",
      fon: "Dengue",
      yoruba: "Àrùn Dengue"
    },
    nameLocal: "Dengue",
    priority: "Moyenne",
    prevalence: "Émergente - cas sporadiques",
    category: "Viral",
    color: "bg-red-600",
    icon: "🌡️",
    prevention: {
      fr: [
        "Éliminer l'eau stagnante (pneus, pots)",
        "Utiliser des moustiquaires",
        "Appliquer des répulsifs",
        "Couvrir les réservoirs d'eau"
      ],
      fon: [
        "Ɖa tsi siwo tɔ ɖi (pneumatic, zekpɔ) ɖa",
        "Zàn vɔvɔ",
        "Si amatɛn lãgbɛ ɖo nɔ dzi",
        "Tsyɔ tsi dzrɛ lɛ nu"
      ],
      yoruba: [
        "Yọ omi dídúró (tires, àwọn ìkòkò)",
        "Lo àwọ̀n àbòjú efọn",
        "Fi ohun ìdáàbòbò sára",
        "Bo àwọn ìkòkò omi"
      ]
    },
    symptoms: {
      fr: ["Fièvre élevée soudaine", "Douleurs musculaires intenses", "Maux de tête sévères", "Éruptions cutanées", "Saignements"],
      fon: ["Dzoxoxo gã enumɔ", "Ɖa lɛkplɔn veve gbɛtɔ", "Ta veve sesẽ", "Kpɔn ɖo ɖumedeme", "Ʋu dona"],
      yoruba: ["Ibà gíga lójijì", "Iṣan fífọ́ púpọ̀", "Orí fífọ́ púpọ̀", "Ẹ̀gbà lára", "Ẹ̀jẹ̀ jáde"]
    },
    treatment: {
      fr: "Pas d'antiviral spécifique - Paracétamol - ÉVITER L'ASPIRINE - Surveillance médicale",
      fon: "Amatɛn tɔxɛ mɛ - Paracétamol - MƆ ASPIRINE - Dokita nakpɔ ɖe edzi",
      yoruba: "Kò sí oògùn pàtó - Paracétamol - MÁ LO ASPIRIN - Àbójútó dókítà"
    }
  },
  {
    id: 10,
    name: {
      fr: "Typhoïde",
      fon: "Typhoid azòn",
      yoruba: "Àrùn Typhoid"
    },
    nameLocal: "Typhoid azòn (Fon)",
    priority: "Haute",
    prevalence: "Liée à l'assainissement défaillant",
    category: "Bactérienne",
    color: "bg-teal-500",
    icon: "🦠",
    prevention: {
      fr: [
        "Boire de l'eau bouillie ou en bouteille",
        "Bien laver et cuire les aliments",
        "Se laver les mains fréquemment",
        "Vaccination pour les voyageurs"
      ],
      fon: [
        "No tsi siwo ɖa alo tsi siwo de kpo me",
        "Klɔ nu ɖuɖu nyuie eye naɖa wo",
        "Klɔ asi ɣe sia ɣe",
        "Ɖa atike na mɔzɔla lɛ"
      ],
      yoruba: [
        "Mu omi sísè tàbí omi ìdí",
        "Fọ oúnje dáadáa kí o sì sè é",
        "Wẹ ọwọ́ lọ́pọ̀lọ́pọ̀",
        "Gba àbẹ̀rẹ́ fún àwọn arìnrìn-àjò"
      ]
    },
    symptoms: {
      fr: ["Fièvre prolongée", "Maux de tête", "Douleurs abdominales", "Diarrhée ou constipation", "Taches rosées sur le tronc"],
      fon: ["Dzoxoxo didodido", "Ta veve", "Dɔ me veve", "Bɔtó alo kuxi sesẽ", "Kpɔn yɔyɔ le ɖokuime"],
      yoruba: ["Ibà pípẹ́", "Orí fífọ́", "Inú fífọ́", "Ìgbàgbé tàbí àkọ́", "Àmì pupa lára"]
    },
    treatment: {
      fr: "Antibiotiques spécifiques - Réhydratation - Hospitalisation si complications",
      fon: "Amatɛn antibiotic tɔxɛ - Na tsi ɖokuime - Yi alɔ̀kpɔgbe ne ku ɖo edzi",
      yoruba: "Oògùn apakòkòrò pàtó - Àtúnmu omi - Sí ilé ìwòsàn bí ó bá burú"
    }
  },
  {
    id: 11,
    name: {
      fr: "Hépatite B",
      fon: "Hepatit B",
      yoruba: "Àrùn Hepatitis B"
    },
    nameLocal: "Hepatit B",
    priority: "Haute",
    prevalence: "8% de la population porteuse chronique",
    category: "Viral",
    color: "bg-amber-600",
    icon: "🟨",
    prevention: {
      fr: [
        "Vaccination (3 doses) - incluse dans PEV",
        "Éviter le partage d'objets tranchants",
        "Relations sexuelles protégées",
        "Stérilisation du matériel médical"
      ],
      fon: [
        "Ɖa atike na (zi etɔ̃) - le PEV me",
        "Mɔ nuku ɖuɖu ɖeka zàn",
        "Zàn preservatif",
        "Na ɖokpo siwo zàna le amatɛn me la nyɔ"
      ],
      yoruba: [
        "Gba àbẹ̀rẹ́ (ìgbà mẹ́ta) - wà nínú PEV",
        "Má pin ohun gígé",
        "Lo condom",
        "Jẹ́ kí ohun èlò dókítà mọ́"
      ]
    },
    symptoms: {
      fr: ["Fatigue chronique", "Jaunisse", "Douleurs abdominales", "Urine foncée", "Selles décolorées"],
      fon: ["Gbɛgbɛ ɖiɖi", "Yɔyɔ ɖo ame ŋu", "Dɔ me veve", "Tsi yibo", "Afɔku blibo"],
      yoruba: ["Àárẹ̀ títí", "Pupa", "Inú fífọ́", "Ìtọ́ dúdú", "Ìgbé funfun"]
    },
    treatment: {
      fr: "Forme chronique: antiviraux - Suivi médical régulier - VACCINATION PRÉVENTIVE",
      fon: "Ne edidi: amatɛn virus tɔxɛ - Dokita nakpɔ ɣe sia ɣe - ɖA ATIKE NA GBÃ",
      yoruba: "Tí ó bá dì pẹ́: oògùn virus - Àbójútó dókítà - ÀBẸ̀RẸ́ NI KỌKỌ"
    }
  },
  {
    id: 12,
    name: {
      fr: "Tétanos",
      fon: "Tetanus",
      yoruba: "Àrùn Tetanus"
    },
    nameLocal: "Tetanus",
    priority: "Haute",
    prevalence: "Prévention par vaccination DTC",
    category: "Bactérienne",
    color: "bg-gray-600",
    icon: "💀",
    prevention: {
      fr: [
        "Vaccination DTC (enfants) et rappels adultes",
        "Désinfecter les plaies immédiatement",
        "Éviter les blessures avec objets rouillés",
        "Sérum antitétanique si blessure"
      ],
      fon: [
        "Ɖa atike DTC (vi lɛ) kple ametɔ lɛ hã",
        "Klɔ abi lɛ kple amatɛn enumɔ",
        "Mɔ nuku siwo ku la gome",
        "No serum antitetanique ne abi le ameme"
      ],
      yoruba: [
        "Gba àbẹ̀rẹ́ DTC (ọmọdé) àti àgbà",
        "Wẹ ọgbẹ́ pẹ̀lú oògùn",
        "Má fi ohun àbàwọ́n pa ara lára",
        "Lo serum antitetanus bí ara bá ṣá"
      ]
    },
    symptoms: {
      fr: ["Raideur musculaire progressive", "Spasmes douloureux", "Trismus (mâchoire bloquée)", "Difficultés à avaler", "Spasmes respiratoires"],
      fon: ["Ɖa lɛkplɔn sesẽ ɖe ɖe", "Ɖa lɛkplɔn ƒo vevee", "Nuɖuɖu ma ŋu o", "Mimi sesẽ", "Gbɛmɛ sesẽ"],
      yoruba: ["Iṣan líle síwájú sí i", "Iṣan rírú", "Àtẹ̀tè líle", "Ìgbé kòrò", "Ẹ̀mí mímu kòrò"]
    },
    treatment: {
      fr: "URGENCE MÉDICALE - Sérum antitétanique - Soins intensifs - PRÉVENTION PAR VACCINATION",
      fon: "YI DOKITA GBƆ KABA - Serum antitetanique - Kpɔ dɔ sesẽ - ɖA ATIKE NA GBÃ",
      yoruba: "ÀJÀLÙ DÓKÍTÀ - Serum antitetanus - Àbójútó gidi - ÀBẸ̀RẸ́ AKỌKỌ"
    },
    statistics: {
      affected: "100% mortalité sans traitement",
      mortality: "Prévention totale par vaccination"
    }
  }
];








