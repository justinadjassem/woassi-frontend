"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { buttonClass } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

interface MobileMenuProps {
  links: { href: string; label: string }[];
  login: { href: string; label: string };
  signup: { href: string; label: string };
}

/**
 * Menu du site sur petit écran, selon le modèle « disclosure » du W3C (APG) :
 * un bouton avec aria-expanded / aria-controls, Échap referme et rend le focus
 * au bouton. Le panneau suit le bouton dans le DOM : l'ordre de tabulation est
 * naturel, sans piège à focus (WCAG 2.1.2, 2.4.3).
 */
export function MobileMenu({ links, login, signup }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex size-11 items-center justify-center rounded-full border border-line-strong bg-surface text-fg"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
        <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-4 top-full z-30 rounded-3xl border border-line bg-surface p-3 shadow-float sm:inset-x-6"
      >
        <nav aria-label="Navigation du site">
          <ul role="list" className="flex flex-col">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={close}
                  className="flex min-h-12 items-center rounded-2xl px-4 text-base font-medium text-fg hover:bg-surface-muted"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-2 flex flex-col gap-2 border-t border-line pt-3">
          <Link href={login.href} onClick={close} className={buttonClass({ variant: "secondary" })}>
            {login.label}
          </Link>
          <Link href={signup.href} onClick={close} className={buttonClass()}>
            {signup.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
