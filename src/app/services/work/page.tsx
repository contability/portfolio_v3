'use client';

import SectionNav from '@component/layout/section/SectionNav';
import { palette } from '@styles/theme';
import styled from 'styled-components';
import { projects } from '../../../public/projects';
import SectionDesc from '@component/layout/section/SectionDesc';

const WorkPageContainer = styled.article`
  height: 100vh;
  width: 100vw;
  background-color: ${palette.BACK_BLACK};
  color: ${palette.LINE_WHITE};
  overflow: hidden;

  .work__section-wrapper {
    padding-left: 10%;
    display: flex;

    @media (max-width: 1024px) {
      flex-direction: column;
      height: fit-content;
      overflow: auto;
    }

    * {
      font-family: Montserrat, sans-serif;
    }
  }

  @media (max-width: 1024px) {
    overflow: auto;
    padding: 0 5% 5% 2%;
  }

  @media (max-width: 600px) {
  }
`;

const WorkPage = () => {
  // let projectItems = Object.keys(projects).map(item => {
  //   if (projectItems)
  //     return [...projectItems, { label: item, href: `/services/work/${item}`, itemDesc: projects[item].title }];
  //   return [{ label: item, href: `/services/work/${item}`, itemDesc: projects[item].title }];
  // });
  const projectItems = Object.keys(projects).reduce(
    (
      acc: Array<{
        label: string;
        href: string;
        itemDesc?: string;
      }>,
      item,
    ) => {
      return [...acc, { label: item, href: `/services/work/${item}`, itemDesc: projects[item].title }];
    },
    [] as Array<{
      label: string;
      href: string;
      itemDesc?: string;
    }>,
  );

  return (
    <WorkPageContainer>
      <div className="work__section-wrapper">
        <SectionDesc
          descriptionHeader="WORK"
          descriptions={[
            'This is a list of projects that represent my development career.',
            'The world of development is evolving even at this moment, and my role has been no different over the past three years.',
            'I am still learning and acquiring new technologies even now.',
          ]}
        />
        <SectionNav
          items={projectItems}
          // items={[
          //   { label: 'KWORKS', href: '/services/work/kworks', itemDesc: 'GIS PROJECT' },
          //   { label: 'KWORKS', href: '/services/work/kworks', itemDesc: 'GIS PROJECT' },
          //   { label: 'KWORKS', href: '/services/work/kworks', itemDesc: 'GIS PROJECT' },
          // ]}
        />
      </div>
    </WorkPageContainer>
  );
};

export default WorkPage;
