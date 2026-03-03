(() => {
  const filterRoot = document.querySelector("[data-research-filters]");
  const activeFiltersRoot = document.querySelector("[data-active-filters]");

  if (!filterRoot || !activeFiltersRoot) {
    return;
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

  const optionsByType = {
    collections,
    sites
  };

  const labelsByType = {
    collections: "Collection",
    sites: "Site"
  };

  const selectedFilters = {
    collections: new Set(),
    sites: new Set()
  };

  const groups = Array.from(filterRoot.querySelectorAll("[data-filter-group]"));

  groups.forEach((group) => {
    const type = group.getAttribute("data-filter-group");
    const list = group.querySelector(`[data-filter-options="${type}"]`);
    const toggle = group.querySelector("[data-filter-toggle]");
    const values = optionsByType[type] || [];

    if (!list || !toggle) {
      return;
    }

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

    toggle.addEventListener("click", () => {
      const isOpen = group.classList.contains("is-open");
      closeAllGroups();
      if (!isOpen) {
        group.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

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

  function closeAllGroups() {
    groups.forEach((group) => {
      group.classList.remove("is-open");
      const toggle = group.querySelector("[data-filter-toggle]");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function renderActiveFilters() {
    activeFiltersRoot.innerHTML = "";

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
