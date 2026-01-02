import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

interface CategoryCardProps {
    title: string;
    description: string;
    image: string | StaticImageData; // ✅ agora aceita "/dresses/xxx.png"
    href: string;
    icon: ReactNode;
}

export function CategoryCard({
    title,
    description,
    image,
    href,
    icon,
}: CategoryCardProps) {
    return (
        <Link
            href={href}
            className="
        group relative block overflow-hidden rounded-2xl
        bg-white shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
      "
        >
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "center -32px" }} // ✅ sobe 32px
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-3 p-6">
                {/* Icon */}
                <div
                    className="
            inline-flex h-12 w-12 items-center justify-center
            rounded-xl bg-rose-100 text-tertiary
          "
                >
                    {icon}
                </div>

                {/* Title */}
                <h3 className="font-inter font-medium leading-tight">{title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>

                {/* CTA */}
                <span
                    className="
            mt-2 inline-flex items-center gap-1 text-sm font-medium
            text-tertiary transition-all
            group-hover:gap-2
          "
                >
                    Ver modelos
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
            </div>

            {/* Border highlight on hover */}
            <span
                className="
          pointer-events-none absolute inset-0 rounded-2xl
          ring-1 ring-inset ring-transparent
          transition group-hover:ring-tertiary/40
        "
            />
        </Link>
    );
}
