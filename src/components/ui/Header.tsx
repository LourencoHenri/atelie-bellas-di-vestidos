"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";

const navigation = [
    { name: "Início", href: "/" },
    { name: "Catálogo", href: "/catalogo" },
    { name: "Contato", href: "/contato" },
];

const WHATSAPP_NUMBER = "5513991475213";
const WHATSAPP_TEXT =
    "Olá! Gostaria de informações sobre os vestidos do Ateliê Wanessa Lourenço.";

function buildWhatsAppLink() {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_TEXT
    )}`;
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const whatsappHref = useMemo(() => buildWhatsAppLink(), []);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname?.startsWith(href);
    };

    return (
        <header
            className={[
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/75 backdrop-blur-md border-b border-primary shadow-sm",
            ].join(" ")}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Altura consistente de header */}
                <div className="flex h-18 sm:h-20 items-center justify-between gap-3">
                    {/* Logo: tamanho apropriado e responsivo */}
                    <Link href="/" className="flex items-center gap-2 min-w-0">
                        <Image
                            src="/logo.png"
                            alt="Ateliê Wanessa Lourenço"
                            width={160}
                            height={48}
                            priority
                            sizes="(max-width: 640px) 120px, 160px"
                            className=" h-10 w-auto sm:h-20
                object-contain
                transition-transform duration-200
                hover:scale-[1.02]
              "
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={[
                                        "relative group px-4 py-2 text-sm font-medium transition-colors",
                                        active ? "text-tertiary" : "text-gray-600 hover:text-tertiary",
                                    ].join(" ")}
                                >
                                    {item.name}

                                    <span
                                        className={[
                                            "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-tertiary transition-all duration-300",
                                            active ? "w-3/4" : "w-0 group-hover:w-3/4",
                                        ].join(" ")}
                                    />
                                </Link>
                            );
                        })}
                    </div>

                    {/* WhatsApp + Mobile */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                hidden sm:inline-flex items-center gap-2
                rounded-full bg-tertiary px-4 md:px-5 py-2.5
                text-white text-sm font-medium
                shadow-md transition-all duration-300
                hover:bg-secondary hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-tertiary/40
              "
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span className="hidden md:inline">WhatsApp</span>
                        </a>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen((v) => !v)}
                            className={[
                                "lg:hidden inline-flex items-center justify-center rounded-xl p-2 transition-colors",
                                scrolled
                                    ? "text-gray-800 hover:text-tertiary hover:bg-[#FDF5F8]"
                                    : "text-gray-900 hover:text-tertiary hover:bg-white/30",
                            ].join(" ")}
                            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence initial={false}>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18 }}
                            className="lg:hidden pb-4"
                        >
                            {/* Fundo do menu pra não “sumir” quando header está transparente */}
                            <div className="rounded-2xl border border-[#F8C9DE]/40 bg-white/90 backdrop-blur-md shadow-sm overflow-hidden">
                                <div className="p-2">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={[
                                                "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                                                isActive(item.href)
                                                    ? "text-tertiary bg-[#FDF5F8]"
                                                    : "text-gray-800 hover:text-tertiary hover:bg-[#FDF5F8]",
                                            ].join(" ")}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}

                                    {/* CTA WhatsApp no mobile (sempre visível) */}
                                    <a
                                        href={whatsappHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      mt-2 flex items-center justify-center gap-2
                      rounded-xl bg-tertiary px-4 py-3
                      text-white text-sm font-medium
                      shadow-md transition hover:bg-secondary
                    "
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        Falar no WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Spacer opcional: se você não quiser colocar padding-top no page.tsx,
          você pode usar isso para evitar que o conteúdo “suba” por baixo do header.
          MAS normalmente é melhor colocar padding-top no main. */}
        </header>
    );
}
