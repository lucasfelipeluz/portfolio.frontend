import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { oldFontsCDN } from 'src/utils/strings';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='stylesheet' href={oldFontsCDN} />
        <link rel='icon' href='/images/favicon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
