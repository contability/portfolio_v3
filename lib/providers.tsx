'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './registry';
import { palette } from '@styles/theme';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={palette}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
