import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryCharging,
  Bike,
  Check,
  ChevronRight,
  Clock3,
  Facebook,
  Gauge,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
  Youtube,
  Zap,
  type LucideIcon,
} from "lucide-react";

import facadeAsset from "@/assets/ciclovolt-fachada-esquina.png.asset.json";
import showroomAsset from "@/assets/ciclovolt-showroom.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WHATSAPP =
  "https://api.whatsapp.com/send?phone=551332245037&text=Ol%C3%A1!%20Vi%20o%20site%20da%20Ciclovolt%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
const MAPS = "https://maps.app.goo.gl/FRgDDYWqvEXgY4uT6";

const vehicles = [
  {
    type: "Moto elétrica",
    name: "Mobilidade para todo dia",
    description: "Condução silenciosa, resposta imediata e praticidade para a rotina urbana.",
    icon: Zap,
    specs: ["Bateria de lítio", "Até 60–70 km de autonomia", "Zero combustível"],
  },
  {
    type: "Autopropelido",
    name: "Modelo X-15",
    description: "Compacto, confortável e pensado para deslocamentos leves pela cidade.",
    icon: Gauge,
    specs: ["Motor de 1000 W", "Freios a disco hidráulicos", "Recarga na tomada"],
  },
  {
    type: "Bike elétrica",
    name: "BW1",
    description: "A liberdade da bicicleta com assistência elétrica para ir mais longe.",
    icon: Bike,
    specs: ["Bateria de lítio", "Baixo custo por recarga", "Mobilidade sem gasolina"],
  },
];

const reviews = [
  {
    name: "Andrea Madalena",
    date: "6 de agosto de 2026",
    text: "Moto elétrica maravilhosa, com ré, atendimento cinco estrelas, me explicaram tudo com muita calma e além do mais dão toda assistência após, caso necessite. Equipe top. Recomendo e muito.",
    url: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2kxcGMybGxha3BUTjNsSU1IZHpNelpRT1VSTldGRRAB!2m1!1s0x94ce024af1856bd3:0x3bc8f09a8e450013",
  },
  {
    name: "Yuri Miranda",
    date: "5 de agosto de 2026",
    text: "Já comprei duas motos com eles. Muito bom atendimento. E pós-venda também muito bom em caso de precisar fazer manutenção.",
    url: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2tadWRHeEZaMmxrVmt0V2FrUkZlVEJXVFhod1QyYxAB!2m1!1s0x94ce024af1856bd3:0x3bc8f09a8e450013",
  },
  {
    name: "Reginaldo Lisboa de Campos",
    date: "5 de maio de 2026",
    text: "Foi ótimo do começo ao fim. No atendimento, tirou todas as minhas dúvidas e ofereceu um produto de qualidade. Estou satisfeito.",
    url: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT21KUGVqZG1hV05NV0Znd2JUWnBXRzUxV2t0SVpIYxAB!2m1!1s0x94ce024af1856bd3:0x3bc8f09a8e450013",
  },
  {
    name: "Rita Lopes",
    date: "14 de abril de 2026",
    text: "Fomos super bem atendidos e voltamos para efetuar a compra do autopropelido. Comprei para meu filho e ele está adorando!",
    url: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xwVVNVZFRNSFZMWVVScE4zWjFWWFJEUWpaTVUxRRAB!2m1!1s0x94ce024af1856bd3:0x3bc8f09a8e450013",
  },
  {
    name: "Lica Aline",
    date: "29 de março de 2026",
    text: "Autopropelido lindo, feito com muito carinho! Atenciosos, os melhores vendedores de Santos, logo vou querer outro!",
    url: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT21saVpqbE9TbE5sTnkxV1kySTRUMFpOUlVOTU5FRRAB!2m1!1s0x94ce024af1856bd3:0x3bc8f09a8e450013",
  },
];

