import React from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./LocaleLayout.module.css";


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Sidebar locale={locale} />
        <LocaleSwitcher locale={locale} />
      </header>

      <div className={styles.body}>
        {/* <aside className={styles.sidebar}>
          
        </aside> */}

        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}

