# Portfólio — Pedro Antônio

Landing page premium (estilo Apple) para Pedro Antônio, Product Designer (UX/UI) em Recife.

- **Stack:** Next.js 15 (App Router) · Tailwind CSS · Framer Motion · Lenis (scroll suave) · next-themes
- **Fontes:** Geist (títulos) · Inter (corpo) · Geist Mono (números/etiquetas) — sans-serif moderna
- **Tema:** claro por padrão, com alternância para escuro (persistido)
- **Idiomas:** Português (padrão), Inglês e Espanhol (persistido, detecta o idioma do navegador)
- **Acento:** azul extraído da foto do Pedro (`#0A63FF` / brilho `#4886FF`) sobre neutros

## Rodar localmente

```bash
npm install
npm run dev
# abre http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

## Estrutura

```
app/
  layout.jsx        # fontes, metadata, providers
  page.jsx          # composição das seções
  globals.css       # design tokens (cores, tipografia, movimento) + utilidades
components/
  providers/        # Providers (tema + idioma + scroll suave)
  motion/           # Reveal, Stagger, MaskReveal (cortina de texto editorial)
  ui/               # ThemeToggle, LangSwitcher
  sections/         # Nav, Hero, Manifesto, Works, CaseMock, About, Skills, Contact, Footer
lib/
  content.js        # TODA a copy (pt/en/es), dados dos cases e paletas por case
public/
  pedro.png         # foto
```

## Onde editar o conteúdo

Tudo em [`lib/content.js`](lib/content.js):

- **Textos da interface** (nav, hero, sobre, contato...): objeto `DICT`, por idioma.
- **Cases** (Bboom, Artin Laser, Silvia Miranda): array `CASES`. Cada case tem:
  - `url`, `year`;
  - `theme`: as cores que a seção "veste" (cada case entra na própria identidade);
  - `i18n`: título, desafio, papel, resultado e tags — nos 3 idiomas.
- **Contato** (e-mail, telefone, Behance, LinkedIn): objeto `CONTACT`.
- **Skills** do marquee: array `SKILLS`.

> Os cases hoje usam mocks estilizados on-brand como *fallback*. Assim que os vídeos
> dos projetos reais chegarem, cada preview passa a mostrar o site real com **scroll-scrub**
> (veja abaixo). Sem `video` definido, o case cai no mock automaticamente.

## Vídeos com scroll-scrub (projeto real)

Cada preview mostra uma gravação do site real, "raspada" pela roda do mouse **somente
quando o ponteiro está dentro do box**: ao rolar sobre o preview, o scroll suave da página
(Lenis) é pausado e a roda controla o `video.currentTime`; ao chegar no início/fim do clipe,
o scroll da página é liberado (sem prender o usuário). Em toque / `prefers-reduced-motion`
mostra um frame estático. Velocidade do scrub controlada por `SPEED` em `ScrubVideo.jsx`.
Componentes: `components/sections/ScrubVideo.jsx` (scrub) e `CasePreview.jsx` (vídeo vs mock).

**Para ativar num case**, em `lib/content.js` adicione ao objeto do case:

```js
video: "/cases/bboom.mp4",     // gravação re-encodada (keyframe por frame)
poster: "/cases/bboom.jpg",    // 1º frame (opcional, evita flash)
```

Coloque os arquivos em `public/cases/`.

**Como gravar (o que enviar):**
- Screen recording rolando o site do topo ao fim, **devagar e constante** (sem solavancos).
- Cursor escondido, sem barras do navegador (ou eu recorto).
- Resolução ≥ 1440px de largura, proporção ~16:10 (o frame do preview é 4:3, recorto sem dor).
- Duração **6 a 12s** de scroll é o ideal.
- Pode mandar MP4/MOV normal — **eu re-encodo** com keyframe em todo frame para o scrub ficar liso:

```bash
ffmpeg -i entrada.mov -an -c:v libx264 -x264-params keyint=1:scenecut=0 \
  -pix_fmt yuv420p -crf 22 -movflags +faststart public/cases/bboom.mp4
```

Sem esse re-encode (`keyint=1`), o scrub trava em MP4 comum (keyframes esparsos).
`prefers-reduced-motion` mostra um frame estático em vez de raspar.

## Decisões de direção

- Sans-serif moderna (Geist), não serifa — pedido do cliente, sobrepõe o plano original.
- Acento azul puxado da luz de contorno da própria foto do Pedro.
- Cada seção de case adota a identidade do produto: Bboom (palco escuro + neon de evento),
  Artin Laser (madeira/cobre artesanal), Silvia Miranda (spa calmo, rosé/sálvia).
- Movimento: cortina de texto (mask reveal), reveal escalonado, brilho ambiente, parallax
  sutil nos previews, marquee de skills. Tudo respeita `prefers-reduced-motion`.

## Deploy

Pronto para a Vercel (mesmo ecossistema dos outros projetos): importe o repositório e faça deploy.
```
