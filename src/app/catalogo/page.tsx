import CatalogoClient from "@/components/catalog/CatalogClient";

type SearchParams = Record<string, string | string[] | undefined>;

function pick(sp: SearchParams, key: string) {
    const v = sp[key];
    return Array.isArray(v) ? v[0] : v;
}

export default async function CatalogoPage({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const sp = await searchParams;

    const initialCategoria = pick(sp, "categoria") ?? "todas";
    const initialTipo = pick(sp, "tipo") ?? "todos";
    const initialOrdenacao = pick(sp, "ordenacao") ?? "recentes";

    return (
        <CatalogoClient
            initialCategoria={initialCategoria}
            initialTipo={initialTipo}
            initialOrdenacao={initialOrdenacao}
        />
    );
}