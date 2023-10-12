'use client';

import { palette } from '@styles/theme';
import styled from 'styled-components';
import Img from '@component/image/Img';

const AboutMePageContainer = styled.article`
  width: 100vw;
  min-height: 100vh;
  background-color: ${palette.BACK_DEFAULT};
  color: ${palette.LINE};
  padding-bottom: 5%;

  .about__section-wrapper {
    padding-left: 10%;
    padding-right: 13%;
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
        gap: 3vw;
        font-size: 16px;

        .about__section-contents__bold {
          font-size: 26px;
          font-weight: 600;
        }
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
          {/* <div className="about__section-contents__main">
            {aboutMe.map((item, itemIndex) => (
              <Card key={`introduce-${itemIndex}`} title={item.title} content={item.content} />
            ))}
          </div> */}
          <div className="about__section-contents__main">
            <h2 className="about__section-contents__bold">저는 프론트앤드 개발자 정신형입니다.</h2>
            {/* <p>
              사용자에게 직접적으로 편안한 UI를 제공한다는 부분에 매료 되었고 CSS를 통한 사이트 디자인 구현, 백앤드와의
              협업으로 가져온 데이터를 파싱하고 가공 그리고 표현하기 위한 각종 라이브러리 등을 시도하는 것은 저에게
              즐거움입니다.
            </p> */}
            <p>
              지금까지 spring-framework를 다루는 full stack 개발을 시작으로 사용자 인터페이스 작업, 비즈니스 로직 구현,
              다국어처리, 액세스 권한 제어 등 FE 스킬과 인프라 구축까지 많은 것들을 시도해 보았습니다. 크든 작든 제가
              해왔던 일들은 모두 지금의 저를 있게 한 중요한 경험들입니다.
            </p>
            <p>
              프론트앤드 개발자로서 가장 매력적인 부분은 실제 문제를 해결할 수 있는, 거기에 아름다운 디자인을 구현할 수
              있다는 점입니다. 웹 사이트를 구현하는 것을 넘어 사용자들이 더 나은 서비스를 이용할 수 있도록 도움이 되는
              경험과 솔루션을 만드는데 열정을 쏟아야 합니다. 사용자 인사이트에 기대어 니즈를 이해하고, 해결해야 할
              문제를 찾고, 가능한 한 빨리 솔루션을 제공하며 이를 통해 학습하고, 시간이 지남에 따라 그 가치를 반복하고
              개선하는 것이 훌륭한 프론트 개발자의 핵심이라고 생각합니다.
            </p>
            <p>
              저는 그저 예쁜 것을 만들기 위해 일하고 싶지는 않습니다. 진정성 있고 의미 있고 세상에 영향을 미칠 수 있는
              아이디어를 만들고 구현하고 싶습니다.
            </p>
            <div>
              <h3 className="about__section-contents__bold mb-[20px]">경험</h3>
              <ul>
                <li>- vanilla.js & jQuery 2년</li>
                <li>- react.js & next.js 1년</li>
                <li>- typescript 1년</li>
              </ul>
            </div>
            <div>
              <h3 className="about__section-contents__bold mb-[20px]">스킬</h3>
              <p>
                UI/UX 구현 / git-flow / 애자일 방법론 / 협업 / HTML 및 CSS / 액세스 제어 / 인프라 구축 / 테스트 코드 /
                SSR / ...
              </p>
            </div>
            <div>
              이 포트폴리오에 대한 상세는 github 레포지토리에서 확인 가능하며 전반적인 내용과 git flow, 페이지 구조,
              실행 방법과 컨벤션을 포함합니다.
            </div>
          </div>
        </section>
      </div>
    </AboutMePageContainer>
  );
};

export default AboutMePage;
