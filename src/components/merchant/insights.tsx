import Link from "next/link";
import { ImageIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { formatAmount, formatFcfa, plural } from "@/lib/format";
import { lowStock, paymentBreakdown, weeklySales } from "@/lib/mock-data";
import { routes } from "@/lib/site-config";

const card = "rounded-3xl bg-surface px-4 md:px-6";

/** Produits sous leur seuil d'alerte. */
export function LowStock({ className }: { className?: string }) {
  return (
    <section aria-labelledby="stock-titre" className={cn(card, "pt-5 pb-1", className)}>
      <div className="mb-1 flex items-center justify-between gap-4">
        <h2 id="stock-titre" className="text-base font-semibold tracking-tight">
          Stock bas
        </h2>
        <Link
          href={routes.stock}
          className="-my-2 inline-flex min-h-11 items-center rounded-md text-sm font-semibold text-link hover:underline"
        >
          Gérer<span className="sr-only"> le stock</span>
        </Link>
      </div>
      <ul role="list" className="divide-y divide-line">
        {lowStock.map((product) => (
          <li key={product.id} className="flex items-center gap-3 py-3.5">
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-fg-subtle"
            >
              <ImageIcon size={16} />
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="text-sm font-semibold">{product.name}</span>
              <span className="text-xs text-fg-subtle">{formatFcfa(product.price)}</span>
            </span>
            <span className="text-xs font-semibold whitespace-nowrap text-warning">
              {plural(product.left, "restant")}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Ventes de la semaine, jour par jour. */
export function WeeklySales({ className }: { className?: string }) {
  const max = Math.max(...weeklySales.days.map((day) => day.amount));
  const summary = weeklySales.days
    .filter((day) => day.amount > 0)
    .map((day) => `${day.name}${day.current ? " (en cours)" : ""} ${formatFcfa(day.amount)}`)
    .join(", ");

  return (
    <section aria-labelledby="semaine-titre" className={cn(card, "flex-col gap-5 py-6", className)}>
      <div className="flex flex-col gap-1.5">
        <h2 id="semaine-titre" className="eyebrow text-fg-subtle">
          Ventes de la semaine
        </h2>
        <p className="text-3xl leading-none font-semibold tracking-tight">
          {formatAmount(weeklySales.total)}{" "}
          <span className="text-sm font-medium tracking-normal text-fg-subtle">FCFA</span>
        </p>
      </div>
      {/* Graphique : l'alternative textuelle reprend les valeurs (WCAG 1.1.1). */}
      <div
        role="img"
        aria-label={`Ventes par jour du lundi au dimanche : ${summary}.`}
        className="flex h-28 items-end gap-2.5"
      >
        {weeklySales.days.map((day) => (
          <div key={day.name} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <div
              className={cn(
                "w-full rounded-lg",
                day.amount === 0 && "rounded-sm bg-line",
                day.amount > 0 && (day.current ? "bg-fg" : "bg-tint-violet-strong"),
              )}
              style={{ height: day.amount > 0 ? `${Math.max((day.amount / max) * 100, 8)}%` : "0.25rem" }}
            />
            <span className={cn("text-xs", day.current ? "font-semibold text-fg" : "text-fg-subtle")}>
              {day.short}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Répartition des encaissements par moyen de paiement. */
export function PaymentBreakdown({ className }: { className?: string }) {
  const total = paymentBreakdown.reduce((sum, { amount }) => sum + amount, 0);

  return (
    <section aria-labelledby="moyens-titre" className={cn(card, "flex-col gap-4.5 py-6", className)}>
      <h2 id="moyens-titre" className="eyebrow text-fg-subtle">
        Encaissé par moyen
      </h2>
      <ul role="list" className="flex flex-col gap-4.5">
        {paymentBreakdown.map(({ method, amount }) => (
          <li key={method} className="flex flex-col gap-2">
            <span className="flex justify-between gap-3 text-sm">
              <span className="text-fg-muted">{method}</span>
              <span className="font-semibold">{formatFcfa(amount)}</span>
            </span>
            <span aria-hidden="true" className="h-1.5 rounded-full bg-fg/8">
              <span
                className="block h-full rounded-full bg-fg"
                style={{ width: `${Math.round((amount / total) * 100)}%` }}
              />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
