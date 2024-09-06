import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { oldFontsCDN } from 'src/utils/strings';

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head>
        <link rel='stylesheet' href={oldFontsCDN} />
        <link rel='icon' href='/images/favicon.png' />
        <meta name='author' content='Lucas Luz' />
        <meta
          name='keywords'
          content='portfolio, portfólio, website, freelancer, desenvolvedor,
                programador, lucas luz, lucas felipe luz, dev luz, devluz, frontend,
                backend, fullstack'
        />

        <meta
          name='description'
          content='Meu nome é Lucas Luz. Transformo suas ideias em realidade digital.'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
