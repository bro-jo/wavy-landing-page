import React from 'react';

const MainSketch = () => (
  <div className="wavySketchImage-wrapper">
    <div className="wavySketchImage" />
    <style jsx>{`
      .wavySketchImage-wrapper {
        position: relative;
        width: 100%;
        margin: 0;
        padding: 0;
      }

      .wavySketchImage {
        position: absolute;
        top: 20px;
        right: 2%;
        bottom: 20%;
        width: 500px;
        height: 500px;
        background: url("/static/wavy_sketch.png");
        background-size: cover;
        background-position: center center;
        z-index: 0;
      }

      @media screen and (max-width: 1400px) {
        .wavySketchImage {
          width: 400px;
          height: 400px;
        }
      }

      @media screen and (max-width: 1300px) {
        .wavySketchImage {
          width: 370px;
          height: 370px;
        }
      }

      @media screen and (max-width: 1180px) {
        .wavySketchImage {
          width: 330px;
          height: 330px;
        }
      }

      @media screen and (max-width: 980px) {
        .wavySketchImage {
          right: 1%;
          width: 300px;
          height: 300px;
        }
      }

      @media screen and (max-width: 880px) {
        .wavySketchImage {
          right: 0%;
          width: 280px;
          height: 280px;
        }
      }

      @media screen and (max-width: 720px) {
        .wavySketchImage {
          right: -4%;
          width: 265px;
          height: 265px;
        }
      }

      @media screen and (max-width: 550px) {
        .wavySketchImage {
          position: relative;
          margin-top: 150px;
          margin-right: auto;
          margin-bottom: 30px;
          margin-left: auto;
          right: auto;
          left: auto;
          width: 300px;
          height: 300px;
        }
      }

      @media screen and (max-width: 380px) {
        .wavySketchImage {
          margin-top: 100px;
        }
    `}</style>
  </div>
);

export default MainSketch;
