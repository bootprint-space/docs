import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
// 1. Import your baseOptions function from your shared configuration file
import { baseOptions } from '@/lib/layout.shared'; 

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Bootprint',
    default: 'Bootprint - Explore the universe',
  },
  description: 'Comprehensive documentation for the Bootprint API.',
  metadataBase: new URL('https://bootprint.space'),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const options = baseOptions();
  let filteredOptions = options;
  if ((options as any).i18n === false) {
    const copy = { ...(options as any) } as any;
    delete copy.i18n;
    filteredOptions = copy;
  }

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider {...(filteredOptions as any)}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}