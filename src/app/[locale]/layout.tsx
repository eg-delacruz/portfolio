import { ThemeProvider } from 'next-themes';

//Fonts
import { roboto, fira } from '@font/font';

//Styles
import '@styles/normalize.css';
import '@styles/globals.css';

//Components
import Header from '@components/specificUse/Header';
import Footer from '@components/specificUse/Footer';

//Types
type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  return (
    //We specify data-theme and style to match the attributes in the server and in the client and avoid mismatching errors
    <html
      suppressHydrationWarning
      lang={locale}
      data-theme='dark'
      style={{ colorScheme: 'dark' }}
    >
      {/* makes browser color match website */}
      <meta name='theme-color' content='#ffffff' />

      {/* allows search engines to find this page */}
      <meta name='robots' content='index, follow' />

      {/* Favicon */}
      {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        /> */}
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
      <link rel='manifest' href='favicon/manifest.json' />
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
        <ThemeProvider defaultTheme={'dark'} enableSystem={false}>
          <Header locale={locale} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
