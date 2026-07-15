import type { Metadata } from 'next';
import { fontOutfit, fontInter, fontMono, fontJapanese } from './fonts';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { siteConfig } from '@/config/site';
import { seoConfig } from '@/config/seo';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: seoConfig.openGraph,
  twitter: seoConfig.twitter,
  robots: seoConfig.robots,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Construct JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: 'Data Science & Computer Science Student',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'B.Tech Computer Science Engineering',
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontOutfit.variable} ${fontInter.variable} ${fontMono.variable} ${fontJapanese.variable} scroll-smooth antialiased`}
    >
      <body className="bg-background text-text-primary font-sans min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
