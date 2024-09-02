import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="cs" className="scroll-smooth focus:scroll-auto">
      <Head>
        <meta name="description" content="proskolu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
