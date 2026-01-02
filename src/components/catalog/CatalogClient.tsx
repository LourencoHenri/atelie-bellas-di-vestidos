"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Filter, Sparkles } from "lucide-react";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

const tipoOptions = [
    { value: "todos", label: "Aluguel e Venda" },
    { value: "aluguel", label: "Aluguel" },
    { value: "venda", label: "Venda" },
];

const ordenacaoOptions = [
    { value: "recentes", label: "Mais Recentes" },
    { value: "preco-menor", label: "Menor Preço" },
    { value: "preco-maior", label: "Maior Preço" },
];

function buildQuery(params: {
    categoria: string;
    tipo: string;
    ordenacao: string;
}) {
    const sp = new URLSearchParams();

    if (params.categoria && params.categoria !== "todas")
        sp.set("categoria", params.categoria);

    if (params.tipo && params.tipo !== "todos") sp.set("tipo", params.tipo);

    if (params.ordenacao && params.ordenacao !== "recentes")
        sp.set("ordenacao", params.ordenacao);

    const qs = sp.toString();
    return qs ? `?${qs}` : "";
}

export default function CatalogoClient({
    initialCategoria,
    initialTipo,
    initialOrdenacao,
}: {
    initialCategoria: string;
    initialTipo: string;
    initialOrdenacao: string;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [categoria, setCategoria] = useState(initialCategoria);
    const [tipo, setTipo] = useState(initialTipo);
    const [ordenacao, setOrdenacao] = useState(initialOrdenacao);

    // Se o usuário abrir URL com params diferentes (ex: colou link), sincroniza estado
    useEffect(() => {
        setCategoria(searchParams.get("categoria") ?? "todas");
        setTipo(searchParams.get("tipo") ?? "todos");
        setOrdenacao(searchParams.get("ordenacao") ?? "recentes");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    const applyFilters = (next: {
        categoria?: string;
        tipo?: string;
        ordenacao?: string;
    }) => {
        const merged = {
            categoria: next.categoria ?? categoria,
            tipo: next.tipo ?? tipo,
            ordenacao: next.ordenacao ?? ordenacao,
        };

        // Atualiza estado (UI)
        if (next.categoria !== undefined) setCategoria(next.categoria);
        if (next.tipo !== undefined) setTipo(next.tipo);
        if (next.ordenacao !== undefined) setOrdenacao(next.ordenacao);

        // Atualiza URL baseado no pathname atual (evita 404 por basePath/locale/grupos/etc.)
        router.push(`${pathname}${buildQuery(merged)}`, { scroll: false });
    };

    return (
        <div className="mx-auto max-w-7xl mt-18 sm:mt-20">
            <Header />

            {/* Hero */}
            <section className="py-16 text-center space-y-4">
                <div className="mx-auto inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose-100">
                    <Sparkles className="w-7 h-7 text-tertiary" />
                </div>

                <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                    Nosso{" "}
                    <span className="bg-linear-to-r from-tertiary to-quaternary bg-clip-text text-transparent italic">
                        Catálogo
                    </span>
                </h1>

                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    Encontre o vestido perfeito para tornar o dia da sua pequena ainda mais
                    especial.
                </p>
            </section>

            {/* Filters */}
            <section className="py-6 mb-6 rounded-3xl bg-white/70 backdrop-blur border border-rose-100 shadow-sm mx-4 sm:mx-6 lg:mx-8">
                <div className="px-4 sm:px-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Filter className="w-4 h-4" />
                            <span>Filtros</span>
                            <span className="text-tertiary font-semibold">
                                vestidos
                            </span>
                        </div>

                        <div className="flex-1" />

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
                            {/* Categoria */}
                            <div className="text-sm">
                                <span className="sr-only">Categoria</span>

                            </div>

                            {/* Tipo */}
                            <div className="text-sm">
                                <span className="sr-only">Tipo</span>

                            </div>

                            {/* Ordenação */}
                            <div className="text-sm">
                                <span className="sr-only">Ordenação</span>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-6 px-4 sm:px-6 lg:px-8">

            </section>

            <Footer />
        </div>
    );
}
