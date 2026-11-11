"use client";

import Link from "next/link";
import { useId, useState } from "react";
import type { ComponentType } from "react";
import { BoxIcon, ChevronDownIcon, ClockIcon, TrendIcon, TruckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { formatAmount, plural } from "@/lib/format";
import { overview, salesByPeriod, type Period } from "@/lib/mock-data";
import { routes } from "@/lib/site-config";

const periods: { value: Period; short: string; long: string }[] = [
  { value: "jour", short: "Jour", long: "Aujourd'hui" },
  { value: "semaine", short: "Semaine", long: "Cette semaine" },
  { value: "mois", short: "Mois", long: "Ce mois" },
];

interface Stat {
  label: string;
  value: string;
  detail: string;
  href: string;
  tint: string;
  iconColor: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

/** Aperçu chiffré de l'activité, filtrable par période. */
export function Overview() {
  const [period, setPeriod] = useState<Period>("jour");
  const titleId = useId();
  const selectId = useId();
  const sales = salesByPeriod[period];

  const stats: Stat[] = [
    {
      label: "Ventes",
      value: formatAmount(sales.amount),
      detail: `FCFA · ${plural(sales.orders, "commande")}`,
      href: routes.accounting,
      tint: "bg-tint-violet",
      iconColor: "text-link",
      icon: TrendIcon,
    },
    {
      label: "À encaisser",
      value: formatAmount(overview.receivable.amount),
      detail: `FCFA · ${plural(overview.receivable.invoices, "facture")}`,
      href: routes.accounting,
      tint: "bg-tint-orange",
      iconColor: "text-warning",
      icon: ClockIcon,
    },
    {
      label: "En livraison",
      value: String(overview.deliveriesInProgress),
      detail: overview.deliveriesInProgress > 1 ? "courses en cours" : "course en cours",
      href: routes.orders,
      tint: "bg-tint-blue",
      iconColor: "text-info",
      icon: TruckIcon,
    },
    {
      label: "Stock bas",
      value: String(overview.lowStockCount),
      detail: overview.lowStockCount > 1 ? "produits à recharger" : "produit à recharger",
      href: routes.stock,
      tint: "bg-tint-green",
      iconColor: "text-success",
      icon: BoxIcon,
    },
  ];

  return (
    <section aria-labelledby={titleId} className="flex flex-col gap-3.5 md:gap-4">
      <div className="flex items-center justify-between gap-4">
        <h2 id={titleId} className="text-lg font-semibold tracking-tight">
          Aperçu
        </h2>

        {/* Mobile : liste native, la plus fiable au toucher et au lecteur d'écran. */}
        <div className="relative md:hidden">
          <label htmlFor={selectId} className="sr-only">
            Période affichée
          </label>
          <select
            id={selectId}
            value={period}
            onChange={(event) => setPeriod(event.target.value as Period)}
            className="min-h-9 appearance-none rounded-full bg-surface py-1.5 pr-9 pl-3.5 text-sm font-medium text-fg"
          >
            {periods.map(({ value, long }) => (
              <option key={value} value={value}>
                {long}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            size={16}
            className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
          />
        </div>

        {/* Tablette et bureau : sélecteur segmenté, état porté par aria-pressed. */}
        <div
          role="group"
          aria-label="Période affichée"
          className="hidden gap-0.5 rounded-2xl bg-fg/6 p-1 md:flex"
        >
          {periods.map(({ value, short }) => {
            const selected = value === period;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={selected}
                onClick={() => setPeriod(value)}
                className={cn(
                  "min-h-9 rounded-xl px-4 text-sm transition-colors",
                  selected
                    ? "bg-surface font-semibold text-fg shadow-control"
                    : "font-medium text-fg-subtle hover:text-fg",
                )}
              >
                {short}
              </button>
            );
          })}
        </div>
      </div>

      <ul role="list" className="grid grid-cols-2 gap-2.5 md:gap-3.5 xl:grid-cols-4">
        {stats.map(({ label, value, detail, href, tint, iconColor, icon: StatIcon }) => (
          <li key={label} className="flex">
            <Link
              href={href}
              className={cn(
                "flex min-w-0 flex-1 flex-col gap-6 rounded-3xl p-4 transition-shadow hover:shadow-control md:gap-8 md:p-5",
                tint,
              )}
            >
              <span className="flex items-center justify-between gap-2 text-sm font-medium text-fg-muted">
                {label}
                <StatIcon size={16} className={cn("shrink-0", iconColor)} />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-2xl leading-none font-semibold tracking-tight md:text-3xl">
                  {value}
                </span>
                <span className="text-xs font-medium text-fg-subtle">{detail}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
