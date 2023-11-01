'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

type props = {
  children: React.ReactNode;
};

const Providers = ({ children }: props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider defaultTheme={'dark'} enableSystem={false}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
