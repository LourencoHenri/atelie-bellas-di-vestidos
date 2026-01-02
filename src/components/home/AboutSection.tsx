import React from "react";
import { Heart, Star, Sparkles, Crown } from "lucide-react";

type Feature = {
    icon: React.ElementType;
    title: string;
    description: string;
};

const features: Feature[] = [
    {
        icon: Heart,
        title: "Feito com amor",
        description: "Cada vestido carrega o carinho e dedicação de mãos artesãs",
    },
    {
        icon: Star,
        title: "Detalhes únicos",
        description: "Bordados, rendas e acabamentos que fazem a diferença",
    },
    {
        icon: Sparkles,
        title: "Momentos especiais",
        description: "Vestidos pensados para criar memórias inesquecíveis",
    },
    {
        icon: Crown,
        title: "Exclusividade",
        description: "Peças selecionadas para ocasiões verdadeiramente especiais",
    },
];

export default function AboutSection() {
    return (
        <section
            id="sobre"
            className="relative overflow-hidden py-20 sm:py-24 "
            aria-labelledby="about-title"
        >
            {/* Decorative blur */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/20 blur-3xl"
            />

            <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left */}
                    <div className="space-y-6">
                        <p className="text-xs font-semibold tracking-[0.22em] text-tertiary uppercase">
                            Sobre o Ateliê
                        </p>

                        <h2
                            id="about-title"
                            className="text-3xl font-semibold sm:text-4xl lg:text-5xl"
                        >
                            Um sonho vestido de{" "}
                            <span className="bg-linear-to-r from-text-gradient-start to-text-gradient-end bg-clip-text text-transparent italic font-bold">
                                delicadeza
                            </span>
                        </h2>

                        <div className="space-y-4 leading-relaxed">
                            <p>
                                No Ateliê Wanessa Lourenço, acreditamos que cada menina merece se
                                sentir como uma princesa em seus momentos mais especiais.
                            </p>
                            <p>
                                Com cuidado artesanal e atenção a cada detalhe, criamos e
                                selecionamos vestidos que transformam ocasiões em memórias
                                eternas. Desde daminhas de casamento até formaturas, cada peça é
                                pensada para encantar.
                            </p>
                        </div>

                        <p className="inline-flex items-center gap-2 font-medium text-tertiary">
                            Porque os pequenos detalhes fazem toda a diferença.
                            <Heart className="h-4 w-4 fill-tertiary" />
                        </p>
                    </div>

                    {/* Right */}
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="group rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-tertiary transition group-hover:bg-rose-200">
                                        <Icon className="h-6 w-6" aria-hidden="true" />
                                    </div>

                                    <h3 className="font-inter font-medium leading-tight">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
