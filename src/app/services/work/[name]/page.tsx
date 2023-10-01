'use client';

import { palette } from '@styles/theme';
import styled from 'styled-components';
import { projects } from '../../../../public/projects';
import Img from '@component/image/Img';

const DetailWorkPageContainer = styled.article`
  height: 100%;
  width: 100vw;
  padding-left: 6%;
  background-color: ${palette.BACK_BLACK};
  color: ${palette.LINE_WHITE};

  * {
    font-family: Montserrat, sans-serif;
  }

  .work-detail__section-wrapper {
    /* padding-left: 4%; */
    width: 90vw;
    height: 100vh;
    background-color: ${palette.BACK_BLACK};
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
      height: fit-content;
      width: 90vw;
    }

    * {
      font-family: Montserrat, sans-serif;
    }
  }

  .work-detail__section-title {
    text-transform: uppercase;
    font-size: 11vw;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 10vh;
    background-color: ${palette.BACK_DEFAULT};
    color: ${palette.LINE};
  }

  .work-detail__section-summary {
    margin-top: 15vh;
    margin-bottom: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;

    .work-detail__section-summary__header {
      max-width: 50%;
      margin-left: auto;
      margin-right: auto;
      font-size: 50px;
      font-weight: 300;
      line-height: 1.3em;
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
    }

    .work-detail__section-summary__information {
      width: 50%;
      display: flex;
      justify-content: space-between;

      .work-detail__section-summary__information-detail {
        max-width: 50%;

        p:first-child {
          text-decoration: underline;
          text-transform: uppercase;
          margin-bottom: 16px;
          font-weight: 500;
        }
      }
    }
  }

  .work-detail__section-description {
    max-width: 90%;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 13px;
  }

  @media (max-width: 600px) {
    padding: 0 5% 0 2%;
  }
`;

const DetailWorkPage = ({ params }: { params: { name: string } }) => {
  const projectInfo = projects[params.name];
  return (
    <DetailWorkPageContainer>
      <div className="work-detail__section-wrapper">
        <section className="work-detail__section-title">{params.name}</section>
        <section className="work-detail__section-summary">
          <p className="work-detail__section-summary__header">{projectInfo.summary}</p>
          <div className="work-detail__section-summary__information">
            <div className="work-detail__section-summary__information-detail">
              <p>role</p>
              <p>{projectInfo.role}</p>
            </div>
            <div className="work-detail__section-summary__information-detail">
              <p>responsibility</p>
              <p>{projectInfo.responsibility}</p>
            </div>
            {projectInfo.url && (
              <div className="work-detail__section-summary__information-detail">
                <p>url</p>
                <p>{projectInfo.url || ''}</p>
              </div>
            )}
          </div>
        </section>
        <section className="work-detail__section-description">
          <Img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/project/image_projects_1_1.jpg`}
            width={'75vw'}
            objectFit="contain"
            aspect={'16/9'}
          />
          {projectInfo.description.map((desc, descIndex) => {
            return descIndex < 3 ? <p key={`project-description__${descIndex}`}>{desc}</p> : <></>;
          })}
          <Img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/project/image_projects_1_2.jpg`}
            width={'75vw'}
            objectFit="contain"
            aspect={'16/9'}
          />
          {projectInfo.description.map((desc, descIndex) => {
            return descIndex > 2 && descIndex < 6 ? <p key={`project-description__${descIndex}`}>{desc}</p> : <></>;
          })}
          <Img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/project/image_projects_1_3.png`}
            width={'75vw'}
            objectFit="contain"
            aspect={'16/9'}
          />
        </section>
      </div>
    </DetailWorkPageContainer>
  );
};

export default DetailWorkPage;
