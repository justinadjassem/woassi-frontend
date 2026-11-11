import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/coming-soon";
import { routes } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Réglages",
};

export default function SettingsPage() {
  return <ComingSoon title="Réglages" backHref={routes.dashboard} backLabel="Retour à l'accueil" />;
}
