import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400', '500']
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  weight: ['400', '500', '600']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${playfair.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}