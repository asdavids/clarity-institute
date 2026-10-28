// pages/_document.js
// Sets the page language for every page (fixes Bing's "Meta Language tag missing" warning).
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
