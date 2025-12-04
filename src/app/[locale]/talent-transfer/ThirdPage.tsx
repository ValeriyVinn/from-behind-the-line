"use client";

import ThirdContent from "./ThirdContent";

interface Props {
  locale: string;
}

export default function FirstPage({ locale }: Props) {
  return (
    <div className="flex">
      {/* <Sidebar locale={locale} /> */}

      <main className="p-8 flex-1">
        {/* <LocaleSwitcher locale={locale} /> */}
        <ThirdContent locale={locale} />
      </main>
    </div>
  );
}
