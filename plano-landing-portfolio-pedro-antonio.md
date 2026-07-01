# Plano de Landing Page: Portfólio de Pedro Antônio

Product Designer (UX/UI) · Recife, Brasil
Direção pedida: premium, minimalista, sofisticada, com efeitos de transição.

Este documento junta duas frentes:
- **Parte A (UX sênior):** jornada, estrutura da página, fluxos, estados e escrita de interface.
- **Parte B (UI sênior):** direção visual justificada, design tokens, componentes e o sistema de movimento (o coração do "premium com transições").
- **Parte C:** stack sugerida e próximos passos.

---

## 0. Contexto e premissas

**Objetivo da página.** Converter um visitante (recrutador, head de design ou cliente) em contato, provando competência de produto pela própria execução do site. Em portfólio de designer, o site é a primeira peça do portfólio: se ele for genérico, o resto perde força.

**Quem visita e o que quer (Job To Be Done).** "Preciso, em segundos, decidir se esse designer é bom e relevante para o que preciso, e saber como falar com ele." Isso define três prioridades, nesta ordem: (1) sinalizar qualidade nos primeiros 3 segundos, (2) mostrar trabalho real rápido, (3) tornar o contato óbvio.

**Diferencial a explorar.** A combinação Produto + IA (MBA em Inovação Orientada à IA e UX, trilha IA Boost Lab) é um ângulo forte para 2026. Vale posicionar como diferencial, não como enfeite.

**Premissas assumidas (corrija o que não bater):**
- ⚠️ **Cases reais são a dependência número 1.** O currículo lista experiência (Mobs2, MID, Promova), mas não traz os estudos de caso em si. A seção de trabalhos precisa de conteúdo e imagens reais. Deixei a estrutura pronta; o conteúdo é seu.
- ⚠️ **Idioma:** assumi português como principal. Se o alvo inclui vagas internacionais, recomendo versão PT/EN (muda a navegação, então precisa ser decidido cedo).
- ⚠️ **Tema:** proponho **claro (paper) como padrão** e ofereço o escuro como variante. Direção única, não meio-termo.
- ⚠️ **Contato:** assumi links diretos (e-mail e Behance do currículo) em vez de formulário. Mais simples, mais "premium", menos ponto de falha. Se quiser formulário, os estados estão descritos.
- ⚠️ **Links:** e-mail (pedro.machado1108@gmail.com), telefone (81 99883-8259) e Behance (behance.net/PAMM) vêm do currículo. LinkedIn não consta; recomendo adicionar.
- ⚠️ **Plataforma:** página única (one-page) responsiva, mobile-first. Não é app nativo.

---

# Parte A — UX

## A.1 Jornada do visitante

Da chegada ao contato, cinco fases. Para cada uma, o que o visitante pensa e o que a página precisa entregar.

| Fase | O que ele pensa | O que a página entrega | Risco / fricção |
|------|-----------------|------------------------|-----------------|
| 1. Chegada | "Isso aqui é sério?" | Hero silencioso, tipografia forte, respiro. A estética já responde. | Preloader longo demais. Hero genérico. |
| 2. Escaneio | "É relevante pra mim?" | Uma frase de posicionamento e o acesso imediato aos trabalhos. | Texto longo antes do trabalho. |
| 3. Prova | "Ele sabe mesmo?" | Cases com problema, papel dele e resultado. Não só telas bonitas. | Case sem contexto ("olha que lindo"). |
| 4. Confiança | "Dá pra confiar / combina comigo?" | Sobre, abordagem (ponta a ponta), o ângulo IA + UX. | Bio genérica de currículo. |
| 5. Ação | "Como falo com ele?" | CTA de contato sempre alcançável, sem procura. | Contato escondido no rodapé só. |

**Regra de ouro da jornada:** o trabalho aparece cedo. Manifesto e bio vêm **depois** da primeira prova visual, não antes.

## A.2 Arquitetura da página (estrutura e navegação)

Ordem das seções, com o papel de cada uma. Nomes de navegação em português, curtos e mutuamente exclusivos.

