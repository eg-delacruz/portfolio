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

      {/* Facebook meta tags */}
      <meta property='og:url' content='https://www.gerardodelacruz.com' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Gerardo De La Cruz' />
      <meta
        property='og:description'
        content='Full Stack developer. Discover my skills, projects, languages and certificates.'
      />
      <meta
        property='og:image'
        content='https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/gerardodelacruz.com/Gerardo%20De%20La%20Cruz/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F857fa1e7-4a5d-434c-965f-dfe4c5537d69.jpg%3Ftoken%3DQBSyOI7WFdVRvIuyCXBgO_DqWURo9-D_tU6VQh6Vdbc%26height%3D975%26width%3D731%26expires%3D33259666647/og.png'
      />

      {/* Twitter meta tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content='gerardodelacruz.com' />
      <meta property='twitter:url' content='https://www.gerardodelacruz.com' />
      <meta name='twitter:title' content='Gerardo De La Cruz' />
      <meta
        name='twitter:description'
        content='Full Stack developer. Discover my skills, projects, languages and certificates.'
      />
      <meta
        name='twitter:image'
        content='https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/gerardodelacruz.com/Gerardo%20De%20La%20Cruz/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F857fa1e7-4a5d-434c-965f-dfe4c5537d69.jpg%3Ftoken%3DQBSyOI7WFdVRvIuyCXBgO_DqWURo9-D_tU6VQh6Vdbc%26height%3D975%26width%3D731%26expires%3D33259666647/og.png'
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
