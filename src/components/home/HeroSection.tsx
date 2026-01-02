"use client";

import { MessageCircle, Sparkles, Heart, Scissors, Star, Crown } from "lucide-react";

const WHATSAPP_LINK =
    "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20vestidos.";

const benefits = [
    { icon: Sparkles, label: "Qualidade garantida" },
    { icon: Heart, label: "Atendimento personalizado" },
    { icon: Scissors, label: "Ajustes inclusos" },
];

export function HeroSection() {
    return (
        <section className="relative min-h-dvh overflow-hidden bg-linear-to-b from-background-pink via-white to-white border-b border-primary/20">
            {/* Decorative sparkles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {[
                    { top: "15%", left: "10%", delay: "0s" },
                    { top: "25%", right: "15%", delay: "0.5s" },
                    { top: "60%", left: "5%", delay: "1s" },
                    { top: "40%", right: "8%", delay: "1.5s" },
                    { bottom: "20%", left: "20%", delay: "2s" },
                    { bottom: "30%", right: "25%", delay: "0.3s" },
                ].map((pos, i) => (
                    <div
                        key={i}
                        className="absolute h-1.5 w-1.5 rotate-45 bg-pink-500/40"
                        style={{
                            ...pos,
                            boxShadow: "0 0 18px rgba(225, 101, 159, 0.35)",
                            animation: `sparkleFade 2.4s ease-in-out ${pos.delay} infinite`,
                        }}
                    />
                ))}

                {/* keyframes local (sem globals) */}
                <style jsx>{`
    @keyframes sparkleFade {
      0% {
        opacity: 0.15;
        transform: translate3d(0, 0, 0) scale(0.85);
      }
      50% {
        opacity: 0.85;
        transform: translate3d(0, -10px, 0) scale(1.2);
      }
      100% {
        opacity: 0.15;
        transform: translate3d(0, 0, 0) scale(0.85);
      }
    }
  `}</style>
            </div>

            {/* Gradient orbs */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-quaternary/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-quaternary/15 blur-3xl" />

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 flex min-h-dvh items-center">
                <div className="mx-auto w-full max-w-5xl px-4 py-20 text-center">

                    <div className="space-y-8">

                        {/* Heading */}
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
                            Vestidos encantadores para{" "}
                            <span className="bg-linear-to-r from-text-gradient-start to-text-gradient-end bg-clip-text text-transparent italic font-bold">
                                momentos inesquecíveis
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
                            Aluguel, primeiro aluguel e venda de vestidos infantis para ocasiões
                            especiais. Cada detalhe pensado para tornar o dia dela ainda mais mágico.
                        </p>

                        {/* CTA */}
                        <div className="flex justify-center">
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  inline-flex items-center gap-2
                  rounded-full bg-tertiary px-6 py-3
                  font-medium text-white
                  shadow-md transition hover:bg-secondary hover:shadow-lg
                "
                            >
                                <MessageCircle className="h-5 w-5" />
                                Falar no WhatsApp
                            </a>
                        </div>

                        {/* Benefits */}
                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            {benefits.map((benefit) => (
                                <div
                                    key={benefit.label}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                    <benefit.icon className="h-4 w-4 text-tertiary" />
                                    <span className="text-text-primary">{benefit.label}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}