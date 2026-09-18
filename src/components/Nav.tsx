"use client";
import Link from "next/link";
import { Logo } from "./ds/Logo";

const ITEMS: [string, string][] = [
  ["/work", "Works"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export function Nav({ page, logoTone }: { page: "work" | "about" | "contact"; logoTone?: "ink" | "cream" }) {
  return (
    <header className="nav">
      <Link className="logobtn" href="/" aria-label="Home">
        <Logo variant="mark" size={44} tone={logoTone || "ink"} />
      </Link>
      <nav className="navlinks">
        {ITEMS.map(([href, label]) => (
          <Link
            key={href}
            className="navlink"
            href={href}
            aria-current={href === `/${page}` ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
