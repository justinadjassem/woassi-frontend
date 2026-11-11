import Link from "next/link";
import { AppPreview, PhoneFrame } from "@/components/site/phone";
import { buttonClass } from "@/components/ui/button";
import { BagIcon, BoxIcon, CheckIcon } from "@/components/ui/icons";
import { routes, siteConfig } from "@/lib/site-config";

/* Cartes flottantes : masquées sous 1024px, où elles recouvriraient le téléphone. */
const float = "absolute hidden text-left";

export function Hero() {
  return (
    <section aria-labelledby="hero-titre" className="overflow-hidden px-4 pt-10 text-center sm:px-6 sm:pt-14">
      <h1 id="hero-titre" className="mx-auto max-w-[56rem] text-display-2xl font-bold text-balance">
        Vendez sur WhatsApp. <span className="text-fg-accent">Gérez tout le reste</span> ici.
      </h1>
      <p className="mx-auto mt-6 max-w-[37.5rem] text-lg leading-relaxed text-fg-muted">
        {siteConfig.description}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2.5">
        <Link href={routes.signupSection} className={buttonClass({ size: "lg" })}>
          Créer mon compte gratuitement
        </Link>
        <Link href={routes.howItWorks} className={buttonClass({ variant: "secondary", size: "lg" })}>
          Voir comment ça marche
        </Link>
      </div>

      <div
        role="img"
        aria-label={`Aperçu de l'application ${siteConfig.name} sur téléphone : 3 commandes à valider, 48 500 FCFA de ventes aujourd'hui, une nouvelle commande de 31 000 FCFA et sa facture envoyée au client sur WhatsApp.`}
        className="relative mx-auto mt-14 h-[600px] max-w-[1160px] sm:mt-16 sm:h-[700px]"
      >
        <div className="absolute top-[150px] left-1/2 size-[980px] -translate-x-1/2 rounded-full border border-line" />
        <div className="absolute top-[250px] left-1/2 size-[760px] -translate-x-1/2 rounded-full bg-lime-soft" />

        <PhoneFrame className="absolute top-0 left-1/2 -ml-[150px] h-[640px] origin-top scale-90 shadow-float-strong sm:scale-100">
          <AppPreview />
        </PhoneFrame>

        <div className={`${float} top-14 left-[4%] w-[230px] -rotate-3 rounded-3xl bg-sun p-4.5 shadow-float lg:block`}>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-ink text-sun">
              <BagIcon size={18} />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-bold">Nouvelle commande</span>
              <span className="text-xs text-on-sun">Kossi A. · il y a 2 min</span>
            </span>
          </div>
          <p className="mt-4.5 text-3xl leading-none font-bold tracking-tight">
            31 000 <span className="text-sm font-semibold tracking-normal">FCFA</span>
          </p>
        </div>

        <div className={`${float} top-[410px] left-[10%] w-[250px] rounded-[1.25rem] bg-surface p-3 shadow-float lg:flex lg:items-center lg:gap-3`}>
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-coral text-ink">
            <BoxIcon size={24} />
          </span>
          <span className="flex flex-col gap-1">
            <span className="text-sm font-bold">Pagne wax 6 yards</span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-warning">
              <span className="size-1.5 rounded-full bg-warning-dot" />
              Stock bas · 2 restants
            </span>
          </span>
        </div>

        <div className={`${float} top-[268px] left-1/4 h-10 rounded-full bg-ink pr-4 pl-2 text-sm font-semibold text-white shadow-float lg:flex lg:items-center lg:gap-2`}>
          <span className="flex size-6.5 items-center justify-center rounded-full bg-lime text-ink">
            <CheckIcon size={14} />
          </span>
          Facture envoyée au client
        </div>

        <div className={`${float} top-[70px] right-[5%] w-60 rotate-[2.5deg] rounded-3xl bg-lime p-5 shadow-float lg:block`}>
          <p className="text-xs font-bold tracking-wider uppercase">Aujourd&apos;hui</p>
          <p className="mt-2.5 mb-0.5 text-4xl leading-none font-bold tracking-tighter">48 500</p>
          <p className="text-sm font-medium text-on-lime">FCFA encaissés · 6 commandes</p>
          <div className="mt-4 flex h-11 items-end gap-1.5">
            {[40, 65, 50, 85, 100].map((height, index, bars) => (
              <span
                key={height}
                className={`flex-1 rounded ${index === bars.length - 1 ? "bg-ink" : "bg-ink/20"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className={`${float} top-[380px] right-[2%] w-[270px] rounded-3xl bg-surface p-3.5 shadow-float lg:block`}>
          <p className="mb-2.5 text-xs font-bold tracking-wider text-fg-subtle uppercase">
            Reçu par le client sur WhatsApp
          </p>
          <p className="rounded-2xl rounded-tl-sm bg-surface-muted px-3 py-2.5 text-sm leading-snug">
            Votre commande est validée. Voici votre facture.
          </p>
          <div className="mt-2 flex items-center gap-2.5 rounded-2xl border border-line p-2.5">
            <span className="flex h-10 w-8.5 items-center justify-center rounded-md bg-lilac text-[0.625rem] font-extrabold text-on-lilac">
              PDF
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold">FAC-2026-0142</span>
              <span className="text-xs text-fg-subtle">31 000 FCFA · 1 page</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
