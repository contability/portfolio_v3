'use client';

import SectionDesc from '@component/layout/section/SectionDesc';
import SectionNav from '@component/layout/section/SectionNav';
import { monoPalette } from '@styles/theme';
import styled from 'styled-components';

const WorkPageContainer = styled.article`
  height: 100vh;
  width: 100vw;
  background-color: ${monoPalette.BACK_DEFAULT};
  color: ${monoPalette.LINE};

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
            'This is a showcase of my best work in a variety of fields including Graphic and Web Design, No-Code Development, Product Design and Product Management.',
            'The world of digital design and development is constantly evolving and so has my role over the last 15 years. I’m still learning and gaining new skills every day.',
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
