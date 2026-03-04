(() => {
  const root = document.querySelector("[data-visualize-graph]");
  if (!root) {
    return;
  }

  const d3Ref = window.d3;
  const svgElement = root.querySelector("[data-graph-svg]");
  const detailPanel = root.querySelector("[data-graph-detail]");
  const legendRoot = root.querySelector("[data-graph-legend]");
  const graphCanvas = root.querySelector(".visualize-graph-canvas");
  const fullscreenButton = root.querySelector("[data-graph-fullscreen]");
  const fullscreenLabel = root.querySelector("[data-graph-fullscreen-label]");

  if (!d3Ref || !(svgElement instanceof SVGElement) || !(detailPanel instanceof HTMLElement)) {
    if (detailPanel instanceof HTMLElement) {
      detailPanel.innerHTML = "<h3>Details</h3><p>Graph rendering is unavailable because D3 could not be loaded.</p>";
    }
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

  const nodes = [];
  const links = [];
  const nodeById = new Map();

  const sharedDomain = "shared";

  function slugify(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function addNode(node) {
    if (nodeById.has(node.id)) {
      return;
    }
    const fullNode = {
      ...node,
      uri: node.uri || `https://data.iphes.example/id/${node.id}`,
      layer: node.layer || "ABox",
      domain: node.domain || sharedDomain,
      crmClass: node.crmClass || "",
      nodeType: node.nodeType || "object"
    };
    nodes.push(fullNode);
    nodeById.set(fullNode.id, fullNode);
  }

  function addLink(link) {
    links.push({
      source: link.source,
      target: link.target,
      predicate: link.predicate,
      predicateLabel: link.predicateLabel || link.predicate,
      standard: link.standard || "ABox"
    });
  }

  function getLinkEndpointId(endpoint) {
    if (typeof endpoint === "string") {
      return endpoint;
    }
    if (endpoint && typeof endpoint === "object" && "id" in endpoint) {
      return endpoint.id;
    }
    return String(endpoint ?? "");
  }

  addNode({
    id: "master-collection",
    label: "IPHES-CERCA holdings",
    nodeType: "taxonomy",
    layer: "ABox",
    domain: sharedDomain,
    crmClass: "E78",
    uri: "https://data.iphes.example/id/collection/master"
  });
  addNode({
    id: "study-area",
    label: "IPHES-CERCA archaeological study area",
    nodeType: "taxonomy",
    layer: "ABox",
    domain: sharedDomain,
    crmClass: "E53",
    uri: "https://data.iphes.example/id/place/study-area"
  });

  collections.forEach((name) => {
    const id = `collection-${slugify(name)}`;
    addNode({
      id,
      label: name,
      nodeType: "collection",
      layer: "ABox",
      domain: sharedDomain,
      crmClass: "E78",
      uri: `https://data.iphes.example/id/collection/${slugify(name)}`
    });
    addLink({
      source: "master-collection",
      target: id,
      predicate: "P46_is_composed_of",
      predicateLabel: "P46 is composed of",
      standard: "CIDOC-CRM"
    });
  });

  sites.forEach((name) => {
    const id = `site-${slugify(name)}`;
    addNode({
      id,
      label: name,
      nodeType: "site",
      layer: "ABox",
      domain: sharedDomain,
      crmClass: "E53",
      uri: `https://data.iphes.example/id/site/${slugify(name)}`
    });
    addLink({
      source: id,
      target: "study-area",
      predicate: "P89_falls_within",
      predicateLabel: "P89 falls within",
      standard: "CIDOC-CRM"
    });
  });

  addLink({ source: "master-collection", target: "class-e78", predicate: "rdf:type", predicateLabel: "instance of", standard: "RDF" });
  addLink({ source: "study-area", target: "class-e53", predicate: "rdf:type", predicateLabel: "instance of", standard: "RDF" });

  collections.forEach((name) => {
    addLink({
      source: `collection-${slugify(name)}`,
      target: "class-e78",
      predicate: "rdf:type",
      predicateLabel: "instance of",
      standard: "RDF"
    });
  });

  sites.forEach((name) => {
    addLink({
      source: `site-${slugify(name)}`,
      target: "class-e53",
      predicate: "rdf:type",
      predicateLabel: "instance of",
      standard: "RDF"
    });
  });

  const classNodes = [
    ["class-e22", "E22 Human-Made Object"],
    ["class-e24", "E24 Physical Human-Made Thing"],
    ["class-e57", "E57 Material"],
    ["class-e55", "E55 Type"],
    ["class-e42", "E42 Identifier"],
    ["class-e54", "E54 Dimension"],
    ["class-e12", "E12 Production"],
    ["class-e52", "E52 Time-Span"],
    ["class-e53", "E53 Place"],
    ["class-e78", "E78 Curated Holding"],
    ["class-e7", "E7 Activity"],
    ["class-e36", "E36 Visual Item"],
    ["class-e31", "E31 Document"],
    ["class-e39", "E39 Actor"],
    ["class-a9", "A9 Archaeological Excavation"],
    ["class-a8", "A8 Stratigraphic Unit"],
    ["class-a7", "A7 Embedding"],
    ["class-s4", "S4 Observation"],
    ["class-s15", "S15 Observable Entity"],
    ["class-s9", "S9 Property Type"]
  ];

  classNodes.forEach(([id, label]) => {
    addNode({ id, label, nodeType: "tbox", layer: "TBox", domain: sharedDomain, uri: `https://data.iphes.example/ontology/${id}` });
  });

  addNode({ id: "vocab-aat", label: "Getty AAT", nodeType: "vocabulary", layer: "Vocabulary", domain: sharedDomain, uri: "http://vocab.getty.edu/aat/" });
  addNode({ id: "vocab-periodo", label: "PeriodO", nodeType: "vocabulary", layer: "Vocabulary", domain: sharedDomain, uri: "http://n2t.net/ark:/99152/p0" });
  addNode({ id: "vocab-uberon", label: "UBERON", nodeType: "vocabulary", layer: "Vocabulary", domain: sharedDomain, uri: "http://purl.obolibrary.org/obo/uberon.owl" });
  addNode({ id: "vocab-dwc", label: "Darwin Core", nodeType: "vocabulary", layer: "Vocabulary", domain: sharedDomain, uri: "http://rs.tdwg.org/dwc/terms/" });

  addNode({ id: "aat-scraper", label: "AAT: scraper", nodeType: "vocabulary", layer: "Vocabulary", domain: sharedDomain, crmClass: "skos:Concept", uri: "http://vocab.getty.edu/aat/300011051" });
  addNode({ id: "aat-photogrammetry", label: "AAT: photogrammetry", nodeType: "vocabulary", layer: "Vocabulary", domain: sharedDomain, crmClass: "skos:Concept", uri: "http://vocab.getty.edu/aat/300054225" });
  addNode({ id: "periodo-middle-paleolithic", label: "PeriodO: Middle Paleolithic", nodeType: "vocabulary", layer: "Vocabulary", domain: sharedDomain, crmClass: "skos:Concept", uri: "http://n2t.net/ark:/99152/p0rrv67" });
  addNode({ id: "uberon-mandible", label: "UBERON: mandible", nodeType: "vocabulary", layer: "Vocabulary", crmClass: "owl:Class", domain: sharedDomain, uri: "http://purl.obolibrary.org/obo/UBERON_0001684" });
  addNode({ id: "dwc-occurrence", label: "Darwin Core: Occurrence", nodeType: "vocabulary", layer: "Vocabulary", crmClass: "rdfs:Class", domain: sharedDomain, uri: "http://rs.tdwg.org/dwc/terms/Occurrence" });

  addLink({ source: "aat-scraper", target: "vocab-aat", predicate: "inScheme", predicateLabel: "in SKOS scheme", standard: "SKOS" });
  addLink({ source: "aat-photogrammetry", target: "vocab-aat", predicate: "inScheme", predicateLabel: "in SKOS scheme", standard: "SKOS" });
  addLink({ source: "periodo-middle-paleolithic", target: "vocab-periodo", predicate: "inScheme", predicateLabel: "in SKOS scheme", standard: "SKOS" });
  addLink({ source: "uberon-mandible", target: "vocab-uberon", predicate: "definedIn", predicateLabel: "defined in ontology", standard: "OWL" });
  addLink({ source: "dwc-occurrence", target: "vocab-dwc", predicate: "definedIn", predicateLabel: "defined in vocabulary", standard: "RDFS" });

  const actors = [
    ["actor-ana-ruiz", "Ana Ruiz"],
    ["actor-marc-vidal", "Marc Vidal"],
    ["actor-lea-ben-salah", "Lea Ben Salah"]
  ];

  actors.forEach(([id, label]) => {
    addNode({ id, label, nodeType: "actor", layer: "ABox", domain: sharedDomain, crmClass: "E39", uri: `https://data.iphes.example/id/actor/${slugify(label)}` });
    addLink({ source: id, target: "class-e39", predicate: "rdf:type", predicateLabel: "instance of", standard: "RDF" });
  });

  addNode({
    id: "obj-lit-001",
    label: "OBJ-LIT-001 Flint scraper",
    nodeType: "object",
    domain: "lithic",
    crmClass: "E22/E24",
    uri: "https://data.iphes.example/id/lithics/OBJ-LIT-001"
  });
  addNode({ id: "id-lit-001", label: "LIT-ROM-032", nodeType: "identifier", domain: "lithic", crmClass: "E42", uri: "https://data.iphes.example/id/identifier/LIT-ROM-032" });
  addNode({ id: "mat-flint", label: "Flint", nodeType: "material", domain: "lithic", crmClass: "E57", uri: "https://data.iphes.example/id/material/flint" });
  addNode({ id: "dim-lit-001", label: "62x31x14 mm", nodeType: "dimension", domain: "lithic", crmClass: "E54", uri: "https://data.iphes.example/id/dimension/OBJ-LIT-001" });
  addNode({ id: "a8-lit-su", label: "SU-17", nodeType: "context", domain: "lithic", crmClass: "A8", uri: "https://data.iphes.example/id/context/SU-17" });
  addNode({ id: "a9-lit-exc", label: "Romani 2023 excavation", nodeType: "event", domain: "lithic", crmClass: "A9", uri: "https://data.iphes.example/id/excavation/romani-2023" });
  addNode({ id: "a7-lit-embedding", label: "Embedding in level Q", nodeType: "context", domain: "lithic", crmClass: "A7", uri: "https://data.iphes.example/id/embedding/OBJ-LIT-001" });
  addNode({ id: "place-romani", label: "Abric Romani sector C", nodeType: "context", domain: "lithic", crmClass: "E53", uri: "https://data.iphes.example/id/place/abric-romani-sector-c" });
  addNode({ id: "prod-lit-001", label: "Knapping event (hypothesis)", nodeType: "event", domain: "lithic", crmClass: "E12", uri: "https://data.iphes.example/id/production/lithic-001" });
  addNode({ id: "time-lit", label: "MIS 3 (ca. 55-40 ka)", nodeType: "time", domain: "lithic", crmClass: "E52", uri: "https://data.iphes.example/id/time/mis3" });
  addNode({ id: "tech-levallois", label: "Levallois reduction", nodeType: "technique", domain: "lithic", crmClass: "E55", uri: "https://data.iphes.example/id/technique/levallois" });
  addNode({ id: "s4-lit-trace", label: "Traceology observation", nodeType: "observation", domain: "lithic", crmClass: "S4", uri: "https://data.iphes.example/id/observation/trace-001" });
  addNode({ id: "s15-lit-entity", label: "Observed edge surface", nodeType: "observation", domain: "lithic", crmClass: "S15", uri: "https://data.iphes.example/id/observable/edge-surface" });
  addNode({ id: "s9-usewear", label: "Use-wear pattern", nodeType: "observation", domain: "lithic", crmClass: "S9", uri: "https://data.iphes.example/id/property-type/usewear" });
  addNode({ id: "type-hide-working", label: "Hide working", nodeType: "type", domain: "lithic", crmClass: "E55", uri: "https://data.iphes.example/id/type/hide-working" });
  addNode({ id: "e7-3d-lit", label: "3D digitization activity", nodeType: "digital", domain: "lithic", crmClass: "E7", uri: "https://data.iphes.example/id/activity/3d-lit-001" });
  addNode({ id: "e36-lit-model", label: "OBJ-LIT-001 mesh", nodeType: "digital", domain: "lithic", crmClass: "E36", uri: "https://data.iphes.example/id/visual/OBJ-LIT-001-model" });
  addNode({ id: "e31-lit-doc", label: "OBJ-LIT-001 archive package", nodeType: "digital", domain: "lithic", crmClass: "E31", uri: "https://data.iphes.example/id/document/OBJ-LIT-001-archive" });

  addNode({ id: "obj-ost-001", label: "OBJ-OST-001 Cervid mandible fragment", nodeType: "object", domain: "osteology", crmClass: "E24", uri: "https://data.iphes.example/id/osteology/OBJ-OST-001" });
  addNode({ id: "measure-ost-001", label: "Measurement activity", nodeType: "event", domain: "osteology", crmClass: "S4", uri: "https://data.iphes.example/id/activity/measure-ost-001" });
  addNode({ id: "e31-ost-report", label: "Metric report", nodeType: "digital", domain: "osteology", crmClass: "E31", uri: "https://data.iphes.example/id/document/OST-001-report" });

  addNode({ id: "obj-pal-001", label: "OBJ-PAL-001 Pollen sample", nodeType: "object", domain: "palynology", crmClass: "E24", uri: "https://data.iphes.example/id/palynology/OBJ-PAL-001" });
  addNode({ id: "sample-pal-001", label: "Sample taking activity", nodeType: "event", domain: "palynology", crmClass: "S4", uri: "https://data.iphes.example/id/activity/sample-pal-001" });
  addNode({ id: "e31-pal-slide", label: "Microscopy slide", nodeType: "digital", domain: "palynology", crmClass: "E31", uri: "https://data.iphes.example/id/document/PAL-001-slide" });

  const objectToCollection = [
    ["obj-lit-001", "collection-lithotheque-lithiphes"],
    ["obj-ost-001", "collection-zooarchaeology-cor-iphes"],
    ["obj-pal-001", "collection-palynology"]
  ];

  const objectToSite = [
    ["obj-lit-001", "site-abric-romani"],
    ["obj-ost-001", "site-atapuerca"],
    ["obj-pal-001", "site-cova-gran"]
  ];

  const autoClassTyping = [];
  const representedCollectionIds = new Set(objectToCollection.map(([, collectionId]) => collectionId));
  const fallbackMockSites = ["Abauntz", "Abric de la Consagració", "Camp dels Ninots", "Cova de Lazaret", "El Molí del Salt"];

  collections
    .map((name) => ({ name, collectionId: `collection-${slugify(name)}` }))
    .filter(({ collectionId }) => !representedCollectionIds.has(collectionId))
    .forEach(({ name, collectionId }, index) => {
      const idx = String(index + 1).padStart(3, "0");
      const objectId = `obj-mock-${idx}`;
      const identifierId = `id-mock-${idx}`;
      const activityId = `act-mock-${idx}`;
      const reportId = `doc-mock-${idx}`;
      const actorId = actors[index % actors.length][0];
      const siteId = `site-${slugify(fallbackMockSites[index % fallbackMockSites.length])}`;
      const collectionCode = name.replace(/\s*\(.+?\)\s*/g, "").replace(/[^A-Za-z]/g, "").toUpperCase().slice(0, 4) || "COLL";

      addNode({
        id: objectId,
        label: `OBJ-${collectionCode}-${idx} Placeholder item`,
        nodeType: "object",
        domain: sharedDomain,
        crmClass: "E24",
        uri: `https://data.iphes.example/id/mock/${objectId}`
      });
      addNode({
        id: identifierId,
        label: `MOCK-${collectionCode}-${idx}`,
        nodeType: "identifier",
        domain: sharedDomain,
        crmClass: "E42",
        uri: `https://data.iphes.example/id/identifier/mock-${idx}`
      });
      addNode({
        id: activityId,
        label: `Documentation activity (${name})`,
        nodeType: "event",
        domain: sharedDomain,
        crmClass: "E7",
        uri: `https://data.iphes.example/id/activity/mock-${idx}`
      });
      addNode({
        id: reportId,
        label: `Collection note ${idx}`,
        nodeType: "digital",
        domain: sharedDomain,
        crmClass: "E31",
        uri: `https://data.iphes.example/id/document/mock-${idx}`
      });

      objectToCollection.push([objectId, collectionId]);
      objectToSite.push([objectId, siteId]);

      addLink({ source: objectId, target: identifierId, predicate: "P48_has_preferred_identifier", predicateLabel: "P48 has preferred identifier", standard: "CIDOC-CRM" });
      addLink({ source: activityId, target: objectId, predicate: "P16_used_specific_object", predicateLabel: "P16 used specific object", standard: "CIDOC-CRM" });
      addLink({ source: activityId, target: reportId, predicate: "P94_has_created", predicateLabel: "P94 has created", standard: "CIDOC-CRM" });
      addLink({ source: activityId, target: actorId, predicate: "P14_carried_out_by", predicateLabel: "P14 carried out by", standard: "CIDOC-CRM" });

      autoClassTyping.push([objectId, "class-e24"], [identifierId, "class-e42"], [activityId, "class-e7"], [reportId, "class-e31"]);
    });

  objectToCollection.forEach(([objId, collectionId]) => {
    addLink({
      source: collectionId,
      target: objId,
      predicate: "P46_is_composed_of",
      predicateLabel: "P46 is composed of",
      standard: "CIDOC-CRM"
    });
  });

  objectToSite.forEach(([objId, siteId]) => {
    addLink({
      source: objId,
      target: siteId,
      predicate: "P53_has_former_or_current_location",
      predicateLabel: "P53 has former or current location",
      standard: "CIDOC-CRM"
    });
  });

  addLink({ source: "obj-lit-001", target: "id-lit-001", predicate: "P48_has_preferred_identifier", predicateLabel: "P48 has preferred identifier", standard: "CIDOC-CRM" });
  addLink({ source: "obj-lit-001", target: "aat-scraper", predicate: "P2_has_type", predicateLabel: "P2 has type", standard: "CIDOC-CRM" });
  addLink({ source: "obj-lit-001", target: "mat-flint", predicate: "P45_consists_of", predicateLabel: "P45 consists of", standard: "CIDOC-CRM" });
  addLink({ source: "obj-lit-001", target: "dim-lit-001", predicate: "P43_has_dimension", predicateLabel: "P43 has dimension", standard: "CIDOC-CRM" });

  addLink({ source: "obj-lit-001", target: "a9-lit-exc", predicate: "AP17_is_found_by", predicateLabel: "AP17 is found by", standard: "CRMarchaeo" });
  addLink({ source: "a8-lit-su", target: "obj-lit-001", predicate: "AP15_contains_remains_of", predicateLabel: "AP15 is or contains remains of", standard: "CRMarchaeo" });
  addLink({ source: "a8-lit-su", target: "a7-lit-embedding", predicate: "AP18_is_embedding_of", predicateLabel: "AP18 is embedding of", standard: "CRMarchaeo" });
  addLink({ source: "a9-lit-exc", target: "place-romani", predicate: "P7_took_place_at", predicateLabel: "P7 took place at", standard: "CIDOC-CRM" });
  addLink({ source: "place-romani", target: "site-abric-romani", predicate: "P89_falls_within", predicateLabel: "P89 falls within", standard: "CIDOC-CRM" });

  addLink({ source: "prod-lit-001", target: "obj-lit-001", predicate: "P108_has_produced", predicateLabel: "P108 has produced", standard: "CIDOC-CRM" });
  addLink({ source: "prod-lit-001", target: "tech-levallois", predicate: "P32_used_general_technique", predicateLabel: "P32 used general technique", standard: "CIDOC-CRM" });
  addLink({ source: "prod-lit-001", target: "time-lit", predicate: "P4_has_time_span", predicateLabel: "P4 has time-span", standard: "CIDOC-CRM" });
  addLink({ source: "time-lit", target: "periodo-middle-paleolithic", predicate: "P2_has_type", predicateLabel: "P2 has type", standard: "CIDOC-CRM" });

  addLink({ source: "s4-lit-trace", target: "s15-lit-entity", predicate: "O8_observed", predicateLabel: "O8 observed", standard: "CRMsci" });
  addLink({ source: "s4-lit-trace", target: "obj-lit-001", predicate: "P16_used_specific_object", predicateLabel: "P16 used specific object", standard: "CIDOC-CRM" });
  addLink({ source: "s4-lit-trace", target: "s9-usewear", predicate: "O9_observed_property_type", predicateLabel: "O9 observed property type", standard: "CRMsci" });
  addLink({ source: "s4-lit-trace", target: "type-hide-working", predicate: "O16_observed_value", predicateLabel: "O16 observed value", standard: "CRMsci" });

  addLink({ source: "e7-3d-lit", target: "obj-lit-001", predicate: "P16_used_specific_object", predicateLabel: "P16 used specific object", standard: "CIDOC-CRM" });
  addLink({ source: "e7-3d-lit", target: "e36-lit-model", predicate: "P94_has_created", predicateLabel: "P94 has created", standard: "CIDOC-CRM" });
  addLink({ source: "e31-lit-doc", target: "obj-lit-001", predicate: "P70_documents", predicateLabel: "P70 documents", standard: "CIDOC-CRM" });
  addLink({ source: "e7-3d-lit", target: "aat-photogrammetry", predicate: "P2_has_type", predicateLabel: "P2 has type", standard: "CIDOC-CRM" });

  addLink({ source: "measure-ost-001", target: "obj-ost-001", predicate: "P16_used_specific_object", predicateLabel: "P16 used specific object", standard: "CIDOC-CRM" });
  addLink({ source: "measure-ost-001", target: "e31-ost-report", predicate: "P94_has_created", predicateLabel: "P94 has created", standard: "CIDOC-CRM" });
  addLink({ source: "obj-ost-001", target: "uberon-mandible", predicate: "P2_has_type", predicateLabel: "P2 has type", standard: "CIDOC-CRM" });
  addLink({ source: "obj-ost-001", target: "dwc-occurrence", predicate: "P2_has_type", predicateLabel: "P2 has type", standard: "CIDOC-CRM" });

  addLink({ source: "sample-pal-001", target: "obj-pal-001", predicate: "P16_used_specific_object", predicateLabel: "P16 used specific object", standard: "CIDOC-CRM" });
  addLink({ source: "sample-pal-001", target: "e31-pal-slide", predicate: "P94_has_created", predicateLabel: "P94 has created", standard: "CIDOC-CRM" });
  addLink({ source: "obj-pal-001", target: "periodo-middle-paleolithic", predicate: "P2_has_type", predicateLabel: "P2 has type", standard: "CIDOC-CRM" });

  addLink({ source: "measure-ost-001", target: "actor-ana-ruiz", predicate: "P14_carried_out_by", predicateLabel: "P14 carried out by", standard: "CIDOC-CRM" });
  addLink({ source: "sample-pal-001", target: "actor-marc-vidal", predicate: "P14_carried_out_by", predicateLabel: "P14 carried out by", standard: "CIDOC-CRM" });
  addLink({ source: "e7-3d-lit", target: "actor-lea-ben-salah", predicate: "P14_carried_out_by", predicateLabel: "P14 carried out by", standard: "CIDOC-CRM" });

  const classTyping = [
    ["obj-lit-001", "class-e22"],
    ["obj-lit-001", "class-e24"],
    ["id-lit-001", "class-e42"],
    ["mat-flint", "class-e57"],
    ["dim-lit-001", "class-e54"],
    ["a9-lit-exc", "class-a9"],
    ["a8-lit-su", "class-a8"],
    ["a7-lit-embedding", "class-a7"],
    ["place-romani", "class-e53"],
    ["prod-lit-001", "class-e12"],
    ["time-lit", "class-e52"],
    ["tech-levallois", "class-e55"],
    ["s4-lit-trace", "class-s4"],
    ["s15-lit-entity", "class-s15"],
    ["s9-usewear", "class-s9"],
    ["type-hide-working", "class-e55"],
    ["e7-3d-lit", "class-e7"],
    ["e36-lit-model", "class-e36"],
    ["e31-lit-doc", "class-e31"],
    ["obj-ost-001", "class-e24"],
    ["measure-ost-001", "class-s4"],
    ["e31-ost-report", "class-e31"],
    ["obj-pal-001", "class-e24"],
    ["sample-pal-001", "class-s4"],
    ["e31-pal-slide", "class-e31"]
  ];

  classTyping.push(...autoClassTyping);

  classTyping.forEach(([instanceId, classId]) => {
    addLink({ source: instanceId, target: classId, predicate: "rdf:type", predicateLabel: "instance of", standard: "RDF" });
  });

  const neighborMap = new Map();
  nodes.forEach((node) => {
    neighborMap.set(node.id, new Set());
  });
  links.forEach((link) => {
    if (neighborMap.has(link.source) && neighborMap.has(link.target)) {
      neighborMap.get(link.source).add(link.target);
      neighborMap.get(link.target).add(link.source);
    }
  });

  const colorByType = {
    object: "#1f6fff",
    context: "#3f5f82",
    event: "#1f4e8f",
    observation: "#145ce3",
    digital: "#0f4cbc",
    actor: "#2f74d6",
    vocabulary: "#45556b",
    taxonomy: "#556579",
    collection: "#6b7280",
    site: "#7d8796",
    tbox: "#111827",
    identifier: "#2b66bd",
    material: "#2b66bd",
    dimension: "#2b66bd",
    type: "#145ce3",
    technique: "#1f4e8f",
    time: "#1f4e8f"
  };

  const linkColorByStandard = {
    "CIDOC-CRM": "#7e8da5",
    CRMarchaeo: "#627793",
    CRMsci: "#4c678f",
    RDF: "#9aa7bb",
    RDFS: "#9aa7bb",
    SKOS: "#7f90a8",
    OWL: "#6f829d",
    ABox: "#9aa7bb"
  };

  const legendItems = [
    ["object", "Object"],
    ["context", "Context"],
    ["event", "Event"],
    ["observation", "Observation"],
    ["digital", "Digital"],
    ["actor", "Actor"],
    ["vocabulary", "Vocabulary"],
    ["taxonomy", "Taxonomy"]
  ];

  if (legendRoot instanceof HTMLElement) {
    legendRoot.innerHTML = legendItems
      .map(([key, label]) => `<span class="legend-item"><span class="legend-swatch" style="background:${colorByType[key]}"></span>${label}</span>`)
      .join("");
  }

  const state = {
    domain: "all",
    layer: "all",
    actor: "all",
    collection: "all",
    site: "all",
    relation: "all",
    linkLevel: "2",
    showCollections: true,
    showSites: true,
    focusNodeId: null,
    selectedNodeId: null,
    selectedEdge: null
  };

  const filterControls = {
    domain: root.querySelector("#graph-domain-filter"),
    layer: root.querySelector("#graph-layer-filter"),
    actor: root.querySelector("#graph-actor-filter"),
    collection: root.querySelector("#graph-collection-filter"),
    site: root.querySelector("#graph-site-filter"),
    relation: root.querySelector("#graph-relation-filter"),
    linkLevel: root.querySelector("#graph-link-level-filter")
  };

  function setSelectOptions(selectElement, options, allLabel) {
    if (!(selectElement instanceof HTMLSelectElement)) {
      return;
    }
    const previousValue = selectElement.value || "all";
    const validValues = new Set(["all", ...options.map((option) => option.value)]);
    const nextValue = validValues.has(previousValue) ? previousValue : "all";

    selectElement.innerHTML = "";
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = allLabel;
    selectElement.append(allOption);

    options.forEach((option) => {
      const entry = document.createElement("option");
      entry.value = option.value;
      entry.textContent = option.label;
      selectElement.append(entry);
    });

    selectElement.value = nextValue;
  }

  function formatDomainLabel(domain) {
    if (domain === sharedDomain) {
      return "Cross-collection";
    }
    return domain
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  function uniqueSorted(values) {
    return [...new Set(values)].sort((a, b) => a.localeCompare(b));
  }

  function populateFilterOptions() {
    const domainOptions = uniqueSorted(nodes.map((node) => node.domain)).map((domain) => ({
      value: domain,
      label: formatDomainLabel(domain)
    }));

    const layerOptions = uniqueSorted(nodes.map((node) => node.layer)).map((layer) => ({
      value: layer,
      label: layer
    }));

    const actorOptions = nodes
      .filter((node) => node.nodeType === "actor")
      .map((node) => ({ value: node.id, label: node.label }))
      .sort((a, b) => a.label.localeCompare(b.label));

    const collectionOptions = nodes
      .filter((node) => node.nodeType === "collection")
      .map((node) => ({ value: node.id, label: node.label }))
      .sort((a, b) => a.label.localeCompare(b.label));

    const siteOptions = nodes
      .filter((node) => node.nodeType === "site" || (node.nodeType === "event" && node.crmClass === "A9"))
      .map((node) => ({
        value: node.id,
        label: node.nodeType === "site" ? `Site: ${node.label}` : `Campaign: ${node.label}`
      }))
      .sort((a, b) => a.label.localeCompare(b.label));

    const relationOptionByPredicate = new Map();
    links.forEach((link) => {
      if (!relationOptionByPredicate.has(link.predicate)) {
        relationOptionByPredicate.set(link.predicate, {
          value: link.predicate,
          label: `${link.predicateLabel} (${link.predicate})`
        });
      }
    });
    const relationOptions = [...relationOptionByPredicate.values()].sort((a, b) => a.label.localeCompare(b.label));

    setSelectOptions(filterControls.domain, domainOptions, "All domains");
    setSelectOptions(filterControls.layer, layerOptions, "All layers");
    setSelectOptions(filterControls.actor, actorOptions, "All actors");
    setSelectOptions(filterControls.collection, collectionOptions, "All collections");
    setSelectOptions(filterControls.site, siteOptions, "All sites and campaigns");
    setSelectOptions(filterControls.relation, relationOptions, "All relation types");

    Object.entries(filterControls).forEach(([filterName, control]) => {
      if (control instanceof HTMLSelectElement) {
        state[filterName] = control.value;
      }
    });
  }

  populateFilterOptions();

  root.querySelectorAll("[data-graph-filter]").forEach((control) => {
    control.addEventListener("change", () => {
      const filterName = control.getAttribute("data-graph-filter");
      state[filterName] = control.value;
      renderGraph();
    });
  });

  root.querySelectorAll("[data-graph-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.getAttribute("data-graph-toggle");
      if (type === "collections") {
        state.showCollections = !state.showCollections;
        button.textContent = state.showCollections ? "Collapse Collections" : "Expand Collections";
      }
      if (type === "sites") {
        state.showSites = !state.showSites;
        button.textContent = state.showSites ? "Collapse Sites" : "Expand Sites";
      }
      renderGraph();
    });
  });

  const svg = d3Ref.select(svgElement);
  const graphGroup = svg.append("g").attr("class", "graph-root");
  const linkGroup = graphGroup.append("g").attr("class", "graph-links");
  const nodeGroup = graphGroup.append("g").attr("class", "graph-nodes");
  const labelGroup = graphGroup.append("g").attr("class", "graph-labels");

  const zoomBehavior = d3Ref
    .zoom()
    .scaleExtent([0.35, 3])
    .on("zoom", (event) => {
      graphGroup.attr("transform", event.transform);
    });

  svg.call(zoomBehavior);

  let simulation = null;
  let pendingCenterNodeId = null;

  function nodeAllowedByDomain(node) {
    if (state.domain === "all") {
      return true;
    }
    return node.domain === state.domain || node.domain === sharedDomain;
  }

  function nodeAllowedByLayer(node) {
    if (state.layer === "all") {
      return true;
    }
    return node.layer === state.layer;
  }

  function getNeighborhood(seedId, depth = 2, options = {}) {
    const includeGlobal = options.includeGlobal !== false;
    const included = new Set([seedId]);
    let frontier = new Set([seedId]);

    for (let step = 0; step < depth; step += 1) {
      const nextFrontier = new Set();
      frontier.forEach((nodeId) => {
        const neighbors = neighborMap.get(nodeId);
        if (!neighbors) {
          return;
        }
        neighbors.forEach((neighborId) => {
          if (!included.has(neighborId)) {
            included.add(neighborId);
            nextFrontier.add(neighborId);
          }
        });
      });
      frontier = nextFrontier;
      if (!frontier.size) {
        break;
      }
    }

    if (includeGlobal) {
      nodes.forEach((node) => {
        if (node.domain === sharedDomain || node.nodeType === "taxonomy" || node.nodeType === "tbox" || node.nodeType === "vocabulary") {
          included.add(node.id);
        }
      });
    }

    return included;
  }

  function getSelectedLinkDepth() {
    const parsed = Number.parseInt(String(state.linkLevel), 10);
    if (Number.isFinite(parsed) && parsed >= 1) {
      return parsed;
    }
    return 2;
  }

  function unionNodeSets(sets) {
    const union = new Set();
    sets.forEach((set) => {
      set.forEach((value) => {
        union.add(value);
      });
    });
    return union;
  }

  function intersectNodeSets(sets) {
    if (!sets.length) {
      return null;
    }
    const [firstSet, ...rest] = sets;
    const intersection = new Set(firstSet);
    rest.forEach((set) => {
      [...intersection].forEach((value) => {
        if (!set.has(value)) {
          intersection.delete(value);
        }
      });
    });
    return intersection;
  }

  function nodeAllowedBySelection(node, allowedSet) {
    if (!allowedSet) {
      return true;
    }
    return allowedSet.has(node.id);
  }

  function nodeAllowedByCollapse(node) {
    if (!state.showCollections && node.nodeType === "collection") {
      return false;
    }
    if (!state.showSites && node.nodeType === "site") {
      return false;
    }
    return true;
  }

  function getVisibleGraph() {
    const linkDepth = getSelectedLinkDepth();
    const selectionSets = [];
    if (state.actor !== "all") {
      selectionSets.push(getNeighborhood(state.actor, linkDepth, { includeGlobal: false }));
    }
    if (state.collection !== "all") {
      selectionSets.push(getNeighborhood(state.collection, linkDepth, { includeGlobal: false }));
    }
    if (state.site !== "all") {
      selectionSets.push(getNeighborhood(state.site, linkDepth, { includeGlobal: false }));
    }
    let selectedNodeSet = intersectNodeSets(selectionSets);

    if (!selectedNodeSet && !state.focusNodeId) {
      const defaultSeeds = ["master-collection", "study-area"].filter((id) => nodeById.has(id));
      if (defaultSeeds.length) {
        selectedNodeSet = unionNodeSets(defaultSeeds.map((seedId) => getNeighborhood(seedId, linkDepth, { includeGlobal: false })));
      }
    }

    let visibleNodes = nodes.filter(
      (node) => nodeAllowedByDomain(node) && nodeAllowedByLayer(node) && nodeAllowedBySelection(node, selectedNodeSet) && nodeAllowedByCollapse(node)
    );
    let visibleNodeIds = new Set(visibleNodes.map((node) => node.id));

    let visibleLinks = links.filter((link) => {
      const sourceId = getLinkEndpointId(link.source);
      const targetId = getLinkEndpointId(link.target);
      return visibleNodeIds.has(sourceId) && visibleNodeIds.has(targetId);
    });

    if (state.relation !== "all") {
      visibleLinks = visibleLinks.filter((link) => link.predicate === state.relation);
      const relationNodeIds = new Set();
      visibleLinks.forEach((link) => {
        relationNodeIds.add(getLinkEndpointId(link.source));
        relationNodeIds.add(getLinkEndpointId(link.target));
      });
      if (state.actor !== "all") {
        relationNodeIds.add(state.actor);
      }
      if (state.collection !== "all") {
        relationNodeIds.add(state.collection);
      }
      if (state.site !== "all") {
        relationNodeIds.add(state.site);
      }
      visibleNodes = visibleNodes.filter((node) => relationNodeIds.has(node.id));
      visibleNodeIds = new Set(visibleNodes.map((node) => node.id));
      visibleLinks = visibleLinks.filter((link) => {
        const sourceId = getLinkEndpointId(link.source);
        const targetId = getLinkEndpointId(link.target);
        return visibleNodeIds.has(sourceId) && visibleNodeIds.has(targetId);
      });
    }

    if (state.focusNodeId && visibleNodeIds.has(state.focusNodeId)) {
      const focusedNeighborhood = getNeighborhood(state.focusNodeId, linkDepth, { includeGlobal: false });
      const focusNodeSubset = visibleNodes.filter((node) => focusedNeighborhood.has(node.id));
      const focusNodeIds = new Set(focusNodeSubset.map((node) => node.id));
      const focusLinkSubset = visibleLinks.filter((link) => {
        const sourceId = getLinkEndpointId(link.source);
        const targetId = getLinkEndpointId(link.target);
        return focusNodeIds.has(sourceId) && focusNodeIds.has(targetId);
      });
      return { visibleNodes: focusNodeSubset, visibleLinks: focusLinkSubset };
    }

    return { visibleNodes, visibleLinks };
  }

  function edgeDisplayLabel(link) {
    return `${link.predicateLabel} (${link.standard})`;
  }

  function getLinkKey(link) {
    return `${getLinkEndpointId(link.source)}__${link.predicate}__${getLinkEndpointId(link.target)}`;
  }

  function isSameLink(linkA, linkB) {
    if (!linkA || !linkB) {
      return false;
    }
    return getLinkKey(linkA) === getLinkKey(linkB);
  }

  function nodeRadius(node) {
    if (node.nodeType === "collection" || node.nodeType === "site") {
      return 4;
    }
    if (node.nodeType === "taxonomy" || node.nodeType === "tbox" || node.nodeType === "vocabulary") {
      return 6;
    }
    return 8;
  }

  function updateDetailWithNode(node) {
    const outgoing = links.filter((link) => getLinkEndpointId(link.source) === node.id);
    const incoming = links.filter((link) => getLinkEndpointId(link.target) === node.id);

    const outgoingHtml = outgoing
      .slice(0, 16)
      .map((link) => {
        const targetId = getLinkEndpointId(link.target);
        const target = nodeById.get(targetId);
        return `<li><code>${link.predicate}</code> -> ${target ? target.label : targetId}</li>`;
      })
      .join("");

    const incomingHtml = incoming
      .slice(0, 16)
      .map((link) => {
        const sourceId = getLinkEndpointId(link.source);
        const source = nodeById.get(sourceId);
        return `<li>${source ? source.label : sourceId} -> <code>${link.predicate}</code></li>`;
      })
      .join("");

    detailPanel.innerHTML = `
      <h3>Node</h3>
      <p><strong>${node.label}</strong></p>
      <p><strong>URI:</strong> <code>${node.uri}</code></p>
      <p><strong>CRM class:</strong> ${node.crmClass || "n/a"}</p>
      <p><strong>Layer:</strong> ${node.layer} | <strong>Domain:</strong> ${node.domain}</p>
      <p><strong>Type:</strong> ${node.nodeType}</p>
      <p>
        <a class="cta" href="${node.uri}" target="_blank" rel="noopener noreferrer">Access ressource</a>
      </p>
      <h4>Outgoing links</h4>
      <ul>${outgoingHtml || "<li>None</li>"}</ul>
      <h4>Incoming links</h4>
      <ul>${incomingHtml || "<li>None</li>"}</ul>
    `;
  }

  function updateDetailWithEdge(link) {
    const sourceId = getLinkEndpointId(link.source);
    const targetId = getLinkEndpointId(link.target);
    const source = nodeById.get(sourceId);
    const target = nodeById.get(targetId);

    detailPanel.innerHTML = `
      <h3>Edge</h3>
      <p><strong>${source ? source.label : sourceId}</strong> -> <strong>${target ? target.label : targetId}</strong></p>
      <p><strong>Predicate:</strong> <code>${link.predicate}</code></p>
      <p><strong>Label:</strong> ${link.predicateLabel}</p>
      <p><strong>Standard:</strong> ${link.standard}</p>
    `;
  }

  function resizeSvg() {
    const bounds = svgElement.parentElement.getBoundingClientRect();
    const width = Math.max(500, Math.floor(bounds.width));
    const height = Math.max(560, Math.floor(bounds.height));
    svg.attr("viewBox", `0 0 ${width} ${height}`);
    return { width, height };
  }

  function getFullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
  }

  function tUi(key, fallback) {
    if (window.I18n && typeof window.I18n.t === "function") {
      return window.I18n.t(key);
    }
    return fallback;
  }

  function isCanvasFullscreen() {
    if (!(graphCanvas instanceof HTMLElement)) {
      return false;
    }
    return getFullscreenElement() === graphCanvas;
  }

  function updateFullscreenButton() {
    if (!(fullscreenButton instanceof HTMLButtonElement)) {
      return;
    }
    const active = isCanvasFullscreen();
    const text = active
      ? tUi("visualizePage.fullscreen.exit", "Exit fullscreen")
      : tUi("visualizePage.fullscreen.enter", "Enter fullscreen");
    fullscreenButton.setAttribute("aria-label", text);
    fullscreenButton.setAttribute("title", text);
    if (fullscreenLabel instanceof HTMLElement) {
      fullscreenLabel.textContent = text;
    }
    if (graphCanvas instanceof HTMLElement) {
      graphCanvas.toggleAttribute("data-fullscreen-active", active);
    }
  }

  async function toggleFullscreen() {
    if (!(graphCanvas instanceof HTMLElement)) {
      return;
    }
    const active = isCanvasFullscreen();
    try {
      if (active) {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      } else if (graphCanvas.requestFullscreen) {
        await graphCanvas.requestFullscreen();
      } else if (graphCanvas.webkitRequestFullscreen) {
        graphCanvas.webkitRequestFullscreen();
      }
    } catch (_) {
      updateFullscreenButton();
    }
  }

  function drag(sim) {
    function dragstarted(event) {
      if (!event.active) {
        sim.alphaTarget(0.3).restart();
      }
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) {
        sim.alphaTarget(0);
      }
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3Ref.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
  }

  function renderGraph() {
    const { width, height } = resizeSvg();
    const { visibleNodes, visibleLinks } = getVisibleGraph();
    const simulationLinks = visibleLinks.map((link) => ({
      ...link,
      source: getLinkEndpointId(link.source),
      target: getLinkEndpointId(link.target)
    }));
    const visibleNodeIds = new Set(visibleNodes.map((node) => node.id));

    if (state.selectedNodeId && !visibleNodeIds.has(state.selectedNodeId)) {
      state.selectedNodeId = null;
    }
    if (state.selectedEdge) {
      const selectedEdgeKey = getLinkKey(state.selectedEdge);
      const edgeIsVisible = simulationLinks.some((link) => getLinkKey(link) === selectedEdgeKey);
      if (!edgeIsVisible) {
        state.selectedEdge = null;
      }
    }

    const focusNeighborhood = state.focusNodeId ? getNeighborhood(state.focusNodeId, getSelectedLinkDepth(), { includeGlobal: false }) : null;
    const selectedEdge = state.selectedEdge;

    if (simulation) {
      simulation.stop();
    }

    const linkSelection = linkGroup
      .selectAll("line")
      .data(simulationLinks, (d) => getLinkKey(d))
      .join((enter) =>
        enter
          .append("line")
          .attr("stroke-linecap", "round")
          .on("click", (event, d) => {
            event.stopPropagation();
            state.selectedEdge = d;
            state.selectedNodeId = null;
            updateDetailWithEdge(d);
            renderGraph();
          })
      );
    linkSelection
      .attr("stroke", (d) => {
        if (selectedEdge && isSameLink(d, selectedEdge)) {
          return "#0f4cbc";
        }
        return linkColorByStandard[d.standard] || "#9aa7bb";
      })
      .attr("stroke-width", (d) => (selectedEdge && isSameLink(d, selectedEdge) ? 2.4 : 1.2))
      .attr("stroke-opacity", (d) => {
        if (selectedEdge) {
          return isSameLink(d, selectedEdge) ? 0.96 : 0.24;
        }
        if (focusNeighborhood && state.focusNodeId) {
          const sourceId = getLinkEndpointId(d.source);
          const targetId = getLinkEndpointId(d.target);
          return focusNeighborhood.has(sourceId) && focusNeighborhood.has(targetId) ? 0.74 : 0.2;
        }
        return 0.58;
      });

    linkSelection.selectAll("title").remove();
    linkSelection.append("title").text((d) => edgeDisplayLabel(d));

    const nodeSelection = nodeGroup
      .selectAll("circle")
      .data(visibleNodes, (d) => d.id)
      .join((enter) =>
        enter
          .append("circle")
          .attr("r", (d) => nodeRadius(d))
          .style("cursor", "pointer")
          .on("click", (event, d) => {
            event.stopPropagation();
            state.focusNodeId = d.id;
            state.selectedNodeId = d.id;
            state.selectedEdge = null;
            pendingCenterNodeId = d.id;
            renderGraph();
            updateDetailWithNode(d);
          })
      );
    nodeSelection
      .attr("fill", (d) => colorByType[d.nodeType] || "#1f2937")
      .attr("stroke", "none")
      .attr("stroke-width", 0)
      .attr("opacity", (d) => {
        if (focusNeighborhood && state.focusNodeId) {
          return focusNeighborhood.has(d.id) ? 1 : 0.34;
        }
        if (selectedEdge) {
          const sourceId = getLinkEndpointId(selectedEdge.source);
          const targetId = getLinkEndpointId(selectedEdge.target);
          return d.id === sourceId || d.id === targetId ? 1 : 0.34;
        }
        return 1;
      });

    nodeSelection.selectAll("title").remove();
    nodeSelection.append("title").text((d) => `${d.label}\n${d.crmClass || ""}`);

    const labelSelection = labelGroup
      .selectAll("text")
      .data(
        visibleNodes.filter((node) => node.nodeType !== "collection" && node.nodeType !== "site"),
        (d) => d.id
      )
      .join("text")
      .attr("font-family", "\"Manrope\", \"Avenir Next\", \"Segoe UI\", sans-serif")
      .attr("font-size", 10.5)
      .attr("font-weight", 600)
      .attr("fill", "#0f172a")
      .attr("stroke", "rgba(255, 255, 255, 0.92)")
      .attr("stroke-width", 2)
      .attr("paint-order", "stroke")
      .attr("text-anchor", "middle")
      .attr("dy", (d) => -(nodeRadius(d) + 4))
      .style("pointer-events", "none")
      .attr("opacity", (d) => (focusNeighborhood && state.focusNodeId && !focusNeighborhood.has(d.id) ? 0.25 : 0.95))
      .text((d) => d.label);

    simulation = d3Ref
      .forceSimulation(visibleNodes)
      .force(
        "link",
        d3Ref
          .forceLink(simulationLinks)
          .id((d) => d.id)
          .distance((d) => {
            if (d.predicate === "P89_falls_within" || d.predicate === "P46_is_composed_of") {
              return 80;
            }
            return 120;
          })
          .strength(0.45)
      )
      .force("charge", d3Ref.forceManyBody().strength(-220))
      .force("center", d3Ref.forceCenter(width / 2, height / 2))
      .force("collision", d3Ref.forceCollide().radius((d) => nodeRadius(d) + 5));

    nodeSelection.call(drag(simulation));

    simulation.on("tick", () => {
      linkSelection
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      nodeSelection.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      labelSelection.attr("x", (d) => d.x).attr("y", (d) => d.y);

      if (pendingCenterNodeId) {
        const focusedNode = visibleNodes.find((node) => node.id === pendingCenterNodeId);
        if (focusedNode && Number.isFinite(focusedNode.x) && Number.isFinite(focusedNode.y)) {
          const currentTransform = d3Ref.zoomTransform(svgElement);
          const k = currentTransform.k || 1;
          const tx = width / 2 - focusedNode.x * k;
          const ty = height / 2 - focusedNode.y * k;
          svg
            .transition()
            .duration(350)
            .call(zoomBehavior.transform, d3Ref.zoomIdentity.translate(tx, ty).scale(k));
          pendingCenterNodeId = null;
        }
      }
    });

    svg.on("click", () => {
      const wasFocused = Boolean(state.focusNodeId);
      state.focusNodeId = null;
      state.selectedNodeId = null;
      state.selectedEdge = null;
      if (wasFocused) {
        pendingCenterNodeId = null;
        svg.transition().duration(250).call(zoomBehavior.transform, d3Ref.zoomIdentity);
        renderGraph();
      }
      detailPanel.innerHTML = "<h3>Details</h3><p>Select a node or an edge to inspect CIDOC-CRM links, extensions, and controlled vocabularies.</p>";
    });
  }

  renderGraph();

  if (fullscreenButton instanceof HTMLButtonElement) {
    fullscreenButton.addEventListener("click", () => {
      toggleFullscreen();
    });
    updateFullscreenButton();
  }

  const onFullscreenChange = () => {
    updateFullscreenButton();
    renderGraph();
  };
  document.addEventListener("fullscreenchange", onFullscreenChange);
  document.addEventListener("webkitfullscreenchange", onFullscreenChange);
  document.addEventListener("language:changed", updateFullscreenButton);

  window.addEventListener("resize", () => {
    renderGraph();
  });
})();
