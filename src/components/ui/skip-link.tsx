/**
 * Lien d'évitement (WCAG 2.4.1) : premier élément focalisable de chaque page,
 * visible uniquement au focus clavier. Chaque gabarit expose `<main id="contenu">`.
 */
export function SkipLink() {
  return (
    <a
      href="#contenu"
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-fg focus-visible:px-5 focus-visible:py-3 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-white"
    >
      Aller au contenu principal
    </a>
  );
}
