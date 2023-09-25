'use client';

import { ThemeProvider } from 'styled-components';

import { palette } from '@/styles/theme';

import StyledComponentsRegistry from './registry';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={palette}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
