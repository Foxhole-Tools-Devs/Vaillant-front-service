import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Baloo_Bhaina_2, Encode_Sans_SC, Exo } from 'next/font/google';
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type ApplicationProps = AppProps & {
  session: Session;
}

const exo = Exo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo',
});

const encodeSansSC = Encode_Sans_SC( {
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-encode-sans-sc',
});

const balooBhaina2 = Baloo_Bhaina_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baloo-bhaina-2',
})

export default function App( {session ,Component, pageProps}: ApplicationProps ){
  return (
    <main className={`${exo.variable} ${encodeSansSC.variable} ${balooBhaina2.variable}`}>
      <SessionProvider session={ session }>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  )
}
