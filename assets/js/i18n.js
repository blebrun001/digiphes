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
      "hero.cta": "learn more",
      "metrics.title": "Key Numbers",
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
      "roadmapVisual.phase1.body": "Recogida de informacion, encuesta y priorizacion de colecciones, seleccion de herramientas y presentacion de protocolos.",
      "roadmapVisual.phase2.title": "Despliegue",
      "roadmapVisual.phase2.body": "Implementacion inicial en colecciones piloto, ajustes por retorno de campo, formacion de tecnicos y despliegue progresivo.",
      "roadmapVisual.phase3.title": "Consolidacion",
      "roadmapVisual.phase3.body": "Estabilizacion de herramientas y protocolos, documentacion completa, informe de sintesis y hoja de ruta post-MdM.",
      "underHood.meta.title": "Hub IPHES-CERCA | Bajo el capó tecnico",
      "underHood.meta.description": "Pagina tecnica del proyecto: arquitectura RDF, cadena de evidencia, ontologias y MWE desplegado.",
      "underHood.intro.title": "Bajo el capo tecnico: entender la arquitectura en 5 minutos",
      "underHood.intro.p1": "El proyecto sigue un enfoque \"100% grafo\": los datos se organizan en RDF, se estructuran con CIDOC-CRM y sus extensiones, y se exploran desde una interfaz web conectada a un endpoint SPARQL.",
      "underHood.intro.p2": "Esta pagina sigue un recorrido pedagogico: del concepto a la implementacion, y termina con las restricciones operativas observadas en el MWE.",
      "underHood.rdf.title": "1) Por que usar una base de datos en grafo (RDF)?",
      "underHood.rdf.p1": "RDF almacena la informacion en tripletas sujeto-predicado-objeto. Este formato encaja de forma natural con CIDOC-CRM, donde las clases son nodos y las propiedades son relaciones explicitas.",
      "underHood.rdf.p2": "Beneficios principales: modelado semantico fino, interoperabilidad (ARIADNE, Europeana, EOSC) y posible inferencia automatica en algunos casos.",
      "underHood.rdf.p3": "Coste principal: mayor complejidad tecnica para los usos operativos del dia a dia en laboratorio.",
      "underHood.crm.title": "2) Como CIDOC-CRM se vuelve accionable por maquina",
      "underHood.crm.p1": "En la implementacion RDF, CIDOC-CRM funciona como vocabulario formal. Objetos, eventos y lugares son clases RDF; los enlaces CRM pasan a ser relaciones RDF entre clases.",
      "underHood.crm.p2": "Ejemplo simplificado: una herramienta litica, su unidad estratigrafica, la excavacion, la observacion traceologica y la digitalizacion son nodos. \"Found by\", \"consists of\", \"observes\" y \"documents\" son enlaces explicitos.",
      "underHood.crm.p3": "Resultado: RDF no introduce un modelo nuevo; materializa el razonamiento CRM como grafo procesable por maquina.",
      "underHood.evidence.title": "3) Cadena de evidencia (del terreno a la difusion)",
      "underHood.evidence.p1": "La cadena de evidencia describe la construccion progresiva de la informacion cientifica, desde el hecho material observable hasta la interpretacion y la difusion de datos.",
      "underHood.evidence.p2": "Cada paso intermedio permanece trazable: afirmaciones enlazadas, fechadas, atribuidas y revisables. No es una prueba unica, sino una secuencia documentada.",
      "underHood.mwe.title": "4) El MWE: arquitectura tecnica concreta",
      "underHood.mwe.p1": "El Minimum Working Example valida este enfoque de extremo a extremo con Apache Jena Fuseki (servidor SPARQL) y TDB2 (almacenamiento RDF persistente).",
      "underHood.mwe.p2": "Los datos se modelan en Turtle y se consultan con SPARQL. La infraestructura se contenedorizada con Docker Compose para un despliegue reproducible del triplestore y de la capa aplicativa.",
      "underHood.mwe.p3": "Importante: los datos del MWE son placeholders y no representan datos de produccion validados.",
      "underHood.semantic.title": "5) Capa semantica: ontologias, vocabularios y separacion de grafos",
      "underHood.semantic.p1": "El nucleo ontologico se apoya en CIDOC-CRM v7.1.3, CRMarchaeo y CRMsci, cargados en el triplestore en RDF/OWL.",
      "underHood.semantic.p2": "Recursos de referencia (UBERON, Darwin Core, Getty AAT, PeriodO, Neotoma, OME) se integran como grafos nombrados separados para preservar procedencia y versionado.",
      "underHood.semantic.p3": "La arquitectura distingue TBox (ontologias), SKOS (vocabularios controlados) y ABox (datos de instancia). Esta separacion facilita razonamiento, validacion SHACL y evolucion del modelo sin cambiar codigo de aplicacion.",
      "underHood.interface.title": "6) Interfaz y validacion",
      "underHood.interface.p1": "La interfaz en Node.js / Express actua como proxy hacia SPARQL y ofrece exploracion de entidades, consultas predefinidas y visualizaciones de grafo.",
      "underHood.interface.p2": "SHACL se usa para validar restricciones estructurales y semanticas en los grafos RDF.",
      "underHood.takeaways.title": "7) Ideas clave del MWE",
      "underHood.takeaways.p1": "1. La implementacion es exigente: requiere competencias especializadas y multiples componentes tecnicos.",
      "underHood.takeaways.p2": "2. El marco conceptual debe ser riguroso: modelo de referencia, ontologias y vocabularios deben definirse con precision.",
      "underHood.takeaways.p3": "3. La UX es mas dificil de disenar porque el enfoque holistico en grafo multiplica tipos de informacion, opciones y patrones de interaccion.",
      "staff.role.responsible": "Responsable",
      "staff.role.member": "Miembro",
      "footer.address": "2026 - IPHES-CERCA Zona Educacional, 4, Campus Sescelades URV (Edifici W3), 43007 Tarragona (Espana) · info@iphes.cat | (+34) 977 943 003",
      "footer.privacy": "Este sitio web no recopila datos y no utiliza cookies."
    },
    ca: {
      "meta.title": "Hub IPHES-CERCA | Digitalitzacio de col.leccions d'IPHES-CERCA",
      "meta.description": "Hub institucional del projecte de digitalitzacio de col.leccions d'IPHES-CERCA.",
      "header.title": "Digitalitzacio de col.leccions d'IPHES-CERCA",
      "header.baseline": "Una one-page de projecte per dirigir la transformacio digital de les col.leccions, compartir avanc i fer visibles els resultats.",
      "hero.cta": "learn more",
      "metrics.title": "Key Numbers",
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
      "roadmapVisual.phase1.body": "Recollida d'informacio, enquesta i prioritzacio de col.leccions, seleccio d'eines i presentacio de protocols.",
      "roadmapVisual.phase2.title": "Desplegament",
      "roadmapVisual.phase2.body": "Implementacio inicial en col.leccions pilot, ajustos per retorn de camp, formacio de tecnics i desplegament progressiu.",
      "roadmapVisual.phase3.title": "Consolidacio",
      "roadmapVisual.phase3.body": "Estabilitzacio d'eines i protocols, documentacio completa, informe de sintesi i full de ruta post-MdM.",
      "underHood.meta.title": "Hub IPHES-CERCA | Under the hood tecnic",
      "underHood.meta.description": "Pagina tecnica del projecte: arquitectura RDF, cadena d'evidencia, ontologies i MWE desplegat.",
      "underHood.intro.title": "Under the hood tecnic: entendre l'arquitectura en 5 minuts",
      "underHood.intro.p1": "El projecte segueix un enfocament \"100% graf\": les dades s'organitzen en RDF, s'estructuren amb CIDOC-CRM i les seves extensions, i s'exploren des d'una interfície web connectada a un endpoint SPARQL.",
      "underHood.intro.p2": "Aquesta pagina segueix un recorregut pedagogic: del concepte a la implementacio, i acaba amb les restriccions operatives observades al MWE.",
      "underHood.rdf.title": "1) Per que utilitzar una base de dades en graf (RDF)?",
      "underHood.rdf.p1": "RDF emmagatzema la informacio en tripletes subjecte-predicat-objecte. Aquest format encaixa de manera natural amb CIDOC-CRM, on les classes son nodes i les propietats son relacions explicites.",
      "underHood.rdf.p2": "Beneficis principals: modelatge semantic fi, interoperabilitat (ARIADNE, Europeana, EOSC) i possible inferencia automatica en alguns casos.",
      "underHood.rdf.p3": "Cost principal: una complexitat tecnica mes alta per als usos operatius del dia a dia al laboratori.",
      "underHood.crm.title": "2) Com CIDOC-CRM esdevé accionable per maquina",
      "underHood.crm.p1": "En la implementacio RDF, CIDOC-CRM funciona com a vocabulari formal. Objectes, esdeveniments i llocs son classes RDF; els enllacos CRM passen a ser relacions RDF entre classes.",
      "underHood.crm.p2": "Exemple simplificat: una eina litica, la seva unitat estratigrafica, l'excavacio, l'observacio traceologica i la digitalitzacio son nodes. \"Found by\", \"consists of\", \"observes\" i \"documents\" son enllacos explicits.",
      "underHood.crm.p3": "Resultat: RDF no introdueix un model nou; materialitza el raonament CRM com a graf processable per maquina.",
      "underHood.evidence.title": "3) Cadena d'evidencia (del camp a la difusio)",
      "underHood.evidence.p1": "La cadena d'evidencia descriu la construccio progressiva de la informacio cientifica, des del fet material observable fins a la interpretacio i la difusio de dades.",
      "underHood.evidence.p2": "Cada pas intermedi queda tracable: afirmacions enllacades, datades, atribuïdes i revisables. No es una prova unica, sino una sequencia documentada.",
      "underHood.mwe.title": "4) El MWE: arquitectura tecnica concreta",
      "underHood.mwe.p1": "El Minimum Working Example valida aquest enfocament d'extrem a extrem amb Apache Jena Fuseki (servidor SPARQL) i TDB2 (emmagatzematge RDF persistent).",
      "underHood.mwe.p2": "Les dades es modelen en Turtle i es consulten amb SPARQL. La infraestructura es contenidoritza amb Docker Compose per a un desplegament reproduïble del triplestore i de la capa aplicativa.",
      "underHood.mwe.p3": "Important: les dades del MWE son placeholders i no representen dades de produccio validades.",
      "underHood.semantic.title": "5) Capa semantica: ontologies, vocabularis i separacio de grafos",
      "underHood.semantic.p1": "El nucli ontologic es basa en CIDOC-CRM v7.1.3, CRMarchaeo i CRMsci, carregats al triplestore en RDF/OWL.",
      "underHood.semantic.p2": "Recursos de referencia (UBERON, Darwin Core, Getty AAT, PeriodO, Neotoma, OME) s'integren com a grafos anomenats separats per preservar procedencia i versionat.",
      "underHood.semantic.p3": "L'arquitectura distingeix TBox (ontologies), SKOS (vocabularis controlats) i ABox (dades d'instancia). Aquesta separacio facilita raonament, validacio SHACL i evolucio del model sense canviar codi d'aplicacio.",
      "underHood.interface.title": "6) Interficie i validacio",
      "underHood.interface.p1": "La interficie en Node.js / Express actua com a proxy cap a SPARQL i ofereix exploracio d'entitats, consultes predefinides i visualitzacions de graf.",
      "underHood.interface.p2": "SHACL s'utilitza per validar restriccions estructurals i semantiques als grafos RDF.",
      "underHood.takeaways.title": "7) Idees clau del MWE",
      "underHood.takeaways.p1": "1. La implementacio es exigent: requereix competencies especialitzades i multiples components tecnics.",
      "underHood.takeaways.p2": "2. El marc conceptual ha de ser rigoros: model de referencia, ontologies i vocabularis s'han de definir amb precisio.",
      "underHood.takeaways.p3": "3. L'UX es mes dificil de dissenyar perque l'enfocament holistic en graf multiplica tipus d'informacio, opcions i patrons d'interaccio.",
      "staff.role.responsible": "Responsable",
      "staff.role.member": "Membre",
      "footer.address": "2026 - IPHES-CERCA Zona Educacional, 4, Campus Sescelades URV (Edifici W3), 43007 Tarragona (Espanya) · info@iphes.cat | (+34) 977 943 003",
      "footer.privacy": "Aquest lloc web no recopila dades i no utilitza cookies."
    },
    en: {
      "meta.title": "Hub IPHES-CERCA | IPHES-CERCA Collections Digitization",
      "meta.description": "Institutional hub for the IPHES-CERCA collections digitization project.",
      "header.title": "IPHES-CERCA Collections Digitization",
      "header.baseline": "Discover how IPHES-CERCA is digitizing its collections through the Maria de Maeztu 2025-2029 project led by the laboratory.",
      "hero.cta": "learn more",
      "metrics.title": "Key Numbers",
      "metrics.body": "",
      "metrics.card1.value": "3 years",
      "metrics.card1.label": "Planning horizon",
      "metrics.card2.value": "15 Collections",
      "metrics.card2.label": "Archaeological, reference, experimental",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Unified access point",
      "collections.title": "Collections Overview",
      "collections.desc": "Temporary placeholder description for this collection.",
      "collections.access": "Access",
      "collections.requestSubject": "Collection access request",
      "hood.title": "Under the Hood",
      "hood.body": "Collections digitization relies on advanced data management solutions and infrastructure technologies. To learn more, clic the button below.",
      "hood.cta": "learn more",
      "roadmapVisual.title": "Visual Roadmap",
      "roadmapVisual.body": "Phase-based infographic to quickly understand core project milestones.",
      "roadmapVisual.phase1.title": "Structuring",
      "roadmapVisual.phase1.body": "Information gathering, collection survey and prioritization, tool selection, and protocol presentation.",
      "roadmapVisual.phase2.title": "Deployment",
      "roadmapVisual.phase2.body": "Initial implementation on pilot collections, field-feedback adjustments, technician training, and progressive rollout.",
      "roadmapVisual.phase3.title": "Consolidation",
      "roadmapVisual.phase3.body": "Tool and protocol stabilization, full documentation, synthesis report, and post-MdM digitization roadmap.",
      "underHood.meta.title": "Hub IPHES-CERCA | Under the Hood",
      "underHood.meta.description": "Technical page of the project: RDF architecture, chain of evidence, ontologies, and deployed MWE.",
      "underHood.intro.title": "Under the hood: understand the architecture in 5 minutes",
      "underHood.intro.p1": "The project follows a \"100% graph\" approach: data are organized in RDF, structured with CIDOC-CRM and its extensions, then explored through a web interface connected to a SPARQL endpoint.",
      "underHood.intro.p2": "This page follows a pedagogical path: from concept to implementation, ending with practical constraints observed in the MWE.",
      "underHood.rdf.title": "1) Why use a graph database (RDF)?",
      "underHood.rdf.p1": "RDF stores information as subject-predicate-object triples. This format aligns naturally with CIDOC-CRM, where classes become nodes and properties become explicit relations.",
      "underHood.rdf.p2": "Main benefits: fine-grained semantic modeling, interoperability (ARIADNE, Europeana, EOSC), and possible automatic inference in some cases.",
      "underHood.rdf.p3": "Main tradeoff: higher technical complexity for day-to-day laboratory operations.",
      "underHood.crm.title": "2) How CIDOC-CRM becomes machine-actionable",
      "underHood.crm.p1": "In RDF implementation, CIDOC-CRM acts as a formal vocabulary. Objects, events, and places are RDF classes; CRM links become RDF relations between these classes.",
      "underHood.crm.p2": "Simplified example: a lithic tool, its stratigraphic unit, excavation, traceological observation, and digitization activity become nodes. \"Found by\", \"consists of\", \"observes\", and \"documents\" become explicit links.",
      "underHood.crm.p3": "Result: RDF does not introduce a competing model; it materializes CRM reasoning as a machine-processable graph.",
      "underHood.evidence.title": "3) Chain of evidence (from field to dissemination)",
      "underHood.evidence.p1": "The chain of evidence describes the progressive construction of scientific information, from observable material fact to interpretation and published data.",
      "underHood.evidence.p2": "Each intermediate step remains traceable: linked, dated, attributed, and revisable assertions. It is not a single definitive proof, but a documented sequence.",
      "underHood.mwe.title": "4) The MWE: concrete technical architecture",
      "underHood.mwe.p1": "The Minimum Working Example validates this end-to-end approach with Apache Jena Fuseki (SPARQL server) and TDB2 (persistent RDF storage).",
      "underHood.mwe.p2": "Data are modeled in Turtle and queried with SPARQL. Infrastructure is containerized with Docker Compose for reproducible deployment of both triplestore and application layer.",
      "underHood.mwe.p3": "Important: MWE data are placeholders and do not represent validated production data.",
      "underHood.semantic.title": "5) Semantic layer: ontologies, vocabularies, and graph separation",
      "underHood.semantic.p1": "The ontological core is based on CIDOC-CRM v7.1.3, CRMarchaeo, and CRMsci, loaded into the triplestore in RDF/OWL.",
      "underHood.semantic.p2": "Reference resources (UBERON, Darwin Core, Getty AAT, PeriodO, Neotoma, OME) are integrated as separate named graphs to preserve provenance and versioning.",
      "underHood.semantic.p3": "The architecture distinguishes TBox (ontologies), SKOS (controlled vocabularies), and ABox (instance data). This separation supports reasoning, SHACL validation, and model evolution without app code changes.",
      "underHood.interface.title": "6) Interface and validation",
      "underHood.interface.p1": "The Node.js / Express interface acts as a proxy to SPARQL and provides entity exploration, predefined queries, and graph visualizations.",
      "underHood.interface.p2": "SHACL is used to validate structural and semantic constraints in RDF graphs.",
      "underHood.takeaways.title": "7) Key takeaways from the MWE",
      "underHood.takeaways.p1": "1. Implementation is demanding: it requires specialized skills and multiple technical components.",
      "underHood.takeaways.p2": "2. Conceptual framing must be rigorous: reference model, ontologies, and vocabularies must be precisely defined.",
      "underHood.takeaways.p3": "3. UX is harder to design, because a holistic graph approach increases information types, options, and interaction patterns.",
      "staff.role.responsible": "Lead",
      "staff.role.member": "Member",
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
    const pageKey = document.body?.dataset.i18nPage;
    const scopedMetaTitle = pageKey ? t(`${pageKey}.meta.title`, safeLang) : null;
    const scopedMetaDescription = pageKey ? t(`${pageKey}.meta.description`, safeLang) : null;
    const metaDescription = document.querySelector("meta[name='description']");

    document.documentElement.lang = safeLang;
    document.title = scopedMetaTitle || t("meta.title", safeLang);
    if (metaDescription) {
      metaDescription.setAttribute("content", scopedMetaDescription || t("meta.description", safeLang));
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
    // Intentionally no-op: only COR-IPHES access should be interactive.
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
