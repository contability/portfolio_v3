'use client';

import { palette } from '@styles/theme';
import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

interface NavigationHomeProps {
  colorPalette?: typeof palette;
}

const NavigationContainer = styled.nav<{ $colorPalette: typeof palette }>`
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
  color: ${({ $colorPalette }) => $colorPalette.LINE};
  background-color: ${({ $colorPalette }) => $colorPalette.BACK_DEFAULT};

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
      background-color: ${({ $colorPalette }) => $colorPalette.LINE};
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

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    padding: 2% 5% 0 2%;
    position: static;
    /* background-color: ${({ $colorPalette }) => $colorPalette.BACK_DEFAULT}; */

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
        background-color: ${({ $colorPalette }) => $colorPalette.LINE};
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
`;

const NavigationHome = ({ colorPalette = palette }: NavigationHomeProps) => {
  return (
    <NavigationContainer $colorPalette={colorPalette}>
      <ul>
        <li className="branding__nav-menu">
          <Link href="/">HOME</Link>
        </li>
        <li className="branding__nav-line" />
      </ul>
      <p className="branding__nav-label">since 2020</p>
    </NavigationContainer>
  );
};

export default React.memo(NavigationHome);
