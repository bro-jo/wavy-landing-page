import React from 'react';

const Mission = () => (
  <div>
    <div className="mission-wrapper">
      <div className="mission">
        <p className="productTitle">WAVY +</p>
        <p className="mainMessage">건강한 환경에서 일하세요</p>
        <p className="subMessage">웨이비 플러스는 전자파 등 유해 환경을 감지하여 사무 환경 개선을 돕는 IoT 기기입니다.</p>
      </div>
    </div>
    <style jsx>{`
      .mission-wrapper {
        position: relative;
        width: 45%;
        padding-top: 70px;
        padding-left: 70px;
        padding-right: 80px;
        padding-bottom: 50px;
      }

      @media screen and (max-width: 550px) {
        .mission-wrapper {
          width: 90%;
          padding: 10px;
          margin-bottom: 50px;
        }
      }

      p {
        color: white;
      }

      .productTitle {
        font-size: 24px;
        word-break: keep-all;
        font-family: 'Lato', sans-serif;
      }

      .mainMessage {
        font-size: 42px;
        word-break: keep-all;
        font-weight: 500;
        font-family: 'Do Hyeon', sans-serif;
      }

      .subMessage {
        padding-right: 70px;
        font-size: 16px;
        font-weight: 300;
        word-break: keep-all;
        font-family: 'Gothic A1', sans-serif;
      }

    `}</style>
  </div>
);

export default Mission;
