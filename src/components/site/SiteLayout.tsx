import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  X,
  Phone,
  PhoneCall,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

import logo from "@/assets/logo-siga-brasil.png";
import bannerHighway from "@/assets/banner-highway.png";
import {
  ADDRESS,
  EMAIL,
  NAV,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICES,
  WHATSAPP,
} from "./data";

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
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-md"
          : "border-b border-border/60 bg-background/85 backdrop-blur"
      }`}
    >
      <div className="container-siga flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center" aria-label="Siga Brasil Transportes">
          <img
            src={logo}
            alt="Siga Brasil Transportes"
            width={360}
            height={59}
            className="h-9 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-semibold">
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
            Orçamento
          </a>
        </div>

        <button
          className="xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-background xl:hidden">
          <nav className="container-siga flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-muted"
              >
                {item.label}
              </Link>
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

function Footer() {
  return (
    <footer className="bg-brand-grey text-accent-foreground">
      <div className="container-siga grid gap-8 py-14 md:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="Siga Brasil Transportes"
            width={360}
            height={59}
            className="h-10 w-auto invert"
          />
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
              <li key={n.to}>
                <Link to={n.to} className="text-accent-foreground/70 hover:text-brand-yellow">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent-foreground/50">
            Serviços
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={s.slug} className="text-accent-foreground/70 hover:text-brand-yellow">
                  {s.title}
                </Link>
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
              <a href={PHONE_HREF} className="hover:text-brand-yellow">
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

export function SectionHeading({
  kicker,
  title,
  subtitle,
  light = false,
  center = false,
}: {
  kicker: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-yellow ${
          center ? "justify-center" : ""
        }`}
      >
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
        <p
          className={`mt-4 text-lg ${
            light ? "text-accent-foreground/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  subtitle,
  bullets = [],
}: {
  kicker: string;
  title: ReactNode;
  subtitle: string;
  bullets?: string[];
}) {
  return (
    <section className="relative overflow-hidden bg-accent text-accent-foreground">
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <img src={bannerHighway} alt="" className="h-full w-full object-cover" />
      </div>
      <div
        className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div className="container-siga relative py-28 md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {kicker}
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-accent-foreground/75">{subtitle}</p>
        {bullets.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-accent-foreground/80">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {b}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar orçamento
          </a>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-accent-foreground/30 px-7 py-4 text-base font-bold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
          >
            Falar com a equipe
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CTABand({
  title = "Sua carga exige cuidado. A solução começa aqui.",
  subtitle = "Solicite uma avaliação da sua operação. Respondemos no WhatsApp com agilidade.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-pad bg-accent text-accent-foreground">
      <div className="container-siga grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading light kicker="Fale conosco" title={title} subtitle={subtitle} />
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
          {[
            { icon: Phone, label: "WhatsApp / Telefone", value: PHONE_DISPLAY, href: PHONE_HREF },
            { icon: Mail, label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}` },
            { icon: MapPin, label: "Endereço", value: ADDRESS },
          ].map((c) => (
            <div
              key={c.label}
              className="flex items-start gap-4 rounded-xl border border-accent-foreground/15 bg-accent-foreground/5 p-6"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-brand-grey">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-foreground/50">
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="break-all font-display text-lg font-bold hover:text-brand-yellow"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="font-display text-base font-semibold">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ObjectionList({
  items,
  kicker = "Quebrando objeções",
  title,
  subtitle,
}: {
  items: { q: string; a: string }[];
  kicker?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="section-pad bg-muted">
      <div className="container-siga grid gap-12 lg:grid-cols-2 lg:items-start">
        <SectionHeading kicker={kicker} title={title} subtitle={subtitle} />
        <div className="grid gap-4">
          {items.map((it) => (
            <div key={it.q} className="rounded-xl border border-border bg-card p-6">
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

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
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
