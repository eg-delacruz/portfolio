import { Roboto, Fira_Sans } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--roboto',
});

export const fira = Fira_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--fira',
});
