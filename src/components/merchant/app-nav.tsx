"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BagIcon, BoxIcon, HomeIcon, SlidersIcon, WalletIcon } from "@/components/ui/icons";
import { LogoMark } from "@/components/ui/logo";
import { cn } from "@/lib/cn";
import { routes, siteConfig } from "@/lib/site-config";

interface AppNavProps {
  pendingOrders: number;
  shop: { name: string; initials: string; role: string; phone: string; catalogSyncedAt: string };
}

const items = [
  { href: routes.dashboard, label: "Accueil", icon: HomeIcon, exact: true },
  { href: routes.orders, label: "Commandes", icon: BagIcon, badge: true },
  { href: routes.stock, label: "Stock", icon: BoxIcon },
  { href: routes.accounting, label: "Compta", icon: WalletIcon },
  { href: routes.settings, label: "Réglages", icon: SlidersIcon },
];

/**
 * Navigation principale de l'app, un seul composant pour trois formes :
 * barre d'onglets fixe en bas (mobile), rail d'icônes (tablette), barre
 * latérale complète (bureau). Mêmes entrées, même ordre et mêmes libellés
 * partout (WCAG 3.2.3 Navigation cohérente, 3.2.4 Identification cohérente).
 */
export function AppNav({ pendingOrders, shop }: AppNavProps) {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] md:sticky md:inset-x-auto md:top-0 md:bottom-auto md:h-dvh md:w-23 md:shrink-0 md:flex-col md:items-center md:gap-6 md:border-t-0 md:border-r md:py-7 xl:w-64 xl:items-stretch xl:gap-7 xl:px-4.5 xl:pb-5.5">
      <Link
        href={routes.dashboard}
        className="hidden items-center gap-2.5 rounded-lg md:flex xl:self-start xl:px-2"
      >
        <LogoMark className="size-10 xl:size-9" />
        <span className="sr-only xl:not-sr-only xl:text-lg xl:font-medium xl:tracking-tight">
          {siteConfig.wordmark}
        </span>
      </Link>

      <nav aria-label="Navigation principale" className="flex flex-1 md:w-full md:flex-col">
        <p aria-hidden="true" className="eyebrow mb-2 hidden px-3 text-fg-subtle xl:block">
          Menu
        </p>
        <ul
          role="list"
          className="flex flex-1 md:flex-col md:items-center md:gap-1.5 xl:items-stretch xl:gap-0.5"
        >
          {items.map(({ href, label, icon: ItemIcon, exact, badge }, index) => {
            const active = exact ? pathname === href : pathname.startsWith(href);
            const showBadge = badge && pendingOrders > 0;
            return (
              <li
                key={href}
                className={cn(
                  "flex flex-1 md:flex-none",
                  index === items.length - 1 && "md:mt-auto xl:mt-0",
                )}
              >
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative flex min-h-16 flex-1 flex-col items-center justify-center gap-1 text-xs -outline-offset-4 transition-colors",
                    "md:min-h-0 md:w-17 md:flex-none md:rounded-2xl md:py-2.5 md:outline-offset-2",
                    "xl:min-h-11 xl:w-auto xl:flex-1 xl:flex-row xl:justify-start xl:gap-3 xl:rounded-xl xl:px-3 xl:py-0 xl:text-sm",
                    active
                      ? "font-semibold text-fg before:absolute before:inset-x-5 before:top-0 before:h-0.5 before:rounded-full before:bg-fg md:bg-surface-muted md:before:hidden"
                      : "font-medium text-fg-subtle hover:text-fg md:hover:bg-surface-muted/60",
                  )}
                >
                  <ItemIcon size={22} className="xl:size-5" />
                  {label}
                  {showBadge && (
                    <>
                      <span
                        aria-hidden="true"
                        className="absolute top-1.5 left-[calc(50%+0.375rem)] flex h-5 min-w-5 items-center justify-center rounded-full bg-alert px-1.5 text-xs font-bold text-white xl:static xl:ml-auto xl:bg-fg"
                      >
                        {pendingOrders}
                      </span>
                      <span className="sr-only">, {pendingOrders} à valider</span>
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hidden flex-col gap-2 rounded-2xl border border-line bg-surface-muted p-4 xl:flex">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-success-strong ring-3 ring-success-soft"
          />
          WhatsApp connecté
        </p>
        <p className="text-xs text-fg-subtle">{shop.phone}</p>
        <p className="text-xs text-fg-subtle">Catalogue synchronisé à {shop.catalogSyncedAt}</p>
      </div>

      <div className="hidden items-center gap-2.5 border-t border-line px-2 pt-3.5 xl:flex">
        <span
          aria-hidden="true"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-muted text-xs font-semibold"
        >
          {shop.initials}
        </span>
        <p className="flex min-w-0 flex-col">
          <span className="text-sm font-semibold">{shop.name}</span>
          <span className="text-xs text-fg-subtle">{shop.role}</span>
        </p>
      </div>
    </div>
  );
}
