import React from "react";
import { Search, MessageCircle, Sparkles, Gift } from "lucide-react";

type Step = {
    number: string;
    icon: React.ElementType;
    title: string;
    description: string;
};

const steps: Step[] = [
    {
        number: "01",
        icon: Search,
        title: "Escolha o modelo ideal",
        description: "Navegue pelas nossas opções ou nos conte o que procura",
    },
    {
        number: "02",
        icon: MessageCircle,
        title: "Informe tamanho e data",
        description: "Nos conte os detalhes para garantir o vestido perfeito",
    },
    {
        number: "03",
        icon: Sparkles,
        title: "Atendimento personalizado",
        description: "Conversamos sobre ajustes e preparamos tudo com carinho",
    },
    {
        number: "04",
        icon: Gift,
        title: "Retirada do vestido",
        description: "Vestido pronto para fazer o dia dela ainda mais especial",
    },
];

export function StepsSection() {
    return (
        <section
            id="como-funciona"
            className="py-24 bg-linear-to-b from-rose-50/80 to-white"
            aria-labelledby="steps-title"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-xs font-semibold tracking-[0.25em] text-tertiary uppercase">
                        Como Funciona
                    </span>

                    <h2
                        id="steps-title"
                        className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground"
                    >
                        Simples como um{" "}
                        <span className="bg-linear-to-r from-text-gradient-start to-text-gradient-end bg-clip-text text-transparent italic font-bold">
                            sonho
                        </span>
                    </h2>

                    <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Em poucos passos, sua pequena estará pronta para brilhar.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                className="text-center"
                            >
                                {/* Icon with number */}
                                <div className="relative mx-auto mb-5 inline-flex">
                                    <div
                                        className="
                      grid h-20 w-20 place-items-center rounded-3xl
                      bg-white shadow-sm ring-1 ring-inset ring-rose-100
                      transition-transform duration-300 hover:-translate-y-1
                    "
                                    >
                                        <Icon className="h-8 w-8 text-tertiary" aria-hidden="true" />
                                    </div>

                                    <span
                                        className="
                      absolute -right-3 -top-3
                      rounded-full bg-tertiary px-2.5 py-1
                      text-xs font-semibold text-white
                      shadow-sm
                    "
                                        aria-label={`Passo ${step.number}`}
                                    >
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="font-inter font-medium leading-tight">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
