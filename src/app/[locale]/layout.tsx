import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

//Fonts
import { roboto, fira } from '@font/font';

//Styles
import '@styles/normalize.css';
import '@styles/globals.css';

//Components
import Providers from '@components/generalUse/providers';
import Header from '@components/specificUse/header';

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
        <body className={`${roboto.variable} ${fira.variable}`}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <footer>Footer</footer>
          </NextIntlClientProvider>
        </body>
      </Providers>
    </html>
  );
}
