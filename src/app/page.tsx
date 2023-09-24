'use client';

import React from 'react';
import { styled } from 'styled-components';
import { toRem } from '../styles/utils';
import { palette } from '@styles/theme';
import Img from '@component/image/Img';

const Container = styled.main`
  background-color: ${palette['Back-Default']};
  color: ${palette.Line};
  width: 100vw;
  height: 100vh;
  text-transform: uppercase;

  .main-wrapper {
    padding: ${toRem('20px')};
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${palette.Line};
    padding-bottom: ${toRem('10px')};
    font-size: ${toRem('20px')};
    font-weight: 500;
  }

  article {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${toRem('20px')};
    padding: 20px;

    .main__first-section {
      width: 100%;
      display: flex;
      gap: 5%;

      .main__first-label {
        font-size: ${toRem('20px')};
        align-self: self-end;
        width: ${toRem('240px')};
        padding-bottom: ${toRem('50px')};
      }

      .main__title-label {
        position: relative;
        width: 80%;
        font-size: 10vmax;

        *:not(.main__title-label-small p) {
          font-family: 'Abril Fatface';
        }

        div {
          display: flex;
          justify-content: space-between;

          .main__title-label-small {
            width: 100%;
            font-size: ${toRem('20px')};
            align-self: self-end;
            display: flex;
            flex-direction: column;
            padding-left: ${toRem('150px')};
          }
        }

        > p {
          text-align: right;
        }
      }
    }

    .main__second-section {
      width: 100%;
      padding-left: ${toRem('100px')};
      padding-right: ${toRem('100px')};
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: end;
      gap: ${toRem('50px')};
      white-space: nowrap;

      p:first-child {
        font-size: ${toRem('130px')};
        font-weight: 100;
      }

      p:last-child {
        height: ${toRem('130px')};
        font-size: ${toRem('26px')};
      }
    }

    .main__third-section {
      font-size: 10vmax;
      display: flex;
      justify-content: space-between;

      * {
        font-family: 'Bebas Neue';
      }

      div {
        width: 50%;
        filter: grayscale(1);
      }
    }
  }
`;

const RootPage = () => {
  return (
    <Container>
      <div className="main-wrapper">
        <header>
          <h2>furium</h2>
          <h2>contact me</h2>
        </header>
        <article>
          <section className="main__first-section">
            <div className="main__first-label">
              <p>working as a developer since 2020.04.</p>
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
                // width={837}
                height={238}
                aspect={'16/9'}
              />
            </div>
          </section>
        </article>
      </div>
    </Container>
  );
};

RootPage.layout = 'default';

export default RootPage;
