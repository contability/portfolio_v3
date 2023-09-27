'use client';

import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { palette } from '@styles/theme';
import Link from 'next/link';
import NavigationDefault from '@component/navigation/NavigationDefault';
import SectionDesc from '@component/layout/section/SectionDesc';
import SectionNav from '@component/layout/section/SectionNav';

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
  }

  @media (max-width: 600px) {
    padding: 0 5% 0 2%;
  }
`;

const RootPage = () => {
  useEffect(() => {
    document.querySelector('.branding__section-right')?.classList.remove('fade');
  }, []);
  return (
    <Container>
      <NavigationDefault />
      <div className="branding__section-wrapper">
        <SectionDesc
          descriptionHeader="shinhyungjung"
          descriptions={[
            'I am a front-end developer living in Seoul',
            'I believe in working together to successfully complete projects',
            'I enjoy constantly learning and developing',
          ]}
        />
        <SectionNav
          items={[
            {
              label: 'work',
              href: '/services/work',
            },
            {
              label: 'about',
              href: '/',
            },
            {
              label: 'contact',
              href: '/',
            },
          ]}
        />
      </div>
    </Container>
  );
};

RootPage.layout = 'abc';

export default RootPage;
