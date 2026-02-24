(() => {
  const SUPPORTED_LANGS = ["es", "ca", "en"];
  const DEFAULT_LANG = "es";
  const STORAGE_KEY = "iphes-hub-lang";
  const CONTACT_EMAIL = "info@iphes.cat";

  const translations = {
    es: {
      "meta.title": "Hub IPHES-CERCA | Digitalizacion de colecciones de IPHES-CERCA",
      "meta.description": "Hub institucional del proyecto de digitalizacion de colecciones de IPHES-CERCA.",
      "header.title": "Digitalizacion de colecciones de IPHES-CERCA",
      "header.baseline": "Una one-page de proyecto para dirigir la transformacion digital de las colecciones, compartir avances y hacer visibles los resultados.",
      "metrics.title": "Key numbers",
      "metrics.body": "",
      "metrics.card1.value": "3 anos",
      "metrics.card1.label": "Horizonte de planificacion",
      "metrics.card2.value": "15 colecciones",
      "metrics.card2.label": "Arqueologicas, de referencia y experimentales",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Punto de acceso unificado",
      "collections.title": "Panoramica de colecciones",
      "collections.desc": "Descripcion temporal de referencia para esta coleccion.",
      "collections.access": "Acceder",
      "collections.requestSubject": "Solicitud de acceso a coleccion",
      "hood.title": "Under the hood",
      "hood.body": "La digitalizacion de colecciones se apoya en soluciones avanzadas de gestion de datos e infraestructura; explora las colecciones a continuacion.",
      "hood.cta": "learn more",
      "roadmapVisual.title": "Hoja de ruta visual",
      "roadmapVisual.body": "Infografia de fases para entender rapidamente los hitos principales del proyecto.",
      "roadmapVisual.phase1.title": "Estructuracion",
      "roadmapVisual.phase1.body": "Auditoria de colecciones, priorizacion de lotes y definicion de estandares.",
      "roadmapVisual.phase2.title": "Despliegue",
      "roadmapVisual.phase2.body": "Puesta en marcha de protocolos, escalado y seguimiento de indicadores.",
      "roadmapVisual.phase3.title": "Consolidacion",
      "roadmapVisual.phase3.body": "Consolidacion de entregables, difusion cientifica y mejora continua.",
      "footer.address": "2026 - IPHES-CERCA Zona Educacional, 4, Campus Sescelades URV (Edifici W3), 43007 Tarragona (Espana) · info@iphes.cat | (+34) 977 943 003",
      "footer.privacy": "Este sitio web no recopila datos y no utiliza cookies."
    },
    ca: {
      "meta.title": "Hub IPHES-CERCA | Digitalitzacio de col.leccions d'IPHES-CERCA",
      "meta.description": "Hub institucional del projecte de digitalitzacio de col.leccions d'IPHES-CERCA.",
      "header.title": "Digitalitzacio de col.leccions d'IPHES-CERCA",
      "header.baseline": "Una one-page de projecte per dirigir la transformacio digital de les col.leccions, compartir avanc i fer visibles els resultats.",
      "metrics.title": "Key numbers",
      "metrics.body": "",
      "metrics.card1.value": "3 anys",
      "metrics.card1.label": "Horitzo de planificacio",
      "metrics.card2.value": "15 col.leccions",
      "metrics.card2.label": "Arqueologiques, de referencia i experimentals",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Punt d'acces unificat",
      "collections.title": "Panoramica de col.leccions",
      "collections.desc": "Descripcio temporal de referencia per a aquesta col.leccio.",
      "collections.access": "Accedir",
      "collections.requestSubject": "Sol.licitud d'acces a col.leccio",
      "hood.title": "Under the hood",
      "hood.body": "La digitalitzacio de col.leccions es basa en solucions avancades de gestio de dades i infraestructura; explora les col.leccions a continuacio.",
      "hood.cta": "learn more",
      "roadmapVisual.title": "Full de ruta visual",
      "roadmapVisual.body": "Infografia de fases per entendre rapidament les principals fites del projecte.",
      "roadmapVisual.phase1.title": "Estructuracio",
      "roadmapVisual.phase1.body": "Auditoria de col.leccions, prioritzacio de lots i definicio d'estandards.",
      "roadmapVisual.phase2.title": "Desplegament",
      "roadmapVisual.phase2.body": "Posada en marxa de protocols, escalat i seguiment d'indicadors.",
      "roadmapVisual.phase3.title": "Consolidacio",
      "roadmapVisual.phase3.body": "Consolidacio de lliurables, difusio cientifica i millora continua.",
      "footer.address": "2026 - IPHES-CERCA Zona Educacional, 4, Campus Sescelades URV (Edifici W3), 43007 Tarragona (Espanya) · info@iphes.cat | (+34) 977 943 003",
      "footer.privacy": "Aquest lloc web no recopila dades i no utilitza cookies."
    },
    en: {
      "meta.title": "Hub IPHES-CERCA | IPHES-CERCA Collections Digitization",
      "meta.description": "Institutional hub for the IPHES-CERCA collections digitization project.",
      "header.title": "IPHES-CERCA Collections Digitization",
      "header.baseline": "Discover how IPHES-CERCA is digitizing its collections through the Maria de Maeztu 2025-2029 project led by the laboratory.",
      "metrics.title": "Key numbers",
      "metrics.body": "",
      "metrics.card1.value": "3 years",
      "metrics.card1.label": "Planning horizon",
      "metrics.card2.value": "15 Collections",
      "metrics.card2.label": "Archaeological, reference, experimental",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Unified access point",
      "collections.title": "Collections overview",
      "collections.desc": "Temporary placeholder description for this collection.",
      "collections.access": "Access",
      "collections.requestSubject": "Collection access request",
      "hood.title": "Under the hood",
      "hood.body": "Collections digitization relies on advanced data management solutions and infrastructure technologies. To learn more, clic the button below.",
      "hood.cta": "learn more",
      "roadmapVisual.title": "Visual roadmap",
      "roadmapVisual.body": "Phase-based infographic to quickly understand core project milestones.",
      "roadmapVisual.phase1.title": "Structuring",
      "roadmapVisual.phase1.body": "Collection audit, batch prioritization, and standards definition.",
      "roadmapVisual.phase2.title": "Deployment",
      "roadmapVisual.phase2.body": "Protocol rollout, scaling, and indicator-driven monitoring.",
      "roadmapVisual.phase3.title": "Consolidation",
      "roadmapVisual.phase3.body": "Deliverable consolidation, scientific dissemination, and continuous improvement.",
      "footer.address": "2026 - IPHES-CERCA Zona Educacional, 4, Campus Sescelades URV (Edifici W3), 43007 Tarragona (Spain) · info@iphes.cat | (+34) 977 943 003",
      "footer.privacy": "This website does not collect your data and no cookies are used."
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
    const metaDescription = document.querySelector("meta[name='description']");

    document.documentElement.lang = safeLang;
    document.title = t("meta.title", safeLang);
    if (metaDescription) {
      metaDescription.setAttribute("content", t("meta.description", safeLang));
    }

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

  function registerCollectionAccessButtons() {
    document.querySelectorAll(".collection-access[type='button']").forEach((button) => {
      button.addEventListener("click", () => {
        const collectionName =
          button.getAttribute("data-collection") ||
          button.closest(".collection-card")?.querySelector("h3")?.textContent?.trim() ||
          "Collection";
        const subjectPrefix = t("collections.requestSubject");
        const subject = encodeURIComponent(`${subjectPrefix} - ${collectionName}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}`;
      });
    });
  }

  function registerScrollButtons() {
    document.querySelectorAll("[data-scroll-target]").forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-scroll-target");
        if (!targetId) {
          return;
        }
        const target = document.getElementById(targetId);
        if (!target) {
          return;
        }
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function init() {
    registerLanguageButtons();
    registerLanguageMenu();
    registerCollectionAccessButtons();
    registerScrollButtons();
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
