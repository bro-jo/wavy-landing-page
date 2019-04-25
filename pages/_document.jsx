import React from 'react';
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <title>웨이비</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <meta name="theme-color" content="#80d0c7" />
      </Head>
      <body>
      <Main />
      <NextScript />
      <style jsx global>{`
        body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          width: 100vw;
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css?family=Anton|Do+Hyeon|Gothic+A1|Lato" rel="stylesheet" />
      </body>
      </html>
    );
  }
}