```
Nav (fixa, discreta)   → monograma/nome · [Trabalhos · Sobre · Contato] · CTA
─────────────────────────────────────────────────────────────
01  Hero               → nome, papel, posicionamento em 1 linha, CTA duplo
02  Manifesto          → 1 a 2 frases que definem a forma de trabalhar
03  Trabalhos          → 3 a 5 cases em lista editorial (o núcleo)
04  Sobre              → bio curta, foto, abordagem, ângulo IA + UX
05  Competências       → capacidades em grade silenciosa + marquee de skills
06  (opcional) Trajetória → linha do tempo: Mobs2, MID, Promova
07  Contato            → CTA grande "Vamos conversar" + e-mail + redes
Footer                 → e-mail, Behance, LinkedIn, crédito, voltar ao topo
```

**Navegação:** menu com 3 âncoras (Trabalhos, Sobre, Contato) que rolam suave até a seção. No mobile, vira overlay em tela cheia. A nav encolhe ao rolar (some o subtítulo, fica só nome + CTA).

**Numeração editorial.** Seções com índice (01, 02, 03...) em fonte mono. É um recurso de sofisticação típico de portfólio premium e ajuda a orientar.

## A.3 Fluxo principal e bifurcações

O fluxo é curto de propósito. As decisões importantes:

```
Chega no Hero
   │
   ├─ clica "Ver trabalhos"  → rola para 03 Trabalhos
   │        │
   │        └─ clica num case → [ver A.4: o case abre inline ou em página?]
   │
   ├─ clica "Vamos conversar" → rola para 07 Contato → abre e-mail
   │
   └─ só rola → passa por Manifesto, Trabalhos, Sobre... contato sempre acessível pela nav
```

⚠️ **Decisão que muda a estrutura (A.4):** cada case é uma **página própria** de estudo de caso, ou um **modal/expansão inline** na mesma página?
- *Página própria:* mais espaço para narrativa, melhor para SEO e para compartilhar link. Recomendado se você tem cases densos.
- *Expansão inline:* mantém tudo em uma página, transição mais fluida. Bom se os cases são visuais e curtos.
Recomendo **página própria por case** (padrão de portfólio sênior), com a landing linkando para cada uma.

## A.4 Estados e casos de borda

O que separa júnior de sênior é desenhar isto antes de alguém perguntar. Por tela/bloco:

**Carregamento inicial da página**
- *Com movimento:* preloader curto (nome + barra de progresso fina), no máximo ~1s, seguido da entrada do hero. Nunca prender o conteúdo por vaidade.
- *Sem movimento (prefers-reduced-motion):* conteúdo pintado direto, sem preloader.

**Trabalhos (seção 03)**
- *Preenchido:* 3 a 5 cases.
- ⚠️ *Vazio (enquanto você não tem cases prontos):* não deixe placeholder falso. Se só há um case pronto, mostre um só e bem. Um case forte vende mais que quatro fracos.
- *Imagem carregando:* blur-up (miniatura borrada que nitidez ao carregar) ou skeleton neutro. Nada de salto de layout.

**Case individual (se página própria)**
- *Sucesso:* narrativa completa.
- *Erro 404 (link quebrado):* página 404 na mesma linguagem visual, com um caminho de volta ("Voltar aos trabalhos").

**Contato**
- *Links diretos (recomendado):* e-mail abre o cliente de e-mail. Behance e LinkedIn abrem em nova aba.
- *Se optar por formulário:* estados obrigatórios são **default, foco, erro por campo, enviando, sucesso e falha de envio**. Erro ancorado no campo, dizendo a causa e a saída (ver A.5). Sucesso confirma o que acontece a seguir ("Recebi. Respondo em até 2 dias úteis.").

**Interação em toque (mobile)**
- Cursor customizado e parallax pesado ficam **desligados** no toque. Hover não existe; a informação nunca pode depender só de hover.

**Sem JavaScript / conexão ruim**
- O conteúdo aparece inteiro. Animação é camada, não requisito. Nada de tela em branco esperando script.

## A.5 UX writing (a voz da página)

**Voz:** primeira pessoa, confiante e silenciosa. Diz o que faz, não se enfeita. Português.

**Convenção:** sem traço ("-" ou "—") como muleta de pontuação. Frases curtas, dois-pontos quando explica, parênteses para aparte.

