import React from 'react';
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
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
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </body>
      </html>
    );
  }
}
