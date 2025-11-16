export const metadata = {
  title: "From behind the line",
  description: "Multilingual site"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
