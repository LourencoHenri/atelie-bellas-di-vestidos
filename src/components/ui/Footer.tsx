"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";

const WHATSAPP_NUMBER = "5513991475213";
const WHATSAPP_TEXT =
    "Olá! Gostaria de informações sobre os vestidos do Ateliê Wanessa Lourenço.\n\n✨ Vestido de interesse: (a definir)\n📏 Tamanho: (a definir)\n📅 Data do evento: (a definir)";

function buildWhatsAppLink() {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_TEXT
    )}`;
}

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-linear-to-b from-[#FDF5F8] to-white py-16">
            {/* Top border */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F8C9DE] to-transparent" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="mb-8 flex flex-col gap-2 items-center"
                    >
                        <Image
                            src="/logo.png"
                            alt="Ateliê Wanessa Lourenço"
                            width={160}
                            height={48}
                            priority
                            sizes="(max-width: 640px) 120px, 160px"
                            className=" h-20 w-auto sm:h-30
                                        object-contain
                                        transition-transform duration-200
                                        hover:scale-[1.02]
                                      "
                        />
                        {/* <h3 className="font-playfair text-2xl sm:text-3xl text-[#E1659F] mb-2">
                            Ateliê Wanessa Lourenço
                        </h3> */}
                        {/* <p className="text-gray-500 text-sm w-1/4">
                            Vestidos encantadores para momentos inesquecíveis
                        </p> */}
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
                    >
                        <a
                            href={buildWhatsAppLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#E1659F] transition-colors"
                            aria-label="Entrar em contato pelo WhatsApp"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>WhatsApp</span>
                        </a>

                        <span
                            className="hidden sm:block h-1 w-1 rounded-full bg-[#F8C9DE]"
                            aria-hidden="true"
                        />

                        <div className="inline-flex items-center gap-2 text-gray-600">
                            <MapPin className="w-5 h-5" />
                            <span>Brasil</span>
                        </div>
                    </motion.div>

                    {/* Decorative divider */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, delay: 0.15 }}
                        className="mx-auto mb-8 h-px w-32 origin-center bg-linear-to-r from-transparent via-[#E1659F] to-transparent"
                    />

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.22 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <p className="text-gray-400 text-sm inline-flex items-center gap-1">
                            Feito com{" "}
                            <Heart className="w-4 h-4 text-[#E1659F]" fill="#E1659F" /> para
                            pequenas princesas
                        </p>
                        <p className="text-gray-400 text-xs">
                            © {year} Ateliê Wanessa Lourenço. Todos os direitos reservados.
                        </p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
