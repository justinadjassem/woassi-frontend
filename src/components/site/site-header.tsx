import Link from "next/link";
import { MobileMenu } from "@/components/site/mobile-menu";
import { StickyHeader } from "@/components/site/sticky-header";
import { buttonClass } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { routes } from "@/lib/site-config";

const navLinks = [
  { href: routes.features, label: "Fonctionnalités" },
  { href: routes.howItWorks, label: "Comment ça marche" },
  { href: routes.faq, label: "Questions fréquentes" },
];

const login = { href: routes.login, label: "Se connecter" };
const signup = { href: routes.signupSection, label: "Créer mon compte" };

/**
 * En-tête du site vitrine, collant et compacté au défilement (voir StickyHeader).
 * - `landing` : navigation par ancres + connexion / inscription.
 * - `simple` : retour à l'accueil, pour les pages légales et annexes.
 */
export function SiteHeader({ variant = "landing" }: { variant?: "landing" | "simple" }) {
  return (
    <StickyHeader>
      {/* `relative` : le panneau du menu mobile se positionne sous cette ligne. */}
      <div className="container-page relative flex items-center gap-4 lg:gap-6">
        <Link href={routes.home} className="rounded-lg">
          <Logo />
          <span className="sr-only">, retour à l&apos;accueil</span>
        </Link>

        {variant === "landing" ? (
          <>
            <nav aria-label="Navigation du site" className="hidden flex-1 justify-center lg:flex">
              <ul role="list" className="flex gap-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="ml-auto flex items-center gap-2">
              <Link
                href={login.href}
                className={buttonClass({ variant: "ghost", className: "max-lg:hidden" })}
              >
                {login.label}
              </Link>
              <Link href={signup.href} className={buttonClass({ className: "max-sm:hidden" })}>
                {signup.label}
              </Link>
              <MobileMenu links={navLinks} login={login} signup={signup} />
            </div>
          </>
        ) : (
          <div className="ml-auto flex items-center gap-2">
            <Link href={routes.home} className={buttonClass({ variant: "ghost" })}>
              <ArrowLeftIcon size={16} />
              Retour à l&apos;accueil
            </Link>
            <Link href={signup.href} className={buttonClass({ className: "max-sm:hidden" })}>
              {signup.label}
            </Link>
          </div>
        )}
      </div>
    </StickyHeader>
  );
}
