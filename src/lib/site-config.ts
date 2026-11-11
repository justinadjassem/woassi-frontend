/**
 * Informations de marque et de contact.
 * Les valeurs entre crochets sont des champs à compléter avant la mise en ligne.
 */
export const siteConfig = {
  /** Nom dans le texte courant. Le logotype, lui, s'écrit en minuscules. */
  name: "Woassi",
  wordmark: "woassi",
  tagline: "Vendez sur WhatsApp. Gérez tout le reste ici.",
  description:
    "Catalogue, commandes, factures, livraisons et compta réunis dans une seule app. Vos clients, eux, ne quittent jamais WhatsApp.",
  copyrightYear: 2026,
  contact: {
    email: "[adresse e-mail]",
    whatsapp: "[numéro WhatsApp]",
    support: "[numéro de support]",
    city: "Lomé, Togo",
  },
  legalUpdatedAt: "[JJ/MM/AAAA]",
} as const;

export const routes = {
  home: "/",
  features: "/#fonctionnalites",
  howItWorks: "/#comment",
  faq: "/#faq",
  signupSection: "/#inscription",
  contact: "/#contact",
  privacy: "/confidentialite",
  terms: "/conditions",
  login: "/connexion",
  signup: "/inscription",
  dashboard: "/tableau-de-bord",
  orders: "/tableau-de-bord/commandes",
  stock: "/tableau-de-bord/stock",
  accounting: "/tableau-de-bord/comptabilite",
  settings: "/tableau-de-bord/reglages",
} as const;
