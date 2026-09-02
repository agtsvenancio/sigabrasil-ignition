export const WHATSAPP =
  "https://wa.me/5511999352524?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20de%20opera%C3%A7%C3%A3o%20com%20a%20Siga%20Brasil.";
export const PHONE_DISPLAY = "(11) 99935-2524";
export const PHONE_HREF = "tel:+5511999352524";
export const EMAIL = "thiago@sigabr.com.br";
export const ADDRESS =
  "Rua Silvestre Vasconcelos Calmon, 44 A — Vila Pedro Moreira, Guarulhos/SP";

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "A Empresa" },
  { to: "/servicos", label: "Serviços" },
  { to: "/frota", label: "Frota" },
  { to: "/segmentos", label: "Segmentos" },
  { to: "/seguranca", label: "Segurança" },
  { to: "/perguntas-frequentes", label: "Dúvidas" },
  { to: "/contato", label: "Contato" },
] as const;

export const SERVICES = [
  {
    slug: "/servicos/transporte-rodoviario",
    num: "01",
    title: "Transporte rodoviário",
    short: "Coletas, entregas e cargas especiais com atendimento para todo o Brasil.",
  },
  {
    slug: "/servicos/remocao-tecnica",
    num: "02",
    title: "Remoção técnica",
    short: "Estudo prévio para preservar a carga, o ambiente e a continuidade da operação.",
  },
  {
    slug: "/servicos/icamento-munck",
    num: "03",
    title: "Içamento e Munck",
    short: "Carga, descarga, posicionamento e remoção com equipamentos de 10t, 12t e 14t.",
  },
] as const;
