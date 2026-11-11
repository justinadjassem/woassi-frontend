import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { pending } from "@/lib/mock-data";
import { routes } from "@/lib/site-config";

const avatarTones = ["bg-avatar-1", "bg-avatar-2"];

/** Carte d'action prioritaire : les commandes en attente de validation. */
export function TodoCard() {
  const count = pending.ordersToValidate;
  const label = count > 1 ? "commandes à valider" : "commande à valider";

  return (
    <Link
      href={routes.orders}
      className="group flex flex-col gap-4 rounded-3xl bg-fg p-5 text-white md:flex-row md:flex-wrap md:items-center md:gap-x-7 md:gap-y-5 md:rounded-4xl md:px-7 md:py-6"
    >
      <span className="flex items-start justify-between gap-3 md:flex-1 md:basis-80 md:items-center">
        <span className="flex flex-col gap-1.5 md:gap-2">
          <span className="eyebrow text-fg-inverse-subtle">À traiter</span>
          <span className="text-4xl leading-none font-semibold tracking-tight md:text-5xl">
            {count}{" "}
            <span className="text-base font-medium tracking-normal text-fg-inverse-muted md:text-lg">
              {label}
            </span>
          </span>
        </span>
        <span aria-hidden="true" className="flex shrink-0 pt-0.5 pl-2">
          {pending.clientInitials.map((initials, index) => (
            <span
              key={initials}
              className={cn(
                "-ml-2 flex size-8 items-center justify-center rounded-full text-xs font-semibold ring-2 ring-fg md:size-9",
                avatarTones[index % avatarTones.length],
              )}
            >
              {initials}
            </span>
          ))}
        </span>
      </span>

      <span className="hidden flex-col gap-1 border-l border-line-inverse px-7 xl:flex">
        <span className="eyebrow text-fg-inverse-subtle">À confirmer</span>
        <span className="text-base font-medium text-fg-inverse-muted">
          {pending.paymentsToConfirm}
        </span>
      </span>

      <span className="flex items-center justify-between gap-2.5 border-t border-line-inverse pt-3.5 text-sm font-semibold md:min-h-12 md:rounded-full md:border-0 md:bg-white md:py-0 md:pr-2 md:pl-5 md:text-fg">
        Valider maintenant
        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-full bg-white text-fg transition-transform group-hover:translate-x-0.5 md:size-8 md:bg-fg md:text-white"
        >
          <ArrowRightIcon size={16} />
        </span>
      </span>
    </Link>
  );
}
