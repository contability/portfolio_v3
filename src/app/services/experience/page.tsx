'use client';

import SectionNav from '@component/layout/section/SectionNav';
import { palette } from '@styles/theme';
import styled from 'styled-components';
import { projects } from '../../../public/projects';
import SectionDesc from '@component/layout/section/SectionDesc';

const ExperiencePageContainer = styled.article`
  height: 100vh;
  width: 100vw;
  background-color: ${palette.BACK_BLACK};
  color: ${palette.LINE_WHITE};
  overflow: hidden;
  position: relative;

  .work__section-wrapper {
    position: absolute;
    padding-left: 10%;
    width: 100%;
    display: flex;
    z-index: 5;

    @media (max-width: 1024px) {
      flex-direction: column;
      height: fit-content;
      overflow: auto;
    }

    * {
      font-family: Montserrat, sans-serif;
    }

    .work__section-nav {
      /* width: 100%; */
      /* padding: 50vh 3% 0 3%;
      height: 50vh;

      display: flex;
      align-items: center;
      justify-content: center; */
      /* position: relative; */
    }
  }

  @media (max-width: 1024px) {
    overflow: auto;
    padding: 0 5% 5% 2%;
  }

  @media (max-width: 600px) {
  }
`;

const ExperiencePage = () => {
  const projectItems = Object.keys(projects).reduce(
    (
      acc: Array<{
        label: string;
        href: string;
        itemDesc?: string;
      }>,
      item,
    ) => {
      return [...acc, { label: item, href: `/services/experience/${item}`, itemDesc: projects[item].title }];
    },
    [] as Array<{
      label: string;
      href: string;
      itemDesc?: string;
    }>,
  );

  return (
    <ExperiencePageContainer>
      <div className="work__section-wrapper">
        <SectionDesc
          descriptionHeader="EXPERIENCE"
          descriptions={[
            'This is a list of projects that represent my development career.',
            'The world of development is evolving even at this moment, and my role has been no different over the past three years.',
            'I am still learning and acquiring new technologies even now.',
          ]}
        />
        <div className="work__section-nav">
          <SectionNav items={projectItems} />
        </div>
      </div>
    </ExperiencePageContainer>
  );
};

export default ExperiencePage;
