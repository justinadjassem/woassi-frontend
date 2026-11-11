import Link from "next/link";
import { PhoneFrame } from "@/components/site/phone";
import { buttonClass } from "@/components/ui/button";
import { CheckIcon, ChevronLeftIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import { routes, siteConfig } from "@/lib/site-config";

const featureTitle = "text-3xl leading-[1.1] font-bold tracking-tighter text-balance sm:text-4xl";

function OrdersFeature() {
  return (
    <article className="relative flex flex-wrap items-center gap-x-10 gap-y-6 overflow-hidden rounded-4xl bg-lime px-6 pt-8 sm:rounded-5xl sm:px-14 sm:pt-14">
      <div className="flex flex-1 basis-[23.75rem] flex-col gap-5 sm:pb-14">
        <Tag>Commandes</Tag>
        <h3 className="text-display-md font-bold text-balance">
          Vos commandes WhatsApp arrivent ici, prêtes à valider.
        </h3>
        <p className="max-w-[28.75rem] text-lg leading-relaxed text-on-lime">
          Le client commande dans votre catalogue WhatsApp. Vous voyez le stock ligne par ligne, vous
          validez ou refusez avec un motif, et il reçoit la réponse sur WhatsApp, automatiquement.
        </p>
        <Link href={routes.signupSection} className={buttonClass({ className: "self-start" })}>
          Essayer {siteConfig.name}
        </Link>
      </div>

      <div
        role="img"
        aria-label="Conversation WhatsApp : le client Kossi envoie une commande de 2 articles pour 31 000 FCFA, la boutique confirme la réception puis la validation. Côté application, la commande n° 1042 attend d'être validée ou refusée."
        className="relative flex h-[440px] flex-1 basis-80 justify-center sm:h-[520px] sm:basis-[26.25rem]"
      >
        <PhoneFrame className="absolute -bottom-[120px] h-[620px]" screenClassName="flex flex-col bg-[#eceff1]">
          <div className="flex items-center gap-2.5 border-b border-line bg-surface px-3.5 pt-[46px] pb-3">
            <ChevronLeftIcon size={16} />
            <span className="flex size-8 items-center justify-center rounded-full bg-ink text-xs font-bold text-lime">
              AM
            </span>
            <span className="flex flex-col">
              <span className="text-sm leading-4 font-bold">Ama Mode</span>
              <span className="text-[0.625rem] leading-4 text-fg-subtle">Compte professionnel</span>
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-2 px-3 py-3.5 text-xs leading-snug">
            <span className="self-center rounded-lg bg-surface px-2.5 py-0.5 text-[0.625rem] text-fg-subtle">
              Aujourd&apos;hui
            </span>
            <div className="w-[190px] self-end rounded-[14px] rounded-tr-sm bg-[#e4f2b8] p-2.5">
              <p className="mb-1.5 font-bold">Commande · 2 articles</p>
              <p className="flex justify-between">
                <span>Pagne wax ×2</span>
                <span>25 000</span>
              </p>
              <p className="flex justify-between">
                <span>Foulard ×2</span>
                <span>6 000</span>
              </p>
              <p className="mt-1.5 flex justify-between border-t border-ink/15 pt-1.5 font-bold">
                <span>Total</span>
                <span>31 000 FCFA</span>
              </p>
              <p className="mt-1 text-right text-[0.625rem] text-on-lime">10:42</p>
            </div>
            <p className="max-w-[200px] self-start rounded-[14px] rounded-tl-sm bg-surface px-2.5 py-2">
              Merci Kossi ! Votre commande n°1042 est bien reçue.
              <span className="block text-right text-[0.625rem] text-fg-subtle">10:42</span>
            </p>
            <p className="max-w-[200px] self-start rounded-[14px] rounded-tl-sm bg-surface px-2.5 py-2">
              Commande validée. Votre livreur Komla vous appelle bientôt.
              <span className="block text-right text-[0.625rem] text-fg-subtle">10:51</span>
            </p>
          </div>
        </PhoneFrame>

        <div className="absolute top-[70px] left-0 hidden w-[250px] rounded-3xl bg-surface p-4 shadow-float lg:block">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">Commande #1042</span>
            <span className="flex items-center gap-1.5 text-xs font-bold text-warning">
              <span className="size-1.5 rounded-full bg-warning-dot" />À valider
            </span>
          </div>
          <p className="mt-1.5 mb-3.5 text-xs text-fg-subtle">Kossi Amegah · Moov Money</p>
          <div className="flex gap-2 text-sm font-semibold">
            <span className="flex h-10 flex-1 items-center justify-center rounded-full border border-line-strong">
              Refuser
            </span>
            <span className="flex h-10 flex-[1.4] items-center justify-center rounded-full bg-ink text-white">
              Valider
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

const catalogue = [
  { name: "Pagne wax 6 yards", price: "12 500 FCFA", swatch: "bg-coral", state: "2 restants", tone: "text-warning" },
  { name: "Sac à main cuir", price: "18 000 FCFA", swatch: "bg-lilac", state: "14 en stock", tone: "text-success" },
  { name: "Sandales tressées", price: "7 500 FCFA", swatch: "bg-ink-soft", state: "Sur WhatsApp", tone: "text-success", check: true },
];

function CatalogueFeature() {
  return (
    <article className="flex flex-1 basis-[27.5rem] flex-col gap-5 rounded-4xl bg-sun p-6 sm:rounded-5xl sm:p-11">
      <Tag>Catalogue &amp; stock</Tag>
      <h3 className={featureTitle}>Un produit ajouté ici apparaît dans votre catalogue WhatsApp.</h3>
      <p className="text-base leading-relaxed text-on-sun">
        Photos, prix, quantités et seuil d&apos;alerte. Le stock baisse à chaque vente et vous
        prévient avant la rupture.
      </p>
      <div
        role="img"
        aria-label="Extrait du catalogue : pagne wax 6 yards à 12 500 FCFA, 2 restants ; sac à main cuir à 18 000 FCFA, 14 en stock ; sandales tressées à 7 500 FCFA, publiées sur WhatsApp."
        className="mt-3 flex flex-col divide-y divide-line rounded-3xl bg-surface px-4.5 py-2"
      >
        {catalogue.map(({ name, price, swatch, state, tone, check }) => (
          <div key={name} className="flex items-center gap-3 py-3">
            <span className={`size-11 shrink-0 rounded-xl ${swatch}`} />
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-sm font-bold">{name}</span>
              <span className="text-xs text-fg-subtle">{price}</span>
            </span>
            <span className={`flex items-center gap-1 text-xs font-bold whitespace-nowrap ${tone}`}>
              {check && <CheckIcon size={12} />}
              {state}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

function InvoiceFeature() {
  return (
    <article className="flex flex-1 basis-[27.5rem] flex-col gap-5 rounded-4xl bg-lilac p-6 sm:rounded-5xl sm:p-11">
      <Tag>Factures</Tag>
      <h3 className={featureTitle}>Une vraie facture, envoyée sans y penser.</h3>
      <p className="text-base leading-relaxed text-on-lilac">
        Dès que vous validez, la facture est créée avec votre logo et vos mentions légales, puis
        envoyée en PDF sur WhatsApp.
      </p>
      <div
        role="img"
        aria-label="Exemple de facture FAC-2026-0142 de la boutique Ama Mode : pagne wax 6 yards × 2 et foulard imprimé × 2, total 31 000 FCFA, payée par Moov Money."
        className="mt-3 flex -rotate-[1.5deg] flex-col gap-3.5 rounded-3xl bg-surface p-5.5"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="flex flex-col gap-0.5">
            <span className="text-base font-bold">Ama Mode</span>
            <span className="text-xs text-fg-subtle">Bè, Lomé · +228 90 12 34 56</span>
          </span>
          <span className="flex flex-col items-end gap-0.5">
            <span className="text-xs font-bold tracking-wider text-fg-subtle uppercase">Facture</span>
            <span className="text-sm font-bold whitespace-nowrap">FAC-2026-0142</span>
          </span>
        </div>
        <div className="flex flex-col gap-1.5 border-y border-dashed border-line-strong py-3 text-sm">
          <span className="flex justify-between gap-3">
            <span>Pagne wax 6 yards × 2</span>
            <span>25 000</span>
          </span>
          <span className="flex justify-between gap-3">
            <span>Foulard imprimé × 2</span>
            <span>6 000</span>
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="flex min-h-6.5 items-center rounded-full bg-success-soft px-2.5 text-xs font-bold text-success">
            Payée · Moov Money
          </span>
          <span className="text-xl font-bold tracking-tight">31 000 FCFA</span>
        </div>
      </div>
    </article>
  );
}

function AccountingFeature() {
  return (
    <article className="on-dark flex flex-wrap items-center gap-x-12 gap-y-8 rounded-4xl bg-ink-soft p-6 text-white sm:rounded-5xl sm:p-14">
      <div className="flex flex-1 basis-[23.75rem] flex-col gap-5">
        <Tag>Comptabilité</Tag>
        <h3 className="text-display-md font-bold text-balance">
          Fini le cahier. <span className="text-lime">Vos comptes se tiennent tout seuls.</span>
        </h3>
        <p className="max-w-[28.75rem] text-lg leading-relaxed text-fg-inverse-muted">
          Ce qui est vendu, encaissé ou encore dû, par jour, par semaine ou par mois. Espèces, Mixx
          by Yas et Moov Money, chacun à sa place.
        </p>
      </div>
      <div
        role="img"
        aria-label="Exemple de tableau de comptabilité : 186 500 FCFA de ventes cette semaine, dont 164 500 FCFA encaissés et 22 000 FCFA restant à encaisser."
        className="flex flex-1 basis-80 flex-wrap gap-3.5 text-ink sm:basis-[26.25rem]"
      >
        <div className="basis-full rounded-[1.75rem] bg-surface p-6">
          <div className="flex items-end justify-between gap-3">
            <span className="flex flex-col gap-1.5">
              <span className="text-xs font-bold tracking-wider text-fg-subtle uppercase">Cette semaine</span>
              <span className="text-4xl leading-none font-bold tracking-tighter">
                186 500 <span className="text-sm font-semibold tracking-normal">FCFA</span>
              </span>
            </span>
            <span className="flex min-h-7 items-center rounded-full bg-surface-muted px-2.5 text-xs font-semibold">
              Semaine
            </span>
          </div>
          <div className="mt-5.5 flex h-28 items-end gap-2.5">
            {[55, 72, 48, 90, 100, 64, 30].map((height) => (
              <span
                key={height}
                className={`flex-1 rounded-lg ${height === 100 ? "bg-ink" : "bg-line"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 basis-40 flex-col gap-2.5 rounded-3xl bg-lime p-5">
          <span className="text-sm font-semibold">Encaissé</span>
          <span className="text-2xl font-bold tracking-tight">164 500</span>
        </div>
        <div className="flex flex-1 basis-40 flex-col gap-2.5 rounded-3xl bg-coral p-5">
          <span className="text-sm font-semibold">Reste à encaisser</span>
          <span className="text-2xl font-bold tracking-tight">22 000</span>
        </div>
      </div>
    </article>
  );
}

export function Features() {
  return (
    <section
      id="fonctionnalites"
      aria-labelledby="fonctionnalites-titre"
      className="container-page flex scroll-mt-6 flex-col gap-4 pt-16 sm:pt-20"
    >
      <h2 id="fonctionnalites-titre" className="sr-only">
        Fonctionnalités
      </h2>
      <OrdersFeature />
      <div className="flex flex-wrap gap-4">
        <CatalogueFeature />
        <InvoiceFeature />
      </div>
      <AccountingFeature />
    </section>
  );
}
