"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5513991475213";

const WHATSAPP_MESSAGE = `Olá! 💕

Gostaria de saber mais sobre os vestidos do Ateliê Wanessa Lourenço.

✨ Vestido de interesse: (ainda não escolhi)
📏 Tamanho: (a definir)
📅 Data do evento: (a definir)

Aguardo retorno! 🌸`;

function buildWhatsAppLink() {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
    )}`;
}

export default function CTASection() {
    const whatsappHref = buildWhatsAppLink();

    return (
        <section className="relative overflow-hidden py-24">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-[#E1659F] via-[#d4548f] to-[#c44a85]" />

            {/* Decorative orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.08, 1] }}
                    transition={{
                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                        scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-2xl"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
                    transition={{
                        rotate: { duration: 26, repeat: Infinity, ease: "linear" },
                        scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-2xl"
                />

                {/* Floating hearts */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.18, 0.45, 0.18],
                            y: [-18, 18, -18],
                            x: [0, 10, 0],
                        }}
                        transition={{
                            duration: 4 + i * 0.35,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut",
                        }}
                        className="absolute text-white/20"
                        style={{
                            top: `${10 + ((i * 11) % 80)}%`,
                            left: `${6 + ((i * 13) % 88)}%`,
                        }}
                    >
                        <Heart className="h-6 w-6" fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Icon badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                    >
                        <Sparkles className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <motion.h4
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
                    >

                        Vamos escolher juntas o{" "}
                        <span className="relative inline-block">
                            vestido perfeito
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.35 }}
                                className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-white/50"
                            />
                        </span>
                        ?
                    </motion.h4>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/90 leading-relaxed"
                    >
                        Estou aqui para ajudar você a encontrar o vestido dos sonhos para a
                        sua pequena. Vamos conversar? 💕
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-10"
                    >
                        <motion.a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="
                inline-flex items-center justify-center gap-3
                rounded-full bg-white px-8 py-4
                text-[#E1659F] font-semibold text-base sm:text-lg
                shadow-2xl transition
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]
                focus:outline-none focus:ring-2 focus:ring-white/60
              "
                        >
                            <MessageCircle className="h-6 w-6" />
                            Entrar em contato pelo WhatsApp
                        </motion.a>
                    </motion.div>

                    {/* Trust note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="mt-8 text-sm text-white/75"
                    >
                        Atendimento rápido e personalizado ✨
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
