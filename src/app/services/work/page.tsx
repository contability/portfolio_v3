'use client';

import SectionDesc from '@component/layout/section/SectionDesc';
import SectionNav from '@component/layout/section/SectionNav';
import { palette } from '@styles/theme';
import styled from 'styled-components';

const WorkPageContainer = styled.article`
  height: 100vh;
  width: 100vw;
  background-color: ${palette.BACK_BLACK};
  color: ${palette.LINE_WHITE};

  .work__section-wrapper {
    padding-left: 10%;
    display: flex;

    @media (max-width: 1024px) {
      flex-direction: column;
      height: fit-content;
    }

    * {
      font-family: Montserrat, sans-serif;
    }
  }

  @media (max-width: 600px) {
    padding: 0 5% 0 2%;
  }
`;

const WorkPage = () => {
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
          items={[
            { label: 'KWORKS', href: '/services/work/kworks', itemDesc: 'GIS PROJECT' },
            { label: 'KWORKS', href: '/services/work/kworks', itemDesc: 'GIS PROJECT' },
            { label: 'KWORKS', href: '/services/work/kworks', itemDesc: 'GIS PROJECT' },
          ]}
        />
      </div>
    </WorkPageContainer>
  );
};

export default WorkPage;
