import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { routes, siteConfig } from "@/lib/site-config";

const productLinks = [
  { href: routes.features, label: "Fonctionnalités" },
  { href: routes.howItWorks, label: "Comment ça marche" },
  { href: routes.faq, label: "Questions fréquentes" },
];

const legalLinks = [
  { href: routes.privacy, label: "Politique de confidentialité" },
  { href: routes.terms, label: "Conditions d'utilisation" },
];

const columnTitle = "eyebrow mb-1 font-bold text-white";
const footerLink =
  "inline-flex min-h-8 items-center rounded-sm underline-offset-4 hover:text-white hover:underline";

function LinkColumn({
  title,
  links,
  current,
}: {
  title: string;
  links: { href: string; label: string }[];
  current?: string;
}) {
  return (
    <nav aria-label={title} className="flex flex-1 basis-40 flex-col gap-1.5 text-sm">
      <h2 className={columnTitle}>{title}</h2>
      <ul role="list" className="flex flex-col gap-1">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={href === current ? "page" : undefined}
              className={`${footerLink} aria-[current=page]:text-white`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Pied de page. `full` sur la landing (colonnes + contact), `compact` sur les
 * pages légales. `current` marque la page en cours (aria-current).
 */
export function SiteFooter({
  variant = "full",
  current,
}: {
  variant?: "full" | "compact";
  current?: string;
}) {
  const { contact, copyrightYear, name } = siteConfig;

  if (variant === "compact") {
    return (
      <footer className="on-dark bg-ink text-fg-inverse-subtle">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6 text-sm">
          <p>
            © {copyrightYear} {name} · {contact.city}
          </p>
          <nav aria-label="Légal">
            <ul role="list" className="flex flex-wrap gap-x-6">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={href === current ? "page" : undefined}
                    className={`${footerLink} aria-[current=page]:text-white`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    );
  }

  return (
    <footer className="on-dark bg-ink text-fg-inverse-muted">
      <div className="container-page flex flex-wrap gap-x-12 gap-y-10 pt-16 pb-8">
        <div className="flex flex-2 basis-72 flex-col items-start gap-4">
          <Link href={routes.home} className="rounded-lg text-white">
            <Logo />
            <span className="sr-only">, retour à l&apos;accueil</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed">
            Le back-office des commerçants qui vendent sur WhatsApp. Conçu à Lomé.
          </p>
        </div>

        <LinkColumn title="Produit" links={productLinks} />
        <LinkColumn title="Légal" links={legalLinks} current={current} />

        <div id="contact" className="flex flex-1 basis-40 scroll-mt-6 flex-col gap-1.5 text-sm">
          <h2 className={columnTitle}>Contact</h2>
          <ul role="list" className="flex flex-col gap-3 pt-1.5">
            <li>{contact.email}</li>
            <li>{contact.whatsapp}</li>
            <li>{contact.city}</li>
          </ul>
        </div>
      </div>

      <div className="container-page">
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-line-inverse pt-6 pb-8 text-sm text-fg-inverse-subtle">
          <p>
            © {copyrightYear} {name}. Tous droits réservés.
          </p>
          <p>
            WhatsApp est une marque de Meta Platforms, Inc. {name} n&apos;est pas affilié à Meta.
          </p>
        </div>
      </div>
    </footer>
  );
}
