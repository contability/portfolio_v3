'use client';

import React from 'react';

import Link from 'next/link';
import { styled } from 'styled-components';
import { toRem } from '../styles/utils';
import { palette } from '@styles/theme';
import Img from '@component/image/Img';

const Container = styled.main`
  background-color: ${palette.BACK_DEFAULT};
  color: ${palette.LINE};
  width: 100vw;
  height: 100vh;
  text-transform: uppercase;

  .main-wrapper {
    padding: 20px;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${palette.LINE};
    font-size: 1vw;
    font-weight: 500;

    a {
      margin: 0 1% 1% 1%;
      color: ${palette.LINE};

      &:hover {
        text-decoration: line-through;
      }
    }
  }

  article {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10%;
    padding-top: 20px;

    .main__first-section {
      width: 100%;
      display: flex;
      gap: 5%;

      .main__first-label {
        font-size: 0.7vw;
        align-self: self-end;
        width: 10%;
        max-height: 25vw;
        padding-bottom: ${toRem('50px')};
        text-align: right;

        div {
          display: flex;
        }
      }

      .main__title-label {
        position: relative;
        width: 80%;
        font-size: 8vw;

        *:not(.main__title-label-small p) {
          font-family: 'Abril Fatface';
        }

        div {
          display: flex;
          justify-content: space-between;

          .main__title-label-small {
            width: 100%;
            font-size: 0.7vw;
            align-self: self-end;
            display: flex;
            flex-direction: column;
            padding-left: 10%;
          }
        }

        > p {
          text-align: right;
          line-height: 66%;
        }
      }
    }

    .main__second-section {
      width: 100%;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: end;
      gap: ${toRem('50px')};
      white-space: nowrap;
      padding-top: 2%;

      p:first-child {
        font-size: 6vw;
        font-weight: 100;
      }

      p:last-child {
        font-size: 1vw;
      }
    }

    .main__third-section {
      font-size: 8vw;
      display: flex;

      justify-content: space-between;
      align-items: center;

      * {
        font-family: 'Bebas Neue';
      }

      div {
        width: 50%;
        filter: grayscale(1);
        box-shadow:
          0px 1px 2px 0px rgba(0, 0, 0, 0.05),
          0px 1px 3px 1px rgba(0, 0, 0, 0.1);

        img {
          border-radius: 2px;
        }
      }

      @media (max-width: 1024px) {
        flex-direction: column;

        div {
          width: 100%;
        }
      }
    }
  }
`;

const RootPage = () => {
  return (
    <Container>
      <div className="main-wrapper">
        <header>
          <Link href="/">furium</Link>
          <Link href="/">contact me</Link>
        </header>
        <article>
          <section className="main__first-section">
            <div className="main__first-label">
              <div>
                <Img
                  filterColor={palette.LINE}
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/image_flare.svg`}
                  size={'1.5vw'}
                />
                working as a developer since 2020.04.
              </div>
            </div>
            <div className="main__title-label">
              <div>
                <p>creative</p>
                <div className="main__title-label-small">
                  <p>front-end</p>
                  <p>ui/ux</p>
                  <p>publishing</p>
                  <p>cooperation</p>
                </div>
              </div>
              <p>developer</p>
            </div>
          </section>
          <section className="main__second-section">
            <p>/</p>
            {/* <p>
              저는 서울에 거주하는 프론트엔드 개발자입니다 <br />
              프로젝트를 성공적으로 완료하기 위해 <br />
              힘을 합치는 것을 중요하게 여기며 <br />
              끊임없이 학습하고 발전하는 것을 즐깁니다 <br />
            </p> */}
            <p>
              I am a front-end developer living in Seoul <br />
              I believe in working together to successfully complete projects <br />I enjoy constantly learning and
              developing
            </p>
          </section>
          <section className="main__third-section">
            <p>COOPERATION</p>
            <div>
              <Img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/image_main.jpg`}
                width={'100%'}
                height={'12vh'}
                aspect={'16/9'}
              />
            </div>
          </section>
        </article>
      </div>
    </Container>
  );
};

RootPage.layout = 'abc';

export default RootPage;
