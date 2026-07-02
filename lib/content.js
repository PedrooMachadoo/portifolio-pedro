// ============================================================
// CONTENT + i18n
// All interface copy in pt-BR / en / es.
// Cases carry shared visual identity + translated narrative.
// ============================================================

export const LOCALES = ["pt", "en", "es"];

export const LOCALE_LABELS = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

// ---- Contact (from Pedro's CV) --------------------------------
export const CONTACT = {
  email: "pedro.machado1108@gmail.com",
  phone: "+55 81 99883-8259",
  phoneHref: "tel:+5581998838259",
  whatsapp: "https://wa.me/5581998838259",
  behance: "https://www.behance.net/pamm-",
  linkedin: "https://www.linkedin.com/in/pedro-ant%C3%B4nio-0a41621a6/",
};

// ---- Case identities ------------------------------------------
// Each case section "wears" its own palette. Colors chosen to
// echo the real product while staying within the editorial frame.
export const CASES = [
  {
    id: "bboom",
    name: "Bboom",
    url: "https://bboom.app/",
    year: "2026",
    logo: "/logos/bboom.svg",
    logoClass: "max-h-[52px] md:max-h-[64px]", // wide wordmark
    video: "/cases/bboom.mp4",
    poster: "/cases/bboom.jpg",
    // Palette pulled straight from bboom.app: cool blue-black stage (#141619),
    // the brand's orange→red CTA gradient (#f25a38 → #f21616) and cool text.
    theme: {
      bg: "#141619",
      surface: "#1c1f24",
      ink: "#f3f4f8",
      ink2: "#a0a1a8",
      accent: "#f21616",
      accent2: "#f25a38",
      glow: "rgba(242, 22, 22, 0.42)",
      cta: "linear-gradient(90deg, #f25a38 0%, #f21616 100%)",
      ctaInk: "#ffffff",
      mockBg: "linear-gradient(150deg, #1c1f24 0%, #141619 55%, #16181c 100%)",
    },
    i18n: {
      pt: {
        kind: "Plataforma · Eventos ao vivo",
        title: "Operação de eventos em tempo real",
        problem:
          "No ao vivo, o produtor não tem margem para erro. Com lotação, bar e check-in em telas separadas, cada decisão virava aposta e a operação vivia no limite.",
        role: "Cuidei da experiência de decidir sob pressão: hierarquia clara, leitura em segundos e as ações críticas sempre à mão, pra equipe confiar no que vê.",
        result:
          "Uma sala de controle única, onde lotação, comandas e check-in aparecem num só olhar. Menos ruído e mais confiança, do primeiro ingresso ao último pedido.",
        tags: ["Product Design", "Dashboard", "Design System", "Mobile"],
        highlights: [
          "Painel em tempo real de lotação por setor",
          "Comandas e bar centralizados",
          "Check-in ágil na entrada",
          "App do público durante o evento",
        ],
      },
      en: {
        kind: "Platform · Live events",
        title: "Real-time event operations",
        problem:
          "Going live leaves the producer no room for error. With capacity, bar and check-in on separate screens, every call became a guess and the operation ran on edge.",
        role: "I shaped the experience of deciding under pressure: clear hierarchy, readable in seconds and the critical actions always within reach, so the team trusts what it sees.",
        result:
          "A single control room where capacity, tabs and check-in show at a glance. Less noise and more confidence, from first ticket to last order.",
        tags: ["Product Design", "Dashboard", "Design System", "Mobile"],
        highlights: [
          "Real-time capacity dashboard by sector",
          "Tabs and bar in one place",
          "Fast check-in at the door",
          "Attendee app during the event",
        ],
      },
      es: {
        kind: "Plataforma · Eventos en vivo",
        title: "Operación de eventos en tiempo real",
        problem:
          "En el directo el productor no tiene margen de error. Con aforo, barra y check-in en pantallas separadas, cada decisión era una apuesta y la operación vivía al límite.",
        role: "Cuidé la experiencia de decidir bajo presión: jerarquía clara, lectura en segundos y las acciones críticas siempre a mano, para que el equipo confíe en lo que ve.",
        result:
          "Una sala de control única donde aforo, comandas y check-in se ven de un vistazo. Menos ruido y más confianza, del primer ticket al último pedido.",
        tags: ["Product Design", "Dashboard", "Design System", "Mobile"],
        highlights: [
          "Panel en tiempo real de aforo por sector",
          "Comandas y barra centralizadas",
          "Check-in ágil en la entrada",
          "App del público durante el evento",
        ],
      },
    },
  },
  {
    id: "artin",
    name: "Artin Laser",
    url: "https://artin-laser.vercel.app/",
    year: "2026",
    logo: "/logos/artin.png",
    logoClass: "max-h-[80px] md:max-h-[96px]", // squarer emblem, needs more height
    video: "/cases/artin.mp4",
    poster: "/cases/artin.jpg",
    // Brand palette from the Artin Laser logo: red titles/accents, a royal
    // blue CTA and neutral near-black body text on a clean warm-white.
    theme: {
      bg: "#f2f0ea",
      surface: "#faf9f5",
      ink: "#232327",
      ink2: "#64646b",
      accent: "#c8121a",
      accent2: "#1c3383",
      glow: "rgba(200, 18, 26, 0.26)",
      cta: "#1c3383",
      ctaInk: "#ffffff",
      mockBg: "linear-gradient(150deg, #f6f4ef 0%, #eae6dd 100%)",
    },
    i18n: {
      pt: {
        kind: "Site · Fabricação sob medida",
        title: "A ideia que ganha forma",
        problem:
          "Corte e gravação a laser vendem pelo olho, mas quem buscava o serviço não encontrava provas do acabamento nem um jeito simples de pedir orçamento.",
        role: "Organizei a experiência em torno da confiança: peças reais em destaque, linguagem direta e um caminho curto e óbvio até o orçamento no WhatsApp.",
        result:
          "Uma vitrine que faz o material falar: textura e acabamento em primeiro plano e um pedido de orçamento a poucos toques, do conceito à entrega.",
        tags: ["Web Design", "Landing Page", "UX Writing"],
        highlights: [
          "Vitrine das peças e acabamentos",
          "Processo do corte à entrega",
          "Pedido de orçamento pelo WhatsApp",
        ],
      },
      en: {
        kind: "Website · Custom fabrication",
        title: "Where the idea takes shape",
        problem:
          "Laser cutting and engraving sell with the eyes, but people looking for the service found no proof of the finish and no simple way to ask for a quote.",
        role: "I organized the experience around trust: real pieces up front, plain language and a short, obvious path to a quote on WhatsApp.",
        result:
          "A showcase that lets the material speak: texture and finish in the foreground and a quote request a few taps away, from concept to delivery.",
        tags: ["Web Design", "Landing Page", "UX Writing"],
        highlights: [
          "Showcase of pieces and finishes",
          "Process from cut to delivery",
          "Quote request over WhatsApp",
        ],
      },
      es: {
        kind: "Sitio · Fabricación a medida",
        title: "La idea que toma forma",
        problem:
          "El corte y grabado láser entran por los ojos, pero quien buscaba el servicio no encontraba pruebas del acabado ni una forma simple de pedir presupuesto.",
        role: "Organicé la experiencia en torno a la confianza: piezas reales destacadas, lenguaje directo y un camino corto y obvio hasta el presupuesto por WhatsApp.",
        result:
          "Una vitrina que hace hablar al material: textura y acabado en primer plano y una solicitud de presupuesto a pocos toques, del concepto a la entrega.",
        tags: ["Web Design", "Landing Page", "UX Writing"],
        highlights: [
          "Vitrina de piezas y acabados",
          "Proceso del corte a la entrega",
          "Solicitud de presupuesto por WhatsApp",
        ],
      },
    },
  },
  {
    id: "silvia",
    name: "Silvia Miranda",
    url: "https://silvia-miranda.vercel.app/",
    year: "2026",
    logo: "/logos/silvia.png",
    logoClass: "max-h-[84px] md:max-h-[104px]", // squarer emblem
    video: "/cases/silvia.mp4",
    poster: "/cases/silvia.jpg",
    // Palette pulled straight from silvia-miranda.vercel.app: ivory stage
    // (marfim #faf6f1), brand magenta CTA (#d6157c) and warm espresso text.
    theme: {
      bg: "#faf6f1",
      surface: "#f1e9e0",
      ink: "#2a211c",
      ink2: "#6e5e50",
      accent: "#d6157c",
      accent2: "#b01166",
      glow: "rgba(214, 21, 124, 0.26)",
      cta: "#d6157c",
      ctaInk: "#ffffff",
      mockBg: "linear-gradient(150deg, #faf6f1 0%, #f1e9e0 100%)",
    },
    i18n: {
      pt: {
        kind: "Site · Estética & bem-estar",
        title: "Viva bem na própria pele",
        problem:
          "Escolher uma esteticista é decisão de confiança. Sem uma presença digital à altura, 20 anos de experiência não chegavam a quem buscava cuidado antes do primeiro contato.",
        role: "Trabalhei a experiência pra acolher e dar segurança: fotografia real, processo passo a passo e um agendamento sem barreiras, guiando a visitante até o WhatsApp.",
        result:
          "Uma presença que acalma e convence: prova social, clareza no que esperar e um caminho tranquilo que transforma a visita em agendamento.",
        tags: ["Web Design", "Landing Page", "Conversion"],
        highlights: [
          "Estética facial, corporal e depilação",
          "Agendamento direto pelo WhatsApp",
          "Prova social e fotos reais",
        ],
      },
      en: {
        kind: "Website · Aesthetics & wellness",
        title: "Live well in your own skin",
        problem:
          "Choosing an aesthetician is a matter of trust. Without a digital presence to match, 20 years of experience never reached those seeking care before the first contact.",
        role: "I worked the experience to welcome and reassure: real photography, a step-by-step process and booking with no barriers, guiding the visitor to WhatsApp.",
        result:
          "A presence that calms and convinces: social proof, clarity on what to expect and a gentle path that turns a visit into a booking.",
        tags: ["Web Design", "Landing Page", "Conversion"],
        highlights: [
          "Facial, body and hair-removal care",
          "Booking straight through WhatsApp",
          "Social proof and real photos",
        ],
      },
      es: {
        kind: "Sitio · Estética y bienestar",
        title: "Vive bien en tu propia piel",
        problem:
          "Elegir esteticista es una decisión de confianza. Sin una presencia digital a la altura, 20 años de experiencia no llegaban a quien buscaba cuidado antes del primer contacto.",
        role: "Trabajé la experiencia para acoger y dar seguridad: fotografía real, proceso paso a paso y una reserva sin barreras, guiando a la visitante hasta WhatsApp.",
        result:
          "Una presencia que calma y convence: prueba social, claridad sobre qué esperar y un camino tranquilo que convierte la visita en cita.",
        tags: ["Web Design", "Landing Page", "Conversion"],
        highlights: [
          "Estética facial, corporal y depilación",
          "Reserva directa por WhatsApp",
          "Prueba social y fotos reales",
        ],
      },
    },
  },
  {
    id: "ilha",
    name: "A Ilha está Afundando",
    url: "https://ilha-afundando.onrender.com/landing/index.html",
    year: "2026",
    logo: "/logos/ilha.png",
    logoClass: "max-h-[72px] md:max-h-[88px]", // wide wooden-sign emblem
    video: "/cases/ilha.mp4",
    poster: "/cases/ilha.jpg",
    // Palette pulled straight from the live game site: deep-ocean stage
    // (oceano-profundo #082c44), amber CTA (#e0a526 on dark-brown ink) and sand text.
    theme: {
      bg: "#082c44",
      surface: "#0b3c5d",
      ink: "#f4f1e6",
      ink2: "#9fbccd",
      accent: "#e0a526",
      accent2: "#2e78b5",
      glow: "rgba(224, 165, 38, 0.42)",
      cta: "#e0a526",
      ctaInk: "#3a2600",
      mockBg: "linear-gradient(160deg, #0b3c5d 0%, #082c44 55%, #0e4260 100%)",
    },
    i18n: {
      pt: {
        kind: "Jogo · Web + Mobile",
        title: "O tabuleiro na TV, o controle no celular",
        problem:
          "Todo party game se decide nos primeiros 30 segundos. Se exige instalar app ou criar conta, a mesa esfria antes de a diversão começar.",
        role: "Foquei em entrar e jogar sem atrito: um QR leva todo mundo pra sala, o celular vira controle secreto e a ilha 3D reage na TV, sem manual e sem cadastro.",
        result:
          "Uma experiência de duas telas que qualquer grupo entende na hora: tensão na TV, segredo no celular e risada do lobby ao resgate.",
        tags: ["Product Design", "Game UX", "Mobile", "Real-time"],
        highlights: [
          "Entrada por QR, sem instalar app",
          "Celular vira controle secreto",
          "Ilha 3D reage ao vivo na TV",
        ],
      },
      en: {
        kind: "Game · Web + Mobile",
        title: "The board on the TV, the controller on your phone",
        problem:
          "Every party game is won in the first 30 seconds. Ask people to install an app or create an account and the room cools down before the fun begins.",
        role: "I focused on jumping straight into play: a QR brings everyone into the room, the phone becomes a secret controller and the 3D island reacts on the TV, no manual and no sign-up.",
        result:
          "A two-screen experience any group gets instantly: tension on the TV, secrets on the phone and laughter from lobby to rescue.",
        tags: ["Product Design", "Game UX", "Mobile", "Real-time"],
        highlights: [
          "QR entry, no app install",
          "Phone becomes a secret controller",
          "3D island reacts live on the TV",
        ],
      },
      es: {
        kind: "Juego · Web + Móvil",
        title: "El tablero en la TV, el control en el móvil",
        problem:
          "Todo party game se decide en los primeros 30 segundos. Si exige instalar app o crear cuenta, la mesa se enfría antes de que empiece la diversión.",
        role: "Me enfoqué en entrar y jugar sin fricción: un QR lleva a todos a la sala, el móvil se vuelve control secreto y la isla 3D reacciona en la TV, sin manual y sin registro.",
        result:
          "Una experiencia de dos pantallas que cualquier grupo entiende al instante: tensión en la TV, secreto en el móvil y risas del lobby al rescate.",
        tags: ["Product Design", "Game UX", "Mobile", "Real-time"],
        highlights: [
          "Entrada por QR, sin instalar app",
          "El móvil se vuelve control secreto",
          "Isla 3D reacciona en vivo en la TV",
        ],
      },
    },
  },
];

