'use client';

import { palette } from '@styles/theme';
import React from 'react';
import { styled } from 'styled-components';

const TransitionBackgroundContainer = styled.div<{ $theme: ThemeProps }>`
  position: absolute;
  background-color: ${({ $theme }) => $theme.BACKGROUND};
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const TransitionBackground = ({ theme }: { theme: 'dark' | 'warm' }) => {
  const colorPalette =
    theme === 'dark'
      ? {
          LINE: palette.LINE_WHITE,
          BACKGROUND: palette.FONT_BLACK,
        }
      : {
          LINE: palette.LINE,
          BACKGROUND: palette.BACK_DEFAULT,
        };
  return <TransitionBackgroundContainer $theme={colorPalette} />;
};

export default React.memo(TransitionBackground);
