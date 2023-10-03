'use client';

import { palette } from '@styles/theme';
import styled from 'styled-components';

const AboutMePageContainer = styled.article`
  height: 100vh;
  width: 100vw;
  background-color: ${palette.BACK_DEFAULT};
  color: ${palette.LINE};

  .about__section-wrapper {
    padding-left: 10%;
    display: flex;

    @media (max-width: 1024px) {
      flex-direction: column;
      height: fit-content;
    }

    * {
      font-family: Montserrat, sans-serif;
    }

    .about__section-contents {
      padding-top: 30%;
    }
  }

  @media (max-width: 600px) {
    padding: 0 5% 0 2%;
  }
`;

const AboutMePage = () => {
  return (
    <AboutMePageContainer>
      <div className="about__section-wrapper">
        <section className="about__section-contents">
          <div>About Me</div>
        </section>
      </div>
    </AboutMePageContainer>
  );
};

export default AboutMePage;
