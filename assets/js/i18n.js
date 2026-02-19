(() => {
  const SUPPORTED_LANGS = ["fr", "ca", "en"];
  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "iphes-hub-lang";

  const translations = {
    fr: {
      "a11y.skip": "Aller au contenu",
      "header.kicker": "Hub institutionnel",
      "header.title": "Digitalisation des collections IPHES-CERCA",
      "header.baseline": "Synthèse opérationnelle alignée sur le rapport WIP du 19 février 2026.",
      "nav.presentation": "Présentation",
      "nav.axes": "Objectifs",
      "nav.access": "Périmètre",
      "nav.roadmap": "Calendrier",
      "nav.news": "Livrables",
      "presentation.title": "Présentation",
      "presentation.body": "Ce hub reprend les éléments structurants du rapport: objectifs opérationnels, périmètre d'action, calendrier provisoire sur trois ans, livrables et questions de cadrage.",
      "axes.title": "Objectifs opérationnels",
      "axes.card1.title": "Coordination",
      "axes.card1.body": "Coordonner les activités de digitalisation au niveau du centre avec les équipes de recherche, techniques et support.",
      "axes.card2.title": "Conception des processus",
      "axes.card2.body": "Structurer les processus de digitalisation (WP2) selon science ouverte, principes FAIR et standards reconnus.",
      "axes.card3.title": "Déploiement et maintenance",
      "axes.card3.body": "Déployer et maintenir protocoles et équipements en cohérence avec les infrastructures du laboratoire (WP1).",
      "axes.card4.title": "Support et formation",
      "axes.card4.body": "Accompagner les équipes sur la digitalisation (WP3) pour renforcer l'autonomie et l'adoption des protocoles.",
      "axes.card5.title": "Reporting",
      "axes.card5.body": "Produire des synthèses régulières, documenter choix et difficultés, et suivre des indicateurs de maturité.",
      "axes.card6.title": "Dissémination",
      "axes.card6.body": "Assurer la visibilité scientifique et institutionnelle des méthodes et résultats de digitalisation (WP4).",
      "access.title": "Périmètre d'action",
      "access.body": "Le périmètre couvre les collections du laboratoire (référence, expérimentales, terrain), mais exclut l'infrastructure IT (WP1) et la digitalisation des processus de recherche hors collections.",
      "access.linkRoadmap": "Voir le calendrier provisoire",
      "access.linkNews": "Voir les livrables et questions",
      "access.linkContext": "Revenir à la présentation",
      "roadmap.title": "Calendrier provisoire (3 ans)",
      "news.title": "Livrables et questions",
      "footer.note": "IPHES-CERCA · Hub de projet · Aligné sur le rapport WIP (19 février 2026)",
      "content.loading": "Chargement en cours...",
      "content.comingSoon": "Contenu à venir"
    },
    ca: {
      "a11y.skip": "Anar al contingut",
      "header.kicker": "Hub institucional",
      "header.title": "Digitalització de les col·leccions IPHES-CERCA",
      "header.baseline": "Síntesi operativa alineada amb l'informe WIP del 19 de febrer de 2026.",
      "nav.presentation": "Presentació",
      "nav.axes": "Objectius",
      "nav.access": "Abast",
      "nav.roadmap": "Calendari",
      "nav.news": "Lliurables",
      "presentation.title": "Presentació",
      "presentation.body": "Aquest hub reprèn els elements estructurants de l'informe: objectius operatius, abast d'acció, calendari provisional de tres anys, lliurables i preguntes de marc.",
      "axes.title": "Objectius operatius",
      "axes.card1.title": "Coordinació",
      "axes.card1.body": "Coordinar les activitats de digitalització a escala de centre amb equips de recerca, tècnics i de suport.",
      "axes.card2.title": "Disseny de processos",
      "axes.card2.body": "Estructurar els processos de digitalització (WP2) segons ciència oberta, criteris FAIR i estàndards reconeguts.",
      "axes.card3.title": "Desplegament i manteniment",
      "axes.card3.body": "Desplegar i mantenir protocols i equipaments en coherència amb les infraestructures del laboratori (WP1).",
      "axes.card4.title": "Suport i formació",
      "axes.card4.body": "Acompanyar els equips en digitalització (WP3) per reforçar autonomia i adopció de protocols.",
      "axes.card5.title": "Seguiment",
      "axes.card5.body": "Produir síntesis periòdiques, documentar decisions i dificultats, i seguir indicadors de maduresa.",
      "axes.card6.title": "Disseminació",
      "axes.card6.body": "Assegurar la visibilitat científica i institucional dels mètodes i resultats de digitalització (WP4).",
      "access.title": "Abast d'acció",
      "access.body": "L'abast cobreix les col·leccions del laboratori (referència, experimentals i de camp), però exclou la infraestructura IT (WP1) i la digitalització dels processos de recerca fora de col·leccions.",
      "access.linkRoadmap": "Veure el calendari provisional",
      "access.linkNews": "Veure lliurables i preguntes",
      "access.linkContext": "Tornar a la presentació",
      "roadmap.title": "Calendari provisional (3 anys)",
      "news.title": "Lliurables i preguntes",
      "footer.note": "IPHES-CERCA · Hub de projecte · Alineat amb l'informe WIP (19 de febrer de 2026)",
      "content.loading": "S'està carregant...",
      "content.comingSoon": "Contingut properament"
    },
    en: {
      "a11y.skip": "Skip to content",
      "header.kicker": "Institutional hub",
      "header.title": "IPHES-CERCA Collections Digitization",
      "header.baseline": "Operational summary aligned with the WIP report compiled on February 19, 2026.",
      "nav.presentation": "Introduction",
      "nav.axes": "Objectives",
      "nav.access": "Scope",
      "nav.roadmap": "Schedule",
      "nav.news": "Deliverables",
      "presentation.title": "Introduction",
      "presentation.body": "This hub mirrors the report structure: operational objectives, scope of action, three-year provisional schedule, deliverables, and framing questions.",
      "axes.title": "Operational objectives",
      "axes.card1.title": "Coordination",
      "axes.card1.body": "Coordinate digitization activities at center level with research, technical, and support teams.",
      "axes.card2.title": "Process design",
      "axes.card2.body": "Structure collection digitization processes (WP2) under open science, FAIR criteria, and recognized standards.",
      "axes.card3.title": "Deployment and maintenance",
      "axes.card3.body": "Deploy and maintain protocols and equipment in line with laboratory infrastructure constraints (WP1).",
      "axes.card4.title": "Support and training",
      "axes.card4.body": "Support and train teams on digitization (WP3) to improve autonomy and protocol adoption.",
      "axes.card5.title": "Reporting",
      "axes.card5.body": "Provide regular progress syntheses, document choices and issues, and monitor maturity indicators.",
      "axes.card6.title": "Dissemination",
      "axes.card6.body": "Ensure scientific and institutional visibility of digitization methods and outcomes (WP4).",
      "access.title": "Scope of action",
      "access.body": "The scope covers laboratory collections (reference, experimental, field-based), but excludes IT infrastructure implementation (WP1) and digitization of research processes outside collections.",
      "access.linkRoadmap": "Open the provisional schedule",
      "access.linkNews": "Open deliverables and questions",
      "access.linkContext": "Back to introduction",
      "roadmap.title": "Provisional schedule (3 years)",
      "news.title": "Deliverables and questions",
      "footer.note": "IPHES-CERCA · Project hub · Aligned with WIP report (February 19, 2026)",
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
