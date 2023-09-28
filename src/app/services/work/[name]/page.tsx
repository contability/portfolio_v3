'use client';

import { palette } from '@styles/theme';
import styled from 'styled-components';

const DetailWorkPageContainer = styled.article`
  height: 100vh;
  width: 100vw;
  padding-left: 6%;
  background-color: ${palette.BACK_BLACK};
  color: ${palette.LINE_WHITE};

  .work-detail__section-wrapper {
    background-color: ${palette.BACK_DEFAULT};
    color: ${palette.LINE};
    padding-left: 4%;
    width: 90vw;
    height: 95vh;
    display: flex;

    @media (max-width: 1024px) {
      flex-direction: column;
      height: fit-content;
      width: 90vw;
      height: 95vh;
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
  }

  @media (max-width: 600px) {
    padding: 0 5% 0 2%;
  }
`;

const DetailWorkPage = ({ params }: { params: { name: string } }) => {
  return (
    <DetailWorkPageContainer>
      <div className="work-detail__section-wrapper">
        <section className="work-detail__section-title">{params.name}</section>
      </div>
    </DetailWorkPageContainer>
  );
};

export default DetailWorkPage;
