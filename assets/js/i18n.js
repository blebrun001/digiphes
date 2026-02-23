(() => {
  const SUPPORTED_LANGS = ["es", "ca", "en"];
  const DEFAULT_LANG = "es";
  const STORAGE_KEY = "iphes-hub-lang";

  const translations = {
    es: {
      "a11y.skip": "Ir al contenido",
      "header.kicker": "Programa estrategico",
      "header.title": "Digitalizacion de las colecciones IPHES-CERCA",
      "header.baseline": "Una one-page de proyecto para dirigir la transformacion digital de las colecciones, compartir avances y hacer visibles los resultados.",
      "nav.vision": "Vision",
      "nav.metrics": "Cifras clave",
      "nav.roadmapVisual": "Roadmap",
      "nav.roadmap": "Calendario",
      "nav.news": "Entregables",
      "hero.ctaPrimary": "Ver roadmap visual",
      "hero.ctaSecondary": "Ver cifras clave",
      "metrics.title": "Cifras clave",
      "metrics.body": "Vista sintetica de los indicadores que estructuran la gestion y la comunicacion del proyecto.",
      "metrics.card1.value": "3 anos",
      "metrics.card1.label": "Horizonte de planificacion",
      "metrics.card2.value": "4 WP",
      "metrics.card2.label": "Work packages coordinados",
      "metrics.card3.value": "3 idiomas",
      "metrics.card3.label": "Difusion multilingue",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Punto de acceso unificado",
      "vision.title": "Propuesta de valor",
      "vision.body": "Ejecucion estructurada para pasar de la coleccion fisica a un activo cientifico interoperable.",
      "vision.card1.title": "Estructurar",
      "vision.card1.body": "Inventario, priorizacion y normalizacion de datos para flujos de trabajo robustos.",
      "vision.card2.title": "Producir",
      "vision.card2.body": "Digitalizacion progresiva, protocolos controlados y calidad en cada etapa.",
      "vision.card3.title": "Difundir",
      "vision.card3.body": "Valorizacion cientifica e institucional con entregables legibles y regulares.",
      "roadmapVisual.title": "Roadmap visual",
      "roadmapVisual.body": "Infografia de fases para entender rapidamente los hitos principales del proyecto.",
      "roadmapVisual.phase1.title": "Fase 1 · Marco",
      "roadmapVisual.phase1.body": "Auditoria de colecciones, priorizacion de lotes y definicion de estandares.",
      "roadmapVisual.phase2.title": "Fase 2 · Industrializacion",
      "roadmapVisual.phase2.body": "Puesta en produccion de protocolos, escalado y seguimiento de indicadores.",
      "roadmapVisual.phase3.title": "Fase 3 · Valorizacion",
      "roadmapVisual.phase3.body": "Consolidacion de entregables, difusion cientifica y mejora continua.",
      "roadmap.title": "Calendario provisional (3 anos)",
      "news.title": "Entregables y preguntas",
      "footer.note": "IPHES-CERCA · Landing de proyecto · Edicion one-page 2026",
      "content.loading": "Cargando...",
      "content.comingSoon": "Contenido proximamente"
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
