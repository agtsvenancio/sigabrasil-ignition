import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, Wrench, Anchor, ChevronRight, Package, ClipboardCheck, MapPinned, HardHat, ShieldCheck, CheckCircle2 } from "lucide-react";

import { CTABand, ObjectionList, PageHero, SectionHeading, SiteLayout } from "@/components/site/SiteLayout";
import { SERVICES } from "@/components/site/data";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços | Transporte, Içamento e Remoção Técnica — Siga Brasil" },
      {
        name: "description",
        content:
          "Transporte rodoviário, remoção técnica e içamento com munck. Conheça as três frentes de operação da Siga Brasil Transportes e solicite uma avaliação.",
      },
      { property: "og:title", content: "Serviços | Siga Brasil Transportes" },
      {
        property: "og:description",
        content: "Três frentes de operação coordenadas: transporte, remoção técnica e içamento.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

const ICONS = [Truck, Wrench, Anchor];

const STEPS = [
  { icon: Package, title: "Recebimento", desc: "Carga, local e prazo entram no mapa da operação." },
  { icon: ClipboardCheck, title: "Análise técnica", desc: "Acessos, peso, dimensões e riscos são avaliados." },
  { icon: MapPinned, title: "Planejamento", desc: "Frota, equipe, cronograma e medidas de segurança." },
  { icon: HardHat, title: "Execução", desc: "Profissionais treinados seguem o plano definido." },
  { icon: ShieldCheck, title: "Monitoramento", desc: "Controle e precisão durante todo o processo." },
  { icon: CheckCircle2, title: "Finalização", desc: "Integridade da carga e conclusão cuidadosa." },
];

function ServicosPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Nossas soluções"
        title={
          <>
            Capacidade técnica em <span className="text-primary">três frentes</span>
          </>
        }
        subtitle="Transportar, remover e posicionar cargas com segurança — do planejamento à entrega, em todo o Brasil."
        bullets={["Do pequeno ao grande porte", "Munck de 10t, 12t e 14t", "Cargas especiais"]}
      />

      <section className="section-pad bg-background">
        <div className="container-siga grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Link
                key={s.slug}
                to={s.slug}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-brand-yellow hover:shadow-xl"
              >
                <span className="font-display text-6xl font-black text-muted/40">{s.num}</span>
                <div className="mt-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/15 text-brand-yellow">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-xl font-bold">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-brand-yellow">
                  Ver detalhes <ChevronRight className="h-4 w-4" />
                </span>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-accent text-accent-foreground">
        <div className="container-siga">
          <SectionHeading
            light
            kicker="Como trabalhamos"
            title={
              <>
                Método, controle e <span className="text-brand-yellow">responsabilidade</span>
              </>
            }
            subtitle="Um fluxo técnico que transforma uma demanda complexa em uma execução previsível."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
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
        </div>
      </section>

      <ObjectionList
        title={
          <>
            Ainda em dúvida sobre <span className="text-brand-yellow">qual serviço</span> contratar?
          </>
        }
        subtitle="A avaliação é gratuita: descrevemos o escopo, indicamos a frota e explicamos o que será feito antes de qualquer compromisso."
        items={[
          {
            q: "Não sei se é transporte ou remoção técnica.",
            a: "Nós definimos com você: se a carga precisa ser desmontada, protegida ou retirada de um ambiente crítico, entra remoção técnica; se é deslocamento ponta a ponta, transporte rodoviário.",
          },
          {
            q: "Minha carga é fora do padrão.",
            a: "Trabalhamos com carreta rebaixada e munck de até 14t, com acompanhamento quando necessário. Cargas especiais são planejadas caso a caso.",
          },
          {
            q: "Preciso dos três serviços na mesma operação.",
            a: "É comum. Içamento, transporte e reposicionamento no destino podem ser executados pela mesma equipe, com um único plano e um único interlocutor.",
          },
          {
            q: "Tenho urgência.",
            a: "Envie os dados pelo WhatsApp: respondemos com agilidade e indicamos a viabilidade de data e frota já no primeiro contato.",
          },
        ]}
      />

      <CTABand />
    </SiteLayout>
  );
}
