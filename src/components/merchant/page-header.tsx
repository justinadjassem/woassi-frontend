import Link from "next/link";
import { buttonClass } from "@/components/ui/button";
import { BellIcon, PlusIcon, SearchIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { pending, shop, today } from "@/lib/mock-data";
import { routes } from "@/lib/site-config";

function WhatsAppStatus({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className="size-1.5 shrink-0 rounded-full bg-success-strong ring-3 ring-success-soft"
      />
      WhatsApp connecté
    </span>
  );
}

function NotificationsButton() {
  const count = pending.ordersToValidate;
  return (
    <button
      type="button"
      aria-label={count > 0 ? `Notifications, ${count} nouvelles` : "Notifications"}
      className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-surface text-fg transition-colors hover:bg-fg/5 xl:border xl:border-line"
    >
      <BellIcon />
      {count > 0 && (
        <span
          aria-hidden="true"
          className="absolute top-2.5 right-2.5 size-2 rounded-full bg-alert ring-2 ring-surface"
        />
      )}
    </button>
  );
}

/** En-tête de l'accueil : identité de la boutique, salutation et actions. */
export function PageHeader() {
  return (
    <header className="flex flex-col gap-7 md:flex-row md:flex-wrap md:items-end md:gap-4">
      {/* Mobile : la boutique et son état WhatsApp remplacent la barre latérale. */}
      <div className="flex items-center gap-3 md:hidden">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface text-sm font-semibold tracking-wide"
        >
          {shop.initials}
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <p className="text-lg leading-6 font-semibold tracking-tight">{shop.name}</p>
          <WhatsAppStatus className="text-xs text-fg-subtle" />
        </div>
        <NotificationsButton />
      </div>

      <div className="flex min-w-0 flex-col gap-1.5 md:flex-1 md:basis-72 md:gap-2">
        <p className="eyebrow text-fg-subtle">
          <time dateTime={today.iso}>{today.label}</time>
        </p>
        <h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance">
          Bonjour {shop.ownerFirstName},{" "}
          <span className="text-fg-accent">voici votre journée.</span>
        </h1>
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <WhatsAppStatus className="min-h-10 rounded-full bg-surface px-3.5 text-sm font-medium text-fg-muted xl:hidden" />

        <form
          role="search"
          action={routes.dashboard}
          className="hidden min-h-11 w-75 items-center gap-2.5 rounded-full border border-control bg-surface px-4 text-fg-subtle focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-fg xl:flex"
        >
          <SearchIcon size={17} />
          <label htmlFor="recherche" className="sr-only">
            Rechercher un produit, un client ou une facture
          </label>
          <input
            id="recherche"
            type="search"
            name="q"
            placeholder="Produit, client, n° de facture"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-fg-subtle"
          />
        </form>

        <NotificationsButton />

        <Link href={routes.stock} className={buttonClass({ className: "max-xl:hidden" })}>
          <PlusIcon size={16} />
          Ajouter un produit
        </Link>
      </div>
    </header>
  );
}
