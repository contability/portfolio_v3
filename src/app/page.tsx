'use client';

import React from 'react';
import { styled } from 'styled-components';
import { palette } from '@styles/theme';
import Link from 'next/link';

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${palette.BACK_DEFAULT};
  color: ${palette.LINE};

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

    .branding__section-left {
      width: 25%;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      display: flex;
      /* position: fixed; */
    }
    .branding__section-right {
      width: 65%;
      height: 90vh;
      float: right;
      grid-column-gap: 16px;
      grid-row-gap: 16px;
      text-align: center;
      flex-direction: column;
      grid-template-rows: auto auto;
      grid-template-columns: 1fr 1fr;
      grid-auto-columns: 1fr;
      justify-content: center;
      align-items: center;
      padding-top: 5vh;
      display: flex;
      position: relative;
      top: 0%;
      bottom: 0%;
      left: auto;
      right: 0%;

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
          transform 0.3s ease-in-out,
          color 0.3s ease-in-out,
          font-size 0.3s ease-in-out;
        display: block;
        position: relative;

        &:hover {
          transition:
            transform 0.3s ease-in-out,
            color 0.3s ease-in-out,
            font-size 0.3s ease-in-out,
            font-style 0s ease-in-out;
          font-style: italic;
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
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
  }
`;

const RootPage = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li className="branding__nav-menu">
            <Link href="/">GIT</Link>
          </li>
          <li className="branding__nav-menu">
            <Link href="/">GIT</Link>
          </li>
          <li className="branding__nav-menu">
            <Link href="/">GIT</Link>
          </li>
          <li className="branding__nav-line" />
        </ul>
        <p className="branding__nav-label">©/2023</p>
      </nav>
      <div className="branding__section-wrapper">
        <section className="branding__section-left">
          <p>SHINHYUNGJUNG</p>
          <p>
            I am a front-end developer living in Seoul <br />
            I believe in working together to successfully complete projects <br />I enjoy constantly learning and
            developing
          </p>
        </section>
        <section className="branding__section-right">
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
