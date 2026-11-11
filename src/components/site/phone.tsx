import type { ReactNode } from "react";
import { ArrowRightIcon, BagIcon, BellIcon, BoxIcon, HomeIcon, SlidersIcon, WalletIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/*
 * Illustrations du site vitrine.
 * Ce sont des images de l'interface, pas de l'interface : elles sont exposées
 * aux technologies d'assistance comme une seule image décrite (role="img" sur
 * le parent) et ne contiennent aucun élément focalisable. Leurs dimensions sont
 * en pixels fixes, comme celles d'une image.
 */

/** Coque de téléphone. `tone` : couleur du châssis. */
export function PhoneFrame({
  tone = "dark",
  className,
  screenClassName,
  children,
}: {
  tone?: "dark" | "light";
  className?: string;
  screenClassName?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "box-border w-[300px] rounded-[52px] p-[10px]",
        tone === "dark" ? "bg-ink" : "bg-canvas",
        className,
      )}
    >
      <div className={cn("relative h-full w-[280px] overflow-hidden rounded-[43px] text-left", screenClassName)}>
        {children}
        <div className="absolute top-[10px] left-1/2 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-ink" />
      </div>
    </div>
  );
}

const previewStats = [
  { label: "Ventes", value: "48 500", detail: "FCFA · 6 commandes", tint: "bg-tint-violet" },
  { label: "À encaisser", value: "22 000", detail: "FCFA · 2 factures", tint: "bg-tint-orange" },
  { label: "En livraison", value: "2", detail: "courses en cours", tint: "bg-tint-blue" },
  { label: "Stock bas", value: "4", detail: "produits à recharger", tint: "bg-tint-green" },
];

const previewTabs = [
  { label: "Accueil", icon: HomeIcon, active: true },
  { label: "Commandes", icon: BagIcon },
  { label: "Stock", icon: BoxIcon },
  { label: "Compta", icon: WalletIcon },
  { label: "Réglages", icon: SlidersIcon },
];

/** Réplique statique de l'accueil mobile de l'app (360 × 800), mise à l'échelle dans la coque. */
export function AppPreview() {
  return (
    <div className="theme-app h-full bg-canvas pt-[30px] text-fg">
      <div className="relative ml-[7px] h-[800px] w-[360px] origin-top-left scale-[0.74] overflow-hidden">
        <div className="flex flex-col gap-[28px] px-[20px] pt-[24px]">
          <div className="flex items-center gap-[12px]">
            <span className="flex size-[44px] items-center justify-center rounded-full bg-surface text-[14px] font-semibold">
              AM
            </span>
            <span className="flex flex-1 flex-col gap-[2px]">
              <span className="text-[17px] leading-[22px] font-semibold">Ama Mode</span>
              <span className="flex items-center gap-[6px] text-[12px] leading-[16px] text-fg-subtle">
                <span className="size-[6px] rounded-full bg-success-strong ring-3 ring-success-soft" />
                WhatsApp connecté
              </span>
            </span>
            <span className="relative flex size-[44px] items-center justify-center rounded-full bg-surface">
              <BellIcon />
              <span className="absolute top-[10px] right-[11px] size-[8px] rounded-full bg-alert ring-2 ring-surface" />
            </span>
          </div>

          <div className="flex flex-col gap-[6px]">
            <span className="text-[11px] leading-[14px] font-semibold tracking-[0.08em] text-fg-subtle uppercase">
              Mardi 03/11/2026
            </span>
            <span className="text-[28px] leading-[1.15] font-semibold tracking-[-0.025em]">
              Bonjour Ama,
              <br />
              <span className="text-fg-accent">voici votre journée.</span>
            </span>
          </div>

          <div className="flex flex-col gap-[18px] rounded-[24px] bg-fg p-[20px] text-white">
            <div className="flex items-start justify-between">
              <span className="flex flex-col gap-[6px]">
                <span className="text-[11px] leading-[14px] font-semibold tracking-[0.08em] text-fg-inverse-subtle uppercase">
                  À traiter
                </span>
                <span className="text-[40px] leading-none font-semibold tracking-[-0.03em]">
                  3{" "}
                  <span className="text-[16px] font-medium tracking-normal text-fg-inverse-muted">
                    commandes à valider
                  </span>
                </span>
              </span>
              <span className="flex pt-[2px]">
                <span className="flex size-[30px] items-center justify-center rounded-full bg-avatar-1 text-[10px] font-semibold ring-2 ring-fg">
                  EK
                </span>
                <span className="-ml-[8px] flex size-[30px] items-center justify-center rounded-full bg-avatar-2 text-[10px] font-semibold ring-2 ring-fg">
                  SA
                </span>
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-line-inverse pt-[14px]">
              <span className="text-[14px] font-semibold">Valider maintenant</span>
              <span className="flex size-[36px] items-center justify-center rounded-full bg-white text-fg">
                <ArrowRightIcon size={16} />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[14px]">
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-semibold">Aperçu</span>
              <span className="flex h-[32px] items-center rounded-full bg-surface px-[12px] text-[12px] font-medium">
                Aujourd&apos;hui
              </span>
            </div>
            <div className="grid grid-cols-2 gap-[10px]">
              {previewStats.map(({ label, value, detail, tint }) => (
                <div key={label} className={cn("flex flex-col gap-[22px] rounded-[20px] p-[16px]", tint)}>
                  <span className="text-[12px] leading-[16px] font-medium text-fg-muted">{label}</span>
                  <span className="flex flex-col gap-[2px]">
                    <span className="text-[24px] leading-none font-semibold tracking-[-0.03em]">
                      {value}
                    </span>
                    <span className="text-[11px] leading-[14px] font-medium text-fg-subtle">
                      {detail}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[16px] font-semibold">Dernières commandes</span>
            <span className="text-[12px] font-semibold text-link">Tout voir</span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex h-[64px] border-t border-line bg-surface">
          {previewTabs.map(({ label, icon: TabIcon, active }) => (
            <span
              key={label}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-[4px] text-[11px] leading-[14px]",
                active ? "font-semibold text-fg" : "font-medium text-fg-subtle",
              )}
            >
              <TabIcon size={22} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
