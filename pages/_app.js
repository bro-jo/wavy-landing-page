import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import AOS from 'aos';

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    console.log('componentDidMount');
    AOS.init({delay: 700, duration: 1000});
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>웨이비</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
