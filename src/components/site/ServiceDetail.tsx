import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

import { CTABand, ObjectionList, PageHero, SectionHeading, SiteLayout } from "./SiteLayout";

export function ServiceDetail({
  kicker,
  title,
  subtitle,
  bullets,
  image,
  imageAlt,
  whatTitle,
  what,
  forWho,
  objections,
}: {
  kicker: string;
  title: ReactNode;
  subtitle: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  whatTitle: string;
  what: string[];
  forWho: string[];
  objections: { q: string; a: string }[];
}) {
  return (
    <SiteLayout>
      <PageHero kicker={kicker} title={title} subtitle={subtitle} bullets={bullets} />

      <section className="section-pad bg-background">
        <div className="container-siga grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Escopo do serviço"
              title={
                <>
                  {whatTitle.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-brand-yellow">{whatTitle.split(" ").slice(-1)}</span>
                </>
              }
            />
            <ul className="mt-8 grid gap-3">
              {what.map((w) => (
                <li key={w} className="flex gap-3 rounded-xl border border-border bg-card p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                  <span className="text-muted-foreground">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:sticky lg:top-28">
            <img
              src={image}
              alt={imageAlt}
              width={1200}
              height={800}
              loading="lazy"
              className="w-full rounded-xl object-cover shadow-xl"
            />
            <div className="mt-6 rounded-xl border border-border bg-muted p-6">
              <h3 className="font-display text-lg font-bold">Indicado para</h3>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                {forWho.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ObjectionList
        title={
          <>
            Respostas diretas para <span className="text-brand-yellow">as dúvidas mais comuns</span>
          </>
        }
        subtitle="Transparência antes da contratação: você sabe exatamente o que será feito."
        items={objections}
      />

      <CTABand />
    </SiteLayout>
  );
}
