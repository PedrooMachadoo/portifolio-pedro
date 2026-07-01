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
  behance: "https://www.behance.net/PAMM",
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
    year: "2024",
    video: "/cases/bboom.mp4",
    poster: "/cases/bboom.jpg",
    // Energetic night-event: dark stage + neon pulse
    theme: {
      bg: "#0a0710",
      surface: "#141019",
      ink: "#f5f0f7",
      ink2: "#b7abc4",
      accent: "#ff2e63",
      accent2: "#7c3aed",
      glow: "rgba(255, 46, 99, 0.5)",
      mockBg: "linear-gradient(150deg, #1a0f22 0%, #0a0710 55%, #170a1e 100%)",
    },
    i18n: {
      pt: {
        kind: "Plataforma · Eventos ao vivo",
        title: "Operação de eventos em tempo real",
        problem:
          "Produtores perdiam o controle do evento no momento mais crítico: o ao vivo. Dados de lotação, bar e check-in ficavam espalhados.",
        role: "UX/UI · fluxos de operação, painel em tempo real e app do público.",
        result:
          "Uma sala de controle única: lotação por setor, comandas e check-in num só olhar, do primeiro ingresso ao último pedido.",
        tags: ["Product Design", "Dashboard", "Design System", "Mobile"],
      },
      en: {
        kind: "Platform · Live events",
        title: "Real-time event operations",
        problem:
          "Producers lost grip on the event at its most critical moment: going live. Capacity, bar and check-in data lived in separate places.",
        role: "UX/UI · operations flows, real-time dashboard and attendee app.",
        result:
          "A single control room: capacity by sector, tabs and check-in at a glance, from first ticket to last order.",
        tags: ["Product Design", "Dashboard", "Design System", "Mobile"],
      },
      es: {
        kind: "Plataforma · Eventos en vivo",
        title: "Operación de eventos en tiempo real",
        problem:
          "Los productores perdían el control del evento en su momento más crítico: el directo. Aforo, barra y check-in estaban dispersos.",
        role: "UX/UI · flujos de operación, panel en tiempo real y app del público.",
        result:
          "Una sala de control única: aforo por sector, comandas y check-in de un vistazo, del primer ticket al último pedido.",
        tags: ["Product Design", "Dashboard", "Design System", "Mobile"],
      },
    },
  },
  {
    id: "artin",
    name: "Artin Laser",
    url: "https://artin-laser.vercel.app/",
    year: "2024",
    video: "/cases/artin.mp4",
    poster: "/cases/artin.jpg",
    // Warm artisanal: MDF wood, copper, cream
    theme: {
      bg: "#f4ece0",
      surface: "#fbf6ee",
      ink: "#2a2018",
      ink2: "#6b5a48",
      accent: "#b06a2c",
      accent2: "#8a5a2b",
      glow: "rgba(176, 106, 44, 0.35)",
      mockBg: "linear-gradient(150deg, #f7efe3 0%, #ecdcc6 100%)",
    },
    i18n: {
      pt: {
        kind: "Site · Fabricação sob medida",
        title: "A ideia que ganha forma",
        problem:
          "Corte e gravação a laser em MDF e acrílico é um serviço visual, mas a marca não tinha uma vitrine à altura do trabalho artesanal.",
        role: "UX/UI · arquitetura do site, vitrine de peças e fluxo de orçamento.",
        result:
          "Um site que coloca o material no centro: textura, acabamento e processo transparente, do conceito à entrega.",
        tags: ["Web Design", "Branding", "Landing Page", "UX Writing"],
      },
      en: {
        kind: "Website · Custom fabrication",
        title: "Where the idea takes shape",
        problem:
          "Laser cutting and engraving on MDF and acrylic is a visual craft, but the brand lacked a showcase worthy of the work.",
        role: "UX/UI · site architecture, product showcase and quote flow.",
        result:
          "A site that puts the material first: texture, finish and a transparent process, from concept to delivery.",
        tags: ["Web Design", "Branding", "Landing Page", "UX Writing"],
      },
      es: {
        kind: "Sitio · Fabricación a medida",
        title: "La idea que toma forma",
        problem:
          "El corte y grabado láser en MDF y acrílico es un oficio visual, pero la marca no tenía una vitrina a la altura del trabajo artesanal.",
        role: "UX/UI · arquitectura del sitio, vitrina de piezas y flujo de presupuesto.",
        result:
          "Un sitio que pone el material en el centro: textura, acabado y proceso transparente, del concepto a la entrega.",
        tags: ["Web Design", "Branding", "Landing Page", "UX Writing"],
      },
    },
  },
  {
    id: "silvia",
    name: "Silvia Miranda",
    url: "https://silvia-miranda.vercel.app/",
    year: "2023",
    video: "/cases/silvia.mp4",
    poster: "/cases/silvia.jpg",
    // Calm spa: warm neutrals, soft rose, sage
    theme: {
      bg: "#f2ece5",
      surface: "#faf6f1",
      ink: "#3a332c",
      ink2: "#7a6f63",
      accent: "#b07f74",
      accent2: "#8ca07e",
      glow: "rgba(176, 127, 116, 0.32)",
      mockBg: "linear-gradient(150deg, #f6efe8 0%, #ece0d5 100%)",
    },
    i18n: {
      pt: {
        kind: "Site · Estética & bem-estar",
        title: "Viva bem na própria pele",
        problem:
          "Uma esteticista com 20 anos de experiência precisava transmitir técnica e acolhimento antes do primeiro contato.",
        role: "UX/UI · identidade digital, jornada de agendamento e prova social.",
        result:
          "Uma presença que acalma: fotografia, processo passo a passo e credibilidade que converte visita em agendamento.",
        tags: ["Web Design", "Branding", "Landing Page", "Conversion"],
      },
      en: {
        kind: "Website · Aesthetics & wellness",
        title: "Live well in your own skin",
        problem:
          "An aesthetician with 20 years of experience needed to convey technique and care before the first contact.",
        role: "UX/UI · digital identity, booking journey and social proof.",
        result:
          "A presence that calms: photography, a step-by-step process and credibility that turns a visit into a booking.",
        tags: ["Web Design", "Branding", "Landing Page", "Conversion"],
      },
      es: {
        kind: "Sitio · Estética y bienestar",
        title: "Vive bien en tu propia piel",
        problem:
          "Una esteticista con 20 años de experiencia necesitaba transmitir técnica y cercanía antes del primer contacto.",
        role: "UX/UI · identidad digital, recorrido de reserva y prueba social.",
        result:
          "Una presencia que calma: fotografía, proceso paso a paso y credibilidad que convierte la visita en cita.",
        tags: ["Web Design", "Branding", "Landing Page", "Conversion"],
      },
    },
  },
  {
    id: "ilha",
    name: "A Ilha está Afundando",
    url: "https://ilha-afundando.onrender.com/landing/index.html",
    year: "2025",
    video: "/cases/ilha.mp4",
    poster: "/cases/ilha.jpg",
    // Party game: deep ocean night + volcanic orange + seafoam
    theme: {
      bg: "#081a2b",
      surface: "#0e2438",
      ink: "#eaf4f8",
      ink2: "#9fbccd",
      accent: "#ff7a3d",
      accent2: "#26d1c2",
      glow: "rgba(255, 122, 61, 0.45)",
      mockBg: "linear-gradient(160deg, #0c2338 0%, #081a2b 55%, #123a50 100%)",
    },
    i18n: {
      pt: {
        kind: "Jogo · Web + Mobile",
        title: "O tabuleiro na TV, o controle no celular",
        problem:
          "Um party game precisava rodar na hora, sem instalar app nem criar conta: todo mundo junto na mesma sala, entrando por um QR.",
        role: "UX/UI · lobby por QR, controle secreto no celular e a ilha 3D que afunda na TV.",
        result:
          "Uma experiência de duas telas: a ilha afundando na TV e a informação escondida no celular de cada jogador, do lobby ao resgate.",
        tags: ["Product Design", "Game UX", "Mobile", "Real-time"],
      },
      en: {
        kind: "Game · Web + Mobile",
        title: "The board on the TV, the controller on your phone",
        problem:
          "A party game had to start instantly, with no app install and no account: everyone in the same room, joining by a QR code.",
        role: "UX/UI · QR lobby, secret phone controller and the 3D island sinking on the TV.",
        result:
          "A two-screen experience: the island sinking on the TV and hidden info on each player's phone, from lobby to rescue.",
        tags: ["Product Design", "Game UX", "Mobile", "Real-time"],
      },
      es: {
        kind: "Juego · Web + Móvil",
        title: "El tablero en la TV, el control en el móvil",
        problem:
          "Un party game tenía que empezar al instante, sin instalar app ni crear cuenta: todos en la misma sala, entrando por un QR.",
        role: "UX/UI · lobby por QR, control secreto en el móvil y la isla 3D que se hunde en la TV.",
        result:
          "Una experiencia de dos pantallas: la isla hundiéndose en la TV e información oculta en el móvil de cada jugador, del lobby al rescate.",
        tags: ["Product Design", "Game UX", "Mobile", "Real-time"],
      },
    },
  },
];

