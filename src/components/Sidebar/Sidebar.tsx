"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar({ locale }: { locale: string }) {
  const pathname = usePathname();

  const links = [
    { href: `/${locale}/first`, label: locale === "en" ? "First Page" : "Перша Сторінка" },
    { href: `/${locale}/second`, label: locale === "en" ? "Second Page" : "Друга Сторінка" },
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
