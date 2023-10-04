'use client';

import Card from '@component/layout/Card';
import { palette } from '@styles/theme';
import styled from 'styled-components';
import { aboutMe } from '../../../public/about';

const AboutMePageContainer = styled.article`
  height: 100vh;
  width: 100vw;
  background-color: ${palette.BACK_DEFAULT};
  color: ${palette.LINE};

  .about__section-wrapper {
    padding-left: 10%;
    padding-right: 20%;
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

      .about__section-contents__header {
        font-size: 15vw;
        letter-spacing: -1.8vw;
      }

      .about__section-contents__main {
        display: flex;
        flex-direction: column;
        gap: 5vw;
      }
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
          <h2 className="about__section-contents__header">About Me</h2>
          <div className="about__section-contents__main">
            {aboutMe.map((item, itemIndex) => (
              <Card key={`introduce-${itemIndex}`} title={item.title} content={item.content} />
            ))}
          </div>
        </section>
      </div>
    </AboutMePageContainer>
  );
};

export default AboutMePage;
