import React from 'react';

const MainBackground = () => (
  <div>
    <div className="mainBackgroundGradient" />
    <div className="mainBackgroundWhite" />
    <style jsx>{`
      .mainBackgroundGradient {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 200px;
        left: 0;
        max-height: 600px;
        z-index: -2;

        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#13547a+0,80d0c7+100 */
        background: #13547a; /* Old browsers */
        background: -moz-linear-gradient(45deg, #13547a 0%, #80d0c7 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #13547a 0%,#80d0c7 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #13547a 0%,#80d0c7 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#13547a', endColorstr='#80d0c7',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
      }

      .mainBackgroundWhite {
        position: absolute;
        top: -20%;
        width: 55%;
        right: -15%;
        bottom: -20%;
        transform: rotate(20deg);
        z-index: -1;
        background-color: white;
      }

      @media screen and (max-width: 550px) {
        .mainBackgroundWhite {
          width: 45%;
          right: -42%;
          max-height: 650px;
        }

        .mainBackgroundGradient {
          max-height: 400px;
        }
      }
    `}</style>
  </div>
);

export default MainBackground;