// ---- Skills marquee -------------------------------------------
export const SKILLS = [
  "Product Design",
  "UX Research",
  "UI Design",
  "Design Systems",
  "Prototyping",
  "Interaction Design",
  "Figma",
  "Design Ops",
  "AI + UX",
  "Discovery",
  "Usability",
  "Accessibility",
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
      role: "Product Designer",
      positioning:
        "Desenho produtos digitais do discovery ao delivery, transformando fluxos complexos em experiências claras e orientadas à ação.",
      ctaPrimary: "Ver trabalhos",
      ctaSecondary: "Vamos conversar",
      available: "Disponível para novos projetos",
    },
    manifesto: {
      index: "01",
      label: "Manifesto",
      text: "Acredito que boa interface some. O trabalho é tirar fricção do caminho e deixar a decisão fácil de tomar.",
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
    },
    about: {
      index: "03",
      label: "Sobre",
      title: "Produto e IA, lado a lado",
      p1: "Sou Product Designer em Recife. Trabalho ponta a ponta: da pesquisa e do discovery até a interface final e a entrega com o time de dev.",
      p2: "Meu diferencial para 2026 é a combinação de produto com IA — MBA em Inovação Orientada à IA e UX. Uso IA para acelerar o processo, não para substituir a decisão de design.",
      p3: "Passei por Mobs2, MID e Promova, desenhando fluxos complexos, design systems e reduzindo fricção onde ela mais custa.",
      photoAlt: "Retrato de Pedro Antônio",
    },
    skills: {
      index: "04",
      label: "Competências",
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
      credit: "Desenhado e desenvolvido por Pedro Antônio",
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
      role: "Product Designer",
      positioning:
        "I design digital products from discovery to delivery, turning complex flows into clear, action-driven experiences.",
      ctaPrimary: "View work",
      ctaSecondary: "Let's talk",
      available: "Available for new projects",
    },
    manifesto: {
      index: "01",
      label: "Manifesto",
      text: "I believe good interface disappears. The work is to clear friction from the path and make the decision easy to take.",
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
    },
    about: {
      index: "03",
      label: "About",
      title: "Product and AI, side by side",
      p1: "I'm a Product Designer based in Recife. I work end to end: from research and discovery to the final interface and delivery with the dev team.",
      p2: "My edge for 2026 is the mix of product and AI — an MBA in AI-Driven Innovation and UX. I use AI to speed up the process, not to replace the design decision.",
      p3: "I've worked at Mobs2, MID and Promova, designing complex flows, design systems and reducing friction where it costs the most.",
      photoAlt: "Portrait of Pedro Antônio",
    },
    skills: {
      index: "04",
      label: "Capabilities",
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
      role: "Product Designer",
      positioning:
        "Diseño productos digitales del discovery al delivery, transformando flujos complejos en experiencias claras y orientadas a la acción.",
      ctaPrimary: "Ver trabajos",
      ctaSecondary: "Hablemos",
      available: "Disponible para nuevos proyectos",
    },
    manifesto: {
      index: "01",
      label: "Manifiesto",
      text: "Creo que una buena interfaz desaparece. El trabajo es quitar fricción del camino y hacer que la decisión sea fácil de tomar.",
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
    },
    about: {
      index: "03",
      label: "Sobre",
      title: "Producto e IA, lado a lado",
      p1: "Soy Product Designer en Recife. Trabajo de punta a punta: de la investigación y el discovery a la interfaz final y la entrega con el equipo de desarrollo.",
      p2: "Mi diferencial para 2026 es la combinación de producto e IA — un MBA en Innovación Orientada a la IA y UX. Uso la IA para acelerar el proceso, no para reemplazar la decisión de diseño.",
      p3: "Pasé por Mobs2, MID y Promova, diseñando flujos complejos, design systems y reduciendo fricción donde más cuesta.",
      photoAlt: "Retrato de Pedro Antônio",
    },
    skills: {
      index: "04",
      label: "Competencias",
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
