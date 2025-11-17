"use client";

import { useState, useEffect } from "react";

interface Props {
  locale: string;
}

export default function FirstContent({ locale }: Props) {
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const load = async () => {
      if (locale === "en") {
        const mod = await import("./page.en.mdx");
        setContent(() => mod.default);
      } else if (locale === "uk") {
        const mod = await import("./page.uk.mdx");
        setContent(() => mod.default);
      }
    };
    load();
  }, [locale]);

  if (!Content) return <div>Loading...</div>;

  return <Content />;
}

