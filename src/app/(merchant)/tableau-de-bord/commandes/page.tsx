import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/coming-soon";
import { routes } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Commandes",
};

export default function OrdersPage() {
  return <ComingSoon title="Commandes" backHref={routes.dashboard} backLabel="Retour à l'accueil" />;
}
