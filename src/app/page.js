"use client";
import RootLayout from './layout'  
import { useEffect } from 'react';

export default function Home({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <main className=''>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </main>
  )
}
