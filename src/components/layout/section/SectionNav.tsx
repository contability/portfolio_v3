'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { styled } from 'styled-components';

interface SectionNavProps {
  items: {
    label: string;
    href: string;
  }[];
}

const SectionNavContainer = styled.section`
  width: 65%;
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

  @media (max-width: 1024px) {
    height: fit-content;
    width: 100%;
  }

  .section-nav__menu {
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

  &.fade {
    opacity: 0;
  }

  @media screen and (max-width: 600px) {
    padding: 0 2% 0 2%;

    .section-nav {
      margin-left: 0 !important;
      .section-nav__menu {
        letter-spacing: -2px !important;
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

const SectionNav = ({ items }: SectionNavProps) => {
  useEffect(() => {
    document.querySelector('.section-nav')?.classList.remove('fade');
  }, []);

  return (
    <SectionNavContainer className="section-nav fade">
      {items.map((item, itemIndex) => (
        <Link key={`section-navigation__${itemIndex}`} href={item.href} className="section-nav__menu">
          {item.label}
        </Link>
      ))}
    </SectionNavContainer>
  );
};

export default SectionNav;
