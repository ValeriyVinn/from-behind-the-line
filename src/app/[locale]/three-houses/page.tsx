import ThreeHouses from "./ThreeHousesPage";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; // розпаковуємо проміс
  return <ThreeHouses locale={locale} />; // лише клієнтська сторінка
}
