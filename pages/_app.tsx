// pages/_app.tsx
import type { AppProps } from "next/app";
import 'magnific-popup/dist/magnific-popup.css';
import '../styles/globals.css';
import { useEffect } from 'react';
import $ from 'jquery';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // expose jquery globally first
      (window as any).$ = (window as any).jQuery = $;
      // then require magnific-popup so it finds window.jQuery
      require('magnific-popup');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
