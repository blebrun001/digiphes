(() => {
  const roadmapNode = document.getElementById("roadmap-content");
  const newsNode = document.getElementById("news-content");
  const dynamicSections = [
    { node: roadmapNode, type: "roadmap" },
    { node: newsNode, type: "news" }
  ].filter((entry) => entry.node);

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function parseInline(text) {
    const escaped = escapeHtml(text);
    return escaped.replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  }

  function parseMarkdown(markdown) {
    const lines = markdown.split(/\r?\n/);
    const chunks = [];

    let paragraphBuffer = [];
    let listBuffer = [];

    function flushParagraph() {
      if (paragraphBuffer.length) {
        chunks.push(`<p>${parseInline(paragraphBuffer.join(" "))}</p>`);
        paragraphBuffer = [];
      }
    }

    function flushList() {
      if (listBuffer.length) {
        chunks.push(`<ul>${listBuffer.map((item) => `<li>${parseInline(item)}</li>`).join("")}</ul>`);
        listBuffer = [];
      }
    }

    for (const rawLine of lines) {
      const line = rawLine.trim();

      if (!line) {
        flushParagraph();
        flushList();
        continue;
      }

      if (line.startsWith("### ")) {
        flushParagraph();
        flushList();
        chunks.push(`<h3>${parseInline(line.slice(4))}</h3>`);
        continue;
      }

      if (line.startsWith("## ")) {
        flushParagraph();
        flushList();
        chunks.push(`<h2>${parseInline(line.slice(3))}</h2>`);
        continue;
      }

      if (line.startsWith("# ")) {
        flushParagraph();
        flushList();
        chunks.push(`<h1>${parseInline(line.slice(2))}</h1>`);
        continue;
      }

      if (line.startsWith("- ")) {
        flushParagraph();
        listBuffer.push(line.slice(2));
        continue;
      }

      paragraphBuffer.push(line);
    }

    flushParagraph();
    flushList();

    return chunks.join("\n");
  }

  async function fetchMarkdown(path) {
    const response = await fetch(path, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}: ${response.status}`);
    }
    return response.text();
  }

  function showFallback(node) {
    node.innerHTML = `<p class="muted">${window.I18n.t("content.comingSoon")}</p>`;
  }

  async function hydrateNode(node, lang, type) {
    const preferredPath = `content/${lang}/${type}.md`;
    const fallbackPath = `content/${window.I18n.DEFAULT_LANG}/${type}.md`;

    node.innerHTML = `<p class="muted">${window.I18n.t("content.loading", lang)}</p>`;

    try {
      const preferredContent = await fetchMarkdown(preferredPath);
      node.innerHTML = parseMarkdown(preferredContent);
      return;
    } catch (preferredError) {
      if (lang === window.I18n.DEFAULT_LANG) {
        showFallback(node);
        return;
      }
    }

    try {
      const fallbackContent = await fetchMarkdown(fallbackPath);
      node.innerHTML = parseMarkdown(fallbackContent);
    } catch (fallbackError) {
      showFallback(node);
    }
  }

  async function refreshDynamicSections(lang) {
    await Promise.all(dynamicSections.map((entry) => hydrateNode(entry.node, lang, entry.type)));
  }

  function init() {
    if (!dynamicSections.length) {
      return;
    }

    const initialLang = window.I18n.getStoredLanguage();
    refreshDynamicSections(initialLang);

    document.addEventListener("language:changed", (event) => {
      const nextLang = event.detail?.lang || window.I18n.DEFAULT_LANG;
      refreshDynamicSections(nextLang);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
