import { useState } from "react";
import { Menu, X } from "lucide-react";
import { img, nav } from "./content";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink-foreground/10 bg-ink/95 text-ink-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-10">
        <a href="#home" className="shrink-0" aria-label="ساتا للاستشارات الهندسية — الرئيسية">
          <img src={img.logo} alt="شعار ساتا للاستشارات الهندسية" width={600} height={295} className="h-10 w-auto" />
        </a>
        <nav aria-label="القائمة الرئيسية" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-ink-foreground/75 transition-colors hover:text-accent">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden border border-accent px-5 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground sm:inline-block">
            اطلب استشارة
          </a>
          <button type="button" onClick={() => setOpen(!open)} className="p-2 lg:hidden" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="قائمة الجوال" className="border-t border-ink-foreground/10 lg:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-4">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-ink-foreground/10 py-3 text-ink-foreground/85">{n.label}</a>
              </li>
            ))}
            <li className="pt-4">
              <a href="#contact" onClick={() => setOpen(false)} className="block bg-accent py-3 text-center text-accent-foreground">اطلب استشارة</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
