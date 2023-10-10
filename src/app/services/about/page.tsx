'use client';

import Card from '@component/layout/Card';
import { palette } from '@styles/theme';
import styled from 'styled-components';
import { aboutMe } from '../../../public/about';
import Img from '@component/image/Img';

const AboutMePageContainer = styled.article`
  width: 100vw;
  background-color: ${palette.BACK_DEFAULT};
  color: ${palette.LINE};

  .about__section-wrapper {
    padding-left: 10%;
    padding-right: 15%;
    display: flex;
    position: relative;

    @media (max-width: 1024px) {
      flex-direction: column;
      height: fit-content;
    }

    * {
      font-family: Montserrat, sans-serif;
    }

    .about__section-contents {
      padding-top: 30%;
      z-index: 10;

      .about__section-contents__header {
        font-size: 15vw;
        letter-spacing: -1.8vw;
        margin-bottom: 6vh;

        @media (max-width: 1024px) {
          font-size: 15vw;
        }

        @media (max-width: 600px) {
          font-size: 20vw;
        }
      }

      .about__section-contents__main {
        display: flex;
        flex-direction: column;
        gap: 5vw;
      }
    }

    .about__section-contents__profile {
      position: absolute;
      width: 50%;
      top: 15%;
      right: 5%;

      @media (max-width: 1024px) {
        width: 75%;
        top: 3%;
        right: 0;
      }

      @media (max-width: 600px) {
        width: 100%;
        top: 5%;
        right: -15%;
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
        <figure className="about__section-contents__profile">
          <Img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/image_furium.jpg`}
            width={'100%'}
            objectFit="contain"
            aspect={'16/9'}
          />
        </figure>
        <section className="about__section-contents">
          <header className="about__section-contents__header">
            <h2>About Me</h2>
          </header>

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