**Copy-chave sugerida (ajuste ao seu tom):**

- **Kicker do hero:** `Product Designer · UX/UI · Recife, Brasil`
- **Título do hero:** `Pedro Antônio`
- **Posicionamento (1 linha):** `Desenho produtos digitais do discovery ao delivery, transformando fluxos complexos em experiências claras e orientadas à ação.`
- **CTA primário:** `Ver trabalhos`  ·  **CTA secundário:** `Vamos conversar`
- **Manifesto (02):** `Acredito que boa interface some. O trabalho é tirar fricção do caminho e deixar a decisão fácil de tomar.`
- **Título de Trabalhos:** `Trabalhos selecionados`
- **Estado vazio (se necessário):** evite. Se precisar, `Novos cases em breve. Enquanto isso, veja o Behance.` com link.
- **CTA de contato (07):** `Vamos conversar?` + linha de apoio `Aberto a oportunidades de Product Design.`
- **Botão de e-mail:** `Escrever e-mail` (não "Enviar", não "OK").
- **Rótulo de erro em formulário (se houver), exemplo:**
  ```
  E-mail  [ .......................... ]
          ⚠ Digite um e-mail válido para eu conseguir responder.
  ```

**Vocabulário padronizado:** "Trabalhos" (nunca vira "Projetos" na seção seguinte), "Contato" (não "Fale comigo" num lugar e "Contato" em outro). Escolha um e mantenha.

## A.6 Acessibilidade (desde o início)

- **Contraste:** texto principal em tinta escura sobre papel claro, bem acima de 4.5:1 (ver tokens na Parte B). O acento nunca carrega informação sozinho.
- **Foco visível:** todo elemento navegável por teclado tem anel de foco claro (não remover outline sem substituir).
- **Movimento:** honrar `prefers-reduced-motion`. Sem reveals nem parallax quando ligado; conteúdo aparece estático.
- **Semântica:** um `<h1>` (o nome), hierarquia de headings correta, `alt` descritivo em toda imagem de case.
- **Teclado:** menu abre/fecha por teclado, ordem de tabulação lógica, "pular para o conteúdo" no topo.
- **Toque:** áreas de toque de no mínimo 44x44px no mobile.

---

# Parte B — UI

## B.1 Direção visual (escolhida de propósito)

**Mood em três palavras:** editorial, silencioso, tipográfico.

**Família de estilo:** minimalismo editorial (raiz Swiss/tipográfica), não o "minimalismo de template". O luxo vem de três coisas: **respiro** (muito espaço em branco), **tipografia com personalidade** (um serif de display forte) e **movimento contido e bem temporizado**. Cor é quase ausente de propósito.

**Por que essa direção (justificativa):**
1. **Marca/personalidade:** um Product Designer que enche o próprio site de gradiente e sombra levanta suspeita. A contenção é a prova de maturidade. O site precisa parecer feito por alguém que sabe o que **tirar**.
2. **Público:** recrutadores e heads de design leem muitos portfólios. O que se destaca não é o mais colorido: é o que respira e vai direto ao trabalho.
3. **Categoria:** portfólios premium de produto convergem para editorial tipográfico (respiro, serifa de display, movimento suave). É o vocabulário que transmite confiança aqui.

**O que evitar (anti-padrões):** o gradiente roxo/rosa "cara de IA", sombras infladas, hero igual a todo mundo, animação longa que atrapalha. Nada disso entra.

## B.2 Design tokens

### Cor (tema claro, padrão)

Nomeadas por função, não por aparência.

| Token | Valor | Uso |
|-------|-------|-----|
| `--paper` | `#F6F4EF` | Fundo da página (off-white quente, não branco puro) |
| `--surface` | `#FFFFFF` | Cards e superfícies elevadas |
| `--ink` | `#17160F` | Texto principal (near-black quente; contraste ~15:1 sobre paper) |
| `--ink-2` | `#5C5A51` | Texto secundário |
| `--ink-3` | `#8F8D83` | Legendas, metadados, mono labels |
| `--line` | `#E4E0D8` | Bordas hairline, divisórias |
| `--accent` | `#B4472C` | Acento (terracota). Uso escasso: hover de link, indicador ativo, cursor |
| `--accent-soft` | `#EFE2DA` | Fundo tênue do acento (destaque de seção) |

