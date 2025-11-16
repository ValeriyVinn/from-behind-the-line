"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LocaleSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const segments = pathname.split("/");
    segments[1] = newLocale; // заміна сегменту /en/first → /uk/first
    router.push(segments.join("/"));
  };

  return (
    <select value={locale} onChange={handleChange} className="mb-6 p-2 border">
      <option value="en">EN</option>
      <option value="uk">UK</option>
    </select>
  );
}

