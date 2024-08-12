import { Open_Sans, Fira_Sans } from 'next/font/google';

//TODO: in the future, chech if the Roboto font is working again
export const roboto = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--roboto',
});

export const fira = Fira_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--fira',
});