const navItems = [
  ["Veículos", "#veiculos"],
  ["Assistência", "#assistencia"],
  ["Avaliações", "#avaliacoes"],
  ["Sobre", "#sobre"],
  ["Localização", "#localizacao"],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ciclovolt | Veículos Elétricos em Santos" },
      {
        name: "description",
        content:
          "Motos, scooters, autopropelidos e bikes elétricas em Santos. Assistência técnica própria e mais de 15 anos de experiência.",
      },
      { property: "og:title", content: "Ciclovolt — Mobilidade Elétrica desde 2008" },
      {
        property: "og:description",
        content: "Conheça veículos elétricos e assistência técnica especializada em Santos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "Ciclovolt - Mobilidade Elétrica",
          foundingDate: "2008",
          telephone: "+55 13 3224-5037",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Affonso Penna, 419 - Macuco",
            addressLocality: "Santos",
            addressRegion: "SP",
            postalCode: "11020-001",
            addressCountry: "BR",
          },
          openingHours: "Mo-Fr 10:00-18:00",
          geo: { "@type": "GeoCoordinates", latitude: -23.9678348, longitude: -46.3063992 },
          sameAs: [
            "https://www.instagram.com/ciclovoltveiculoseletricos",
            "https://www.facebook.com/ciclovolt.veiculoseletricos",
            "https://x.com/ciclovolt",
            "https://www.youtube.com/channel/UCPgImJSh5jIxQWV6TajSf3w",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#inicio" className="group flex shrink-0 items-center gap-2" aria-label="Ciclovolt — início">
      <span className="grid h-9 w-9 place-items-center border border-brand/35 bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
        <Zap className="h-5 w-5" fill="currentColor" />
      </span>
      <span className={compact ? "sr-only sm:not-sr-only sm:block" : "block"}>
        <span className="block font-display text-lg font-bold leading-none text-foreground">
          CICLO<span className="text-brand">›</span>VOLT
        </span>
        <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Mobilidade elétrica
        </span>
      </span>
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand">
        <span className="h-px w-8 bg-brand" /> {eyebrow}
      </p>
      <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-ink" : "text-foreground"}`}>
        {title}
      </h2>
      {copy ? <p className={`mt-5 text-base leading-7 ${light ? "text-ink/70" : "text-muted-foreground"}`}>{copy}</p> : null}
    </div>
  );
}

