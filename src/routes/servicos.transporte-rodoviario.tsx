import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetail } from "@/components/site/ServiceDetail";
import opTruck from "@/assets/operation-truck.jpg";

export const Route = createFileRoute("/servicos/transporte-rodoviario")({
  head: () => ({
    meta: [
      { title: "Transporte Rodoviário para todo o Brasil | Siga Brasil" },
      {
        name: "description",
        content:
          "Transporte rodoviário de cargas gerais e especiais para todo o Brasil: 3/4, truck e carreta rebaixada, com planejamento técnico e acompanhamento do início ao fim.",
      },
      { property: "og:title", content: "Transporte Rodoviário | Siga Brasil" },
      {
        property: "og:description",
        content: "Coletas, entregas e cargas especiais com frota adequada e prazo acompanhado.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/servicos/transporte-rodoviario" },
    ],
    links: [{ rel: "canonical", href: "/servicos/transporte-rodoviario" }],
  }),
  component: () => (
    <ServiceDetail
      kicker="Transporte rodoviário"
      title={
        <>
          Sua carga no destino certo, <span className="text-primary">no prazo combinado</span>
        </>
      }
      subtitle="Coletas, entregas e cargas especiais com atendimento para todo o Brasil, com a configuração de frota certa para cada operação."
      bullets={["Cargas gerais e especiais", "3/4, truck e carreta", "Cobertura nacional"]}
      image={opTruck}
      imageAlt="Caminhão transportando carga em rodovia"
      whatTitle="O que está incluso"
      what={[
        "Análise de peso, dimensões e acessos antes da coleta",
        "Escolha do veículo e do implemento adequados (baú, sider, carroceria aberta, rebaixada)",
        "Amarração e proteção da carga conforme o tipo de material",
        "Acompanhamento do cronograma e comunicação durante o trajeto",
        "Descarga coordenada com a equipe do destino",
      ]}
      forWho={[
        "Indústrias que precisam mover máquinas e insumos",
        "Construtoras com materiais e equipamentos de obra",
        "Empresas de montagem e manutenção",
        "Comércios com cargas volumosas",
      ]}
      objections={[
        {
          q: "E se minha carga for danificada no caminho?",
          a: "A proteção começa antes da viagem: definição de amarração, calços e acomodação conforme o material, com equipe treinada no carregamento e no descarregamento.",
        },
        {
          q: "Vocês atendem fora de São Paulo?",
          a: "Sim. A base é em Guarulhos/SP e a operação rodoviária atende todo o Brasil, com rota e cronograma definidos no planejamento.",
        },
        {
          q: "Como sei quanto vai custar?",
          a: "Com origem, destino, peso e dimensões conseguimos indicar a frota e o escopo. A avaliação é feita sem compromisso.",
        },
        {
          q: "E se o local de entrega for de difícil acesso?",
          a: "Acessos entram na análise técnica. Quando necessário, combinamos veículo menor, içamento ou reposicionamento no destino.",
        },
      ]}
    />
  ),
});
