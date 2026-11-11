/**
 * Données de démonstration reprises de la maquette.
 * À remplacer par les appels à l'API woassi-backend.
 */

export type OrderStatus = "a-valider" | "en-livraison" | "livree";

export interface Order {
  id: string;
  initials: string;
  client: string;
  itemCount: number;
  time: string;
  payment: string;
  amount: number;
  status: OrderStatus;
}

export interface LowStockProduct {
  id: string;
  name: string;
  price: number;
  left: number;
}

export type Period = "jour" | "semaine" | "mois";

export const shop = {
  name: "Ama Mode",
  ownerFirstName: "Ama",
  initials: "AM",
  role: "Propriétaire",
  phone: "+228 90 12 34 56",
  catalogSyncedAt: "10:30",
};

export const today = {
  iso: "2026-11-03",
  label: "Mardi 03/11/2026",
};

export const pending = {
  ordersToValidate: 3,
  clientInitials: ["EK", "SA"],
  paymentsToConfirm: "1 paiement Mixx by Yas",
};

export const orders: Order[] = [
  { id: "1042", initials: "KA", client: "Kossi Amegah", itemCount: 3, time: "10:42", payment: "Moov Money", amount: 31000, status: "a-valider" },
  { id: "1041", initials: "EK", client: "Edem Kpodo", itemCount: 2, time: "10:05", payment: "Espèces", amount: 9000, status: "a-valider" },
  { id: "1040", initials: "SA", client: "Sena Agbeko", itemCount: 1, time: "09:48", payment: "Mixx by Yas", amount: 7500, status: "a-valider" },
  { id: "1039", initials: "AM", client: "Afi Mensah", itemCount: 1, time: "09:15", payment: "Espèces", amount: 12500, status: "en-livraison" },
  { id: "1038", initials: "YD", client: "Yawa Dogbe", itemCount: 2, time: "08:03", payment: "Mixx by Yas", amount: 18000, status: "livree" },
];

export const lowStock: LowStockProduct[] = [
  { id: "pagne-wax", name: "Pagne wax 6 yards", price: 12500, left: 2 },
  { id: "sac-cuir", name: "Sac à main cuir", price: 18000, left: 1 },
  { id: "sandales", name: "Sandales tressées", price: 7500, left: 3 },
  { id: "foulard", name: "Foulard imprimé", price: 3000, left: 2 },
];

/** Ventes par période. Seules les valeurs « jour » et « semaine » viennent de la maquette. */
export const salesByPeriod: Record<Period, { amount: number; orders: number }> = {
  jour: { amount: 48500, orders: 6 },
  semaine: { amount: 186500, orders: 21 },
  mois: { amount: 742000, orders: 86 },
};

export const overview = {
  receivable: { amount: 22000, invoices: 2 },
  deliveriesInProgress: 2,
  lowStockCount: lowStock.length,
};

export const weeklySales = {
  total: 186500,
  days: [
    { short: "L", name: "lundi", amount: 138000, current: false },
    { short: "M", name: "mardi", amount: 48500, current: true },
    { short: "M", name: "mercredi", amount: 0, current: false },
    { short: "J", name: "jeudi", amount: 0, current: false },
    { short: "V", name: "vendredi", amount: 0, current: false },
    { short: "S", name: "samedi", amount: 0, current: false },
    { short: "D", name: "dimanche", amount: 0, current: false },
  ],
};

export const paymentBreakdown = [
  { method: "Espèces", amount: 98000 },
  { method: "Mixx by Yas", amount: 54500 },
  { method: "Moov Money", amount: 34000 },
];
