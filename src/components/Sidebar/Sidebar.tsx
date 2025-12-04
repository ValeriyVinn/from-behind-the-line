"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar({ locale }: { locale: string }) {
  const pathname = usePathname();

  const links = [
    { href: `/${locale}/psy-syntax`, label: locale === "en" ? "PsySyntax" : "PsySyntax" },
    { href: `/${locale}/after-sixty`, label: locale === "en" ? "After sixty" : "Після шістидесяти" },
   { href: `/${locale}/talent-transfer`, label: locale === "en" ? "Talent transfer" : "Трансфер таланту" },
   { href: `/${locale}/three-houses`, label: locale === "en" ? "Three Houses" : "Три дома" },
  ];

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