function Index() {
  const mapsKey = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"];
  const mapSrc = mapsKey
    ? `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=place_id:ChIJ02uF8UoCzpQREwBFjprwyDs`
    : undefined;

  return (
    <main id="inicio" className="overflow-hidden bg-background text-foreground">
      <div className="border-b border-border bg-surface-strong text-xs text-muted-foreground">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-center px-4 sm:justify-between sm:px-6 lg:px-8">
          <p className="hidden items-center gap-2 sm:flex"><MapPin className="h-3.5 w-3.5 text-brand" /> Av. Affonso Penna, 419 — Santos, SP</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2"><Clock3 className="h-3.5 w-3.5 text-brand" /> Seg–Sex · 10h às 18h</span>
            <a href="tel:+551332245037" className="hidden items-center gap-2 transition-colors hover:text-brand md:flex"><Phone className="h-3.5 w-3.5" /> (13) 3224-5037</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand">{label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild className="h-11 rounded-none bg-brand px-5 text-brand-foreground shadow-none hover:bg-brand/85">
              <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Falar no WhatsApp</a>
            </Button>
          </div>
          <details className="group relative lg:hidden">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center border border-border bg-secondary [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5 group-open:hidden" />
              <X className="hidden h-5 w-5 group-open:block" />
              <span className="sr-only">Abrir menu</span>
            </summary>
            <nav className="absolute right-0 top-12 w-64 border border-border bg-surface p-3 shadow-2xl" aria-label="Menu móvel">
              {navItems.map(([label, href]) => <a key={href} href={href} className="block border-b border-border px-3 py-3 text-sm font-medium last:border-0">{label}</a>)}
              <Button asChild className="mt-3 w-full rounded-none bg-brand text-brand-foreground hover:bg-brand/85"><a href={WHATSAPP}>WhatsApp</a></Button>
            </nav>
          </details>
        </div>
      </header>

      <section className="relative min-h-[calc(100svh-108px)] border-b border-border">
        <img src={showroomAsset.url} alt="Fachada e showroom da Ciclovolt com motos e scooters elétricas em Santos" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto flex min-h-[calc(100svh-108px)] max-w-7xl items-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:items-center lg:px-8 lg:pb-20 lg:pt-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-brand/50 bg-background/75 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand backdrop-blur-md">
              <Sparkles className="h-4 w-4" /> Pioneira na Baixada Santista
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.04] text-hero-foreground sm:text-6xl lg:text-7xl">
              Mobilidade elétrica<br /><span className="text-brand">desde 2008.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">
              Motos, scooters, autopropelidos e bikes elétricas com assistência técnica própria em Santos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-13 rounded-none bg-brand px-6 font-bold text-brand-foreground shadow-none hover:bg-brand/85">
                <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Falar com um consultor <ArrowRight /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13 rounded-none border-hero-foreground/30 bg-background/15 px-6 text-hero-foreground shadow-none backdrop-blur-md hover:bg-background/25 hover:text-hero-foreground">
                <a href="#veiculos">Conhecer os veículos <ChevronRight /></a>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-hero-foreground/20 bg-background/20 backdrop-blur-sm">
              {[["+15", "anos de mercado"], ["+5 mil", "unidades vendidas"], ["Própria", "assistência técnica"]].map(([value, label]) => (
                <div key={label} className="border-r border-hero-foreground/20 px-3 py-4 last:border-r-0 sm:px-5">
                  <strong className="block font-display text-xl text-hero-foreground sm:text-2xl">{value}</strong>
                  <span className="mt-1 block text-[10px] uppercase leading-4 tracking-[0.1em] text-hero-muted sm:text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="veiculos" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionTitle eyebrow="Linha elétrica" title="Escolha um novo jeito de se mover." copy="Soluções elétricas para diferentes rotinas, com orientação especializada antes e depois da compra." />
            <Button asChild variant="outline" className="w-fit rounded-none border-brand/50 bg-transparent text-brand hover:bg-brand hover:text-brand-foreground">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">Consultar disponibilidade <ArrowRight /></a>
            </Button>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
            {vehicles.map((vehicle, index) => {
              const Icon = vehicle.icon;
              return (
                <article key={vehicle.name} className="group relative bg-surface p-6 transition-colors hover:bg-surface-strong sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">{vehicle.type}</span>
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <div className="mt-12 grid h-16 w-16 place-items-center border border-brand/30 bg-brand/10 text-brand transition-transform group-hover:-translate-y-1"><Icon className="h-8 w-8" /></div>
                  <h3 className="mt-7 font-display text-2xl font-bold">{vehicle.name}</h3>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-muted-foreground">{vehicle.description}</p>
                  <ul className="mt-7 space-y-3 border-t border-border pt-6">
                    {vehicle.specs.map((spec) => <li key={spec} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 text-brand" /> {spec}</li>)}
                  </ul>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand">Tenho interesse <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                </article>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">* Autonomia pode variar conforme modelo, carga, terreno e condições de uso. Consulte as especificações do veículo disponível.</p>
        </div>
      </section>

      <section id="assistencia" className="scroll-mt-24 bg-contrast text-contrast-foreground">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-[620px]">
            <img src={facadeAsset.url} alt="Fachada da loja Ciclovolt na esquina da Avenida Affonso Penna, número 419" className="absolute inset-0 h-full w-full object-cover object-[center_60%]" loading="lazy" />
            <div className="absolute inset-0 bg-contrast/25" />
            <div className="absolute bottom-0 left-0 border-r border-t border-contrast-foreground/20 bg-contrast/90 p-5 backdrop-blur-md sm:p-7">
              <div className="flex items-center gap-3"><ShieldCheck className="h-8 w-8 text-brand" /><strong className="font-display text-xl">Pós-venda de verdade</strong></div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
            <SectionTitle light eyebrow="Oficina especializada" title="Quem vende, entende. Quem entende, cuida." copy="Nossa assistência técnica própria acompanha seu veículo elétrico com conhecimento especializado e atendimento direto." />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {([
                [Wrench, "Revisão especializada", "Diagnóstico, ajustes e manutenção preventiva para rodar com segurança."],
                [BatteryCharging, "Baterias e elétrica", "Avaliação de bateria, sistema elétrico e componentes de recarga."],
                [ShieldCheck, "Peças e suporte", "Orientação técnica e peças compatíveis para cuidar do seu investimento."],
                [Zap, "Agilidade no atendimento", "Equipe próxima para solucionar dúvidas e necessidades do pós-venda."],
              ] as Array<[LucideIcon, string, string]>).map(([Icon, title, copy]) => (
                <div key={String(title)} className="border-t border-ink/20 pt-5">
                  <Icon className="h-6 w-6 text-brand" />
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{String(copy)}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-10 w-fit rounded-none bg-ink px-6 text-paper hover:bg-ink/85">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">Falar com a assistência <MessageCircle /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Por que elétrico?" title="Menos gasto. Mais cidade." />
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {([
              [BatteryCharging, "Economia que aparece", "Recarregue na tomada e reduza a dependência dos constantes aumentos da gasolina."],
              [Leaf, "Mobilidade mais limpa", "Sem emissão de gases durante o uso e com uma experiência urbana muito mais silenciosa."],
              [Gauge, "Praticidade no trânsito", "Veículos ágeis, fáceis de conduzir e ideais para percursos do dia a dia."],
            ] as Array<[LucideIcon, string, string]>).map(([Icon, title, copy]) => (
              <div key={String(title)} className="bg-surface px-6 py-9 sm:px-8">
                <Icon className="h-7 w-7 text-brand" />
                <h3 className="mt-6 font-display text-xl font-bold">{String(title)}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{String(copy)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <SectionTitle eyebrow="Quem compra, recomenda" title="Experiências reais. Confiança construída." />
            <div className="flex items-center gap-5 border-l border-border pl-6 lg:justify-end">
              <div><div className="font-display text-5xl font-bold">4,5</div><div className="mt-1 flex gap-1 text-star" aria-label="4,5 de 5 estrelas">{[1,2,3,4,5].map((n) => <Star key={n} className="h-4 w-4" fill="currentColor" />)}</div></div>
              <div className="text-sm leading-5 text-muted-foreground"><strong className="block text-foreground">Google</strong>104 avaliações públicas<br />consultadas em set. de 2026</div>
            </div>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="mt-12">
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
                  <article className="flex h-full min-h-80 flex-col border border-border bg-surface p-6 sm:p-7">
                    <div className="flex items-center justify-between"><Quote className="h-8 w-8 text-brand" /><span className="font-display text-lg font-bold"><span className="text-google-blue">G</span>oogle</span></div>
                    <div className="mt-6 flex gap-1 text-star">{[1,2,3,4,5].map((n) => <Star key={n} className="h-4 w-4" fill="currentColor" />)}</div>
                    <blockquote className="mt-5 flex-1 text-sm leading-7 text-foreground/85">“{review.text}”</blockquote>
                    <div className="mt-6 border-t border-border pt-5"><strong className="block text-sm">{review.name}</strong><div className="mt-1 flex items-center justify-between gap-3"><time className="text-xs text-muted-foreground">{review.date}</time><a href={review.url} target="_blank" rel="noreferrer" className="text-xs font-bold text-brand hover:underline">Ver original</a></div></div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex gap-2">
              <CarouselPrevious className="static h-11 w-11 translate-y-0 rounded-none border-border bg-surface hover:bg-brand hover:text-brand-foreground" />
              <CarouselNext className="static h-11 w-11 translate-y-0 rounded-none border-border bg-surface hover:bg-brand hover:text-brand-foreground" />
              <Button asChild variant="outline" className="ml-auto rounded-none border-border bg-transparent"><a href={MAPS} target="_blank" rel="noreferrer">Ver no Google <ArrowRight /></a></Button>
            </div>
          </Carousel>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-24 border-y border-border bg-surface px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img src={showroomAsset.url} alt="Showroom da Ciclovolt com veículos elétricos expostos" className="aspect-[4/3] w-full object-cover object-center" loading="lazy" />
            <div className="absolute -bottom-6 right-0 w-44 bg-brand p-5 text-brand-foreground sm:w-52"><strong className="font-display text-3xl">Desde 2008</strong><span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em]">movendo a Baixada</span></div>
          </div>
          <div className="lg:pl-10">
            <SectionTitle eyebrow="Nossa história" title="Engenharia, experiência e proximidade." copy="A Ciclovolt nasceu para tornar a mobilidade elétrica uma realidade acessível. Há mais de 15 anos, ajudamos a transformar a forma como a Baixada Santista se move." />
            <p className="mt-5 text-base leading-7 text-muted-foreground">Como fábrica e montadora nacional, reunimos engenharia e desenvolvimento próprio com atendimento consultivo, oficina especializada e suporte pós-venda no mesmo lugar.</p>
            <div className="mt-8 grid grid-cols-2 gap-px bg-border">
              <div className="bg-background p-5"><strong className="font-display text-3xl text-brand">+5.000</strong><span className="mt-1 block text-xs uppercase tracking-[0.1em] text-muted-foreground">unidades vendidas</span></div>
              <div className="bg-background p-5"><strong className="font-display text-3xl text-brand">Santos</strong><span className="mt-1 block text-xs uppercase tracking-[0.1em] text-muted-foreground">origem e sede</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="localizacao" className="scroll-mt-24">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-center bg-contrast px-6 py-16 text-contrast-foreground sm:px-12 lg:px-[max(3rem,calc((100vw-80rem)/2))] lg:py-20 lg:pr-14">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand"><span className="h-px w-8 bg-brand" /> Visite a loja</p>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">Estamos perto do Canal 5, em Santos.</h2>
            <div className="mt-9 space-y-6">
              <div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" /><div><strong className="text-ink">Av. Affonso Penna, 419</strong><p className="mt-1 text-sm leading-6 text-ink/65">Macuco, Santos — SP<br />CEP 11020-001</p></div></div>
              <div className="flex gap-4"><Clock3 className="mt-1 h-5 w-5 shrink-0 text-brand" /><div><strong className="text-ink">Segunda a sexta</strong><p className="mt-1 text-sm text-ink/65">Das 10h às 18h</p></div></div>
              <div className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-brand" /><div><a href="tel:+551332245037" className="block font-bold text-ink hover:text-brand">(13) 3224-5037</a><a href="tel:+5513981678714" className="mt-1 block text-sm text-ink/65 hover:text-brand">(13) 98167-8714</a></div></div>
            </div>
            <Button asChild className="mt-9 w-fit rounded-none bg-ink px-6 text-paper hover:bg-ink/85"><a href={MAPS} target="_blank" rel="noreferrer"><MapPin /> Traçar rota no Google Maps</a></Button>
          </div>
          <div className="min-h-[480px] bg-surface">
            {mapSrc ? <iframe title="Localização da Ciclovolt em Santos" src={mapSrc} className="h-full min-h-[480px] w-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" /> : <div className="grid h-full min-h-[480px] place-items-center p-8 text-center"><div><MapPin className="mx-auto h-10 w-10 text-brand" /><p className="mt-4 text-muted-foreground">Abra a localização da Ciclovolt no Google Maps.</p><Button asChild className="mt-5 rounded-none bg-brand text-brand-foreground"><a href={MAPS}>Ver mapa</a></Button></div></div>}
          </div>
        </div>
      </section>

      <section className="bg-brand px-4 py-14 text-brand-foreground sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">Pronto para mudar?</p><h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Sua próxima viagem começa na tomada.</h2></div>
          <Button asChild size="lg" className="h-13 w-fit rounded-none bg-ink px-7 text-paper shadow-none hover:bg-ink/85"><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Conversar agora <ArrowRight /></a></Button>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-border pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">Mobilidade elétrica, engenharia nacional e assistência técnica própria desde 2008.</p></div>
          <div><h3 className="text-xs font-bold uppercase tracking-[0.15em]">Navegue</h3><div className="mt-5 space-y-3">{navItems.map(([label, href]) => <a key={href} href={href} className="block text-sm text-muted-foreground hover:text-brand">{label}</a>)}</div></div>
          <div><h3 className="text-xs font-bold uppercase tracking-[0.15em]">Contato</h3><div className="mt-5 space-y-3 text-sm text-muted-foreground"><a className="block hover:text-brand" href="tel:+551332245037">(13) 3224-5037</a><a className="block hover:text-brand" href="tel:+5513981678714">(13) 98167-8714</a><p>Seg–Sex · 10h às 18h</p><p>Av. Affonso Penna, 419<br />Macuco — Santos, SP</p></div></div>
          <div><h3 className="text-xs font-bold uppercase tracking-[0.15em]">Acompanhe</h3><div className="mt-5 flex gap-2">
            {([
              [Instagram, "Instagram", "https://www.instagram.com/ciclovoltveiculoseletricos"],
              [Facebook, "Facebook", "https://www.facebook.com/ciclovolt.veiculoseletricos"],
              [X, "X", "https://x.com/ciclovolt"],
              [Youtube, "YouTube", "https://www.youtube.com/channel/UCPgImJSh5jIxQWV6TajSf3w?view_as=subscriber"],
            ] as Array<[LucideIcon, string, string]>).map(([Icon, label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"><Icon className="h-4 w-4" /></a>)}
          </div></div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between"><p>© 2026 Ciclovolt Mobilidade Elétrica.</p><p>Santos · São Paulo · Brasil</p></div>
      </footer>

      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a Ciclovolt no WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-2xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2 focus:ring-offset-background sm:bottom-7 sm:right-7"><MessageCircle className="h-7 w-7" fill="currentColor" /></a>
    </main>
  );
}