### Cor (tema escuro, variante ofertada)

| Token | Valor | Uso |
|-------|-------|-----|
| `--paper` | `#14130F` | Fundo |
| `--surface` | `#1C1B16` | Superfícies |
| `--ink` | `#F2F0E9` | Texto principal |
| `--ink-2` | `#B4B1A6` | Secundário |
| `--ink-3` | `#7C7A70` | Legendas |
| `--line` | `#2C2A24` | Bordas |
| `--accent` | `#D9764F` | Terracota clareada para contraste no escuro |

> Regra: o acento aparece em poucos pontos por tela. Informação nunca depende só dele (respeita daltonismo). Texto de corpo sempre em `--ink`.

### Tipografia

Pareamento editorial clássico: **serif de display** com personalidade + **grotesca neutra** de altíssima legibilidade + **mono** para etiquetas técnicas (números de seção, metadados). Todas com boa fama e disponíveis (Google Fonts / open source).

| Papel | Fonte sugerida | Alternativa | Uso |
|-------|----------------|-------------|-----|
| Display | **Fraunces** (variável, optical) | Newsreader, Instrument Serif | Nome, títulos de seção grandes |
| Corpo / UI | **Inter** | Geist, Instrument Sans | Texto, navegação, botões |
| Mono | **Geist Mono** | JetBrains Mono | Kickers, números 01/02, metadados |

**Escala de tamanho (px, desktop; responsiva com `clamp`):**

| Papel | Tamanho | Peso | Line-height |
|-------|---------|------|-------------|
| Display XL (nome no hero) | 64 a 96 (clamp) | 400 serif | 1.05 |
| Display L (títulos de seção) | 40 a 56 | 400 serif | 1.1 |
| Título | 28 a 32 | 500 | 1.2 |
| Subtítulo | 20 a 24 | 400 | 1.3 |
| Corpo | 16 a 18 | 400 | 1.6 |
| Legenda / mono label | 12 a 14 | 500 mono, tracking +0.08em, caixa alta | 1.4 |

### Espaçamento e layout

