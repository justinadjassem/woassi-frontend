import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "accent" | "inverse-outline" | "ghost";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-fg text-white hover:bg-fg/85",
  secondary: "border border-line-strong bg-surface text-fg hover:border-fg",
  accent: "bg-lime text-ink hover:bg-white",
  "inverse-outline": "border border-white/40 text-white hover:bg-white/10",
  ghost: "text-fg hover:bg-fg/5",
};

/* Hauteur minimale 44px : cible tactile confortable (WCAG 2.5.8, 24px requis).
   `min-h` et non `h` : le bouton grandit si le texte est agrandi (WCAG 1.4.4). */
const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-13 px-6 text-base",
};

/** Classes d'un bouton, applicables à un `<Link>`, un `<a>` ou un `<button>`. */
export function buttonClass({
  variant = "primary",
  size = "md",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full py-2 text-center font-semibold transition-colors",
    variants[variant],
    sizes[size],
    className,
  );
}
