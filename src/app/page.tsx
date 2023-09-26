'use client';

import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { palette } from '@styles/theme';
import Link from 'next/link';

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${palette.BACK_DEFAULT};
  color: ${palette.LINE};
  font-family: Montserrat, sans-serif;

  nav {
    z-index: 50;
    width: 6%;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 30px;
    display: flex;
    position: fixed;

    .branding__nav-menu {
      flex: 0 auto;
      margin-bottom: 40px;
      transform: rotate(-90deg);
      text-align: center;
      letter-spacing: 5px;
      text-transform: uppercase;
      font-family: Montserrat, sans-serif;
      font-size: 10px;
      font-weight: 500;
      transition: opacity 0.3s;
      display: block;

      &:hover {
        text-decoration: line-through;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      /* gap: 10px; */
      align-items: center;

      .branding__nav-line {
        width: 1px;
        height: 100px;
        background-color: ${palette.LINE};
        margin-top: 10px;
        margin-bottom: 80px;
      }
    }

    .branding__nav-label {
      flex: 0 auto;
      margin-bottom: 40px;
      transform: rotate(-90deg);
      text-align: center;
      letter-spacing: 5px;
      text-transform: uppercase;
      font-family: Montserrat, sans-serif;
      font-size: 10px;
      font-weight: 500;
      transition: opacity 0.3s;
      display: block;
    }
  }

  .branding__section-wrapper {
    padding-left: 10%;
    display: flex;

    @media (max-width: 890px) {
      flex-direction: column;
      height: fit-content;
    }

    .branding__section-left {
      width: 25%;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      display: flex;
      /* position: fixed; */

      @media (max-width: 890px) {
        height: fit-content;
        width: 100%;
        padding-top: 30%;
      }

      .branding__section-header {
        margin-bottom: 2vh;
        padding-top: 5%;
        overflow: hidden;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-family: Montserrat, sans-serif;
        font-size: 20px;
        font-weight: 600;

        /* -webkit-transform: translate3d(0, 39px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
        -moz-transform: translate3d(0, 39px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
        -ms-transform: translate3d(0, 39px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
        transform: translate3d(0, 39px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
        transform-style: preserve-3d; */
      }

      .branding__section-description {
        font-family: Montserrat, sans-serif;
        /* transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
          skew(0deg, 0deg);
        transform-style: preserve-3d;
        -webkit-transform: translate3d(0, 178px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
        -moz-transform: translate3d(0, 178px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
        -ms-transform: translate3d(0, 178px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
        transform: translate3d(0, 178px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0); */

        &:not(:last-child) {
          margin-bottom: 5%;
        }
      }
    }

    .branding__section-right {
      width: 65%;
      height: 90vh;
      float: right;
      grid-column-gap: 16px;
      grid-row-gap: 16px;
      text-align: center;
      flex-direction: column;
      /* grid-template-rows: auto auto;
      grid-template-columns: 1fr 1fr;
      grid-auto-columns: 1fr; */
      justify-content: center;
      align-items: start;
      margin-top: 5vh;
      margin-left: 5vh;
      display: flex;
      position: relative;
      top: 0%;
      bottom: 0%;
      left: auto;
      right: 0%;
      opacity: 1;
      transition-duration: 1s;
      transition-property: opacity;

      @media (max-width: 890px) {
        height: fit-content;
        width: 100%;
      }

      .branding__section-right-menu {
        font-family: Montserrat, sans-serif;
        z-index: 100;
        text-align: left;
        text-transform: uppercase;
        font-size: 11vw;
        font-weight: 300;
        line-height: 0.95em;
        text-decoration: none;
        transition:
          transform 0.6s ease-in-out,
          color 0.3s ease-in-out,
          font-size 0.3s ease-in-out;
        display: block;
        position: relative;
        letter-spacing: -10px;

        @media (max-width: 890px) {
          font-size: 15vw;
        }

        &:hover {
          font-style: italic;
          -webkit-transform: skewX(-7deg);
          -moz-transform: skewX(-7deg);
          -o-transform: skewX(-7deg);
          transform: skewX(-7deg);
        }
      }
    }

    .fade {
      opacity: 0;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 0 2% 0 2%;
    nav {
      width: 100%;
      height: auto;
      flex-direction: row;
      padding-top: 2%;
      padding-bottom: 0;
      padding-left: 0;
      position: static;

      ul {
        flex-direction: row;
        gap: 10px;
        align-items: center;

        .branding__nav-menu {
          flex: 0 auto;
          margin: 0;
          transform: rotate(0deg);
          text-align: center;
          letter-spacing: 5px;
          text-transform: uppercase;
          font-family: Montserrat, sans-serif;
          font-size: 10px;
          font-weight: 500;
          transition: opacity 0.3s;
          display: block;

          &:hover {
            text-decoration: line-through;
          }
        }

        .branding__nav-line {
          width: 100px;
          height: 1px;
          background-color: ${palette.LINE};
          margin: 0;
        }
      }

      .branding__nav-label {
        flex: 0 auto;
        margin: 0;
        transform: rotate(0deg);
        text-align: center;
        letter-spacing: 5px;
        text-transform: uppercase;
        font-family: Montserrat, sans-serif;
        font-size: 10px;
        font-weight: 500;
        transition: opacity 0.3s;
        display: block;
      }
    }

    .branding__section-right {
      margin-left: 0 !important;
      .branding__section-right-menu {
        letter-spacing: -2px !important;
      }
    }
  }

  /* @media (max-width: 750px) {
    .branding__section-right-menu {
      -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
      -moz-transform: translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
      -ms-transform: translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
      transform: translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
    }
  } */
`;

const RootPage = () => {
  useEffect(() => {
    document.querySelector('.branding__section-right')?.classList.remove('fade');
  }, []);
  return (
    <Container>
      <nav>
        <ul>
          <li className="branding__nav-menu">
            <Link href="https://github.com/contability" target="_blank">
              GIT
            </Link>
          </li>
          <li className="branding__nav-menu">
            <Link href="https://open.kakao.com/o/swjepgJf" target="_blank">
              KKO
            </Link>
          </li>
          <li className="branding__nav-line" />
        </ul>
        <p className="branding__nav-label">since 2020</p>
      </nav>
      <div className="branding__section-wrapper">
        <section className="branding__section-left">
          <h3 className="branding__section-header">SHINHYUNGJUNG</h3>
          <p className="branding__section-description">I am a front-end developer living in Seoul</p>
          <p className="branding__section-description">
            I believe in working together to successfully complete projects
          </p>
          <p className="branding__section-description">I enjoy constantly learning and developing</p>
        </section>
        <section className="branding__section-right fade">
          <Link href="/" className="branding__section-right-menu">
            work
          </Link>
          <Link href="/" className="branding__section-right-menu">
            about
          </Link>
          <Link href="/" className="branding__section-right-menu">
            shop
          </Link>
          <Link href="/" className="branding__section-right-menu">
            contact
          </Link>
        </section>
      </div>
    </Container>
  );
};

RootPage.layout = 'abc';

export default RootPage;
