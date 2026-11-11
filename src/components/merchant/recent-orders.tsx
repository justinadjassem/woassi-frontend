import Link from "next/link";
import { StatusBadge } from "@/components/ui/status-badge";
import { formatFcfa, plural } from "@/lib/format";
import { orders } from "@/lib/mock-data";
import { routes } from "@/lib/site-config";

const headCell = "eyebrow py-3 text-fg-subtle";

function Initials({ children }: { children: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-muted text-xs font-semibold text-fg-muted"
    >
      {children}
    </span>
  );
}

/**
 * Dernières commandes : liste empilée jusqu'à la tablette, tableau de données
 * sur bureau. Aucun défilement horizontal à 320px (WCAG 1.4.10 Redistribution).
 */
export function RecentOrders() {
  return (
    <section
      aria-labelledby="commandes-titre"
      className="min-w-0 flex-3 basis-80 rounded-3xl bg-surface px-4 pt-5 pb-1 md:px-6 xl:basis-[30rem]"
    >
      <div className="mb-1 flex items-center justify-between gap-4">
        <h2 id="commandes-titre" className="text-base font-semibold tracking-tight">
          Dernières commandes
        </h2>
        <Link
          href={routes.orders}
          className="-my-2 inline-flex min-h-11 items-center rounded-md text-sm font-semibold text-link hover:underline"
        >
          Tout voir<span className="sr-only"> les commandes</span>
        </Link>
      </div>

      <ul role="list" className="divide-y divide-line xl:hidden">
        {orders.map((order) => (
          <li key={order.id}>
            <Link
              href={routes.orders}
              className="flex items-center gap-3 rounded-lg py-3.5 transition-colors hover:bg-surface-muted/60"
            >
              <Initials>{order.initials}</Initials>
              <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="text-sm font-semibold">{order.client}</span>
                <span className="text-xs text-fg-subtle">
                  {order.time} · {plural(order.itemCount, "article")} · {order.payment}
                </span>
              </span>
              <span className="flex flex-col items-end gap-1">
                <span className="text-sm font-semibold whitespace-nowrap">
                  {formatFcfa(order.amount)}
                </span>
                <StatusBadge status={order.status} />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <table className="hidden w-full border-collapse text-sm xl:table">
        <caption className="sr-only">
          Dernières commandes : client, heure, moyen de paiement, montant et statut
        </caption>
        <thead>
          <tr className="text-left">
            <th scope="col" className={headCell}>Client</th>
            <th scope="col" className={`${headCell} px-2`}>Heure</th>
            <th scope="col" className={`${headCell} px-2`}>Paiement</th>
            <th scope="col" className={`${headCell} px-2 text-right`}>Montant</th>
            <th scope="col" className={`${headCell} pl-2 text-right`}>Statut</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t border-line">
              <th scope="row" className="py-3.5 text-left font-normal">
                <Link href={routes.orders} className="flex items-center gap-3 rounded-lg">
                  <Initials>{order.initials}</Initials>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-semibold">{order.client}</span>
                    <span className="text-xs text-fg-subtle">
                      {plural(order.itemCount, "article")}
                    </span>
                  </span>
                </Link>
              </th>
              <td className="px-2 py-3.5 text-fg-muted">{order.time}</td>
              <td className="px-2 py-3.5 text-fg-muted">{order.payment}</td>
              <td className="px-2 py-3.5 text-right font-semibold whitespace-nowrap">
                {formatFcfa(order.amount)}
              </td>
              <td className="py-3.5 pl-2 text-right">
                <StatusBadge status={order.status} pill />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
