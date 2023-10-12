'use client';

import { palette } from '@styles/theme';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';

const NavigationContainer = styled.nav<{ $colorPalette?: ThemeProps }>`
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
  background-color: ${({ $colorPalette }) => $colorPalette?.BACKGROUND || 'transparent'};
  color: ${({ $colorPalette }) => $colorPalette?.LINE || 'transparent'};

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
      background-color: ${({ $colorPalette }) => $colorPalette?.LINE || 'transparent'};
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
    padding: 2%;
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
        background-color: ${({ $colorPalette }) => $colorPalette?.LINE || 'transparent'};
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

const NavigationBar = () => {
  const path = usePathname().split('/');
  const pathName = path[path.length - 1];
  const [colorPalette, setColorPalette] = useState<ThemeProps>();

  useEffect(() => {
    if (!pathName || pathName === 'about') {
      setColorPalette({
        LINE: palette.LINE,
        BACKGROUND: palette.BACK_DEFAULT,
      });
    } else {
      setColorPalette({
        LINE: palette.LINE_WHITE,
        BACKGROUND: palette.FONT_BLACK,
      });
    }
  }, [pathName]);

  return (
    <NavigationContainer $colorPalette={colorPalette}>
      <ul>
        <NavigationMenu pathName={pathName} />
        <li className="branding__nav-line" />
      </ul>
      <p className="branding__nav-label">since 2020</p>
    </NavigationContainer>
  );
};

export default React.memo(NavigationBar);

const NavigationMenu = ({ pathName }: { pathName: string }) => {
  if (!pathName) {
    return (
      <>
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
      </>
    );
  }

  if (pathName === 'about' || pathName === 'contact' || pathName === 'experience') {
    return (
      <li className="branding__nav-menu">
        <a href="/">HOME</a>
      </li>
    );
  }

  return (
    <>
      <li className="branding__nav-menu">
        <a href="/">HOME</a>
      </li>
      <li className="branding__nav-menu">
        <a href="/services/experience">EXP</a>
      </li>
    </>
  );
};
