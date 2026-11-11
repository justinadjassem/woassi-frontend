import type { ReactNode, SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & { size?: number };

/**
 * Les icônes sont toujours décoratives : le libellé accessible est porté par
 * le texte voisin ou par l'aria-label du contrôle (WCAG 1.1.1).
 */
function Icon({ size = 20, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const HomeIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
  </Icon>
);

export const BagIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M6 7h12l-1 13H7z" />
    <path d="M9 7a3 3 0 0 1 6 0" />
  </Icon>
);

export const BoxIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
    <path d="m3 8 9 5 9-5M12 13v8" />
  </Icon>
);

export const WalletIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="6" width="18" height="14" rx="3" />
    <path d="M3 10h18M16 15h2" />
  </Icon>
);

export const SlidersIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12" />
    <circle cx="16" cy="6" r="2" />
    <circle cx="10" cy="12" r="2" />
    <circle cx="18" cy="18" r="2" />
  </Icon>
);

export const BellIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z" />
    <path d="M10 20.5a2 2 0 0 0 4 0" />
  </Icon>
);

export const ArrowRightIcon = (props: IconProps) => (
  <Icon strokeWidth={2} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const ArrowLeftIcon = (props: IconProps) => (
  <Icon strokeWidth={2} {...props}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Icon>
);

export const CheckIcon = (props: IconProps) => (
  <Icon strokeWidth={2.8} {...props}>
    <path d="m5 12 5 5 9-10" />
  </Icon>
);

export const ChevronDownIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="m7 10 5 5 5-5" />
  </Icon>
);

export const ChevronLeftIcon = (props: IconProps) => (
  <Icon strokeWidth={2} {...props}>
    <path d="m15 6-6 6 6 6" />
  </Icon>
);

export const SearchIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Icon>
);

export const PlusIcon = (props: IconProps) => (
  <Icon strokeWidth={2} {...props}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);

export const TrendIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="m4 16 5-5 4 4 7-7" />
    <path d="M15 8h5v5" />
  </Icon>
);

export const ClockIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l2.5 2" />
  </Icon>
);

export const TruckIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="6" cy="17" r="2.5" />
    <circle cx="18" cy="17" r="2.5" />
    <path d="M8.5 17h7M3 6h10v9M13 9h4l3 4v4" />
  </Icon>
);

export const ImageIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <circle cx="9" cy="10" r="2" />
    <path d="m21 16-5-5-9 9" />
  </Icon>
);

export const MenuIcon = (props: IconProps) => (
  <Icon strokeWidth={2} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const CloseIcon = (props: IconProps) => (
  <Icon strokeWidth={2} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);
