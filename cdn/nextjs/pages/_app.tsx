import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';

export const DONATE_SDK_LATEST_VERSION = '1.0.28';
const DONATE_SDK_URL = `https://cdn.jsdelivr.net/npm/donate3-sdk@${DONATE_SDK_LATEST_VERSION}/dist/webpack/bundle.js`;

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Script src={DONATE_SDK_URL} />
    <Component {...pageProps} />
  </>
}
