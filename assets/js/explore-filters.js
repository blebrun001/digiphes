(() => {
  const filterRoot = document.querySelector("[data-research-filters]");
  const activeFiltersRoot = document.querySelector("[data-active-filters]");
  const searchForm = document.querySelector(".research-search-form");
  const dateMinInput = document.querySelector("[data-date-min]");
  const dateMaxInput = document.querySelector("[data-date-max]");
  const dateMinLabel = document.querySelector("[data-date-min-label]");
  const dateMaxLabel = document.querySelector("[data-date-max-label]");
  const dateSlider = document.querySelector("[data-date-slider]");

  if (!filterRoot || !activeFiltersRoot) {
    return;
  }

  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
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

  window.addEventListener("resize", () => {
    const openGroup = groups.find((group) => group.classList.contains("is-open"));
    if (openGroup) {
      positionPanelWithinViewport(openGroup);
    }
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
