import FirstPage from "./SecpondPage";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; // розпаковуємо проміс
  return <FirstPage locale={locale} />; // лише клієнтська сторінка
}


