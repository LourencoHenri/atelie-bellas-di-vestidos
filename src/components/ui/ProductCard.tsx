import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import type { Vestido } from "@/data/vestidos";

const categoryColors: Record<string, { bg: string; text: string }> = {
    batizado: { bg: "bg-blue-100", text: "text-blue-700" },
    festa: { bg: "bg-pink-100", text: "text-pink-700" },
    casamento: { bg: "bg-amber-100", text: "text-amber-700" },
    formatura: { bg: "bg-purple-100", text: "text-purple-700" },
};

const categoryLabels: Record<string, string> = {
    batizado: "Batizado",
    festa: "Festa",
    casamento: "Casamento",
    formatura: "Formatura",
};

function formatBRL(value: number) {
    return value.toFixed(2).replace(".", ",");
}


export function ProductCard({ vestido }: { vestido: Vestido }) {
    const colors =
        categoryColors[vestido.categoria] ?? { bg: "bg-rose-100", text: "text-tertiary" };


    return (
        <Link
            href={`/vestido/${vestido.slug}`}
            className="group block bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
            {/* Image */}
            <div className="relative aspect-3/4 overflow-hidden">
                <Image
                    src={vestido.imagem}
                    alt={vestido.nome}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "center -32px" }} // ✅ sobe 32px
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 via-black/0 to-transparent" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text}`}
                    >
                        {categoryLabels[vestido.categoria] ?? vestido.categoria}
                    </span>

                    {vestido.destaque && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-tertiary text-white flex items-center gap-1 shadow-sm">
                            <Sparkles className="w-3 h-3" />
                            Destaque
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <div>
                    <h3 className="font-inter font-medium leading-tight text-foreground group-hover:text-tertiary transition-colors">
                        {vestido.nome}
                    </h3>
                    <p className="text-sm ">{vestido.cor}</p>
                </div>

                {/* Prices */}
                <div className="space-y-1 pt-2 border-t border-rose-100">
                    <div className="flex justify-between items-center text-sm">
                        <span className="">ALUGUEL</span>
                        <span className="font-semibold text-tertiary">
                            R$ {formatBRL(vestido.precoAluguel)}
                        </span>
                    </div>

                    {typeof vestido.precoVenda === "number" && (
                        <div className="flex justify-between items-center text-sm">
                            <span className="">COMPRA</span>
                            <span className="font-semibold text-foreground">
                                R$ {formatBRL(vestido.precoVenda)}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
