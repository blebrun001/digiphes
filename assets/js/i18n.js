(() => {
  const SUPPORTED_LANGS = ["fr", "ca", "en"];
  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "iphes-hub-lang";

  const translations = {
    fr: {
      "a11y.skip": "Aller au contenu",
      "header.kicker": "Hub institutionnel",
      "header.title": "Digitalisation des collections IPHES-CERCA",
      "header.baseline": "Un point d'accès minimaliste pour structurer, suivre et diffuser l'avancement du projet.",
      "nav.presentation": "Présentation",
      "nav.axes": "Axes",
      "nav.access": "Accès",
      "nav.roadmap": "Roadmap",
      "nav.news": "Actualités",
      "presentation.title": "Présentation",
      "presentation.body": "Ce hub centralise les briques essentielles du projet: objectifs, axes de travail, état d'avancement et informations institutionnelles pour les équipes impliquées.",
      "axes.title": "Axes de travail",
      "axes.card1.title": "Inventaire et priorisation",
      "axes.card1.body": "Identifier les ensembles prioritaires, harmoniser les métadonnées et définir les lots de traitement.",
      "axes.card2.title": "Numérisation et qualité",
      "axes.card2.body": "Formaliser les protocoles de capture, de contrôle qualité et de normalisation des formats.",
      "axes.card3.title": "Structuration sémantique",
      "axes.card3.body": "Aligner les données sur des modèles communs pour faciliter l'interopérabilité scientifique.",
      "axes.card4.title": "Diffusion et réutilisation",
      "axes.card4.body": "Préparer les canaux de consultation, de documentation et de valorisation des collections numérisées.",
      "access.title": "Accès",
      "access.body": "Cette version V1 propose uniquement des points d'entrée internes pour naviguer dans le hub.",
      "access.linkRoadmap": "Consulter la roadmap",
      "access.linkNews": "Lire les actualités",
      "access.linkContext": "Revenir au contexte du projet",
      "roadmap.title": "Roadmap",
      "news.title": "Actualités",
      "footer.note": "IPHES-CERCA · Hub de projet · Version initiale V1",
      "content.loading": "Chargement en cours...",
      "content.comingSoon": "Contenu à venir"
    },
    ca: {
      "a11y.skip": "Anar al contingut",
      "header.kicker": "Hub institucional",
      "header.title": "Digitalització de les col·leccions IPHES-CERCA",
      "header.baseline": "Un punt d'accés minimalista per estructurar, seguir i difondre l'avanç del projecte.",
      "nav.presentation": "Presentació",
      "nav.axes": "Eixos",
      "nav.access": "Accés",
      "nav.roadmap": "Full de ruta",
      "nav.news": "Actualitat",
      "presentation.title": "Presentació",
      "presentation.body": "Aquest hub centralitza els blocs essencials del projecte: objectius, eixos de treball, estat d'avanç i informació institucional per als equips implicats.",
      "axes.title": "Eixos de treball",
      "axes.card1.title": "Inventari i priorització",
      "axes.card1.body": "Identificar els conjunts prioritaris, harmonitzar metadades i definir lots de tractament.",
      "axes.card2.title": "Digitalització i qualitat",
      "axes.card2.body": "Formalitzar protocols de captura, control de qualitat i normalització de formats.",
      "axes.card3.title": "Estructuració semàntica",
      "axes.card3.body": "Alinear les dades amb models comuns per facilitar la interoperabilitat científica.",
      "axes.card4.title": "Difusió i reutilització",
      "axes.card4.body": "Preparar canals de consulta, documentació i valorització de les col·leccions digitalitzades.",
      "access.title": "Accés",
      "access.body": "Aquesta versió V1 proposa només punts d'entrada interns per navegar dins del hub.",
      "access.linkRoadmap": "Consultar el full de ruta",
      "access.linkNews": "Llegir l'actualitat",
      "access.linkContext": "Tornar al context del projecte",
      "roadmap.title": "Full de ruta",
      "news.title": "Actualitat",
      "footer.note": "IPHES-CERCA · Hub de projecte · Versió inicial V1",
      "content.loading": "S'està carregant...",
      "content.comingSoon": "Contingut properament"
    },
    en: {
      "a11y.skip": "Skip to content",
      "header.kicker": "Institutional hub",
      "header.title": "IPHES-CERCA Collections Digitization",
      "header.baseline": "A minimalist access point to structure, track, and share project progress.",
      "nav.presentation": "Overview",
      "nav.axes": "Workstreams",
      "nav.access": "Access",
      "nav.roadmap": "Roadmap",
      "nav.news": "News",
      "presentation.title": "Overview",
      "presentation.body": "This hub centralizes core project blocks: objectives, workstreams, current progress, and institutional information for involved teams.",
      "axes.title": "Workstreams",
      "axes.card1.title": "Inventory and prioritization",
      "axes.card1.body": "Identify priority sets, harmonize metadata, and define processing batches.",
      "axes.card2.title": "Digitization and quality",
      "axes.card2.body": "Formalize capture protocols, quality checks, and format normalization.",
      "axes.card3.title": "Semantic structuring",
      "axes.card3.body": "Align data with shared models to support scientific interoperability.",
      "axes.card4.title": "Dissemination and reuse",
      "axes.card4.body": "Prepare consultation, documentation, and valorization channels for digitized collections.",
      "access.title": "Access",
      "access.body": "This V1 release includes only internal navigation entry points within the hub.",
      "access.linkRoadmap": "Open the roadmap",
      "access.linkNews": "Read the news",
      "access.linkContext": "Back to project context",
      "roadmap.title": "Roadmap",
      "news.title": "News",
      "footer.note": "IPHES-CERCA · Project hub · Initial V1 release",
      "content.loading": "Loading...",
      "content.comingSoon": "Content coming soon"
    }
  };

  function resolveLanguage(input) {
    return SUPPORTED_LANGS.includes(input) ? input : DEFAULT_LANG;
  }

  function getStoredLanguage() {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return resolveLanguage(saved);
  }

  function t(key, lang = getStoredLanguage()) {
    const safeLang = resolveLanguage(lang);
    return translations[safeLang][key] || translations[DEFAULT_LANG][key] || key;
  }

  function applyTranslations(lang) {
    const safeLang = resolveLanguage(lang);

    document.documentElement.lang = safeLang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      node.textContent = t(key, safeLang);
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === safeLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    window.localStorage.setItem(STORAGE_KEY, safeLang);
    document.dispatchEvent(new CustomEvent("language:changed", { detail: { lang: safeLang } }));
  }

  function registerLanguageButtons() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextLang = btn.getAttribute("data-lang");
        applyTranslations(nextLang);
      });
    });
  }

  function init() {
    registerLanguageButtons();
    applyTranslations(getStoredLanguage());
  }

  window.I18n = {
    DEFAULT_LANG,
    SUPPORTED_LANGS,
    getStoredLanguage,
    resolveLanguage,
    applyTranslations,
    t
  };

  document.addEventListener("DOMContentLoaded", init);
})();
