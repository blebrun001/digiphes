(() => {
  const SUPPORTED_LANGS = ["es", "ca", "en"];
  const DEFAULT_LANG = "es";
  const STORAGE_KEY = "iphes-hub-lang";

  const translations = {
    es: {
      "a11y.skip": "Ir al contenido",
      "header.kicker": "Programa estrategico",
      "header.title": "Collection Digitization of IPHES-CERCA",
      "header.baseline": "Una one-page de proyecto para dirigir la transformacion digital de las colecciones, compartir avances y hacer visibles los resultados.",
      "nav.vision": "Vision",
      "nav.metrics": "Cifras clave",
      "nav.roadmapVisual": "Roadmap",
      "hero.ctaPrimary": "Ver roadmap visual",
      "hero.ctaSecondary": "Ver cifras clave",
      "metrics.title": "A few numbers",
      "metrics.body": "Vista sintetica de los indicadores que estructuran la gestion y la comunicacion del proyecto.",
      "metrics.card1.value": "3 anos",
      "metrics.card1.label": "Horizonte de planificacion",
      "metrics.card2.value": "15 Collections",
      "metrics.card2.label": "Archaeological, reference, experimental",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Punto de acceso unificado",
      "collections.title": "Collections overview",
      "collections.access": "Access",
      "hood.title": "Under the Hood",
      "hood.body": "Collections digitization relies on advanced data management solutions and infrastructure technologies.",
      "hood.cta": "more info",
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
      "roadmapVisual.phase1.title": "Structuring",
      "roadmapVisual.phase1.body": "Auditoria de colecciones, priorizacion de lotes y definicion de estandares.",
      "roadmapVisual.phase2.title": "Deployment",
      "roadmapVisual.phase2.body": "Puesta en produccion de protocolos, escalado y seguimiento de indicadores.",
      "roadmapVisual.phase3.title": "Consolidation",
      "roadmapVisual.phase3.body": "Consolidacion de entregables, difusion cientifica y mejora continua.",
      "footer.note": "IPHES-CERCA · Landing de proyecto · Edicion one-page 2026"
    },
    ca: {
      "a11y.skip": "Anar al contingut",
      "header.kicker": "Programa estratègic",
      "header.title": "Collection Digitization of IPHES-CERCA",
      "header.baseline": "Una one-page de projecte per dirigir la transformació digital de les col·leccions i fer visible l'avanç.",
      "nav.vision": "Visió",
      "nav.metrics": "Xifres clau",
      "nav.roadmapVisual": "Roadmap",
      "hero.ctaPrimary": "Veure la roadmap visual",
      "hero.ctaSecondary": "Veure les xifres clau",
      "metrics.title": "A few numbers",
      "metrics.body": "Vista sintètica dels indicadors que estructuren la gestió i la comunicació del projecte.",
      "metrics.card1.value": "3 anys",
      "metrics.card1.label": "Horitzó de planificació",
      "metrics.card2.value": "15 Collections",
      "metrics.card2.label": "Archaeological, reference, experimental",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Punt d'accés unificat",
      "collections.title": "Collections overview",
      "collections.access": "Access",
      "hood.title": "Under the Hood",
      "hood.body": "Collections digitization relies on advanced data management solutions and infrastructure technologies.",
      "hood.cta": "more info",
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
      "roadmapVisual.phase1.title": "Structuring",
      "roadmapVisual.phase1.body": "Auditoria de col·leccions, priorització de lots i definició d'estàndards.",
      "roadmapVisual.phase2.title": "Deployment",
      "roadmapVisual.phase2.body": "Posada en producció de protocols, escalat i seguiment d'indicadors.",
      "roadmapVisual.phase3.title": "Consolidation",
      "roadmapVisual.phase3.body": "Consolidació de lliurables, difusió científica i millora contínua.",
      "footer.note": "IPHES-CERCA · Landing de projecte · Edició one-page 2026"
    },
    en: {
      "a11y.skip": "Skip to content",
      "header.kicker": "Strategic program",
      "header.title": "Collection Digitization of IPHES-CERCA",
      "header.baseline": "Discover how IPHES-CERCA is digitizing its collections through the Maria de Maeztu 2025-2029 project led by the laboratory.",
      "nav.vision": "Vision",
      "nav.metrics": "Key figures",
      "nav.roadmapVisual": "Roadmap",
      "hero.ctaPrimary": "View visual roadmap",
      "hero.ctaSecondary": "View key figures",
      "metrics.title": "A few numbers",
      "metrics.body": "A concise indicator set to steer execution and communicate project progress.",
      "metrics.card1.value": "3 years",
      "metrics.card1.label": "Planning horizon",
      "metrics.card2.value": "15 Collections",
      "metrics.card2.label": "Archaeological, reference, experimental",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Unified access point",
      "collections.title": "Collections overview",
      "collections.access": "Access",
      "hood.title": "Under the Hood",
      "hood.body": "Collections digitization relies on advanced data management solutions and infrastructure technologies.",
      "hood.cta": "more info",
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
      "roadmapVisual.phase1.title": "Structuring",
      "roadmapVisual.phase1.body": "Collection audit, batch prioritization, and standards definition.",
      "roadmapVisual.phase2.title": "Deployment",
      "roadmapVisual.phase2.body": "Protocol rollout, scaling, and indicator-driven monitoring.",
      "roadmapVisual.phase3.title": "Consolidation",
      "roadmapVisual.phase3.body": "Deliverable consolidation, scientific dissemination, and continuous improvement.",
      "footer.note": "IPHES-CERCA · Project landing · One-page edition 2026"
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

  function registerLanguageMenu() {
    const switcher = document.querySelector(".lang-switcher");
    const toggle = document.querySelector("[data-lang-toggle]");
    if (!switcher || !toggle) {
      return;
    }

    function closeMenu() {
      switcher.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
      switcher.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      const firstOption = switcher.querySelector(".lang-menu .lang-btn");
      if (firstOption) {
        firstOption.focus();
      }
    }

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = switcher.classList.contains("is-open");
      if (isOpen) {
        closeMenu();
        return;
      }
      openMenu();
    });

    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    switcher.querySelectorAll(".lang-menu .lang-btn").forEach((btn) => {
      btn.addEventListener("click", closeMenu);
    });
  }

  function init() {
    registerLanguageButtons();
    registerLanguageMenu();
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
