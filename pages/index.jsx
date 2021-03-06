import React from 'react';
import MainBackground from '../component/mainBackground';
import MainSketch from '../component/mainSketch';
import Mission from '../component/mission';
import HowItWorks from '../component/howItWorks';
import Email from '../component/email';
import Footer from '../component/footer';

const Index = () => (
  <div>
    <div className="body">
      <MainBackground />
      <Mission />
      <MainSketch />
      <div className="padding" />
      <HowItWorks />
      <div className="padding" />
      <Email />
      <div className="padding" />
      <Footer />
    </div>
    <style jsx>{`
      .body {
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        width: 100vw;
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      * {
        font-family: 'Gothic A1', sans-serif;
      }

      body {
        overflow-x: hidden;
      }

      .padding {
        height: 100px;
      }
    `}</style>
  </div>
);

export default Index;
