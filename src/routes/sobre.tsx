import { createFileRoute } from "@tanstack/react-router";
import { Users, ClipboardCheck, MapPinned, Clock, Phone, ShieldCheck } from "lucide-react";

import {
  CTABand,
  PageHero,
  SectionHeading,
  SiteLayout,
} from "@/components/site/SiteLayout";
import opTruck from "@/assets/operation-truck.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "A Empresa | Siga Brasil Transportes" },
      {
        name: "description",
        content:
          "Conheça a Siga Brasil Transportes: missão, valores e a estrutura técnica por trás de operações de transporte, içamento e remoção técnica em todo o Brasil.",
      },
      { property: "og:title", content: "A Empresa | Siga Brasil Transportes" },
      {
        property: "og:description",
        content:
          "Planejamento, equipe treinada e equipamentos revisados: a estrutura que dá previsibilidade à sua operação.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

const VALORES = [
  { icon: ShieldCheck, t: "Segurança", d: "Procedimentos claros em cada etapa, sem improviso." },
  { icon: ClipboardCheck, t: "Responsabilidade", d: "Compromisso com o que foi combinado." },
  { icon: Users, t: "Pessoas", d: "Equipe treinada e valorizada em campo." },
  { icon: Clock, t: "Pontualidade", d: "Cronograma acompanhado do início ao fim." },
  { icon: MapPinned, t: "Planejamento", d: "Cada operação é estudada antes de ser executada." },
  { icon: Phone, t: "Proximidade", d: "Atendimento ágil e comunicação profissional." },
];

function SobrePage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Quem somos"
        title={
          <>
            Mais do que transportar: <span className="text-primary">planejar, coordenar e entregar</span>.
          </>
        }
        subtitle="A Siga Brasil Transportes nasceu para resolver operações que exigem técnica — do pequeno ao grande porte — com equipe qualificada e equipamentos adequados."
        bullets={["Base em Guarulhos/SP", "Atuação em todo o Brasil", "3 frentes de operação"]}
      />

      <section className="section-pad bg-background">
        <div className="container-siga grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Nossa história"
              title={
                <>
                  Estrutura técnica com <span className="text-brand-yellow">olhar de operação</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                Atuamos em transporte rodoviário, içamento e remoção técnica atendendo indústrias,
                construtoras, empresas de montagem e comércios que precisam mover cargas com
                cuidado e prazo definido.
              </p>
              <p>
                Cada demanda passa por análise técnica antes da execução: acessos, peso, dimensões
                e riscos são avaliados para definir a frota, a equipe e o cronograma corretos.
              </p>
              <p className="border-l-4 border-brand-yellow pl-5 font-display text-xl font-bold text-foreground">
                “Planejar bem é reduzir riscos antes de eles existirem.”
              </p>
            </div>
          </div>
          <img
            src={opTruck}
            alt="Caminhão da operação em rodovia"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="section-pad bg-muted">
        <div className="container-siga">
          <SectionHeading
            kicker="Missão e valores"
            title={
              <>
                O que sustenta cada <span className="text-brand-yellow">operação</span>
              </>
            }
            subtitle="Conectar destinos e transportar com confiança — com método, cuidado e transparência."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {VALORES.map((v) => (
              <div key={v.t} className="flex gap-4 rounded-xl border border-border bg-card p-6">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/15 text-brand-yellow">
                  <v.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold">{v.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
