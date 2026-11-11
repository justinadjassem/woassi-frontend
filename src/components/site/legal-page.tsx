import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { buttonClass } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

export interface LegalSection {
  id: string;
  /** Titre court pour le sommaire. */
  navTitle: string;
  /** Titre complet de la section (par défaut : navTitle). */
  title?: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  summary: string;
  intro: string;
  accent: "lime" | "sun";
  sections: LegalSection[];
  closing: { text: string; href: string; label: string; tone: "ink" | "ink-soft" };
  /** Route de la page, pour aria-current dans le pied de page. */
  current: string;
}

const accents = {
  lime: { banner: "bg-lime", summary: "text-on-lime" },
  sun: { banner: "bg-sun", summary: "text-on-sun" },
};

/** Gabarit commun aux pages légales : bandeau, sommaire, texte, appel final. */
export function LegalPage({ title, summary, intro, accent, sections, closing, current }: LegalPageProps) {
  return (
    <>
      <SiteHeader variant="simple" />

      <main id="contenu" tabIndex={-1}>
        <div className="container-page pt-2 sm:pt-6">
          <div
            className={cn(
              "flex flex-wrap items-end justify-between gap-6 rounded-4xl p-6 sm:rounded-5xl sm:p-14",
              accents[accent].banner,
            )}
          >
            <div className="flex max-w-[45rem] flex-col gap-4">
              <Tag>Légal</Tag>
              <h1 className="text-display-xl font-bold text-balance">{title}</h1>
              <p className={cn("text-lg leading-relaxed", accents[accent].summary)}>{summary}</p>
            </div>
            <p className="text-sm font-semibold">Dernière mise à jour : {siteConfig.legalUpdatedAt}</p>
          </div>
        </div>

        <div className="container-page flex flex-wrap items-start gap-x-16 gap-y-10 pt-10 pb-20 sm:pt-16 sm:pb-30">
          <nav
            aria-labelledby="sommaire-titre"
            className="flex w-full flex-col gap-1 text-sm lg:sticky lg:top-22 lg:w-65"
          >
            <h2 id="sommaire-titre" className="mb-2 text-xs font-bold tracking-wider text-fg-subtle uppercase">
              Sommaire
            </h2>
            <ol role="list" className="flex flex-col">
              {sections.map(({ id, navTitle }, index) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="flex min-h-9 items-center rounded-[0.625rem] px-3 py-1.5 text-fg-muted transition-colors hover:bg-surface hover:text-fg"
                  >
                    {index + 1}. {navTitle}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="prose-legal flex max-w-prose min-w-0 flex-1 basis-80 flex-col gap-12">
            <p className="!text-xl !leading-relaxed !text-fg">{intro}</p>

            {sections.map(({ id, navTitle, title: sectionTitle, body }, index) => (
              <section key={id} id={id} aria-labelledby={`${id}-titre`} className="flex scroll-mt-6 flex-col gap-3.5">
                <h2 id={`${id}-titre`} className="text-2xl font-bold tracking-tight">
                  {index + 1}. {sectionTitle ?? navTitle}
                </h2>
                {body}
              </section>
            ))}

            <div
              className={cn(
                "on-dark flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] p-7 text-white",
                closing.tone === "ink" ? "bg-ink" : "bg-ink-soft",
              )}
            >
              <p className="!text-lg !leading-snug font-bold tracking-tight !text-white">{closing.text}</p>
              <Link
                href={closing.href}
                className={buttonClass({ variant: "accent", className: "no-underline" })}
              >
                {closing.label}
              </Link>
            </div>
          </article>
        </div>
      </main>

      <SiteFooter variant="compact" current={current} />
    </>
  );
}
