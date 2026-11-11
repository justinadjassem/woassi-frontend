import type { Metadata } from "next";
import { LowStock, PaymentBreakdown, WeeklySales } from "@/components/merchant/insights";
import { Overview } from "@/components/merchant/overview";
import { PageHeader } from "@/components/merchant/page-header";
import { RecentOrders } from "@/components/merchant/recent-orders";
import { TodoCard } from "@/components/merchant/todo-card";

export const metadata: Metadata = {
  title: "Accueil",
};

export default function DashboardPage() {
  return (
    <>
      <PageHeader />
      <TodoCard />
      <Overview />
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-start">
        <RecentOrders />
        {/* Tablette : stock bas. Bureau : ventes de la semaine et encaissements. */}
        <div className="hidden min-w-0 flex-2 basis-60 flex-col gap-4 md:flex xl:basis-75">
          <LowStock className="xl:hidden" />
          <WeeklySales className="hidden xl:flex" />
          <PaymentBreakdown className="hidden xl:flex" />
        </div>
      </div>
    </>
  );
}
