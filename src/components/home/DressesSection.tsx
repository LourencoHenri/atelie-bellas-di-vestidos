import {
    Crown,
    Heart,
    GraduationCap,
    PartyPopper,
    Church,
} from "lucide-react";
import { CategoryCard } from "../ui/CategoryCard";

const categories = [
    {
        title: "Daminhas de Honra",
        description:
            "Vestidos encantadores para o grande dia. Sua pequena será a estrela da cerimônia.",
        image: "/dresses/daminha.png",
        href: "/catalogo?categoria=casamento",
        icon: <Crown className="w-6 h-6 text-tertiary" />,
    },
    {
        title: "Casamentos",
        description:
            "Looks elegantes e delicados para convidadas especiais celebrarem o amor.",
        image: "/dresses/casamento.png",
        href: "/catalogo?categoria=casamento",
        icon: <Heart className="w-6 h-6 text-tertiary" />,
    },
    {
        title: "Formaturas",
        description: "Vestidos sofisticados para marcar essa conquista tão importante.",
        image: "/dresses/formatura.png",
        href: "/catalogo?categoria=formatura",
        icon: <GraduationCap className="w-6 h-6 text-tertiary" />,
    },
    {
        title: "Datas Especiais",
        description:
            "Aniversários, batizados e comemorações merecem looks inesquecíveis.",
        image: "/dresses/batizado.png",
        href: "/catalogo?categoria=batizado",
        icon: <PartyPopper className="w-6 h-6 text-tertiary" />,
    },
    {
        title: "Eventos Sociais",
        description: "Festas e reuniões pedem vestidos que encantam e impressionam.",
        image: "/dresses/festas.png",
        href: "/catalogo?categoria=festa",
        icon: <Church className="w-6 h-6 text-tertiary" />,
    },
];

export function DressesSection() {
    return (
        <section
            id="vestidos"
            className="py-24 bg-linear-to-b from-white to-rose-50/80"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 space-y-4 text-center">
                    <span className="text-xs font-semibold tracking-[0.25em] text-tertiary uppercase">
                        Nossos Vestidos
                    </span>

                    <h2 className="font-playfair text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
                        Para cada{" "}
                        <span className="bg-linear-to-r from-text-gradient-start to-text-gradient-end bg-clip-text text-transparent italic font-bold">
                            ocasião especial
                        </span>
                    </h2>

                    <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
                        Encontre o vestido perfeito para tornar o dia da sua pequena ainda mais
                        mágico.
                    </p>
                </div>

                {/* Primeira linha (3 cards) */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.slice(0, 3).map((category) => (
                        <CategoryCard key={category.title} {...category} />
                    ))}
                </div>

                {/* Segunda linha (2 cards centralizados) */}
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:px-32">
                    {categories.slice(3).map((category) => (
                        <CategoryCard key={category.title} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
}
