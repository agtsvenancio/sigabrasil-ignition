import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Truck,
  Wrench,
  Anchor,
  ShieldCheck,
  Clock,
  Users,
  ClipboardCheck,
  MapPinned,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  Package,
  HardHat,
  Building2,
  Factory,
  Boxes,
  Store,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

import logo from "@/assets/logo-siga-brasil.png";
import heroImg from "@/assets/hero.jpg";
import opTruck from "@/assets/operation-truck.jpg";
import opCrane from "@/assets/operation-crane.jpg";
import bannerHighway from "@/assets/banner-highway.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siga Brasil Transportes | Transporte, Içamento e Remoção Técnica" },
      {
        name: "description",
        content:
          "Siga Brasil Transportes: transporte rodoviário, içamento e remoção técnica em todo o Brasil. Planejamento, equipe treinada e equipamentos adequados para cargas do pequeno ao grande porte. Solicite uma avaliação.",
      },
      {
        name: "keywords",
        content:
          "transporte rodoviário, içamento, munck, remoção técnica, logística, Guarulhos, São Paulo, Siga Brasil",
      },
      { property: "og:title", content: "Siga Brasil Transportes" },
      {
        property: "og:description",
        content:
          "Conectando destinos, transportando com confiança. Transporte, içamento e remoção técnica sob medida para todo o Brasil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const WHATSAPP =
  "https://wa.me/5511999352524?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20de%20opera%C3%A7%C3%A3o%20com%20a%20Siga%20Brasil.";
const PHONE_DISPLAY = "(11) 99935-2524";
const EMAIL = "thiago@sigabr.com.br";
const ADDRESS = "Rua Silvestre Vasconcelos Calmon, 44 A — Vila Pedro Moreira, Guarulhos/SP";

const NAV = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#frota", label: "Frota" },
  { href: "#operacao", label: "Operação" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#contato", label: "Contato" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/0"
      }`}
    >
      <div className="container-siga flex h-16 items-center justify-between md:h-20">
        <a href="#topo" className="flex items-center" aria-label="Siga Brasil Transportes">
          <img
            src={logo}
            alt="Siga Brasil Transportes"
            width={360}
            height={59}
            className="h-9 w-auto md:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:+5511999352524`}
            className="flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <PhoneCall className="h-4 w-4 text-brand-yellow" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-siga flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-base font-bold uppercase text-primary-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              Fale no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-accent text-accent-foreground">
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <img src={bannerHighway} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="container-siga relative grid items-center gap-10 py-28 md:py-36 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Transporte · Içamento · Remoção Técnica
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-[3.75rem]">
            Conectando destinos,
            <br />
            transportando com{" "}
            <span className="text-primary">confiança</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-accent-foreground/75">
            Operações sob medida para o pequeno, médio e grande porte. Equipe
            qualificada, equipamentos adequados e planejamento técnico do
            recebimento à entrega — em todo o Brasil.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Solicite uma avaliação
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-accent-foreground/30 px-7 py-4 text-base font-bold uppercase tracking-wide text-accent-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-5 w-5" />
              Fale no WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-accent-foreground/80">
            <span className="flex items-center gap-2">
              <MapPinned className="h-4 w-4 text-primary" /> Atuação em todo o Brasil
            </span>
            <span className="flex items-center gap-2">
              <Boxes className="h-4 w-4 text-primary" /> 3 frentes de operação
            </span>
            <span className="flex items-center gap-2">
              <HardHat className="h-4 w-4 text-primary" /> Do pequeno ao grande porte
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-primary" aria-hidden />
          <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-primary" aria-hidden />
          <img
            src={heroImg}
            alt="Guindaste munck amarelo erguendo contêiner em pátio logístico"
            width={1600}
            height={912}
            className="relative w-full rounded-lg object-cover shadow-2xl"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: MapPinned, text: "Atuação rodoviária em todo o Brasil" },
    { icon: Boxes, text: "Transporte, remoção e içamento" },
    { icon: HardHat, text: "Do pequeno ao grande porte" },
    { icon: ClipboardCheck, text: "Planejamento + equipe + equipamento" },
  ];
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-siga grid grid-cols-2 divide-x divide-primary-foreground/15 lg:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-3 px-4 py-4 text-center text-xs font-bold uppercase tracking-wide md:text-sm"
          >
            <it.icon className="h-5 w-5 shrink-0" />
            <span>{it.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  subtitle,
  light = false,
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-yellow">
        <span className="h-px w-8 bg-brand-yellow" />
        {kicker}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl ${
          light ? "text-accent-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? "text-accent-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: Truck,
      num: "01",
      title: "Transporte rodoviário",
      desc: "Coletas, entregas e cargas especiais com atendimento para todo o Brasil.",
    },
    {
      icon: Wrench,
      num: "02",
      title: "Remoção técnica",
      desc: "Estudo prévio para preservar a carga, o ambiente e a continuidade da operação.",
    },
    {
      icon: Anchor,
      num: "03",
      title: "Içamento e Munck",
      desc: "Carga, descarga, posicionamento e remoção com equipamentos de 10t, 12t e 14t.",
    },
  ];
  return (
    <section id="solucoes" className="section-pad bg-background">
      <div className="container-siga">
        <SectionHeading
          kicker="Nossas soluções"
          title={<>Capacidade técnica em <span className="text-brand-yellow">três frentes</span></>}
          subtitle="Soluções coordenadas para transportar, remover e posicionar cargas com segurança — do planejamento à entrega."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-brand-yellow hover:shadow-xl"
            >
              <span className="font-display text-6xl font-black text-muted/40">{s.num}</span>
              <div className="mt-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/15 text-brand-yellow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Objections() {
  const items = [
    {
      q: "Minha carga é segura com vocês?",
      a: "Segurança é o centro da operação. Procedimentos claros, equipamentos corretos e comunicação em cada fase — da carga, da equipe, do cliente e do ambiente.",
    },
    {
      q: "Vocês atendem minha região?",
      a: "Atuamos com transporte rodoviário em todo o Brasil, com base em Guarulhos/SP e frota configurada conforme peso, dimensão e acesso.",
    },
    {
      q: "Cabe a minha operação, do tamanho que for?",
      a: "Sim. Da movimentação pontual à operação de maior complexidade — do pequeno ao grande porte, com a frota certa para cada carga.",
    },
    {
      q: "Como eu acompanho o andamento?",
      a: "Fluxo técnico com monitoramento e controle em todas as etapas. Compromisso com prazos acompanhado do início ao fim.",
    },
  ];
  return (
    <section className="section-pad bg-muted">
      <div className="container-siga grid gap-12 lg:grid-cols-2 lg:items-start">
        <SectionHeading
          kicker="Por que confiar"
          title={<>A solução que <span className="text-brand-yellow">reduz riscos</span> antes de eles existirem</>}
          subtitle="Mais do que transportar: planejar, coordenar e entregar com responsabilidade. Respostas diretas para as dúvidas mais comuns."
        />
        <div className="grid gap-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6">
              <h3 className="flex items-start gap-3 font-display text-lg font-bold">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                {it.q}
              </h3>
              <p className="mt-2 pl-8 text-muted-foreground">{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  const fleet = [
    { name: "IVECO 3/4", cap: "Até 4.000 kg", desc: "Baú ou sider para coletas e entregas urbanas." },
    { name: "3/4 Baú / Sider", cap: "Até 5.000 kg", desc: "Versatilidade para diferentes tipos de carga." },
    { name: "Truck", cap: "Até 14.000 kg", desc: "Carroceria aberta para cargas maiores e pesadas." },
    { name: "Carreta rebaixada", cap: "Cargas especiais", desc: "Grande porte com acompanhamento quando necessário." },
  ];
  return (
    <section id="frota" className="section-pad bg-background">
      <div className="container-siga">
        <SectionHeading
          kicker="Frota e capacidades"
          title={<>A configuração certa <span className="text-brand-yellow">para cada carga</span></>}
          subtitle="Veículos e implementos escolhidos conforme peso, dimensão, acesso e complexidade operacional."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((f, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold uppercase tracking-wide text-brand-yellow">
                  0{i + 1}
                </span>
                <Truck className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{f.name}</h3>
              <p className="mt-1 font-display text-2xl font-black text-foreground">{f.cap}</p>
              <p className="mt-3 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Operation() {
  const steps = [
    { icon: Package, title: "Recebimento", desc: "Carga, local e prazo entram no mapa da operação." },
    { icon: ClipboardCheck, title: "Análise técnica", desc: "Acessos, peso, dimensões e riscos são avaliados." },
    { icon: MapPinned, title: "Planejamento", desc: "Frota, equipe, cronograma e medidas de segurança." },
    { icon: HardHat, title: "Execução", desc: "Profissionais treinados seguem o plano definido." },
    { icon: ShieldCheck, title: "Monitoramento", desc: "Controle e precisão durante todo o processo." },
    { icon: CheckCircle2, title: "Finalização", desc: "Integridade da carga e conclusão cuidadosa." },
  ];
  return (
    <section id="operacao" className="section-pad bg-accent text-accent-foreground">
      <div className="container-siga">
        <SectionHeading
          light
          kicker="Nossa operação"
          title={<>Método, controle e <span className="text-brand-yellow">responsabilidade</span></>}
          subtitle="Um fluxo técnico que transforma uma demanda complexa em uma execução previsível."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-accent-foreground/15 bg-accent-foreground/5 p-7 transition-colors hover:border-brand-yellow"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-yellow text-brand-grey">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm font-bold text-accent-foreground/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-accent-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 border-l-4 border-brand-yellow pl-5 font-display text-xl font-bold text-accent-foreground/90 md:text-2xl">
          “Planejar bem é reduzir riscos antes de eles existirem.”
        </p>
      </div>
    </section>
  );
}

function Safety() {
  const points = [
    { t: "Da carga", d: "Manuseio adequado e preservação da integridade." },
    { t: "Da equipe", d: "Procedimentos seguros e equipamentos corretos." },
    { t: "Do cliente", d: "Redução de riscos e comunicação clara." },
    { t: "Do ambiente", d: "Organização e cuidado com o local da operação." },
  ];
  return (
    <section id="seguranca" className="section-pad bg-background">
      <div className="container-siga grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-3 -top-3 h-20 w-20 border-l-4 border-t-4 border-brand-yellow" aria-hidden />
          <img
            src={opCrane}
            alt="Equipe guiando içamento de equipamento industrial com segurança"
            width={1200}
            height={800}
            loading="lazy"
            className="relative w-full rounded-xl object-cover shadow-xl"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            kicker="Segurança e responsabilidade"
            title={<>Segurança não é detalhe. <br />É o <span className="text-brand-yellow">centro</span> da operação.</>}
            subtitle="Procedimentos claros, equipamentos corretos e comunicação em cada fase do trabalho."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display font-bold">{p.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    { icon: Users, title: "Equipe treinada", desc: "Profissionais qualificados e certificados." },
    { icon: ClipboardCheck, title: "Equipamentos revisados", desc: "Estrutura adequada e pronta para operar." },
    { icon: MapPinned, title: "Planejamento técnico", desc: "Solução desenhada para cada demanda." },
    { icon: Clock, title: "Compromisso com prazos", desc: "Cronograma acompanhado do início ao fim." },
    { icon: Phone, title: "Atendimento ágil", desc: "Comunicação profissional e próxima." },
  ];
  return (
    <section className="section-pad bg-muted">
      <div className="container-siga">
        <SectionHeading
          kicker="Nossos diferenciais"
          title={<>Estrutura que <span className="text-brand-yellow">reduz riscos</span> e dá previsibilidade</>}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-border bg-card p-6">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/15 text-brand-yellow">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center rounded-xl bg-brand-yellow p-6 text-center">
            <p className="font-display text-lg font-black uppercase leading-tight text-brand-grey">
              Eficiência em campo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Segments() {
  const segs = [
    { icon: Building2, label: "Construção civil" },
    { icon: Factory, label: "Indústrias" },
    { icon: Truck, label: "Logística e transporte" },
    { icon: Wrench, label: "Montagens e desmontagens" },
    { icon: Store, label: "Empresas e comércios" },
  ];
  return (
    <section className="section-pad bg-background">
      <div className="container-siga">
        <SectionHeading
          kicker="Segmentos atendidos"
          title={<>Experiência para <span className="text-brand-yellow">diferentes desafios</span></>}
          subtitle="Operações adaptadas ao ambiente, à carga e à rotina de cada cliente."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {segs.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-brand-yellow"
            >
              <s.icon className="h-8 w-8 text-brand-yellow" />
              <span className="text-sm font-semibold">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section-pad bg-muted">
      <div className="container-siga">
        <SectionHeading
          kicker="Operações reais"
          title={<>Precisão em campo. <span className="text-brand-yellow">Confiança na entrega.</span></>}
          subtitle="Registros de operações executadas pela equipe Siga Brasil."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={opTruck}
              alt="Caminhão transporte de carga especial em rodovia"
              width={1200}
              height={800}
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-80"
            />
            <span className="absolute bottom-4 left-4 rounded-md bg-accent/90 px-4 py-2 text-sm font-bold text-accent-foreground">
              Movimentação industrial
            </span>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={opCrane}
              alt="Içamento técnico de equipamento em fábrica"
              width={1200}
              height={800}
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-80"
            />
            <span className="absolute bottom-4 left-4 rounded-md bg-accent/90 px-4 py-2 text-sm font-bold text-accent-foreground">
              Remoção técnica
            </span>
          </div>
        </div>
        <p className="mt-8 text-center font-display text-lg font-bold text-foreground/70">
          Operações planejadas. Resultados controlados.
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="section-pad bg-accent text-accent-foreground">
      <div className="container-siga grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            light
            kicker="Fale conosco"
            title={<>Sua carga exige cuidado. <br />A solução começa <span className="text-brand-yellow">aqui</span>.</>}
            subtitle="Solicite uma avaliação da sua operação. Respondemos no WhatsApp com agilidade."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-accent-foreground/25 px-7 py-4 text-base font-bold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              Enviar e-mail
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="flex items-start gap-4 rounded-xl border border-accent-foreground/15 bg-accent-foreground/5 p-6">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-brand-grey">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent-foreground/50">WhatsApp / Telefone</p>
              <a href={`tel:+5511999352524`} className="font-display text-lg font-bold hover:text-brand-yellow">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-accent-foreground/15 bg-accent-foreground/5 p-6">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-brand-grey">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-foreground/50">E-mail</p>
              <a href={`mailto:${EMAIL}`} className="break-all font-display text-lg font-bold hover:text-brand-yellow">
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-accent-foreground/15 bg-accent-foreground/5 p-6">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-brand-grey">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent-foreground/50">Endereço</p>
              <p className="font-display text-base font-semibold">{ADDRESS}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-grey text-accent-foreground">
      <div className="container-siga grid gap-8 py-12 md:grid-cols-3">
        <div>
          <img src={logo} alt="Siga Brasil Transportes" width={360} height={59} className="h-10 w-auto invert" />
          <p className="mt-4 max-w-xs text-sm text-accent-foreground/60">
            Conectando destinos, transportando com confiança.
          </p>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Transporte · Içamento · Remoção
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent-foreground/50">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-accent-foreground/70 hover:text-brand-yellow">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent-foreground/50">
            Contato
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-accent-foreground/70">
            <li>
              <a href={`tel:+5511999352524`} className="hover:text-brand-yellow">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-brand-yellow">
                {EMAIL}
              </a>
            </li>
            <li>{ADDRESS}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-accent-foreground/10">
        <div className="container-siga flex flex-col items-center justify-between gap-2 py-5 text-xs text-accent-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Siga Brasil Transportes. Todos os direitos reservados.</p>
          <p>Guarulhos · São Paulo · Brasil</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Objections />
        <Fleet />
        <Operation />
        <Safety />
        <Differentials />
        <Segments />
        <Gallery />
        <CTA />
      </main>
      <Footer />
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/20 transition-transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
