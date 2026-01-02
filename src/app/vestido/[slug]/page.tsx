// src/app/vestido/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, MessageCircle, Sparkles } from "lucide-react";


import { getVestidoBySlug, categorias } from "@/data/vestidos";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=";

function formatBRL(value: number) {
    return value.toFixed(2).replace(".", ",");
}

function getCategoriaLabel(categoriaId: string) {
    return categorias.find((c) => c.id === categoriaId)?.label ?? categoriaId;
}

export default async function VestidoDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const vestido = getVestidoBySlug(slug);
    if (!vestido) notFound();

    const categoriaLabel = getCategoriaLabel(vestido.categoria);

    const whatsappMessage = encodeURIComponent(
        `Olá! Gostaria de saber mais sobre o ${vestido.nome}. Pode me ajudar?`
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 bg-background-soft">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-26 pb-14">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:text-tertiary transition-colors">
                            Início
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/catalogo" className="hover:text-tertiary transition-colors">
                            Catálogo
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground font-medium truncate">{vestido.nome}</span>
                    </nav>

                    {/* Card */}
                    <section className="rounded-3xl bg-white/70 backdrop-blur border border-rose-100 shadow-sm overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            {/* Imagem */}
                            <div className="relative min-h-[420px] lg:min-h-[680px] bg-rose-50">
                                <Image
                                    src={vestido.imagem} // ✅ aqui é o caminho do public ("/dresses/...")
                                    alt={vestido.nome}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />

                                {/* Badge categoria */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-tertiary bg-white/90 rounded-full border border-rose-100 shadow-sm">
                                        <Sparkles className="w-4 h-4" />
                                        {categoriaLabel}
                                    </span>
                                </div>

                                {/* Badge tipo (aluguel/venda) */}
                                <div className="absolute top-4 right-4">
                                    <span className="px-4 py-2 text-xs font-semibold rounded-full border border-rose-100 bg-white/90 text-foreground">
                                        {vestido.tipo === "aluguel" ? "Aluguel" : "Venda"}
                                    </span>
                                </div>
                            </div>

                            {/* Conteúdo */}
                            <div className="p-6 sm:p-8 lg:p-10 space-y-7">
                                <div>
                                    <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground">
                                        {vestido.nome}
                                    </h1>
                                    <p className="text-muted-foreground mt-2">Cor: {vestido.cor}</p>
                                </div>

                                {/* Preços (com destaque no tipo escolhido) */}
                                <div className="rounded-2xl border border-rose-100 bg-white overflow-hidden">
                                    <div
                                        className={[
                                            "flex items-center justify-between px-5 py-4 border-b border-rose-100",
                                            vestido.tipo === "aluguel" ? "bg-rose-50/60" : "",
                                        ].join(" ")}
                                    >
                                        <span className="text-xs tracking-wide uppercase text-muted-foreground">
                                            Aluguel
                                        </span>
                                        <span className="text-2xl font-bold text-tertiary">
                                            R$ {formatBRL(vestido.precoAluguel)}
                                        </span>
                                    </div>

                                    <div
                                        className={[
                                            "flex items-center justify-between px-5 py-4",
                                            vestido.tipo === "venda" ? "bg-rose-50/60" : "",
                                        ].join(" ")}
                                    >
                                        <span className="text-xs tracking-wide uppercase text-muted-foreground">
                                            Venda
                                        </span>
                                        <span className="text-2xl font-bold text-foreground">
                                            R$ {formatBRL(vestido.precoVenda)}
                                        </span>
                                    </div>
                                </div>

                                {/* Sobre */}
                                <div className="space-y-3">
                                    <h3 className="font-playfair text-lg font-semibold text-foreground">
                                        Sobre o vestido
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {vestido.descricao}
                                    </p>
                                </div>

                                {/* Infos rápidas */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="rounded-2xl border border-rose-100 bg-white px-4 py-3">
                                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                            Tecido
                                        </p>
                                        <p className="text-sm font-semibold text-foreground mt-1">
                                            {vestido.tecido}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-rose-100 bg-white px-4 py-3">
                                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                            Tamanhos
                                        </p>
                                        <p className="text-sm font-semibold text-foreground mt-1">
                                            {(vestido.tamanhos?.length ? vestido.tamanhos.join(", ") : "Sob consulta")}
                                        </p>
                                    </div>
                                </div>

                                {/* Detalhes */}
                                <div className="rounded-2xl border border-rose-100 bg-white px-4 py-4">
                                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                        Detalhes
                                    </p>
                                    <p className="text-sm text-foreground/90 mt-2">{vestido.detalhes}</p>
                                </div>

                                {/* CTA */}
                                <a
                                    href={`${WHATSAPP_LINK}${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <button
                                        // className={cn(buttonVariants({ variant, size, className }))}
                                        className="
                inline-flex items-center gap-2 bg-tertiary text-primary-foreground px-8 py-4 rounded-full
                bg-tertiary text-primary-foreground hover:bg-primary/90
                h-10 px-4 py-2
                w-full justify-center py-4 text-base
                text-white
                "
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Falar sobre este vestido

                                    </button>
                                    {/* <Button className="btn-whatsapp w-full justify-center py-4 text-base">
                                    </Button> */}
                                </a>

                                <div className="pt-1">
                                    <Link href="/catalogo" className="text-sm text-tertiary hover:underline">
                                        Voltar ao catálogo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
