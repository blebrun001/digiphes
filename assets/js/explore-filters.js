(() => {
  const OBJECT_IMAGE_DIRECTORY = "images/objects";
  const FALLBACK_IMAGE_BY_TYPE = {
    "3D model": "fallback-3d-model.jpeg",
    Macrophotography: "fallback-macrophotography.jpeg",
    Microphotography: "fallback-microphotography.jpeg",
    "Text document": "fallback-text-document.jpeg",
    Slide: "fallback-slide.jpeg"
  };
  const DEFAULT_FALLBACK_IMAGE = "fallback-object.jpeg";

  const filterRoot = document.querySelector("[data-research-filters]");
  const activeFiltersRoot = document.querySelector("[data-active-filters]");
  const searchForm = document.querySelector(".research-search-form");
  const searchInput = document.querySelector("#research-search");
  const dateMinInput = document.querySelector("[data-date-min]");
  const dateMaxInput = document.querySelector("[data-date-max]");
  const dateMinLabel = document.querySelector("[data-date-min-label]");
  const dateMaxLabel = document.querySelector("[data-date-max-label]");
  const dateSlider = document.querySelector("[data-date-slider]");
  const resultsSection = document.querySelector("#results");
  const resultsHeading = resultsSection ? resultsSection.querySelector("h2") : null;
  let mockSearchData = [];
  let lastRenderedResults = [];
  let hasSearchRun = false;

  if (!filterRoot || !activeFiltersRoot) {
    return;
  }

  loadMockSearchData();

  document.addEventListener("language:changed", () => {
    if (hasSearchRun) {
      runSearch();
    }
  });

  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      runSearch();
    });
  }

  const collections = [
    "Anthracology",
    "Carpology",
    "Palynology",
    "Traceology",
    "Lithotheque (LithIPHES)",
    "Microscopy",
    "Photography",
    "Slides",
    "Zooarchaeology (COR-IPHES)",
    "Zooarchaeology (TaphoIPHES)",
    "Micropalaeontology",
    "Palaeoanthropology",
    "Technotheque",
    "Microwear",
    "Archaeopalaeontology"
  ];

  const sites = [
    "Abauntz",
    "Abric de la Consagració",
    "Abric Romaní",
    "Aïn Beni Mathar - Guefaït",
    "Armènia",
    "Atapuerca",
    "Orce",
    "Balma de Castelló",
    "Cal Sitjo",
    "Camp dels Ninots",
    "Cantacorbs",
    "Cova 338 (Queralbs)",
    "Cova de Lazaret",
    "Cova del Cudó",
    "Les Ferradures",
    "Cova dels Xaragalls",
    "Cueva Sta. Ana",
    "Cova Eirós",
    "Cova Foradada",
    "La Griera",
    "Cova del Trader",
    "Cova Gran",
    "Cova Freda",
    "Coves del Salnitre",
    "Les Soleies",
    "Cova Simanya - Triangle",
    "Cova de la Canal",
    "Coves del Toll i Toixoneres",
    "El Barranc de La Boella",
    "El Cavet",
    "El Molí del Salt",
    "Engel Ela",
    "Mas d'en Soler",
    "La Cativera",
    "Cova del Sanat",
    "Font Major",
    "Incarcal",
    "La Cansaladeta",
    "Oued Sarrat",
    "Balma de les Borres",
    "N' Gaous",
    "Roc de les Orenetes",
    "Quibas",
    "Sicília",
    "El Tut Fustanyà",
    "Cova de Collell",
    "Forat del Embut",
    "Taguatagua 3",
    "Cova d'en Pau",
    "Cova de l'Arbreda"
  ];

  const types = [
    "3D model",
    "Macrophotography",
    "Microphotography",
    "Slide",
    "Text document"
  ];

  const DATE_MIN = 1980;
  const DATE_MAX = 2026;

  const optionsByType = {
    collections,
    sites,
    type: types
  };
  const allowedCollections = new Set(collections);
  const allowedSites = new Set(sites);
  const allowedTypes = new Set(types);

  const labelsByType = {
    collections: "Collection",
    sites: "Site",
    type: "Type",
    "creation-date": "Creation date"
  };

  const selectedFilters = {
    collections: new Set(),
    sites: new Set(),
    type: new Set()
  };

  const creationDateRange = {
    min: DATE_MIN,
    max: DATE_MAX
  };

  const groups = Array.from(filterRoot.querySelectorAll("[data-filter-group]"));

  groups.forEach((group) => {
    const type = group.getAttribute("data-filter-group");
    const toggle = group.querySelector("[data-filter-toggle]");
    const values = optionsByType[type] || [];
    const list = group.querySelector(`[data-filter-options="${type}"]`);

    if (!toggle) {
      return;
    }

    if (list) {
      values.forEach((value) => {
        const id = `filter-${type}-${slugify(value)}`;
        const item = document.createElement("li");
        item.className = "research-filter-item";
        item.innerHTML = `
          <label class="research-filter-option" for="${id}">
            <input id="${id}" type="checkbox" data-filter-type="${type}" value="${escapeAttribute(value)}" />
            <span>${escapeHtml(value)}</span>
          </label>
        `;
        list.appendChild(item);
      });
    }

    toggle.addEventListener("click", () => {
      const isOpen = group.classList.contains("is-open");
      closeAllGroups();
      if (!isOpen) {
        group.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        positionPanelWithinViewport(group);
      }
    });
  });

  if (dateMinInput && dateMaxInput && dateMinLabel && dateMaxLabel) {
    dateMinInput.addEventListener("input", () => {
      const minValue = Number(dateMinInput.value);
      const maxValue = Number(dateMaxInput.value);
      if (minValue > maxValue) {
        dateMaxInput.value = String(minValue);
      }
      syncCreationDateRange();
    });

    dateMaxInput.addEventListener("input", () => {
      const minValue = Number(dateMinInput.value);
      const maxValue = Number(dateMaxInput.value);
      if (maxValue < minValue) {
        dateMinInput.value = String(maxValue);
      }
      syncCreationDateRange();
    });
  }

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    if (target.matches("input[type='checkbox'][data-filter-type]")) {
      const type = target.getAttribute("data-filter-type");
      const value = target.value;

      if (!type || !selectedFilters[type]) {
        return;
      }

      if (target.checked) {
        selectedFilters[type].add(value);
      } else {
        selectedFilters[type].delete(value);
      }

      renderActiveFilters();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    if (target.matches(".research-filter-chip-remove")) {
      const type = target.getAttribute("data-chip-type");
      const value = target.getAttribute("data-chip-value");

      if (!type || !value || !selectedFilters[type]) {
        if (type === "creation-date") {
          creationDateRange.min = DATE_MIN;
          creationDateRange.max = DATE_MAX;
          if (dateMinInput && dateMaxInput && dateMinLabel && dateMaxLabel) {
            dateMinInput.value = String(DATE_MIN);
            dateMaxInput.value = String(DATE_MAX);
            syncCreationDateRange();
          } else {
            renderActiveFilters();
          }
        }
        return;
      }

      selectedFilters[type].delete(value);

      const selector = `input[type='checkbox'][data-filter-type='${cssEscape(type)}'][value='${cssEscape(value)}']`;
      const checkbox = document.querySelector(selector);
      if (checkbox instanceof HTMLInputElement) {
        checkbox.checked = false;
      }

      renderActiveFilters();
    }

    if (!target.closest("[data-filter-group]")) {
      closeAllGroups();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllGroups();
    }
  });

  let normalizeCardsRaf = 0;

  window.addEventListener("resize", () => {
    const openGroup = groups.find((group) => group.classList.contains("is-open"));
    if (openGroup) {
      positionPanelWithinViewport(openGroup);
    }

    if (normalizeCardsRaf) {
      window.cancelAnimationFrame(normalizeCardsRaf);
    }
    normalizeCardsRaf = window.requestAnimationFrame(() => {
      normalizeResultCardHeights(resultsSection);
    });
  });

  function closeAllGroups() {
    groups.forEach((group) => {
      group.classList.remove("is-open");
      const toggle = group.querySelector("[data-filter-toggle]");
      const panel = group.querySelector("[data-filter-panel]");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
      if (panel instanceof HTMLElement) {
        panel.style.transform = "translateX(0)";
      }
    });
  }

  function positionPanelWithinViewport(group) {
    const panel = group.querySelector("[data-filter-panel]");
    if (!(panel instanceof HTMLElement)) {
      return;
    }

    panel.style.transform = "translateX(0)";
    const rect = panel.getBoundingClientRect();
    const viewportPadding = 12;
    let shift = 0;

    if (rect.right > window.innerWidth - viewportPadding) {
      shift -= rect.right - (window.innerWidth - viewportPadding);
    }

    if (rect.left + shift < viewportPadding) {
      shift += viewportPadding - (rect.left + shift);
    }

    panel.style.transform = `translateX(${shift}px)`;
  }

  function renderActiveFilters() {
    activeFiltersRoot.innerHTML = "";

    if (creationDateRange.min !== DATE_MIN || creationDateRange.max !== DATE_MAX) {
      const chip = document.createElement("div");
      chip.className = "research-filter-chip";

      const label = document.createElement("span");
      label.textContent = `${labelsByType["creation-date"]}: ${creationDateRange.min} - ${creationDateRange.max}`;

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "research-filter-chip-remove";
      remove.setAttribute("aria-label", "Remove creation date filter");
      remove.setAttribute("data-chip-type", "creation-date");
      remove.textContent = "×";

      chip.appendChild(label);
      chip.appendChild(remove);
      activeFiltersRoot.appendChild(chip);
    }

    Object.entries(selectedFilters).forEach(([type, values]) => {
      values.forEach((value) => {
        const chip = document.createElement("div");
        chip.className = "research-filter-chip";

        const label = document.createElement("span");
        label.textContent = `${labelsByType[type]}: ${value}`;

        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "research-filter-chip-remove";
        remove.setAttribute("aria-label", `Remove ${value}`);
        remove.setAttribute("data-chip-type", type);
        remove.setAttribute("data-chip-value", value);
        remove.textContent = "×";

        chip.appendChild(label);
        chip.appendChild(remove);
        activeFiltersRoot.appendChild(chip);
      });
    });
  }

  function syncCreationDateRange() {
    if (!dateMinInput || !dateMaxInput || !dateMinLabel || !dateMaxLabel) {
      return;
    }

    creationDateRange.min = Number(dateMinInput.value);
    creationDateRange.max = Number(dateMaxInput.value);
    dateMinLabel.textContent = String(creationDateRange.min);
    dateMaxLabel.textContent = String(creationDateRange.max);

    if (dateSlider) {
      const left = ((creationDateRange.min - DATE_MIN) / (DATE_MAX - DATE_MIN)) * 100;
      const right = 100 - ((creationDateRange.max - DATE_MIN) / (DATE_MAX - DATE_MIN)) * 100;
      dateSlider.style.setProperty("--range-left", `${left}%`);
      dateSlider.style.setProperty("--range-right", `${right}%`);
    }

    renderActiveFilters();
  }

  syncCreationDateRange();
  renderResults([]);

  async function loadMockSearchData() {
    try {
      const response = await fetch("assets/data/mock-search-results.json");
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const payload = await response.json();
      mockSearchData = Array.isArray(payload) ? payload.filter(isValidMockItem) : [];
    } catch (error) {
      mockSearchData = [];
    }
  }

  function runSearch() {
    hasSearchRun = true;
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();

    const filteredResults = mockSearchData.filter((item) => {
      const title = getLocalizedField(item, "title").toLowerCase();
      const description = getLocalizedField(item, "description").toLowerCase();
      const inventoryCode = (item.inventoryCode || "").toLowerCase();
      const hasQueryMatch =
        !query ||
        title.includes(query) ||
        description.includes(query) ||
        inventoryCode.includes(query);
      const hasCollectionMatch =
        selectedFilters.collections.size === 0 || selectedFilters.collections.has(item.collections);
      const hasSiteMatch = selectedFilters.sites.size === 0 || selectedFilters.sites.has(item.sites);
      const hasTypeMatch = selectedFilters.type.size === 0 || selectedFilters.type.has(item.type);
      const creationYear = Number(item.creationDate);
      const hasDateMatch = creationYear >= creationDateRange.min && creationYear <= creationDateRange.max;

      return hasQueryMatch && hasCollectionMatch && hasSiteMatch && hasTypeMatch && hasDateMatch;
    });

    lastRenderedResults = filteredResults;
    renderResults(filteredResults);
  }

  function renderResults(items) {
    if (!resultsSection) {
      return;
    }

    if (resultsHeading) {
      const title = getUiLabel("resultsTitle");
      resultsHeading.textContent = hasSearchRun ? `${title} (${items.length})` : title;
    }

    let listRoot = resultsSection.querySelector("[data-results-list]");
    if (!listRoot) {
      listRoot = document.createElement("div");
      listRoot.setAttribute("data-results-list", "");
      resultsSection.appendChild(listRoot);
    }

    if (!items.length) {
      listRoot.innerHTML = `<p class="results-empty">${escapeHtml(getUiLabel("noResults"))}</p>`;
      return;
    }

    listRoot.innerHTML = `<div class="results-grid">${items
      .map(
        (item) => `
          <article class="research-result-item">
            <figure class="research-result-figure">
              <img
                class="research-result-image"
                data-result-image
                data-object-id="${escapeAttribute(getObjectImageId(item))}"
                data-fallback-src="${escapeAttribute(getFallbackImageSource(item))}"
                alt="${escapeAttribute(getLocalizedField(item, "title") || getUiLabel("objectImage"))}"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <header class="research-result-header">
              <h3>${escapeHtml(getLocalizedField(item, "title") || getUiLabel("untitledObject"))}</h3>
            </header>
            <p class="research-result-description">${escapeHtml(getLocalizedField(item, "description"))}</p>
            <dl class="research-result-meta">
              <div class="research-result-meta-item">
                <dt>${escapeHtml(getUiLabel("inventory"))}</dt>
                <dd>${escapeHtml(item.inventoryCode || "-")}</dd>
              </div>
              <div class="research-result-meta-item">
                <dt>${escapeHtml(getUiLabel("collection"))}</dt>
                <dd>${escapeHtml(item.collections || "-")}</dd>
              </div>
              <div class="research-result-meta-item">
                <dt>${escapeHtml(getUiLabel("site"))}</dt>
                <dd>${escapeHtml(item.sites || "-")}</dd>
              </div>
              <div class="research-result-meta-item">
                <dt>${escapeHtml(getUiLabel("type"))}</dt>
                <dd>${escapeHtml(item.type || "-")}</dd>
              </div>
              <div class="research-result-meta-item research-result-meta-item-wide">
                <dt>${escapeHtml(getUiLabel("creationDate"))}</dt>
                <dd>${escapeHtml(String(item.creationDate || "-"))}</dd>
              </div>
            </dl>
            <div class="research-result-actions">
              <button type="button" class="research-result-consult cta">${escapeHtml(getUiLabel("consultAction"))}</button>
            </div>
          </article>
        `
      )
      .join("")}</div>`;

    hydrateResultImages(listRoot);
    window.requestAnimationFrame(() => normalizeResultCardHeights(listRoot));
  }

  function normalizeResultCardHeights(root) {
    if (!(root instanceof HTMLElement)) {
      return;
    }

    const cards = root.querySelectorAll(".research-result-item");
    if (!cards.length) {
      return;
    }

    let maxHeight = 0;
    cards.forEach((card) => {
      if (!(card instanceof HTMLElement)) {
        return;
      }
      card.style.minHeight = "0";
      maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    cards.forEach((card) => {
      if (card instanceof HTMLElement) {
        card.style.minHeight = `${maxHeight}px`;
      }
    });
  }

  function hydrateResultImages(root) {
    const imageNodes = root.querySelectorAll("[data-result-image]");
    imageNodes.forEach((imageNode) => {
      const objectId = imageNode.getAttribute("data-object-id") || "";
      const fallbackImage = imageNode.getAttribute("data-fallback-src") || getDefaultFallbackSource();
      const objectImageSource = getObjectImageSource(objectId);

      imageNode.onerror = () => {
        if (imageNode.src.endsWith(fallbackImage)) {
          return;
        }
        imageNode.src = fallbackImage;
      };

      imageNode.src = objectImageSource;
    });
  }

  function getObjectImageId(item) {
    if (!item || typeof item.id !== "string") {
      return "";
    }
    return item.id.trim().toUpperCase();
  }

  function getObjectImageSource(objectId) {
    const safeId = objectId.replace(/[^A-Z0-9-]/g, "");
    if (!safeId) {
      return getDefaultFallbackSource();
    }
    return `${OBJECT_IMAGE_DIRECTORY}/${safeId}.jpeg`;
  }

  function getFallbackImageSource(item) {
    const fileName = FALLBACK_IMAGE_BY_TYPE[item?.type] || DEFAULT_FALLBACK_IMAGE;
    return `${OBJECT_IMAGE_DIRECTORY}/${fileName}`;
  }

  function getDefaultFallbackSource() {
    return `${OBJECT_IMAGE_DIRECTORY}/${DEFAULT_FALLBACK_IMAGE}`;
  }

  function getLocalizedField(item, field) {
    const lang = document.documentElement.lang || "en";
    const i18nField = item?.[`${field}_i18n`];
    if (i18nField && typeof i18nField === "object") {
      if (typeof i18nField[lang] === "string") {
        return i18nField[lang];
      }
      if (typeof i18nField.en === "string") {
        return i18nField.en;
      }
      const first = Object.values(i18nField).find((value) => typeof value === "string");
      if (first) {
        return first;
      }
    }

    const fallback = item?.[field];
    return typeof fallback === "string" ? fallback : "";
  }

  function getUiLabel(key) {
    const labels = {
      noResults: {
        en: "No result to display",
        es: "No hay resultados para mostrar",
        ca: "No hi ha resultats per mostrar"
      },
      resultsTitle: {
        en: "Results",
        es: "Resultados",
        ca: "Resultats"
      },
      untitledObject: {
        en: "Untitled object",
        es: "Objeto sin titulo",
        ca: "Objecte sense titol"
      },
      objectImage: {
        en: "Object image",
        es: "Imagen del objeto",
        ca: "Imatge de l'objecte"
      },
      inventory: {
        en: "Inventory",
        es: "Inventario",
        ca: "Inventari"
      },
      collection: {
        en: "Collection",
        es: "Coleccion",
        ca: "Colleccio"
      },
      site: {
        en: "Site",
        es: "Yacimiento",
        ca: "Jaciment"
      },
      type: {
        en: "Type",
        es: "Tipo",
        ca: "Tipus"
      },
      creationDate: {
        en: "Creation date",
        es: "Fecha de creacion",
        ca: "Data de creacio"
      },
      consultAction: {
        en: "consult",
        es: "consult",
        ca: "consult"
      }
    };
    const values = labels[key];
    if (!values) {
      return key;
    }
    const lang = document.documentElement.lang || "en";
    return values[lang] || values.en;
  }

  function isValidMockItem(item) {
    if (!item || typeof item !== "object") {
      return false;
    }

    const hasValidCollection = typeof item.collections === "string" && allowedCollections.has(item.collections);
    const hasValidSite = typeof item.sites === "string" && allowedSites.has(item.sites);
    const hasValidType = typeof item.type === "string" && allowedTypes.has(item.type);
    const hasValidCreationDate = Number.isFinite(Number(item.creationDate));

    return hasValidCollection && hasValidSite && hasValidType && hasValidCreationDate;
  }

  function slugify(value) {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function escapeHtml(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttribute(value) {
    return value.replace(/\"/g, "&quot;");
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === "function") {
      return window.CSS.escape(value);
    }

    return value.replace(/(["'\\])/g, "\\$1");
  }
})();
