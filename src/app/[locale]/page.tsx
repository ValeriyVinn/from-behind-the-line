export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div>
      {locale === "en" ? "Hello, choose a page" : "Привіт, оберіть сторінку"}
    </div>
  );
}
