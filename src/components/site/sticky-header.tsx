"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * En-tête collant qui se compacte au défilement.
 *
 * Une sentinelle de 8px placée au-dessus du header est observée par un
 * IntersectionObserver : dès qu'elle sort du viewport, le header passe en état
 * `data-scrolled` (fond translucide flouté, filet bas, bandeau compact). Pas
 * d'écouteur `scroll`, donc aucun calcul à chaque frame. Les transitions sont
 * neutralisées globalement si l'utilisateur réduit les animations (WCAG 2.3.3).
 *
 * La hauteur en flux reste constante (84px) pour ne pas décaler la page : en
 * état compact le header glisse de 16px au-dessus du viewport (`top: -1rem`)
 * et le padding est rééquilibré (28px / 12px) pour garder le contenu centré
 * dans les 68px visibles. Cette hauteur visible est reprise par
 * `scroll-padding-top` dans globals.css : les ancres ne passent pas sous le
 * header (WCAG 2.4.11).
 */
export function StickyHeader({ children, className }: { children: ReactNode; className?: string }) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="pointer-events-none -mb-2 h-2" />
      <header
        data-scrolled={scrolled || undefined}
        className={cn(
          "sticky top-0 z-40 border-b border-transparent py-5 transition-[top,padding,background-color,border-color] duration-300",
          "data-scrolled:-top-4 data-scrolled:border-line data-scrolled:bg-canvas/92 data-scrolled:pt-7 data-scrolled:pb-3 data-scrolled:backdrop-blur-xl",
          className,
        )}
      >
        {children}
      </header>
    </>
  );
}
