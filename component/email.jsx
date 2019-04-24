import React from 'react';
import Iframe from 'react-iframe'

const Email = () => (
  <div>
    <div className="emailFrameWrapper">
      <div className="emailFrame">
        <Iframe
          id="iframe"
          url="https://page.stibee.com/subscriptions/34474"
          display="inline-block"
          width={280}
          height={390}
          border={0}
          frameBorder={0}
          scrolling={false}
          overflow="hidden"
        />
      </div>
    </div>
    <style jsx>{`
      .emailFrameWrapper {
        display: inline-block;
        width: 100%;
        margin: 0 auto;
        text-align: center;
      }

      .emailFrameWrapper > .emailFrame {
        display: inline-block;
        margin: 0 auto;
        height: 375px;
        overflow: hidden;
        background: #fcfcfc;
        -webkit-box-shadow: 1px 1px 8px 1px rgba(170,170,170,1);
        -moz-box-shadow: 1px 1px 8px 1px rgba(170,170,170,1);
        box-shadow: 1px 1px 8px 1px rgba(170,170,170,1);
      }

      .emailFrameWrapper > .emailFrame body {
        background-color: #ffffff;
      }
    `}</style>
  </div>
);

export default Email;
