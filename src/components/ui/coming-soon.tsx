import Link from "next/link";
import { buttonClass } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/ui/icons";

/** Écran d'attente pour les sections dont la maquette n'existe pas encore. */
export function ComingSoon({
  title,
  backHref,
  backLabel,
}: {
  title: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <div className="flex flex-col items-start gap-5 rounded-4xl bg-surface p-8 md:p-12">
      <p className="eyebrow text-fg-subtle">Bientôt disponible</p>
      <h1 className="text-3xl leading-tight font-semibold tracking-tight">{title}</h1>
      <p className="max-w-prose text-base leading-relaxed text-fg-muted">
        Cet écran est en cours de conception. Il sera ajouté dès que sa maquette sera prête.
      </p>
      <Link href={backHref} className={buttonClass({ variant: "secondary" })}>
        <ArrowLeftIcon size={16} />
        {backLabel}
      </Link>
    </div>
  );
}
