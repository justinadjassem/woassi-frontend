export default function SiteLayout({ children }: LayoutProps<"/">) {
  return <div className="theme-site min-h-dvh bg-canvas text-fg">{children}</div>;
}
