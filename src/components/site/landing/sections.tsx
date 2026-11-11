import Link from "next/link";
import { AppPreview, PhoneFrame } from "@/components/site/phone";
import { buttonClass } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/cn";
import { routes, siteConfig } from "@/lib/site-config";

const sectionTitle = "text-display-lg font-bold text-balance";

/* -------------------------------------------------------------------------- */

const paymentMethods = ["WhatsApp Business", "Mixx by Yas", "Moov Money", "Espèces"];

export function PaymentStrip() {
  return (
    <section aria-labelledby="compatibilite-titre" className="relative border-y border-line bg-surface">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6">
        <h2 id="compatibilite-titre" className="text-sm font-medium text-fg-subtle">
          Fonctionne avec ce que vous utilisez déjà
        </h2>
        <ul role="list" className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          {paymentMethods.map((method, index) => (
            <li
              key={method}
              className={cn(
                "flex items-center text-xl font-bold tracking-tight",
                index > 0 &&
                  "sm:before:mr-10 sm:before:size-1.5 sm:before:rounded-full sm:before:bg-line-strong sm:before:content-['']",
              )}
            >
              {method}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

const before = [
  "Photos et prix renvoyés à chaque client",
  "Factures sur papier, ou pas de facture du tout",
  "Livreurs appelés un par un au téléphone",
  "Paiements notés dans un cahier",
];

const after = [
  "Un catalogue synchronisé avec WhatsApp",
  "Une facture PDF envoyée automatiquement",
  "Un livreur assigné en un geste",
  "Vos ventes et encaissements au jour le jour",
];

export function BeforeAfter() {
  return (
    <section aria-labelledby="avant-titre" className="container-page pt-20 pb-10 sm:pt-30">
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
        <h2 id="avant-titre" className={`${sectionTitle} max-w-[47.5rem] flex-1 basis-[35rem]`}>
          Vous vendez déjà sur WhatsApp.{" "}
          <span className="text-fg-accent">On range tout ce qui se passe après.</span>
        </h2>
        <p className="max-w-prose flex-1 basis-80 text-base leading-relaxed text-fg-muted lg:max-w-[22.5rem]">
          Les photos envoyées une à une, les prix répétés à chaque client, le cahier des paiements :{" "}
          {siteConfig.name} remplace tout ça par un seul outil, pensé pour votre téléphone.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 sm:mt-14">
        <div className="flex-1 basis-80 rounded-4xl border border-line bg-surface p-6 sm:p-8">
          <h3 className="mb-5.5 text-sm font-bold tracking-wider text-fg-subtle uppercase">
            Aujourd&apos;hui, à la main
          </h3>
          <ul role="list" className="flex flex-col gap-4 text-lg text-fg-subtle">
            {before.map((item) => (
              <li key={item} className="flex items-baseline gap-3">
                <span aria-hidden="true" className="text-line-strong">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 basis-80 rounded-4xl bg-ink p-6 text-white sm:p-8">
          <h3 className="mb-5.5 text-sm font-bold tracking-wider text-lime uppercase">
            Avec {siteConfig.name}
          </h3>
          <ul role="list" className="flex flex-col gap-4 text-lg">
            {after.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-5.5 shrink-0 items-center justify-center rounded-full bg-lime text-ink"
                >
                  <CheckIcon size={12} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

const stepCard = "flex flex-1 basis-[18.75rem] flex-col gap-4 rounded-4xl border border-line bg-surface p-6 sm:p-8";
const stepNumber = "text-6xl leading-none font-bold tracking-tighter";
const stepTitle = "text-xl font-bold tracking-tight";
const stepText = "text-base leading-relaxed text-fg-muted";

export function HowItWorks() {
  return (
    <section
      id="comment"
      aria-labelledby="comment-titre"
      className="container-page scroll-mt-6 pt-24 pb-10 sm:pt-35"
    >
      <div className="flex flex-col items-center text-center">
        <Tag className="border-line-strong text-fg-muted">Comment ça marche</Tag>
        <h2 id="comment-titre" className={`${sectionTitle} mt-4.5 max-w-[45rem]`}>
          Prêt à vendre en trois étapes,{" "}
          <span className="text-fg-accent">depuis votre téléphone.</span>
        </h2>
      </div>

      {/* role="list" : conserve la sémantique de liste malgré list-style: none. */}
      <ol role="list" className="mt-10 flex flex-wrap gap-4 sm:mt-16">
        <li className={stepCard}>
          <span aria-hidden="true" className={stepNumber}>01</span>
          <h3 className={stepTitle}>
            <span className="sr-only">Étape 1 : </span>Créez votre compte
          </h3>
          <p className={stepText}>
            Votre numéro de téléphone, le nom de votre boutique, et un code reçu par SMS. C&apos;est
            tout.
          </p>
          <div aria-hidden="true" className="mt-auto flex gap-2 pt-2">
            {["4", "8", "1"].map((digit) => (
              <span
                key={digit}
                className="flex h-13 w-11 items-center justify-center rounded-xl bg-surface-muted text-xl font-bold"
              >
                {digit}
              </span>
            ))}
            <span className="h-13 w-11 rounded-xl border-2 border-fg" />
          </div>
        </li>

        <li className={stepCard}>
          <span aria-hidden="true" className={stepNumber}>02</span>
          <h3 className={stepTitle}>
            <span className="sr-only">Étape 2 : </span>Connectez WhatsApp Business
          </h3>
          <p className={stepText}>
            Un assistant vous guide pas à pas. On vous dit clairement ce que {siteConfig.name} peut
            faire, et ce qu&apos;il ne fera jamais.
          </p>
          <div
            aria-hidden="true"
            className="mt-auto flex min-h-11 items-center gap-2.5 self-start rounded-full bg-success-soft pr-4 pl-2.5 text-sm font-bold text-success"
          >
            <span className="flex size-6.5 items-center justify-center rounded-full bg-success-strong text-white">
              <CheckIcon size={13} />
            </span>
            WhatsApp connecté
          </div>
        </li>

        <li className={stepCard}>
          <span aria-hidden="true" className={stepNumber}>03</span>
          <h3 className={stepTitle}>
            <span className="sr-only">Étape 3 : </span>Ajoutez vos produits
          </h3>
          <p className={stepText}>
            Une photo, un prix, une quantité. Le produit est publié dans votre catalogue WhatsApp et
            les commandes peuvent arriver.
          </p>
          <div
            aria-hidden="true"
            className="mt-auto flex items-center gap-2.5 rounded-2xl bg-surface-muted p-2.5"
          >
            <span className="size-9 rounded-[0.625rem] bg-sun" />
            <span className="flex-1 text-sm font-semibold">Foulard imprimé</span>
            <span className="text-sm font-bold">3 000 FCFA</span>
          </div>
        </li>
      </ol>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

const faq = [
  {
    question: "Mes clients doivent-ils installer une application ?",
    answer: `Non. Vos clients commandent dans votre catalogue WhatsApp, comme aujourd'hui, et reçoivent confirmations et factures dans la même conversation. ${siteConfig.name} est uniquement votre outil de gestion.`,
  },
  {
    question: "Ai-je besoin d'un compte WhatsApp Business ?",
    answer: `Oui. ${siteConfig.name} se connecte à votre compte WhatsApp Business via Meta. L'assistant de connexion vous accompagne étape par étape.`,
  },
  {
    question: "Quels paiements sont pris en charge ?",
    answer:
      "Espèces, Mixx by Yas et Moov Money. Vous enregistrez chaque paiement sur la facture correspondante, et votre compta se met à jour.",
  },
  {
    question: "Est-ce que ça marche sur mon téléphone ?",
    answer: `${siteConfig.name} est pensé d'abord pour les smartphones Android, même avec une connexion lente. Vous pouvez aussi l'ouvrir sur un ordinateur.`,
  },
  {
    question: "Mes employés peuvent-ils l'utiliser ?",
    answer:
      "Oui. Invitez-les par leur numéro : ils traitent les commandes et le stock, sans accès à vos réglages ni à vos chiffres.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-titre"
      className="container-page flex scroll-mt-6 flex-wrap gap-x-12 gap-y-8 pt-20 pb-10 sm:pt-30"
    >
      <div className="flex flex-1 basis-80 flex-col gap-4">
        <h2 id="faq-titre" className={sectionTitle}>
          Vos questions, nos réponses.
        </h2>
        <p className="text-base leading-relaxed text-fg-muted">
          Une autre question ? Écrivez-nous sur WhatsApp au {siteConfig.contact.support}.
        </p>
      </div>

      {/* <details>/<summary> natifs : état ouvert/fermé et clavier gérés par le navigateur. */}
      <div className="flex flex-2 basis-80 flex-col border-b border-line-strong sm:basis-[35rem]">
        {faq.map(({ question, answer }, index) => (
          <details key={question} open={index === 0} className="group border-t border-line-strong">
            <summary className="flex items-center justify-between gap-4 rounded-lg py-5.5">
              <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{question}</h3>
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface text-xl transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-prose pb-5.5 text-base leading-relaxed text-fg-muted">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

export function SignupCta() {
  return (
    <section
      id="inscription"
      aria-labelledby="inscription-titre"
      className="container-page scroll-mt-6 pt-16 pb-20 sm:pt-25 sm:pb-30"
    >
      <div className="on-dark relative flex flex-wrap items-center gap-x-10 gap-y-8 overflow-hidden rounded-4xl bg-ink px-6 pt-10 text-white sm:rounded-[2.75rem] sm:px-16 sm:pt-16">
        <div
          aria-hidden="true"
          className="absolute top-30 -right-30 size-[620px] rounded-full bg-ink-soft"
        />
        <div className="relative flex flex-1 basis-80 flex-col gap-5.5 sm:basis-[26.25rem] sm:pb-16">
          <h2 id="inscription-titre" className="text-display-xl font-bold text-balance">
            Votre boutique mérite <span className="text-lime">mieux qu&apos;un cahier.</span>
          </h2>
          <p className="max-w-[27.5rem] text-lg leading-relaxed text-fg-inverse-muted">
            Créez votre compte en quelques minutes et recevez votre première commande sur{" "}
            {siteConfig.name} dès aujourd&apos;hui.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <Link href={routes.signup} className={buttonClass({ variant: "accent", size: "lg" })}>
              Créer mon compte
            </Link>
            <Link href={routes.contact} className={buttonClass({ variant: "inverse-outline", size: "lg" })}>
              Parler à l&apos;équipe
            </Link>
          </div>
        </div>
        <div
          role="img"
          aria-label={`L'accueil de l'application ${siteConfig.name} sur un téléphone.`}
          className="relative flex h-[400px] flex-1 basis-72 justify-center sm:h-[460px] sm:basis-[22.5rem]"
        >
          <PhoneFrame tone="light" className="absolute top-0 h-[640px]">
            <AppPreview />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
