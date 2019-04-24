import React from 'react';
import MainBackground from '../component/mainBackground';
import MainSketch from '../component/mainSketch';
import Mission from '../component/mission';
import HowItWorks from '../component/howItWorks';
import Email from '../component/email';

const Index = () => (
  <div>
    <MainBackground />
    <Mission />
    <MainSketch />
    <div className="padding" />
    <HowItWorks />
    <div className="padding" />
    <Email />
    <div className="padding" />
    <style jsx>{`
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
