# SanteBenin 🇧🇯

Plateforme web éducative d'information et de sensibilisation sur la santé publique au Bénin.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

---

## Aperçu

SanteBenin est une plateforme éducative qui fournit des informations fiables sur les maladies courantes au Bénin, les méthodes de prévention, le calendrier vaccinal PEV 2026, les contacts d'urgence et un flux d'actualités santé en temps réel.

---

## Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| **Catalogue des maladies** | 12 maladies documentées avec symptômes, transmission, prévention, mythes/réalités et mises à jour 2026 |
| **Prévention** | 4 guides détaillés : hygiène, protection vectorielle, santé maternelle, nutrition |
| **Calendrier vaccinal** | Programme Élargi de Vaccination (PEV) 2026 complet avec le nouveau vaccin antipaludique R21 |
| **Urgences** | Numéros d'urgence, gestes de premiers secours et géolocalisation vers le centre de santé le plus proche |
| **Actualités Santé** | Flux d'articles de santé en temps réel via l'API GNews |
| **Alertes** | Notifications sur les épidémies et campagnes de vaccination actives |
| **À propos / Contact** | Présentation du projet et formulaire de contact |

---

## Maladies couvertes

Paludisme · Dengue · Drépanocytose · Choléra · Tuberculose · Hépatite B · Hypertension · Diabète · Pré-éclampsie · VIH/SIDA · Fièvre Typhoïde · Infections Respiratoires

---

## Stack technique

| Technologie | Version | Usage |
|---|---|---|
| React | 19 | Framework UI |
| TypeScript | 5.8 | Typage statique |
| Vite | 6 | Build tool & serveur de développement |
| React Router | 7 | Routing SPA (HashRouter) |
| Tailwind CSS | CDN | Styles utilitaires |
| GNews API | — | Flux d'actualités santé en temps réel |
| Vercel | — | Hébergement & déploiement |

---

## Installation

```bash
# Cloner le repo
git clone https://github.com/Yerima18/SanteBenin.git
cd SanteBenin

# Installer les dépendances
npm install

# Configurer la clé API GNews
cp .env.local.example .env.local
# Éditer .env.local et ajouter votre clé :
# VITE_GNEWS_API_KEY=votre_cle_ici

# Lancer le serveur de développement (port 3000)
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

---

## Scripts

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build de production |

---

## Structure du projet

```
.
├── components/
│   ├── BeninFlag.tsx          # Composant SVG du drapeau du Bénin
│   ├── DiseaseCard.tsx        # Carte maladie réutilisable
│   ├── Layout.tsx             # Layout principal (nav sticky, footer, menu mobile)
│   └── ScrollToTop.tsx        # Remise à zéro du scroll à chaque changement de route
├── hooks/
│   ├── useNews.ts             # Hook fetch actualités via GNews API
│   └── useScrollReveal.ts     # Hook Intersection Observer pour animations au scroll
├── pages/
│   ├── Home.tsx               # Page d'accueil (hero, alertes, stats, actualités)
│   ├── Diseases.tsx           # Catalogue maladies avec recherche et filtres par catégorie
│   ├── DiseaseDetail.tsx      # Page détail d'une maladie
│   ├── Prevention.tsx         # Vue d'ensemble des 4 sections de prévention
│   ├── PreventionDetail.tsx   # Page détail d'une section de prévention
│   ├── Vaccination.tsx        # Calendrier vaccinal PEV 2026
│   ├── Emergency.tsx          # Numéros d'urgence et premiers secours
│   ├── Actualites.tsx         # Flux d'actualités santé en temps réel
│   ├── About.tsx              # À propos du projet
│   ├── Contact.tsx            # Formulaire de contact
│   └── NotFound.tsx           # Page 404
├── api/
│   └── news.ts                # Proxy Vercel serverless pour l'API GNews
├── constants.ts               # Données : maladies, vaccins, alertes, urgences, prévention
├── types.ts                   # Interfaces et enums TypeScript
├── App.tsx                    # Définition des routes
├── index.tsx                  # Point d'entrée React
├── index.html                 # HTML principal (Tailwind CDN)
├── index.css                  # Animations et variables CSS Bénin
├── vercel.json                # Configuration déploiement Vercel
└── vite.config.ts             # Configuration Vite
```

---

## Variables d'environnement

| Variable | Description |
|---|---|
| `VITE_GNEWS_API_KEY` | Clé API GNews pour le flux d'actualités santé |

---

## Palette de couleurs nationale

| Couleur | Hex | Usage |
|---|---|---|
| Vert Bénin | `#008751` | Couleur principale, nav, boutons |
| Jaune | `#FCD116` | Barre tricolore |
| Rouge | `#E8112D` | Urgences, alertes |

---

## Déploiement

Le projet est déployé sur **Vercel**. Chaque push sur la branche `main` déclenche un déploiement automatique.

---

## Équipe

Conçu par **Lafia Yerima · Mouhammad Amine · Adam Bagri**

GitHub : [github.com/Yerima18](https://github.com/Yerima18)

---

**Avertissement médical** : Ce contenu est à but éducatif uniquement. Il ne remplace pas l'avis d'un professionnel de santé qualifié. En cas d'urgence, appelez le **136** ou le **118**.
