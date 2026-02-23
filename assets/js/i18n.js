(() => {
  const SUPPORTED_LANGS = ["fr", "ca", "en"];
  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "iphes-hub-lang";

  const translations = {
    fr: {
      "a11y.skip": "Aller au contenu",
      "header.kicker": "Programme stratégique",
      "header.title": "Digitalisation des collections IPHES-CERCA",
      "header.baseline": "Une one-page projet pour piloter la transformation numérique des collections, partager l'avancement et rendre visibles les résultats.",
      "nav.vision": "Vision",
      "nav.metrics": "Chiffres clés",
      "nav.roadmapVisual": "Roadmap",
      "nav.roadmap": "Calendrier",
      "nav.news": "Livrables",
      "hero.ctaPrimary": "Voir la roadmap visuelle",
      "hero.ctaSecondary": "Voir les chiffres clés",
      "hero.highlight.title": "Project snapshot",
      "hero.highlight.item1": "Gouvernance multi-WP",
      "hero.highlight.item2": "Standards FAIR et CIDOC-CRM",
      "hero.highlight.item3": "Traçabilité complète des étapes",
      "metrics.title": "Chiffres clés",
      "metrics.body": "Vue synthétique des indicateurs qui structurent le pilotage et la communication projet.",
      "metrics.card1.value": "3 ans",
      "metrics.card1.label": "Horizon de planification",
      "metrics.card2.value": "4 WP",
      "metrics.card2.label": "Work packages coordonnés",
      "metrics.card3.value": "3 langues",
      "metrics.card3.label": "Diffusion multilingue",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Point d'accès unifié",
      "vision.title": "Proposition de valeur",
      "vision.body": "Une exécution structurée pour passer de la collection physique à un actif scientifique exploitable et interopérable.",
      "vision.card1.title": "Structurer",
      "vision.card1.body": "Inventaire, priorisation et normalisation des données pour des flux de travail robustes.",
      "vision.card2.title": "Produire",
      "vision.card2.body": "Digitalisation progressive, protocoles maîtrisés et qualité suivie à chaque étape.",
      "vision.card3.title": "Diffuser",
      "vision.card3.body": "Valorisation scientifique et institutionnelle via des livrables lisibles et réguliers.",
      "roadmapVisual.title": "Roadmap visuelle",
      "roadmapVisual.body": "Infographie des phases projet pour comprendre rapidement les jalons principaux.",
      "roadmapVisual.phase1.title": "Phase 1 · Cadrage",
      "roadmapVisual.phase1.body": "Audit des collections, priorisation des lots et définition des standards.",
      "roadmapVisual.phase2.title": "Phase 2 · Industrialisation",
      "roadmapVisual.phase2.body": "Mise en production des protocoles, montée en charge et suivi des indicateurs.",
      "roadmapVisual.phase3.title": "Phase 3 · Valorisation",
      "roadmapVisual.phase3.body": "Consolidation des livrables, diffusion scientifique et amélioration continue.",
      "roadmap.title": "Calendrier provisoire (3 ans)",
      "news.title": "Livrables et questions",
      "footer.note": "IPHES-CERCA · Landing projet · Edition one-page 2026",
      "content.loading": "Chargement en cours...",
      "content.comingSoon": "Contenu à venir"
    },
    ca: {
      "a11y.skip": "Anar al contingut",
      "header.kicker": "Programa estratègic",
      "header.title": "Digitalització de les col·leccions IPHES-CERCA",
      "header.baseline": "Una one-page de projecte per dirigir la transformació digital de les col·leccions i fer visible l'avanç.",
      "nav.vision": "Visió",
      "nav.metrics": "Xifres clau",
      "nav.roadmapVisual": "Roadmap",
      "nav.roadmap": "Calendari",
      "nav.news": "Lliurables",
      "hero.ctaPrimary": "Veure la roadmap visual",
      "hero.ctaSecondary": "Veure les xifres clau",
      "hero.highlight.title": "Project snapshot",
      "hero.highlight.item1": "Governança multi-WP",
      "hero.highlight.item2": "Estàndards FAIR i CIDOC-CRM",
      "hero.highlight.item3": "Traçabilitat completa de les etapes",
      "metrics.title": "Xifres clau",
      "metrics.body": "Vista sintètica dels indicadors que estructuren la gestió i la comunicació del projecte.",
      "metrics.card1.value": "3 anys",
      "metrics.card1.label": "Horitzó de planificació",
      "metrics.card2.value": "4 WP",
      "metrics.card2.label": "Work packages coordinats",
      "metrics.card3.value": "3 llengües",
      "metrics.card3.label": "Difusió multilingüe",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Punt d'accés unificat",
      "vision.title": "Proposta de valor",
      "vision.body": "Execució estructurada per passar de la col·lecció física a un actiu científic interoperable.",
      "vision.card1.title": "Estructurar",
      "vision.card1.body": "Inventari, priorització i normalització de dades per a fluxos de treball robustos.",
      "vision.card2.title": "Produir",
      "vision.card2.body": "Digitalització progressiva, protocols controlats i qualitat seguida a cada etapa.",
      "vision.card3.title": "Difondre",
      "vision.card3.body": "Valorització científica i institucional amb lliurables regulars i llegibles.",
      "roadmapVisual.title": "Roadmap visual",
      "roadmapVisual.body": "Infografia de fases per entendre ràpidament els principals jalons del projecte.",
      "roadmapVisual.phase1.title": "Fase 1 · Marc",
      "roadmapVisual.phase1.body": "Auditoria de col·leccions, priorització de lots i definició d'estàndards.",
      "roadmapVisual.phase2.title": "Fase 2 · Industrialització",
      "roadmapVisual.phase2.body": "Posada en producció de protocols, escalat i seguiment d'indicadors.",
      "roadmapVisual.phase3.title": "Fase 3 · Valorització",
      "roadmapVisual.phase3.body": "Consolidació de lliurables, difusió científica i millora contínua.",
      "roadmap.title": "Calendari provisional (3 anys)",
      "news.title": "Lliurables i preguntes",
      "footer.note": "IPHES-CERCA · Landing de projecte · Edició one-page 2026",
      "content.loading": "S'està carregant...",
      "content.comingSoon": "Contingut properament"
    },
    en: {
      "a11y.skip": "Skip to content",
      "header.kicker": "Strategic program",
      "header.title": "IPHES-CERCA Collections Digitization",
      "header.baseline": "A one-page project landing to steer collections digitization, share progress, and showcase outcomes.",
      "nav.vision": "Vision",
      "nav.metrics": "Key figures",
      "nav.roadmapVisual": "Roadmap",
      "nav.roadmap": "Schedule",
      "nav.news": "Deliverables",
      "hero.ctaPrimary": "View visual roadmap",
      "hero.ctaSecondary": "View key figures",
      "hero.highlight.title": "Project snapshot",
      "hero.highlight.item1": "Multi-WP governance",
      "hero.highlight.item2": "FAIR and CIDOC-CRM standards",
      "hero.highlight.item3": "End-to-end traceability",
      "metrics.title": "Key figures",
      "metrics.body": "A concise indicator set to steer execution and communicate project progress.",
      "metrics.card1.value": "3 years",
      "metrics.card1.label": "Planning horizon",
      "metrics.card2.value": "4 WPs",
      "metrics.card2.label": "Coordinated work packages",
      "metrics.card3.value": "3 languages",
      "metrics.card3.label": "Multilingual publication",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Unified access point",
      "vision.title": "Value proposition",
      "vision.body": "Structured execution to turn physical collections into interoperable scientific assets.",
      "vision.card1.title": "Structure",
      "vision.card1.body": "Inventory, prioritization, and data normalization for robust workflows.",
      "vision.card2.title": "Produce",
      "vision.card2.body": "Progressive digitization, controlled protocols, and quality tracking at every step.",
      "vision.card3.title": "Disseminate",
      "vision.card3.body": "Scientific and institutional visibility through regular, readable deliverables.",
      "roadmapVisual.title": "Visual roadmap",
      "roadmapVisual.body": "Phase-based infographic to quickly understand core project milestones.",
      "roadmapVisual.phase1.title": "Phase 1 · Framing",
      "roadmapVisual.phase1.body": "Collection audit, batch prioritization, and standards definition.",
      "roadmapVisual.phase2.title": "Phase 2 · Industrialization",
      "roadmapVisual.phase2.body": "Protocol rollout, scaling, and indicator-driven monitoring.",
      "roadmapVisual.phase3.title": "Phase 3 · Valorization",
      "roadmapVisual.phase3.body": "Deliverable consolidation, scientific dissemination, and continuous improvement.",
      "roadmap.title": "Provisional schedule (3 years)",
      "news.title": "Deliverables and questions",
      "footer.note": "IPHES-CERCA · Project landing · One-page edition 2026",
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
