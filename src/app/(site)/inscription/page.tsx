import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ComingSoon } from "@/components/ui/coming-soon";
import { routes } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Créer mon compte",
};

export default function SignupPage() {
  return (
    <>
      <SiteHeader variant="simple" />
      <main id="contenu" tabIndex={-1} className="container-page pt-6 pb-20">
        <ComingSoon title="Créer mon compte" backHref={routes.home} backLabel="Retour à l'accueil" />
      </main>
      <SiteFooter variant="compact" />
    </>
  );
}
