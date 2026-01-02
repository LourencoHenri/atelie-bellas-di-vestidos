export type VestidoTipo = "aluguel" | "venda";

export type Vestido = {
    id: string;
    slug: string;
    nome: string;
    cor: string;
    categoria: "casamento" | "formatura" | "festa" | "batizado";
    tipo: VestidoTipo;
    destaque?: boolean;
    precoAluguel: number;
    precoVenda: number;
    imagem: string; // caminho do public, ex: "/dresses/vestido-1.jpg"
    descricao: string;
    tecido: string;
    detalhes: string;
    tamanhos?: string[];
};

export const categorias = [
    { id: "casamento", label: "Casamento / Daminhas" },
    { id: "formatura", label: "Formatura" },
    { id: "festa", label: "Festas / Datas especiais" },
    { id: "batizado", label: "Batizado" },
] as const;

export const vestidos: Vestido[] = [
    {
        id: "9",
        slug: "vestido-daminha-classico",
        nome: "Vestido Daminha Clássico",
        cor: "Off-white",
        categoria: "casamento",
        tipo: "aluguel",
        destaque: true,
        precoAluguel: 190,
        precoVenda: 560,
        imagem: "/dresses/daminha.png",
        descricao: "Modelo clássico para daminhas, com caimento leve e elegante.",
        tecido: "Algodão e Seda",
        detalhes: "Cinto com laço, saia rodada."
    },
    {
        id: "8",
        slug: "vestido-casamento-renda",
        nome: "Vestido Casamento Renda",
        cor: "Branco",
        categoria: "casamento",
        tipo: "venda",
        destaque: false,
        precoAluguel: 240,
        precoVenda: 720,
        imagem: "/dresses/casamento.png",
        descricao: "Detalhes em renda e acabamento delicado para ocasiões especiais.",
        tecido: "Algodão e Seda",
        detalhes: "Cinto com laço, saia rodada."
    },
    {
        id: "7",
        slug: "vestido-formatura-estrelas",
        nome: "Vestido Formatura Estrelas",
        cor: "Lavanda",
        categoria: "formatura",
        tipo: "venda",
        destaque: true,
        precoAluguel: 260,
        precoVenda: 790,
        imagem: "/dresses/formatura.png",
        descricao: "Brilho sutil e tecido leve para um look marcante e sofisticado.",
        tecido: "Algodão e Seda",
        detalhes: "Cinto com laço, saia rodada."
    },
    {
        id: "6",
        slug: "vestido-festa-laco",
        nome: "Vestido Festa Laço",
        cor: "Rosa Chiclete",
        categoria: "festa",
        tipo: "aluguel",
        destaque: false,
        precoAluguel: 170,
        precoVenda: 520,
        imagem: "/dresses/festas.png",
        descricao: "Ideal para aniversários, com laço e saia volumosa para fotos lindas.",
        tecido: "Algodão e Seda",
        detalhes: "Cinto com laço, saia rodada."
    },
    {
        id: "5",
        slug: "vestido-batizado-delicado",
        nome: "Vestido Batizado Delicado",
        cor: "Branco",
        categoria: "batizado",
        tipo: "aluguel",
        destaque: true,
        precoAluguel: 150,
        precoVenda: 430,
        imagem: "/dresses/batizado.png",
        descricao: "Delicado e confortável, perfeito para cerimônias e momentos especiais.",
        tecido: "Algodão e Seda",
        detalhes: "Cinto com laço, saia rodada."
    },
];

export function getVestidoBySlug(slug: string): Vestido | undefined {
    return vestidos.find((v) => v.slug === slug);
}

export function getVestidosByCategoria(categoria: string): Vestido[] {
    if (categoria === "todas") return vestidos;
    return vestidos.filter((v) => v.categoria === categoria);
}