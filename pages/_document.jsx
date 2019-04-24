import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head />
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
      </body>
      </html>
    );
  }
}