Régua base 8 (com alguns passos de 4). Sem números fora dela.

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`

- **Padding vertical de seção:** 96 no mobile, 128 a 160 no desktop. O respiro generoso é o que faz parecer premium.
- **Container:** `max-width` único de **1200px** para conteúdo; blocos de mídia podem ir full-bleed (até ~1440px) de forma controlada.
- **Margens laterais:** 24 no mobile, 48 a 80 no desktop.
- **Grid:** 12 colunas no desktop, 4 no mobile. Gutter 24.

### Forma e profundidade

- **Raio de borda:** predominância de `0` a `2px`. A dureza dos cantos é parte da linguagem editorial. `999px` (pílula) só em tags/marquee se necessário.
- **Sombras:** quase ausentes. Hierarquia vem de espaço e hairline, não de sombra. Um único nível sutil (`0 1px 2px rgba(0,0,0,.04)` + `0 8px 24px rgba(0,0,0,.06)`) reservado para elevação em hover de card.
- **Bordas:** hairline `1px solid var(--line)`.

### Movimento (tokens base; o sistema completo está em B.4)

| Token | Valor | Uso |
|-------|-------|-----|
| `--dur-fast` | 200ms | Micro-interação (hover) |
| `--dur-base` | 400ms | Revelação de elemento |
| `--dur-slow` | 800ms | Entrada do hero, revelação de seção |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entradas (reveals) |
| `--ease-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` | Transições de página |

### Iconografia

- Um único set: **Lucide** (traço fino, combina com a linguagem editorial). Nada de emoji como ícone, nada de misturar famílias.
- Tamanho base 20 a 24px, traço 1.5.

## B.3 Componentes-chave (anatomia, variantes e todos os estados)

### Nav
- **Anatomia:** nome/monograma à esquerda · âncoras (Trabalhos, Sobre, Contato) ao centro/direita · CTA "Contato" à direita.
- **Variantes:** topo (transparente sobre o hero) · condensada (fundo `--paper` com hairline inferior ao rolar).
- **Estados:** link default (`--ink-2`), hover (`--ink` + underline animado), ativo (âncora da seção em vista, indicador em `--accent`), foco (anel visível). Mobile: botão de menu → overlay tela cheia.

### Botão
- **Variantes:** primário (fundo `--ink`, texto `--paper`) · fantasma (borda hairline, texto `--ink`) · link (só texto + underline animado).
- **Estados:** default, hover (primário: leve escurecer + seta desliza; fantasma: fundo `--ink` sutil), active (escala 0.98), foco (anel), desabilitado (opacidade 0.4, sem hover).

### Card de trabalho (item da lista editorial)
- **Anatomia:** número (mono) · título do case (serif) · uma linha de contexto (papel + resultado) · mídia (thumbnail) · seta.
- **Variantes:** linha editorial (texto grande, mídia revela no hover) ou card com mídia sempre visível. Recomendo a **linha editorial** para o topo e cards para o restante.
- **Estados:** default, hover (título desliza, mídia aparece/escala 1.03, seta avança, cor de acento no número), foco (anel), carregando mídia (blur-up).

### Kicker / eyebrow
- Rótulo mono, caixa alta, tracking aberto, `--ink-3`. Acompanha número de seção.

### Marquee de skills
- Faixa horizontal em loop lento e infinito com competências e ferramentas. Pausa no hover. Desligado em reduced-motion (vira lista estática).

### Footer
- Grande, generoso. E-mail em display, links (Behance, LinkedIn), crédito discreto, "voltar ao topo" com transição suave.

## B.4 Sistema de movimento (o "premium com transições")

Esta é a parte que você enfatizou. Regras primeiro, depois o catálogo de efeitos.

**Princípios do movimento:**
1. **Intencional, nunca decorativo.** Todo movimento tem função: orientar o olho, revelar hierarquia, dar feedback.
2. **Temporização é tudo.** Devagar o suficiente para ser percebido, rápido o suficiente para não atrasar. Use as durações e curvas dos tokens.
3. **Contido.** Poucos tipos de movimento, aplicados com consistência. Movimento demais vira ruído e mata o "premium".
4. **Acessível por padrão.** `prefers-reduced-motion: reduce` desliga transforms e parallax; sobra, no máximo, um fade curto ou nada.

**Catálogo de efeitos (do mais estrutural ao detalhe):**

1. **Scroll suave (base de tudo).** Rolagem com inércia amaciada (biblioteca **Lenis**). É o que dá a sensação "manteiga" que separa premium de comum. Todo o resto do movimento se ancora nele.

2. **Revelação por scroll (reveal).** Blocos entram com `opacity 0 → 1` + `translateY(24px → 0)`, disparados ao entrar na viewport (IntersectionObserver ou ScrollTrigger). Elementos em sequência entram **escalonados** (stagger de 60 a 80ms). Duração `--dur-base`, curva `--ease-out`.

3. **Entrada do hero (sequência).** Ao carregar: kicker → nome → posicionamento → CTA, em cascata. Duração `--dur-slow`. É o primeiro momento e precisa ser o mais caprichado.

4. **Revelação de linha por máscara (assinatura editorial).** Cada linha de um título fica dentro de um contêiner com `overflow: hidden`; o texto entra de baixo (`translateY(100% → 0)`). Efeito "cortina de texto" que é marca registrada de portfólio sofisticado. Usar no nome e nos títulos de seção.

5. **Revelação de imagem.** Mídia de case aparece com um painel que desliza revelando (wipe via `clip-path` ou máscara) e um leve `scale(1.06 → 1)`. Nunca um fade seco.

6. **Parallax sutil.** Mídia do hero e thumbnails movem em ritmo levemente diferente do scroll (fator 0.1 a 0.2). Sutil. Parallax exagerado enjoa e derruba performance.

7. **Hover de link e card.** Links com **underline animado** (`scaleX: 0 → 1` a partir da esquerda). Cards de trabalho: título desliza, seta avança, mídia escala 1.03, número ganha `--accent`. Tudo em `--dur-fast`.

8. **Cursor customizado (opcional, premium).** Um ponto que segue o mouse e cresce sobre elementos interativos, com leve atraso (lerp). Só no desktop/ponteiro fino. Desligado no toque.

9. **Marquee infinito.** Faixa de skills em loop lento e contínuo. Pausa no hover.

10. **Transição de página (se cases forem páginas próprias).** Ao navegar para um case, um painel em `--ink` sobe cobrindo a tela, troca o conteúdo, e desce revelando (~600ms, `--ease-inout`). Dá continuidade e sofisticação entre páginas.

**Stack de movimento sugerida:** Lenis (scroll suave) + GSAP com ScrollTrigger (reveals, pin, parallax, wipes). Se o site for em React/Next, Framer Motion pode substituir o GSAP para os reveals mais simples, mantendo Lenis para o scroll. Sempre com o fallback de `prefers-reduced-motion`.

## B.5 Responsividade

Mobile-first. Como o layout se reorganiza:

| Breakpoint | Largura | Mudanças principais |
|------------|---------|---------------------|
| Mobile | < 640px | 1 coluna, margens 24, nav vira overlay, cursor e parallax off, tipografia no piso da escala |
| Tablet | 640 a 1024px | 2 colunas onde couber, margens 40 |
| Desktop | > 1024px | grid 12 col, container 1200, movimento completo, margens 48 a 80 |

**Regras mobile específicas:** respeitar safe areas, alvos de toque ≥ 44px, sem depender de hover (o que era hover vira sempre-visível ou tap), reveals mais curtos e discretos.

## B.6 Gate de pré-entrega (checklist antes de dizer "pronto")

- [ ] Contraste de texto ≥ 4.5:1 verificado nos dois temas.
- [ ] Todos os componentes interativos têm default, hover, focus, active (e loading/empty/error onde cabe).
- [ ] Foco de teclado visível em tudo.
- [ ] `prefers-reduced-motion` desliga o movimento.
- [ ] Um único set de ícones (Lucide), sem emoji de UI.
- [ ] Espaçamentos todos na régua de 8.
- [ ] Imagens com `alt`, blur-up e sem salto de layout.
- [ ] Nomenclatura consistente ("Trabalhos", "Contato") em nav, seção e footer.

---

# Parte C — Stack e próximos passos

**Stack sugerida (para movimento e SEO premium):**
- **Next.js** (React) se houver páginas próprias por case e você quiser SEO e transições de rota. Ou **Astro** se preferir leveza e conteúdo mais estático.
- **Tailwind CSS** com os tokens acima mapeados em variáveis CSS (`theme.extend`).
- **Lenis** (scroll suave) + **GSAP/ScrollTrigger** (ou Framer Motion) para o sistema de movimento.
- Fontes via **Fontsource** ou Google Fonts (Fraunces, Inter, Geist Mono), com `font-display: swap`.

**Próximos passos, em ordem:**
1. **Você decide as 4 premissas ⚠️ do topo** (idioma, tema, página vs modal para cases, contato por link vs formulário).
2. **Você reúne o conteúdo dos cases:** para cada um, problema, seu papel, processo, resultado e 3 a 6 imagens. Sem isso, o núcleo do site fica vazio.
3. **Eu renderizo uma prévia visual** da direção (paleta, tipografia e um mock do hero) para você validar o "premium" antes de qualquer código.
4. **Eu construo a landing** com o sistema de movimento completo, mobile-first, acessível.

---

## Estrutura de um estudo de caso (modelo para você preencher)

Para cada trabalho (começando por Mobs2, que tem o material mais rico: design system, fluxos complexos, redução de fricção):

1. **Contexto:** que produto, qual era o problema, quem era o usuário.
2. **Seu papel:** o que era seu, com quem colaborou, período.
3. **Processo:** discovery, decisões, iterações. Mostre o pensamento, não só o resultado.
4. **Resultado:** o que mudou. Se houver número (fricção reduzida, tempo de fluxo, adoção), use. Se não houver métrica, descreva o ganho qualitativo com honestidade.
5. **Peças:** telas, antes/depois, componentes do design system.

> Dica sênior: um recrutador confia mais em "reduzi o número de passos de um fluxo crítico de 7 para 4" do que em cinco telas bonitas sem contexto. Conte a decisão, não só o pixel.
