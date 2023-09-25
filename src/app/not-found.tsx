'use client';

import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { palette } from '@/styles/theme';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-weight: 500;
  background-color: ${palette.BACK_DEFAULT};
  color: ${palette.LINE};

  header {
    font-size: 70px;
    /* color: ${palette.FONT_BLACK}; */

    @media (max-width: 834px) {
      font-size: 40px;
    }
  }

  main {
    margin-top: 16px;
    font-size: 16px;
    display: flex;
    /* color: ${palette.FONT_BLACK}; */
    flex-direction: column;
    align-items: center;
  }

  footer {
    button {
      margin-top: 32px;
      padding: 0 30px 0 30px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${palette.LINE};
      border-radius: 8px;
      color: ${palette.FONT_WHITE};
      font-weight: 700;
      font-size: 14px;

      &:hover {
        background-color: ${palette.LINE_BTN};
      }
    }
  }
`;

const NotFound = () => {
  const router = useRouter();

  const fallback = () => {
    router.push('/');
  };

  return (
    <NotFoundContainer>
      {/* <header>⚠️</header> */}
      <main>
        <p>존재하지 않는 주소를 입력하셨습니다.&nbsp;</p>
      </main>
      <footer>
        <button onClick={fallback}>GO HOME</button>
      </footer>
    </NotFoundContainer>
  );
};

export default NotFound;
