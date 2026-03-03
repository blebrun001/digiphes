(() => {
  const SUPPORTED_LANGS = ["es", "ca", "en"];
  const DEFAULT_LANG = "es";
  const STORAGE_KEY = "iphes-hub-lang";
  const CONTACT_EMAIL = "info@iphes.cat";

  const translations = {
    es: {
      "meta.title": "Hub IPHES-CERCA | Digitalización de colecciones de IPHES-CERCA",
      "meta.description": "Hub institucional del proyecto de digitalización de colecciones de IPHES-CERCA.",
      "header.title": "Digitalización de colecciones de IPHES-CERCA",
      "header.baseline": "Descubre cómo IPHES-CERCA digitaliza sus colecciones a través del proyecto Maria de Maeztu 2025-2029 liderado por el laboratorio.",
      "header.homeAria": "Volver a la página de inicio",
      "lang.toggleAria": "Cambiar idioma",
      "hero.cta": "Más información",
      "metrics.title": "Cifras clave",
      "metrics.body": "",
      "metrics.card1.value": "3 años",
      "metrics.card1.label": "Horizonte de planificación",
      "metrics.card2.value": "15 colecciones",
      "metrics.card2.label": "Arqueológicas, de referencia y experimentales",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Punto de acceso unificado",
      "collections.title": "Panorámica de colecciones",
      "collections.desc": "Descripción temporal de referencia para esta colección.",
      "collections.access": "Acceder",
      "collections.requestSubject": "Solicitud de acceso a colección",
      "hood.title": "Bajo el capó",
      "hood.body": "La digitalización de colecciones se apoya en soluciones avanzadas de gestión de datos e infraestructura. Para saber más, haz clic en el botón de abajo.",
      "hood.cta": "Más información",
      "digitalization.title": "¿Qué es la digitalización?",
      "digitalization.body": "La digitalización es el proceso de transformar flujos de trabajo de colecciones, metadatos y registros en recursos digitales estructurados para mejorar el acceso, la interoperabilidad, la preservación y la reutilización científica.",
      "digitalizationPage.meta.title": "Hub IPHES-CERCA | What is digitalization?",
      "digitalizationPage.meta.description": "Why digitization matters for archaeological collections: governance, FAIR principles, infrastructure, and scientific reuse.",
      "digitalizationPage.intro.title": "Por qué importa digitalizar las colecciones",
      "digitalizationPage.intro.p1": "La digitalización de colecciones científicas no es solo una mejora técnica, sino una transformación estratégica que redefine cómo se produce, preserva y comparte el conocimiento. Las colecciones arqueológicas y patrimoniales son infraestructuras de investigación complejas por derecho propio: generan datos, sostienen la interpretación, facilitan la formación y respaldan la credibilidad científica. A medida que evolucionan los métodos de investigación y aumenta el volumen de datos, las instituciones deben adoptar marcos digitales capaces de garantizar sostenibilidad, accesibilidad y profundidad analítica.",
      "digitalizationPage.intro.p2": "Las secciones siguientes exponen las razones clave por las que la digitalización se ha vuelto esencial. En conjunto, muestran cómo la transformación digital refuerza la calidad científica, mejora la gobernanza, amplía el acceso y sitúa las colecciones en el centro de un ecosistema de investigación abierto, colaborativo y orientado al futuro.",
      "digitalizationPage.block1.title": "Complexity and Scale of Archaeological Data",
      "digitalizationPage.block1.body": "Modern archaeological research generates vast and highly diverse datasets: 3D models, spatial coordinates, stratigraphic records, photographs, analytical measurements, and laboratory results. As the volume and heterogeneity of this information increase, traditional storage and documentation methods become insufficient. Digitising collections enables structured organisation, efficient retrieval, and long-term consistency, ensuring that objects remain meaningfully connected to their contextual and analytical data.",
      "digitalizationPage.block2.title": "Secure and Responsible Data Governance",
      "digitalizationPage.block2.body": "Digitisation is not only a technical process but also a governance framework. It allows institutions to define clear policies for data storage, access, protection, and preservation. By moving away from fragmented personal storage systems toward shared infrastructure, digital collections can be safeguarded against loss, duplication, and misuse, while ensuring ethical handling and controlled access where required.",
      "digitalizationPage.block3.title": "Alignment with Open Science and FAIR Principles",
      "digitalizationPage.block3.body": "Contemporary research operates within an Open Science ecosystem that promotes transparency, accessibility, and reusability. Digitised collections can be structured according to FAIR principles (Findable, Accessible, Interoperable, Reusable), making data discoverable and usable beyond the original research team. This approach enhances reproducibility, strengthens collaboration, and increases the long-term scientific impact of collections.",
      "digitalizationPage.block4.title": "Creation of a Shared Data Infrastructure",
      "digitalizationPage.block4.body": "A dedicated digital environment, often described as a Data Space, provides a unified framework where data can be managed, curated, and processed in a consistent way. Such infrastructure enables researchers to work within shared standards, connect laboratories and instruments, and integrate datasets across projects. This common ecosystem reduces silos and fosters interdisciplinary collaboration.",
      "digitalizationPage.block5.title": "Maximising Scientific Value and Reusability",
      "digitalizationPage.block5.body": "Reference collections are fundamental research tools. When digitised and properly curated, they can be searched, compared, and analysed at scale. Standardised metadata and structured databases make it possible to extract new insights, perform cross-comparative analyses, and support research questions that would be difficult or impossible using analogue systems. Digitisation thus increases the analytical potential of each specimen.",
      "digitalizationPage.block6.title": "Expanding Access and Dissemination",
      "digitalizationPage.block6.body": "Digital collections can be shared through institutional repositories and trusted thematic platforms, extending their reach to researchers, educators, and students worldwide. This broader accessibility transforms collections from local research assets into global scientific resources, strengthening collaboration and supporting training and capacity building across institutions.",
      "digitalizationPage.block7.title": "Enabling Advanced Analytical Methods",
      "digitalizationPage.block7.body": "Emerging research methodologies, such as artificial intelligence, predictive modelling, and advanced GIS analyses, require large, well-structured, machine-readable datasets. Digitisation provides the foundation necessary for deploying these tools effectively. Without robust digital infrastructures, the potential of advanced computational approaches remains limited.",
      "digitalizationPage.block8.title": "Standardisation and Quality Improvement",
      "digitalizationPage.block8.body": "Digitising collections encourages the development of standardised workflows, documentation practices, and quality control procedures. Structured digital systems improve traceability, reduce inconsistencies, and facilitate reproducibility. Over time, this contributes to higher scientific reliability and more efficient research processes.",
      "digitalizationPage.block9.title": "Institutional Modernisation and Talent Attraction",
      "digitalizationPage.block9.body": "A well-developed digital infrastructure signals scientific maturity and innovation. Institutions that invest in digitised collections and modern data stewardship are better positioned to attract international researchers, foster interdisciplinary projects, and retain skilled personnel. Digital transformation therefore strengthens both scientific excellence and institutional competitiveness.",
      "roadmapVisual.title": "Hoja de ruta visual",
      "roadmapVisual.body": "Hoja de ruta por fases para comprender rápidamente los hitos principales del proyecto.",
      "roadmapVisual.phase1.title": "Estructuración",
      "roadmapVisual.phase1.body": "Recogida de información, encuesta y priorización de colecciones, selección de herramientas y presentación de protocolos.",
      "roadmapVisual.phase2.title": "Despliegue",
      "roadmapVisual.phase2.body": "Implementación inicial en colecciones piloto, ajustes por retorno de campo, formación de técnicos y despliegue progresivo.",
      "roadmapVisual.phase3.title": "Consolidación",
      "roadmapVisual.phase3.body": "Estabilización de herramientas y protocolos, documentación completa, informe de síntesis y hoja de ruta de digitalización post-MdM.",
      "underHood.meta.title": "Hub IPHES-CERCA | Bajo el capó",
      "underHood.meta.description": "Página técnica del proyecto: arquitectura RDF, cadena de evidencia, ontologías y MWE desplegado.",
      "underHood.foundation.title": "Construir las bases de la coherencia digital",
      "underHood.foundation.p1": "La estrategia de digitalización en IPHES-CERCA se concibe como una transformación a escala de todo el laboratorio y no como una iniciativa limitada a una colección. Su objetivo es establecer una base conceptual y técnica compartida, capaz de sostener la diversidad de fondos arqueológicos, de referencia y experimentales, garantizando al mismo tiempo la coherencia científica a largo plazo. Más allá de la simple producción de registros digitales, la meta es estructurar cómo se organiza, conecta y mantiene el conocimiento a lo largo del tiempo.",
      "underHood.foundation.p2": "Las secciones que siguen presentan las decisiones arquitectónicas, el marco semántico y los principios metodológicos que sustentan esta estrategia. En conjunto, describen cómo un ecosistema digital unificado puede apoyar la interoperabilidad, la trazabilidad de la investigación y la integración en infraestructuras nacionales e internacionales más amplias, manteniéndose adaptable a las especificidades disciplinares.",
      "underHood.intro.title": "Arquitectura RDF para la digitalización del laboratorio",
      "underHood.intro.p1": "IPHES-CERCA digitaliza colecciones muy heterogéneas (arqueológicas, de referencia y experimentales), cuyo valor científico depende no solo de los objetos en sí, sino también de su procedencia, sus asociaciones contextuales y la trazabilidad completa de la investigación. El reto no es únicamente almacenar archivos digitales, sino preservar y formalizar las relaciones que hacen que estas colecciones sean científicamente significativas.",
      "underHood.intro.p2": "Para abordar este reto, el proyecto adopta RDF (Resource Description Framework), un estándar del W3C diseñado para representar conocimiento como un grafo. En lugar de organizar la información en tablas rígidas, RDF modela los datos como afirmaciones simples y explícitas llamadas tripletas: sujeto, predicado y objeto. Cada entidad y cada relación se identifica mediante una URI persistente, lo que garantiza que los datos sean inequívocos, enlazables e interpretables por máquina entre sistemas e instituciones.",
      "underHood.intro.p3": "Este modelo basado en grafos se adapta especialmente bien al contexto de IPHES-CERCA. Permite expresar relaciones complejas entre objetos, contextos, actores y actividades de investigación sin las restricciones estructurales impuestas por las bases de datos relacionales tradicionales. Los datos se serializan en formato Turtle para facilitar legibilidad y estandarización, se almacenan en un triplestore optimizado para estructuras en grafo y se consultan con SPARQL, un lenguaje potente diseñado específicamente para recuperar y combinar información interconectada. En conjunto, estos componentes permiten integración interoperable, consultas de granularidad fina y reutilización a largo plazo de los datos de colección.",
      "underHood.rdf.title": "1) ¿Por qué usar una base de datos en grafo (RDF)?",
      "underHood.rdf.p1": "RDF almacena la información en tripletas sujeto-predicado-objeto. Este formato encaja de forma natural con CIDOC-CRM, donde las clases son nodos y las propiedades son relaciones explícitas.",
      "underHood.rdf.p2": "Beneficios principales: modelado semántico fino, interoperabilidad (ARIADNE, Europeana, EOSC) y posible inferencia automática en algunos casos.",
      "underHood.rdf.p3": "Coste principal: mayor complejidad técnica para los usos operativos del día a día en laboratorio.",
      "underHood.crm.title": "CIDOC-CRM como base semántica común",
      "underHood.crm.p1": "En ausencia de un marco semántico compartido, cada colección tiende a desarrollar su propio esquema, terminología y lógica interna. Con el tiempo, esta fragmentación produce silos conceptuales, limita la interoperabilidad, complica el análisis transversal entre colecciones y aumenta el riesgo de ambigüedad semántica. Garantizar coherencia entre dominios requiere, por tanto, un metamodelo común capaz de estructurar la diversidad sin suprimir la especificidad disciplinar.",
      "underHood.crm.p2": "CIDOC-CRM proporciona ese marco ofreciendo una ontología agnóstica de dominio diseñada para describir patrimonio cultural y conocimiento científico mediante un enfoque centrado en eventos. Define clases estables, como E22 Man-Made Object, E53 Place o E39 Actor, y propiedades explícitas como P46 is composed of o P108 has produced, todo formalmente alineado con RDF. Esta estructura hace explícitas e interpretables por máquina las relaciones entre objetos, contextos, eventos y actores. Al mapear datos específicos de colección a CIDOC-CRM, los conjuntos heterogéneos pasan a formar parte de un grafo de conocimiento unificado e interoperable sin perder claridad conceptual.",
      "underHood.crm.p3": "El resultado es una alineación semántica sin pérdida de precisión científica. Una vez que las colecciones comparten la misma base, las consultas SPARQL transversales se vuelven posibles, el razonamiento lógico puede aplicarse entre conjuntos de datos y se facilita la integración con infraestructuras internacionales de investigación como ARIADNE o EOSC. Al mismo tiempo, CIDOC-CRM opera como una estructura semántica de alto nivel que permite mantener vocabularios disciplinares y descripciones de dominio detalladas. La base armoniza los datos a nivel conceptual preservando la granularidad necesaria para una investigación rigurosa.",
      "underHood.evidence.title": "3) Cadena de evidencia (del terreno a la difusión)",
      "underHood.evidence.p1": "La cadena de evidencia describe la construcción progresiva de la información científica, desde el hecho material observable hasta la interpretación y los datos publicados.",
      "underHood.evidence.p2": "Cada paso intermedio sigue siendo trazable: afirmaciones enlazadas, fechadas, atribuidas y revisables. No es una prueba única y definitiva, sino una secuencia documentada.",
      "underHood.mwe.title": "4) El MWE: arquitectura técnica concreta",
      "underHood.mwe.p1": "El Minimum Working Example valida este enfoque de extremo a extremo con Apache Jena Fuseki (servidor SPARQL) y TDB2 (almacenamiento RDF persistente).",
      "underHood.mwe.p2": "Los datos se modelan en Turtle y se consultan con SPARQL. La infraestructura se contenedoriza con Docker Compose para un despliegue reproducible tanto del triplestore como de la capa de aplicación.",
      "underHood.mwe.p3": "Importante: los datos del MWE son placeholders y no representan datos de producción validados.",
      "underHood.semantic.title": "Extensiones CRM, ontologías y FAIRness",
      "underHood.semantic.p1": "El modelo núcleo de CIDOC-CRM se amplía mediante módulos ontológicos específicos de dominio como CRMarchaeo, CRMsci y CRMgeo. Estas extensiones permiten modelar con precisión conceptual la estratigrafía y los procesos de excavación arqueológica, la observación científica y el análisis de materiales, y la información geoespacial. En lugar de quedarse en un nivel descriptivo general, el modelo de datos puede representar eventos de excavación, procedimientos de muestreo, mediciones de laboratorio y relaciones espaciales de manera formalmente estructurada e interoperable. Este enfoque ontológico en capas preserva el rigor metodológico manteniendo la alineación con la estructura central de CRM.",
      "underHood.semantic.p2": "Se reutilizan vocabularios controlados y ontologías de referencia para garantizar consistencia semántica e interoperabilidad entre dominios. Recursos como Getty AAT, PeriodO, UBERON y Darwin Core se integran mediante representaciones RDF, SKOS u OWL. En lugar de redefinir términos de forma local, el proyecto alinea sus entidades con estándares consolidados de la comunidad, habilitando significado compartido, coherencia multilingüe y enlace externo. Esta estrategia refuerza la claridad semántica y permite que las colecciones participen en grafos de conocimiento disciplinares e internacionales más amplios.",
      "underHood.semantic.p3": "Por último, los habilitadores técnicos FAIR se integran en la infraestructura. Las URI persistentes garantizan una identificación estable de las entidades; los grafos nombrados con procedencia documentan el origen y la transformación de los datos; la validación SHACL asegura consistencia estructural y lógica; y los endpoints SPARQL proporcionan acceso transparente y accionable por máquina. En conjunto, estos mecanismos operacionalizan los principios FAIR, haciendo los datos Findable, Accessible, Interoperable y Reusable, mientras preservan la trazabilidad científica y la sostenibilidad a largo plazo.",
      "underHood.interface.title": "6) Interfaz y validación",
      "corIphes.meta.title": "Hub IPHES-CERCA | Colección COR-IPHES",
      "corIphes.meta.description": "Página piloto de la colección COR-IPHES con resumen, equipo, progreso de digitalización y enlaces de consulta.",
      "cor.overview.title": "Visión general",
      "cor.overview.body": "COR-IPHES (Colección Osteológica de Referencia de IPHES-CERCA) es una colección integral de anatomía comparada alojada en el Institut Català de Paleoecologia Humana i Evolució Social en Tarragona, España.",
      "cor.content.title": "Contenido",
      "cor.content.body": "Incluye más de 300 esqueletos completos o parciales de mamíferos y aves de Europa y África, con taxones comunes y especies raras o amenazadas como el lince ibérico (Lynx pardinus), el bisonte europeo (Bison bonasus) y el quebrantahuesos (Gypaetus barbatus). Los especímenes se obtuvieron de forma ética mediante muertes naturales, causas accidentales o donaciones institucionales, y se han preparado y catalogado cuidadosamente para investigación y docencia.",
      "cor.team.title": "Equipo",
      "cor.progress.title": "Progreso de digitalización",
      "cor.progress.aria": "Progreso de digitalización: 15,2 por ciento",
      "cor.formats.title": "Formatos",
      "cor.volume.title": "Volumen",
      "cor.volume.files": "12185 archivos",
      "cor.ontologies.title": "Ontologías utilizadas",
      "cor.consult.title": "Consulta",
      "cor.consult.fullscreenAria": "Abrir COR-IPHES en modo pantalla completa",
      "cor.consult.iframeTitle": "Sitio web de COR-IPHES",
      "cor.internalLinks.title": "Enlaces internos",
      "cor.internalLinks.database": "Base de datos",
      "cor.internalLinks.website": "Sitio web",
      "cor.internalLinks.labDocs": "Documentación del laboratorio",
      "cor.externalLinks.title": "Enlaces externos",
      "underHood.interface.p1": "La interfaz en Node.js / Express actúa como proxy hacia SPARQL y ofrece exploración de entidades, consultas predefinidas y visualizaciones de grafo.",
      "underHood.interface.p2": "SHACL se usa para validar restricciones estructurales y semánticas en los grafos RDF.",
      "underHood.takeaways.title": "7) Ideas clave del MWE",
      "underHood.takeaways.p1": "1. La implementación es exigente: requiere competencias especializadas y múltiples componentes técnicos.",
      "underHood.takeaways.p2": "2. El marco conceptual debe ser riguroso: el modelo de referencia, las ontologías y los vocabularios deben definirse con precisión.",
      "underHood.takeaways.p3": "3. El diseño UX es más difícil, porque un enfoque holístico en grafo multiplica tipos de información, opciones y patrones de interacción.",
      "staff.role.responsible": "Responsable",
      "staff.role.member": "Miembro",
      "footer.partnersAria": "Socios",
      "footer.address": "2026 - IPHES-CERCA Zona Educacional, 4, Campus Sescelades URV (Edifici W3), 43007 Tarragona (España) · info@iphes.cat | (+34) 977 943 003",
      "footer.privacy": "Este sitio web no recopila tus datos y no utiliza cookies."
    },
    ca: {
      "meta.title": "Hub IPHES-CERCA | Digitalització de col·leccions d'IPHES-CERCA",
      "meta.description": "Hub institucional del projecte de digitalització de col·leccions d'IPHES-CERCA.",
      "header.title": "Digitalització de col·leccions d'IPHES-CERCA",
      "header.baseline": "Descobreix com IPHES-CERCA digitalitza les seves col·leccions a través del projecte Maria de Maeztu 2025-2029 liderat pel laboratori.",
      "header.homeAria": "Torna a la pàgina d'inici",
      "lang.toggleAria": "Canvia l'idioma",
      "hero.cta": "Més informació",
      "metrics.title": "Xifres clau",
      "metrics.body": "",
      "metrics.card1.value": "3 anys",
      "metrics.card1.label": "Horitzó de planificació",
      "metrics.card2.value": "15 col·leccions",
      "metrics.card2.label": "Arqueològiques, de referència i experimentals",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Punt d'accés unificat",
      "collections.title": "Panoràmica de col·leccions",
      "collections.desc": "Descripció temporal de referència per a aquesta col·lecció.",
      "collections.access": "Accedir",
      "collections.requestSubject": "Sol·licitud d'accés a col·lecció",
      "hood.title": "Sota el capó",
      "hood.body": "La digitalització de col·leccions es basa en solucions avançades de gestió de dades i d'infraestructura. Per saber-ne més, fes clic al botó de sota.",
      "hood.cta": "Més informació",
      "digitalization.title": "Què és la digitalització?",
      "digitalization.body": "La digitalització és el procés de transformar fluxos de treball de col·leccions, metadades i registres en recursos digitals estructurats per millorar l'accés, la interoperabilitat, la preservació i la reutilització científica.",
      "digitalizationPage.meta.title": "Hub IPHES-CERCA | What is digitalization?",
      "digitalizationPage.meta.description": "Why digitization matters for archaeological collections: governance, FAIR principles, infrastructure, and scientific reuse.",
      "digitalizationPage.intro.title": "Per què és important digitalitzar les col·leccions",
      "digitalizationPage.intro.p1": "La digitalització de col·leccions científiques no és només una millora tècnica, sinó una transformació estratègica que redefineix com es produeix, es preserva i es comparteix el coneixement. Les col·leccions arqueològiques i patrimonials són infraestructures de recerca complexes per si mateixes: generen dades, sustenten la interpretació, faciliten la formació i reforcen la credibilitat científica. A mesura que evolucionen els mètodes de recerca i augmenta el volum de dades, les institucions han d'adoptar marcs digitals capaços de garantir sostenibilitat, accessibilitat i profunditat analítica.",
      "digitalizationPage.intro.p2": "Les seccions següents exposen els motius clau pels quals la digitalització s'ha tornat essencial. En conjunt, mostren com la transformació digital reforça la qualitat científica, millora la governança, amplia l'accés i situa les col·leccions al centre d'un ecosistema de recerca obert, col·laboratiu i orientat al futur.",
      "digitalizationPage.block1.title": "Complexity and Scale of Archaeological Data",
      "digitalizationPage.block1.body": "Modern archaeological research generates vast and highly diverse datasets: 3D models, spatial coordinates, stratigraphic records, photographs, analytical measurements, and laboratory results. As the volume and heterogeneity of this information increase, traditional storage and documentation methods become insufficient. Digitising collections enables structured organisation, efficient retrieval, and long-term consistency, ensuring that objects remain meaningfully connected to their contextual and analytical data.",
      "digitalizationPage.block2.title": "Secure and Responsible Data Governance",
      "digitalizationPage.block2.body": "Digitisation is not only a technical process but also a governance framework. It allows institutions to define clear policies for data storage, access, protection, and preservation. By moving away from fragmented personal storage systems toward shared infrastructure, digital collections can be safeguarded against loss, duplication, and misuse, while ensuring ethical handling and controlled access where required.",
      "digitalizationPage.block3.title": "Alignment with Open Science and FAIR Principles",
      "digitalizationPage.block3.body": "Contemporary research operates within an Open Science ecosystem that promotes transparency, accessibility, and reusability. Digitised collections can be structured according to FAIR principles (Findable, Accessible, Interoperable, Reusable), making data discoverable and usable beyond the original research team. This approach enhances reproducibility, strengthens collaboration, and increases the long-term scientific impact of collections.",
      "digitalizationPage.block4.title": "Creation of a Shared Data Infrastructure",
      "digitalizationPage.block4.body": "A dedicated digital environment, often described as a Data Space, provides a unified framework where data can be managed, curated, and processed in a consistent way. Such infrastructure enables researchers to work within shared standards, connect laboratories and instruments, and integrate datasets across projects. This common ecosystem reduces silos and fosters interdisciplinary collaboration.",
      "digitalizationPage.block5.title": "Maximising Scientific Value and Reusability",
      "digitalizationPage.block5.body": "Reference collections are fundamental research tools. When digitised and properly curated, they can be searched, compared, and analysed at scale. Standardised metadata and structured databases make it possible to extract new insights, perform cross-comparative analyses, and support research questions that would be difficult or impossible using analogue systems. Digitisation thus increases the analytical potential of each specimen.",
      "digitalizationPage.block6.title": "Expanding Access and Dissemination",
      "digitalizationPage.block6.body": "Digital collections can be shared through institutional repositories and trusted thematic platforms, extending their reach to researchers, educators, and students worldwide. This broader accessibility transforms collections from local research assets into global scientific resources, strengthening collaboration and supporting training and capacity building across institutions.",
      "digitalizationPage.block7.title": "Enabling Advanced Analytical Methods",
      "digitalizationPage.block7.body": "Emerging research methodologies, such as artificial intelligence, predictive modelling, and advanced GIS analyses, require large, well-structured, machine-readable datasets. Digitisation provides the foundation necessary for deploying these tools effectively. Without robust digital infrastructures, the potential of advanced computational approaches remains limited.",
      "digitalizationPage.block8.title": "Standardisation and Quality Improvement",
      "digitalizationPage.block8.body": "Digitising collections encourages the development of standardised workflows, documentation practices, and quality control procedures. Structured digital systems improve traceability, reduce inconsistencies, and facilitate reproducibility. Over time, this contributes to higher scientific reliability and more efficient research processes.",
      "digitalizationPage.block9.title": "Institutional Modernisation and Talent Attraction",
      "digitalizationPage.block9.body": "A well-developed digital infrastructure signals scientific maturity and innovation. Institutions that invest in digitised collections and modern data stewardship are better positioned to attract international researchers, foster interdisciplinary projects, and retain skilled personnel. Digital transformation therefore strengthens both scientific excellence and institutional competitiveness.",
      "roadmapVisual.title": "Full de ruta visual",
      "roadmapVisual.body": "Full de ruta per fases per entendre ràpidament les fites principals del projecte.",
      "roadmapVisual.phase1.title": "Estructuració",
      "roadmapVisual.phase1.body": "Recollida d'informació, enquesta i priorització de col·leccions, selecció d'eines i presentació de protocols.",
      "roadmapVisual.phase2.title": "Desplegament",
      "roadmapVisual.phase2.body": "Implementació inicial en col·leccions pilot, ajustos per retorn de camp, formació de tècnics i desplegament progressiu.",
      "roadmapVisual.phase3.title": "Consolidació",
      "roadmapVisual.phase3.body": "Estabilització d'eines i protocols, documentació completa, informe de síntesi i full de ruta de digitalització post-MdM.",
      "underHood.meta.title": "Hub IPHES-CERCA | Sota el capó",
      "underHood.meta.description": "Pàgina tècnica del projecte: arquitectura RDF, cadena d'evidència, ontologies i MWE desplegat.",
      "underHood.foundation.title": "Construir els fonaments de la coherència digital",
      "underHood.foundation.p1": "L'estratègia de digitalització a IPHES-CERCA es concep com una transformació a escala de tot el laboratori, i no com una iniciativa limitada a una col·lecció. Té com a objectiu establir una base conceptual i tècnica compartida, capaç de sostenir la diversitat de fons arqueològics, de referència i experimentals, alhora que garanteix la coherència científica a llarg termini. Més enllà de la simple producció de registres digitals, la finalitat és estructurar com s'organitza, es connecta i es manté el coneixement al llarg del temps.",
      "underHood.foundation.p2": "Les seccions següents presenten les decisions arquitectòniques, el marc semàntic i els principis metodològics que sustenten aquesta estratègia. En conjunt, descriuen com un ecosistema digital unificat pot donar suport a la interoperabilitat, la traçabilitat de la recerca i la integració en infraestructures nacionals i internacionals més àmplies, mantenint-se adaptable a les especificitats disciplinàries.",
      "underHood.intro.title": "Arquitectura RDF per a la digitalització del laboratori",
      "underHood.intro.p1": "IPHES-CERCA digitalitza col·leccions molt heterogènies (arqueològiques, de referència i experimentals), el valor científic de les quals depèn no només dels objectes en si, sinó també de la seva procedència, de les associacions contextuals i de la traçabilitat completa de la recerca. El repte no és únicament emmagatzemar fitxers digitals, sinó preservar i formalitzar les relacions que fan que aquestes col·leccions siguin científicament significatives.",
      "underHood.intro.p2": "Per abordar aquest repte, el projecte adopta RDF (Resource Description Framework), un estàndard del W3C dissenyat per representar coneixement com un graf. En lloc d'organitzar la informació en taules rígides, RDF modela les dades com afirmacions simples i explícites anomenades tripletes: subjecte, predicat i objecte. Cada entitat i cada relació s'identifica mitjançant una URI persistent, cosa que garanteix que les dades siguin inequívoques, enllaçables i interpretables per màquina entre sistemes i institucions.",
      "underHood.intro.p3": "Aquest model basat en grafs s'adapta especialment bé al context d'IPHES-CERCA. Permet expressar relacions complexes entre objectes, contextos, actors i activitats de recerca sense les restriccions estructurals imposades per les bases de dades relacionals tradicionals. Les dades es serialitzen en format Turtle per facilitar llegibilitat i estandardització, s'emmagatzemen en un triplestore optimitzat per a estructures en graf i es consulten amb SPARQL, un llenguatge potent dissenyat específicament per recuperar i combinar informació interconnectada. En conjunt, aquests components permeten integració interoperable, consultes de granularitat fina i reutilització a llarg termini de les dades de col·lecció.",
      "underHood.rdf.title": "1) Per què utilitzar una base de dades en graf (RDF)?",
      "underHood.rdf.p1": "RDF emmagatzema la informació en tripletes subjecte-predicat-objecte. Aquest format encaixa de manera natural amb CIDOC-CRM, on les classes són nodes i les propietats són relacions explícites.",
      "underHood.rdf.p2": "Beneficis principals: modelatge semàntic fi, interoperabilitat (ARIADNE, Europeana, EOSC) i possible inferència automàtica en alguns casos.",
      "underHood.rdf.p3": "Cost principal: una complexitat tècnica més alta per als usos operatius del dia a dia al laboratori.",
      "underHood.crm.title": "CIDOC-CRM com a base semàntica comuna",
      "underHood.crm.p1": "En absència d'un marc semàntic compartit, cada col·lecció tendeix a desenvolupar el seu propi esquema, terminologia i lògica interna. Amb el temps, aquesta fragmentació produeix sitges conceptuals, limita la interoperabilitat, complica l'anàlisi transversal entre col·leccions i augmenta el risc d'ambigüitat semàntica. Garantir la coherència entre dominis requereix, per tant, un metamodel comú capaç d'estructurar la diversitat sense suprimir l'especificitat disciplinària.",
      "underHood.crm.p2": "CIDOC-CRM proporciona aquest marc oferint una ontologia agnòstica de domini dissenyada per descriure patrimoni cultural i coneixement científic mitjançant un enfocament centrat en esdeveniments. Defineix classes estables, com E22 Man-Made Object, E53 Place o E39 Actor, i propietats explícites com P46 is composed of o P108 has produced, tot formalment alineat amb RDF. Aquesta estructura fa explícites i interpretables per màquina les relacions entre objectes, contextos, esdeveniments i actors. En mapar dades específiques de col·lecció a CIDOC-CRM, els conjunts heterogenis passen a formar part d'un graf de coneixement unificat i interoperable, mantenint la claredat conceptual.",
      "underHood.crm.p3": "El resultat és una alineació semàntica sense pèrdua de precisió científica. Un cop les col·leccions comparteixen la mateixa base, les consultes SPARQL transversals esdevenen possibles, el raonament lògic es pot aplicar entre conjunts de dades i es facilita la integració amb infraestructures internacionals de recerca com ARIADNE o EOSC. Al mateix temps, CIDOC-CRM opera com una estructura semàntica d'alt nivell, que permet mantenir vocabularis disciplinaris i descripcions detallades específiques de domini. La base harmonitza les dades a nivell conceptual preservant la granularitat necessària per a una recerca rigorosa.",
      "underHood.evidence.title": "3) Cadena d'evidència (del camp a la difusió)",
      "underHood.evidence.p1": "La cadena d'evidència descriu la construcció progressiva de la informació científica, des del fet material observable fins a la interpretació i les dades publicades.",
      "underHood.evidence.p2": "Cada pas intermedi continua essent traçable: afirmacions enllaçades, datades, atribuïdes i revisables. No és una prova única i definitiva, sinó una seqüència documentada.",
      "underHood.mwe.title": "4) El MWE: arquitectura tècnica concreta",
      "underHood.mwe.p1": "El Minimum Working Example valida aquest enfocament d'extrem a extrem amb Apache Jena Fuseki (servidor SPARQL) i TDB2 (emmagatzematge RDF persistent).",
      "underHood.mwe.p2": "Les dades es modelen en Turtle i es consulten amb SPARQL. La infraestructura es contenidoritza amb Docker Compose per a un desplegament reproduïble tant del triplestore com de la capa d'aplicació.",
      "underHood.mwe.p3": "Important: les dades del MWE són placeholders i no representen dades de producció validades.",
      "underHood.semantic.title": "Extensions CRM, ontologies i FAIRness",
      "underHood.semantic.p1": "El model nucli de CIDOC-CRM s'amplia mitjançant mòduls ontològics específics de domini com CRMarchaeo, CRMsci i CRMgeo. Aquestes extensions permeten modelar amb precisió conceptual l'estratigrafia i els processos d'excavació arqueològica, l'observació científica i l'anàlisi de materials, i la informació geoespacial. En lloc de quedar-se en un nivell descriptiu general, el model de dades pot representar esdeveniments d'excavació, procediments de mostreig, mesuraments de laboratori i relacions espacials de manera formalment estructurada i interoperable. Aquest enfocament ontològic en capes preserva el rigor metodològic mantenint l'alineació amb l'estructura central del CRM.",
      "underHood.semantic.p2": "Es reutilitzen vocabularis controlats i ontologies de referència per garantir consistència semàntica i interoperabilitat entre dominis. Recursos com Getty AAT, PeriodO, UBERON i Darwin Core s'integren mitjançant representacions RDF, SKOS o OWL. En lloc de redefinir termes localment, el projecte alinea les seves entitats amb estàndards consolidats de la comunitat, cosa que habilita significat compartit, coherència multilingüe i enllaç extern. Aquesta estratègia reforça la claredat semàntica i permet que les col·leccions participin en grafs de coneixement disciplinaris i internacionals més amplis.",
      "underHood.semantic.p3": "Finalment, els habilitadors tècnics FAIR s'integren a la infraestructura. Les URI persistents garanteixen una identificació estable de les entitats; els grafs anomenats amb procedència documenten l'origen i la transformació de les dades; la validació SHACL assegura consistència estructural i lògica; i els endpoints SPARQL proporcionen accés transparent i accionable per màquina. En conjunt, aquests mecanismes operacionalitzen els principis FAIR, fent que les dades siguin Findable, Accessible, Interoperable i Reusable, mentre preserven la traçabilitat científica i la sostenibilitat a llarg termini.",
      "underHood.interface.title": "6) Interfície i validació",
      "corIphes.meta.title": "Hub IPHES-CERCA | Col·lecció COR-IPHES",
      "corIphes.meta.description": "Pàgina pilot de la col·lecció COR-IPHES amb resum, equip, progrés de digitalització i enllaços de consulta.",
      "cor.overview.title": "Visió general",
      "cor.overview.body": "COR-IPHES (Col·lecció Osteològica de Referència d'IPHES-CERCA) és una col·lecció integral d'anatomia comparada allotjada a l'Institut Català de Paleoecologia Humana i Evolució Social de Tarragona, Espanya.",
      "cor.content.title": "Contingut",
      "cor.content.body": "Inclou més de 300 esquelets complets o parcials de mamífers i ocells d'Europa i d'Àfrica, incloent-hi taxons comuns i espècies rares o amenaçades com el linx ibèric (Lynx pardinus), el bisó europeu (Bison bonasus) i el trencalòs (Gypaetus barbatus). Els espècimens es van obtenir de manera ètica per morts naturals, causes accidentals o donacions institucionals, i s'han preparat i catalogat acuradament per a la recerca i la docència.",
      "cor.team.title": "Equip",
      "cor.progress.title": "Progrés de digitalització",
      "cor.progress.aria": "Progrés de digitalització: 15,2 per cent",
      "cor.formats.title": "Formats",
      "cor.volume.title": "Volum",
      "cor.volume.files": "12185 fitxers",
      "cor.ontologies.title": "Ontologies utilitzades",
      "cor.consult.title": "Consulta",
      "cor.consult.fullscreenAria": "Obre COR-IPHES en mode pantalla completa",
      "cor.consult.iframeTitle": "Lloc web de COR-IPHES",
      "cor.internalLinks.title": "Enllaços interns",
      "cor.internalLinks.database": "Base de dades",
      "cor.internalLinks.website": "Lloc web",
      "cor.internalLinks.labDocs": "Documentació del laboratori",
      "cor.externalLinks.title": "Enllaços externs",
      "underHood.interface.p1": "La interfície en Node.js / Express actua com a proxy cap a SPARQL i ofereix exploració d'entitats, consultes predefinides i visualitzacions de graf.",
      "underHood.interface.p2": "SHACL s'utilitza per validar restriccions estructurals i semàntiques als grafs RDF.",
      "underHood.takeaways.title": "7) Idees clau del MWE",
      "underHood.takeaways.p1": "1. La implementació és exigent: requereix competències especialitzades i múltiples components tècnics.",
      "underHood.takeaways.p2": "2. L'emmarcament conceptual ha de ser rigorós: el model de referència, les ontologies i els vocabularis s'han de definir amb precisió.",
      "underHood.takeaways.p3": "3. L'UX és més difícil de dissenyar, perquè un enfocament holístic en graf multiplica tipus d'informació, opcions i patrons d'interacció.",
      "staff.role.responsible": "Responsable",
      "staff.role.member": "Membre",
      "footer.partnersAria": "Socis",
      "footer.address": "2026 - IPHES-CERCA Zona Educacional, 4, Campus Sescelades URV (Edifici W3), 43007 Tarragona (Espanya) · info@iphes.cat | (+34) 977 943 003",
      "footer.privacy": "Aquest lloc web no recopila les teves dades i no utilitza cookies."
    },
    en: {
      "meta.title": "Hub IPHES-CERCA | IPHES-CERCA Collections Digitization",
      "meta.description": "Institutional hub for the IPHES-CERCA collections digitization project.",
      "header.title": "IPHES-CERCA Collections Digitization",
      "header.baseline": "Discover how IPHES-CERCA is digitizing its collections through the Maria de Maeztu 2025-2029 project led by the laboratory.",
      "header.homeAria": "Go to homepage",
      "lang.toggleAria": "Change language",
      "hero.cta": "Learn more",
      "metrics.title": "Key Numbers",
      "metrics.body": "",
      "metrics.card1.value": "3 years",
      "metrics.card1.label": "Planning horizon",
      "metrics.card2.value": "15 collections",
      "metrics.card2.label": "Archaeological, reference, experimental",
      "metrics.card4.value": "1 hub",
      "metrics.card4.label": "Unified access point",
      "collections.title": "Collections Overview",
      "collections.desc": "Temporary placeholder description for this collection.",
      "collections.access": "Access",
      "collections.requestSubject": "Collection access request",
      "hood.title": "Under the Hood",
      "hood.body": "Collections digitization relies on advanced data management solutions and infrastructure technologies. To learn more, click the button below.",
      "hood.cta": "Learn more",
      "digitalization.title": "What is digitalization?",
      "digitalization.body": "Digitalization is the process of transforming collection workflows, metadata, and records into structured digital resources to improve access, interoperability, preservation, and scientific reuse.",
      "digitalizationPage.meta.title": "Hub IPHES-CERCA | What is digitalization?",
      "digitalizationPage.meta.description": "Why digitization matters for archaeological collections: governance, FAIR principles, infrastructure, and scientific reuse.",
      "digitalizationPage.intro.title": "Why Digitising Collections Matters",
      "digitalizationPage.intro.p1": "Digitising scientific collections is not simply a technical upgrade, it is a strategic transformation that reshapes how knowledge is produced, preserved, and shared. Archaeological and heritage collections are complex research infrastructures in their own right: they generate data, support interpretation, enable training, and underpin scientific credibility. As research methods evolve and data volumes increase, institutions must adopt digital frameworks capable of ensuring sustainability, accessibility, and analytical depth.",
      "digitalizationPage.intro.p2": "The following sections outline the key reasons why digitisation has become essential. Together, they demonstrate how digital transformation strengthens scientific quality, improves governance, expands access, and positions collections at the centre of an open, collaborative, and future-oriented research ecosystem.",
      "digitalizationPage.block1.title": "Complexity and Scale of Archaeological Data",
      "digitalizationPage.block1.body": "Modern archaeological research generates vast and highly diverse datasets: 3D models, spatial coordinates, stratigraphic records, photographs, analytical measurements, and laboratory results. As the volume and heterogeneity of this information increase, traditional storage and documentation methods become insufficient. Digitising collections enables structured organisation, efficient retrieval, and long-term consistency, ensuring that objects remain meaningfully connected to their contextual and analytical data.",
      "digitalizationPage.block2.title": "Secure and Responsible Data Governance",
      "digitalizationPage.block2.body": "Digitisation is not only a technical process but also a governance framework. It allows institutions to define clear policies for data storage, access, protection, and preservation. By moving away from fragmented personal storage systems toward shared infrastructure, digital collections can be safeguarded against loss, duplication, and misuse, while ensuring ethical handling and controlled access where required.",
      "digitalizationPage.block3.title": "Alignment with Open Science and FAIR Principles",
      "digitalizationPage.block3.body": "Contemporary research operates within an Open Science ecosystem that promotes transparency, accessibility, and reusability. Digitised collections can be structured according to FAIR principles (Findable, Accessible, Interoperable, Reusable), making data discoverable and usable beyond the original research team. This approach enhances reproducibility, strengthens collaboration, and increases the long-term scientific impact of collections.",
      "digitalizationPage.block4.title": "Creation of a Shared Data Infrastructure",
      "digitalizationPage.block4.body": "A dedicated digital environment, often described as a Data Space, provides a unified framework where data can be managed, curated, and processed in a consistent way. Such infrastructure enables researchers to work within shared standards, connect laboratories and instruments, and integrate datasets across projects. This common ecosystem reduces silos and fosters interdisciplinary collaboration.",
      "digitalizationPage.block5.title": "Maximising Scientific Value and Reusability",
      "digitalizationPage.block5.body": "Reference collections are fundamental research tools. When digitised and properly curated, they can be searched, compared, and analysed at scale. Standardised metadata and structured databases make it possible to extract new insights, perform cross-comparative analyses, and support research questions that would be difficult or impossible using analogue systems. Digitisation thus increases the analytical potential of each specimen.",
      "digitalizationPage.block6.title": "Expanding Access and Dissemination",
      "digitalizationPage.block6.body": "Digital collections can be shared through institutional repositories and trusted thematic platforms, extending their reach to researchers, educators, and students worldwide. This broader accessibility transforms collections from local research assets into global scientific resources, strengthening collaboration and supporting training and capacity building across institutions.",
      "digitalizationPage.block7.title": "Enabling Advanced Analytical Methods",
      "digitalizationPage.block7.body": "Emerging research methodologies, such as artificial intelligence, predictive modelling, and advanced GIS analyses, require large, well-structured, machine-readable datasets. Digitisation provides the foundation necessary for deploying these tools effectively. Without robust digital infrastructures, the potential of advanced computational approaches remains limited.",
      "digitalizationPage.block8.title": "Standardisation and Quality Improvement",
      "digitalizationPage.block8.body": "Digitising collections encourages the development of standardised workflows, documentation practices, and quality control procedures. Structured digital systems improve traceability, reduce inconsistencies, and facilitate reproducibility. Over time, this contributes to higher scientific reliability and more efficient research processes.",
      "digitalizationPage.block9.title": "Institutional Modernisation and Talent Attraction",
      "digitalizationPage.block9.body": "A well-developed digital infrastructure signals scientific maturity and innovation. Institutions that invest in digitised collections and modern data stewardship are better positioned to attract international researchers, foster interdisciplinary projects, and retain skilled personnel. Digital transformation therefore strengthens both scientific excellence and institutional competitiveness.",
      "roadmapVisual.title": "Visual Roadmap",
      "roadmapVisual.body": "Phase-based roadmap to quickly understand core project milestones.",
      "roadmapVisual.phase1.title": "Structuring",
      "roadmapVisual.phase1.body": "Information gathering, collection survey and prioritization, tool selection, and protocol presentation.",
      "roadmapVisual.phase2.title": "Deployment",
      "roadmapVisual.phase2.body": "Initial implementation on pilot collections, field-feedback adjustments, technician training, and progressive rollout.",
      "roadmapVisual.phase3.title": "Consolidation",
      "roadmapVisual.phase3.body": "Tool and protocol stabilization, full documentation, synthesis report, and post-MdM digitization roadmap.",
      "underHood.meta.title": "Hub IPHES-CERCA | Under the Hood",
      "underHood.meta.description": "Technical page of the project: RDF architecture, chain of evidence, ontologies, and deployed MWE.",
      "underHood.foundation.title": "Building the Foundations of Digital Coherence",
      "underHood.foundation.p1": "The digitization strategy at IPHES-CERCA is conceived as a laboratory-wide transformation rather than a collection-specific initiative. It aims to establish a shared conceptual and technical foundation capable of supporting the diversity of archaeological, reference, and experimental holdings while ensuring long-term scientific coherence. Beyond the simple production of digital records, the objective is to structure how knowledge is organized, connected, and sustained across time.",
      "underHood.foundation.p2": "The sections that follow present the architectural choices, semantic framework, and methodological principles that underpin this strategy. Together, they outline how a unified digital ecosystem can support interoperability, research traceability, and integration within broader national and international infrastructures, while remaining adaptable to disciplinary specificities.",
      "underHood.intro.title": "RDF architecture for laboratory-wide digitization",
      "underHood.intro.p1": "IPHES-CERCA digitizes highly heterogeneous collections (archaeological, reference, experimental), whose scientific value depends not only on the objects themselves but also on their provenance, contextual associations, and full research traceability. The challenge is therefore not merely to store digital files, but to preserve and formalize the relationships that make these collections scientifically meaningful.",
      "underHood.intro.p2": "To address this, the project adopts RDF (Resource Description Framework), a W3C standard designed to represent knowledge as a graph. Instead of organizing information in rigid tables, RDF models data as simple, explicit statements called triples: a subject, a predicate, and an object. Each entity and each relationship is identified by a persistent URI, ensuring that data are unambiguous, linkable, and interpretable by machines across systems and institutions.",
      "underHood.intro.p3": "This graph-based model is particularly suited to the IPHES-CERCA context. It allows complex relationships between objects, contexts, actors, and research activities to be expressed without structural constraints imposed by traditional relational databases. Data are serialized in Turtle format for readability and standardization, stored in a triplestore optimized for graph structures, and queried using SPARQL, a powerful language specifically designed to retrieve and combine interconnected information. Together, these components enable interoperable integration, fine-grained querying, and long-term reusability of collection data.",
      "underHood.rdf.title": "1) Why use a graph database (RDF)?",
      "underHood.rdf.p1": "RDF stores information as subject-predicate-object triples. This format aligns naturally with CIDOC-CRM, where classes become nodes and properties become explicit relations.",
      "underHood.rdf.p2": "Main benefits: fine-grained semantic modeling, interoperability (ARIADNE, Europeana, EOSC), and possible automatic inference in some cases.",
      "underHood.rdf.p3": "Main tradeoff: higher technical complexity for day-to-day laboratory operations.",
      "underHood.crm.title": "CIDOC-CRM as a Shared Semantic Backbone",
      "underHood.crm.p1": "In the absence of a shared semantic framework, each collection tends to develop its own schema, terminology, and internal logic. Over time, this fragmentation produces conceptual silos, limits interoperability, complicates cross-collection analysis, and increases the risk of semantic ambiguity. Ensuring coherence across domains therefore requires a common metamodel capable of structuring diversity without suppressing disciplinary specificity.",
      "underHood.crm.p2": "CIDOC-CRM provides such a framework by offering a domain-agnostic ontology designed to describe cultural heritage and scientific knowledge through an event-centric approach. It defines stable classes, such as E22 Man-Made Object, E53 Place, or E39 Actor, and explicit properties like P46 is composed of or P108 has produced, all formally aligned with RDF. This structure makes relationships between objects, contexts, events, and actors explicit and machine-interpretable. By mapping collection-specific data to CIDOC-CRM, heterogeneous datasets become part of a unified and interoperable knowledge graph while retaining conceptual clarity.",
      "underHood.crm.p3": "The result is semantic alignment without loss of scientific precision. Once collections share the same backbone, cross-collection SPARQL querying becomes possible, logical reasoning can be applied across datasets, and integration with international research infrastructures such as ARIADNE or EOSC is facilitated. At the same time, CIDOC-CRM operates as a high-level semantic structure, allowing disciplinary vocabularies and detailed domain-specific descriptions to remain in place. The backbone harmonizes data at a conceptual level while preserving the granularity required for rigorous research.",
      "underHood.evidence.title": "3) Chain of evidence (from field to dissemination)",
      "underHood.evidence.p1": "The chain of evidence describes the progressive construction of scientific information, from observable material fact to interpretation and published data.",
      "underHood.evidence.p2": "Each intermediate step remains traceable: linked, dated, attributed, and revisable assertions. It is not a single definitive proof, but a documented sequence.",
      "underHood.mwe.title": "4) The MWE: concrete technical architecture",
      "underHood.mwe.p1": "The Minimum Working Example validates this end-to-end approach with Apache Jena Fuseki (SPARQL server) and TDB2 (persistent RDF storage).",
      "underHood.mwe.p2": "Data are modeled in Turtle and queried with SPARQL. Infrastructure is containerized with Docker Compose for reproducible deployment of both triplestore and application layer.",
      "underHood.mwe.p3": "Important: MWE data are placeholders and do not represent validated production data.",
      "underHood.semantic.title": "CRM extensions, ontologies, and FAIRness",
      "underHood.semantic.p1": "The CIDOC-CRM core model is extended through domain-specific ontological modules such as CRMarchaeo, CRMsci, and CRMgeo. These extensions allow the modelling of archaeological stratigraphy and excavation processes, scientific observation and material analysis, and geospatial information with conceptual precision. Instead of remaining at a general descriptive level, the data model can therefore represent excavation events, sampling procedures, laboratory measurements, and spatial relationships in a formally structured and interoperable way. This layered ontology approach preserves methodological rigor while maintaining alignment with the core CRM structure.",
      "underHood.semantic.p2": "Controlled vocabularies and reference ontologies are reused to ensure semantic consistency and cross-domain interoperability. Resources such as Getty AAT, PeriodO, UBERON, and Darwin Core are integrated using RDF, SKOS, or OWL representations. Rather than redefining terms locally, the project aligns its entities with established community standards, enabling shared meaning, multilingual consistency, and external linking. This strategy strengthens semantic clarity and allows the collections to participate in broader disciplinary and international knowledge graphs.",
      "underHood.semantic.p3": "Finally, technical FAIR enablers are embedded at the infrastructure level. Persistent URIs ensure stable identification of entities; provenance-aware named graphs document the origin and transformation of data; SHACL validation guarantees structural and logical consistency; and SPARQL endpoints provide transparent and machine-actionable access. Together, these mechanisms operationalize the FAIR principles, making data Findable, Accessible, Interoperable, and Reusable, while preserving scientific traceability and long-term sustainability.",
      "underHood.interface.title": "6) Interface and validation",
      "corIphes.meta.title": "Hub IPHES-CERCA | COR-IPHES Collection",
      "corIphes.meta.description": "Pilot page for the COR-IPHES collection with overview, team, digitization progress, and consultation links.",
      "cor.overview.title": "Overview",
      "cor.overview.body": "The COR-IPHES (Osteological Reference Collection of IPHES-CERCA) is a comprehensive comparative anatomy collection housed at the Institut Català de Paleoecologia Humana i Evolució Social in Tarragona, Spain.",
      "cor.content.title": "Content",
      "cor.content.body": "It includes over 300 complete or partial skeletons of mammals and birds from Europe and Africa, including both common taxa and rare or endangered species such as the Iberian lynx (Lynx pardinus), European bison (Bison bonasus), and bearded vulture (Gypaetus barbatus). Specimens were obtained ethically through natural deaths, accidental causes, or institutional donations, and have been carefully prepared and cataloged for research and teaching purposes.",
      "cor.team.title": "Team",
      "cor.progress.title": "Digitization progress",
      "cor.progress.aria": "Digitization progress: 15.2 percent",
      "cor.formats.title": "Formats",
      "cor.volume.title": "Volume",
      "cor.volume.files": "12185 files",
      "cor.ontologies.title": "Used ontologies",
      "cor.consult.title": "Consult",
      "cor.consult.fullscreenAria": "Open COR-IPHES in full-screen mode",
      "cor.consult.iframeTitle": "COR-IPHES website",
      "cor.internalLinks.title": "Internal links",
      "cor.internalLinks.database": "Database",
      "cor.internalLinks.website": "Website",
      "cor.internalLinks.labDocs": "Lab docs",
      "cor.externalLinks.title": "External links",
      "underHood.interface.p1": "The Node.js / Express interface acts as a proxy to SPARQL and provides entity exploration, predefined queries, and graph visualizations.",
      "underHood.interface.p2": "SHACL is used to validate structural and semantic constraints in RDF graphs.",
      "underHood.takeaways.title": "7) Key takeaways from the MWE",
      "underHood.takeaways.p1": "1. Implementation is demanding: it requires specialized skills and multiple technical components.",
      "underHood.takeaways.p2": "2. Conceptual framing must be rigorous: reference model, ontologies, and vocabularies must be precisely defined.",
      "underHood.takeaways.p3": "3. UX is harder to design, because a holistic graph approach increases information types, options, and interaction patterns.",
      "staff.role.responsible": "Lead",
      "staff.role.member": "Member",
      "footer.partnersAria": "Partners",
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

    document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
      const attrMap = node.getAttribute("data-i18n-attr");
      if (!attrMap) {
        return;
      }
      attrMap.split(";").forEach((entry) => {
        const [attr, key] = entry.split(":").map((part) => part?.trim());
        if (!attr || !key) {
          return;
        }
        node.setAttribute(attr, t(key, safeLang));
      });
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
