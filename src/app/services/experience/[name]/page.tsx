'use client';

import { palette } from '@styles/theme';
import styled from 'styled-components';
import { projects, skillImageURL } from '../../../../public/projects';
import Img from '@component/image/Img';
import FirstMedia from '@component/services/experience/FirstMedia';
import { TbWorldWww } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SkillCard from '@component/services/experience/SkillCard';

const DetailWorkPageContainer = styled.article`
  height: 100%;
  width: 100vw;
  padding-left: 6%;
  padding-bottom: 5%;
  background-color: ${palette.BACK_BLACK};
  color: ${palette.LINE_WHITE};

  * {
    font-family: Montserrat, sans-serif;
  }

  .work-detail__section-wrapper {
    width: 89vw;
    background-color: ${palette.BACK_BLACK};
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
      width: 96vw;
    }

    * {
      font-family: Montserrat, sans-serif;
    }
  }

  .work-detail__section-title {
    text-transform: uppercase;
    font-size: 11vw;
    width: 100%;
    height: 95vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 10vh;
    background-color: ${palette.BACK_DEFAULT};
    color: ${palette.LINE};
    letter-spacing: -1vw;
    animation: slideDown 1s cubic-bezier(0.04, 0.48, 0.89, 0.19);

    @keyframes slideDown {
      from {
        transform: translate(0, -95vh);
      }

      to {
        transform: translate(0, 0);
      }
    }

    .work-detail__section-title__label {
      /* 총 3초 동안 실행되고 2초 지연 -> 1초 동안 페이드 인 되는 효과 */
      animation: 2s ease 0s normal forwards 1 fadeIn;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        66% {
          opacity: 0;
        }
        100% {
          opacity: 1;
          transform: translate3d(0px, -2vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
            skew(0deg, 0deg);
          transform-style: preserve-3d;
        }
      }
    }
  }

  .work-detail__section-summary {
    margin-top: 15vh;
    margin-bottom: 7vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;

    * {
      font-family: ‘SUIT’, sans-serif;
    }

    .work-detail__section-summary__header {
      max-width: 50%;
      margin-left: auto;
      margin-right: auto;
      font-size: 2.2vw;
      font-weight: 300;
      line-height: 1.3em;

      @media (min-width: 1700px) {
        font-size: 38px;
      }

      @media (max-width: 750px) {
        font-size: 4.5vw;
      }

      @media (max-width: 550px) {
        font-size: 6vw;
      }
    }

    .work-detail__section-summary__information {
      width: 50%;
      display: flex;
      justify-content: space-between;
      gap: 24px;

      @media (max-width: 1024px) {
        flex-direction: column;
      }

      .work-detail__section-summary__information-detail {
        max-width: 50%;

        @media (max-width: 1024px) {
          max-width: 100%;
        }

        p {
          &:first-child {
            text-decoration: underline;
            text-transform: uppercase;
            margin-bottom: 16px;
            font-weight: 500;
          }
        }

        ul {
          padding-left: 15px;
        }

        .responsibiility-contents {
          list-style-type: circle;
          margin-bottom: 2px;
        }

        .work-detail__section-summary__information-link {
          display: flex;
          gap: 6px;
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
    font-size: 1.5vw;
    font-weight: 300;

    @media (min-width: 1700px) {
      font-size: 25px;
    }

    @media (max-width: 1024px) {
      font-size: 2vw;
    }

    @media (max-width: 750px) {
      font-size: 2.8vw;
    }

    @media (max-width: 550px) {
      font-size: 4vw;
    }

    .work-detail__section-description__detail {
      max-width: 85%;
      margin-left: auto;
      margin-right: auto;
    }

    .work-detail__section-description__image {
      padding: 5% 0;
    }
  }

  @media (max-width: 600px) {
    padding: 0 5% 5% 2%;
  }
`;

const DetailWorkPage = ({ params }: { params: { name: string } }) => {
  const projectInfo = projects[params.name];
  const router = useRouter();

  const handleClick = (target: string) => {
    router.push(target);
  };

  return (
    <DetailWorkPageContainer className="scrollbar-hide">
      <div className="work-detail__section-wrapper">
        <section key="work-detail__section-title" className="work-detail__section-title">
          <h2 className="work-detail__section-title__label">{params.name}</h2>
        </section>
        <section key="work-detail__section-summary" className="work-detail__section-summary">
          <p className="work-detail__section-summary__header">{projectInfo.summary}</p>
          <div className="work-detail__section-summary__information">
            <div className="work-detail__section-summary__information-detail">
              <p>role</p>
              <p>{projectInfo.role}</p>
            </div>
            <div className="work-detail__section-summary__information-detail">
              <p>responsibility</p>
              <ul>
                {projectInfo.responsibility?.map((item, index) => (
                  <li
                    key={`work-detail__section-summary__information-detail__${index}`}
                    className="responsibiility-contents"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {projectInfo.link && (
              <div className="work-detail__section-summary__information-detail">
                <p>link</p>
                <div className="work-detail__section-summary__information-link">
                  {projectInfo.link?.url && (
                    <Link href={projectInfo.link?.url || ''} target="_blank">
                      <TbWorldWww size={30} />
                    </Link>
                  )}
                  {projectInfo.link?.git && (
                    <Link href={projectInfo.link?.git || ''} target="_blank">
                      <BsGithub size={30} />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
          <SkillCard skills={projectInfo.skills} />
        </section>
        <section key="work-detail__section-description" className="work-detail__section-description">
          <FirstMedia projectInfo={projectInfo} />
          {projectInfo.description.map((desc, descIndex) => {
            return descIndex < 3 ? (
              <p key={`project-description__${descIndex}`} className="work-detail__section-description__detail">
                {desc}
              </p>
            ) : (
              <></>
            );
          })}
          {projectInfo.images?.map((image, imageIndex) => {
            return imageIndex === 1 ? (
              <figure key={`project-image__${imageIndex}`} className="work-detail__section-description__image">
                <Img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/project/${image}`}
                  width={'75vw'}
                  objectFit="contain"
                  aspect={'16/9'}
                />
              </figure>
            ) : (
              <></>
            );
          })}
          {projectInfo.description.map((desc, descIndex) => {
            return descIndex > 2 && descIndex < 6 ? (
              <p key={`project-description__${descIndex}`} className="work-detail__section-description__detail">
                {desc}
              </p>
            ) : (
              <></>
            );
          })}
          {projectInfo.images?.map((image, imageIndex) => {
            return imageIndex === 2 ? (
              <div key={`project-image__${imageIndex}`} className="work-detail__section-description__image">
                <Img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/project/${image}`}
                  width={'75vw'}
                  objectFit="contain"
                  aspect={'16/9'}
                />
              </div>
            ) : (
              <></>
            );
          })}
          {projectInfo.description.map((desc, descIndex) => {
            return descIndex > 5 ? (
              <p key={`project-description__${descIndex}`} className="work-detail__section-description__detail">
                {desc}
              </p>
            ) : (
              <></>
            );
          })}
          {projectInfo.images?.map((image, imageIndex) => {
            return imageIndex > 2 ? (
              <figure key={`project-image__${imageIndex}`} className="work-detail__section-description__image">
                <Img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/project/${image}`}
                  width={'75vw'}
                  objectFit="contain"
                  aspect={'16/9'}
                />
              </figure>
            ) : (
              <></>
            );
          })}
        </section>
      </div>
    </DetailWorkPageContainer>
  );
};

export default DetailWorkPage;
