import { cn } from "@/lib/cn";
import type { OrderStatus } from "@/lib/mock-data";

const statuses: Record<OrderStatus, { label: string; text: string; dot: string; pill: string }> = {
  "a-valider": {
    label: "À valider",
    text: "text-warning",
    dot: "bg-warning-dot",
    pill: "border-warning-line bg-warning-soft",
  },
  "en-livraison": {
    label: "En livraison",
    text: "text-info",
    dot: "bg-info-dot",
    pill: "border-info-line bg-info-soft",
  },
  livree: {
    label: "Livrée",
    text: "text-success",
    dot: "bg-success-dot",
    pill: "border-success-line bg-success-soft",
  },
};

/**
 * Statut d'une commande. L'état est toujours écrit en toutes lettres : la
 * couleur ne fait que le renforcer (WCAG 1.4.1 Utilisation de la couleur).
 */
export function StatusBadge({ status, pill = false }: { status: OrderStatus; pill?: boolean }) {
  const { label, text, dot, pill: pillClass } = statuses[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold",
        text,
        pill && cn("min-h-7 rounded-full border px-2.5", pillClass),
      )}
    >
      <span aria-hidden="true" className={cn("size-1.5 rounded-full", dot)} />
      {label}
    </span>
  );
}
