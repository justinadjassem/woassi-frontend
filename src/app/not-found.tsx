import type { Metadata } from "next";
import Link from "next/link";
import { buttonClass } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { routes } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <main
      id="contenu"
      tabIndex={-1}
      className="mx-auto flex min-h-dvh max-w-prose flex-col items-start justify-center gap-5 px-6 py-16"
    >
      <Logo />
      <p className="eyebrow mt-6 text-fg-subtle">Erreur 404</p>
      <h1 className="text-display-lg font-bold text-balance">Cette page est introuvable.</h1>
      <p className="text-lg leading-relaxed text-fg-muted">
        Le lien est peut-être incomplet, ou la page a été déplacée.
      </p>
      <Link href={routes.home} className={buttonClass({ size: "lg" })}>
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
