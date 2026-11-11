import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { SkipLink } from "@/components/ui/skip-link";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.wordmark} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.wordmark}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.wordmark,
};

/* Le zoom utilisateur n'est jamais bloqué (WCAG 1.4.4, 1.4.10). */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7fbfc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <body className="min-h-dvh font-sans">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
