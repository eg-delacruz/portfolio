import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

//Fonts
import { roboto, fira } from '@font/font';

//Styles
import '@styles/normalize.css';
import '@styles/globals.css';

//Components
import Providers from '@components/generalUse/providers';
import Header from '@components/specificUse/Header/index';
import Footer from '@components/specificUse/Footer/index';

//Types
//imported
import type { Metadata } from 'next';
//local
type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

//Metadata
export const metadata: Metadata = {
  title: 'Gerardo De La Cruz',
  description: "Gerardo De La Cruz's portfolio",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'de' }];
}

//TODO: Add favicon and everything that was in _document.js
export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    //We specify data-theme and style to match the attributes in the server and in the client and avoid mismatching errors
    <html lang={locale} data-theme='dark' style={{ colorScheme: 'dark' }}>
      <Providers>
        {/* makes browser color match website */}
        <meta name='theme-color' content='#ffffff' />

        {/* allows search engines to find this page */}
        <meta name='robots' content='index, follow' />

        {/* Favicon */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        {/* background color of tile application in windows */}
        <meta name='msapplication-TileColor' content='#da532c' />
        {/* makes browser color match website */}
        <meta name='theme-color' content='#ffffff' />
        {/* Esta última línea debe estar así para evitar scroll horizontal por animaciones */}
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />

        <body className={`${roboto.variable} ${fira.variable}`}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header locale={locale} />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </body>
      </Providers>
    </html>
  );
}
