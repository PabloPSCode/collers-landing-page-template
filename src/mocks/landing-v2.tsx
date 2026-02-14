import { type BrandLogo } from "@/components/marketing/BrandMarquee";
import {
  FlagCheckeredIcon,
  LightningIcon,
  MapPinIcon,
  RocketLaunchIcon,
  StarIcon,
  TagIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";

const sneakerImages = {
  proAzul:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  urbanoVermelho:
    "https://images.unsplash.com/photo-1712168332222-c1996322f935?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  pulseNoir:
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
  corridaRua:
    "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  lifestyleStreet:
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const avatarImages = {
  camila:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
  julia:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  rafael:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  mateus:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
};

export const headerLogo = {
  src: "/logo.png",
  alt: "Logotipo da Passo Brasil",
  name: "Passo Brasil",
};

export const landingNavItems = [
  { label: "Destaques", href: "#destaques" },
  { label: "Coleção", href: "#colecao" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Eventos", href: "#eventos" },
];

export const heroFeatures = [
  {
    title: "Entrega nacional em 48h",
    text: "Capitais e regiões metropolitanas com rastreio em tempo real.",
    icon: <MapPinIcon size={28} weight="fill" className="text-primary-600" />,
  },
  {
    title: "Tecnologia AeroGel",
    text: "Amortecimento inteligente para caminhar o dia inteiro.",
    icon: (
      <LightningIcon size={28} weight="fill" className="text-primary-600" />
    ),
  },
  {
    title: "Garantia oficial",
    text: "12 meses de suporte com assistência técnica no Brasil.",
    icon: <StarIcon size={28} weight="fill" className="text-primary-600" />,
  },
];

export const brandLogos: BrandLogo[] = [
  { src: "/brands/bytefleet.svg", alt: "Logo Bytefleet" },
  { src: "/brands/nuvemix.svg", alt: "Logo Nuvemix" },
  { src: "/brands/orbita.svg", alt: "Logo Orbita" },
  { src: "/brands/pulsar.svg", alt: "Logo Pulsar" },
  { src: "/brands/stackly.svg", alt: "Logo Stackly" },
];

export const featuredProducts = [
  {
    title: "Pro Azul 01",
    price: 589.9,
    rating: 5,
    imageUrl: sneakerImages.proAzul,
    dealEndsWithIn: "2026-03-31T23:59:59.000Z",
  },
  {
    title: "Urbano Fogo",
    price: 449.9,
    rating: 4,
    imageUrl: sneakerImages.urbanoVermelho,
  },
  {
    title: "Pulse Rua",
    price: 519.9,
    rating: 5,
    imageUrl: sneakerImages.pulseNoir,
    dealEndsWithIn: "2026-03-31T23:59:59.000Z",
  },
];

export const communityBenefits = [
  "Acesso antecipado a lançamentos brasileiros exclusivos.",
  "Equipe de especialistas para ajustar tamanho e desempenho ideal.",
  "Eventos presenciais com experiências imersivas na cultura do tênis.",
];

export const testimonials = [
  {
    avatarUrl: avatarImages.camila,
    userName: "Camila Rocha",
    userRole: "Diretora criativa",
    rating: 5,
    testimonial:
      "O Pro Azul virou meu tênis diário. Leve, estiloso e aguenta o corre da cidade.",
  },
  {
    avatarUrl: avatarImages.rafael,
    userName: "Rafael Lima",
    userRole: "Corredor urbano",
    rating: 5,
    testimonial:
      "A pisada ficou muito mais estável. Dá para correr leve e ainda chegar bem no trabalho.",
  },
  {
    avatarUrl: avatarImages.julia,
    userName: "Júlia Santos",
    userRole: "Colecionadora",
    rating: 4,
    testimonial:
      "Os detalhes do acabamento são incríveis. Já garanti a edição limitada da coleção.",
  },
  {
    avatarUrl: avatarImages.mateus,
    userName: "Mateus Alves",
    userRole: "Criador de conteúdo",
    rating: 5,
    testimonial:
      "Conforto absurdo e um visual que rende fotos lindas. Recomendo demais.",
  },
];

export const galleryImages = [
  { src: sneakerImages.proAzul, alt: "Tênis Pro Azul 01 em destaque" },
  { src: sneakerImages.urbanoVermelho, alt: "Tênis Urbano Fogo em vitrine" },
  { src: sneakerImages.pulseNoir, alt: "Tênis Pulse Rua em close" },
  { src: sneakerImages.corridaRua, alt: "Tênis em ação na corrida urbana" },
];

export const categoryItems = [
  {
    name: "Desempenho",
    href: "#colecao",
    icon: <RocketLaunchIcon size={28} className="text-primary-600" />,
  },
  {
    name: "Urbano",
    href: "#colecao",
    icon: <TagIcon size={28} className="text-primary-600" />,
  },
  {
    name: "Limitados",
    href: "#colecao",
    icon: <StarIcon size={28} className="text-primary-600" />,
  },
  {
    name: "Clássicos",
    href: "#colecao",
    icon: <FlagCheckeredIcon size={28} className="text-primary-600" />,
  },
];

export const stats = [
  {
    preTitle: "Mais de",
    value: 11658467,
    title: "pares vendidos em todo o Brasil",
    icon: <UsersThreeIcon size={28} className="text-primary-200" />,
  },
  {
    preTitle: "Em 2025",
    value: 328000,
    title: "clientes cadastrados na comunidade",
    icon: <StarIcon size={28} className="text-primary-200" />,
  },
  {
    preTitle: "Em 48h",
    value: 92000,
    title: "entregas expressas nas capitais",
    icon: <LightningIcon size={28} className="text-primary-200" />,
  },
];

export const articleCards = [
  {
    imgUrl: sneakerImages.lifestyleStreet,
    title: "Como cuidar do seu tênis premium",
    description:
      "Guia prático com limpeza, armazenamento e conservação para durar anos.",
  },
  {
    imgUrl: sneakerImages.corridaRua,
    title: "A evolução do amortecimento brasileiro",
    description:
      "Entenda por que o AeroGel virou referência para o dia a dia urbano.",
  },
  {
    imgUrl: sneakerImages.proAzul,
    title: "Pro Azul 01: por dentro do design",
    description:
      "Detalhes de materiais, costuras e o equilíbrio perfeito entre estilo e leveza.",
  },
  {
    imgUrl: sneakerImages.pulseNoir,
    title: "Tendências da cultura do tênis 2026",
    description:
      "As cores e texturas que vão dominar as ruas brasileiras nos próximos meses.",
  },
];

export const eventCards = [
  {
    imgUrl: sneakerImages.urbanoVermelho,
    title: "Turnê Passo Brasil — São Paulo",
    description: "Experimente os lançamentos e personalize seu par ao vivo.",
  },
  {
    imgUrl: sneakerImages.corridaRua,
    title: "Corrida Urbana Pro Azul",
    description: "Treino coletivo com especialistas em desempenho e pisada.",
  },
  {
    imgUrl: sneakerImages.lifestyleStreet,
    title: "Oficina de customização",
    description:
      "Aprenda técnicas de pintura e acabamento com artistas locais.",
  },
  {
    imgUrl: sneakerImages.proAzul,
    title: "Encontro de colecionadores",
    description: "Troca de pares raros e conexões com a comunidade.",
  },
];

export const footerColumns = [
  {
    title: "Produtos",
    items: [
      { label: "Pro Azul 01", href: "#colecao" },
      { label: "Linha Urbana", href: "#colecao" },
      { label: "Linha Desempenho", href: "#colecao" },
      { label: "Coleções limitadas", href: "#colecao" },
    ],
  },
  {
    title: "Suporte",
    items: [
      { label: "Central de ajuda", href: "#" },
      { label: "Trocas e devoluções", href: "#" },
      { label: "Garantia e reparos", href: "#" },
      { label: "Rastreio de pedido", href: "#" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Nossa história", href: "#" },
      { label: "Lojas físicas", href: "#" },
      { label: "Programa de afiliados", href: "#" },
      { label: "Trabalhe conosco", href: "#" },
    ],
  },
  {
    title: "Contato",
    items: [
      { label: "(11) 4000-0000" },
      { label: "Atendimento 7h às 22h" },
      { label: "contato@passobrasil.com.br" },
      { label: "São Paulo • Rio • Recife" },
    ],
  },
];

export const socialLinks = [
  { iconName: "instagram" as const, href: "#" },
  { iconName: "tiktok" as const, href: "#" },
  { iconName: "youtube" as const, href: "#" },
  { iconName: "facebook" as const, href: "#" },
];
