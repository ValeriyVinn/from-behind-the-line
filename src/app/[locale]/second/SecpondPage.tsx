"use client";

import FirstContent from "./SecondContent";

interface Props {
  locale: string;
}

export default function FirstPage({ locale }: Props) {
  return (
    <div className="flex">
      {/* <Sidebar locale={locale} /> */}

      <main className="p-8 flex-1">
        {/* <LocaleSwitcher locale={locale} /> */}
        <FirstContent locale={locale} />
      </main>
    </div>
  );
}
