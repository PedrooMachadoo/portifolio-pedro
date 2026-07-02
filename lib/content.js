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
    // Dedicated system walkthrough used as the "saber mais" modal cover.
    coverVideo: "/cases/bboom-saibamais.mp4",
    coverPoster: "/cases/bboom-saibamais.jpg",
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
        tags: ["UX Research", "Real-time dashboard", "Data visualization", "Design System", "Web + Mobile"],
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
        tags: ["UX Research", "Real-time dashboard", "Data visualization", "Design System", "Web + Mobile"],
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
        tags: ["UX Research", "Real-time dashboard", "Data visualization", "Design System", "Web + Mobile"],
        highlights: [
          "Panel en tiempo real de aforo por sector",
          "Comandas y barra centralizadas",
          "Check-in ágil en la entrada",
          "App del público durante el evento",
        ],
      },
    },
    // Long-form case study shown inside the "saber mais" modal.
    // pt is the source of truth; en/es fall back to pt until translated.
    // Sections flagged `todo: true` await the author's real content and
    // render as clearly-labelled placeholders (never invented facts).
    study: {
      pt: {
        intro:
          "Como devolver ao produtor o controle do evento no momento mais crítico, o ao vivo. Este é o caminho do projeto, da dor inicial até uma sala de controle que decide em segundos.",
        sections: [
          {
            id: "problema",
            eyebrow: "01",
            title: "O problema",
            lead: "Quando o evento começa, tudo acontece ao mesmo tempo. Era aí que o controle se perdia, em quatro frentes.",
            type: "cards",
            items: [
              {
                title: "Dados espalhados",
                text: "Lotação, bar e check-in viviam em telas e planilhas separadas. Ninguém tinha o quadro completo.",
              },
              {
                title: "Decisão no escuro",
                text: "No momento crítico, o produtor decidia no susto, sem a lotação real de cada setor.",
              },
              {
                title: "Fila na entrada",
                text: "O check-in manual travava a porta e formava fila no pior momento: o começo do evento.",
              },
              {
                title: "Público sem canal",
                text: "Faltava um lugar único para o público entrar, consumir e acompanhar o evento.",
              },
            ],
          },
          {
            id: "pesquisa",
            eyebrow: "02",
            title: "Pesquisa",
            lead: "Antes de propor solução, fui entender a necessidade real, com entrevistas e análise comportamental.",
            type: "insights",
            insightsTitle: "Principais insights",
            items: [
              "85% dos usuários utilizam múltiplas plataformas para descobrir eventos",
              "70% abandonam compras devido a processos complexos",
              "Organizadores gastam 60% do tempo em tarefas administrativas repetitivas",
              "90% valorizam transparência nas informações do evento",
            ],
          },
          {
            id: "processo",
            eyebrow: "03",
            title: "Processo",
            lead: "Com os insights em mãos, transformei entendimento em direção, da descoberta à entrega.",
            type: "steps",
            items: [
              {
                label: "Descoberta",
                text: "Entendi a operação de um evento ao vivo e onde o controle se perdia.",
              },
              {
                label: "Definição",
                text: "Mapeei o que precisa ser decidido em tempo real e por quem.",
              },
              {
                label: "Design",
                text: "Estruturei a sala de controle e o app do público em torno dessas decisões.",
              },
              {
                label: "Entrega",
                text: "Prototipei, validei a leitura sob pressão e entreguei com o time de dev.",
              },
            ],
          },
          {
            id: "fluxo",
            eyebrow: "04",
            title: "Arquitetura de fluxo",
            lead: "Dois momentos definem a experiência. Cada um virou um fluxo próprio, do preparo ao ao vivo.",
            type: "flows",
            flows: [
              {
                label: "Antes do evento",
                steps: ["Cria o evento", "Configura setores e bar", "Gera QR de acesso", "Publica pro público"],
              },
              {
                label: "Durante o evento",
                steps: ["Público entra por QR", "Check-in na porta", "Comanda no bar", "Painel lê a lotação", "Produtor age por setor"],
              },
            ],
          },
          {
            id: "interface",
            eyebrow: "05",
            title: "Interface",
            lead: "A operação em duas frentes: a sala de controle no sistema e o app na mão do público.",
            type: "interface",
            systemNote: "A sala de controle (sistema) aparece no vídeo de capa, no topo do modal.",
            app: {
              label: "App do público",
              note: "Do descobrir ao acessar: mapa de eventos, detalhe do evento e ingresso digital com QR.",
              shots: [
                { src: "/cases/bboom-app-mapa.jpg", caption: "Mapa de eventos" },
                { src: "/cases/bboom-app-evento.jpg", caption: "Detalhe do evento" },
                { src: "/cases/bboom-app-ingresso.jpg", caption: "Ingresso digital" },
              ],
            },
          },
          {
            id: "uxwriting",
            eyebrow: "06",
            title: "UX Writing",
            lead: "Palavras que guiam, informam e conectam com o usuário.",
            type: "uxwriting",
            principlesLabel: "Princípios de escrita",
            tone: { label: "Tom de voz", value: "Amigável, direto e empático" },
            principles: [
              { title: "Claro", text: "Sem jargões técnicos ou ambiguidades" },
              { title: "Útil", text: "Guia o usuário em cada interação" },
              { title: "Humano", text: "Conversacional e acessível" },
            ],
            beforeLabel: "Antes",
            afterLabel: "Depois",
            examples: [
              {
                context: "Onboarding",
                before: "Bem-vindo ao aplicativo",
                after: "Encontre seu próximo evento em segundos",
                note: "Foco no valor e benefício imediato para o usuário.",
              },
              {
                context: "Erro de pagamento",
                before: "Erro 404: transação falhou",
                after: "Ops! Algo deu errado. Vamos tentar novamente?",
                note: "Linguagem empática e tom amigável reduzem a frustração.",
              },
              {
                context: "Confirmação",
                before: "Ingresso adquirido com sucesso",
                after: "Tudo certo! Seu ingresso está na carteira digital",
                note: "Reforça a conclusão e indica a próxima ação.",
              },
            ],
          },
          {
            id: "impacto",
            eyebrow: "07",
            title: "Impacto",
            lead: "Resultados mensuráveis que demonstram o valor do design.",
            type: "cards",
            items: [
              {
                title: "Redução de fricção em fluxos críticos",
                text: "Simplificação dos pontos de decisão e diminuição de etapas desnecessárias.",
              },
              {
                title: "Maior clareza nas ações do usuário",
                text: "Interface intuitiva com CTAs bem posicionados e feedback visual consistente.",
              },
              {
                title: "Experiência mais fluida entre etapas da jornada",
                text: "Transições suaves e contexto preservado ao navegar entre telas.",
              },
              {
                title: "Aumento da autonomia para organizadores",
                text: "Dashboard completo com ferramentas de gestão e métricas em tempo real.",
              },
            ],
            callout: {
              pre: "A Bboom elevou significativamente a ",
              highlight: "experiência do usuário",
              post: ", criando uma plataforma mais intuitiva, acessível e engajadora em todos os pontos de contato.",
            },
          },
          {
            id: "aprendizados",
            eyebrow: "08",
            title: "Aprendizados",
            lead: "Reflexões sobre o processo e insights para projetos futuros.",
            type: "learnings",
            items: [
              {
                title: "Simplicidade é fundamental",
                text: "Remover fricções desnecessárias do fluxo de compra foi crucial para aumentar conversões. Menos é mais quando se trata de decisões do usuário.",
              },
              {
                title: "Dados guiam decisões",
                text: "Pesquisa qualitativa e quantitativa forneceram insights valiosos que moldaram cada escolha de design, da arquitetura ao microcopy.",
              },
              {
                title: "Iteração constante",
                text: "Testes de usabilidade em cada etapa permitiram validar hipóteses e refinar a experiência antes do lançamento final.",
              },
              {
                title: "Empatia com stakeholders",
                text: "Entender as necessidades tanto dos usuários finais quanto dos organizadores foi essencial para criar uma solução equilibrada.",
              },
              {
                title: "Documentação é design",
                text: "Criar um sistema de design bem documentado facilitou a implementação e garantiu consistência em toda a plataforma.",
              },
            ],
          },
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
        tags: ["Landing Page", "Art Direction", "UX Writing", "Conversion"],
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
        tags: ["Landing Page", "Art Direction", "UX Writing", "Conversion"],
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
        tags: ["Landing Page", "Art Direction", "UX Writing", "Conversion"],
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
        tags: ["Landing Page", "Booking flow", "Conversion", "UX Writing"],
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
        tags: ["Landing Page", "Booking flow", "Conversion", "UX Writing"],
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
        tags: ["Landing Page", "Booking flow", "Conversion", "UX Writing"],
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
    // Dedicated game walkthrough used as the "saber mais" modal cover.
    coverVideo: "/cases/ilha-capa.mp4",
    coverPoster: "/cases/ilha-capa.jpg",
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
        tags: ["Game UX", "Real-time multiplayer", "Cross-device", "3D board", "QR onboarding"],
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
        tags: ["Game UX", "Real-time multiplayer", "Cross-device", "3D board", "QR onboarding"],
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
        tags: ["Game UX", "Real-time multiplayer", "Cross-device", "3D board", "QR onboarding"],
        highlights: [
          "Entrada por QR, sin instalar app",
          "El móvil se vuelve control secreto",
          "Isla 3D reacciona en vivo en la TV",
        ],
      },
    },
    study: {
      pt: {
        intro:
          "Um estudo de caso de dois dias, feito com apoio de IA: adaptei o clássico de tabuleiro Survive: The Island para um jogo digital de duas telas. A TV vira tabuleiro, cada celular vira controle, e dá pra jogar contra amigos ou contra a máquina.",
        sections: [
          {
            id: "desafio",
            eyebrow: "01",
            title: "O desafio",
            lead: "Dois dias para transformar um jogo de tabuleiro físico em uma experiência digital completa, sem perder a tensão da mesa.",
            type: "cards",
            items: [
              {
                title: "Do físico ao digital",
                text: "Traduzir as regras de Survive: The Island para telas, mantendo a tensão da ilha que afunda.",
              },
              {
                title: "Duas telas, um jogo",
                text: "A TV mostra o tabuleiro; cada celular vira um controle, sem instalar nada nem criar conta.",
              },
              {
                title: "Informação oculta",
                text: "No tabuleiro físico, o valor das peças fica escondido. No digital, cada segredo vive no seu celular.",
              },
              {
                title: "Humano ou máquina",
                text: "O mesmo fluxo precisa servir para jogar contra amigos ou contra a IA como oponente.",
              },
            ],
          },
          {
            id: "referencia",
            eyebrow: "02",
            title: "Referência",
            lead: "O ponto de partida foi o próprio tabuleiro.",
            type: "prose",
            text: "Parti de Survive: The Island: uma ilha de hexágonos que afunda peça por peça, aventureiros correndo até os botes e criaturas (serpente, tubarão e kraken) caçando quem fica para trás. Estudei o que fazia a tensão funcionar na mesa, o segredo do valor das peças e a corrida contra o mar, e o que precisava mudar para o digital fluir em duas telas.",
          },
          {
            id: "processo",
            eyebrow: "03",
            title: "Processo",
            lead: "Um sprint de dois dias, usando IA como acelerador e mantendo a decisão de design comigo.",
            type: "steps",
            items: [
              {
                label: "Dia 1 · Regras",
                text: "Destrinchei as mecânicas de Survive e defini o loop de turno e as duas telas.",
              },
              {
                label: "Dia 1 · Fluxos",
                text: "Estruturei a entrada por QR, o turno (ação, inundação, dado) e a IA como oponente.",
              },
              {
                label: "Dia 2 · Interface",
                text: "Montei o tabuleiro na TV e o controle no celular, com IA acelerando a produção.",
              },
              {
                label: "Dia 2 · Ajuste",
                text: "Balanceei ritmo, habilidades e ameaças até ficar fácil de aprender.",
              },
            ],
          },
          {
            id: "fluxo",
            eyebrow: "04",
            title: "Arquitetura de fluxo",
            lead: "Dois fluxos guiam a experiência: entrar no jogo e jogar um turno.",
            type: "flows",
            flows: [
              {
                label: "Como começar",
                steps: ["Abra na TV ou notebook", "Aponte a câmera pro QR", "Cada um entra pelo celular", "Joguem juntos"],
              },
              {
                label: "Como é um turno",
                steps: ["Ação: mova seus aventureiros", "Inundação: remova uma peça", "Dado: as criaturas acordam"],
              },
            ],
          },
          {
            id: "diferente",
            eyebrow: "05",
            title: "Por que é diferente",
            lead: "Seis decisões que separam o jogo de um app de tabuleiro qualquer.",
            type: "cards",
            items: [
              {
                title: "Tabuleiro 3D na TV",
                text: "Todo mundo vê a ilha afundar em tempo real, à vista da mesa.",
              },
              {
                title: "O celular é o controle",
                text: "Um tabuleiro 2D tocável no seu aparelho, em pé ou deitado.",
              },
              {
                title: "Sem instalar, sem cadastro",
                text: "Escaneou o QR, entrou. Nada de baixar app nem criar conta.",
              },
              {
                title: "Informação oculta",
                text: "O valor dos seus tesouros só aparece no seu celular. Blefe à vontade.",
              },
              {
                title: "Contra humanos ou a máquina",
                text: "Jogue com os amigos na mesma sala ou enfrente a IA como oponente.",
              },
              {
                title: "Do rápido ao longo",
                text: "De 2 a 5 jogadores e mapas Rápida, Média ou Grande. Você escolhe o fôlego.",
              },
            ],
          },
          {
            id: "interface",
            eyebrow: "06",
            title: "Interface",
            lead: "Duas telas, um jogo: o tabuleiro na TV e o controle no celular.",
            type: "interface",
            systemNote: "O tabuleiro (TV) aparece no vídeo de capa, no topo. O controle, abaixo, é o que cada jogador vê no celular.",
            app: {
              label: "Controle no celular",
              wide: true,
              shots: [
                {
                  src: "/cases/ilha-controle.jpg",
                  caption: "Controle: o tabuleiro e o painel de ações (ação, habilidades e encerrar turno).",
                },
              ],
              note: "Cada jogador vê o tabuleiro no próprio celular, com o painel de ações e as habilidades do turno.",
            },
          },
          {
            id: "aprendizados",
            eyebrow: "07",
            title: "Aprendizados",
            lead: "O que esse desafio de dois dias deixou.",
            type: "learnings",
            items: [
              {
                title: "IA como acelerador, não como piloto",
                text: "Usei IA para varrer regras, gerar variações e ganhar velocidade. A decisão de design continuou comigo.",
              },
              {
                title: "O analógico já resolveu muita coisa",
                text: "As regras físicas de Survive já entregavam tensão e ritmo. O trabalho foi traduzir para o digital, não reinventar.",
              },
              {
                title: "Restrição vira foco",
                text: "Dois dias forçaram cortar o supérfluo e priorizar só o que faz o jogo funcionar na mesa.",
              },
              {
                title: "Duas telas exigem papéis claros",
                text: "Separar tabuleiro (público, na TV) e controle (privado, no celular) só funciona se cada tela disser exatamente o seu papel.",
              },
            ],
          },
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
      studyTodo: "A preencher",
      studyIndex: "Nesta página",
    },
    about: {
      index: "03",
      label: "Sobre",
      title: "Produto e IA, lado a lado",
      p1: "Sou designer desde 2016 e, desde 2021, foco em Product Design, aqui de Recife. Trabalho ponta a ponta, da pesquisa e do discovery à interface final e à entrega com o time de dev.",
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
      mascotAlt: "Pedro Antônio, ilustração",
      mascotPhrases: [
        "Bora tirar do papel?",
        "Partiu construir?",
        "Chama que a gente resolve.",
        "Seu próximo produto começa aqui.",
      ],
      mascotBubbles: [
        "Aberto a projetos",
        "Bora conversar?",
        "Resposta rápida",
        "Vamos criar",
        "Partiu?",
        "Me chama",
      ],
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
      studyTodo: "To fill in",
      studyIndex: "On this page",
    },
    about: {
      index: "03",
      label: "About",
      title: "Product and AI, side by side",
      p1: "I've been a designer since 2016 and, since 2021, focused on Product Design, here in Recife. I work end to end, from research and discovery to the final interface and delivery with the dev team.",
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
      mascotAlt: "Pedro Antônio, illustration",
      mascotPhrases: [
        "Let's ship it?",
        "Ready to build?",
        "Ping me, I've got you.",
        "Your next product starts here.",
      ],
      mascotBubbles: [
        "Open to projects",
        "Let's talk?",
        "Quick reply",
        "Let's create",
        "Ready?",
        "Reach out",
      ],
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
      studyTodo: "Por completar",
      studyIndex: "En esta página",
    },
    about: {
      index: "03",
      label: "Sobre",
      title: "Producto e IA, lado a lado",
      p1: "Soy diseñador desde 2016 y, desde 2021, me enfoco en Product Design, aquí en Recife. Trabajo de punta a punta, de la investigación y el discovery a la interfaz final y la entrega con el equipo de desarrollo.",
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
      mascotAlt: "Pedro Antônio, ilustración",
      mascotPhrases: [
        "¿Vamos a lanzarlo?",
        "¿Listos para construir?",
        "Escríbeme, yo te ayudo.",
        "Tu próximo producto empieza aquí.",
      ],
      mascotBubbles: [
        "Abierto a proyectos",
        "¿Hablamos?",
        "Respuesta rápida",
        "Vamos a crear",
        "¿Vamos?",
        "Escríbeme",
      ],
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
