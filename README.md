# SanteBenin

Plateforme web d'information et de sensibilisation sur la santé publique au Bénin.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-blue?logo=tailwindcss)

## Apercu

SanteBenin est une plateforme educative qui fournit des informations fiables sur les maladies courantes au Benin, les methodes de prevention, le calendrier vaccinal et les contacts d'urgence. Elle integre un assistant IA pour orienter les citoyens.

### Fonctionnalites

- **Catalogue des maladies** — 12 maladies documentees avec symptomes, transmission, prevention et mythes/realites
- **Assistant IA** — Chatbot sante propulse par l'API Gemini avec garde-fous medicaux
- **Calendrier vaccinal** — Programme Elargi de Vaccination (PEV) 2026 complet
- **Guide d'urgence** — Numeros d'urgence et gestes de premier secours
- **Prevention** — Conseils hygiene, protection vectorielle, sante maternelle
- **Alertes sante** — Notifications en temps reel sur les epidemies actives
- **Animations** — Transitions de page, revelations au scroll, effets staggers

### Maladies couvertes

Paludisme, Dengue, Drepanocytose, Cholera, Tuberculose, Hepatite B, Hypertension, Diabete, Pre-eclampsie, VIH/SIDA, Fievre Typhoide, Infections Respiratoires

## Stack technique

| Technologie | Usage |
|---|---|
| React 19 | Framework UI |
| TypeScript | Typage statique |
| Vite 6 | Build tool & dev server |
| Tailwind CSS | Styles utilitaires |
| React Router 7 | Routing SPA |
| Google Gemini API | Assistant IA |

## Installation

```bash
# Cloner le repo
git clone https://github.com/Yerima18/SanteBenin.git
cd SanteBenin

# Installer les dependances
npm install

# Configurer la cle API Gemini
cp .env.local.example .env.local
# Editer .env.local et ajouter votre cle GEMINI_API_KEY

# Lancer le serveur de developpement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de developpement |
| `npm run build` | Build de production |
| `npm run preview` | Previsualiser le build |

## Structure du projet

```
.
├── components/
│   ├── DiseaseCard.tsx        # Carte maladie reutilisable
│   └── Layout.tsx             # Layout principal (nav, footer, menu mobile)
├── hooks/
│   └── useScrollReveal.ts     # Hook Intersection Observer pour animations scroll
├── pages/
│   ├── Home.tsx               # Page d'accueil avec hero, alertes, stats
│   ├── Diseases.tsx           # Catalogue avec recherche et filtres
│   ├── DiseaseDetail.tsx      # Detail d'une maladie
│   ├── SymptomChecker.tsx     # Assistant IA (Gemini)
│   ├── Prevention.tsx         # Conseils de prevention
│   ├── Vaccination.tsx        # Calendrier vaccinal PEV
│   ├── Emergency.tsx          # Numeros d'urgence et premiers secours
│   ├── About.tsx              # A propos
│   ├── Contact.tsx            # Formulaire de contact
│   └── NotFound.tsx           # Page 404
├── constants.ts               # Donnees maladies, vaccins, alertes, urgences
├── types.ts                   # Interfaces TypeScript
├── App.tsx                    # Routes
├── index.tsx                  # Point d'entree React
├── index.html                 # HTML principal
├── index.css                  # Animations et styles custom
└── vite.config.ts             # Configuration Vite
```

## Variables d'environnement

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | Cle API Google Gemini pour l'assistant IA |

## Licence

Ce projet est une initiative educative dediee a la sante publique au Benin.

---

**Avertissement medical** : Ce contenu est a but educatif uniquement. Il ne remplace pas l'avis d'un professionnel de sante qualifie.
