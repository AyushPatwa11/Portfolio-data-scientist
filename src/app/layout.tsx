import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { themeConfig } from '@/config/theme';
import { constructMetadata, getPersonJsonLd } from '@/lib/seo';
import '@/styles/globals.css';

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getPersonJsonLd();

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth antialiased">
      <body className="bg-background text-text-primary font-sans min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme={themeConfig.defaultTheme}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
