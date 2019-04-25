import React from 'react';
import Iframe from 'react-iframe'

const Footer = () => (
  <div className="footer">
    <div>
      <p className="companyName">웨이비(WAVY)</p>
      <p><br />-<br /><br /></p>
      <p><span>대표</span> 조형재</p>
      <p><span>이메일</span> bro.jo@wavy.plus</p>
    </div>
    <style jsx>{`
      .footer {
        min-height: 200px;
        padding: 30px;
        background: #f4f4f4;
      }

      .footer p {
        font-size: 14px;
        margin: 8px;
      }

      .footer span {
        font-family: 'Do Hyeon', sans-serif;
      }

      .footer .companyName {
        font-size: 18px;
        font-family: 'Lato', sans-serif;
      }

    `}</style>
  </div>
);

export default Footer;
