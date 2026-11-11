import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ComingSoon } from "@/components/ui/coming-soon";
import { routes } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Se connecter",
};

export default function LoginPage() {
  return (
    <>
      <SiteHeader variant="simple" />
      <main id="contenu" tabIndex={-1} className="container-page pt-6 pb-20">
        <ComingSoon title="Se connecter" backHref={routes.home} backLabel="Retour à l'accueil" />
      </main>
      <SiteFooter variant="compact" />
    </>
  );
}
