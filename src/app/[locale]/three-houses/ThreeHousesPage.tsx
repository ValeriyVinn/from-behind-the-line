"use client";

import ThreeHouses from "./ThreeHousesContent";

interface Props {
  locale: string;
}

export default function FirstPage({ locale }: Props) {
  return (
    <div className="flex">
      {/* <Sidebar locale={locale} /> */}

      <main className="p-8 flex-1">
        {/* <LocaleSwitcher locale={locale} /> */}
        <ThreeHouses locale={locale} />
      </main>
    </div>
  );
}