import type { Metadata } from "next";
import { AppNav } from "@/components/merchant/app-nav";
import { pending, shop } from "@/lib/mock-data";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function MerchantLayout({ children }: LayoutProps<"/tableau-de-bord">) {
  return (
    <div className="theme-app min-h-dvh bg-canvas text-fg md:flex">
      <AppNav pendingOrders={pending.ordersToValidate} shop={shop} />
      {/* pb-28 : le contenu ne passe jamais sous la barre d'onglets fixe du mobile. */}
      <main
        id="contenu"
        tabIndex={-1}
        className="min-w-0 flex-1 px-5 pt-6 pb-28 md:px-10 md:pt-9 md:pb-12 xl:px-12 xl:pb-14"
      >
        <div className="mx-auto flex max-w-[69rem] flex-col gap-7 md:gap-8">{children}</div>
      </main>
    </div>
  );
}
