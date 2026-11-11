import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Étiquette de catégorie en capitales, cerclée.
 * `className` remplace l'alignement et la couleur de contour par défaut.
 */
export function Tag({
  children,
  className = "self-start border-current/30",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full border px-3 text-xs font-bold uppercase tracking-wider",
        className,
      )}
    >
      {children}
    </span>
  );
}
