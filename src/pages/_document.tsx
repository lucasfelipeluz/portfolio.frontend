import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { oldFontsCDN } from 'src/utils/strings';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
          rel='stylesheet'
        /> */}
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
