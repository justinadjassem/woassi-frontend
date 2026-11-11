import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

/**
 * Symbole woassi : carré plein et sommets en réserve.
 * Monochrome, il prend la couleur du texte (`currentColor`) : encre sur fond
 * clair, blanc sur fond sombre. Les sommets laissent voir le fond.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 646 640"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
    >
      <path
        fillRule="evenodd"
        d="M0 0h646v640H0zM0 640l215-225 2 88 183-158 35 163 165-163 42 295zM182 529v104h-54zM378 448l12 185h-98zM574 398l6 235H477z"
      />
    </svg>
  );
}

/** Logo horizontal : symbole + logotype en minuscules. */
export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("size-9", markClassName)} />
      <span className="text-xl font-medium tracking-tight">{siteConfig.wordmark}</span>
    </span>
  );
}
