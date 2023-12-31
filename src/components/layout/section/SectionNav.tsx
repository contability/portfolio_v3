// 'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { SectionNavProps } from '../../../types/work';

const SectionNavContainer = styled.section`
  width: 60vw;
  height: 90vh;
  float: right;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  text-align: center;
  flex-direction: column;
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
  overflow: auto;

  @media (max-width: 1024px) {
    height: fit-content;
    width: 100%;
  }

  .section-nav__menu {
    font-family: Montserrat, sans-serif;
    z-index: 100;
    text-align: left;
    text-transform: uppercase;
    font-size: 9vw;
    font-weight: 300;
    line-height: 0.95em;
    text-decoration: none;
    display: block;
    position: relative;
    letter-spacing: -10px;
    font-weight: 400;
    text-decoration: none;
    font-style: italic;
    transition:
      transform 0.3s ease-in-out,
      color 0.3s ease-in-out,
      font-size 0.3s ease-in-out;

    @media (max-width: 1024px) {
      font-size: 13vw;
    }

    &:hover {
      font-weight: 400;
      transform: translate(5px);
    }
  }

  &.fade {
    opacity: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    /* padding-top: 10vh; */
    max-height: 50vh;

    @media screen and (max-width: 1024px) {
      padding-top: 5vh;
    }
  }

  a {
    max-width: 100%;
  }

  p {
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    padding: 0 2% 0 2%;
    margin-left: 0;

    .section-nav {
      margin-left: 0 !important;
      .section-nav__menu {
        letter-spacing: -2px !important;
        transform: translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
      }
    }
  }

  /* @media (max-width: 750px) {
    .section-nav__menu {
      -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
      -moz-transform: translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
      -ms-transform: translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
      transform: translate3d(0, 0, 0) scale3d(0, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
    }
  } */
`;

const SectionNav = ({ items, isLink = true }: SectionNavProps) => {
  useEffect(() => {
    document.querySelector('.section-nav')?.classList.remove('fade');
  }, []);

  return (
    <SectionNavContainer className="section-nav fade scrollbar-hide">
      <ul>
        {items.map((item, itemIndex) => (
          <li key={`section-navigation__${itemIndex}`}>
            {isLink ? (
              <Link href={item.href} className="section-nav__menu">
                {item.label}
              </Link>
            ) : (
              <a href={item.href} className="section-nav__menu">
                {item.label}
              </a>
            )}
            <p>{item.itemDesc && `${item.itemDesc} -`}</p>
          </li>
        ))}
      </ul>
    </SectionNavContainer>
  );
};

export default React.memo(SectionNav);
