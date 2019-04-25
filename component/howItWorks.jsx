import React from 'react';

const HowItWorks = () => (
  <div>
    <div className="howWrapper">
      <div className="item">
        <div className="icon icon-1" />
        <p className="title">측정</p>
        <p className="description">WAVY는 다차원 센서를 활용하여 유해 환경에 얼마나 노출되어 있는지를 측정합니다.</p>
      </div>
      <div className="item">
        <div className="icon icon-2" />
        <p className="title">분석</p>
        <p className="description">WAVY는 모바일 앱 및 자체 개발한 시스템과 연동하여, 특정 기간마다 얼마나 유해 환경에 있었는지를 분석합니다.</p>
      </div>
      <div className="item">
        <div className="icon icon-3" />
        <p className="title">관리</p>
        <p className="description">분석 데이터를 시각화 해주고, 유해 환경 노출 정도에 따라 적절한 조치를 제안해줍니다.</p>
      </div>
    </div>
    <style jsx>{`
      .howWrapper {
        width: 60vw;
        margin-top: 25vh;
        padding: 10px;
        text-align: center;
      }

      @media screen and (max-width: 1350px) {
        .howWrapper {
          width: 100vw;
          margin-top: 40vh;
          margin-left: 0;
          margin-right: 0;
          padding: 0;
        }
      }

      @media screen and (max-width: 1180px) {
        .howWrapper {
          margin-top: 35vh;
        }
      }

      @media screen and (max-width: 850px) {
        .howWrapper {
          margin-top: 30vh;
        }
      }

      @media screen and (max-width: 550px) {
        .howWrapper {
          width: 100vw;
          margin-top: -50px;
          margin-left: 0;
          padding: 0;
        }
      }

      .howWrapper > .item {
        display: inline-block;
        width: 250px;
        min-height: 100px;
        margin: 10px;
        vertical-align: top;
        text-align: left;
      }

      @media screen and (max-width: 1350px) {
        .howWrapper > .item {
          margin-right: 45px;
          margin-left: 45px;
        }
      }

      @media screen and (max-width: 1150px) {
        .howWrapper > .item {
          margin-right: 12px;
          margin-left: 12px;
        }
      }

      @media screen and (max-width: 850px) {
        .howWrapper > .item {
          display: inline-block;
          margin-top: 20px;
          margin-right: 105px;
          margin-bottom: 20px;
          margin-left: 105px;
        }
      }

      @media screen and (max-width: 550px) {
        .howWrapper > .item {
          margin-right: 15px;
          margin-left: 15px;
        }
      }

      .icon {
        width: 32px;
        height: 32px;
        background-size: cover;
        background-position: center center;
      }

      .icon-1 {
        background-image: url("/static/magnet.png");
      }

      .icon-2 {
        background-image: url("/static/record.png");
      }

      .icon-3 {
        background-image: url("/static/action.png");
      }

      .title {
        font-weight: 500;
        font-size: 20px;
        color: #333333;
        font-family: 'Do Hyeon', sans-serif;
      }

      .description {
        font-weight: 300;
        font-size: 16px;
        color: #555555;
      }
    `}</style>
  </div>
);

export default HowItWorks;
