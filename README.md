# Hub IPHES-CERCA (Boilerplate minimaliste)

Site statique minimaliste (HTML/CSS/JS) pour servir de hub au projet de digitalisation des collections IPHES-CERCA.

## Stack
- HTML, CSS, JavaScript natif (sans dépendance runtime)
- Contenus Roadmap/Actualités en Markdown local
- Déploiement GitHub Pages via GitHub Actions

## Arborescence
- `index.html`
- `assets/css/styles.css`
- `assets/js/i18n.js`
- `assets/js/app.js`
- `content/fr/*.md`
- `content/ca/*.md`
- `content/en/*.md`
- `.github/workflows/deploy-pages.yml`

## Modifier les contenus éditoriaux
Éditer les fichiers Markdown par langue:
- `content/fr/roadmap.md` et `content/fr/news.md`
- `content/ca/roadmap.md` et `content/ca/news.md`
- `content/en/roadmap.md` et `content/en/news.md`

Le site charge dynamiquement:
- `content/<lang>/roadmap.md`
- `content/<lang>/news.md`

Si un fichier manque pour une langue donnée, fallback automatique vers `fr`. Si le fallback échoue, affichage de "Contenu à venir" (ou équivalent localisé).

## Internationalisation UI
Les textes statiques de l'interface utilisent `data-i18n` et sont définis dans `assets/js/i18n.js`.

- Langues supportées: `fr`, `ca`, `en`
- Langue par défaut: `fr`
- Persistance: `localStorage` (`iphes-hub-lang`)

## Exécution locale
Comme le site utilise `fetch` pour charger les Markdown, lancer un serveur HTTP local (au lieu d'ouvrir `index.html` directement):

```bash
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Déploiement GitHub Pages
Le workflow `.github/workflows/deploy-pages.yml` déploie automatiquement sur GitHub Pages à chaque push sur `main`.

Pré-requis GitHub:
1. Activer GitHub Pages pour le repository (Source: GitHub Actions).
2. Vérifier que la branche de déploiement est gérée par l'action `deploy-pages`.
