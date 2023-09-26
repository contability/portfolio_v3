'use client';

import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { palette } from '@styles/theme';
import Link from 'next/link';
import NavigationDefault from '@component/navigation/NavigationDefault';

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${palette.BACK_DEFAULT};
  color: ${palette.LINE};
  font-family: Montserrat, sans-serif;

  .branding__section-wrapper {
    padding-left: 10%;
    display: flex;

    @media (max-width: 1024px) {
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

      @media (max-width: 1024px) {
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

      @media (max-width: 1024px) {
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

        @media (max-width: 1024px) {
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

  @media screen and (max-width: 600px) {
    padding: 0 2% 0 2%;

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
      <NavigationDefault />
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
          <Link href="/services/work" className="branding__section-right-menu">
            work
          </Link>
          <Link href="/" className="branding__section-right-menu">
            about
          </Link>
          <Link href="/" className="branding__section-right-menu"></Link>
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
