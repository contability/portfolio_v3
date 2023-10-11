'use client';

import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { palette } from '@styles/theme';
import Link from 'next/link';
import NavigationDefault from '@component/navigation/NavigationDefault';
import SectionDesc from '@component/layout/section/SectionDesc';
import SectionNav from '@component/layout/section/SectionNav';
import TransitionBackground from '@component/layout/TransitionBackground';
import AppLayout from '@component/layout/AppLayout';

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
    <>
      <TransitionBackground theme="dark" />
      <AppLayout isDown={true}>
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
              isLink={false}
              items={[
                {
                  label: 'experience',
                  href: '/services/experience',
                },
                {
                  label: 'about',
                  href: '/services/about',
                },
                {
                  label: 'contact',
                  href: '/services/contact',
                },
              ]}
            />
          </div>
        </Container>
      </AppLayout>
    </>
  );
};

RootPage.layout = 'abc';

export default RootPage;