// ---- Skills marquee -------------------------------------------
// Grouped by stage of the process so the section reads as a method,
// not a scrolling wall of words. Group titles live in t.skills.groups.
export const SKILL_GROUPS = [
  {
    id: "discovery",
    items: ["UX Research", "Discovery", "Usability", "Accessibility"],
  },
  {
    id: "design",
    items: ["Product Design", "UI Design", "Interaction Design", "Prototyping"],
  },
  {
    id: "delivery",
    items: ["Design Systems", "Design Ops", "Figma", "AI + UX"],
  },
];

// ---- UI copy dictionary ---------------------------------------
export const DICT = {
  pt: {
    nav: {
      works: "Trabalhos",
      about: "Sobre",
      contact: "Contato",
      cta: "Vamos conversar",
      menu: "Menu",
      close: "Fechar",
      skipToContent: "Pular para o conteúdo",
    },
    hero: {
      kicker: "Product Designer · UX/UI · Recife, Brasil",
      name: "Pedro Antônio",
      role: "Product Designer · Design Engineer",
      positioning:
        "Transformo a dor do usuário em produtos digitais que geram confiança e vendem. Do discovery ao delivery, elimino fricção, guio decisões com clareza e traduzo a marca em experiências que convertem.",
      ctaPrimary: "Ver trabalhos",
      ctaSecondary: "Vamos conversar",
      available: "Disponível para novos projetos",
    },
    manifesto: {
      index: "01",
      label: "Manifesto",
      text: "Acredito que boa interface some. Começo pela dor do usuário, elimino fricção, facilito a decisão e alinho tudo à marca, do primeiro clique à venda.",
    },
    works: {
      index: "02",
      label: "Trabalhos selecionados",
      title: "Produtos reais, no ar",
      subtitle:
        "Uma seleção de trabalhos. Cada projeto vive no seu próprio ambiente, então cada seção veste a identidade do case.",
      problemLabel: "O desafio",
      roleLabel: "Meu papel",
      resultLabel: "O resultado",
      view: "Ver projeto ao vivo",
      scrubHint: "Role dentro para explorar",
      learnMore: "Saber mais sobre o projeto",
      highlightsLabel: "Destaques",
      close: "Fechar",
    },
    about: {
      index: "03",
      label: "Sobre",
      title: "Produto e IA, lado a lado",
      p1: "Sou Product Designer em Recife. Trabalho ponta a ponta: da pesquisa e do discovery até a interface final e a entrega com o time de dev.",
      p2: "Meu diferencial para 2026 é a combinação de produto com IA: um MBA em Inovação Orientada à IA e UX. Uso IA para acelerar o processo, não para substituir a decisão de design.",
      p3: "Passei por Mobs2, MID e Promova, desenhando fluxos complexos, design systems e reduzindo fricção onde ela mais custa.",
      photoAlt: "Retrato de Pedro Antônio",
    },
    skills: {
      index: "04",
      label: "Competências",
      title: "Do problema à entrega",
      groups: {
        discovery: "Descoberta",
        design: "Design",
        delivery: "Entrega",
      },
    },
    contact: {
      index: "05",
      label: "Contato",
      title: "Vamos conversar?",
      support: "Aberto a oportunidades de Product Design.",
      emailBtn: "Escrever e-mail",
      or: "ou",
      whatsapp: "WhatsApp",
      elsewhere: "Também em",
    },
    footer: {
      tagline: "Product Designer · Recife, Brasil",
      backToTop: "Voltar ao topo",
      credit: "Projetado e desenvolvido por Pedro Antônio",
      rights: "Todos os direitos reservados",
    },
    theme: { light: "Tema claro", dark: "Tema escuro" },
  },

  en: {
    nav: {
      works: "Work",
      about: "About",
      contact: "Contact",
      cta: "Let's talk",
      menu: "Menu",
      close: "Close",
      skipToContent: "Skip to content",
    },
    hero: {
      kicker: "Product Designer · UX/UI · Recife, Brazil",
      name: "Pedro Antônio",
      role: "Product Designer · Design Engineer",
      positioning:
        "I turn user pain into digital products people trust and buy. From discovery to delivery, I cut friction, sharpen decisions, and turn brand into experiences that convert.",
      ctaPrimary: "View work",
      ctaSecondary: "Let's talk",
      available: "Available for new projects",
    },
    manifesto: {
      index: "01",
      label: "Manifesto",
      text: "I believe good interface disappears. I start from the user's pain, clear the friction, make the decision easy, and align it all with the brand, from first click to sale.",
    },
    works: {
      index: "02",
      label: "Selected work",
      title: "Real products, live",
      subtitle:
        "A selection of work. Each project lives in its own world, so each section wears the identity of the case.",
      problemLabel: "The challenge",
      roleLabel: "My role",
      resultLabel: "The result",
      view: "View live project",
      scrubHint: "Scroll inside to explore",
      learnMore: "Learn more about the project",
      highlightsLabel: "Highlights",
      close: "Close",
    },
    about: {
      index: "03",
      label: "About",
      title: "Product and AI, side by side",
      p1: "I'm a Product Designer based in Recife. I work end to end: from research and discovery to the final interface and delivery with the dev team.",
      p2: "My edge for 2026 is the mix of product and AI: an MBA in AI-Driven Innovation and UX. I use AI to speed up the process, not to replace the design decision.",
      p3: "I've worked at Mobs2, MID and Promova, designing complex flows, design systems and reducing friction where it costs the most.",
      photoAlt: "Portrait of Pedro Antônio",
    },
    skills: {
      index: "04",
      label: "Capabilities",
      title: "From problem to delivery",
      groups: {
        discovery: "Discovery",
        design: "Design",
        delivery: "Delivery",
      },
    },
    contact: {
      index: "05",
      label: "Contact",
      title: "Let's talk?",
      support: "Open to Product Design opportunities.",
      emailBtn: "Write an email",
      or: "or",
      whatsapp: "WhatsApp",
      elsewhere: "Also on",
    },
    footer: {
      tagline: "Product Designer · Recife, Brazil",
      backToTop: "Back to top",
      credit: "Designed and built by Pedro Antônio",
      rights: "All rights reserved",
    },
    theme: { light: "Light theme", dark: "Dark theme" },
  },

  es: {
    nav: {
      works: "Trabajos",
      about: "Sobre",
      contact: "Contacto",
      cta: "Hablemos",
      menu: "Menú",
      close: "Cerrar",
      skipToContent: "Saltar al contenido",
    },
    hero: {
      kicker: "Product Designer · UX/UI · Recife, Brasil",
      name: "Pedro Antônio",
      role: "Product Designer · Design Engineer",
      positioning:
        "Convierto el dolor del usuario en productos digitales que generan confianza y venden. Del discovery al delivery, elimino la fricción, afilo las decisiones y traduzco la marca en experiencias que convierten.",
      ctaPrimary: "Ver trabajos",
      ctaSecondary: "Hablemos",
      available: "Disponible para nuevos proyectos",
    },
    manifesto: {
      index: "01",
      label: "Manifiesto",
      text: "Creo que una buena interfaz desaparece. Parto del dolor del usuario, elimino la fricción, facilito la decisión y alineo todo con la marca, del primer clic a la venta.",
    },
    works: {
      index: "02",
      label: "Trabajos seleccionados",
      title: "Productos reales, en vivo",
      subtitle:
        "Una selección de trabajos. Cada proyecto vive en su propio mundo, así que cada sección viste la identidad del caso.",
      problemLabel: "El desafío",
      roleLabel: "Mi rol",
      resultLabel: "El resultado",
      view: "Ver proyecto en vivo",
      scrubHint: "Desplázate dentro para explorar",
      learnMore: "Saber más sobre el proyecto",
      highlightsLabel: "Destacados",
      close: "Cerrar",
    },
    about: {
      index: "03",
      label: "Sobre",
      title: "Producto e IA, lado a lado",
      p1: "Soy Product Designer en Recife. Trabajo de punta a punta: de la investigación y el discovery a la interfaz final y la entrega con el equipo de desarrollo.",
      p2: "Mi diferencial para 2026 es la combinación de producto e IA: un MBA en Innovación Orientada a la IA y UX. Uso la IA para acelerar el proceso, no para reemplazar la decisión de diseño.",
      p3: "Pasé por Mobs2, MID y Promova, diseñando flujos complejos, design systems y reduciendo fricción donde más cuesta.",
      photoAlt: "Retrato de Pedro Antônio",
    },
    skills: {
      index: "04",
      label: "Competencias",
      title: "Del problema a la entrega",
      groups: {
        discovery: "Descubrimiento",
        design: "Diseño",
        delivery: "Entrega",
      },
    },
    contact: {
      index: "05",
      label: "Contacto",
      title: "¿Hablamos?",
      support: "Abierto a oportunidades de Product Design.",
      emailBtn: "Escribir un correo",
      or: "o",
      whatsapp: "WhatsApp",
      elsewhere: "También en",
    },
    footer: {
      tagline: "Product Designer · Recife, Brasil",
      backToTop: "Volver arriba",
      credit: "Diseñado y desarrollado por Pedro Antônio",
      rights: "Todos los derechos reservados",
    },
    theme: { light: "Tema claro", dark: "Tema oscuro" },
  },
};
